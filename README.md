# NFL Picks <img style='float: right' src='/screenshots/logo.png'>
---
<a href='https://nfl-picks-game.herokuapp.com/'>
<img style='width: 100%;' src='/screenshots/nflpickslogo.png' alt='logo screenshot'></a>

### Project Overview and Motivation
I made this site in collaboration with my wife who is a graphic designer. We are both fans of American Football and for the past few years have been competing against each other predicting the results of NFL games. We used to use an Excel spreadsheet for this but after I’d learnt to code decided to replace it with this site.

This project was made during my evenings and weekends while I was a Teaching Assistant at General Assembly.


### Contributors
<table>
  <thead>
    <th><img src='/screenshots/MHK.jpg' width=70px /></th>
    <th><img src='/screenshots/RHK.jpeg' width=90px /></th>
  </thead>
  <tbody>
    <td>
    <strong>Matt Hunter-King</strong>
    <p>Web Development</p>
    </td>
    <td>
    <strong>Rachel Hunter-King</strong>
    <p>Graphic Design</p>
    </td>
  </tbody>
</table>

### Timeframe
3 months (June 2018 - September 2018)

---
### Technologies used

* React
* JavaScript (ECMAScript6)
* SCSS
* Bulma
* GitHub
* bcrypt
* mongoose
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

### User Journey
On entering the site users can either log in or if they are a new user register for the site.

![screenshot1](/screenshots/screenshot1.png)

Once the user has logged in or registered they will be taken to their dashboard. The color scheme will match their favourite team and their are graphs which show their current game stats.

![screenshot2](/screenshots/screenshot2.png)
![screenshot5](/screenshots/screenshot5.png)

1 point is awarded for a correct pick during the regular season (this increases in the post season where there are less games). Each player has the option to 'lock' a team each week meaning that they would score 5 points for a correct result. Players can only lock each team once during the regular season.

![screenshot3](/screenshots/screenshot3.png)
![screenshot4](/screenshots/screenshot4.png)

Each week users are required to input their predictions on this page. If the team selected is avaiable to be locked once selected the lock button appears.

![screenshot6](/screenshots/screenshot6.png)


---

### Approach

I started this project by looking for an external API which would be able to give me the NFL fixture list and the results of games. Unfortunately I wasn't able to find a suitable and free API so instead I had to create a particularly big seeds file and an admin user who would have to input all the results.

I began by creating the backend of the app focussing on the models I would need and how they would be linked together. One I had the back end working I moved onto building the front end and Rachel began work on the design.

### Locking a Fixture

One of the major challenges on the front end was making sure that state had the correct data stored before sending it to the back end. As users need to pick a team before they can lock that fixture my handleLock function had to find the original pick then update that pick to show that it's a lock. To do this I make a copy of the current picks `this.state.picks`. Using the copy I then found the game which needed to be updated, set the `lock` field to true and then finally set state with the updated data.

```
handleLock = (e) => {
  const picks = [].concat(...this.state.picks);
  const data = {
    gameId: e.target.getAttribute('game')
  };
  if(picks.some(pick => pick.gameId === data.gameId)) {
    const index = picks.findIndex(pick => pick.gameId === data.gameId);
    picks[index].lock = true;
  } else {
    picks.push(data);
  }
  this.setState({ picks: picks });
}
```

---


### Challenges

This project was spread out over a long period of time and I was often having to dip in and out of it. I also didn't spend enough time at the start mapping out what my front end app would look like and what requests each component would need to make. That being said I'm really pleased that I managed to make a functioning app although there are certainly parts of it which could be simplified.

### Wins

I was really pleased with my use of components on this app, it was really rewarding to thing of them as more parts of the site rather than having one component per page. The look and feel of the final site is really nice and it was great working with Rachel to produce a really great design. Finally I really enjoyed the amount of vanilla JavaScript I needed to use to package up my data.

---

### Future features

If I had more time I would build in some more robust error handling and also work on displaying some more information on each fixture, for example your success rate when picking each team, that teams record and their standing in their division.

I'll be building this site again for the 2019 NFL season so watch this space to see if I can improve on this app next time.
