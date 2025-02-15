import { gql } from "apollo-server-express";

const typeDefs = gql`
  type Query {
    searchPizza: [Place]
    searchJuice: [Place]
    searchCombo: [Place]
  }

  type Place {
    name: String
    address: String
    rating: Float
    phone: String
  }
`;

export default typeDefs;
