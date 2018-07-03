# HackCamp React

## HackJam 1: Introduction to React

### Topics covered
* Tooling and setup (yarn, npm, node)
* Thinking in React (introduction)
* Building your first component with CRA
* Break one big component into smaller reusable ones
* State Props
* Forms

### Getting started

Congratulations!
Today is your first day at Hackages and you have been assigned to work on their brand new product; **HackFlix**.
Steve, the junior developer who usually works on the project has left on holidays for a few days so you will have to pick up where he left off.
He wrote some notes for you before leaving with a list of tasks.

First off, you will need to clone the project:
```bash
git clone https://github.com/hackages/hackcamp-react.git
cd hackcamp.react
yarn
yarn start

# Happy hacking ;)
```

### Todos

#### Fixing errors
The application was not really in a working state when Steve had to leave.
Your first task will be to get rid of all the errors in the console and get the app behaving again.
The errors are mainly related to JSX syntax as this was brand new for Steve.

#### Divide and conquer
Steve did not really embrace one of the key point of React.
As you can see, there are few components and those are huge.
Splitting out those in small and easy to understand/reuse components is therefore the first thing you should do.
Go ahead, extract components as much as possible.

#### Filter all the things
The navbar (which should now be a component on its own) contains a list of categories.
When clicking on a category, the list of movies should be filtered to only show movies of that category.
No reason to see *Winnie the Pooh* when looking for some action movies, right?

Sadly, Steve did not manage to implement this so we really count on you as this is a crucial feature of the platform.

Hint:
>! When clicking on a category, `selectTab` is called.
>! This function expects the category as a parameter.
>! You first need to toggle the `selected` property of that category
>! And you can then filter the movies.

#### Open the menu
The "FILTERS" button on the left should open the sidebar but it's not working at the moment.
You should use the state of your component to track if the sidebar is open or not.
When the sidebar is open, you need to add the `filter-is-visible` css class to both `div.gallery` and `div.filter`.

#### Search all the things
The sidebar contains a search to help you find your favorite movie in a few keystroke.

It's a bit broken for the moment. (How disappointing Steve ...)

The HTML is there and you have an input field.
You're goal is to track the content of the input field when it changes and filter the movie list accordingly.
Note that your search should be case insensitive and take the current category filter in consideration.

#### Movie detail and navigation
Wouldn't it be great if we could see the details of a movie?

To make this work you will need to implement a basic navigation system.
If a movie has been selected, you need to render the MovieDetail component.
Otherwise, you should render the list of movies.
You can use conditions in JSX to render a component or another based on some internal state.

On the detail page, you will have to provide a props `goBack` which is a function that goes back to the main screen.

#### Counting
You might have noticed that there is a counter on the top right corner.
It shows 42 all the time for the moment.
Make it show the count of movies displayed in the list (after applying the filtering).

### Bonus
- On the main page show the last movies visited
- Add a way to add a movie to a list of favorites
- On the detail page, list the 5 best movies of the same category
