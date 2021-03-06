# odin-calculator

This project was done to meet the requirements for [Project: Calculator](https://www.theodinproject.com/paths/foundations/courses/foundations/lessons/calculator).

## In Progress

- EXTRA CREDIT: Add keyboard support! (Partially Complete - Rudimentary Keypress Added Thus Far - Want This To Both Take Input and Make The On Screen Buttons React)

## TODO

- Calculator Key Press Returns the Input
- Keyboard Can Also Return the Same Input
- These steps can be used to populate the display next
- Move to display, store as object?
- Create the functions that populate the display when you click the number buttons… you should be storing the ‘display value’ in a variable somewhere for use in the next step.
- Make the calculator work! You’ll need to store the first number that is input into the calculator when a user presses an operator, and also save which operation has been chosen and then operate() on them when the user presses the “=” key.
- You should already have the code that can populate the display, so once operate() has been called, update the display with the ‘solution’ to the operation.
- Store all the values and call the operate function with them. Don’t feel bad if it takes you a while to figure out the logic.

### Bugs and Things to Watch For

- Users should be able to string together several operations and get the right answer, with each pair of numbers being evaluated at a time. For example, 12 + 7 - 5 \* 3 = should yield 42.
- Your calculator should not evaluate more than a single pair of numbers at a time. Example: you press a number button (12), followed by an operator button (+), a second number button (7), and finally a second operator button (-). Your calculator should then do the following: first, evaluate the first pair of numbers (12 + 7), second, display the result of that calculation (19), and finally, use that result (19) as the first number in your new calculation, along with the next operator (-).
- You should round answers with long decimals so that they don’t overflow the screen.
- Pressing = before entering all of the numbers or an operator could cause problems!
- Pressing “clear” should wipe out any existing data.. make sure the user is really starting fresh after pressing “clear”
- Display a snarky error message if the user tries to divide by 0… don’t let it crash your calculator!

#### Extra Credit

- EXTRA CREDIT: Users can get floating point numbers if they do the math required to get one, but they can’t type them in yet. Add a . button and let users input decimals! Make sure you don’t let them type more than one though: 12.3.56.5. It is hard to do math on these numbers. (disable the decimal button if there’s already one in the display)
