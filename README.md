[![Travis (.org) branch](https://img.shields.io/travis/autoteyle/docker-puppeteer-stealth/master)](https://travis-ci.org/autoteyle/docker-puppeteer-stealth)
[![Docker Pulls](https://img.shields.io/docker/pulls/autoteyle/puppeteer-stealth)](https://hub.docker.com/r/autoteyle/puppeteer-stealth)
[![GitHub tag (latest by date)](https://img.shields.io/github/v/tag/autoteyle/docker-puppeteer-stealth)](https://hub.docker.com/repository/docker/autoteyle/puppeteer-stealth/tags?page=1)

# Docker Puppeteer Stealth
Provides minimal [Puppeteer](https://github.com/puppeteer/puppeteer) image in the stealth mode using
[puppeteer-extra-plugin-stealth](https://github.com/berstend/puppeteer-extra/tree/master/packages/puppeteer-extra-plugin-stealth) 
without [Google Chrome] inside.

Can be utilized together with [docker-chrome-headless](https://github.com/autoteyle/docker-chrome-headless) image that provides
[Google Chrome]. 

## Usage

The [index.js](.docker/index.js) contains a usage example and is executed by default
when running [docker-compose.yml](docker-compose.yml). 

    $ docker-compose run app
    Creating network "docker-puppeteer_default" with the default driver
    Creating docker-puppeteer_chrome_1 ... done

## Development
Run locally built image

    $ docker-compose up app
    Creating network "docker-puppeteer_default" with the default driver
    Creating docker-puppeteer_chrome_1 ... done

Rebuild image

    $ docker-compose build

## Maintainers

- [build-failure](https://github.com/build-failure)

## License

See the [LICENSE.md](LICENSE.md) file for details

[Google Chrome]: https://www.google.com/chrome/
