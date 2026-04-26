const cors_anywhere = require('cors-anywhere');

const proxy = cors_anywhere.createServer({
    originWhitelist: [], 
    requireHeader: [],
    removeHeaders: ['cookie', 'cookie2']
});

module.exports = (req, res) => {
    req.url = req.url.replace(/^\/api\//, '/');
    proxy.emit('request', req, res);
};
