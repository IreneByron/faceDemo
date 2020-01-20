var appConf = {
	"port": 8888,
	"serverName": "localhost",
	"proxy": {
		'/mock/*': {
			"target": "https://64160472-9efa-4e68-aecb-0f3d64b7422a.mock.pstmn.io",
			"changeOrigin": true,
			"secure": false,
			"pathRewrite": {
				"/mock/": "/"
			}
		}
	}
}
module.exports = appConf;