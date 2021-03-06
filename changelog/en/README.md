# Change Log

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).

***

## [Unreleased]
### Added
- Mailer for "noreply" accaunt;
- [nodemailer](https://www.npmjs.com/package/nodemailer).

### Removed
- Hiding config files for development mode '/config/data/development/'.

## [v0.0.3] - 2018-08-06
### Added
- JSON-RPC on path '/api/jsonrpc';
- Locales for midle.shop-web-app v0.0.1 в '/public/static/locales-mswa';
- MIDLE Documents v0.0.1 RU in '/public/static/documents'.

### Changed
- midle.shop-web-app v0.0.3;
- Links in the Change log.

## [v0.0.2] - 2018-08-06
### Added
- [Node-convict](https://www.npmjs.com/package/convict) for the separation
of application settings in different modes of operation;
- [Helmet](https://www.npmjs.com/package/helmet) to increase the security;
- A simple application for redirecting HTTP requests in production mode;
- Middleware for request redirecting HTTP on HTTPS, without www on www.

### Removed
- Releases '/releases'.

## v0.0.1 - 2018-08-06
### Added
- Integrated midle.shop-web-app v0.0.2;
- Automatic restart in development mode with nodemon;
- Backend (Initiate a Backend with
[Express application generator](http://expressjs.com/starter/generator.html)):
    - handlebars (hbs) view engine support.
- [Releases](/releases);
- [Change Log](/changelog).

[Unreleased]: https://github.com/midle-shop/midle.shop-backend/compare/v0.0.3...HEAD
[v0.0.3]: https://github.com/midle-shop/midle.shop-backend/compare/v0.0.2...v0.0.3
[v0.0.2]: https://github.com/midle-shop/midle.shop-backend/compare/v0.0.1...v0.0.2
