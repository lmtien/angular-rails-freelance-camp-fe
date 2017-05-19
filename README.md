Front-end app using Angular 4.
Live Demo: [https://freelance-camp-fe.herokuapp.com](https://freelance-camp-fe.herokuapp.com)

This application will communicate with two other microservices using Ruby on Rails:
 * [Documents Service](https://github.com/lmtien/angular-rails-freelance-camp-docs.git)
 * [Proposals Service](https://github.com/lmtien/angular-rails-freelance-camp-proposal.git)

## Development server

Run `ng serve` for a dev server. The app will automatically reload if you change any of the source files.


## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Production run

    npm run postinstall
    npm start
    
This repository is configured to be deployed on Heroku. You can just simply push this code to your Heroku account.

## Development Error: "Invalid Host Header"

If you encouter the error "Invalid Host Header", you can currently fix it by:
 * Edit the following line in `node_modules/webpack-dev-server/lib/Server.js` (line 425)
 * Change to `return true;`

Please note that, this is very bad practice when we modify modules code. Try at your own risks!

Or you can wait until Angular CLI team can fix this problem, watch out for the issues [here](https://github.com/angular/angular-cli/issues/6349).