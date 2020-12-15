## App Service Overview

This project is an Angular project developed unsing Docker with no development dependencies installed on the host development workstation.

## Steps to Create

The project local docker-compose file launches a node image in interactive terminal mode bind mounted to the project directory. This can be executed with this command `docker-compose run --rm npm` which will put you in an attached command prompt. The command `npx -p @angular/cli ng new <project-name>` can be used to install the Angular cli and
create a new project in one go. The Angular project will be created in a subdirectoy of the project directory so you may wish to move it back up to the project root directory, do this from a WSL command prompt and not in Windows Explorer otherwise you will be waiting a long time!

The `npm start` command must add `--host 0.0.0.0` and port 4200 must be mapped in order for the Angular application to be accessible from the host workstation.

To build the image manually use `docker build -t <imagename> .`

To run a container based on the image manually use `docker run -it --rm -p 4200:4200 <imagename>`

Once you've verified the container is working. Add its configuration as a new service into the workspace's docker-compose file including the volume directives necessary to map the project directory into the running container. Run just the Angular app using `docker-compose up <servicename>`

At this point the project can be edited on the host workstation and changes will be automatically picked up by the running container.

The Angular cli utility container can be used to add components and services by running it using `docker-compose run --rm npm` as before. `ng` is only installed locally in the project so must be run using `node_modules/.bin/ng`. `npm` can be run here also to install additional packages.

## Notes

For development the application container needs to have the Angular cli installed so that it can be used to serve the application. In production the application container should contain the built application and something to serve it.

It will not be possible to install the Angular cli locally to the project, and use the instance of the cli in node_modules mirrored into the host workstation bind mapped project directory, since ng depends on node which itself may not be present on the host development workstation.

We do still need to be able to execute `npm install` commands from the host machine. We could use a utility container for this, but if we could use the Angular installation in the application container instead that has several benefits. 1) Saves on the need for an extra container and all the config.
2) ...



