# HotelSearch

## Background

This coding test was completed in 1 day, the requirements were to take 15,000 lines of json data (the hotels) and present the information along with filtering and sorting capabilites.

You could use whatever server side tech you wanted (or none).

I chose to use the MEAN stack for its ease of set up and high performance. Using Angular CLI also saved a lot of set and config time.

## A few notes on my implementation:

* Uses MEAN Stack, mongodb is holding the data, I have build a simple api to expose the hotels, then created Angular 2 app with Angular CLI to display the data.
* Used Bootstrap for FE framework, I have purposely not used any custom CSS, I am using a CDN copy of Bootstrap so no SCSS processing needed in the pipeline.
* For performance limited api calls to return max 100 results, would paginate this with more time.
* There are improvements that could be made to angular observables, for example, its hitting the server every time you type, this could be changed.
* I could have spent more time improving the usability of the filters, perhaps a range slider for the min cost for example.

Deployed to Heroku - [https://hotel-search-test.herokuapp.com/](https://hotel-search-test.herokuapp.com/)


## NPM Install

Run `npm install` to install dependencies. 

## Development server
Run `node app` for a dev server. Navigate to `http://localhost:3000/`. 