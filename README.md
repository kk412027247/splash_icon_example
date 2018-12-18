# Fix android compile bug



**android/build.gradle**
```
// Top-level build file where you can add configuration options common to all sub-projects/modules.

buildscript {
    repositories {
        jcenter()
        google()
        maven {
            url 'https://maven.google.com/'
            name 'Google'
        }
    }
    dependencies {
        classpath 'com.android.tools.build:gradle:3.1.3'

        // NOTE: Do not place your application dependencies here; they belong
        // in the individual module build.gradle files
    }
}

allprojects {
    repositories {
        mavenLocal()
        jcenter()
        google()
        maven {
            // All of React Native (JS, Obj-C sources, Android binaries) is installed from npm
            url "$rootDir/../node_modules/react-native/android"
        }
        maven {
            url 'https://maven.google.com/'
            name 'Google'
        }
    }
}

ext {
    buildToolsVersion = "26.0.3"
    minSdkVersion = 16
    compileSdkVersion = 26
    targetSdkVersion = 26
    supportLibVersion = "26.1.0"
}

subprojects {

 project.configurations.all {
    resolutionStrategy.eachDependency { details ->
       if (details.requested.group == 'com.android.support'
              && !details.requested.name.contains('multidex') ) {
           details.useVersion "26.1.0"
        }
     }
  }

  afterEvaluate {project ->
      if (project.hasProperty("android")) {
          android {
              compileSdkVersion rootProject.ext.compileSdkVersion
              defaultConfig {
                  targetSdkVersion rootProject.ext.targetSdkVersion
              }
          }
      }
  }
}

```

**android/gradle/wrapper/gradle-wrapper.properties**
```
distributionUrl=https\://services.gradle.org/distributions/gradle-4.4-all.zip
```

**android/app/build.gradle**
```
android{
  compileSdkVersion rootProject.ext.compileSdkVersion
  buildToolsVersion rootProject.ext.buildToolsVersion
    defaultConfig{
      
      minSdkVersion rootProject.ext.minSdkVersion
      targetSdkVersion rootProject.ext.targetSdkVersion  
      .....
    }
  .....
}

```

**ADDITION**
If your project has other android package like react-native-image-picker,  when you run `./gradlew assembleRelease`, you probably get a error `AAPT: resource android:attr/colorError not found.`
In order to fix this, you should make sure the compile version of the package match to your project.
The  following code do this work.
```
    afterEvaluate {project ->
        if (project.hasProperty("android")) {
            android {
                compileSdkVersion rootProject.ext.compileSdkVersion
                defaultConfig {
                    targetSdkVersion rootProject.ext.targetSdkVersion
                }
            }
        }
    }
```

**MORE**
If you get a error : uncompiled PNG file passed as argument. Must be compiled first into .flat file.. error: failed parsing overlays.

modify `./android/gradle.properties`, add the following code.
```
android.enableAapt2=false
```
