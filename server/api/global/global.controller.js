const logger = require('../../lib/logs');

module.exports = {
    method:(req, res, next) => {
        logger.http(`${req.method}`);
        next();
    },
    errorHandler: (error, req, res, next) => {
        logger.error(`Error - You went into a ${error.status} problem - Please try a diffrent senario , ${error.stack}`);
        return res.status(error.status || 500).json({ message: "Error - You went into a 500 problem - Please try a diffrent senerio" });
    },
    index : (req, res) => {
        logger.info('Hey and welcome to Fire 102 server!');
        return res.status(200).json({ message: 'Hey and welcome to Fire 102 server!' });
    },
    routeInvalid : (req, res) => {
        logger.error('You went into a 404 problem - Please try a valid route');
        return res.status(404).json({ message: 'You went into a 404 problem - Please try a valid route' })
    }
}

