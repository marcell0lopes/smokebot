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
      const targetUserData: UserInt = await UserModel.create({
        discordId: author.id,
        name: author.username,
        joints: 1,
      });

      await targetUserData.save();

      message.reply("Esse é seu primeiro baseado :pleading_face: ");
    }

    targetUser.joints++;
    await targetUser.save();

    const responses = [
      `Fumante de 💩, vc já fumou ${targetUser.joints} baseados nessa porra 👺`,
      `😈 oi anjo, você está no seu ${targetUser.joints}º beck 😈`,
      `Noia do carai jhjjkkk esse é o seu ${targetUser.joints} becksons five nesse server 😳`,
      `${targetUser.joints} becks ,  ${targetUser.name}... você não tem vergonha? 🤬`,
      `${targetUser.name} fumou ${targetUser.joints} baseados 🥳`,
      `Sua mãe sabe que você fumou ${targetUser.joints} baseados aqui? 👻`,
      `⏰⏰⏰ hora de você dar um tempo!! Já fumou ${targetUser.joints} baseados ⏰⏰⏰`,
      `🤑 Se a cada baseado que  ${
        targetUser.name
      } fumasse, depositasse 10 reais na minha conta, eu já teria ${
        targetUser.joints * 10
      } reais na minha conta. 🏦💰`,
    ];

    message.reply(responses[randomIndex(responses.length)]);
  },
} as ICommand;
