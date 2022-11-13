## __**AREA**__

### Description

- Area project is an API dashboard with actions and reaction.

### Requirements

- docker
- docker compose

## Usage

Clone it!

```
$ git clone git@github.com:Le-feu-de-camp/Area-Front.git
```

Go into the project directory and run the command:

```
$ docker-compose up --build
```

Open `http://localhost:8081` and enjoy!

## Android 
- on peut aussi passer par Android Studio si l'emulateur ne fonctionne pas, ou simplement installer l'apk sur son tel

```bash
cordova emulate android
```

### Check data base

```bash
$ docker-compose run server bash
$ bash-5.1# bundle install
$ bash-5.1# rails db:drop db:setup
$ bash-5.1# exit
$ docker-compose up --build
```

### Frontend

- Frontend is made with Reactjs version 18

### Backend

- Backend is made with Ruby On Rails with postgresSQL as data base

### Contributors

- https://github.com/slefeu
- https://github.com/roy-corentin
- https://github.com/ArthurTakase
- https://github.com/GeoffreyLabruyere
- https://github.com/Theau-Grs

