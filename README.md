# splash_icon_example

If you get a error : ` uncompiled PNG file passed as argument. Must be compiled first into .flat file.. error: failed parsing overlays.`

modify `./android/gradle.properties`, add the following code.  
```
android.enableAapt2=false
```
