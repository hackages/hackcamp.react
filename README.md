# HackCamp React

## HackJam 3: Redux

### Topics covered

* Redux
    * Reducers
    * Actions creators
    * Testing your reducers
    * Reducer composition
* React Redux
    * Provider
    * mapStateToProps
    * mapDispatchToProps

### Getting started

First off, you will need to clone the project:
```bash
git clone url
cd hackcamp.react
npm install
npm run test

# Happy hacking ;)
```

### Information
The goal of this HackJam 3 is to guide you through the key concepts of Redux and React-Redux.

It's really important to follow the order of the steps below.

### Todos
#### Write the reducers
> The reducers are stored in the `src/reducers` folder
> The tests can be found in the `src/__tests__/reducers` folder
> For each reducer we left the initialState intact, it represents how the data should be structured in your reducer
> Make sure all the test passes before moving on the next step. 

To run the tests run `yarn test:reducers`

##### AuthReducer
The first reducer you need to work on is the authReducer.js
This reducer is really simple, he logs you in and out and stores the auth token.

It needs to intercept two actions: LOGIN and LOGOUT

##### SearchReducer
This reducer stores the filters and the search value.

It catches two actions:
SELECT_TAB and UPDATE_SEARCH_VALUES.

You'll have to write the reducer to handle both actions.
We wrote some tests for you to help you.

##### CartReducer
This is the toughest one. The entire implementation is missing, Steve wrote it but forgot to push it to master before going on vacations.
It does a few things:
- It keeps track of the cart, everything must be stored there.
- It should be able to add articles to the cart.
- It should be able to remove articles from the cart.
- It should be able to undo actions.
It catches the following actions:
UNDO_CART_ACTION, ADD_ITEM_TO_CART, REMOVE_ITEM_FROM_CART, TOGGLE_CART

#### Actions Creators
Actions creators are utility functions that help you dispatch actions.
They are pure functions that return actions.

We removed almost all of them, you should implement the ones that are missing.
They're stored in `src/actions`

You can implement them using `yarn test:actions`

#### Setting up Redux and React-redux
"What do you mean, setting up Redux? Didn't we use redux there?" Well .. Yes and no.
We wrote our *reducers* but we need something to glue them together, this is Redux's job.
We'll give it our reducers and it'll build a state tree for our app.

##### The store
The store is the most essential thing you need to play with redux, it'll glue your reducers together along with your middlewares etc and will keep your state tree in memory.

If you open `src/store/store.js` you'll find instructions to set it up.

##### The Provider
This component gives its children access to the store. You can find instructions to set it up in `src/index.js`

##### Connecting your components 
Connect is an higher order component that takes two parameters and returns a function.
 
The first parameter, mapStateToProps, must be a function that takes the state tree as its first parameter and the props as its second parameter and returns an object.

The second parameter, mapDispatchToProps, is a function that takes dispatch as a parameter and returns an object.

The first component you have to fix is `src/components/cart/CartCount.js`. This is a pretty simple one to give you a grasp on connect.

The second component you must fix is `src/components/MovieList.js`. This one should be fairly easy. You can find more instructions in that file.

Last but not least, the Cart component (`src/components/cart/Cart.js`). This one really goes deep on the things you can do with mapStateToProps.
Instructions can be found in that file.

#### Auth
In order to post comments you have to pass the token stored in your redux store in the Authorization header.
To do that, edit `src/components/MovieComment.js`.

#### Bonus: Move the navigation to Redux
We gave you all the tools needed to build a feature from A to Z using redux, use those to move the navigation state to Redux.
