
# Fishwatch API

## Overview 

In the second project for the General Assembly Software Engineering Flex course we were asked to **build a React application** that consumes a **public API**. This project was a group project.

## Technologies used 
* HTML
* CSS
* Javascript
* React
* Bulma
* Bootstrap

## Project Requirements

* **Needs to Consume a public API**
* **The app should include a router** -and consist of several "pages".
* Have **semantically clean HTML** 
* **Be deployed online** and accessible to the public.

## Project Overview

- We used an API which had detailed information about fish stocks in the Atlantic ocean
- We decided to list all the different species and also have a sustainable eating section where we offered alternatives to the more popular overfished species

### Homepage

- The homepage consists of a Bootstrap carousel and a fish of the day component

![Screenshot - Homepage](https://github.com/dancfc84/Project-2/blob/main/screenshots/HomePage.png)

#### Challenge - Setting the fish of the day

- Firstly, today's date needed to be selected and then stored in localStorage
- displayFish state was created using useState
- The GetRandom() function is then run, this selects a random fish and stores the data in the displayFish state, this is then added to the localStorage
- The information is sent through as props to the FishDay component so that it can be displayed

![Screenshot - DailyFish code](https://github.com/dancfc84/Project-2/blob/main/screenshots/DailyFish.png)

### Fish Index Page

- The index page consists of a search box and cards showing all the individual species of fish from the API

![Screenshot - FishIndex](https://github.com/dancfc84/Project-2/blob/main/screenshots/FishIndex.png)

#### Challenge - Searching for specific fish species
- Search state was created using useState
- as values are entered into the search input the search state is updated in real-time
- the filterFish function uses the filter method to return an array which only contains fish that match the search variable
- this array is then iterated through using the map method, therefore, it only displays fish that match the entered text in the search input, if there is no text it displays all fish

![Screenshot - FishIndexFilter code](https://github.com/dancfc84/Project-2/blob/main/screenshots/FishIndexFilter.png)

### Sustainable Eating Page

- The sustainable eating page used a recipe API to find delicious alternatives to more popular overfished species

![Screenshot - SustainableFishSection](https://github.com/dancfc84/Project-2/blob/main/screenshots/SustainableFish.png)
