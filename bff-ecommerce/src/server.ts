import app from './app.js';
import config from './configs/config.js';

const PORT = config.app_port;

// Init server
app.listen(PORT, () => {
  console.log(`Server started at port: ${PORT}`);
});