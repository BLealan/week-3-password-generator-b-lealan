# Week 3 Assignment - Password Generator

## Description

This project requires a Password Generator to be calibrated so that the user is given a series of criteria to apply that which the programme can use to return a randomly generated password.

The length of the password is first gathered with a PROMPT WINDOW in order to get a specific number. If the input is outisde the acceptance criteria the prompt will specify the range (8-128) for the user to input, and only proceed when an acceptable number is added. Since the prompt returns a string value, it needed to be converted to a number in order to be used, more specifically an integer since the prompt allows decimal numbers. Then a series of confirm windows determine what attributes the user wants the password to have (upper or lower case letters, numbers or special characters) and the responses added to the end of an array. Originally written with if conditions to log responses I realised that this was superfluous, as the confirm windows naturally return boolean values.

Functions were written to create random characters (letter, number and special). Letters would be chosen from a string containing both upper and lower case characters, however, depening on user choice they could be converted to all lower or upper case or kept as a mixture depending on choice. Numbers would return a random integer between 0 and 9. Random special caracters were taken from a string of accepted characters from IBM (see credits).

## Credits

- https://www.freecodecamp.org/news/html-button-onclick-javascript-click-event-tutorial/
- https://www.w3schools.com/js/js_random.asp
- https://www.programiz.com/javascript/examples/generate-random-strings
- https://www.ibm.com/docs/en/baw/20.x?topic=security-characters-that-are-valid-user-ids-passwords