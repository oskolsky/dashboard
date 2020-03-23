## Bork Dashboard

## Setup environment

```bash
$ npm install
```

## NPM scripts

```bash
# Mockserver serving mocks under "__mocks__" at http://localhost:8085
$ npm run mockserver

# Run webpack in watch mode
# and notifier which display OS-level notifications for webpack build errors and warnings
# (http://localhost:8081/)
$ npm run start

# Application build
$ npm run build

# Run eslint and stylelint
$ npm run lint
```

## Configure

The settings.js is configure file at the root of the project.

```javascript
var API_HOST = 'http://localhost:8085'
var SET_INTERVAL = 300000
```
