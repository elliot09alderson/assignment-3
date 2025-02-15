import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const YELP_API_KEY = process.env.YELP_API_KEY;
const YELP_URL = "https://api.yelp.com/v3/businesses/search";

export const fetchYelpData = async (query) => {
  try {
    const response = await axios.get(YELP_URL, {
      headers: { Authorization: `Bearer ${YELP_API_KEY}` },
      params: { term: query, location: "New York", limit: 10 },
    });

    return response.data.businesses.map((business) => ({
      name: business.name,
      address: business.location.address1 || "N/A",
      rating: business.rating,
      phone: business.phone || "N/A",
    }));
  } catch (error) {
    console.error("Error fetching Yelp data:", error.message);
    return [];
  }
};
