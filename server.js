const NodeMediaServer = require("node-media-server");

const config = require('./src/config')
const nms = new NodeMediaServer(config);
nms.run()