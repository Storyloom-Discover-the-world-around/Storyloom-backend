<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

<p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
<p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
<a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
<a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>

## Storyloom Backend

A backend service for managing user-generated stories with support for translations, subscriptions, and community engagement.

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository customized for the Storyloom backend. It provides user authentication with JWT, story management, and more.

## Installation

```bash
$ npm install
```

## Project Structure

```
src/
|-- auth/
|   |-- auth.module.ts
|   |-- auth.service.ts
|   |-- auth.controller.ts
|   |-- jwt.strategy.ts
|   |-- jwt-auth.guard.ts
|-- user/
|   |-- dto/
|   |   |-- create-user.dto.ts
|   |   |-- update-user.dto.ts
|   |-- user.module.ts
|   |-- user.service.ts
|   |-- user.controller.ts
|-- story/
|   |-- dto/
|   |   |-- create-story.dto.ts
|   |   |-- update-story.dto.ts
|   |-- story.module.ts
|   |-- story.service.ts
|   |-- story.controller.ts
|-- payment/
|   |-- dto/
|   |   |-- create-payment.dto.ts
|   |   |-- update-payment.dto.ts
|   |-- payment.module.ts
|   |-- payment.service.ts
|   |-- payment.controller.ts
|-- notifications/
|   |-- dto/
|   |   |-- create-notification.dto.ts
|   |   |-- update-notification.dto.ts
|   |-- notifications.module.ts
|   |-- notifications.service.ts
|   |-- notifications.controller.ts
|-- b2b/
|   |-- dto/
|   |   |-- create-b2b.dto.ts
|   |   |-- update-b2b.dto.ts
|   |-- b2b.module.ts
|   |-- b2b.service.ts
|   |-- b2b.controller.ts
|-- subscription/
|   |-- dto/
|   |   |-- create-subscription.dto.ts
|   |   |-- update-subscription.dto.ts
|   |-- subscription.module.ts
|   |-- subscription.service.ts
|   |-- subscription.controller.ts
|-- comments/
|   |-- dto/
|   |   |-- create-comment.dto.ts
|   |   |-- update-comment.dto.ts
|   |-- comments.module.ts
|   |-- comments.service.ts
|   |-- comments.controller.ts
|-- translations/
|   |-- dto/
|   |   |-- create-translation-request.dto.ts
|   |   |-- update-translation-request.dto.ts
|   |-- translations.module.ts
|   |-- translations.service.ts
|   |-- translations.controller.ts
|-- common/
|   |-- interceptors/
|   |-- filters/
|   |-- decorators/
|   |-- pipes/
|-- database/
|   |-- database.module.ts
|   |-- database.service.ts
|-- config/
|   |-- config.module.ts
|   |-- config.service.ts
|-- utils/
|   |-- constants.ts
|   |-- helpers.ts
|-- main.ts
|-- app.module.ts
|-- app.service.ts
|-- app.controller.ts
```

### Explanation

- **`auth/`**: Handles authentication logic using JWT, including strategies and guards.
- **`user/`**: Contains user-related logic, services, DTOs for validation, and controllers.
- **`story/`**: Manages stories with DTOs for validation and logic for CRUD operations.
- **`common/`**: A place for reusable interceptors, filters, decorators, and pipes.
- **`app.module.ts`**: The main module that imports other feature modules.

## Generating Modules, Services, Controllers, and DTOs

To set up new modules, services, controllers, and DTOs, use the following commands:

```bash
nest g mo NAME
nest g s NAME
nest g co NAME
nest g cl NAME/dto/create-NAME.dto --no-spec
nest g cl NAME/schema/NAME.schema.ts --no-spec

```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```



- Website - [https://nestjs.com](https://nestjs.com/)

## License

Nest is [MIT licensed](LICENSE).

