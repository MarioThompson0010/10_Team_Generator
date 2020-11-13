# 10_Team_Generator

## Screenshots and Video:
[README video](https://drive.google.com/drive/u/0/folders/1bicNr8U8tsLQDnyu6b5xI1_jNxpDHq5h)

![Manager Only](https://github.com/MarioThompson0010/10_Team_Generator/blob/main/Assets/MyTeamManagerOnly.PNG)
![Entire Team](https://github.com/MarioThompson0010/10_Team_Generator/blob/main/Assets/MyTeamScreenshot.PNG)

List of technologies: npm, Javascript, Inquirer, NodeJS, Jest

## Description:

This program is back-end only, using a Node CLI.  It generates an html web page that a user can use to quickly find out who is on her team and some contact info.  The contact info associated with the employee depends on the type of employee employed.  The three types of employees are manager, engineer, and intern.  

Each team has one manager.  The manager's information gets entered first.  Then, the engineers and interns get entered, in any order, and until the user selects the "Exit" option, in a list.  

The program uses npm's Inquirer to find out information. The name, id, and email address are required to be entered for every employee.  Managers enter their office number, an intern enters her school.  An engineer enters her Github profile url.  All 3 types derive from the base class Employee.

## How to run the program:

1) Open a terminal. 
2) Type "node app.js" 
3) Answer the questions
4) When you're done, select "Exit"
5) Go to the output folder, then open the html file
6) View the html file in a browser

## How to test this app

Type "npm run test" in the terminal.  It did pass, as you'll see in the video.
