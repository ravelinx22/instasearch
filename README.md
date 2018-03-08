# MERN Boilerplate

## Build & Run

This is a boilerplate for rapid application development using MongoDB, Express, React and NodeJS. It also uses the following dependencies to make your application better:

- Bootstrap and Reactstrap
- Fontawesome
- Mongoose
- React router V4

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
  DB_HOST=mongodb://localhost:27017/prueba_posi
```

## FAQ

### Where can I change the default port?

Go to bin/www and change the port variable

``javascript
  var port = process.env.PORT || YOUR_PREFERENCE_PORT
```
