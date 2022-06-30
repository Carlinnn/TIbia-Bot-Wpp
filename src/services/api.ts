import axios from "axios";
const api = axios.create({
  baseURL: "https://api.tibiadata.com/v3",
});

const characters = {
  profile: async (name: string) => {
    return await api.get(`/character/${name}`).then((res) => {
      let data = res.data.characters;
      let result = {
        character: data.character,
        accInfo: data.account_information,
      };

      return result;
    });
  },
};

export { characters };
