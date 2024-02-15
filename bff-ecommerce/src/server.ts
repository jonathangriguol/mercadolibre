import app from './app';
import config from './configs/config';

const PORT = config.app_port;

// Init server
app.listen(PORT, () => {
  console.log(`Server started at port: ${PORT}`);
});