Tic-Tac-Toe
Overview

Tic-Tac-Toe is a 20x20 grid game where two players alternate placing their symbols ("X" and "O") in an attempt to align 5 symbols in a row, column, or diagonal. The game keeps track of player scores and allows for score resets.
Features

    20x20 Grid: A large grid where players can place their symbols.
    Turn-Based Play: Players alternate turns, with "X" starting first.
    Winner Detection: The game detects when a player aligns 5 symbols in a row, column, or diagonal.
    Score Tracking: Scores for both players are tracked and displayed.
    Score Reset: Option to reset scores to zero.
    Local Storage: Scores are saved and loaded from the browser's local storage.

Setup

To run this Tic-Tac-Toe game locally:

    Clone the Repository

    bash

git clone https://github.com/yourusername/tic-tac-toe.git

Navigate to the Project Directory

bash

    cd tic-tac-toe

    Open index.html

    Open the index.html file in your web browser. The game should be displayed, and you can start playing immediately.

Files

    index.html: The HTML file that sets up the game structure.
    style.css: The CSS file for styling the game board, buttons, and other elements.
    index.js: The JavaScript file containing the game logic and functionality.

How to Play

    Starting the Game: The game begins with player "X". Click on any cell in the 20x20 grid to place your symbol.
    Alternating Turns: After a move, the game automatically switches to the next player.
    Winning: The game checks for a winner when a player aligns 5 of their symbols horizontally, vertically, or diagonally.
    Restarting: Click the "Restart" button to start a new game.
    Resetting Scores: Click the "Reset Scores" button to reset the scores to 0-0.

Local Storage

    Scores: Player scores are saved in local storage so they persist between sessions.
    Reset Scores: The "Reset Scores" button updates local storage with reset scores.

Code Explanation
CSS (style.css)

    .cell: Styles for each cell in the grid, including size, border, and font.
    #gameContainer: Centers the game and applies general font and layout styles.
    #cellContainer: Styles the grid container.
    #statusText: Styles the status text displaying current game information.
    Buttons: Styled for appearance and interaction (hover and click effects).

JavaScript (index.js)

    Selectors: Grabs elements from the DOM.
    Grid Initialization: Creates a 20x20 grid of cells.
    Game Logic: Handles player turns, cell updates, winner checks, and score updates.
    Local Storage: Saves and loads scores from local storage.
    Event Listeners: Manages button actions for restarting the game and resetting scores.

Contributing

If you would like to contribute to this project, please follow these steps:

    Fork the repository.
    Create a new branch for your feature or bug fix.
    Commit your changes with descriptive messages.
    Push to your branch and submit a pull request.

License

This project is licensed under the MIT License - see the LICENSE file for details.
Acknowledgements

    Font: "Permanent Marker" for game headings and status text.
    Icons: Any icons used are from FontAwesome (if applicable).

Feel free to adjust the sections as needed to better fit your project's specifics or any additional features you may have added.# TicTackToe