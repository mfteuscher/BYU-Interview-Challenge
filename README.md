# BYU Interview Challenge

This is a small application that I built for my job interview for a Software Developer position at Brigham Young University. It's a pretty simple web app that searches [The Movie Database](https://www.themoviedb.org) and displays the 10 films that match the search query. The frontend is written in [Vue](https://vuejs.org), using the [Nuxt.js](https://nuxt.com) framework. The frontend communicates with an independent backend that uses the [Express.js](https://expressjs.com) framework. It takes care of calling The Movie Database's API and then restructuring the data for my website to consume.

## Requirements
Before cloning this repository, make sure you have the following installed on your machine:
- Node v20 or higher
- pnpm (for package management)

## Startup
This is a monorepo using Turborepo. To get started after cloning the repo, first run `pnpm i`. Because this is a monorepo, this will install all dependencies for all applications inside of this repository.

After running `pnpm i`, the frontend and backend can be started either together or independently. If you run `pnpm dev` in the root directory, it will run the respective `dev` commands from each application in a single terminal. If you'd prefer to run them in independent terminals to terminate and restart at will, `cd` into the appropriate directory and run `pnpm dev` there, and that will start up the individual application in the terminal.

## Next Steps

4 hours is a pretty limited time to work on this project, so here are some additional things I would have done given I had more time
- Logging on my server so I know which endpoints get hit when and what the result of that API call was
- Actual type safety in my TypeScript. I just used the quick `any` annotation, but I'd prefer to actually build out the types so that TypeScript can properly do its job of enforcing type safety.
- Add an empty state for the time before the user searches, and for the times when users search query sends back no results.