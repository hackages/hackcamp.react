# HackCamp React

## HackJam 5: React Router v4
### Todos
#### Set-up
In order for the routing to work your App should be wrapped in a special component from React router... Some kind of router .. I never remember the name of that component, is it [staticRouter](https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/api/StaticRouter.md)? Or maybe [browserRouter](https://github.com/ReactTraining/react-router/blob/master/packages/react-router-dom/docs/api/BrowserRouter.md)?

#### Routing
We now use React Router 4 in the app to navigate, create the following routes:
- `/` <-- *Main*
- `/movies/:id` <-- *MovieDetail*
- `/stats` <-- *Stats*

[doc on routes](https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/api/Route.md)


[doc on links](https://github.com/ReactTraining/react-router/blob/master/packages/react-router-dom/docs/api/Link.md)

#### NavLinks
Navigate to `src/components/FilterItems.js`. Follow the instructions starting on line 30.

[Doc on navlinks](https://github.com/ReactTraining/react-router/blob/master/packages/react-router-dom/docs/api/NavLink.md)

#### The Match Object
When you create routes with parameters (`/movies/:id` for example), React router will give you as a prop an object alled match.params, params contains all the "params" that are in the url.

For example: with the route `/movies/3245` React router will give you the following object as a prop:
```
match: {
  params: {
    id: 3245
  }
}
```

Use that object to load the correct movie when the user navigates to MovieDetail.
  
You should also verify that going from one movie to another works. 
For example from `/movies/3245` to `/movies/285`.


#### Going back
Still on the MovieDetail page you're going to find a "back" button, [make it work ;)](https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/api/history.md).

Add a back button on the Stats page aswell.

#### Subroute
In React Router v4, not all the routes need to be declared in the same file.

Implement a subroute in the MovieDetails page that displays the `<MovieComments/>` Component.

#### Protected route
Create a component that you can use to protect different parts of your app.

Open `src/components/hoc/protectedRoute` and follow the instructions to get started.

Use that component to protect one of your page against logged out users.

#### Query Params
Your genre selection should be stored in the query params (http://localhost:5000/?genre=awesome, for example) so that your users can share their search results.

### Bonus
#### Location.state
Use the [location.state object](https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/api/location.md) to pass an error message if the users can't access the protected route.
