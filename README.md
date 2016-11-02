# Lead Manager API

A [Sails](http://sailsjs.org) application.

This is the Lead Manager API from Tagon8.
That project takes care of manage campaigns and leads.

---

## Shipping

### Dependencies

- [Node.js](https://nodejs.org)
- [MongoDB](https://www.mongodb.com/)

### Running

```
$ npm install
$ sails lift
```

## JSON API

### **/Users**

#### Creating a new user (You need to be an admin)

```javascript
/**
* POST /register
**/

{
  'name': 'Jonas Renkse',
  'email': 'jonas@katatonia.com',
  'password': 'bravemurderday',
  'confirmPassword': 'bravemurderday'
}
```
**Response**

```javascript
/**
* Status 201
**/

{
  'user': {
    'name': 'Jonas Renkse',
    'email': 'jonas@katatonia.com',
    'password': 'bravemurderday',
    'confirmPassword': 'bravemurderday',
    'id': '5744ad1080c469a43d4d07c5'
  },
  'token' : 'df90g0f9g8d09sfg8dfs9g0dsf8g0d9sf8g80d9fg8d0f9sg8d0sf9g8d0sf9g8'
}
```

#### Request own user


```
GET /me
```
**Response**

```javascript
/**
* Status 200
**/

{
  'user': {
    'name': 'Jonas Renkse',
    'email': 'jonas@katatonia.com',
    'password': 'bravemurderday',
    'confirmPassword': 'bravemurderday',
    'id': '5744ad1080c469a43d4d07c5'
  }
}
```


### **/Auth**

#### Request JWT token


```javascript
/**
* POST /login
**/

{
  'email': 'jonas@katatonia.com',
  'password': 'bravemurderday',
}
```
**Response**

```javascript
/**
* Status 200
**/

{
  'user': {
    'name': 'Jonas Renkse',
    'email': 'jonas@katatonia.com',
    'password': 'bravemurderday',
    'confirmPassword': 'bravemurderday',
    'id': '5744ad1080c469a43d4d07c5'
  },
  'token' : 'df90g0f9g8d09sfg8dfs9g0dsf8g0d9sf8g80d9fg8d0f9sg8d0sf9g8d0sf9g8'
}
```
