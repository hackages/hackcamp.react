# HackCamp React

## HackJam 4: Redux advanced

### Topics covered

- CRUD with redux
- Forms with Formik
- Optimistic insert

### Getting started

First off, you will need to clone the project:

```bash
git clone url
cd hackcamp.react
yarn
# Happy hacking ;)
```

### Information

The goal of this HackJam 4 is to guide you through some advanced concepts of Redux and React-Redux.

### Todos

#### Reduxify the movies

Store the movies with redux

- Create two actions in `src/actions/moviesActions.js` using `yarn test:actions:movies`:
  - setMovies (type: SET_MOVIES), payload: an array of movies
  - fetchMovies, an action that returns a function (redux thunk) that fetches the movies then dispatch setMovies.
- Implement the movies reducer by running `yarn test:reducers:movies`

Then use redux to get movies in your app. You need it in the `MovieList`, `Stat` and `Cart` component.

Make sure your app works !!

#### Reduxify the comments

You have to plug redux for the comments

- Create actions to create, read and delete comments
  > Run _yarn test:actions:comments_
- Create a reducer to handle the comments
  > Run _yarn test:reducers:comments_

> The reducer is the following `src/reducers/commentByMovie`

- In the MovieComments component you need to fetch the comments from the backend then get the comments from Redux
- In the MovieComment component you need to be able to delete a movie from Redux
- Finally in the MovieCommentForm you need to be able to add a comment to Redux

#### Bonus: Redux forms

When the movies and the comments are reduxified, you can plug redux forms in your comment form.
Redux form will help you manage your form.

When redux form is plugged in your app, implement the validate function

The author field :

- is required
- must start with an Upper case letter

The content field

- is required
- cannot be longer than 150 characters

> We created a FormField component, you have to use it in your form but you have to implement it.

The form must show the errors, even before the user has clicked on `add`

> Hint : use field level validation

The documentation can be found here : https://redux-form.com/7.3.0/docs/api/

#### Optimistic insert

The goal here is to deal with slow operations. Imagine you have a very slow server, you don't want the user to wait 2 seconds before seeing his comment added to a movie.
So how does it work? When you post a comment, before posting it to the server you add it to your redux store (with a randomly generated id), then if the post to the server is successful you update your store with the id returned by the server
otherwise you delete the comment from the store.

With this technique you make sure that the user will directly see his comment being posted and won't spam the `add` button

> There are tests for this, check the tests/optimisticInsert.specs.js tests and remove the x before the first describe

To test that everything works, add to the docker-compose.yml file those 2 lines in the backend section

    environment:
        -SLOW=true

This will force the server to wait 2 seconds before responding to each request, so you can easily test your optimistic insert

#### Middlewares

##### Introduction

Middlewares allow you to do some custom work on actions without having that logic in the reducers.

Middlewares are higher order functions.

Put simply, they're functions returning funtions returning functions.
![https://i.imgur.com/6WCIHEQ.jpg](https://i.imgur.com/6WCIHEQ.jpg)

On a more serious note, they take the store, a next function (the next middleware in the stack) and an action.

If you've already worked with express or other frameworks that uses middleware you probably know how it works already.

Middlewares allow you to do custom work on things passing your pipeline, be it http requets or the redux store in our case, there's a lot of use cases for them.

##### Exercise

During this first part of the HackJam you're gonna have to write a few middlewares

The first middleware we want you to write is the logger middleware.

This middleware logs the current action and the next state of the store after running that action.

It comes pretty handy when working on redux.

To do that, run _yarn test src/\_\_tests\_\_/middlewares_1/logger.spec.js_

When you're done with the logger middleware move to the freeze middleware.

As you probably know already, you can not modify redux's state, you always need to return a new state in your reducer without mutating the previous state

To enforce that, let's write a middleware that throws an exception when something tries to mutate the state.

Use the following library to freeze your state: [https://github.com/jsdf/deep-freeze](https://github.com/jsdf/deep-freeze)

Run the test using _yarn test src/\_\_tests\_\_/middlewares_1/freeze.spec.js_

You can also run yarn _test:middlewares:1_ to run both those at once.

##### Using them

When you're done with your middlewares, use them in store/store.js

##### When you're done with that ...

Open _src/store/store.js_, remove the redux-thunk import and write your own implementation using _yarn test:middlewares:2_

And then again, _ make sure it works _

#### Bonus: Offline

Use Redux Persist to persist the list of movies and the list of comments

docs : https://github.com/rt2zz/redux-persist
