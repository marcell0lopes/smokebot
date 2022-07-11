import { ICommand } from "wokcommands";

export default {
  category: "Geral",
  description: "Mostra os comandos do bot",
  slash: "both",

  callback: async ({ message, channel }) => {
    const commands = [
      "🍀 - **!f1**: Adiciona um beck na contagem do usuário e mostra o total",
      "🤪 - **!noias**: Mostra a quantidade de noias e baseados fumados",
      "🤔 - **!comandos**: 🤔🤔🤔🤔🤔 ",
    ];
    let reply = ` Olá, **${
      message.author.username
    }!** Os comandos do bot são: \n \n ${commands.join("\n\n")}`;

    channel.send(reply);
  },
} as ICommand;
