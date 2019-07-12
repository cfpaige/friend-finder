# Friend Finder

## Description

Friend Finder is an application that matches people based on their responses to a ten-question survey.

## Demo
	
Deployed to Heroku. You can view the live version [here](https://random-heroku-route-name.herokuapp.com/).

## Getting started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

#### Prerequisites

A basic understanding of JavaScript, Node.js, MySQL, as well as a system meeting the minimum requirements and with access to the Internet and the command line. (Not standard on Windows machines. You will have to install your own, e.g Git Bash* or Babun. On Mac OS X look in /Applications/Utilities/ for Terminal, on Linux the location of the command line will depend on whether you are using the Gnome or the KDE window manager. Then follow instructions in your chosen app's documentation.)

Here's a good tutorial if you're new to this environment: https://www.davidbaumgold.com/tutorials/command-line/.

\* Git for Windows will not run on anything older than Windows Vista (such as Windows XP or Windows Server 2003). 


Standard system requirements to run Friend Finder:

|  | Windows requirements | Mac requirements | Linux requirements |
|:---|:---:|:---:|:---:|
|**Operating system**|Windows 7 or later|Mac OS X Yosemite 10.10 or later 64-bit|Ubuntu 12.04+, Debian 8+, openSUSE 12.2+, or Fedora Linux 17+|
|**Processor**|Intel Pentium 4 or later	Intel|Intel Pentium 3 / Athlon 64 or later|
|**Memory**|2 GB minimum, 4 GB recommended|
|**Internet connection**|Required|

## Installation

Fork or clone the repository from https://github.com/cfpaige/friend-finder/.

![GitHub repository page screencap](/img/clone.png)

The app's dependencies are:

* express

All of them are available as packages that can be installed with npm or bower, or added with yarn. Check out npm documentation for specific instructions. (E.g. for express: https://www.npmjs.com/package/express).

The application can be viewed locally by setting the `PORT` environment variable to your chosen value (e.g. 8080), then launching the app from the command line:

`node server.js`
	
The application will then run on the specified `PORT`, and can be accessed from the browser at `localhost:PORT` (here, `localhost:8080`). 

For others to be able to fill the survey, however, the app will need to be deployed. (This version is available on Heroku: [live Friend Finder](https://random-heroku-route-name.herokuapp.com/.)

You will also need to set up your own local MySQL server and database for your Friend Finder app to be able to access the data.

#### Deployment

Heroku.

#### Usage

This is a full stack practice app (with focus on Heroku and Express). But if you do find The One through it, do let me know!

#### Built With 

[Virtual Studio Code](https://code.visualstudio.com/)

#### Contributing

Use the Issues feature of GitHub to suggest changes or fixes.

![Issues menu screencap](/img/issues.png)

#### Authors

- **cfpaige** - https://github.com/cfpaige?tab=repositories

#### License

Licensed under GNU GPL v3.
