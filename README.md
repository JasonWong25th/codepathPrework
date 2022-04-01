# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Jason Wong**

Time spent: **5** hours spent in total
Link to project: (insert your link here, should start with https://glitch.com...)

## Required Functionality

The following **required** functionality is complete:

* [X] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [X] "Start" button toggles between "Start" and "Stop" when clicked. 
* [X] Game buttons each light up and play a sound when clicked. 
* [X] Computer plays back sequence of clues including sound and visual cue for each button
* [X] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [X] User wins the game after guessing a complete pattern
* [X] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [ ] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [ ] Buttons use a pitch (frequency) other than the ones in the tutorial
* [ ] More than 4 functional game buttons
* [X] Playback speeds up on each turn
* [X] Computer picks a different pattern each time the game is played
* [X] Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:
![](https://cdn.glitch.global/e4b6651f-20d6-4bcd-8f11-54389d87067e/codepathPrework.gif?v=1648631646088)


## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
    w3schools

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 
   A challenge was figuring out why there was a bug in my win game behavior. Even though the user had pressed the correct pattern, it had kept looping the 8 square. Since my code wasn’t triggering the win condition, I had worked backward to find the reason why it wasn’t calling the function. In my game logic/ “guess” function I had realized that I didn’t update the progress variable correctly which was the reason why it was never entering the conditional I had set up. Another challenge was creating the mistakes allowed for the game. I had a slight difficulty with aligning them on the screen. I had resolved this issue by looking online on google and going to the website w3school.com which has documentation and examples of things to do in HTML, CSS, and javascript. Another challenge that I had encountered that I was able to solve was the randomly generated pattern for the optional feature. I was unfamiliar with the javascript syntax so I had looked on the w3schools website for how to add items to a javascript list which turned out very similar to python’s list. While I did encounter a few challenges it was an overall rewarding experience seeing the final product and my hard work compiled into this project.



3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
    What’s the best way to streamline your web pages while still creating unique specific content for that page?
    How to host a website on a server and make a leaderboard possible?
    How to manage an extensive amount of data collected from users on a website?
    What are the best use cases for other companies' API and when should people build their own programs?
    Which is in higher demand: frontend development or backend development?
    How to best test the UI and how intuitive the front-end development is?
    How well does frontend design translates to other UIs on different products such as mobile app development, games, and Virtual reality applications? 


4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
    Given a few more hours to work on this project, I would add a feature that allowed players to pick a song instead of it being random or preset from the start. This means allowing either creating custom patterns per song or a function that scrapes songs from youtube and another function that converts the sound into a playable pattern. I would also include the timer feature that was mentioned as the optional feature that I didn’t have time to implement. I would also like to add a theme to the memory game so it’s that it’s more than just memorizing colors. Potentially the theme would be correlated to an educational aspect like randomizing the buttons each turn and having images associated with them. An example would be like each button is a letter on the alphabet or the planets in the solar system.



## Interview Recording URL Link

[My 5-minute Interview Recording](your-link-here)


## License

    Copyright [Jason Wong]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
