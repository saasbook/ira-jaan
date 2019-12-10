# ira-jaan

Deployed on https://virtualparents.herokuapp.com/

# Virtual Parents Platform

The Ira Jaan foundation is looking to expand into 3 more school projects this coming year. One of the schools is an orphanage for young girls who were abused and are being taken care of by a church. We are looking to help teach and upskill these children to help educate them for a better future, but we also wanted to create additional benefits for these students. The foundation would like to have individual donors sponsor and take care of children over these years monetarily. However, it would be extra special if we could personally connect donors to these children. In that respect it would be great if we could reward students for their hard work and discipline with gifts they could select from. We imagine students can get virtual points for activities they perform and they are either validated by staff or by the donors themselves. These points can be redeemed for gifts and we will help determine the conversion rate.

[![Maintainability](https://api.codeclimate.com/v1/badges/9dd1bf4a0644dcd03197/maintainability)](https://codeclimate.com/github/abhijay-berkeley-public/ira-jaan-virtual-parent/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/9dd1bf4a0644dcd03197/test_coverage)](https://codeclimate.com/github/abhijay-berkeley-public/ira-jaan-virtual-parent/test_coverage)
[![Build Status](https://travis-ci.org/abhijay-berkeley-public/ira-jaan-virtual-parent.svg?branch=master)](https://travis-ci.org/abhijay-berkeley-public/ira-jaan-virtual-parent)


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
