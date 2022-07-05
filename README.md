## Description
Rotacloud technical test using NestJs. The GET endpoint for the /users endpoint has been implmented to return the given list of users in alphabetical order by first name and then by last name.

A couple of unit tests have been written to check that this logic is correct, along with an e2e test.
Once the app is running following the instructions below find Swagger running at the following url: http://localhost:3000/docs.

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
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

## Future Developments
- If the application was to grow and handle more data, I would look to implement a database solution next using a relation datbase such as PostgreSQL.
- For deployment of the application as it dockerised, it can be deployed into a docker swarm or kubernetes cluster.