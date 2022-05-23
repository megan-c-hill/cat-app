# The Cat App

Get your daily dose of Cats with The Cat App.  The Cat App utilizes [The Cat API](https://docs.thecatapi.com/) to make it easy to find and filter your favorite cats!

## Overview:
The Cat App should expose it's own REST API on top of The Cat API.  API endpoints should require some sort of authentication to consume.

## Requirements:

- Ability to randomly find a cat by breed
- Filter cats by animated or static images
- Get the latest 5 cats
- Return only dog friendly cats

**BONUS POINTS:** *Include a view (React App) for interacting with the API.*

## How to Run:
Run `npm run dev` and navigate to 0.0.0.0:3000, select your filters, and hit submit to see some cat pictures!

## Known Limitations / Future Improvements
- Selecting Dog Friendly and a particular breed returns no results regardless of if that breed is dog friendly
- No clear loading indicator
- No clear message when 0 cats are returned
- cat-endpoint is pretty messy and could use some more helpers to clean it up
- Secrets are stored in the `next.config.js` in a production project they should be store in a secret management tool