import { Command } from "../../models/Command";
import { characters } from "../../services/api";
import { toDate } from "../../services/functions";

export = class extends Command {
  constructor(client) {
    super(client, {
      name: "ping",
      description: "Qual o nome do seu personagem?",
    });
  }

  run = async (msg, args) => {
    const sock = this.client.sock;

    const { character, accInfo } = await characters.profile(args.join(" "));

    console.log(character);

    let loginDT = new toDate(character.last_login);

    let profile = [
      `*Personagem:* ${character.name}\n`,
      `*sex:* ${character.sex}`,
      `*vocation:* ${character.vocation}`,
      `*level*: ${character.level}`,
      `*achievement_points:* ${character.achievement_points}`,
      `*world:* ${character.world}`,
      `*residence:* ${character.residence}`,
      `*guild:* ${character.guild.name ? character.guild.name : "sem guild"}`,
      `*last_login* ${loginDT.getTime()} | ${loginDT.getDate()}`,
      `*Premium?:* ${
        character.account_status.split(" ")[0] == "Free" ? "Não" : "sim"
      }`,
    ];

    sock.sendMessage(msg.key.remoteJid!, {
      text: profile.join("\n"),
    });
  };
};
