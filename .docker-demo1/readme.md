## Overview

This is a demonstration of a complete web application comprised of three separate services. A single page web application, a backend web service, and a database.

Each service is developed in a Docker container where it can be run and debugged. None of the dependencies of any of the services were installed into the host development workstation during development.

## Getting started

Create a VsCode workspace.

Add a directory called .docker-demo to hold the workspace files.
   You need to create a specific directory to hold files that apply to the whole workspace since VsCode does not support files added directly to the workspace. And you probably want this directory to have the same name as the workspace since docker-compose will add the name of the directory it's in to the containers it creates.

## Database

The database used is an off the shelf Mongo image, so all that's required is an entry in the docker-compose file defining the image used, the connection configuration, and a named volume for the database data so that it survives container recreation.

## Api Service

This is a nodejs Express web service. The first thing you need to be able to do is to generate a nodejs application but without having to install nodejs on the development workstation. This is done by defining a project local docker-compose file in which is the definition of a utility container which runs a specified version of nodejs and uses a bind mount so that the effect of commands executed in the container are mirrored back to the project directory.

The required project framework can be then be constructed using the following commands.

      docker-compose run --rm npm init
      docker-compose run --rm npm install express
      docker-compose run --rm npm install body-parser
      docker-compose run --rm npm install mongoose

It's probably not necessary to create and remove the utility container for each command like this.



## App Service