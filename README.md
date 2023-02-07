## TENZIES GAME

<h3>Live Demo</h3> https://dazzling-sopapillas-1a581a.netlify.app/ 
<br><br>

The project implements a simple game logic where the player needs to roll the dice until all of them have the same value

### Technologies used

 ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white) 
 <br>
 ![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white)

### Features
<img src="https://github.com/suongfiori/tenzies/blob/master/images/screenshot_1.png" width="80%"> <br><br>
<img src="https://github.com/suongfiori/tenzies/blob/master/images/screenshot.png" width="80%">

### Concepts I learned:

- [x] State Management
- [x] Components
- [x] Props
- [x] Event Handling
- [x] Formatting Time: The time component in this project displays the elapsed time since the start of the game. The elapsed time was calculated and formatted into a string in a specific format (mm:ss)
- [x] Storing Data Persistently: In this project, the best score was stored in local storage, so it would persist even after the app was refreshed. The local storage API provides a way to store data in the browser so it can be retrieved even after the page has been reloaded.
- [x] Use of React hooks such as **`useState`** and **`useEffect`** to handle state and side effects respectively
- [x] **`useEffect`** hook is used to handle the side effects such as checking if the game is won or not by checking the value of the dice and also **starting** and **stopping** the timer
- [x] **`Conditional Rendering`** is used to render different elements in JSX depending on the **state** of the game, whether it is **won** or **not**
- [x] **`map()`** method is used to iterate over the dice array and create JSX elements for each die
- [x] **`setInterval()`** and **`clearInterval()`** are used to **create** and **stop** the timer respectively
- [x] Use of **`nanoid`** library to generate unique ids for each die.

### Possible ideas for project enhancing

- [ ] Improving *User Interface*: reall dots on the dice:white_check_mark:, animations, sound effects.
- [x] Adding a *leaderboard*: track the high scores of players and make the game more competitive :white_check_mark:
- [x] Improving *mobile compatibility* :white_check_mark:
- [ ] Adding *instructions*: more detailed instructions on how to play.
- [ ] Adding more *game modes*: time-based challenges / points-based challenges.
- [ ] Adding a *multiplayer mode*: players can compete against each other online.
- [ ] Adding *save and resume feature*: allow players to save their progress and resume later on.



