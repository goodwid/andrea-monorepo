# Cordova script folder for Alchemy Code Lab applications

### global npm dependencies
- cordova
- cordova-icon
- cordova-splash

`npm i -g cordova cordova-icon cordova-splash`

custom scripts:

zipalign: finds and runs zipalign in ANDROID_HOME
update-version: Reminder for user to be sure version was updated in config.xml
cordovaBuild: initiates a webpack build, hooked into Cordova's build process
cordova-setup-check: confirms that the tools needed to build are present
install-*:  Wrapper scripts for npm apps `cordova-icon` and `cordova-splash`
