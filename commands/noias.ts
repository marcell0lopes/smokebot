import { ICommand } from "wokcommands";
import UserModel, { UserInt } from "../models/user";

export default {
  category: "Fumantes",
  description:
    "Mostra o número de fumantes no servidor e quantos baseados já fumaram",

  callback: async ({ message, channel }) => {
    let usersDataBase = await UserModel.find({});
    let users = usersDataBase.map((user) => user.joints);
    let rank = usersDataBase.sort((a, b) => (a.joints > b.joints ? -1 : 1));
    let totalJoints = users.reduce((acc, curr) => acc + curr, 0);

    let replyMsg = `🌿 - **${users.length} fumantes** no server, e __${totalJoints} baseados__  - 🌿\n\n`;

    for (let noia in rank) {
      let targetUser = rank[noia];
      let user: UserInt | any = await UserModel.findOne({
        discordId: targetUser.discordId,
      });
      let userName = user.name;
      let userJoints = user.joints;
      let index = parseInt(noia) + 1;
      replyMsg += `🍃 - ${index} - __**${userName}**__ fumou **${userJoints}** baseados \n`;
    }

    message.reply(replyMsg);
  },
} as ICommand;
