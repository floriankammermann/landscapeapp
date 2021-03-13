# Custom Landscapeapp 

This is an attempt to build custom landscapes, based on https://github.com/cncf/landscapeapp

## Goals
* run the landscapeapp locally without any API Keys 
* be able to provide custom data structures

## How to run it
* the tests are done with the [cicd foundation landscape](https://github.com/cdfoundation/cdf-landscape)
* the build/run instructions are taken from https://github.com/cncf/landscapeapp

### Step by Step Guide how to get a working landscape locally
* create directory `landscapes`
* enter directory `landscapes`
* clone https://github.com/cdfoundation/cdf-landscape
* clone https://github.com/floriankammermann/landscapeapp
* set PROJECT_PATH `<YOUR_PATH>/landscapes/cdf-landscape`
* enter directory `landscapes/landscapeapp`
* execute yarn `yarn` -> this should fetch all dependencies
* start a local dev env `yarn run open:src` -> this should start the landscapeapp in dev mode, you should be able to access the landscapeapp on http://localhost:3000

### Make changes to the landscape
* Open the `settings.yml` in the cdf-landscape
* Change home -> header to `<h1>my test landscape</h1>`
* enter directory `landscapes/landscapeapp`
* we need to ignore the version, since we are on a fork of the landscapeapp: `export SKIP_VERSION_CHECK=1`
* run `yarn fetch`
* start the landscapeapp in dev mode `yarn run open:src`
