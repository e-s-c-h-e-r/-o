import { Client, Intents } from 'discord.js';

const client = new Client({
    ws: { intents: Intents.NON_PRIVILEGED },
});

const YOUR_BOT_TOKEN = "8552e36ae2cb8b3d97296dd2840f4da1d0c9d44bf28810a8a9889f1ac04c1060";

let queue: Array<string> = [];

client.on('message', (message) => {
    if (message.content.startsWith("@o/")) {
        let command = message.content.split(" ")[1];
        if (command === "entrar") {
            let author = message.author.username;
            queue.push(author);
            message.channel.send("Fila: " + queue);
        } else if (command === "sair") {
            let author = message.author.username;
            let index = queue.indexOf(author);
            if (index >= 0) {
                queue.splice(index, 1);
            }
            message.channel.send("Fila: " + queue);
        } else if (command === "limpar") {
            message.channel.send("Fila: " + queue +
                "\nPara limpar a lista, a maioria dos usuΓ‘rios na fila precisa concordar");
            message.react("π").then(
                () => message.react("π")
            ).then(() => {
                const filter = (reaction, user) => {
                    return ['π', 'π'].includes(reaction.emoji.name) && user.id === message.author.id;
                };
                message.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
                .then(collected => {
                    const reaction = collected.first();
                    if (reaction.emoji.name === 'π') {
                        queue = []
                        message.channel.send("Fila limpa!");
                    } else {
                        message.channel.send("Limpeza da fila cancelada.");
                    }
                })
                .catch(collected => {
                    message.channel.send("Limpeza da fila cancelada.");
                });
            });
        }
    }
});

client.login(YOUR_BOT_TOKEN);
