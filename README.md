# { EPITECH } | Third year | Web | Mobile | Rest API | AREA


## Description

The purpose of this project is to discover the software platform that we chose through the creation of a business application.<br />
To do this, we had to implement a software suite that functions similar to that of IFTTT or Zapier.<br />

- `This software suite will be broken into three parts:`
    * An application server to implement all the features of our dashboard (actions and reactions).
    * A web client to use the application from a browser by querying the application server
    * A mobile client to use the application from your phone by querying the application server

- `The application offers the following functionalities:`
    * The user can register and login on the application by creating an account or using Google OAuth2 (user management, authentification)
    * The application then asks the authenticated user to subscribe to services
    * Each service is composed of an Action and a Reaction component, that can be triggered by time, weather or notification triggers

- `Tools:`
    * The frontend is made with Reactjs version 18
    * the Backend is made with Ruby on Rails (RoR) version 
    * PostgresSQL is used to handle the database
    * a docker-compose is provided to launch the database and backend 

- `Requirements:`
    * Docker version 20
    * the `docker-compose` command

## Usage
### How to launch the database and backend :

```
$ docker-compose up --build
```

### Web version :

Open `http://localhost:8081` and create an account to access all our functionalities.

### Mobile version :

Our project is only compatible with Android devices. You can launch our mobile version two ways :

#### Get the APK
    * Open http://localhost:8081/client.apk
    * Download the .apk file
    * Put it on your phone and launch the app
If you want to create the apk without going on the web version, you can also use our script located at the root of the repository : 
```bash
./create_apk.sh
```
#### Emulate the app
```bash
cordova emulate android
```
If the built-in emulator doesn't work, you can use Android Studio to emulate the app

### Check the database

If you ever encounter an issue with the database, here are some useful commands that could help
```bash
$ docker-compose run server bash
$ bash-5.1# bundle install
$ bash-5.1# rails db:drop db:setup
$ bash-5.1# exit
$ docker-compose up --build
```

### Contributors

Frontend team : [Solène](https://github.com/slefeu) and [Arthur](https://github.com/ArthurTakase)<br />
Backend team : [Corentin](https://github.com/roy-corentin) and [Geoffrey](https://github.com/GeoffreyLabruyere)<br />
Dockerization : [Théau](https://github.com/Theau-Grs)
