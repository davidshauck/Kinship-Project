# Kinship-Project

The Kinship project is a project that is used to help small businesses in the Hamilton Wenham area during these tough times.

# Getting started
1. Clone this repository using `git clone`
2. Install all the necessary packages by running:
```bash
npm i
cd client/
npm i
cd ..
```
3. You can choose to run both the client and the server in their own separate terminals, but a helper has been added to the     `package.json`

```bash
npm run start:dev
```


# Heroku Deployment

The app is currently deployed on Heroku using their container service. This enables users to deploy their containerized applications using Docker.

For more information on using Docker: See [Installing Docker](https://docs.docker.com/get-docker/)

A shortcut for running a local deployment of the application has been added to the `package.json`

```bash
npm run docker:build
```

**Although not advised** one can deploy the application from their local command line by running the following:

```bash
heroku container:login
heroku container:push web
