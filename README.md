# ira-jaan

[![Maintainability](https://api.codeclimate.com/v1/badges/9dd1bf4a0644dcd03197/maintainability)](https://codeclimate.com/github/abhijay-berkeley-public/ira-jaan-virtual-parent/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/9dd1bf4a0644dcd03197/test_coverage)](https://codeclimate.com/github/abhijay-berkeley-public/ira-jaan-virtual-parent/test_coverage)
[![Build Status](https://travis-ci.org/abhijay-berkeley-public/ira-jaan-virtual-parent.svg?branch=master)](https://travis-ci.org/abhijay-berkeley-public/ira-jaan-virtual-parent)

Deployed on https://virtualparents.herokuapp.com/

## Virtual Parents Platform

The Ira Jaan foundation is testing a new way to have individual donors sponsor and take care of orphan children monetarily. We made this website to personally connect donors to children by rewarding students for hard work with gifts they could select from. Students can get virtual points for activities they perform and points are approved by teachers or donor "parents." Points can be redeemed for gifts.

## Requirements

We used Rails as our backend server, used React for our frontend components, and kept track of state using Redux.
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
