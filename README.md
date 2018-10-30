<!-- TITLE -> For WDI projects "WDI - Project 1" -->
<!-- IMAGE -> For WDI projects "https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png" for not WDI "MHK LOGO" -->
# NFL Picks Game

---
<a href='https://thawing-tor-87999.herokuapp.com/'>
<img style='border: 2px solid black; width: 100%' src='/screenshots/logo.png' alt='logo screenshot'></a>

### Project Overview and Motivation
Each year whilst following the NFL season we have a competition to predict the results of each regular and post season game. Historically we've used an excel spreadsheet to track which of us had picked the most correct results. This project was created to replace that spreadsheet.

<!-- Contributors - For group projects -->
### Contributors
| [<img src="/screenshots/MHK.jpg" width="100px;"/><br /><sub><b>**Matt Hunter-King**</b><br>Web Development</sub>](http://matthunterking.com/)<br /> | [<img src="/screenshots/RHK.jpeg" width="100px;"/><br /><sub><b>**Rachel Hunter-King**</b><br>*Graphic Design*</sub>](http://matthunterking.com/)

<!-- Timeframe - Time in days and Month -->
### Timeframe
* 3 months (June 2018 - September 2018)

---
### Technologies used

* React
* Javascript (ECMAScript6) + jQuery
* SCSS
* Bulma
* GitHub
* bcrypt
* mongoose
* filestack-js
* Heroku
* Trello
* Yarn
* Chai
* Mocha
* nyc
* supertest


### External Packages used
* react-chartjs-2
* react-countup

---
<!-- User Journey - For big projects -->
<!-- Screenshots - For small projects -->
### User Journey
1. On entering the site users can either log in or if they are a new user register for the site.
![screenshot1](/screenshots/screenshot1.png)

2. When registering users can upload a profile picture via file stack and can answer a series of multiple choice questions which are used to compare their compatibility with potential matches.
![screenshot2](/screenshots/screenshot2.png)

3. Once they have logged in or registered users can view potential matches which they can filter by gender and age. The number of hearts below each profile indicates their compatibility.
![screenshot3](/screenshots/screenshot4.png)

4. Clicking on a profile provides more information and gives the user the option to send a request to connect.
![screenshot5](/screenshots/screenshot5.png)

5. The 'My Profile' page allows users to edit/delete their profile and manage match requests. They can also plan dates with confirmed matches.
![screenshot6](/screenshots/screenshot6.png)

6. Clicking on the 'Plan a date' button on a confirmed match opens the date page which calculates the central point between the two users and shows bars and resturants in the surronding area.
![screenshot7](/screenshots/screenshot7.png)

7. Users can also message confirmed matches in the messaging screen.
![screenshot8](/screenshots/screenshot8.png)
---

### Approach
We started by creating wireframes for the project and produced a trello board. Below are some early wireframes for the project:

![planning](/screenshots/planning.png)

---

### Challenges

Creating a system for sending and accepting matches and messaging were big challenges. We decided not to use external packages for both of these features so creating models and controllers for both these processes was difficult and in hindsight we would have built these differently if we were to do the project again.

### Wins

The messaging inbox was a lot of work however users being able to switch between sets of messages by clicking into the user list was a really nice UX feature. Incorporating google places into the map element and calculating the middle point between users was also a great achievement.

---

### Future features

If we had more time we would like to have added more personalisation to the plan a date feature so that users could be shown different types of locations. We would have also liked to add log in with Facebook and email notifications.
