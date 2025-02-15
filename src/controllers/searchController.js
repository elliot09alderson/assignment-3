import { fetchYelpData } from "../services/yelpService.js";

export const getPizzaPlaces = async (req, res) => {
  const data = await fetchYelpData("pizza");
  res.json(data);
};

export const getJuicePlaces = async (req, res) => {
  const data = await fetchYelpData("juice");
  res.json(data);
};

export const getComboPlaces = async (req, res) => {
  const pizza = await fetchYelpData("pizza");
  const juice = await fetchYelpData("juice");
  res.json([...pizza, ...juice]);
};
