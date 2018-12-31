/*! production build: Thu Sep 13 2018 09:57:32 GMT+0800 (CST) */
/* eslint-disable */
/**
 * 爱奇艺代码
 */

!
function(t) {
    function e(o) {
        if (n[o]) return n[o].exports;
        var i = n[o] = {
            "i": o,
            "l": !1,
            "exports": {}
        };
        return t[o].call(i.exports, i, i.exports, e),
        i.l = !0,
        i.exports
    }
    var n = {};
    e.m = t,
    e.c = n,
    e.i = function(t) {
        return t
    },
    e.d = function(t, n, o) {
        e.o(t, n) || Object.defineProperty(t, n, {
            "configurable": !1,
            "enumerable": !0,
            "get": o
        })
    },
    e.n = function(t) {
        var n = t && t.__esModule ?
        function() {
            return t["default"]
        }: function() {
            return t
        };
        return e.d(n, "a", n),
        n
    },
    e.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    },
    e.p = "/",
    e(e.s = 150)
} ([function(t, e) {
    var n = t.exports = {
        "version": "2.5.7"
    };
    "number" == typeof __e && (__e = n)
},
function(t, e) {
    var n = t.exports = {
        "version": "2.5.7"
    };
    "number" == typeof __e && (__e = n)
},
function(t, e) {
    var n = t.exports = "undefined" != typeof window && window.Math == Math ? window: "undefined" != typeof self && self.Math == Math ? self: Function("return this")();
    "number" == typeof __g && (__g = n)
},
function(t, e) {
    t.exports = function(t) {
        return "object" == typeof t ? null !== t: "function" == typeof t
    }
},
function(t, e) {
    var n = t.exports = "undefined" != typeof window && window.Math == Math ? window: "undefined" != typeof self && self.Math == Math ? self: Function("return this")();
    "number" == typeof __g && (__g = n)
},
function(t, e, n) {
    t.exports = !n(6)(function() {
        return 7 != Object.defineProperty({},
        "a", {
            "get": function() {
                return 7
            }
        }).a
    })
},
function(t, e) {
    t.exports = function(t) {
        try {
            return !! t()
        } catch(e) {
            return ! 0
        }
    }
},
function(t, e, n) {
    var o = n(2),
    i = n(1),
    r = n(33),
    s = n(83),
    c = n(30),
    a = function(t, e, n) {
        var u, f, p, l, h = t & a.F,
        d = t & a.G,
        g = t & a.S,
        v = t & a.P,
        y = t & a.B,
        S = d ? o: g ? o[e] || (o[e] = {}) : (o[e] || {})["prototype"],
        _ = d ? i: i[e] || (i[e] = {}),
        T = _["prototype"] || (_["prototype"] = {});
        d && (n = e);
        for (u in n) f = !h && S && S[u] !== undefined,
        p = (f ? S: n)[u],
        l = y && f ? c(p, o) : v && "function" == typeof p ? c(Function.call, p) : p,
        S && s(S, u, p, t & a.U),
        _[u] != p && r(_, u, l),
        v && T[u] != p && (T[u] = p)
    };
    o.core = i,
    a.F = 1,
    a.G = 2,
    a.S = 4,
    a.P = 8,
    a.B = 16,
    a.W = 32,
    a.U = 64,
    a.R = 128,
    t.exports = a
},
function(t, e) {
    t.exports = function(t) {
        try {
            return !! t()
        } catch(e) {
            return ! 0
        }
    }
},
function(t, e) {
    var n = {}.hasOwnProperty;
    t.exports = function(t, e) {
        return n.call(t, e)
    }
},
function(t, e) {
    t.exports = function(t) {
        return "object" == typeof t ? null !== t: "function" == typeof t
    }
},
function(t, e, n) {
    var o = n(23),
    i = n(18);
    t.exports = function(t) {
        return o(i(t))
    }
},
function(t, e, n) {
    "use strict";
    e.__esModule = !0,
    e["default"] = function(t, e) {
        if (! (t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
},
function(t, e, n) {
    t.exports = !n(8)(function() {
        return 7 != Object.defineProperty({},
        "a", {
            "get": function() {
                return 7
            }
        }).a
    })
},
function(t, e, n) {
    var o = n(29);
    t.exports = Object("z").propertyIsEnumerable(0) ? Object: function(t) {
        return "String" == o(t) ? t.split("") : Object(t)
    }
},
function(t, e) {
    var n = 0,
    o = Math.random();
    t.exports = function(t) {
        return "Symbol(".concat(t === undefined ? "": t, ")_", (++n + o).toString(36))
    }
},
function(t, e, n) {
    var o = n(17),
    i = n(26);
    t.exports = n(5) ?
    function(t, e, n) {
        return o.f(t, e, i(1, n))
    }: function(t, e, n) {
        return t[e] = n,
        t
    }
},
function(t, e, n) {
    var o = n(22),
    i = n(51),
    r = n(48),
    s = Object.defineProperty;
    e.f = n(5) ? Object.defineProperty: function(t, e, n) {
        if (o(t), e = r(e, !0), o(n), i) try {
            return s(t, e, n)
        } catch(c) {}
        if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
        return "value" in n && (t[e] = n.value),
        t
    }
},
function(t, e) {
    t.exports = function(t) {
        if (t == undefined) throw TypeError("Can't call method on  " + t);
        return t
    }
},
function(t, e, n) {
    var o = n(4),
    i = n(0),
    r = n(60),
    s = n(16),
    c = n(9),
    a = function(t, e, n) {
        var u, f, p, l = t & a.F,
        h = t & a.G,
        d = t & a.S,
        g = t & a.P,
        v = t & a.B,
        y = t & a.W,
        S = h ? i: i[e] || (i[e] = {}),
        _ = S["prototype"],
        T = h ? o: d ? o[e] : (o[e] || {})["prototype"];
        h && (n = e);
        for (u in n)(f = !l && T && T[u] !== undefined) && c(S, u) || (p = f ? T[u] : n[u], S[u] = h && "function" != typeof T[u] ? n[u] : v && f ? r(p, o) : y && T[u] == p ?
        function(t) {
            var e = function(e, n, o) {
                if (this instanceof t) {
                    switch (arguments.length) {
                    case 0:
                        return new t;
                    case 1:
                        return new t(e);
                    case 2:
                        return new t(e, n)
                    }
                    return new t(e, n, o)
                }
                return t.apply(this, arguments)
            };
            return e["prototype"] = t["prototype"],
            e
        } (p) : g && "function" == typeof p ? r(Function.call, p) : p, g && ((S.virtual || (S.virtual = {}))[u] = p, t & a.R && _ && !_[u] && s(_, u, p)))
    };
    a.F = 1,
    a.G = 2,
    a.S = 4,
    a.P = 8,
    a.B = 16,
    a.W = 32,
    a.U = 64,
    a.R = 128,
    t.exports = a
},
function(t, e, n) {
    var o = n(52),
    i = n(43);
    t.exports = Object.keys ||
    function(t) {
        return o(t, i)
    }
},
function(t, e) {
    var n = Math.ceil,
    o = Math.floor;
    t.exports = function(t) {
        return isNaN(t = +t) ? 0 : (t > 0 ? o: n)(t)
    }
},
function(t, e, n) {
    var o = n(10);
    t.exports = function(t) {
        if (!o(t)) throw TypeError(t + " is not an object!");
        return t
    }
},
function(t, e, n) {
    var o = n(49);
    t.exports = Object("z").propertyIsEnumerable(0) ? Object: function(t) {
        return "String" == o(t) ? t.split("") : Object(t)
    }
},
function(t, e) {
    t.exports = !0
},
function(t, e) {
    e.f = {}.propertyIsEnumerable
},
function(t, e) {
    t.exports = function(t, e) {
        return {
            "enumerable": ! (1 & t),
            "configurable": !(2 & t),
            "writable": !(4 & t),
            "value": e
        }
    }
},
function(t, e) {
    var n = 0,
    o = Math.random();
    t.exports = function(t) {
        return "Symbol(".concat(t === undefined ? "": t, ")_", (++n + o).toString(36))
    }
},
function(t, e) {
    t.exports = function(t) {
        if ("function" != typeof t) throw TypeError(t + " is not a function!");
        return t
    }
},
function(t, e) {
    var n = {}.toString;
    t.exports = function(t) {
        return n.call(t).slice(8, -1)
    }
},
function(t, e, n) {
    var o = n(28);
    t.exports = function(t, e, n) {
        if (o(t), e === undefined) return t;
        switch (n) {
        case 1:
            return function(n) {
                return t.call(e, n)
            };
        case 2:
            return function(n, o) {
                return t.call(e, n, o)
            };
        case 3:
            return function(n, o, i) {
                return t.call(e, n, o, i)
            }
        }
        return function() {
            return t.apply(e, arguments)
        }
    }
},
function(t, e) {
    t.exports = function(t) {
        if (t == undefined) throw TypeError("Can't call method on  " + t);
        return t
    }
},
function(t, e) {
    var n = {}.hasOwnProperty;
    t.exports = function(t, e) {
        return n.call(t, e)
    }
},
function(t, e, n) {
    var o = n(77),
    i = n(82);
    t.exports = n(13) ?
    function(t, e, n) {
        return o.f(t, e, i(1, n))
    }: function(t, e, n) {
        return t[e] = n,
        t
    }
},
function(t, e, n) {
    var o = n(1),
    i = n(2),
    r = i["__core-js_shared__"] || (i["__core-js_shared__"] = {}); (t.exports = function(t, e) {
        return r[t] || (r[t] = e !== undefined ? e: {})
    })("versions", []).push({
        "version": o.version,
        "mode": n(75) ? "pure": "global",
        "copyright": "漏 2018 Denis Pushkarev (zloirock.ru)"
    })
},
function(t, e, n) {
    var o = n(36),
    i = Math.max,
    r = Math.min;
    t.exports = function(t, e) {
        return t = o(t),
        t < 0 ? i(t + e, 0) : r(t, e)
    }
},
function(t, e) {
    var n = Math.ceil,
    o = Math.floor;
    t.exports = function(t) {
        return isNaN(t = +t) ? 0 : (t > 0 ? o: n)(t)
    }
},
function(t, e, n) {
    var o = n(14),
    i = n(31);
    t.exports = function(t) {
        return o(i(t))
    }
},
function(t, e, n) {
    var o = n(36),
    i = Math.min;
    t.exports = function(t) {
        return t > 0 ? i(o(t), 9007199254740991) : 0
    }
},
function(t, e, n) {
    var o = n(31);
    t.exports = function(t) {
        return Object(o(t))
    }
},
function(t, e, n) {
    "use strict";
    e.__esModule = !0;
    var o = {
        "env": "release",
        "config": {
            "sdkVersion": "2.05.2801",
            "wsVersion": "2.05.2801",
            "flashVersion": "0.0.0.0",
            "flash_min_version": 11.3,
            "flash_domId": "_chatBox",
            "flashOption": {
                "platformType": 1,
                "agentType": 1,
                "isDynamicIp": 1,
                "roomId": 0,
                "chatId": 0,
                "reconnectTime": 8e3,
                "reconnectCount": 3
            },
            "storageOption": {
                "storageKey": "h5c_log",
                "storageSize": 20480
            },
            "sensorOption": {
                "enabled": !0,
                "platform": "1_10_101",
                "imageBeaconKey": "jsChatSensorImage_",
                "type": "bubblechat"
            },
            "flashUrl": "//static.iqiyi.com/ppsshow/flashplayer/chat_pp.swf",
            "wsUrl": "//static.iqiyi.com/js/ppsshow/plugin/wschat_qx.js",
            "flashJsUrl": "//static.iqiyi.com/js/ppsshow/plugin/flashchat_qx.js",
            "sensorStatUrl": "//sensor-xiu.pps.tv/stat/b",
            "sensorQosUrl": "//sensor-xiu.pps.tv/qos/a",
            "ipScheduleUrl": "//livechat-qx.iqiyi.com/apis/qx/ws_addr.action",
            "wsDirectUrl": "qx-ws.iqiyi.com"
        },
        "sid": function() {
            var t = "";
            do {
                t = Math.random().toString(16).substr(9)
            } while ( t && 6 !== t . length );
            return t
        } ()
    };
    window.ChatConfig = o,
    e["default"] = o
},
function(t, e, n) {
    "use strict";
    function o(t) {
        return t && t.__esModule ? t: {
            "default": t
        }
    }
    var i = n(90),
    r = (o(i), n(91)),
    s = (o(r), n(55)),
    c = (o(s), n(56));
    o(c);
    "console" in window || (window.console = {
        "log": function(t) {}
    })
},
function(t, e, n) {
    t.exports = {
        "default": n(57),
        "__esModule": !0
    }
},
function(t, e) {
    t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
},
function(t, e) {
    e.f = Object.getOwnPropertySymbols
},
function(t, e, n) {
    var o = n(46)("keys"),
    i = n(27);
    t.exports = function(t) {
        return o[t] || (o[t] = i(t))
    }
},
function(t, e, n) {
    var o = n(0),
    i = n(4),
    r = i["__core-js_shared__"] || (i["__core-js_shared__"] = {}); (t.exports = function(t, e) {
        return r[t] || (r[t] = e !== undefined ? e: {})
    })("versions", []).push({
        "version": o.version,
        "mode": n(24) ? "pure": "global",
        "copyright": "漏 2018 Denis Pushkarev (zloirock.ru)"
    })
},
function(t, e, n) {
    var o = n(18);
    t.exports = function(t) {
        return Object(o(t))
    }
},
function(t, e, n) {
    var o = n(10);
    t.exports = function(t, e) {
        if (!o(t)) return t;
        var n, i;
        if (e && "function" == typeof(n = t.toString) && !o(i = n.call(t))) return i;
        if ("function" == typeof(n = t.valueOf) && !o(i = n.call(t))) return i;
        if (!e && "function" == typeof(n = t.toString) && !o(i = n.call(t))) return i;
        throw TypeError("Can't convert object to primitive value")
    }
},
function(t, e) {
    var n = {}.toString;
    t.exports = function(t) {
        return n.call(t).slice(8, -1)
    }
},
function(t, e, n) {
    var o = n(10),
    i = n(4).document,
    r = o(i) && o(i.createElement);
    t.exports = function(t) {
        return r ? i.createElement(t) : {}
    }
},
function(t, e, n) {
    t.exports = !n(5) && !n(6)(function() {
        return 7 != Object.defineProperty(n(50)("div"), "a", {
            "get": function() {
                return 7
            }
        }).a
    })
},
function(t, e, n) {
    var o = n(9),
    i = n(11),
    r = n(59)(!1),
    s = n(45)("IE_PROTO");
    t.exports = function(t, e) {
        var n, c = i(t),
        a = 0,
        u = [];
        for (n in c) n != s && o(c, n) && u.push(n);
        for (; e.length > a;) o(c, n = e[a++]) && (~r(u, n) || u.push(n));
        return u
    }
},
function(t, e, n) {
    var o = n(21),
    i = Math.max,
    r = Math.min;
    t.exports = function(t, e) {
        return t = o(t),
        t < 0 ? i(t + e, 0) : r(t, e)
    }
},
,
function(t, e, n) {
    n(88),
    t.exports = n(1).Array.forEach
},
function(t, e, n) {
    n(89),
    t.exports = n(1).Function.bind
},
function(t, e, n) {
    n(63),
    t.exports = n(0).Object.assign
},
function(t, e) {
    t.exports = function(t) {
        if ("function" != typeof t) throw TypeError(t + " is not a function!");
        return t
    }
},
function(t, e, n) {
    var o = n(11),
    i = n(62),
    r = n(53);
    t.exports = function(t) {
        return function(e, n, s) {
            var c, a = o(e),
            u = i(a.length),
            f = r(s, u);
            if (t && n != n) {
                for (; u > f;) if ((c = a[f++]) != c) return ! 0
            } else for (; u > f; f++) if ((t || f in a) && a[f] === n) return t || f || 0;
            return ! t && -1
        }
    }
},
function(t, e, n) {
    var o = n(58);
    t.exports = function(t, e, n) {
        if (o(t), e === undefined) return t;
        switch (n) {
        case 1:
            return function(n) {
                return t.call(e, n)
            };
        case 2:
            return function(n, o) {
                return t.call(e, n, o)
            };
        case 3:
            return function(n, o, i) {
                return t.call(e, n, o, i)
            }
        }
        return function() {
            return t.apply(e, arguments)
        }
    }
},
function(t, e, n) {
    "use strict";
    var o = n(20),
    i = n(44),
    r = n(25),
    s = n(47),
    c = n(23),
    a = Object.assign;
    t.exports = !a || n(6)(function() {
        var t = {},
        e = {},
        n = Symbol(),
        o = "abcdefghijklmnopqrst";
        return t[n] = 7,
        o.split("").forEach(function(t) {
            e[t] = t
        }),
        7 != a({},
        t)[n] || Object.keys(a({},
        e)).join("") != o
    }) ?
    function(t, e) {
        for (var n = s(t), a = arguments.length, u = 1, f = i.f, p = r.f; a > u;) for (var l, h = c(arguments[u++]), d = f ? o(h).concat(f(h)) : o(h), g = d.length, v = 0; g > v;) p.call(h, l = d[v++]) && (n[l] = h[l]);
        return n
    }: a
},
function(t, e, n) {
    var o = n(21),
    i = Math.min;
    t.exports = function(t) {
        return t > 0 ? i(o(t), 9007199254740991) : 0
    }
},
function(t, e, n) {
    var o = n(19);
    o(o.S + o.F, "Object", {
        "assign": n(61)
    })
},
function(t, e, n) {
    var o = n(3);
    t.exports = function(t) {
        if (!o(t)) throw TypeError(t + " is not an object!");
        return t
    }
},
function(t, e, n) {
    var o = n(37),
    i = n(38),
    r = n(35);
    t.exports = function(t) {
        return function(e, n, s) {
            var c, a = o(e),
            u = i(a.length),
            f = r(s, u);
            if (t && n != n) {
                for (; u > f;) if ((c = a[f++]) != c) return ! 0
            } else for (; u > f; f++) if ((t || f in a) && a[f] === n) return t || f || 0;
            return ! t && -1
        }
    }
},
function(t, e, n) {
    var o = n(30),
    i = n(14),
    r = n(39),
    s = n(38),
    c = n(68);
    t.exports = function(t, e) {
        var n = 1 == t,
        a = 2 == t,
        u = 3 == t,
        f = 4 == t,
        p = 6 == t,
        l = 5 == t || p,
        h = e || c;
        return function(e, c, d) {
            for (var g, v, y = r(e), S = i(y), _ = o(c, d, 3), T = s(S.length), m = 0, C = n ? h(e, T) : a ? h(e, 0) : undefined; T > m; m++) if ((l || m in S) && (g = S[m], v = _(g, m, y), t)) if (n) C[m] = v;
            else if (v) switch (t) {
            case 3:
                return ! 0;
            case 5:
                return g;
            case 6:
                return m;
            case 2:
                C.push(g)
            } else if (f) return ! 1;
            return p ? -1 : u || f ? f: C
        }
    }
},
function(t, e, n) {
    var o = n(3),
    i = n(74),
    r = n(87)("species");
    t.exports = function(t) {
        var e;
        return i(t) && (e = t.constructor, "function" != typeof e || e !== Array && !i(e.prototype) || (e = undefined), o(e) && null === (e = e[r]) && (e = undefined)),
        e === undefined ? Array: e
    }
},
function(t, e, n) {
    var o = n(67);
    t.exports = function(t, e) {
        return new(o(t))(e)
    }
},
function(t, e, n) {
    "use strict";
    var o = n(28),
    i = n(3),
    r = n(73),
    s = [].slice,
    c = {},
    a = function(t, e, n) {
        if (! (e in c)) {
            for (var o = [], i = 0; i < e; i++) o[i] = "a[" + i + "]";
            c[e] = Function("F,a", "return new F(" + o.join(",") + ")")
        }
        return c[e](t, n)
    };
    t.exports = Function.bind ||
    function(t) {
        var e = o(this),
        n = s.call(arguments, 1),
        c = function() {
            var o = n.concat(s.call(arguments));
            return this instanceof c ? a(e, o.length, o) : r(e, o, t)
        };
        return i(e.prototype) && (c.prototype = e.prototype),
        c
    }
},
function(t, e, n) {
    var o = n(3),
    i = n(2).document,
    r = o(i) && o(i.createElement);
    t.exports = function(t) {
        return r ? i.createElement(t) : {}
    }
},
function(t, e) {
    t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
},
function(t, e, n) {
    t.exports = !n(13) && !n(8)(function() {
        return 7 != Object.defineProperty(n(70)("div"), "a", {
            "get": function() {
                return 7
            }
        }).a
    })
},
function(t, e) {
    t.exports = function(t, e, n) {
        var o = n === undefined;
        switch (e.length) {
        case 0:
            return o ? t() : t.call(n);
        case 1:
            return o ? t(e[0]) : t.call(n, e[0]);
        case 2:
            return o ? t(e[0], e[1]) : t.call(n, e[0], e[1]);
        case 3:
            return o ? t(e[0], e[1], e[2]) : t.call(n, e[0], e[1], e[2]);
        case 4:
            return o ? t(e[0], e[1], e[2], e[3]) : t.call(n, e[0], e[1], e[2], e[3])
        }
        return t.apply(n, e)
    }
},
function(t, e, n) {
    var o = n(29);
    t.exports = Array.isArray ||
    function(t) {
        return "Array" == o(t)
    }
},
function(t, e) {
    t.exports = !1
},
function(t, e, n) {
    "use strict";
    var o = n(80),
    i = n(78),
    r = n(81),
    s = n(39),
    c = n(14),
    a = Object.assign;
    t.exports = !a || n(8)(function() {
        var t = {},
        e = {},
        n = Symbol(),
        o = "abcdefghijklmnopqrst";
        return t[n] = 7,
        o.split("").forEach(function(t) {
            e[t] = t
        }),
        7 != a({},
        t)[n] || Object.keys(a({},
        e)).join("") != o
    }) ?
    function(t, e) {
        for (var n = s(t), a = arguments.length, u = 1, f = i.f, p = r.f; a > u;) for (var l, h = c(arguments[u++]), d = f ? o(h).concat(f(h)) : o(h), g = d.length, v = 0; g > v;) p.call(h, l = d[v++]) && (n[l] = h[l]);
        return n
    }: a
},
function(t, e, n) {
    var o = n(64),
    i = n(72),
    r = n(86),
    s = Object.defineProperty;
    e.f = n(13) ? Object.defineProperty: function(t, e, n) {
        if (o(t), e = r(e, !0), o(n), i) try {
            return s(t, e, n)
        } catch(c) {}
        if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
        return "value" in n && (t[e] = n.value),
        t
    }
},
function(t, e) {
    e.f = Object.getOwnPropertySymbols
},
function(t, e, n) {
    var o = n(32),
    i = n(37),
    r = n(65)(!1),
    s = n(84)("IE_PROTO");
    t.exports = function(t, e) {
        var n, c = i(t),
        a = 0,
        u = [];
        for (n in c) n != s && o(c, n) && u.push(n);
        for (; e.length > a;) o(c, n = e[a++]) && (~r(u, n) || u.push(n));
        return u
    }
},
function(t, e, n) {
    var o = n(79),
    i = n(71);
    t.exports = Object.keys ||
    function(t) {
        return o(t, i)
    }
},
function(t, e) {
    e.f = {}.propertyIsEnumerable
},
function(t, e) {
    t.exports = function(t, e) {
        return {
            "enumerable": ! (1 & t),
            "configurable": !(2 & t),
            "writable": !(4 & t),
            "value": e
        }
    }
},
function(t, e, n) {
    var o = n(2),
    i = n(33),
    r = n(32),
    s = n(15)("src"),
    c = Function["toString"],
    a = ("" + c).split("toString");
    n(1).inspectSource = function(t) {
        return c.call(t)
    },
    (t.exports = function(t, e, n, c) {
        var u = "function" == typeof n;
        u && (r(n, "name") || i(n, "name", e)),
        t[e] !== n && (u && (r(n, s) || i(n, s, t[e] ? "" + t[e] : a.join(String(e)))), t === o ? t[e] = n: c ? t[e] ? t[e] = n: i(t, e, n) : (delete t[e], i(t, e, n)))
    })(Function.prototype, "toString",
    function() {
        return "function" == typeof this && this[s] || c.call(this)
    })
},
function(t, e, n) {
    var o = n(34)("keys"),
    i = n(15);
    t.exports = function(t) {
        return o[t] || (o[t] = i(t))
    }
},
function(t, e, n) {
    "use strict";
    var o = n(8);
    t.exports = function(t, e) {
        return !! t && o(function() {
            e ? t.call(null,
            function() {},
            1) : t.call(null)
        })
    }
},
function(t, e, n) {
    var o = n(3);
    t.exports = function(t, e) {
        if (!o(t)) return t;
        var n, i;
        if (e && "function" == typeof(n = t.toString) && !o(i = n.call(t))) return i;
        if ("function" == typeof(n = t.valueOf) && !o(i = n.call(t))) return i;
        if (!e && "function" == typeof(n = t.toString) && !o(i = n.call(t))) return i;
        throw TypeError("Can't convert object to primitive value")
    }
},
function(t, e, n) {
    var o = n(34)("wks"),
    i = n(15),
    r = n(2).Symbol,
    s = "function" == typeof r; (t.exports = function(t) {
        return o[t] || (o[t] = s && r[t] || (s ? r: i)("Symbol." + t))
    }).store = o
},
function(t, e, n) {
    "use strict";
    var o = n(7),
    i = n(66)(0),
    r = n(85)([].forEach, !0);
    o(o.P + o.F * !r, "Array", {
        "forEach": function(t) {
            return i(this, t, arguments[1])
        }
    })
},
function(t, e, n) {
    var o = n(7);
    o(o.P, "Function", {
        "bind": n(69)
    })
},
function(t, e, n) {
    var o = n(7);
    o(o.S + o.F, "Object", {
        "assign": n(76)
    })
},
function(t, e, n) {
    var o = n(7),
    i = n(35),
    r = String.fromCharCode,
    s = String.fromCodePoint;
    o(o.S + o.F * ( !! s && 1 != s.length), "String", {
        "fromCodePoint": function(t) {
            for (var e, n = [], o = arguments.length, s = 0; o > s;) {
                if (e = +arguments[s++], i(e, 1114111) !== e) throw RangeError(e + " is not a valid code point");
                n.push(e < 65536 ? r(e) : r(55296 + ((e -= 65536) >> 10), e % 1024 + 56320))
            }
            return n.join("")
        }
    })
},
function(t, e, n) {
    t.exports = {
        "default": n(93),
        "__esModule": !0
    }
},
function(t, e, n) {
    var o = n(0),
    i = o.JSON || (o.JSON = {
        "stringify": JSON.stringify
    });
    t.exports = function(t) {
        return i.stringify.apply(i, arguments)
    }
},
, , , , , ,
function(t, e, n) {
    "use strict";
    function o(t) {
        return t && t.__esModule ? t: {
            "default": t
        }
    }
    // c.default = n(112)
    e.__esModule = !0;
    var i = n(113),
    r = o(i),
    s = n(112),
    c = o(s),
    a = n(92),
    u = o(a),
    f = n(12),
    p = o(f),
    l = n(156),
    h = o(l),
    d = window.ChatConfig,
    g = function() {
        function t() { (0, p["default"])(this, t),
            this.serverIps = [],
            this.keepalive = 60,
            this.currentIpIndex = 0
        }
        return t.prototype.init = function(t) {
            this.userId = t.userId || t.uid || "",
            this.roomId = t.roomId || 0,
            this.deviceId = t.deviceId || "",
            this.authcookie = t.authcookie || "",
            this.type = t.type !== undefined ? t.type: 1,
            this.callMsgFunc = t.callMsgFunc || null,
            this.callChangeState = t.callChangeState || null,
            this.agentType = t.agentType !== undefined ? t.agentType: 1,
            this.isNeedCallIp = 1 === t.isDynamicIp,
            this.recntCount = t.recntCount !== undefined ? t.recntCount: 3,
            this.recntTime = t.recntTime !== undefined ? t.recntTime: 8e3,
            this.dfp = t.dfp,
            this.wsDirectUrl = d.config.wsDirectUrl,
            this.ipScheduleUrl = d.config.ipScheduleUrl,
            this.enabledHeartbeat = d.config.flashOption.heartbeat,
            this.enabledHeartbeat === undefined && (this.enabledHeartbeat = !0),
            this.enabledHeartbeat || (this.keepalive = 0)
        },
        t.prototype.initAddr = function(t) {
            this.keepalive = t.keepalive !== undefined ? t.keepalive: 60,
            this.serverIps = (this.getIsHttps() ? t.wss_addr: t.ws_addr) || [],
            this.currentIpIndex = 0
        },
        t.prototype.getIpAddr = function() {
            return this.ipScheduleUrl
        },
        t.prototype.jumpToNextIp = function() {
            null != this.serverIps && this.serverIps.length > this.currentIpIndex && (this._currentIp = this.serverIps[this.currentIpIndex], this.currentIpIndex++)
        },
        t.prototype.getAvailabeIpList = function() {
            return [this._currentIp].concat(this.serverIps.slice(this.currentIpIndex))
        },
        t.prototype.getIsHttps = function() {
            return "https:" === location.protocol
        },
        t.prototype.getIsDev = function() {
            return t.env === t.DEBUG
        },
        t.prototype.getIsDirectWSConnection = function() {
            return ! this.isNeedCallIp
        },
        t.prototype.hasServerIp = function() {
            return ! this.isNeedCallIp || this.serverIps && this.serverIps.length > this.currentIpIndex
        },
        t.prototype.getCurrentIp = function() {
            return this.isNeedCallIp ? (this._currentIp = this._currentIp || this.serverIps[0], this._currentIp) : this.wsDirectUrl
        },
        t.prototype.hasCachedIp = function() {
            return !! this.getCachedIpList()
        },
        t.prototype.getCachedIpList = function() {
            var t = void 0;
            return this.isLocalStorageAvailable() && (t = localStorage.getItem(this.CACHED_IP_STORAGE_KEY)) && (t = JSON.parse(t)),
            t
        },
        t.prototype.cacheIpList = function(t) {
            this.isLocalStorageAvailable() && localStorage.setItem(this.CACHED_IP_STORAGE_KEY, (0, u["default"])(t))
        },
        t.prototype.isLocalStorageAvailable = function() {
            return "localStorage" in window
        },
        t.prototype.stripzero = function(t) {
            for (var e = t,
            n = 0; n < e.length; n++) if ("0" !== e.charAt(n)) return e.substr(n);
            return ""
        },
        t.prototype.padzero = function(t) {
            for (var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 32, n = t; n.length < e;) n = "0" + n;
            return n
        },
        t.prototype.pack = function() {
            return 1 === this.type ? this.packQx() : 2 === this.type ? this.packDzb() : this.packQx()
        },
        t.prototype.packQx = function() {
            var e = {
                "v": t.VERSION,
                "p": 1,
                "n": 1,
                "r": this.roomId,
                "d": this.deviceId,
                "at": this.authcookie ? 2 : 3,
                "ak": this.authcookie ? this.authcookie: this.deviceId,
                "ag": 1
            };
            return e.sg = this.sg(e),
            e
        },
        t.prototype.packDzb = function() {
            var t = {
                "v": 1,
                "p": 1,
                "n": 1,
                "r": this.roomId,
                "at": this.authcookie ? 2 : 3,
                "ak": this.authcookie ? this.authcookie: this.deviceId,
                "ua": encodeURIComponent(navigator.userAgent),
                "av": encodeURIComponent(d.config.sdkVersion)
            };
            return this.dfp && (t.dfp = this.dfp),
            t
        },
        t.prototype.sg = function(e) {
            var n = (0, c["default"])(e);
            n.sort();
            var o = "";
            for (var i in n) {
                var r = n[i];
                o += r + "=" + e[r] + "|"
            }
            return o += t.s,
            (0, h["default"])(o)
        },
        t.prototype.getPath = function(t) {
            var e = [];
            for (var n in t) e.push(n + "=" + t[n]);
            return e.join("&")
        },
        t.prototype.getIsLogin = function() {
            return !! this.authcookie
        },
        t
    } ();
    g.instance = null,
    g.instance = new g,
    g.instance.CACHED_IP_STORAGE_KEY = "chat_cached_ip",
    g.DEBUG = "debug",
    g.RELEASE = "release",
    g.env = "release",
    g.s = r["default"].apply(undefined, [57, 77, 83, 73, 53, 86, 85, 71, 50, 81, 74, 80, 66, 52, 78, 54, 68, 48, 81, 83, 89, 87, 69, 72, 67, 90, 83, 75, 84, 49, 77, 50, 84, 65, 75, 88]),
    g.VERSION = d.config.wsVersion,
    e["default"] = g
},
,
function(t, e) {
    var n = {
        "utf8": {
            "stringToBytes": function(t) {
                return n.bin.stringToBytes(unescape(encodeURIComponent(t)))
            },
            "bytesToString": function(t) {
                return decodeURIComponent(escape(n.bin.bytesToString(t)))
            }
        },
        "bin": {
            "stringToBytes": function(t) {
                for (var e = [], n = 0; n < t.length; n++) e.push(255 & t.charCodeAt(n));
                return e
            },
            "bytesToString": function(t) {
                for (var e = [], n = 0; n < t.length; n++) e.push(String.fromCharCode(t[n]));
                return e.join("")
            }
        }
    };
    t.exports = n
},
, , , ,
function(t, e, n) {
    "use strict";
    e.__esModule = !0;
    var o = function(t, e, n, o, i) {
        t = t || "GET";
        var r = [];
        for (var s in n) !
        function(t) {
            var e = n[t];
            e instanceof Array ? (t += "[]", e.forEach(function(e) {
                return r.push(t + "=" + encodeURIComponent(e))
            })) : r.push(t + "=" + encodeURIComponent(e)),
            s = t
        } (s);
        r = r.join("&");
        var c = new XMLHttpRequest;
        "GET" === t ? c.open(t, e + "?" + r) : (c.open(t, e), c.setRequestHeader("Content-type", "application/x-www-form-urlencoded")),
        o && (c.onreadystatechange = function() {
            4 === c.readyState && (200 === c.status ? o && o({
                "status": c.status,
                "data": JSON.parse(c.responseText || "{}")
            }) : i && i({
                "status": c.status,
                "data": JSON.parse(c.responseText || "{}")
            }))
        }),
        c.send("GET" === t ? null: r)
    };
    e["default"] = o
},
, , ,
function(t, e, n) {
    "use strict";
    function o(t) {
        return t && t.__esModule ? t: {
            "default": t
        }
    }
    e.__esModule = !0;
    var i = n(92),
    r = o(i),
    s = n(12),
    c = o(s),
    a = n(107),
    u = o(a),
    f = n(100),
    p = o(f),
    l = n(154),
    h = n(153),
    d = o(h),
    g = window.ChatConfig,
    v = function() {
        function t(e) { (0, c["default"])(this, t),
            e = e || {},
            d["default"].clear(),
            d["default"].append("XWS", "ChatWS init with opts: " + (0, r["default"])(e)),
            p["default"].instance.init(e),
            this.isConnected = !1,
            this.beatMissCnt = 0,
            this.isIpFirstLoad = !0,
            this.ipFailCnt = 0,
            this.isSocketFirstConnect = !0,
            this.socketFailCnt = 0,
            this.callBackList = [],
            this.callBackList = {
                "close": [],
                "open": [],
                "error": [],
                "message": []
            },
            this.startup()
        }
        return t.prototype.startup = function() {
            p["default"].instance.isNeedCallIp ? this.tryLoadIp() : this.tryConnectSocket()
        },
        t.prototype.tryLoadIp = function() {
            d["default"].append("XWS", "start load ip"),
            this.ipFailCnt = 0,
            this.clearIpTimeout(),
            this.loadIp()
        },
        t.prototype.clearIpTimeout = function() {
            clearTimeout(this.ipTimeout),
            clearTimeout(this.ipReloadTimeout)
        },
        t.prototype.reloadIp = function() {
            this.ipFailCnt++,
            d["default"].append("XWS", "ip reload start with failCnt: " + this.ipFailCnt),
            1 === this.ipFailCnt ? this.jsToState(0, "ip") : this.ipFailCnt >= t.LOAD_IP_MAX_TRY + 1 && (!p["default"].instance.getIsDirectWSConnection() && p["default"].instance.hasCachedIp() ? (p["default"].instance.initAddr(p["default"].instance.getCachedIpList()), this.ipSucceed(0)) : (this.jsToState(2, "ip"), this.lastFailReason = "ip"), this.clearIpTimeout()),
            this.ipFailCnt < t.LOAD_IP_MAX_TRY + 1 && this.loadIp()
        },
        t.prototype.loadIp = function() {
            var e = this,
            n = p["default"].instance.getIpAddr(),
            o = p["default"].instance.pack();
            this.ipLoadStartTs = (new Date).getTime(),
            this.ipTimeout = setTimeout(function() {
                clearTimeout(e.ipTimeout),
                e.ipFail(101, "timeout")
            },
            t.LOAD_IP_TIME_OUT);
            var i = (new Date).getTime();
            d["default"].append("XWS", "load ip from " + n + ", with params: " + (0, r["default"])(o)),
            (0, u["default"])("POST", n, o,
            function(t) {
                d["default"].append("XWS", "load ip result: " + (0, r["default"])(t));
                var n = t.data;
                switch (n.code) {
                case "A00000":
                    p["default"].instance.initAddr(n.data);
                    var o = (new Date).getTime();
                    e.ipSucceed(o - i);
                    break;
                case "P00100":
                    e.ipFail(105, n.msg);
                    break;
                case "A00101":
                    e.ipFail(106, n.msg);
                    break;
                case "A00006":
                    e.ipFail(104, n.msg)
                }
            },
            function(t) {
                e.ipFail(102, t.status)
            })
        },
        t.prototype.ipSucceed = function(t) {
            this.ipFailCnt = 0,
            this.clearIpTimeout(),
            d["default"].append("XWS", "load ip succeed with timeCost: " + t),
            this.ipSuccEverPost || (l.sensor.push(l.sensor.IP_LOAD_SUCCESS, "", t, 0, this.isIpFirstLoad ? 1 : 2), this.ipSuccEverPost = !0),
            this.isIpFirstLoad = !1,
            this.jsToState(1, "ip"),
            p["default"].instance.jumpToNextIp(),
            this.tryConnectSocket()
        },
        t.prototype.ipFail = function(t, e) {
            d["default"].append("XWS", "load ip fail with code: " + t + ", msg: " + e),
            clearTimeout(this.ipTimeout),
            l.sensor.push(l.sensor.IP_LOAD_FAIL, t, 0, this.ipFailCnt + 1, this.isIpFirstLoad ? 1 : 2, e),
            this.isIpFirstLoad = !1,
            this.checkIpTimeout()
        },
        t.prototype.checkIpTimeout = function() {
            var e = this,
            n = this.ipLoadStartTs,
            o = (new Date).getTime(),
            i = t.LOAD_IP_TIME_OUT - (o - n);
            clearTimeout(this.ipReloadTimeout),
            i > 0 ? this.ipReloadTimeout = setTimeout(function() {
                clearTimeout(e.ipReloadTimeout),
                e.reloadIp()
            },
            i) : this.reloadIp()
        },
        t.prototype.tryConnectSocket = function() {
            d["default"].append("XWS", "start connect socket"),
            this.socketFailCnt = 0,
            this.clearSocketTimeout(),
            this.connectSocket()
        },
        t.prototype.clearSocketTimeout = function() {
            clearTimeout(this.socketTimeout),
            clearTimeout(this.socketReconnectTimeout)
        },
        t.prototype.reconnectSocket = function() {
            this.socketFailCnt++,
            d["default"].append("XWS", "socket reconnect start with failCnt: " + this.socketFailCnt),
            1 === this.socketFailCnt ? this.jsToState(0, "websocket") : this.socketFailCnt >= t.SOCKET_CONNECT_MAX_TRY + 1 && (this.jsToState(2, "websocket"), this.lastFailReason = "ws", this.closeConnect(), this.clearSocketTimeout(), this.clearPing()),
            this.socketFailCnt < t.SOCKET_CONNECT_MAX_TRY + 1 && this.connectSocket()
        },
        t.prototype.connectSocket = function() {
            var e = this;
            this.socketConnectStartTs = (new Date).getTime(),
            this.socketTimeout = setTimeout(function() {
                clearTimeout(e.socketTimeout),
                e.socketConnectTimeout()
            },
            t.SOCKET_CONNECT_TIME_OUT),
            this.closeConnect();
            var n = p["default"].instance.pack(),
            o = (p["default"].instance.getIsHttps(), "");
            o = p["default"].instance.getIsHttps() ? "wss://" + p["default"].instance.getCurrentIp() + "/ws?" + p["default"].instance.getPath(n) : 1 === p["default"].instance.type || 2 === p["default"].instance.type && p["default"].instance.getIsDev() ? "ws://" + p["default"].instance.getCurrentIp() + ":7533/ws?" + p["default"].instance.getPath(n) : "ws://" + p["default"].instance.getCurrentIp() + "/ws?" + p["default"].instance.getPath(n),
            this.wsObj = new WebSocket(o),
            this.wsObj.binaryType = "arraybuffer",
            this.wsUrl = o,
            this.isConnecting = !0,
            d["default"].append("XWS", "connect socket to " + o),
            this.wsObj.onclose = function(e) {
                if (d["default"].append("XWS", "receive event socket close"), this.isConnected) {
                    var n = {};
                    e && (n = {
                        "wasClean": e.wasClean,
                        "code": e.code,
                        "reason": e.reason
                    }),
                    this.connectResponseType !== t.ACK_TYPE && (n.code = this.connectResponseType, n.reason = this.connectResponseReason);
                    var o = (new Date).getTime(),
                    i = this.openTs ? o - this.openTs: 0;
                    l.sensor.pushDebug(l.sensor.SOCKET_CLOSE, 303, i, 0, 0, (0, r["default"])(n)),
                    this.isConnected = !1
                }
                this.isConnecting = !1,
                this.checkSocketTimeout(),
                this.callBackList["close"].forEach(function(t, n) {
                    t(e)
                })
            }.bind(this),
            this.wsObj.onerror = function(t) {
                d["default"].append("XWS", "receive event socket error"),
                this.isConnecting && (l.sensor.pushDebug(l.sensor.SOCKET_CONNECT_FAIL, 202, 0, this.socketFailCnt + 1, this.isSocketFirstConnect ? 1 : 2), this.isConnecting = !1),
                this.isSocketFirstConnect = !1,
                this.checkSocketTimeout(),
                this.callBackList["error"].forEach(function(e, n) {
                    e(t)
                })
            }.bind(this);
            var i = (new Date).getTime();
            this.wsObj.onopen = function(t) {
                d["default"].append("XWS", "receive event socket open"),
                this.isConnected = !0,
                this.isConnecting = !1;
                var e = (new Date).getTime();
                this.openTs = e,
                this.socketSucceed(e - i),
                this.isFirstMessage = !0,
                this.connectResponseType = "",
                this.connectResponseReason = "",
                this.callBackList["open"].forEach(function(e, n) {
                    e(t)
                }),
                this.beatPinPong()
            }.bind(this),
            this.wsObj.onmessage = function(e) {
                var n = this;
                if (e && "string" == typeof e.data) {
                    if (e.data === t.PONG_MSG) return this.pingReceive();
                    var o = this.getMessage(e.data);
                    if (this.isFirstMessage) {
                        var i = o[0];
                        this.connectResponseType = i.t,
                        i.t === t.ACK_TYPE ? this.connectResponseReason = "OK": i.t === t.BLACKLIST_ERR_TYPE ? this.connectResponseReason = "BLACKLIST_ERR": i.t === t.SIGN_ERR_TYPE ? this.connectResponseReason = "SIGN_ERR": this.connectResponseReason = "UNKNOWN",
                        d["default"].append("XWS", "response from server: " + this.connectResponseType + "/" + this.connectResponseReason + " at " + this.wsObj.url)
                    }
                    var r = o.slice(),
                    s = [];
                    1 == p["default"].instance.type ? (this.isFirstMessage && r.shift(), r.map(function(t, e, o) {
                        var i = n.filterMessage(t);
                        i && s.push(i)
                    })) : s = r,
                    this.isFirstMessage = !1,
                    this.callBackList["message"].forEach(function(t, n) {
                        t(s, e)
                    }.bind(this))
                } else d["default"].append("XWS", "invalid message type: " + e)
            }.bind(this)
        },
        t.prototype.socketConnectTimeout = function() {
            d["default"].append("XWS", "socket connect timeout"),
            l.sensor.pushDebug(l.sensor.SOCKET_CONNECT_FAIL, 201, 0, this.socketFailCnt + 1, this.isSocketFirstConnect ? 1 : 2),
            this.isSocketFirstConnect = !1,
            this.checkSocketTimeout()
        },
        t.prototype.socketSucceed = function(e) {
            d["default"].append("XWS", "socket connect succeed with timeCose: " + e),
            this.connectResponseType !== t.ACK_TYPE || (this.socketFailCnt = 0),
            this.clearSocketTimeout(),
            this.socketSuccEverPost || (this.socketSuccEverPost = !0, l.sensor.push(l.sensor.SOCKET_CONNECT_SUCCESS, "", e, 0, this.isSocketFirstConnect ? 1 : 2)),
            this.isSocketFirstConnect = !1,
            this.jsToState(1, "websocket"),
            !p["default"].instance.getIsDirectWSConnection() && p["default"].instance.cacheIpList(p["default"].instance.getAvailabeIpList())
        },
        t.prototype.checkSocketTimeout = function() {
            var e = this,
            n = this.socketConnectStartTs,
            o = (new Date).getTime(),
            i = t.SOCKET_CONNECT_TIME_OUT - (o - n);
            clearTimeout(this.socketReconnectTimeout),
            i > 0 ? this.socketReconnectTimeout = setTimeout(function() {
                clearTimeout(e.socketReconnectTimeout),
                e.reconnectSocket()
            },
            i) : this.reconnectSocket()
        },
        t.prototype.sendMessage = function(t, e) {
            if (!t.type || !t.op) return ! 1
        },
        t.prototype.getMessage = function(t) {
            var e = [];
            try {
                e = JSON.parse(t)
            } catch(n) {
                console.log("json decode error, " + t)
            }
            return e
        },
        t.prototype.filterMessage = function(t) {
            var e = void 0;
            if (t && t.ex) {
                if ("string" == typeof t.ex) try {
                    t.ex = JSON.parse(t.ex)
                } catch(n) {
                    t.ex = {}
                }
                e = {},
                e.type = t.ex.type,
                e.op = t.ex.op,
                (1 !== e.type || 1 === e.type && 2 === e.op) && (e.data = t.ct, 2 === e.type && 2 === e.op ? (e.user_id = e.data.op_userInfo.user_id, e.user_id2 = e.data.to_userInfo.user_id) : e.user_id = t.u)
            } else console.log("invalid message structure: " + (0, r["default"])(t));
            return e
        },
        t.prototype.handShake = function() {},
        t.prototype.beatPinPong = function() {
            var e = this;
            p["default"].instance.keepalive <= 0 || (this.clearPing(), this.beat = setInterval(function() {
                if (!e.getIsConnected()) return e.pingDisconnect();
                e.beatMissCnt >= t.PING_MIX_MAX && e.pingClose(),
                e.beatMissCnt++,
                e.wsObj.send(t.PING_MSG),
                e.pingTimeMS = (new Date).getTime()
            },
            1e3 * p["default"].instance.keepalive))
        },
        t.prototype.clearPing = function() {
            this.beatMissCnt = 0,
            clearInterval(this.beat)
        },
        t.prototype.pingReceive = function() {
            var e = (new Date).getTime(),
            n = e - this.pingTimeMS;
            d["default"].append("XWS", "beat msg receive with timeCose: " + n),
            n >= 1e3 * t.PING_LONG_THRESHOLD && this.pingTimeLong(n),
            this.beatMissCnt = 0
        },
        t.prototype.pingDisconnect = function() {
            d["default"].append("XWS", "ping disconnect"),
            this.checkSocketTimeout()
        },
        t.prototype.pingClose = function() {
            d["default"].append("XWS", "ping close"),
            l.sensor.pushDebug(l.sensor.SOCKET_CLOSE, 301),
            this.checkSocketTimeout()
        },
        t.prototype.pingTimeLong = function(t) {
            d["default"].append("XWS", "ping time long with timeCose: " + t),
            l.sensor.push(l.sensor.HEART_BEAT_DELAY, "", t)
        },
        t.prototype.getIsConnected = function() {
            return this.wsObj && this.wsObj.readyState === WebSocket.OPEN
        },
        t.prototype.reconnect = function() {
            p["default"].instance.userId && (d["default"].append("XWS", "user click reconnect"), "ip" === this.lastFailReason || "ws" === this.lastFailReason && !p["default"].instance.hasServerIp() ? (d["default"].append("XWS", "user reconnect from ip reload"), l.sensor.push(l.sensor.IP_RELOAD), this.ipFailCnt = 0, this.clearIpTimeout(), this.reloadIp()) : (d["default"].append("XWS", "user reconnect from socket reconnect"), p["default"].instance.jumpToNextIp(), l.sensor.push(l.sensor.SOCKET_RECONNECT), this.socketFailCnt = 0, this.clearSocketTimeout(), this.reconnectSocket()))
        },
        t.prototype.changeDATA = function(t) {
            p["default"].instance.userId == p["default"].instance.padzero(t.uid, 32) || !~~t.uid && 1 == t.uid.length || (d["default"].append("XWS", "change user with " + (0, r["default"])(t)), p["default"].instance.userId = p["default"].instance.padzero(t.uid, 32), p["default"].instance.deviceId = t.deviceId || "", p["default"].instance.authcookie = t.coo, this.clear(), this.startup())
        },
        t.prototype.saveLog = function() {
            d["default"].saveLog()
        },
        t.prototype.jsToState = function(t, e) {
            d["default"].append("XWS", "told js state: " + t + "/" + e),
            p["default"].instance.callChangeState(t, e)
        },
        t.prototype.clear = function() {
            this.closeConnect(),
            this.lastFailReason = null,
            this.socketFailCnt = 0,
            this.isSocketFirstConnect = !0,
            this.clearSocketTimeout(),
            this.ipSuccEverPost = !1,
            this.ipFailCnt = 0,
            this.isIpFirstLoad = !0,
            this.clearIpTimeout(),
            this.socketSuccEverPost = !1,
            this.clearPing()
        },
        t.prototype.changeUser = function(t) {
            this.changeDATA(t)
        },
        t.prototype.reConnect = function() {
            this.reconnect()
        },
        t.prototype.closeConnect = function() {
            this.wsObj && (this.getIsConnected() && this.wsObj.close(), this.wsObj.onopen = null, this.wsObj.onclose = null, this.wsObj.onerror = null, this.wsObj.onmessage = null, this.wsObj = null),
            this.isConnected = !1
        },
        t.prototype.addEvent = function(t, e) {
            this.wsObj[this.wsObj.addEventListener ? "addEventListener": "attachEvent"](t,
            function(t) {
                if (e) {
                    var n = this.getMessage(arguments[0].data);
                    for (var o in n) {
                        var i = n[o];
                        e(i)
                    }
                }
            }).bind(this)
        },
        t.prototype.pushList = function(t, e) {
            "[object function]" === Object.prototype.toString.apply(e).toLowerCase() && (!this.callBackList[t] && (this.callBackList[t] = []), this.callBackList[t].push(e))
        },
        t.prototype.destroy = function() {
            this.clear()
        },
        t
    } ();
    v.PING_MSG = "PINGREQ",
    v.PONG_MSG = "PINGREP",
    v.PING_MIX_MAX = 2,
    v.PING_LONG_THRESHOLD = 1,
    v.ACK_TYPE = 30,
    v.SIGN_ERR_TYPE = 32,
    v.BLACKLIST_ERR_TYPE = 31,
    v.LOAD_IP_TIME_OUT = v.SOCKET_CONNECT_TIME_OUT = g.config.flashOption.reconnectTime || 8e3,
    v.LOAD_IP_MAX_TRY = v.SOCKET_CONNECT_MAX_TRY = g.config.flashOption.reconnectCount || 3,
    v.Log = d["default"],
    window.XWS = v,
    e["default"] = v
},
function(t, e, n) {
    t.exports = {
        "default": n(117),
        "__esModule": !0
    }
},
function(t, e, n) {
    t.exports = {
        "default": n(118),
        "__esModule": !0
    }
},
, , ,
function(t, e, n) {
    n(135),
    t.exports = n(0).Object.keys
},
function(t, e, n) {
    n(137),
    t.exports = n(0).String.fromCodePoint
},
, , , , , , , , , , , , ,
function(t, e, n) {
    var o = n(19),
    i = n(0),
    r = n(6);
    t.exports = function(t, e) {
        var n = (i.Object || {})[t] || Object[t],
        s = {};
        s[t] = e(n),
        o(o.S + o.F * r(function() {
            n(1)
        }), "Object", s)
    }
},
, ,
function(t, e, n) {
    var o = n(47),
    i = n(20);
    n(132)("keys",
    function() {
        return function(t) {
            return i(o(t))
        }
    })
},
,
function(t, e, n) {
    var o = n(19),
    i = n(53),
    r = String.fromCharCode,
    s = String.fromCodePoint;
    o(o.S + o.F * ( !! s && 1 != s.length), "String", {
        "fromCodePoint": function(t) {
            for (var e, n = [], o = arguments.length, s = 0; o > s;) {
                if (e = +arguments[s++], i(e, 1114111) !== e) throw RangeError(e + " is not a valid code point");
                n.push(e < 65536 ? r(e) : r(55296 + ((e -= 65536) >> 10), e % 1024 + 56320))
            }
            return n.join("")
        }
    })
},
, , , , ,
function(t, e) { !
    function() {
        var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
        n = {
            "rotl": function(t, e) {
                return t << e | t >>> 32 - e
            },
            "rotr": function(t, e) {
                return t << 32 - e | t >>> e
            },
            "endian": function(t) {
                if (t.constructor == Number) return 16711935 & n.rotl(t, 8) | 4278255360 & n.rotl(t, 24);
                for (var e = 0; e < t.length; e++) t[e] = n.endian(t[e]);
                return t
            },
            "randomBytes": function(t) {
                for (var e = []; t > 0; t--) e.push(Math.floor(256 * Math.random()));
                return e
            },
            "bytesToWords": function(t) {
                for (var e = [], n = 0, o = 0; n < t.length; n++, o += 8) e[o >>> 5] |= t[n] << 24 - o % 32;
                return e
            },
            "wordsToBytes": function(t) {
                for (var e = [], n = 0; n < 32 * t.length; n += 8) e.push(t[n >>> 5] >>> 24 - n % 32 & 255);
                return e
            },
            "bytesToHex": function(t) {
                for (var e = [], n = 0; n < t.length; n++) e.push((t[n] >>> 4).toString(16)),
                e.push((15 & t[n]).toString(16));
                return e.join("")
            },
            "hexToBytes": function(t) {
                for (var e = [], n = 0; n < t.length; n += 2) e.push(parseInt(t.substr(n, 2), 16));
                return e
            },
            "bytesToBase64": function(t) {
                for (var n = [], o = 0; o < t.length; o += 3) for (var i = t[o] << 16 | t[o + 1] << 8 | t[o + 2], r = 0; r < 4; r++) 8 * o + 6 * r <= 8 * t.length ? n.push(e.charAt(i >>> 6 * (3 - r) & 63)) : n.push("=");
                return n.join("")
            },
            "base64ToBytes": function(t) {
                t = t.replace(/[^A-Z0-9+\/]/gi, "");
                for (var n = [], o = 0, i = 0; o < t.length; i = ++o % 4) 0 != i && n.push((e.indexOf(t.charAt(o - 1)) & Math.pow(2, -2 * i + 8) - 1) << 2 * i | e.indexOf(t.charAt(o)) >>> 6 - 2 * i);
                return n
            }
        };
        t.exports = n
    } ()
},
, , , , , ,
function(t, e, n) {
    "use strict";
    function o(t) {
        return t && t.__esModule ? t: {
            "default": t
        }
    }
    e.__esModule = !0;
    var i = n(40),
    r = (o(i), n(41)),
    s = (o(r), n(111)),
    c = o(s);
    e["default"] = c["default"]
},
, ,
function(t, e, n) {
    "use strict";
    function o(t) {
        return t && t.__esModule ? t: {
            "default": t
        }
    }
    e.__esModule = !0;
    var i = n(12),
    r = o(i),
    s = n(100),
    c = o(s),
    a = window.ChatConfig,
    u = function() {
        function t() { (0, r["default"])(this, t)
        }
        return t.append = function(e, n) {
            var o = e;
            if (arguments.length < 2 && (o = "", o), t.getIsSupport()) {
                var i = t.memdata || "",
                r = new Date,
                s = r.getHours(),
                c = r.getMinutes(),
                a = r.getSeconds(),
                u = r.getMilliseconds(),
                f = t.padzero(s, 2) + ":" + t.padzero(c, 2) + ":" + t.padzero(a, 2) + ":" + t.padzero(u, 3) + ":[" + o + "] ==>" + n + "\r\n";
                t.withConsole,
                i += f,
                i && i.length > t.MAX_LENGTH && (i = i.substr(i.length - t.MAX_LENGTH)),
                t.memdata = i,
                sessionStorage.setItem(t.KEY, i)
            }
        },
        t.saveLog = function() {
            t.getIsSupport() && sessionStorage.setItem(t.KEY, t.memdata)
        },
        t.clear = function() {
            t.getIsSupport() && sessionStorage.removeItem(t.KEY)
        },
        t.getData = function(e) {
            var n = "";
            return t.getIsSupport() && (n = sessionStorage.getItem(e)),
            n || (n = ""),
            n
        },
        t.getIsSupport = function() {
            return "sessionStorage" in window
        },
        t.padzero = function(t, e) {
            var n = "000" + t;
            return n.substr(n.toString().length - e)
        },
        t
    } ();
    u.KEY = a.config.storageOption.storageKey,
    u.MAX_LENGTH = a.config.storageOption.storageSize,
    u.withConsole = c["default"].env !== c["default"].RELEASE,
    u.memdata = "",
    e["default"] = u
},
function(t, e, n) {
    "use strict";
    function o(t) {
        return t && t.__esModule ? t: {
            "default": t
        }
    }
    e.__esModule = !0,
    e.sensor = undefined;
    var i = n(42),
    r = o(i),
    s = n(100),
    c = o(s),
    a = n(107),
    u = o(a),
    f = window.ChatConfig,
    p = function() {
        var t = c["default"].instance.getIsLogin() ? c["default"].instance.stripzero(c["default"].instance.userId) : "";
        return {
            "p": f.config.sensorOption.platform,
            "t": f.config.sensorOption.type,
            "v": c["default"].VERSION,
            "rn": "" + ~~ ((new Date).getTime() / 1e3) + Math.random(),
            "u": c["default"].instance.deviceId || "",
            "pu": t,
            "serverip": c["default"].instance.getCurrentIp() || "",
            "roomid": c["default"].instance.roomId || "",
            "bstp": "h5",
            "h5c_sid": f.sid
        }
    },
    l = function(t) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "",
        n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0,
        o = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0,
        i = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0,
        r = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : "";
        h(t, e, n, o, i, r, !0)
    },
    h = function(t) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "",
        n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0,
        o = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0,
        i = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0,
        s = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : "",
        c = arguments.length > 6 && arguments[6] !== undefined && arguments[6],
        a = {
            "evetp": t,
            "ec": e,
            "tm": n,
            "failtm": o,
            "stb": i,
            "content": s
        },
        u = (0, r["default"])({},
        p(), a);
        g(u, c)
    },
    d = function() {
        return + new Date + ".r" + Math.floor(1e3 * Math.random())
    },
    g = function(t) {
        var e = arguments.length > 1 && arguments[1] !== undefined && arguments[1];
        if (f.config.sensorOption.enabled) {
            var n = [];
            for (var o in t) t.hasOwnProperty(o) && n.push(o + "=" + t[o]);
            var i = f.config.sensorStatUrl,
            r = f.config.sensorOption.imageBeaconKey + d(),
            s = window[r] = new Image,
            c = i + "?" + encodeURI(n.join("&"));
            s.src = c,
            e && (0, u["default"])("POST", f.config.sensorQosUrl, t)
        }
    },
    v = {
        "push": h,
        "pushDebug": l,
        "IP_LOAD_SUCCESS": 1,
        "IP_LOAD_FAIL": 2,
        "IP_RELOAD": 3,
        "SOCKET_CONNECT_SUCCESS": 4,
        "SOCKET_CONNECT_FAIL": 5,
        "SOCKET_CLOSE": 6,
        "SOCKET_RECONNECT": 7,
        "HEART_BEAT_DELAY": 8
    };
    e.sensor = v
},
function(t, e) {
    function n(t) {
        return !! t.constructor && "function" == typeof t.constructor.isBuffer && t.constructor.isBuffer(t)
    }
    function o(t) {
        return "function" == typeof t.readFloatLE && "function" == typeof t.slice && n(t.slice(0, 0))
    }
    t.exports = function(t) {
        return null != t && (n(t) || o(t) || !!t._isBuffer)
    }
},
function(t, e, n) { !
    function() {
        var e = n(143),
        o = n(102).utf8,
        i = n(155),
        r = n(102).bin,
        s = function(t, n) {
            t.constructor == String ? t = n && "binary" === n.encoding ? r.stringToBytes(t) : o.stringToBytes(t) : i(t) ? t = Array.prototype.slice.call(t, 0) : Array.isArray(t) || (t = t.toString());
            for (var c = e.bytesToWords(t), a = 8 * t.length, u = 1732584193, f = -271733879, p = -1732584194, l = 271733878, h = 0; h < c.length; h++) c[h] = 16711935 & (c[h] << 8 | c[h] >>> 24) | 4278255360 & (c[h] << 24 | c[h] >>> 8);
            c[a >>> 5] |= 128 << a % 32,
            c[14 + (a + 64 >>> 9 << 4)] = a;
            for (var d = s._ff,
            g = s._gg,
            v = s._hh,
            y = s._ii,
            h = 0; h < c.length; h += 16) {
                var S = u,
                _ = f,
                T = p,
                m = l;
                u = d(u, f, p, l, c[h + 0], 7, -680876936),
                l = d(l, u, f, p, c[h + 1], 12, -389564586),
                p = d(p, l, u, f, c[h + 2], 17, 606105819),
                f = d(f, p, l, u, c[h + 3], 22, -1044525330),
                u = d(u, f, p, l, c[h + 4], 7, -176418897),
                l = d(l, u, f, p, c[h + 5], 12, 1200080426),
                p = d(p, l, u, f, c[h + 6], 17, -1473231341),
                f = d(f, p, l, u, c[h + 7], 22, -45705983),
                u = d(u, f, p, l, c[h + 8], 7, 1770035416),
                l = d(l, u, f, p, c[h + 9], 12, -1958414417),
                p = d(p, l, u, f, c[h + 10], 17, -42063),
                f = d(f, p, l, u, c[h + 11], 22, -1990404162),
                u = d(u, f, p, l, c[h + 12], 7, 1804603682),
                l = d(l, u, f, p, c[h + 13], 12, -40341101),
                p = d(p, l, u, f, c[h + 14], 17, -1502002290),
                f = d(f, p, l, u, c[h + 15], 22, 1236535329),
                u = g(u, f, p, l, c[h + 1], 5, -165796510),
                l = g(l, u, f, p, c[h + 6], 9, -1069501632),
                p = g(p, l, u, f, c[h + 11], 14, 643717713),
                f = g(f, p, l, u, c[h + 0], 20, -373897302),
                u = g(u, f, p, l, c[h + 5], 5, -701558691),
                l = g(l, u, f, p, c[h + 10], 9, 38016083),
                p = g(p, l, u, f, c[h + 15], 14, -660478335),
                f = g(f, p, l, u, c[h + 4], 20, -405537848),
                u = g(u, f, p, l, c[h + 9], 5, 568446438),
                l = g(l, u, f, p, c[h + 14], 9, -1019803690),
                p = g(p, l, u, f, c[h + 3], 14, -187363961),
                f = g(f, p, l, u, c[h + 8], 20, 1163531501),
                u = g(u, f, p, l, c[h + 13], 5, -1444681467),
                l = g(l, u, f, p, c[h + 2], 9, -51403784),
                p = g(p, l, u, f, c[h + 7], 14, 1735328473),
                f = g(f, p, l, u, c[h + 12], 20, -1926607734),
                u = v(u, f, p, l, c[h + 5], 4, -378558),
                l = v(l, u, f, p, c[h + 8], 11, -2022574463),
                p = v(p, l, u, f, c[h + 11], 16, 1839030562),
                f = v(f, p, l, u, c[h + 14], 23, -35309556),
                u = v(u, f, p, l, c[h + 1], 4, -1530992060),
                l = v(l, u, f, p, c[h + 4], 11, 1272893353),
                p = v(p, l, u, f, c[h + 7], 16, -155497632),
                f = v(f, p, l, u, c[h + 10], 23, -1094730640),
                u = v(u, f, p, l, c[h + 13], 4, 681279174),
                l = v(l, u, f, p, c[h + 0], 11, -358537222),
                p = v(p, l, u, f, c[h + 3], 16, -722521979),
                f = v(f, p, l, u, c[h + 6], 23, 76029189),
                u = v(u, f, p, l, c[h + 9], 4, -640364487),
                l = v(l, u, f, p, c[h + 12], 11, -421815835),
                p = v(p, l, u, f, c[h + 15], 16, 530742520),
                f = v(f, p, l, u, c[h + 2], 23, -995338651),
                u = y(u, f, p, l, c[h + 0], 6, -198630844),
                l = y(l, u, f, p, c[h + 7], 10, 1126891415),
                p = y(p, l, u, f, c[h + 14], 15, -1416354905),
                f = y(f, p, l, u, c[h + 5], 21, -57434055),
                u = y(u, f, p, l, c[h + 12], 6, 1700485571),
                l = y(l, u, f, p, c[h + 3], 10, -1894986606),
                p = y(p, l, u, f, c[h + 10], 15, -1051523),
                f = y(f, p, l, u, c[h + 1], 21, -2054922799),
                u = y(u, f, p, l, c[h + 8], 6, 1873313359),
                l = y(l, u, f, p, c[h + 15], 10, -30611744),
                p = y(p, l, u, f, c[h + 6], 15, -1560198380),
                f = y(f, p, l, u, c[h + 13], 21, 1309151649),
                u = y(u, f, p, l, c[h + 4], 6, -145523070),
                l = y(l, u, f, p, c[h + 11], 10, -1120210379),
                p = y(p, l, u, f, c[h + 2], 15, 718787259),
                f = y(f, p, l, u, c[h + 9], 21, -343485551),
                u = u + S >>> 0,
                f = f + _ >>> 0,
                p = p + T >>> 0,
                l = l + m >>> 0
            }
            return e.endian([u, f, p, l])
        };
        s._ff = function(t, e, n, o, i, r, s) {
            var c = t + (e & n | ~e & o) + (i >>> 0) + s;
            return (c << r | c >>> 32 - r) + e
        },
        s._gg = function(t, e, n, o, i, r, s) {
            var c = t + (e & o | n & ~o) + (i >>> 0) + s;
            return (c << r | c >>> 32 - r) + e
        },
        s._hh = function(t, e, n, o, i, r, s) {
            var c = t + (e ^ n ^ o) + (i >>> 0) + s;
            return (c << r | c >>> 32 - r) + e
        },
        s._ii = function(t, e, n, o, i, r, s) {
            var c = t + (n ^ (e | ~o)) + (i >>> 0) + s;
            return (c << r | c >>> 32 - r) + e
        },
        s._blocksize = 16,
        s._digestsize = 16,
        t.exports = function(t, n) {
            if (t === undefined || null === t) throw new Error("Illegal argument " + t);
            var o = e.wordsToBytes(s(t, n));
            return n && n.asBytes ? o: n && n.asString ? r.bytesToString(o) : e.bytesToHex(o)
        }
    } ()
}]);