# Artcom # Goals [![HitCount](http://hits.dwyl.com/Gurjot-Sidhu/Artfrontend.svg)](http://hits.dwyl.com/Gurjot-Sidhu/Artfrontend)


A community-based art sharing application designed to help you share work with other people

## Motivation
I created this app because I am part of a few groupchats with friends and receive many photos, I wanted to create an app where all of my friends could post their photos in communities(Cars,memes,movies) where they would be relevant.

## Build Status
Build failing

## Code Style
Standard

## Screenshots

## Tech/Framework used
**Built with**
-Javascript
-React
-Rails

## Features
- I added JWT to authenticate old accounts and create new accounts with secure logins.
- Integrated a token to persist the user on page change or refresh
- I added a sign up and login feature to allow user to access the community page.
- The user can view/add artwork to any community and delete their own.
- The user can browse and inspect artwork in any community.

## Code Example
Render Community Code

<img width="324" alt="Screen Shot 2020-06-02 at 3 55 36 PM" src="https://user-images.githubusercontent.com/9657307/83563772-9a394080-a4e9-11ea-8a53-2ba503237bbe.png">

In this snippet above, this function's purpose is to render communites to the page when it recieves props from the url. The if statement check to see whether or not their is a token within the state of app.js. This token exists upon successful login. It will then create a component with props of user,token,commmunities and 2 methods(addNewArtowk and deleteArtwork). If there is no token because of a failed login attempt or if you logout you will be redirected to the login page. 

## How to use

### Clone down backend repo https://github.com/Gurjot-Sidhu/Artbackend

- Download and install `ruby v 2.6.1`
- run `bundle install`
- run `rails db:migrate`
- run `rails db:seed`
- run `rails s`

### Then Clone down this repo
- Download npm https://nodejs.org/en/
- run `npm install`
- run `npm start`

## Contribute
All contributers welcome.If you would like to contribute just ask(permission granted upon request)

## License
GNU General Public License v3.0 @ Gurjot-Sidhu
