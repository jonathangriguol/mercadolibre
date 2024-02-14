import app from './app.ts';
import config from './configs/config.ts';

const PORT = config.app_port;

// Init server
app.listen(PORT, () => {
  console.log(`Server started at port: ${PORT}`);
});