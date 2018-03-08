# MERN Boilerplate

## Build & Run

This is a boilerplate for rapid application development using MongoDB, Express, React and NodeJS. It also uses the following dependencies to make your application better:

- Bootstrap and Reactstrap
- Fontawesome
- Mongoose
- React router V4
- ESLint

### Build Project

```javascript
  npm install
  npm run webpack
```

### Start Project

```javascript
  npm start
```

## Prerequisites

- Create an .env file with your MongoDB url and other environmental variables.

```
  DB_HOST=mongodb://localhost:27017/test
```

## FAQ

### Where can I change the default port?

Go to bin/www and change the port variable

```javascript
  var port = process.env.PORT || YOUR_PREFERENCE_PORT
```

### How can I change ESLint configuration

Add your custom configuration in the file .eslintrc.js

### How to deploy to Heroku?

1. Add to the Procfile your custom starting script

```javascript
  web: node bin/www
```

2. Add your Heroku remote

```
  heroku git:remote -a heroku_app_name
```

3. Push to Heroku

```
  git push heroku master
```

4. Add environmental variable to Heroku

```
  heroku config:set DB_HOST=mongodb://localhost:27017/test
```
