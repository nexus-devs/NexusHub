[![Nexus-Stats](/banner.png)](https://github.com/nexus-devs)

##

 [![GitHub release](https://img.shields.io/github/release/nexus-devs/nexus-stats.svg)]()
 [![build](https://ci.nexus-stats.com/api/badges/nexus-devs/nexus-stats/status.svg)](https://ci.nexus-stats.com/nexus-devs/nexus-stats)
 [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com)
 [![Discord](https://img.shields.io/discord/195582152849620992.svg?logo=discord)](https://discord.gg/AG8RPZ8)

 <br>

Nexus-Stats is an online service which provides insights on game economics and other ingame data with the use of cutting edge technology. This repo contains the application logic for our servers, including all statistics calculations. For data-tracking via OCR, please see [nexus-sentry](https://github.com/nexus-devs/nexus-sentry).

<br>

You can find the live version of this repo at [beta.nexus-stats.com](https://beta.nexus-stats.com)

<br>

## API
[Provisional docs](https://drive.google.com/open?id=16rbyQAG1cgQhwfFfXcHqn-o8txZ5dAZBf4hzr3VeJJE)

<br>

## Want to help?
Want to file a bug, contribute some code, or improve documentation? Excellent!
Read up on our [guidelines for contributing](/.github/CONTRIBUTING.md) and then open an
[issue](https://github.com/nexus-devs/nexus-stats/issues) regarding your
concern.

Nexus-Stats is entirely developed by community members of the games we support,
so if you wanna join our team as a regular contributor, you're more than welcome!

If you need an introduction to our code base, feel free to ask us on
[Discord](https://discord.gg/AG8RPZ8)! Though, we generally recommend going through
the "Getting started" tutorial for [Cubic](https://github.com/nexus-devs/cubic)
first. It's the framework that powers nearly everything on our webserver and
web app.

<br>

## Quickstart
Make sure you have Docker installed first - we recommend following the
[installation instructions](https://github.com/nexus-devs/docker) in our docker
repo. Once installed, locate this repo and run:
```sh
sudo bash docker.sh
```
This will automatically install and run all required services. Feel free to
grab a coffee while waiting for the first install, it'll probably take a few
minutes. Once done, check out `localhost:3000` and start hacking! You're gonna
find all API endpoints in `/api` while all sites and UI elements are in `/ui`.

<br>

## License
[CC BY-NC 4.0](https://creativecommons.org/licenses/by-nc/4.0/)
