# InstaSearch

## Creative Component

For this project I added a quick search button in every history record and for every hastag in the result so that the user can just click it and make a search with it as a primary hashtag, also the user has a spinner to indicate that the search is being loaded every time the search is in process of completition.

## Build & Run

This is a web app that given a Instagram hashtag finds the 5 other hashtags that appear more often with the given hashtag in a photo, it uses: 

- Bootstrap and Reactstrap
- Fontawesome
- Mongoose
- React router V4
- ESLint

See live [demo](https://instasearch-web.herokuapp.com/)

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
