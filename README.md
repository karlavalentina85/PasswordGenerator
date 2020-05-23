# PasswordGenerator(PG)
So, in order to build my PG I started by pseudocoding the criteria I was asked to follow. 
I created the function "Generate Password" to prompt the desired length of the password from the user, if the user was not selecting between 8-128 characters, they would encounter an alert/error message. (I did this by using a "while loop"). Then, I added the conditionals for the rest of the requested criteria (numbers, special characters, upper and lowercase letters, and made another "while loop" to validate that the user selected at least one of these 4 criteria.
Then using the criteria that users selected, I created a variable that stored all the possible characters that the password could have.
Then I created a for loop that looped for the number of characters they said they wanted in their password and then using a random function selected the characters for the password one by one and pushed them onto a variable called randomPassword which stored the new random password.
Then I displayed this password on the html page.
