
![Nexus-Stats Dev Version v0.1.1](/banner.png)

- - - -
<br>

## Build Information
**This build is part of the Nexus Rework and still misses fundamental features.**
Old development builds can be found in the commit history starting at #271
<br>
<br>

## What's working so far?
- [x] **API-Node:** HTTP/Socket.io Web-API which automatically exposes Resource-Node methods. Also handles authorization.
- [ ] **Core-Node:** Resource-Node with all application Logic. Statistics are calculated here.
- [ ] **Web-Node:** View Layer for End-User.
<br>
<br>

## Quickstart
>`npm install && npm start`
=> then go to `localhost:3400/foo` to get your `bar`
<br>
<br>

## Requirements
- Redis
- Mongodb
- [nexus-auth](https://github.com/Kaptard/nexus-auth) instance
<br>

**Note:** Make sure to set your preferences in /config/env.config.js
