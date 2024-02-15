import config from "../configs/config";
import axios from "axios";

const SERVICE = "api/items";
export async function searchItems(searchTerm) {
  try {
    const url = new URL(`${config.bff_url}:${config.bff_port}/${SERVICE}`);
    const params = new URLSearchParams();
    params.append("search", searchTerm);
    url.search = params.toString();

    const headers = {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    };

    const response = await axios.get(url, { headers });

    return response.data;
  } catch (error) {
    console.error("Error fetching items:", error);
    throw error;
  }
}

export async function getItem(id) {
  try {
    const url = new URL(`${config.bff_url}:${config.bff_port}/${SERVICE}/${id}`);

    const headers = {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    };

    const response = await axios.get(url, { headers });

    return response.data;
  } catch (error) {
    console.error("Error fetching item:", error);
    throw error;
  }
}
