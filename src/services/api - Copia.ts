import axios from "axios";
const api = axios.create({
  baseURL: "https://api.tibiadata.com/v3",
});

const character = {
  profile: async (name: string) => {
    return await api.get(`/character/${name}`).then((res) => {
      let data = res.data.characters;
      let result = {
        name: data.character.name,
        sex: data.character.sex,
        title: data.character.title,
        unlocked_titles: data.character.unlocked_titles,
        vocation: data.character.vocation,
        level: data.character.level,
        achievement_points: data.character.achievement_points,
        world: data.character.world,
        residence: data.character.residence,
        guild: data.character.guild,
        last_login: data.character.last_login,
        account_status: data.character.account_status,
        comment: data.character.comment,
      };

      return result;
    });
  },
};

export { character };
