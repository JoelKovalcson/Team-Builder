# Team-Builder

## Description

The foundation for this project was provided by an online bootcamp for [Full-Stack Development](https://bootcamps.vanderbilt.edu/coding/online/landing/). 

This project focused on creating a generated webpage from user input to display a team's basic information.

The requirements for the project were as follows:
* Use Jest.js
* Use Inquirer.js
* Must use the following classes with sublisted properties/methods:
  * Employee
    * name
    * id
    * email
    * getName()
    * getID()
    * getEmail()
    * getRole()
  * Manager extends Employee
    * officeNumber
    * getRole()
  * Engineer extends Employee
    * github
    * getGithub()
    * getRole()
  * Intern extends Employee
    * school
    * getSchool()
    * getRole()

## Installation

1. Make sure you have `node` and `git` installed.
2. Clone this repository to a location of your preference.
3. Navigate to this location with a terminal of choice that supports `Inquirer.js`
4. Run the command `npm install`.
5. Run the application with `node index`
6. Follow on screen prompts until you are finished generating your team.
7. The files, `index.html` and `styles.css`, will be located in the current directory of your terminal, in a folder called `dist`
8. Save these files elsewhere for future use, and proceed to step 5 to generate more.

## Guide

For a visual guide of the above steps, watch [this video](https://youtu.be/BYcw-VW8FjI).

## What I Did

I begin this project by generating all of the various classes and tests I would use for storing Employee information. After this I worked on the prompts for getting user input. The only thing after that was to create the HTML and CSS templates with generated employee information cards.