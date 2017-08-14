# react-redux-saga-graphcool-auth0
This is a scaled back implementation of my base app which includes things like Ethereum web3 integration & aws delegate tokens through Auth0.

The removed ethereum portions are based on:
https://github.com/lutangar/ethereact

Additional wrappers around the web3 api to send transactions, get accounts, & get balance here:
https://github.com/tkntobfrk/ethereum-starter

The auth0 AWS delegate token can allow users a personal slice of AWS S3 storage to upload files.  For the simplest use case of something like S3 storage graph.cool has a file API that could be used instead. So I took this concept out to avoid making the example overly complex. AWS creds and passing them out to various social identities should be handled with care so this was removed.

Original has some other features, mostly on graphcool permissions, subscriptions, & relationships "friends/likes/etc".

Redux tools work.

# clone the repo
* git clone https://github.com/tkntobfrk/react-redux-saga-graphcool-auth0.git
* cd react-redux-saga-graphcool-auth0
* cd app/utils
* copy config-example.js config.js
* cd ../..

# create Auth0 account - https://manage.auth0.com/#/
* create new auth0 client
* configure social providers, ensure social provider works in the Auth0 console before using in the App
* capture clientid, client secret, and domain
* add the auth0 domain to ../utils/config.js
* add the auth0 clientid to ../utils/config.js

# create graphcool account - https://www.graph.cool/
* graphcool


# install graphcool cli & schema
* npm install -g graphcool
* graphcool init --schema ./infrastructure/init-post-schema.graphql
* add the simple api url to ./app/utils/config.js
* return to graph.cool console to add auth0 as authentication provider on the integrations tab for the new project

#run it
* npm i
* npm start
* navigate localhost:3000
