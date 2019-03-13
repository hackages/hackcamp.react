# HackCamp React

## HackJam 2: Lifecycle Hooks

### Topics covered

* Lifecycle hooks
* Fetching data from server
* componentWillReceiveProps
* Manage form

### Getting started

First off, you will need to clone the project:
```bash
git clone url
cd hackcamp.react
```

For this HackJam we need a backend.
The backend has been packaged in a Docker image.
You will need docker installed on your machine.
You can then start the backend and the website by running:
```bash
yarn
docker-compose up backend
yarn start
```

If you prefer to run everything in docker, run the following:
```bash
docker-compose up
```

Happy hacking ;)

### Information
Luckily Steve did left a configuration file with the map to the right resources!
This file can be found in the src/constants folder

### Todos

#### Fix the errors

#### Fetch the data from the server with the lifecycle hooks
Oh snap, there are no movies in our website! 

I guess Steve forgot to fetch the movies from the backend, can you do that?

Hint:
> Check the App.js file

> You can use axios, fetch or whatever you prefer!

#### Make the hover on the movies tiles work (Movie component)
We now have the movies in the page, yay!
But we cannot access the details of these movies, because Steve did not implement the hover (who hired this guy?)

I know we can capture events (like when the mouse enters or leaves a div), we can save this information and then add/remove the right css class on the div!

#### Filter the movie list (MovieList component)
It seems like MovieList is the wrong place to do the filtering/counting of the movies... What happens when you do it there? Where could you move that logic in order to make it work painlessly? 

#### Handle the cart
One of the cool feature is the cart. The idea was to let people save movies in a cart so they can retrieve them later. But Steve did not thought it through and gave up while coding it, we need to finish his work! 

We want to be able to :
* Add a movie to the cart
* Delete a movie from the cart
* Check if a movie is in the cart

We pass an array of movieId to the cart, but we want to see the miniature in the cart so we need to transform this array into an array of movies

#### Manage the comments
We'd like to have a system to let user comment on a movie, cool feature heh?

The first feature we need here is obviously the read one. We need to get all the comments for the selectedMovie in the MovieComments.

Then we'd like to be able to add a comment so we need to manage the form to post the comment.

And now everyone can comment on every movie, but imagine someone post a negative critic about your favourite movie! We need to be able to delete those unwanted comments.

#### See some statistics
We also want to see some statistics, in order to do that we need to manage a few things:

* Create the statistics component
* Manage the navigation 
    * In the App.js, we have a conditional rendering, but now we have to switch between 3 pages (Main, MovieDetail, Statistics)
    * To navigate to the statistics page we have to implement a button in the filter bar (right next to the counter), this button will simply call a function from App.js to set the selectedPage to statistics
     
In the statistics page we want to see 3 things:
* A list of the movies that have a rating > 8
* A table with the categories and the number of films of those categories
* A button that will send us back to the Main page

We need to create the page from scratch.

### Bonus
* Display on the movie hover the number of comments
* Integrate React Flip Motion
* Create a Pie chart in the statistics page using `victory`
* When you click on comment, navigate to the details and put the focus on the author field
* Persist the cart using the local storage
