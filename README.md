# ira-jaan

[![Maintainability](https://api.codeclimate.com/v1/badges/9dd1bf4a0644dcd03197/maintainability)](https://codeclimate.com/github/abhijay-berkeley-public/ira-jaan-virtual-parent/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/9dd1bf4a0644dcd03197/test_coverage)](https://codeclimate.com/github/abhijay-berkeley-public/ira-jaan-virtual-parent/test_coverage)
[![Build Status](https://travis-ci.org/abhijay-berkeley-public/ira-jaan-virtual-parent.svg?branch=master)](https://travis-ci.org/abhijay-berkeley-public/ira-jaan-virtual-parent)

Deployed on https://virtualparents.herokuapp.com/

## Virtual Parents Platform

The Ira Jaan foundation is testing a new way to have individual donors sponsor and take care of orphan children monetarily. We made this website to personally connect donors to children by rewarding students for hard work with gifts they could select from. Students can get virtual points for activities they perform and points are approved by teachers or donor "parents." Points can be redeemed for gifts.

## Requirements

We used Rails as our backend server, React for our frontend components, and Redux to keep track of state.
* React-Redux 7.1.3
* Rails 6.0.0

## Setup for Local Environment

Run yarn install in the main directory.
```
yarn install
```

Run the following commands on the app directory to start the server.
```
bundle install
rake db:migrate
rails s
```

The website should now be running on `localhost:3000`.

## Links

Final Presentation Slides - https://docs.google.com/presentation/d/1FmU6pMa7RN-m0QFjBiOwfp97i4PLkA3nnFSIVagn8vA/edit?usp=sharing
Video Overview - https://youtu.be/v96Bwf5QNn4

## Implemented Features

### Frontend

1. Log in as Child or Administrator (Teacher/Parent)
2. Sign up as Child or Administrator (Teacher/Parent)
3. View activities as child
4. View created activities as Administrator
5. Create new activities as Administrator
6. View profile as all users
7. Log out


### Backend 

Everything in the front-end and:
1. Child can start and finish activities listed under Administrators
2. Administrators can approve finished child activities, rewarding the corresponding child points.
3. Administrators can create rewards
4. Child can claim rewards listed under Administrators
5. Administrators and children can be connected
6. Can search administrators and children by name/username

