## __**REACT + CORDOVA**__

**1/ Créer un projet React**

```bash
npx create-react-app nomdelapp
```

**2/ Debug React si besoin**
`'React' must be in scope when using JSX` -> ajoutez `import React, { Component }  from 'react';` au fichier
Si votre IDE fait n'importe quoi avec la mise en page, renommez les .js en .jsx

**3/ Fusionner avec Cordova**
https://www.youtube.com/watch?v=SdSg0leeGaM

## __**CORDOVA**__

**1 / Installer tout ce bordel**

```txt
Android Studio 2021.3.1.16
Java JDK 11.0.16
Gradle 7.4.2
SDK Platform Android 11.0 (Api Level 30) -> S'installe depuis Android Studio
Android SDK Tools (Obsolete) -> Se trouve dans SDK Tool d'Android Studio
Android SDK Build Tools 30.0.3 -> Se trouve dans SDK Tool d'Android Studio
```

**2/ Modifier l'env**

```bash
export JAVA_HOME=/usr/lib/jvm/java-11-openjdk-amd64
export PATH=$PATH:$JAVA_HOME/bin 
export ANDROID_HOME=$HOME/Android/Sdk
export ANDROID_SDK_ROOT=$HOME/Android/Sdk
export PATH=$PATH:$ANDROID_SDK_ROOT/platform-tools/
export PATH=$PATH:$ANDROID_SDK_ROOT/cmdline-tools/latest/bin/
export PATH=$PATH:$ANDROID_SDK_ROOT/emulator/
export PATH=$PATH:$ANDROID_HOME/tools
```

Mettez ça dans le ~/.zshrc pour que ça soit toujours valide.
Changez la version de Java au besoin pour matcher ce que vous avez sur votre poste.

**3/ Construire l'app**

```cpp
npm run build
cordova build android
```

**3.5/ Lancer le projet**

> React

```bash
npm start
```

> Android (on peut aussi passer par Android Studio si l'emulateur ne fonctionne pas, ou simplement installer l'apk sur son tel)

```bash
cordova emulate android
```
