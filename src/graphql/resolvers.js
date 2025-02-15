import { fetchYelpData } from "../services/yelpService.js";

const resolvers = {
  Query: {
    searchPizza: async () => await fetchYelpData("pizza"),
    searchJuice: async () => await fetchYelpData("juice"),
    searchCombo: async () => {
      const pizza = await fetchYelpData("pizza");
      const juice = await fetchYelpData("juice");
      return [...pizza, ...juice];
    },
  },
};

export default resolvers;
