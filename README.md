# Discord Queue Bot

This project is a Discord bot that allows users to add or remove their names from a queue and clear the queue with majority approval. It was developed in Node.js and reacts to specific commands sent by users in Discord.

To use the bot, users can send the following commands in a server where the bot is a member:

- `@o/ entrar` - adds the user's name to the queue and displays the current queue
- `@o/ sair` - removes the user's name from the queue and displays the current queue
- `@o/ limpar` - displays the current queue and prompts users to react with a thumbs up or thumbs down to clear the queue. If the majority of reactions are thumbs up, the queue will be cleared.

## Installation

1. Clone the repository

```sh
git clone https://github.com/e-s-c-h-e-r/o.git
```

2. Install the dependencies
```sh
npm install 
```

3. Replace YOUR_BOT_TOKEN in `index.js` with your bot token.
4. Start the bot

```sh
npm start
```

## Running the tests

```sh
npm run test
```

## Built With

* [Node.js](https://nodejs.org/) - JavaScript runtime
* [Discord.js](https://discord.js.org/) - Discord API library for Node.js

## Authors

* **Your Name** - *Initial work* -
