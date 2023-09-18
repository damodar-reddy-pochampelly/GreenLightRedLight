# Green Light Red Light Game

Welcome to the Green Light Red Light game, inspired by the iconic Squid Games!
Test your reflexes and aim to achieve the target within the given time. Will you
be able to click the green light enough times to win?

## Table of Contents

- [Introduction](#introduction)
- [Gameplay](#gameplay)
- [Installation](#installation)
- [Usage](#usage)
- [Code Structure](#code-structure)
- [Bonus Challenges](#bonus-challenges)
- [Contributors](#contributors)

---

## Introduction

In this coding challenge, you are tasked with creating a web game using React
that simulates the Green Light Red Light game from Squid Games. The objective is
to click the green box a certain number of times within a specified time limit.

### User Registration

Before you start playing the game, we need some details to personalize your
experience:

- **Name**: Your name (get creative with it!)
- **Email**: Your email address
- **Mobile Number**: Your contact number
- **Difficulty Level**: Choose from Easy, Medium, or Hard

---

## Gameplay

Follow these steps to play the Green Light Red Light game:

1. User Registration:
   - Enter your name, email, mobile number, and select the difficulty level.
2. Start the Game:
   - Press the "Start Game" button to begin.
3. Game Mechanics:
   - A box will appear that changes color between green and red.
   - The color change interval is random, between 1 and 2 seconds.
4. Win Conditions:

   - Click on the **green** box to increase your score.
   - Reach the required number of clicks within the specified time to win.

5. Lose Conditions:
   - Click on the **red** box or let the time expire, and you will lose the
     game.
   - A "Game Over!" message will be displayed.

### Difficulty Levels

Choose your challenge:

- **Easy**: Reach 10 clicks on the green box within 40 seconds.
- **Medium**: Reach 15 clicks on the green box within 40 seconds.
- **Hard**: Reach 25 clicks on the green box within 40 seconds.

---

## Installation

Follow these steps to set up the game on your local machine:

1. Clone the repository:

   ```bash
   git clone https://github.com/damodar-reddy-pochampelly/GreenLightRedLight.git
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm start
   ```

4. Open your web browser and visit `http://localhost:3000` to play the game.

---

## Code Structure

The project follows a clean directory and code structure for better organization
and maintainability. Key directories and files include:

- **src/components/GreenLightRedLight.js**: Contains the game logic for the
  Green Light Red Light game.
- **src/components/RegistrationForm.js**: Handles user registration and
  difficulty level selection.
- **src/components/LeaderBoard**: Displays Leaderboard.
- **src/App.js**: Integrates the game and registration components.

---

## Bonus Challenges

For those looking to go the extra mile, here are some bonus challenges you can
attempt:

1. **Leaderboard**: Implement a leaderboard using state management options to
   track high scores.

2. **Total Time Reduction**: Display the total time remaining as players
   progress through the game.

---

## Contributors

- Damodar Reddy (damodarreddy18107@gmail.com) - Developer and Designer

Feel free to contribute to this project by creating pull requests or reporting
issues. Have fun playing the Green Light Red Light game! 🚦🟢🔴
