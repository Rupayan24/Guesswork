# Guesswork

A responsive number guessing game built with vanilla HTML, CSS, and JavaScript. Choose the highest possible number, then keep guessing until you find the randomly generated target. The game runs entirely inside the webpage with live feedback, attempt tracking, and a reset option.

## Description

Guesswork is a small browser game focused on simple interaction and clear feedback. At the start of each round, the player chooses a maximum number. The game generates a random integer between `1` and that maximum. Each guess is checked immediately and the interface tells the player whether the guess was too small, too large, or correct.

The project uses no frameworks, build tools, or external JavaScript dependencies.

## Features

- Set a custom maximum number for each round
- Generate a random target between `1` and the selected maximum
- Receive immediate too-high or too-low feedback
- Track the number of attempts
- Validate whole-number guesses within the selected range
- Show a completed state when the number is found
- Start a new round with the reset button
- Responsive layout for desktop and mobile screens
- Accessible labels and live status messages

## How To Run

1. Download or clone this project.
2. Open the project folder in VS Code.
3. Open `index.html` in a browser.

You can also use the VS Code Live Server extension for a local development server, but no server is required for this project.

## How To Play

1. Enter the highest possible number.
2. Select **Start game**.
3. Enter a whole-number guess between `1` and the selected maximum.
4. Use the feedback to make another guess.
5. Continue until you find the hidden number.
6. Select **Start over** to begin a new round.

## Project Structure

```text
NumGuessGame/
├── index.html   # Page structure and game controls
├── style.css    # Visual design, layout, responsive styles, and animations
├── app.js       # Game state, random number generation, validation, and events
└── README.md    # Project documentation
```

## Technologies

- HTML5
- CSS3
- JavaScript (ES6+)
- Google Fonts: Space Grotesk and DM Mono

## Game Logic

The target number is generated with:

```js
Math.floor(Math.random() * number) + 1;
```

This produces a random whole number from `1` through the selected maximum. The game then compares each submitted guess with the target and updates the message and attempt counter without reloading the page.

## License

This project is intended for learning and personal use.
