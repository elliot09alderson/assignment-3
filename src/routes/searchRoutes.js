import express from "express";
import {
  getPizzaPlaces,
  getJuicePlaces,
  getComboPlaces,
} from "../controllers/searchController.js";

const router = express.Router();

router.get("/search/pizza", getPizzaPlaces);
router.get("/search/juice", getJuicePlaces);
router.get("/search/combo", getComboPlaces);

export default router;
