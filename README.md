# Overview

Just sets headers to cache, based on the given ''age''.

# Install

``npm install connect-cache-headers --save``

# Middleware params
- age (number)
- private (boolean)

# Usage

Set max-age and public
```
...
app = express()
app.use(require('connect-cache-headers')(1800))
...
```

Set max-age and private
```
...
app = express()
app.use(require('connect-cache-headers')(1800, true))
...
```
