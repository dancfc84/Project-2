
# Fishwatch API

## Overview 

In the second project for the General Assembly Software Engineering Flex course we were asked to **build a React application** that consumes a **public API**. This project was a group project, we had three days to complete the task.

## Technologies used 
* HTML
* CSS
* JavaScript
* React
* Bulma
* Bootstrap
* Axios
* Insomnia

## Project Requirements

* **Needs to Consume a public API**
* **The app should include a router** -and consist of several "pages"
* Have **semantically clean HTML** 
* **Be deployed online** and accessible to the public.

## Project Overview

- Pair Programming
- We built a React application using an API which had detailed information about fish stocks in the Atlantic ocean
- We decided to show all the different species in an index page and also have a sustainable eating section where we offered alternatives to the more popular overfished species

## Project Planning

- We began by discussing what kind of website we would like to make, we are both interested in environmental issues so we looked for API's in that area, and decided on a sustainable fish API that contained data of 150 fish in the Atlantic ocean. 
- We then planned out how we wanted the websites to look

![Screenshot - Homepage](https://github.com/dancfc84/Project-2/blob/main/screenshots/planning.png)

We then:

  - wrote out and planned the pseudo code
  - discussed the workload and split the work between us
  - built some of the re-usuable components together (header, footer etc)

## Website Overview

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
- As values are entered into the search input the search state is updated in real-time
- The filterFish function uses the filter method to return an array which only contains fish that match the search variable
- This array is then iterated through using the map method, therefore, it only displays fish that match the entered text in the search input, if there is no text it displays all fish

![Screenshot - FishIndexFilter code](https://github.com/dancfc84/Project-2/blob/main/screenshots/FishIndexFilter.png)

### Sustainable Eating Page

- The sustainable eating page used a recipe API to find delicious alternatives to more popular overfished species

![Screenshot - SustainableFishSection](https://github.com/dancfc84/Project-2/blob/main/screenshots/SustainableFish.png)

## Wins

- Deepened my understanding of React
- Learnt how to efficently pair-code and deal with merge errors in GitHub, it was a lot of fun planning and creating logic together.