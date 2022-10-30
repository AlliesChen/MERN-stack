# MERN Stack

This web application is followed [the tutorial](https://www.youtube.com/playlist?list=PL4cUxeGkcC9g8OhpOZxNdhXggFz2lOuCT) made by Net Ninja.

However, I change the auth flow from storing the token in the `localStorage` to a cookie. With the `sameSite` and `httpOnly` setting, I think it's more secure.

* I don't set `secure` property, because it needs key and cert while I just want to demo this app on localHost.

Also, I choose Preact instead of React as the JS framework, just want to see that the benefits mentioned on [the official site of Preact](https://preactjs.com/).

## Backend

With Node.js + Express.

Please make sure to add `.env` file with "PORT", "MONGO_URI", and "SECRET" for assigning path for server running on, fetching database, and authorizing app user to approach database, respectively.

### Host a local server

`npm run dev`

## Front-end

JS Framework: Preact

- Type notations with JSDoc.

### Host a local server

`npm run dev`