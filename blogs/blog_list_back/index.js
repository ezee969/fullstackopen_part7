const logger = require('./utils/logger');
const { PORT } = require('./utils/config');
const app = require('./app');

app.listen(PORT, () => logger.info(`Server runinng on port ${PORT}`));
