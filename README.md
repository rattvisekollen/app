# app
Angular UI for exploring product database.

## Setup instructions
```bash
# install node
brew install node

# install grunt
npm install -g grunt-cli

# install dependencies
grunt install

# start server
grunt serve

# your app should now be running at http://localhost:9000
```

## How it works
This is a purely static, single page app. `grunt` merely serves the static templates used for rendering, while the data presented is fetched from the API found in the [api](https://github.com/rattvisekollen/api) project.
