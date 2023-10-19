# Week 3 Assignment - Password Generator

## Description

This project requires a Password Generator to be calibrated so that the user is given a series of criteria to apply  which the programme can use to return a randomly generated password.

The browser "listens" for the user to click on the Generate Password on the site, and then runs a function. The length of the password is first gathered with a prompt() method in order to get a specific number. If the input is outside the acceptance criteria the prompt will specify the range (8-128) for the user to input, and only proceed when an acceptable number is added. Since the prompt returns a string value, it needed to be converted to a number in order to be used, more specifically an integer since the prompt allows decimal numbers. Then a series of confirm windows determine what attributes the user wants the password to have (upper or lower case letters, numbers or special characters) and the responses added to the end of an array. If all inputs are returned as false then a window will ask the user to select at least one variable, as the code will not run.

Depending on the user input a block of respective characters are concated to an originally empty variable to keep track of possible characters; random special characters were taken from a string of accepted characters from IBM - see credits. A new function was then nested to iterate however many times the user chose the password to be. With each iteration, a random number was generated (up to the length of the variable containing the possible characters) and a random character from the possible character string was concatenated into an initially empty newPassword variable. This is then displayed on the site.

Initial attempts proved too complex to manage (but can be viewed in the project's GitHub repository history). Each character was generated from separate functions. Then the theory was that a function would iterate the length of the password, and for each iteration check the boolean value of the user's input and simultaneously choose a random function to generate a character to concatenate into an empty password string. However, this had too many values to compare and appeared to contradict each other, so after consulting an AskBCS assistant it was advised I look at some examples of other generators (provided in credits).

## Credits

- https://www.freecodecamp.org/news/html-button-onclick-javascript-click-event-tutorial/
- https://www.w3schools.com/js/js_random.asp
- https://www.programiz.com/javascript/examples/generate-random-strings
- https://www.ibm.com/docs/en/baw/20.x?topic=security-characters-that-are-valid-user-ids-passwords
- https://stackoverflow.com/questions/1497481/javascript-password-generator
- https://www.geeksforgeeks.org/how-to-generate-a-random-password-using-javascript/
