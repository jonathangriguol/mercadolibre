import dotenv from 'dotenv';
dotenv.config();

const config = {
  meli_api_url: process.env.MELI_API_BASE_URL,
  app_port: process.env.APP_PORT,
};

export default config;