# Web Development Project 3 - Computer Science Flashcards

Submitted by: **Bryce Alexander**

This web app is a computer science flashcard study tool designed to help users review common computer science concepts used in technical interviews and coursework. Users can test their knowledge by entering guesses, receiving feedback on their answers, and navigating through a set of flashcards in order.

Time spent: **7** hours spent in total

## Required Features

The following **required** functionality is completed:

- [x] **The user can enter their guess into an input box before seeing the flipside of the card**
  - [x] Application features a clearly labeled input box with a submit button where users can type in a guess
  - [x] Clicking on the submit button with an incorrect answer shows visual feedback that it is wrong
  - [x] Clicking on the submit button with a correct answer shows visual feedback that it is correct

- [x] **The user can navigate through an ordered list of cards**
  - [x] A forward/next button displayed on the card navigates to the next card in a set sequence when clicked
  - [x] A previous/back button displayed on the card returns to the previous card in a set sequence when clicked
  - [x] Both the next and back buttons have visual indication when the user is at the beginning or end of the list and cannot be clicked

## Optional Features

The following **optional** features are implemented:

- [ ] Users can use a shuffle button to randomize the order of the cards
  - [ ] Cards remain in the same sequence unless the shuffle button is clicked
  - [ ] Cards change to a random sequence once the shuffle button is clicked

- [x] A user's answer may be counted as correct even when it is slightly different from the target answer
  - [x] Ignores capitalization differences
  - [x] Ignores punctuation differences

- [x] A counter displays the user's current and longest streak of correct responses
  - [x] The current counter increments when a user guesses correctly
  - [x] The current counter resets to 0 when a user guesses incorrectly
  - [x] A separate counter tracks the longest streak

- [ ] A user can mark a card that they have mastered and have it removed from the pool of displayed cards

## Additional Features

- [x] Difficulty-based color coding for flashcards
- [x] Modern dark-themed interface
- [x] Flashcards categorized by Easy, Medium, and Hard difficulty levels
- [x] Automatic card reveal after a correct answer submission

## Video Walkthrough

Here's a walkthrough of implemented user stories:

<img src="https://submissions.us-east-1.linodeobjects.com/web102/NwZx4cKv.gif" title="Video Walkthrough" width="" alt="Video Walkthrough" />

<!-- Replace with your GIF link -->

GIF created with Kap.

## Notes

One challenge encountered during development was managing multiple state variables for card navigation, answer validation, feedback messages, and streak tracking. Another challenge was ensuring that users could only view the answer after submitting a guess while still maintaining smooth navigation between flashcards.

## License

    Copyright 2026 Bryce Alexander

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
