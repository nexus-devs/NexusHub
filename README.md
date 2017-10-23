[![Warframe-Nexus](/banner.png)](https://github.com/nexus-devs)

## 

[![Discord](https://discordapp.com/api/guilds/195582152849620992/widget.png)](https://discord.gg/AG8RPZ8) [![GitHub release](https://img.shields.io/github/release/nexus-devs/nexus-stats.svg)]()

Nexus-Stats is an online service which provides insights on game economics and other ingame data with the use of cutting edge technology. This repo contains the application logic for our servers, including all statistics calculations. For data-tracking via OCR, please see [nexus-sentry](https://github.com/nexus-devs/nexus-sentry).

<br>

You can find the live version of this repo at [beta.nexus-stats.com](https://beta.nexus-stats.com)

<br>

## API
[Provisional docs](https://drive.google.com/open?id=16rbyQAG1cgQhwfFfXcHqn-o8txZ5dAZBf4hzr3VeJJE)

<br>

## Quickstart
>`npm install && npm start`
=> then go to `localhost:3010/foo` to get your `bar`
<br>

## Testing
>`node testserver.js && npm test`

<br>

## Project Structure
Nexus-Stats is powered by [blitz-js](https://github.com/nexus-devs/blitz-js) for all major server components. It is recommended to have a look at the basic concept of the framework first.

<br>

### Web-Pages
For our website view, take a look at the [/view/](https://github.com/nexus-devs/nexus-stats/tree/development/view) directory. We're using Vue.js for server-sided and client-sided rendering. For ease of use, most of the Vue.js and webpack setup is abstracted inside the [blitz-js-view](https://github.com/nexus-devs/blitz-js-view) package, so there's a few things to consider:

#### Routing
Routing is automated by creating standard [blitz-js-core](https://github.com/nexus-devs/blitz-js-core) endpoint modules inside the [/view/endpoints/](https://github.com/nexus-devs/nexus-stats/tree/development/view/endpoints) folder. Simply specify the vue file to load in `this.schema.view` relative to the source path and you're good to go. The benefit of loading routes this way is that we can leverage features like rate limiting, caching and authorization from blitz-js.

#### Pages/Components
Page templates go into `/view/pages/`, components go into `/view/components`. It's pretty simple actually.

#### Static Files
Static files should be dropped in the `/assets/` folder. Anything you drop there is accessible to any user, so make sure not to leave anything secret.

<br>

### API
You can find our API endpoint modules in [/api/](https://github.com/nexus-devs/nexus-stats/tree/development/api), which are split into client and core endpoints. The client node performs simple read queries for end-users while the core node processes CPU intensive tasks like statistics calculations. In practice, this allows us to host the core node on a more powerful machine, while the client node can run on the same machine as the API and Auth node.

<br>

## Requirements
- [Node.js 8.4.0+](https://nodejs.org/en/)
- [Redis](https://redis.io/)
- [Mongodb](https://www.mongodb.com/download-center#community)
<br>

## License
[CC BY-NC 4.0](https://creativecommons.org/licenses/by-nc/4.0/)
