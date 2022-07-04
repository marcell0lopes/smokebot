import { ICommand } from "wokcommands";
import UserModel, { UserInt } from "../models/user";

import randomIndex from "../utils/random";

export default {
  category: "Fumantes",
  description: "Adiciona um beck na contagem do usuário e retorna esse valor",
  slash: false,

  callback: async ({ message }) => {
    let author = message.author;

    let targetUser: UserInt | any = await UserModel.findOne({
      discordId: author.id,
    });

    if (!targetUser) {
      const targetUserData: UserInt | any = await UserModel.create({
        discordId: author.id,
        name: author.username,
        joints: 1,
      });

      targetUserData.save();

      message.reply("Esse é seu primeiro baseado :pleading_face: ");
    } else {
      targetUser.joints++;
      await targetUser.save();

      const responses = [
        `fumante de merda, vc já fumou ${targetUser.joints} baseados nessa porra`,
        `oi anjo, você está no seu ${targetUser.joints}º beck`,
        `Noia do carai jhjjkkk esse é o seu ${targetUser.joints} becksons five nesse server`,
      ];
      message.reply(responses[randomIndex(3)]);
    }
  },
} as ICommand;
