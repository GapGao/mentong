/*! build: Mon Jan 07 2019 15:43:31 GMT+0800 (China Standard Time) */
!
function(e) {
  var t = {};
  function i(s) {
    if (t[s]) return t[s].exports;
    var a = t[s] = {
      i: s,
      l: !1,
      exports: {}
    };
    return e[s].call(a.exports, a, a.exports, i),
    a.l = !0,
    a.exports
  }
  i.m = e,
  i.c = t,
  i.d = function(e, t, s) {
    i.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: s
    })
  },
  i.r = function(e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }),
    Object.defineProperty(e, "__esModule", {
      value: !0
    })
  },
  i.t = function(e, t) {
    if (1 & t && (e = i(e)), 8 & t) return e;
    if (4 & t && "object" == typeof e && e && e.__esModule) return e;
    var s = Object.create(null);
    if (i.r(s), Object.defineProperty(s, "default", {
      enumerable: !0,
      value: e
    }), 2 & t && "string" != typeof e) for (var a in e) i.d(s, a,
    function(t) {
      return e[t]
    }.bind(null, a));
    return s
  },
  i.n = function(e) {
    var t = e && e.__esModule ?
    function() {
      return e.
    default
    }:
    function() {
      return e
    };
    return i.d(t, "a", t),
    t
  },
  i.o = function(e, t) {
    return Object.prototype.hasOwnProperty.call(e, t)
  },
  i.p = "",
  i(i.s = "WqzX")
} ({
  "+AOU": function(e, t, i) {
    var s;
    void 0 === (s = function() {
      var e = {},
      t = [];
      _.each({
        ptid: "01010041010000000000"
      },
      function(e, i) {
        t.push(i + "=" + e)
      });
      var i = t.join("&");
      return _.each({
        info: "/user/info.action",
        settingConf: "/user/setting_conf.action",
        logout: "/user/logout.action",
        authLogin: "/user/authlogin.action",
        delCookie: "/user/delcookie.action",
        setCookie: "/user/setcookie.action"
      },
      function(t, s) {
        e[s] = "https://passport.iqiyi.com/apis" + t + "?" + i
      }),
      e
    }.call(t, i, t, e)) || (e.exports = s)
  },
  "+TA2": function(e, t, i) {
    new(i("fsd3")),
    new(i("c4nZ"))({
      avatar: $(".nav-user-avator img"),
      name: $(".nav-user-name"),
      infoArea: $(".nav-user")
    }),
    new(i("e7oq"))({
      el: "body"
    });
    var s = 1;
    $(window).on("scroll resize load",
    function(e) {
      var t = $(e.currentTarget),
      a = $("._carportList").offset().top,
      o = document.documentElement.clientHeight;
      s && t.scrollTop() > a - o && (s = 0, new(i("wvHs"))({
        el: "._recommendList"
      }), new(i("sRfo"))({
        el: "._carportList",
        carportNum: "._carportNum"
      }))
    }),
    new(i("zDUL")),
    new(i("CloY"))
  },
  "+zjM": function(e, t, i) {
    var s = i("sk80").roomConfig,
    a = i("H5/F"),
    o = i("V78F");
    e.exports = Backbone.View.extend({
      model: new a,
      events: {
        "click ._btn": "search",
        "keyup ._input": "enterSearch",
        "focus ._input": "focusInput",
        "blur ._input": "blurInput",
        "click ._cancel": "cancel"
      },
      template: {
        error: _.template(o.error),
        success: _.template(o.success)
      },
      initialize: function() {
        this.loaded = !1,
        this.model.set({
          room_id: s.get("roomId")
        }),
        this.model.on("invalid", _.bind(this.invalid, this)),
        this.model.on("success", _.bind(this.showList, this)),
        this.model.on("fail", _.bind(this.showError, this)),
        this.model.on("change", _.bind(this.changeInput, this))
      },
      render: function() {
        this.$el.append(o.layout),
        this.setElement($("._searchBar", this.$el))
      },
      search: function() {
        var e = this.$el.find("._input").val();
        this.model.set({
          show_id: e
        })
      },
      enterSearch: function(e) {
        13 === e.which && this.search()
      },
      invalid: function(e, t) {
        this.showError(t)
      },
      showError: function(e) {
        $("._result").html(this.template.error({
          error: e
        }))
      },
      showList: function(e) {
        $("._result").html(this.template.success(e))
      },
      changeInput: function(e) {
        e.hasChanged("show_id") && e.getData()
      },
      focusInput: function() {
        $("._search", this.$el).addClass("active")
      },
      blurInput: function() {
        $("._search", this.$el).removeClass("active")
      },
      cancel: function() {
        this.remove()
      }
    })
  },
  "+zqs": function(e, t, i) {
    var s = i("FM+S"),
    a = i("B9hF"),
    o = i("mHcq");
    e.exports = new o({
      model: new s,
      template: _.template(a)
    })
  },
  "/20s": function(e, t, i) {
    var s = i("sk80"),
    a = s.roomConfig,
    o = s.event,
    n = s.ui.Tab,
    l = i("09zy"),
    r = i("62y0"),
    c = i("TSKP"),
    d = i("ES+E");
    e.exports = Backbone.View.extend({
      initialize: function(e) {
        var t = a.get("roomId");
        a.get("liveId") ? this.initTabIndex = 0 : this.initTabIndex = 1,
        this.currentIndex = 1,
        this.model = new Backbone.Model,
        this.model.set("visible", !1),
        this.listenEvents(),
        this.tabBodies = [{
          cls: "board-sm-tab-cont",
          content: (new r).setModel(new c({
            room_id: t
          }))
        },
        {
          cls: "board-sm-tab-cont",
          content: (new r).setModel(new d({
            room_id: t,
            week: "current"
          }))
        },
        {
          cls: "board-sm-tab-cont",
          content: (new r).setModel(new d({
            room_id: t,
            week: "prev",
            once: !0
          }))
        }]
      },
      render: function(e) {
        var t = 0,
        i = this;
        e ? (t = e.data.tabIndex, this.initTabIndex = t, this.tabBodies[t].content.model.preProcess(e)) : t = this.initTabIndex,
        this.$el.attr("data-pb-block", "17073102"),
        this.tab = new n({
          el: this.el,
          tmpl: l.tabHeader,
          fade: !0,
          bodies: this.tabBodies,
          initData: e
        }).on("after",
        function(e, t, s) {
          e !== (i.currentIndex = t) && i.tabBodies[e].content.clearTimer()
        }).tab(t)
      },
      listenEvents: function() {
        var e = this;
        o.on("socket.LIVE_START",
        function(t) {
          e.model.get("visible") && e.tab.tab(0),
          e.initTabIndex = 0
        }),
        o.on("socket.LIVE_STOP",
        function(t) {
          e.model.get("visible") && e.tab.tab(1),
          e.initTabIndex = 1
        }),
        this.model.on("change:visible",
        function(t, i) {
          i || e.tabBodies[e.currentIndex].content.clearTimer()
        })
      }
    })
  },
  "/6HC": function(e, t, i) {
    var s = i("iGz5"),
    a = i("b+v/"),
    o = i("sk80"),
    n = o.roomConfig && o.roomConfig.get("roomId");
    e.exports = Backbone.View.extend({
      initialize: function() {
        var e = this;
        this.model = new s,
        this._useFunc = _.debounce(function() {
          e.model.subSave()
        },
        100),
        this.model.on("success",
        function(t) {
          200 === t.code && e.trigger("packGoodsUseSuccess")
        }),
        this.model.on("change:inputData",
        function(t, i) {
          this.set({
            useNum: 1,
            productId: i.info.product_id,
            roomId: n
          }),
          e.render()
        })
      },
      events: {
        'click [data-js-dom="useBadge"]': "useBadge"
      },
      render: function() {
        var e = this,
        t = this.model.get("inputData");
        if (this.$el.append(this.template(this.formatData())), t.info.level >= t.badge.badge_level || !t.badge.badge_level) {
          var i = new a({
            el: this.$el.find("#abc"),
            cur: 1,
            max: t.info.total_num,
            min: 1,
            readOnly: !0
          });
          i.model.on("change:cur",
          function(i, s) {
            0 < s && (e.model.set("useNum", s), e.$el.find("._nextTime").text(e.formatYMD(1e3 * t.info.expire_time * s + (t.info.level == t.badge.badge_level ? t.badge.expireTime: (new Date).getTime()))))
          }),
          i.model.unset("cur").set("cur", 1)
        }
      },
      formatData: function() {
        var e = this.model.get("inputData");
        return _.isArray(e.badge) && (e.badge = {}),
        e.badge.expireTime = e.badge.expire_time ? 1e3 * e.badge.expire_time: (new Date).getTime(),
        e.badge.YMD = this.formatYMD(e.badge.expireTime),
        e
      },
      formatYMD: function(e) {
        var t = new Date(e);
        return t.getFullYear() + "年" + (t.getMonth() + 1) + "月" + t.getDate() + "日"
      },
      useBadge: function(e) {
        e.preventDefault(),
        this._useFunc()
      }
    })
  },
  "/HIr": function(e, t) {
    e.exports = Backbone.Model.extend({
      urlRoot: "",
      initialize: function() {},
      getData: function() {
        return this.save(null, {
          data: {
            room_id: this.get("room_id")
          },
          success: function(e, t) {
            e.trigger("success", e, t)
          },
          error: function(e, t) {
            e.trigger("error", e, t)
          }
        })
      }
    })
  },
  "/TCn": function(e, t, i) {
    var s = i("sk80"),
    a = i("xb6M"),
    o = i("ZsMu");
    e.exports = Backbone.View.extend({
      template: {
        item: _.template(a.item)
      },
      initialize: function() {
        new o({
          el: this.el
        }),
        this.listenEvents()
      },
      listenEvents: function() {
        var e = this;
        s.event.on("socket.BIG_TRUMPET",
        function(t) {
          var i = t.data.op_info;
          s.event.trigger("bigTrumpetMsg2", {
            dom: e.combineMsg(i),
            delay: 1e3 * i.dur,
            prior: ~~i.prior
          })
        })
      },
      combineMsg: function(e) {
        var t, i, s = _.extend({
          room_id: "",
          action: "",
          rt: null
        },
        e),
        a = s.lt,
        o = a.desc_tpl,
        n = a.data,
        l = _.map(o,
        function(e, s) {
          return t = -1,
          i = n[s],
          e.replace(/%s/g,
          function() {
            return t++,
            '<em class="name em-y">' + _.escape(i[t]) + "</em>"
          })
        });
        return s.sentenceList = l,
        s.style = s.style || "",
        this.template.item(s)
      }
    })
  },
  "/VEJ": function(e, t, i) {
    var s = i("sk80"),
    a = s.ui.Toast,
    o = s.tools.isDomDescendant,
    n = s.tools.ishow,
    l = s.event,
    r = i("6gUO"),
    c = i("TbCn");
    e.exports = Backbone.View.extend({
      model: new c,
      events: {
        "click ._setting": "showMoreMenu",
        "loginclick ._shout": "switchShout",
        "click ._locked": "switchLocked",
        "click ._clear": "clearMessage",
        "change #_roomMessageControlEffect": "switchEffect",
        "change #_roomMessageControlStarlight": "switchStarlight"
      },
      initialize: function(e) {
        _.extend(this.props = {},
        e),
        this.render(),
        this.listenEvents()
      },
      render: function() {
        this.$el.append(r.control),
        this.setDoms()
      },
      setDoms: function() {
        var e = this.$el;
        this.doms = {
          $shout: $("._shout", e),
          $locked: $("._locked", e),
          $more: $("._more", e),
          $setting: $("._setting", e)
        }
      },
      showMoreMenu: function(e) {
        this.doms.$more.toggleClass("hide")
      },
      switchShout: function() {
        this.model.negationProperty("shout")
      },
      switchLocked: function() {
        this.model.negationProperty("locked")
      },
      switchEffect: function(e) {
        this.model.set("effect", !e.currentTarget.checked)
      },
      switchStarlight: function(e) {
        this.model.set("starlight", !e.currentTarget.checked)
      },
      clearMessage: function(e) {
        l.trigger("roomMessageControl.clearMessage")
      },
      listenEvents: function() {
        var e = this.doms,
        t = this;
        this.model.on("change:shout",
        function(t, i) {
          l.trigger("roomMessageControl.shout", i),
          e.$shout[i ? "addClass": "removeClass"]("active")
        }),
        this.model.on("change:locked",
        function(t, i) {
          l.trigger("roomMessageControl.locked", i);
          var s = ~~i,
          a = [{
            cls: "xiu-ico-locked",
            iconStr: "&#xe632;",
            title: "解除锁定"
          },
          {
            cls: "xiu-ico-unlocked",
            iconStr: "&#xe659;",
            title: "锁定消息"
          }];
          e.$locked.removeClass(a[s].cls).addClass(a[1 - s].cls).html(a[1 - s].iconStr).attr("title", a[1 - s].title)
        }),
        this.model.on("change:effect",
        function(e, t) {
          a({
            selector: ".chat-setting-tip",
            msg: (t ? "已开启": "已屏蔽") + "特效",
            position: "left"
          }),
          l.trigger("roomMessageControl.effect", t)
        }),
        this.model.on("change:starlight",
        function(e, t) {
          a({
            selector: ".chat-setting-tip",
            msg: (t ? "已恢复": "已屏蔽") + "星光",
            position: "left"
          }),
          l.trigger("roomMessageControl.starlight", t)
        }),
        l.on(["roomMessageGift.render", "roomMessageChat.render"],
        function() {
          t.model.set("locked", !1),
          l.trigger("roomMessageControl.locked", !1)
        }),
        n.on("iShowLogout",
        function() {
          t.model.set("shout", !1)
        }),
        $("body").on("click",
        function(e) {
          var i = e.target;
          o(t.doms.$more.get(0), i, !0) || i === t.doms.$setting.get(0) || t.doms.$more.addClass("hide")
        })
      }
    })
  },
  "/ahc": function(e, t, i) {
    "use strict";
    var s;
    void 0 === (s = function() {
      var e = i("sk80").ui.Dialog;
      return new(Backbone.View.extend({
        warnInfo: function(t) {
          2 === t.type && 107001 === t.data.msgType && new e({
            title: t.data.op_info.punish_type + " " + t.data.op_info.punish_sub_type,
            content: "<p>" + t.data.op_info.punish_reason + "</p>",
            btn: [{
              type: "def",
              clsName: "btn btn-sye",
              text: "确定"
            }]
          })
        }
      }))
    }.call(t, i, t, e)) || (e.exports = s)
  },
  "/cpf": function(e, t, i) {
    var s = i("qkiY"),
    a = i("9aOG"),
    o = i("W6DJ"),
    n = i("GSRz");
    i("wBJt"),
    e.exports = Backbone.View.extend({
      initialize: function(e) {
        _.extend(this.props = {
          minGiftHeight: 37,
          maxGiftHeight: 74,
          minChatHeight: 60,
          dragHeight: 24
        },
        e),
        this.gift = new n,
        this.gift.setVisible(!0),
        this.chat = new o,
        this.chat.setVisible(!0),
        this.willAdaptHeight = !0,
        this.listenEvents(),
        this.render()
      },
      listenEvents: function() {
        var e = this;
        this.gift.on("render",
        function(t) {
          setTimeout(function() {
            var i = e.getGiftHeight(t.list.length);
            e.dragDivide.model.set("divideTop", i),
            e.dragDivide.updateHeights(i),
            e.gift.$el.find(".scroll-content").css("transition", "all .3s ease-in-out")
          },
          300)
        }),
        this.chat.on("render",
        function(t) {
          setTimeout(function() {
            e.chat.$el.find(".scroll-content").css("transition", "all .3s ease-in-out")
          },
          300)
        }),
        this.gift.on("update",
        function(t) {
          if (e.willAdaptHeight) {
            var i = e.getGiftHeight(t);
            e.dragDivide.model.set("divideTop", i)
          }
        })
      },
      getGiftHeight: function(e) {
        var t = this.props;
        return 2 <= e ? t.maxGiftHeight: t.minGiftHeight
      },
      render: function() {
        this.$el.append(a.layout),
        this.checkDragBlockEleIfRender()
      },
      createDragDivide: function() {
        var e = this,
        t = this.props;
        this.dragDivide = new s({
          el: $(".chat-drag-block", this.$el),
          divideTop: t.minGiftHeight,
          topInterval: [t.minGiftHeight],
          bottomInterval: [t.minChatHeight],
          topView: this.gift,
          bottomView: this.chat,
          dragHeight: t.dragHeight
        }).on("updateHeights", _.bind(this.updateBothScroll, this)).on("afterDrag",
        function() {
          e.willAdaptHeight = !1
        })
      },
      updateBothScroll: _.debounce(function() {
        this.gift.updateScroll(),
        this.chat.updateScroll()
      },
      300),
      checkDragBlockEleIfRender: function() {
        var e = this;
        parseInt($(".chat-drag-block").height()) ? (e.checkRendertimer && window.cancelAnimationFrame(e.checkRendertimer), e.createDragDivide()) : e.checkRendertimer = window.requestAnimationFrame(e.checkDragBlockEleIfRender.bind(e))
      }
    })
  },
  "/gYZ": function(e, t, i) {
    "use strict";
    var s = i("sk80"),
    a = s.ui.Banner,
    o = s.ui.ScrollView,
    n = i("5q/7");
    e.exports = Backbone.View.extend({
      events: {
        "click ._trueLoveActivityBtn li:not(.active)": "clickActivityBtn",
        "click ._trueLoveActivity a": "clickActivity",
        "click ._trueLovePrivilegeJoin": "clickPrivilegeJoin"
      },
      template: _.template(n.task),
      initData: function(e) {
        var t = _.extend({},
        e),
        i = t.fans_info.fans_score_msg;
        i && (t.fans_info.fans_score_msg = i.replace(/\n/g, "<br>")),
        t.fans_info.is_owner = ~~t.fans_info.is_owner,
        t.fans_info.is_fan = ~~t.fans_info.is_fan,
        t.isActivity = t.activity_list && t.activity_list.length ? 1 : 0,
        t.isTask = t.task_info && t.task_info.length ? 1 : 0,
        t.isTask || (t.task_info = [{
          task_name: "陪伴主播",
          task_msg: "观看每1分钟可获得2点积分"
        },
        {
          task_name: "赠送主播礼物",
          task_msg: "每消费10奇豆/钻石可获得1点积分"
        },
        {
          task_name: "为主播录制小视频",
          task_msg: "每次录制可获得25点积分"
        }]),
        this.$el.html(this.template(t)),
        t.isActivity && this.activity(),
        this.scrollView && this.scrollView.destroy(),
        this.scrollView = new o,
        this.scrollView.render($(".scroll-panel", this.$el))
      },
      activity: function() {
        new a({
          items: $("._trueLoveActivity").children().remove(),
          itemContainer: $("._trueLoveActivity"),
          thumbContainer: $("._trueLoveActivityBtn"),
          autoScroll: 5e3,
          thumbActiveClassName: "active"
        }).init()
      },
      clickActivity: function(e) {
        1 === $(e.currentTarget).data("subType") && s.event.trigger("gangwar.roomRank", {
          el: "._trueLoveDialog2"
        })
      },
      clickPrivilegeJoin: function() {
        s.event.trigger("truelove.privilegeJoin")
      }
    })
  },
  "08I3": function(e, t, i) {
    var s = i("nCB2"),
    a = i("d/a7");
    e.exports = new s({
      model: new a,
      nodeType: "setAdmin",
      toastMsg: function(e, t) {
        return {
          200 : "已将" + e + (1 == t ? "设置为": "取消") + "管理员"
        }
      }
    })
  },
  "09cZ": function(e, t) {
    e.exports = {
      balance: '<div class="gift-account"><a href="javascript:void(0);" class="chongzhi" data-js-dom="recharge" data-pb-rseat="7">充值</a></div>',
      chatMsg: '<li class="msg"><div class="row"><span class="nr">恭喜</span><a href="javascript:;" class="name" node-type="userHoverTip" data-user_id="<%= user_id %>" data-nick_name="<%- nick_name %>"><%- nick_name %></a><span class="nr">赠送</span><img src="<%= pic %>" alt="<%= product_name %>" class="i-gift"><span class="sys">获得<%= win_rate_desc %>奖励！</span></div></li>',
      giftTip: '<div class="gift-tip"><span class="arr"></span><span class="pic"></span><p>恭喜您通过幸运礼物中奖<em><%= num %></em>钻石</p></div>'
    }
  },
  "09zy": function(e, t) {
    e.exports = {
      tabHeader: '<div class="board-sm-tab"><ul><li class="_tabHd" data-pb-rseat="2">本场</li><li class="_tabHd" data-pb-rseat="2">本周</li><li class="_tabHd" data-pb-rseat="2">上周</li></ul></div>',
      list: '<ul class="contribute-stage"><%_.each(topData, function(v, i){%><li class="contri-item-<%=i+1%>"><div class="contri-item-pic"><img src="<%=v.user_info.user_icon%>" alt=""><div class="mask"></div></div><div class="contri-item-name"><%-v.user_info.nick_name%></div><div class="contri-item-num">贡献值<%=v.score%></div></li><%})%></ul><ul class="contribute-list"><%_.each(bottomData, function(v, i){%><li><span class="contri-list-num"><%=i+4%></span><span class="contri-list-user"><%-v.user_info.nick_name%></span><span class="contri-list-gxz">贡献值<%=v.score%></span></li><%})%></ul>'
    }
  },
  "0G7x": function(e, t) {
    e.exports = Backbone.Model.extend({
      urlRoot: "/api/userinfo/loginfo/",
      initialize: function() {},
      subSave: function(e) {
        var t = {
          type: "get",
          data: {},
          cache: !1,
          success: function(t, i) {
            e && e(i),
            t.unset("loading", {
              silent: !0
            })
          },
          error: function(e, t) {
            e.unset("loading", {
              silent: !0
            })
          }
        };
        if (!this.get("loading")) return this.set({
          loading: 1
        },
        {
          silent: !0
        }),
        this.save(null, t)
      }
    })
  },
  "0W60": function(e, t) {
    e.exports = {
      wrap: '<div class="xmodal xmodal-truelove-sm md _trueLoveDialog2Wrap"><a href="javascript:;" class="_trueLoveDialog2Close"><i class="xiu-ico xiu-ico-off">&#xe63b;</i></a><div class="xmodal-title">提示</div><div class="xmodal-bd _trueLoveDialog2Main"></div></div><div class="dialog-mask zindex2"></div>',
      privilegeOpen: '<div class="t-a">欢迎加入真爱团！</div><div class="t-c">有效期<span class="c-a"><%= expire_time %></span></div><div class="hr">恭喜您激活了</div><% if (img && img.length) %><ul class="jh-list"><% _.each(img, function(v, i) { %><li><div class="picbox"><img src="<%= v.img %>" alt="<%= v.title %>"></div><div class="jh-name"><%= v.title %></div></li><% }) %></ul><div class="xmodal-btn-group"><a class="xmodal-btn xmodal-btn-a _trueLoveDialog2Close" href="javascript:;">确定</a></div>',
      privilegeRenew: '<div class="t-a">您已成功续费真爱团！</div><div class="t-c">有效期<span class="c-a"><%= expire_time %></span></div><div class="xmodal-btn-group"><a class="xmodal-btn xmodal-btn-a _trueLoveDialog2Close" href="javascript:;">确定</a></div>',
      privilegeNoBalance: '<div class="xmodal-bd"><div class="t-a">您的余额不足！</div><div class="t-c">需消费<span class="c-b"><%= num * price %>奇豆</span></div><div class="xmodal-btn-group"><a class="xmodal-btn xmodal-btn-a _trueLoveDialog2Payment" href="javascript:;">充值</a></div></div>',
      guard: '<div class="t-a"><% if (mode === \'auto\') { %>已为您的守护身份自动解锁真爱团权益<% } else { %>您已<%= isFirst ? \'成\' : \'续费\' %>为<span class="zb-name"><%= anchorName %></span>的<%= guardName %>！<% } %></div><div class="t-c">有效期<span class="c-a"><%= expireTime %></span></div><div class="hr">恭喜您激活了</div><% if (list && list.length) %><ul class="jh-list"><% _.each(list, function(v, i) { %><li><div class="picbox"><img src="<%= v.img %>" alt="<%= v.title %>"></div><div class="jh-name"><%= v.title %></div></li><% }) %></ul><div class="xmodal-btn-group"><a class="xmodal-btn xmodal-btn-a _trueLoveDialog2Close" href="javascript:;">确定</a></div>',
      buyOk: '<div class="t-a">恭喜您获得 <img src="<%= product_url %>" alt="<%= product_name %>"> <span class="c-a"><% if (num > 1) { %>x<%= num %><% } %></span></div><div class="t-b"><%= msg %></div><div class="xmodal-btn-group"><a class="xmodal-btn xmodal-btn-a _trueLoveDialog2Close" href="javascript:;">确定</a></div>',
      msg: '<div class="t-a"><%= msg %></div><div class="xmodal-btn-group"><a class="xmodal-btn xmodal-btn-a _trueLoveDialog2Close" href="javascript:;">确定</a></div>'
    }
  },
  "17u4": function(e, t, i) {
    "use strict";
    var s = i("sk80"),
    a = s.roomConfig.get("eventsLists"),
    o = a.widget,
    n = ~~a.trump,
    l = i("mtJN");
    o && o.topic && o.topic.length && _.forEach(o.topic,
    function(e) {
      l.widgets[e] && l.widgets[e].js && l.widgets[e].css && s.core.loader([l.widgets[e].js, l.widgets[e].css])
    }),
    n && s.core.loader([l.trump.css])
  },
  "1LrB": function(e, t, i) {
    var s = i("iE2k"),
    a = i("ZtPF"),
    o = i("r89D"),
    n = i("/cpf");
    e.exports = Backbone.View.extend({
      initialize: function() {
        new n({
          el: this.el
        }),
        new s({
          el: this.el
        }),
        new a({
          el: this.el
        }),
        new o({
          el: this.el
        })
      }
    })
  },
  "1NS6": function(e, t, i) {
    var s = i("sk80");
    i("AQTH"),
    new(i("tlbo")),
    i("nVpQ")(),
    new(i("Xd+x")),
    $(window).blur(function() {
      s.event.trigger("toggleShowPcnPopup", {})
    }),
    s.roomConfig.get("onlineAnchorInfo").user_id != s.loginInfo.userId && 3.5 <= s.env.pcnBriefV && s.event.on("playerDidMount",
    function() {
      $("._mpBtnContainer")[0] || $("._xmGoliveContainer")[0] || ($('<div class="_mpBtnContainer" data-pb-block="16110906"><i class="xm-btn xm-btn-mini-player" data-pb-rseat="7" title="小窗">小窗</i></div><div class="_xmGoliveContainer" data-pb-block="17010401"><a href="javascript:;" class="xm-golive" data-pb-rseat="6" style="display: none;">进入直播间<i class="xiu-ico xiu-ico-arr-right">&#xe627;</i></a></div>').insertAfter(".xm-btn-full-scr"), new(i("Qbyj")))
    });
    var a = /QiXiu\/(\d+\.\d+)/;
    3.2 <= (navigator.userAgent.match(a) && +navigator.userAgent.match(a)[1]) && window._room_config.activity_info.widget.tourbus && s.core.loader(["//static.iqiyi.com/css/ppsshow/2.0/style/native_tourbus_widget.css", "//static.iqiyi.com/js/ppsshow/libs/qrcode.min.js", "//static.iqiyi.com/js/ppsshow/modules/native/tourbus/tourbusWidget.js"])
  },
  "1f7W": function(e, t, i) {
    var s = i("Uk3S"),
    a = i("B/x5"),
    o = i("mHcq");
    e.exports = new o({
      model: new s,
      template: _.template(a)
    })
  },
  "1ntC": function(e, t) {
    e.exports = {
      roomInfo: '<ul class="info-anchor-act"><li class="info-anchor-sign _anchorSign"></li><li class="info-anchor-truelove _trueLoveEntry"></li><li class="info-anchor-follow _anchorFollow"></li></ul><ul class="info-anchor-room-other"><li class="_anchorRoomDownload"></li><li class="_anchorRoomShare"></li><li class="_anchorRoomReport"></li></ul>',
      roomTime: '<% if (type === 1) { %>开播：<em class="imp"><%= hours %></em>小时<% } else if (type === 2) { %>开播：<em class="imp"><%= hours %></em>小时<em class="imp"><%= minutes %></em>分钟<% } else { %>开播：<em class="imp"><%= minutes %></em>分钟<% } %>'
    }
  },
  "26/S": function(e, t) {
    e.exports = Backbone.Model.extend({
      urlRoot: "/api/room/getUserList",
      defaults: {
        old_page: 1,
        page: 1,
        page_size: 20,
        visible: !1
      },
      initialize: function() {},
      getData: function() {
        return this.save(null, {
          data: {
            room_id: this.get("room_id"),
            page: this.get("page"),
            page_size: this.get("page_size")
          },
          success: function(e, t) {
            e.trigger("success", e, t)
          },
          error: function(e, t) {
            e.trigger("error", e, t)
          }
        })
      }
    })
  },
  "2W0g": function(e, t, i) {
    "use strict";
    e.exports = Backbone.Model.extend({
      urlRoot: "/api/reyibang/getPreTimeRank",
      getData: function(e) {
        var t = this;
        e = e || {},
        t.save({},
        {
          data: e,
          success: function(e, i) {
            200 === i.code && t.trigger("getPreTimeRank")
          }
        })
      }
    })
  },
  "2sKr": function(e, t) {
    e.exports = Backbone.Model.extend({
      urlRoot: "/api/room/getGiftHistory",
      initialize: function() {},
      getData: function() {
        return this.save(null, {
          data: {
            live_id: this.get("live_id")
          },
          success: function(e, t) {
            e.trigger("success", e, t)
          },
          error: function(e, t) {
            e.trigger("error", e, t)
          }
        })
      }
    })
  },
  "3/Hw": function(e, t) {
    e.exports = Backbone.Model.extend({
      urlRoot: "/api/product/productEffects",
      initialize: function(e) {},
      getData: function() {
        var e = this,
        t = {
          type: "post",
          dataType: "json",
          data: null,
          cache: !1,
          success: function(t, i) {
            200 == i.code ? e.trigger("success", t, i) : e.trigger("error", t, i)
          },
          error: function(t, i) {
            e.trigger("error", t, i)
          }
        };
        this.save(null, t)
      }
    })
  },
  "3/hO": function(e, t) {
    e.exports = {
      layout: '<div class="_roomEggBox"></div>',
      egg: '<div class="egg-area zoomInAni _egg" style="display: block;right:450px;top:240px;"><img src="<%= (box_pic || \'//www.iqiyipic.com/ppsshow/fix/2.0/img/placeholder.png\').replace(/http(s?):/, \'\') %>"/></div>',
      reward: '<div class="xmodal xmodal-egg-award"><a href="javascript:;" class="xmodal-egg-award-close _close"></a><div class="egg-img"><img src="<%=box_open_pic%>" alt="碎蛋"></div><p class="row row1"><%=title%><span class="row-name"><%=name%></span></p><p class="row row2"><img src="<%=product_img%>" style="width:40px;"><%if(num>0){%><span class="mark">×</span><span class="num"><%=num%></span><%}%></p><p class="row row3"><%=sub_title%></p></div>',
      error: '<div class="xmodal xmodal-egg-award" style="top:200px;right:100px;"><div class="xmodal-title">提示</div><p class="error-alert"><%=msg%></p></div>'
    }
  },
  "31Do": function(e, t) {
    e.exports = '<ul class="gift-tab"><%_.forEach(data, function(v,k) {%><%if(v.data_list.length){%><li data-id="<%=v.tab_id%>"><%=v.type%><div class="bgb-split"></div></li><%}%><%})%><li data-id="9999" data-pb-rseat="5">背 包</li></ul>'
  },
  "3I0v": function(e, t, i) {
    var s = i("B/x5"),
    a = i("g0Hh"),
    o = i("Uk3S"),
    n = QX.ui.ScrollView;
    e.exports = Backbone.View.extend({
      template: _.template(s),
      initialize: function() {
        var e = this;
        this.model = new o,
        this.on("getData",
        function() {
          this.model.subSave()
        }),
        this.model.on("success",
        function(t) {
          200 === t.code && (t.data.history_data.length && _.forEach(t.data.history_data,
          function(e) {
            for (var t in e.user_info) e.user_info.hasOwnProperty(t) && (e[t] = e.user_info[t])
          }), e.appendTips())
        })
      },
      events: {
        'hover [data-js-dom="kanguo-tip"]': "toggleShow",
        'hover [data-js-dom="kanguo"]': "toggleShow"
      },
      render: function() {
        var e = $(a);
        this.$el.after(e),
        this.setElement("body"),
        this.$btn = e,
        (new n).render(this.$btn.find(".scroll-panel"))
      },
      appendTips: function() {
        var e = $(this.template(_.extend(this.model.get("data"), {
          isPcnClient: QX.env.isPcnClient
        })));
        $("body").append(e),
        this.$tips = e;
        var t = this.setPos(this.$btn, this.$btn.outerHeight() / 2 - 10, 0);
        t.top = t.top - .9 * e.outerHeight() + 15,
        e.css(t),
        e.show(),
        (new n).render(e.find(".scroll-panel"))
      },
      setPos: function(e, t, i) {
        var s = e.offset(),
        a = $(document).scrollTop();
        return s.top = s.top - a + t,
        s.left = 0 + e.closest(".fix-nav").outerWidth() + i,
        s
      },
      changePos: function() {
        var e = this.model.get("pos");
        e.top = e.top - .9 * this.$btn.outerHeight() + 15,
        this.$btn.css(e),
        this.$btn.show()
      },
      toggleShow: function(e) {
        $(e.currentTarget);
        var t = e.type,
        i = this,
        s = this.$el.find('[data-js-dom="kanguo-tip"]');
        this.GZTimer && clearTimeout(this.GZTimer),
        this.GZTimer = setTimeout(function() {
          "mouseenter" === t ? !s.length && i.trigger("getData") : i.$tips && i.$tips.remove()
        },
        300)
      }
    })
  },
  "3TFm": function(e, t, i) {
    var s = i("ZDjE"),
    a = i("sk80"),
    o = a.tools.ishow,
    n = a.core.platform;
    e.exports = {
      loadResource: !1,
      checkDeviceEnv: function() {
        return ! (n.isIE && n.version < 11)
      },
      initGlobalObj: function(e) {
        this.checkDeviceEnv() ? this.loadXiuBoard(e) : this.loadSwf(e)
      },
      loadSwf: function(e) {
        var t = this;
        e.isNew = 1,
        this.swfObj = new s({
          el: "#_personalSwf",
          webAddress: "//static.iqiyi.com/ppsshow/flashplayer/IndivGiftEditor2.swf?v=" + ISHOW.flashVersion,
          width: "100%",
          height: "100%",
          flashvars: e
        }),
        this.swfObj.createDom(),
        this.swfObj.on("flashLoadedCallback",
        function(e) {
          e.success && (t.flashId = e.ref.id, t.loadResource = !0, t.flash = o.getFlash(e.ref.id))
        })
      },
      loadXiuBoard: function(e) {
        var t = this;
        t.xiuBoard || a.core.loader(["//static.iqiyi.com/js/ppsshow/plugin/xiuBoard.js"],
        function() {
          t.xiuBoard = window.xiuBoard;
          var i = $(".flash-cont")[0];
          t.xiuBoard && xiuBoard.boardStart(i, e),
          t.loadResource = !0
        })
      },
      changeGift: function(e) {
        if (this.xiuBoard) {
          var t = $(".flash-cont");
          0 === t.find("canvas").length && xiuBoard.boardStart(t.get(0), e),
          this.xiuBoard.boardChangeGift(e)
        } else {
          if (!this.flash) return void console.log("missing flash or xiuBoard");
          this.flash.changeGift(e)
        }
      },
      useTmpl: function(e) {
        if (this.xiuBoard) this.xiuBoard.boardUseTemp({
          points: e,
          type: 1
        });
        else {
          if (!this.flash) return void console.log("missing flash or xiuBoard");
          this.flash.useTemplate({
            points: e,
            type: 1
          })
        }
      },
      resetDrawArea: function() {
        if (this.xiuBoard) this.xiuBoard.boardReset();
        else {
          if (!this.flash) return void console.log("missing flash or xiuBoard");
          this.flash.eraseCanvas()
        }
      },
      closeDrawArea: function() {
        if (this.xiuBoard) this.xiuBoard.boardEnd(),
        this.xiuBoard = null,
        this.loadResource = !1;
        else {
          if (!this.flash) return void console.log("missing flash or xiuBoard");
          this.flash = null,
          this.loadResource = !1
        }
      },
      getThumbnail: function(e) {
        if (this.xiuBoard) {
          var t = this.xiuBoard.boardThumbnail();
          e.responseThumbnail(t)
        } else {
          if (!this.flash) return void console.log("missing flash or xiuBoard");
          this.flash.requestThumbnail()
        }
      }
    }
  },
  "3gbC": function(e, t) {
    e.exports = {
      layout: '<div class="chat-inputblock _wrapper"><input type="text" class="chat-input _input" placeholder="和大家聊聊天"><i class="xiu-ico xiu-ico-emotion _emotion" style="user-select:none;" title="表情" data-pb-rseat="10">&#xe62d;</i><span class="remain-letter"><em class="_remainNum">30</em>字</span><i class="xiu-ico xiu-ico-send _send" title="发送" data-pb-rseat="3"></i><span class="ctd _ctd" style="display:none">3</span><div class="chat-emotion-tip _emotionTip" style="display:none"><i class="i-arr"><em></em></i></div></div><div class="toast toast-chat _chatToast"></div>',
      emotion: '<ul><%_.each(list,function(v){%><li><a class="face" href="javascript:void(0)"><img title="<%=v.key%>" seq-src="<%=v.src%>" style="font-size: 0"></a></li><%})%></ul>',
      message: '<li class="msg"><div class="row"><%=iconList%><a class="name" href="javascript:void(0)" node-type="userHoverTip"  data-user_id="<%=userInfo.user_id%>" data-nick_name="<%-userInfo.nick_name%>"><%-userInfo.nick_name%></a></div><div class="row"><%if(userInfo.hot_step){%><div class="bg-mark bg-orange"><i class="xiu-ico xiu-ico-rocket">&#xe64b;</i><%=content%></div><%} else {%><span class="def"><%=content%></span><%}%></div></li>',
      shout: '<li class="msg"><div class="row"><%=iconList%><a class="name <%=color%>" href="javascript:void(0);" node-type="userHoverTip"  data-user_id="<%=userInfo.user_id%>" data-nick_name="<%-userInfo.nick_name%>"><%-userInfo.nick_name%></a></div><div class="row"><div class="bg-mark bg-<%=color%>"><i class="xiu-ico xiu-ico-loud">&#xe635;</i><%=content%></div></div></li>'
    }
  },
  "3imW": function(e, t, i) {
    "use strict";
    e.exports = Backbone.Model.extend({
      urlRoot: "https://notice.iqiyi.com/apis/msg/pps/list_messages.action",
      initialize: function() {},
      subSave: function(e) {
        var t = {
          type: "get",
          dataType: "jsonp",
          jsonp: "callback",
          data: $.extend({
            status: 0,
            agent_type: 75,
            pagesize: 10,
            type: 21
          },
          e.data || {}),
          cache: !1,
          success: function(e, t) {
            "A00000" === t.code && e.trigger("ok", t.data)
          },
          error: function(e, t) {
            e.trigger("fail", t.msg)
          }
        };
        this.save(null, t)
      }
    })
  },
  "3mSo": function(e, t, i) {
    var s = i("nCB2"),
    a = i("eB8c");
    e.exports = new s({
      model: new a,
      nodeType: "outRoom",
      type: 1,
      toastMsg: function(e, t) {
        return {
          200 : "已将" + e + (1 == t ? "踢出房间": ""),
          201 : "踢出房间需要管理员权限"
        }
      }
    })
  },
  "43og": function(e, t, i) {
    "use strict";
    e.exports = Backbone.Model.extend({
      urlRoot: "/api/reyibang/getAnchorHotSpecificRank",
      getData: function(e) {
        var t = this;
        e = e || {},
        t.save({},
        {
          data: e,
          success: function(e, i) {
            200 === i.code && t.trigger("getSpecificRank")
          }
        })
      }
    })
  },
  "48rB": function(e, t) {
    e.exports = {
      layout: '<div class="draw-gift-stage _layout" data-pb-block="17073114"><div class="draw-gift-box"><div class="flash-cont"><div id="_personalSwf"></div><p class="def _welcome">点击或者拖动鼠标进行绘制</p></div><div class="mft"><div class="_tips"></div><div class="act"><a href="javascript:;" class="btn-dg btn-dg-a _save btn-disabled" data-pb-rseat="5">保存</a><a href="javascript:;" class="btn-dg btn-dg-b _reset btn-disabled" data-pb-rseat="6">重置</a></div></div><a href="javascript:;" class="draw-off _close"></a><div class="tpl-block"></div></div></div>',
      lack: '<p><span class="icon-sign-plaint"></span>还需要绘制<strong class="_num"><%=num%></strong>个<%=name%>，才能送出</p>',
      evaluate: '<p><span class="icon-sign-plaint"></span>绘制了<strong class="_giftNum"><%=num%></strong>个<%=name%>，共计消费<strong class="_beanNum"><%=money%></strong>奇豆/钻石</p>',
      upperLimit: '<p><span class="icon-sign-plaint"></span>绘制已达上限，共计消费<strong><%=money%></strong>奇豆/钻石</p>',
      error: '<span class="dialog-ico ico-alert"></span><div class="pl55 content"><h4>获取礼物失败</h4><p>请选择其他礼物，或者刷新页面重新获取该礼物</p></div>',
      tabHeader: '<ul class="tpl-tab"><li class="_tabHd" data-pb-rseat="2">推荐</li><li class="_tabHd" data-pb-rseat="1">我的</li></ul>',
      editDialog: '<div class="ds-form"><div class="ds-form-item"><label class="lb">模板名称：</label><input class="input _name" type="text" placeholder="10个字符以内"><span class="error _error"></span></div><%if(needDropdownList){%><div class="ds-form-item"><label class="lb">替换模板：</label><div class="pull-down _dropdown"><div class="pull-down-base _replace">请选择</div><span class="ico ico-arraw-b _replace"></span><ul class="pull-down-layer _dropdownList"><%_.each(items, function(v){%><li class="pd-item _item"><a href="javascript:;" class="pd"><%-v.template_name%></a></li><%})%></ul></div></div><%}%></div>',
      deleteDialog: '<p class="center">确定删除"<%=name%>"模板吗？删除后无法找回！</p>',
      tmplLayout: '<ul class="tpl-tabcont _list"></ul>',
      tmplError: '<li><div class="tpl-picbox"><div class="tpl-failed"></div></div><div class="tpl-name">模板载入出错,请<a href="javascript:;">重试</a></div></li>',
      tmplEmpty: '<li><div class="tpl-picbox"><div class="tpl-empty"></div></div><div class="tpl-name">模板名称</div></li>',
      tmplList: '<%_.each(items, function(v, i){%><%if(v.empty){%><li><div class="tpl-picbox"><%if(i!==0){%><div class="tpl-empty"></div><%}else{%><p>快来绘制保存一个个性礼物模板吧!</p><%}%></div><div class="tpl-name">模板名称</div></li><%}else{%><li style="visibility:hidden" class="<%=selectedIndex===i?"active":""%>"><div class="tpl-picbox _thumbnail"><img alt="<%-v.template_name%>" data-pb-rseat="3"><%if(v.template_type==1){%><i class="xiu-ico xiu-ico-delete _delete" data-pb-rseat="4">&#xe63b;</i><%}%></div><div class="tpl-name"><%-v.template_name%></div></li><%}%><%})%>',
      tmplErrorItem: '<div class="tpl-picbox"><div class="tpl-failed"></div></div><div class="tpl-name">模板载入出错,请<a href="javascript:;" class="_retry">重试</a></div>',
      tmplOkItem: '<div class="tpl-picbox _thumbnail"><img alt="<%-template_name%>" src="<%=image_url%>"><%if(template_type==1){%><i class="xiu-ico xiu-ico-delete _delete">&#xe63b;</i><%}%></div><div class="tpl-name"><%-template_name%></div>'
    }
  },
  "4ab0": function(e, t) {
    e.exports = '<a href="javascript:void(0);" class="nav-switch" data-pb-rseat="19"><i class="xiu-ico xiu-ico-arr-left" style="display: block;">&#xe62a;</i><i class="xiu-ico xiu-ico-arr-right">&#xe627;</i></a>'
  },
  "4cuc": function(e, t, i) {
    var s = i("sk80"),
    a = i("3/hO"),
    o = i("ktdX");
    e.exports = Backbone.View.extend({
      model: new o,
      template: {
        egg: _.template(a.egg),
        reward: _.template(a.reward),
        error: _.template(a.error)
      },
      events: {
        "loginclick ._egg": "openBox",
        "click ._close": "closeBox"
      },
      initialize: function(e) {
        var t = this;
        _.extend(this.props = {},
        e),
        this.state = {
          lifeTimer: 0,
          exitEgg: !1,
          eggList: [],
          networkResponse: !0
        },
        this.$el.append(a.layout),
        setTimeout(function() {
          t.setElement($("._roomEggBox"))
        },
        200),
        this.listenEvents()
      },
      listenEvents: function() {
        var e = this;
        this.model.on("success",
        function(t, i) {
          e.showResult(i),
          e.state.networkResponse = !0
        }),
        this.model.on("error",
        function(t, i) {
          e.state.networkResponse = !0
        }),
        s.event.on("roomGameEgg.clean",
        function() {
          e.state.eggList = [],
          e.unmount()
        })
      },
      render: function(e) {
        var t = this;
        this.$el.html(this.template.egg(e.params)),
        this.state.params = e.params,
        this.state.lifeTimer = setTimeout(function() {
          t.unmount()
        },
        e.lifeTime)
      },
      pushItem: function(e) {
        e.template && (_.extend(this.template, e.template), delete e.template),
        this.state.eggList.push(e),
        this.state.exitEgg || this.checkList()
      },
      checkList: function() {
        if (0 < this.state.eggList.length) {
          var e = this.state.eggList.shift();
          this.state.exitEgg = !0,
          this.render(e)
        }
      },
      openBox: function() {
        if (this.state.networkResponse) {
          this.state.networkResponse = !1;
          var e = this.state.params;
          this.model.getData({
            fromRoomId: this.props.roomId,
            boxUuid: e.box_uuid
          })
        }
      },
      closeBox: function() {
        this.unmount()
      },
      showResult: function(e) {
        switch (e.code) {
        case 200:
          this.showReward(e.data);
          break;
        case 201:
          this.showError(e.msg)
        }
      },
      showReward: function(e) {
        this.$el.html(this.template.reward(e))
      },
      showError: function(e) {
        var t = this;
        this.$el.html(this.template.error({
          msg: e
        })),
        this.clearTimer(),
        this.state.lifeTimer = setTimeout(function() {
          t.unmount()
        },
        3e3)
      },
      clearTimer: function() {
        clearTimeout(this.state.lifeTimer)
      },
      unmount: function() {
        var e = this;
        this.clearTimer(),
        this.$el.empty(),
        this.state.exitEgg = !1,
        setTimeout(function() {
          e.checkList()
        },
        1e3)
      }
    })
  },
  "5q/7": function(e, t) {
    e.exports = {
      task: '<div class="scroll-panel scroll-panel-tla"><div class="scroll-content"><div class="tl-status <% if (!fans_info.is_owner && !fans_info.is_fan) { %>center<% } %>"><% if (!fans_info.is_owner && !fans_info.is_fan) { %><div class="tl-xhzbm">喜欢主播吗</div><div class="tl-t-a">快加入粉丝团，完成任务为主播打榜吧！</div><div class="xmodal-btn-group"><a class="xmodal-btn xmodal-btn-a _trueLovePrivilegeJoin" href="javascript:;">立即加入</a></div><% } else { %><div class="my-truelove-rank"><%- fans_info.is_owner ? fans_info.fans_name : \'我的真爱\' %>等级<span>Lv<%= fans_info.is_owner ? fans_info.fans_level : fans_info.fan_medal_info.user_level %></span><% if (fans_info.is_owner) { %><div class="tlr-box"><div class="xiu-ico xiu-ico-ques3">&#xe65a;</div><div class="tip-block tip-block-tls"><div class="arr arr-top"><div class="arr-in"></div></div><% if (fans_info.fans_score_msg) { %><p class="artic"><%= fans_info.fans_score_msg %></p><% } %></div></div><% } %></div><div class="tl-prograss <% if (!fans_info.is_fan && fans_info.e_msg) { %>disabled<% } %>"><div class="tl-pro-t"><%= fans_info.is_owner ? (\'最近180天\' + fans_info.fans_experience) : (\'最近30天贡献值\' + fans_info.user_experience) %><% if (fans_info.is_owner && !fans_info.fans_left_experience || fans_info.is_fan && !fans_info.user_left_experience) { %><span>已满级</span><% } else { %><span>还需<%= fans_info.is_owner ? fans_info.fans_left_experience : fans_info.user_left_experience %>升级Lv<%= fans_info.is_owner ? (~~fans_info.fans_level + 1) : (~~fans_info.fan_medal_info.user_level + 1) %></span><% } %></div><div class="tl-pro-bar"><div class="tl-pro-bar-inner" style="width:<% if (fans_info.is_owner) { %><%= (1 - fans_info.fans_left_experience / fans_info.fans_max_experience) * 100 %><% } else { %><%= (1 - fans_info.user_left_experience / fans_info.user_max_experience) * 100 %><% } %>%"></div></div></div><% } %></div><% if (isActivity) { %><div class="tlc-container"><ul class="tlc-wrap _trueLoveActivity"><% _.each(activity_list, function(v) { %><% if (v.sub_type) { %><li><a href="javascript:;" data-sub-type="<%= v.sub_type %>"><img src="<%= v.web_img %>"></a></li><% } else { %><li><a href="<%= v.url %>" target="_blank"><img src="<%= v.web_img %>"></a></li><% } %><% }) %></ul><% if (activity_list.length > 1) { %><ul class="bullet-nav-grp _trueLoveActivityBtn"><% _.each(activity_list, function(v, i) { %><li class="<%= i ? \'\' : \'active\' %>"></li><% }) %></ul><% } %></div><% } %><ul class="tl-mission-list"><% _.each(task_info, function(v, i) { %><li class="<% if (!isTask) { %>tlm-<%= i + 1 %><% } %>"><% if (isTask) { %><img src="<%= v.img_url %>" alt="<%= v.task_name %>"><% } %><div class="t-1"><%= v.task_name %></div><div class="t-2"><%= v.task_msg %></div><% if (isTask && v.progress !== undefined && v.total !== undefined) { %><div class="val"><span><%= v.progress %></span>/<%= v.total %></div><% } else if (isTask && fans_info.is_owner) { %><div class="val val-a"><span><%= v.fans_num %>人参与，获得<%= v.experience %>人气值</span></div><% } %></li><% }) %></ul></div></div>'
    }
  },
  "62y0": function(e, t, i) {
    var s = i("09zy");
    e.exports = Backbone.View.extend({
      template: _.template(s.list),
      initialize: function(e) {
        this.state = {
          timer: 0
        }
      },
      render: function(e) {
        if (e) {
          if (200 === e.code) {
            var t = this,
            i = 1e3 * e.data.expire_time + parseInt(1e4 * Math.random() + 1),
            s = e.data;
            this.$el.html(this.template({
              topData: s.items.slice(0, 3),
              bottomData: s.items.slice(3)
            })),
            this.state.timer && this.clearTimer(),
            this.state.timer = setTimeout(function() {
              t.model.getData()
            },
            i)
          }
        } else this.model.getData()
      },
      setModel: function(e) {
        var t = this;
        return this.model = e,
        this.model.on("success",
        function(e, i) {
          t.render(i)
        }),
        this
      },
      clearTimer: function() {
        clearTimeout(this.state.timer),
        this.state.timer = 0
      }
    })
  },
  "66B1": function(e, t) {
    e.exports = {
      list: '<div class="scroll-panel"><div class="scroll-content"><ul class="msg-group _roomMessageList"><%=data%></ul></div></div>',
      timestamp: '<li class="msg-group-time"><span><%=time%></span></li>'
    }
  },
  "6J62": function(e, t, i) {
    var s = i("sk80"),
    a = s.ui.Dialog,
    o = s.ui.LimitInput,
    n = s.tools.isDomDescendant,
    l = i("48rB"),
    r = i("Ojav");
    e.exports = Backbone.View.extend({
      model: new r,
      template: _.template(l.editDialog),
      events: {
        "click ._replace": "toggleDropdownList",
        "click ._item": "choosenItem"
      },
      initialize: function(e) {
        _.extend(this.props = {},
        e),
        this.limitInput = new o,
        this.listenEvents()
      },
      listenEvents: function() {
        var e = this,
        t = this.model;
        t.on("success",
        function(t, i) {
          200 === i.code ? (_.extend(i.data, {
            name: t.get("name"),
            oldTmplId: t.get("oldTmplId")
          }), e.trigger("afterSave", i.data), e.dialog.remove(), e.dialog = null) : 201 === i.code && t.set("error", i.msg)
        }),
        t.on("change:oldTmplId",
        function(e, t) {}),
        t.on("change:oldTmplName",
        function(t, i) {
          e.$replace.text(i)
        }),
        t.on("change:error",
        function(t, i) {
          e.$error.text(i)
        }),
        t.on("invalid",
        function(e, t) {
          e.set("error", t)
        });
        var i = this.limitInput.model;
        i.on("change:value",
        function(i, s) {
          t.set("name", s),
          e.autoValidate()
        }),
        i.on("change:overLength",
        function(i, s) {
          t.set("overLength", s),
          e.autoValidate()
        }),
        $("body").on("click",
        function(t) {
          var i = t.target;
          n($("._dropdown", e.$el).get(0), i, !0) || $("._dropdownList", e.$el).hide()
        })
      },
      render: function(e, t, i) {
        this.model.set({
          name: "",
          tmplList: t,
          points: e.points,
          oldTmplId: void 0,
          oldTmplName: "",
          error: "",
          needDropdownList: t.length === i
        }),
        this.dialog = new a({
          title: "保存模板",
          clsName: "dialog-draw-save",
          content: this.template({
            items: t,
            needDropdownList: this.model.get("needDropdownList")
          }),
          btn: [{
            type: "bOk",
            clsName: "btn btn-sye",
            text: "确定"
          },
          {
            type: "def",
            clsName: "btn btn-syj",
            text: "取消"
          }]
        }).on("bOk", _.bind(this.btnOk, this)).on("cancel", _.bind(this.btnCancel, this)),
        this.setElement("#" + this.dialog.cid),
        this.$replace = $("._replace", this.$el),
        this.$dropdownList = $("._dropdownList", this.$el),
        this.$name = $("._name", this.$el),
        this.$error = $("._error", this.$el),
        this.limitInput.setProps({
          dom: this.$name,
          max: 5
        }),
        this.limitInput.reset(!0)
      },
      btnOk: function() {
        this.model.getData()
      },
      btnCancel: function() {
        this.trigger("cancel")
      },
      toggleDropdownList: function() {
        this.$dropdownList.toggle()
      },
      choosenItem: function(e) {
        var t = $(e.currentTarget).index(),
        i = this.model.get("tmplList")[t];
        this.$dropdownList.hide(),
        this.model.set({
          oldTmplId: i.id,
          oldTmplName: i.template_name
        })
      },
      autoValidate: function() {
        var e = this.model.validate(this.model.toJSON());
        e && this.model.set("error", e)
      }
    })
  },
  "6KuZ": function(e, t, i) {
    var s = i("sk80").ui.Dialog,
    a = i("48rB"),
    o = i("7Jtm");
    e.exports = Backbone.View.extend({
      events: {
        "click ._delete": "deleteTmpl",
        "click ._thumbnail": "useTmpl",
        "click ._retry": "retry"
      },
      template: {
        list: _.template(a.tmplList),
        okItem: _.template(a.tmplOkItem),
        deleteDialog: _.template(a.deleteDialog)
      },
      initialize: function(e) {
        _.extend(this.props = {},
        e),
        this.deleteTmplModel = new o,
        this.selectedIndex = -1,
        this.listenEvents()
      },
      render: function() {
        if (this.$el.html(a.tmplLayout), this.$list = $("._list", this.$el), this.listData) {
          var e = this.preProcess(this.listData);
          this.$list.html(this.template.list({
            items: e,
            selectedIndex: this.selectedIndex
          })),
          this.insertImages($("._thumbnail img", this.$el))
        }
      },
      preProcess: function(e) {
        for (var t = [].concat(e), i = t.length; i < 3; i++) t.push({
          empty: !0
        });
        return t
      },
      listenEvents: function() {
        var e = this;
        this.deleteTmplModel.on("success",
        function(t, i) {
          200 === i.code && (e.trigger("deleteTmpl", t.get("template_id")), e.dialog.remove(), e.dialog = null)
        })
      },
      deleteTmpl: function(e) {
        var t = $(e.currentTarget).closest("li").index(),
        i = this.listData[t];
        this.dialog = new s({
          clsName: "dialog-draw-save",
          content: this.template.deleteDialog({
            name: i.template_name
          }),
          btn: [{
            type: "bOk",
            clsName: "btn btn-sye",
            text: "确定"
          },
          {
            type: "def",
            clsName: "btn btn-syj",
            text: "取消"
          }]
        }).on("bOk", _.bind(this.btnOk, this, i.id)).on("cancel", _.bind(this.btnCancel, this))
      },
      useTmpl: function(e) {
        if ("IMG" === e.target.nodeName) {
          var t = $(e.currentTarget).closest("li"),
          i = t.index();
          t.hasClass("active") ? (this.selectedIndex = -1, t.removeClass("active"), this.trigger("useTmpl", {
            points: ""
          })) : (this.selectedIndex = i, this.trigger("setSelected"), t.addClass("active").siblings().removeClass("active"), this.trigger("useTmpl", this.listData[i]))
        }
      },
      clearSelection: function() {
        this.$el.find(".active").removeClass("active"),
        this.selectedIndex = -1
      },
      btnOk: function(e) {
        this.deleteTmplModel.set("template_id", e).getData()
      },
      btnCancel: function() {},
      retry: function(e) {
        var t = $(e.currentTarget).closest("li"),
        i = t.index(),
        s = new Image,
        a = this;
        s.onload = function() {
          t.html(a.template.okItem(a.listData[i]))
        },
        s.src = this.listData[i].image_url
      },
      insertImages: function(e) {
        var t = this;
        e.each(function(e) {
          this.onerror = function() {
            $(this).closest("li").html(a.tmplErrorItem).removeAttr("style")
          },
          this.onload = function() {
            $(this).closest("li").removeAttr("style")
          },
          this.src = t.listData[e].image_url
        })
      }
    })
  },
  "6RRy": function(e, t) {
    e.exports = '<div data-js-dom="follow-tip" class="tip-block nav-follow-tip" style="top: 4px; left: 103.5px; display:none;"<% if(isPcnClient) { %> data-pb-block="followpop"<% } %>><% if(isPcnClient) { %><div class="tip-block-header"><%= popupName %><a class="_follow-tip-see-more" href="<%= url %>" target="_blank" data-pb-rseat="more">全部></a></div><% } %><div class="arr arr-left" style="bottom:10%;"><div class="arr-in"></div></div><div class="scroll-panel scroll-nav-list"><div class="scroll-content"><%if(total_num<=0){%><div class="no-follow-tip"><p>您还没有关注过主播呢，</p><p>看看下面推荐的主播吧！</p></div><%} else {%><%if(on_live_anchor.length){%><h4 class="nft-tit">正在直播</h4><ul class="hasliving list-sye"<% if(!isPcnClient) { %> data-pb-block="17073100"<% } %>><%_.forEach(on_live_anchor, function(v) {%><li class="item-sye"><div class="live-panel"><div class="host-pic"><img src="<%= v.live_image_1x1.replace(/http(s?):/, \'\') %>"><a href="/room/<%=v.room_id%>" target="room" class="dummy-play-icon"<% if(isPcnClient) { %> data-pb-rseat="liveanchor"<% }else{ %> data-pb-rseat="17"<% } %>></a></div><h4 class="name"><a href="/room/<%=v.room_id%>" target="room"<% if(isPcnClient) { %> data-pb-rseat="liveanchor"<% }else{ %> data-pb-rseat="17"<% } %>><img class="ico-zb" src="//www.iqiyipic.com/ppsshow/fix/gradeicon/lv_zb_v<%=v.anchor_level%>.png" alt=""><%-v.nick_name%></a></h4><p class="status"><span class="live-time"><%if(v.follow_time<1){%>今天关注<%} else if(v.follow_time<30){%>已陪伴<%=v.follow_time|0%>天<%} else{%>已陪伴<%=Math.floor(v.follow_time/30)%>个月<%}%></span></p></div></li><%})%></ul><%}%><%if(off_live_anchor.length){%><h4 class="nft-tit">正在休息</h4><ul class="list-history list-sye"><%_.forEach(off_live_anchor, function(v) {%><li class="item-sye"><a href="/room/<%=v.room_id%>" target="room" class="eyes-item"<% if(isPcnClient) { %> data-pb-rseat="restanchor"<% } %>><div class="eyes-item-l"><span class="avatar-outer"><img width="50" height="50" class="avatar" src="<%=v.user_icon.replace(/http(s?):/, \'\')%>"></span></div><div class="eyes-item-r"><h4 class="t"><em class="name"><%-v.nick_name%></em></h4><div class="des"><span class="live-time"><%if(v.follow_time<1){%>今天关注<%} else if(v.follow_time<30){%>已陪伴<%=v.follow_time|0%>天<%} else{%>已陪伴<%=Math.floor(v.follow_time/30)%>个月<%}%></span></div></div></a></li><%})%></ul><%}%><%}%><%if(recommend_anchor.length){%><%if(total_num>0 && !on_live_anchor.length){%><p class="rest-tip-txt">您关注的主播都休息了，看看正在开播的推荐主播吧！</p><%}%><h4 class="nft-tit">推荐直播</h4><ul class="recomliving list-sye"><%_.forEach(recommend_anchor, function(v){%><li class="item-sye"><div class="live-panel"><div class="host-pic"><img src="<%=v.rec_image_1x1.replace(/http(s?):/, \'\')%>"><a href="/room/<%=v.room_id%>" target="room" class="dummy-play-icon"<% if(isPcnClient) { %> data-pb-rseat="recommendedanchor"<% } %>></a></div><h4 class="name"><a href="/room/<%=v.room_id%>" target="room"<% if(isPcnClient) { %> data-pb-rseat="recommendedanchor"<% } %>><img class="ico-zb" src="//www.iqiyipic.com/ppsshow/fix/gradeicon/lv_zb_v<%=v.anchor_level%>.png" alt=""><%-v.nick_name%></a></h4></div></li><%})%></ul><%}%></div></div></div>'
  },
  "6WGU": function(e, t) {
    e.exports = '<div class="pick-panel"><div class="result-panel"><h5></h5><ul class="label-list"></ul></div><div class="option-panel"><h5>可选标签</h5><div class="scroll-panel"><div class="scroll-content"><div class="option-type-block content-label-block"><h6>内容标签<span>(至少且仅可选1个)</span></h6><ul class="label-list"></ul></div><div class="option-type-block beauty-label-block"><h6>颜值标签<span>(至少需要选择1个，且最多可以选择2个)</span></h6><ul class="label-list"></ul></div><div class="option-type-block quality-label-block"><h6>气质标签<span>(至少需要选择1个，且最多可以选择2个)</span></h6><ul class="label-list"></ul></div></div></div></div></div>'
  },
  "6gUO": function(e, t) {
    e.exports = {
      control: '<div class="chat-tool"><div class="hanhua-switch _shout" data-pb-rseat="4">喊话开关</div><label class="hh">喊话</label><i class="xiu-ico xiu-ico-setting-2 _setting" title="设置" data-pb-rseat="7">&#xe64d;</i><i class="xiu-ico xiu-ico-unlocked _locked" title="锁定消息" data-pb-rseat="6">&#xe659;</i><i class="xiu-ico xiu-ico-clear _clear" title="清空消息" data-pb-rseat="5">&#xe631;</i><div class="chat-setting-tip hide _more"><ul><li><input id="_roomMessageControlEffect" class="_effect" type="checkbox" data-pb-rseat="9"><label for="_roomMessageControlEffect" data-pb-rseat="9">屏蔽特效</label></li><li><input id="_roomMessageControlStarlight"  class="" type="checkbox" data-pb-rseat="8"><label for="_roomMessageControlStarlight" data-pb-rseat="8">屏蔽星光消息</label></li></ul><i class="i-arr"><em></em></i></div></div>'
    }
  },
  "6imf": function(e, t, i) {
    var s = i("sk80").ui.Tab,
    a = i("48rB"),
    o = i("6KuZ"),
    n = i("6J62"),
    l = i("aC6a");
    e.exports = Backbone.View.extend({
      initialize: function() {
        this.tabBodies = [{
          content: new o
        },
        {
          content: new o
        }],
        this.currentIndex = 0,
        this.editDialog = new n,
        this.getTmplListModel = new l,
        this.listenEvents()
      },
      render: function(e) {
        var t = this;
        e ? this.tab = new s({
          el: this.el,
          tmpl: a.tabHeader,
          fade: !0,
          bodies: this.tabBodies
        }).on("before",
        function(e, i, s) {
          var a = ["systemList", "personalList"][i];
          t.tabBodies[i].content.listData = t.getTmplListModel.get(a)
        }).on("after",
        function(e, i, s) {
          t.currentIndex = i,
          t.tabBodies[e].content.visible = !0,
          t.tabBodies[i].content.visible = !0
        }).tab(this.currentIndex) : this.getTmplListModel.getData()
      },
      refreshTmplList: function(e, t, i) {
        var s = this.getTmplListModel,
        a = s.get("personalList"),
        o = function(e, t) {
          for (var i = -1,
          s = 0; s < e.length; s++) if (e[s].id === t) {
            i = s;
            break
          }
          return i
        } (a, t);
        if (i) a.splice(o, 1);
        else {
          var n = {
            id: e.id,
            template_name: e.name,
            template_type: 1,
            image_url: e.image,
            points: s.get("currentData").points
          };
          void 0 !== e.oldTmplId && a.splice(o, 1),
          a.unshift(n)
        }
        this.tab.tab(1)
      },
      clearSelection: function() {
        this.tabBodies[0].content.clearSelection(),
        this.tabBodies[1].content.clearSelection()
      },
      listenEvents: function() {
        var e = this;
        this.on("saveTmpl",
        function(t) {
          e.getTmplListModel.set("currentData", t),
          e.editDialog.render(t, e.getTmplListModel.get("personalList"), 3),
          1 !== e.currentIndex && e.tab.tab(1)
        }),
        this.on("getThumbnail",
        function(t) {
          e.tempThumbnail = t
        }),
        this.editDialog.on("afterSave",
        function(t) {
          t.image = e.tempThumbnail,
          e.refreshTmplList(t, t.oldTmplId, !1),
          e.trigger("afterSave", t)
        }),
        this.editDialog.on("cancel",
        function() {
          e.trigger("cancel")
        }),
        this.getTmplListModel.on("success",
        function(t, i) {
          var s = {
            systemList: [],
            personalList: []
          };
          200 === i.code && (_.each(i.data,
          function(e) {
            0 === e.template_type ? s.systemList.push(e) : 1 === e.template_type && s.personalList.push(e)
          }), e.getTmplListModel.set("personalList", s.personalList), e.getTmplListModel.set("systemList", s.systemList), e.currentIndex = s.personalList.length ? 1 : 0, e.render(s))
        }),
        this.tabBodies[1].content.on("deleteTmpl",
        function(t) {
          e.refreshTmplList({
            id: t
          },
          t, !0)
        }),
        this.tabBodies[0].content.on("useTmpl",
        function(t) {
          e.trigger("useTmpl", t)
        }),
        this.tabBodies[0].content.on("setSelected",
        function() {
          e.tabBodies[1].content.selectedIndex = -1
        }),
        this.tabBodies[1].content.on("useTmpl",
        function(t) {
          e.trigger("useTmpl", t)
        }),
        this.tabBodies[1].content.on("setSelected",
        function() {
          e.tabBodies[0].content.selectedIndex = -1
        })
      }
    })
  },
  "7G0m": function(e, t) {
    e.exports = '<li class="msg"><div class="row"><%=iconList%><a class="name green" href="javascript:void(0)" node-type="userHoverTip" data-user_id="<%=userId%>" data-nick_name="<%-nickName%>"><%-nickName%></a><span class="nr">被主播迷倒了，为主播送了一个<%=productName%></span><img class="i-gift" title="<%=productName%>" alt="<%=productName%>" src="<%=productPic%>"></div></li>'
  },
  "7Jtm": function(e, t) {
    e.exports = Backbone.Model.extend({
      urlRoot: "/room/delPersonalTemplate",
      initialize: function() {},
      getData: function() {
        return this.save(null, {
          type: "post",
          data: {
            template_id: this.get("template_id")
          },
          success: function(e, t) {
            e.trigger("success", e, t)
          },
          error: function(e, t) {
            e.trigger("error", e, t)
          }
        })
      }
    })
  },
  "8B2D": function(e, t, i) {
    "use strict";
    var s = i("sk80"),
    a = s.roomConfig,
    o = i("1ntC");
    e.exports = Backbone.View.extend({
      template: {
        roomInfo: _.template(o.roomInfo),
        roomTime: _.template(o.roomTime)
      },
      csses: {
        anchorRoomTime: "._anchorRoomTime"
      },
      datas: {
        roomTime: Math.floor(a.get("liveTime") / 60),
        liveId: ~~a.get("liveId"),
        timer: 0,
        refreshTime: 6e4
      },
      setDoms: function() {
        var e = this.csses;
        this.doms = {
          $anchorRoomTime: $(e.anchorRoomTime, this.$el)
        }
      },
      initialize: function() {
        this.$el.html(this.template.roomInfo).attr("data-pb-block", "17073101")
      },
      listenEvent: function() {
        var e = this;
        s.event.on("socket.LIVE_START",
        function() {
          e.datas.roomTime = 0,
          e.updateRoomTime(),
          e.showRoomInfo()
        }),
        s.event.on("socket.LIVE_STOP",
        function() {
          e.hideRoomInfo()
        })
      },
      updateRoomTime: function() {
        var e = this,
        t = 0,
        i = e.datas.roomTime,
        s = 0;
        60 < i && (i % 60 == 0 ? (t = 1, s = i / 60, i = 0) : (t = 2, s = Math.floor(i / 60), i %= 60)),
        e.doms.$anchorRoomTime.html(e.template.roomTime({
          type: t,
          hours: s,
          minutes: i
        })),
        clearInterval(e.datas.timer),
        e.datas.timer = setInterval(function() {
          e.datas.roomTime++,
          e.updateRoomTime()
        },
        e.datas.refreshTime)
      },
      showRoomInfo: function() {
        this.doms.$anchorRoomTime.show()
      },
      hideRoomInfo: function() {
        clearInterval(this.datas.timer),
        this.doms.$anchorRoomTime.hide()
      }
    })
  },
  "8NKv": function(e, t, i) {
    "use strict";
    e.exports = Backbone.Model.extend({
      urlRoot: "/api/reyibang/getAnchorHotRank",
      initialize: function() {
        this.xhrObj = null
      },
      getData: function(e) {
        var t = this;
        return this.xhrObj && this.xhrObj.abort(),
        this.xhrObj = this.save({},
        {
          data: e || {},
          success: function(e, i) {
            200 === i.code && t.trigger("getRank")
          }
        }),
        this.xhrObj
      }
    })
  },
  "8qOl": function(e, t, i) {
    var s = i("sk80"),
    a = s.ui.Dialog,
    o = function() {
      s.env.isPcnClient ? i("AQTH").closeLiveTab() : location.href = "/"
    };
    e.exports = function() {
      var e = new a({
        content: '<div class="dialog-tips">你被踢出房间了,3秒后自动离开</div>'
      });
      e.on("cancel",
      function() {
        o()
      }),
      e.on("ok",
      function() {
        o()
      });
      var t = 3;
      setInterval(function() {
        t <= 0 ? o() : e.$el.find(".dialog-tips").html("你被踢出房间了," + --t + "秒后自动离开")
      },
      1e3)
    }
  },
  "8x0B": function(e, t, i) {
    var s;
    void 0 === (s = function(e) {
      e = i("sk80").ui.SubConfirm;
      var t = {
        1 : "下播",
        2 : "禁播"
      };
      return new(Backbone.View.extend({
        punishInfo: function(i) {
          var s = [];
          2 === i.type && 500004 === i.data.msgType && (i.data.op_info.relatedAction.length && (s.push(t[i.data.op_info.relatedAction[0]]), s = "，被系统暂时" + s.join("/")), e({
            width: 410,
            content: '<span class="dialog-ico ico-alert"></span><div class="pl55 content"><p><span class="em">' + _.escape(i.data.to_userInfo.nick_name) + "</span>:你在" + i.data.op_info.punishTime + '直播时，违反了<a href="' + i.data.op_info.detailUrl + '" target="_blank">《奇秀直播内容违规定义及处理方案》</a>：<span class="em-o">' + i.data.op_info.punishName + '</span>，扣罚：<span class="em-o">' + i.data.op_info.punishScore + "分</span>" + s + "。</p></div>",
            btn: [{
              type: "def",
              clsName: "btn btn-sye",
              text: "确定"
            }]
          }))
        }
      }))
    }.apply(t, [])) || (e.exports = s)
  },
  "8xq9": function(e, t, i) {
    var s = i("nCB2"),
    a = i("KtRt"),
    o = QX.liveTools,
    n = new s({
      model: new a,
      nodeType: "inMic",
      toastMsg: function(e) {
        return {
          200 : "已将" + e + "设置上麦"
        }
      }
    });
    o.on("changeMic",
    function(e) {
      "inMic" === e.type && n.postData(e.user_id)
    }),
    e.exports = n
  },
  "9/Be": function(e, t, i) {
    var s, a = i("sk80");
    void 0 === (s = function() {
      return Backbone.Model.extend({
        defaults: {
          badge_id: null,
          nobility_list: null,
          guard_info: null
        },
        initialize: function() {
          this.set({
            user_id: a.loginInfo.userId
          })
        },
        nobilityBox: function(e, t) {
          var i = this;
          i.save(null, {
            patch: !0,
            url: "/api/mall/showBadgeDialog/",
            type: "post",
            dataType: "json",
            data: {},
            success: function(t, s) {
              "200" == s.code && (i.set({
                badge_id: s.data.badge_id,
                badge_list: s.data.badge_list,
                user_badge_info: s.data.user_badge_info
              }), e && e(s.data))
            },
            error: function(e, i) {
              t && t(i.data)
            }
          })
        },
        guardBox: function(e, t) {
          var i = this,
          s = {
            anchor_id: i.get("anchorId")
          };
          i.save(null, {
            patch: !0,
            url: "/mall/showGuardDialog/",
            type: "post",
            dataType: "json",
            data: s,
            success: function(t, s) {
              "200" == s.code && (i.set({
                guard_info: s.data.guard_info,
                user_guard_info: s.data.user_guard_info,
                guard_rights: s.data.guard_rights
              }), e && e(s))
            },
            error: function(e, i) {
              t && t(i)
            }
          })
        }
      })
    }.call(t, i, t, e)) || (e.exports = s)
  },
  "9JyU": function(e, t, i) {
    "use strict";
    var s = i("lCwM"),
    a = i("n4nJ"),
    o = i("U8fk"),
    n = i("ggwn"),
    l = i("wre7"),
    r = i("u3i/");
    e.exports = Backbone.View.extend({
      initialize: function() {
        this.$el.append('<div class="_trueLoveDialog"></div><div class="_trueLoveDialog2"></div>'),
        new r({
          el: "._anchorName"
        }),
        new a({
          el: "._trueLoveEntry"
        }),
        new o({
          el: "._trueLoveDialog"
        }),
        new n({
          el: "._trueLoveDialog2"
        }),
        new l({
          el: "._trueLoveDialog2"
        }),
        new s({
          el: "._trueLoveDialog"
        })
      }
    })
  },
  "9O3K": function(e, t, i) {
    var s;
    void 0 === (s = function() {
      return Backbone.Model.extend({
        urlRoot: "/action/pullInOutMIC",
        initialize: function() {},
        subSave: function(e) {
          var t = this,
          i = {
            type: "post",
            dataType: "json",
            data: e.data,
            success: function(e, i) {
              t.trigger("success", i)
            },
            error: function(e, i) {
              t.trigger("error", i)
            }
          };
          t.save(null, i)
        }
      })
    }.call(t, i, t, e)) || (e.exports = s)
  },
  "9PQ4": function(e, t, i) {
    var s, a = i("sk80");
    void 0 === (s = function() {
      return Backbone.Model.extend({
        defaults: {
          order_key: "",
          callback: ""
        },
        url: "//account.iqiyi.com/order/status.action",
        setOrderKey: function() {
          var e = (new Date).getTime().toString().substring(4) + a.loginInfo.userId;
          this.set("order_key", e)
        },
        getData: function() {
          var e, t = this;
          e = {
            order_key: t.get("order_key")
          },
          this.fetch({
            dataType: "jsonp",
            data: e,
            success: function(e, i) {
              "A00000" === i.code && ("1" === i.data.status ? t.trigger("ok") : "200" === i.data.code || "401" === i.data.code ? t.trigger("continue") : "400" === i.data.code && t.trigger("fail"))
            }
          })
        }
      })
    }.call(t, i, t, e)) || (e.exports = s)
  },
  "9Xom": function(e, t, i) {
    var s;
    void 0 === (s = function() {
      return Backbone.View.extend({
        el: "body",
        initialize: function(e) {
          var t = Backbone.Model.extend({});
          this.model = new t,
          e = e || {};
          var i = this,
          s = null;
          this.model.set({
            horizontalPos: e.horizontalPos || "middle",
            pyLeft: e.left || 0,
            pyTop: e.top || 0,
            autoHide: null == e.autoHide || e.autoHide,
            autoTime: e.autoTime || 3e3,
            sty: e.sty || {}
          }),
          this.model.on("change",
          function(e) {
            clearTimeout(s),
            s = null,
            i.show(),
            e.get("autoHide") && (s = setTimeout(function() {
              i.hide()
            },
            e.get("autoTime")))
          }),
          $("body").on("click", "#" + this.cid + " .close",
          function(e) {
            e.preventDefault(),
            i.hide()
          }),
          $(window).on("resize",
          function() {
            $("#" + i.cid).is(":visible") && i.setPos()
          })
        },
        createTip: function() {
          $("#" + this.cid).length || $("body").append('<div id="' + this.cid + '" class="online-tips" style="display:none;"><p></p>' + (this.model.get("autoHide") ? "": '<a href="javascript:void(0)" class="close">x</a>') + "</div>")
        },
        setPos: function() {
          var e = this.$el,
          t = $("#" + this.cid),
          i = e.offset(),
          s = 0,
          a = Math.max(0, ($(window).width() - $("body").width()) / 2);
          switch (this.model.get("horizontalPos")) {
          case "left":
            s = i.left + this.model.get("pyLeft") - a;
            break;
          case "right":
            s = i.left + e.outerWidth() - t.outerWidth() + this.model.get("pyLeft") - a;
            break;
          default:
            s = i.left + (e.outerWidth() - t.outerWidth()) / 2 + this.model.get("pyLeft") - a
          }
          t.css($.extend(!1, this.model.get("sty"), {
            left: s,
            top: i.top - t.outerHeight() + this.model.get("pyTop")
          }))
        },
        show: function() {
          $("#" + this.cid).length || this.createTip(),
          $("#" + this.cid).find("p").html(this.model.get("content")),
          $("#" + this.cid).show(),
          this.setPos()
        },
        hide: function() {
          $("#" + this.cid).hide(),
          this.model.unset("content", {
            silent: !0
          })
        }
      })
    }.apply(t, [])) || (e.exports = s)
  },
  "9aOG": function(e, t) {
    e.exports = {
      layout: '<div class="chat-drag-block"><div class="chat-tab-cont chat-area giftmsg _top" style="display: block; height: 74px;"></div><div class="chat-tab-cont chat-area chatroom _bottom" style="display: block; height: auto;"></div><div class="chat-drag-bar _dragBar" style="display:none"><div class="cdb-line"></div><i class="cdb-ico"></i></div><div class="chat-drag-bar dragging _dragingBar" style="display:none"><div class="cdb-line"></div><i class="cdb-ico"></i></div></div>'
    }
  },
  "9nyu": function(e, t, i) {
    var s, a, o = i("sk80"),
    n = o.roomConfig,
    l = o.liveTools,
    r = o.ui.Toast;
    s = [i("9O3K")],
    void 0 === (a = function(e) {
      return new(Backbone.View.extend({
        el: "body",
        model: new e,
        initialize: function() {
          var e = this;
          this.model.on("success",
          function(t) {
            var i, s;
            r({
              selector: "#_userPaper",
              msg: (i = $("#_userPaper ._nickName").text(), s = e.model.get("actionType"), {
                200 : "已将" + i + ("in" === s ? "拉入": "移出") + "麦序"
              })[t.code] || t.msg || "当前操作受限"
            })
          }),
          this.model.on("error success",
          function() {
            $('[node-type="pullIn"],[node-type="pullOut"]').data("loading", 0)
          }),
          l.on("changeMic",
          function(t) {
            "outMicRange" === t.type && e.postData("pullOut", t.user_id)
          })
        },
        events: {
          'click [node-type="pullIn"],[node-type="pullOut"]': "inOut"
        },
        postData: function(e, t) {
          var i = {
            pullIn: "in",
            pullOut: "out"
          };
          this.model.set("actionType", i[e]),
          this.model.subSave({
            data: {
              type: i[e],
              room_id: n.get("roomId"),
              to_uid: t
            }
          })
        },
        inOut: function(e) {
          e.preventDefault();
          var t = $(e.currentTarget);
          t.data("loading") || (t.data("loading", 1), this.postData(t.attr("node-type"), t.closest("[data-user_id]").data("user_id")))
        }
      }))
    }.apply(t, s)) || (e.exports = a)
  },
  "9oud": function(e, t, i) {
    var s = i("sk80"),
    a = s.tools.mirror,
    o = s.roomConfig,
    n = i("Ihns"),
    l = i("J0nQ"),
    r = i("31Do");
    e.exports = Backbone.View.extend({
      template: _.template(r),
      initialize: function() {
        var e = this;
        this.model = new n,
        this.useEntityListModel = new l,
        this.model.set("roomId", o.get("roomId")),
        this.model.on("success",
        function(t) {
          200 === t.code && (e.render(), e.model.set("curTabId", 0))
        }),
        this.useEntityListModel.on("success",
        function(t) {
          var i = _.toArray(t.data.items);
          _.forEach(i,
          function(e) {
            e.tabId = 9999
          }),
          e.trigger("changeGiftList", {
            data_list: i,
            is_new: 0,
            tab_id: 9999,
            type: "背 包"
          })
        }),
        this.model.on("change:curTabId",
        function(t, i) {
          9999 == i ? (e.trigger("refreshBagList"), s.event.trigger("giftTab.getCurTabIsBag", 1)) : (e.trigger("changeGiftList", this.get("data")[i]), s.event.trigger("giftTab.getCurTabIsBag", 0)),
          e.$el.find('[data-id="' + i + '"]').siblings(".active").removeClass("active").children("b").remove(),
          e.$el.find('[data-id="' + i + '"]').addClass("active").append("<b></b>")
        }),
        this.on("refreshBagList",
        function() {
          e.useEntityListModel.subSave()
        }),
        s.event.on("giftTab.refreshBagList",
        function() {
          e.useEntityListModel.subSave()
        }),
        this.model.subSave()
      },
      render: function() {
        this.$el.append(this.template(this.model.toJSON()))
      },
      events: {
        "click [data-id]": "selectTab"
      },
      selectTab: function(e) {
        e.preventDefault();
        var t = $(e.currentTarget);
        if (9999 == t.data("id") && !$.cookie("P00001")) return s.event.trigger("loginDialog.show"),
        !1;
        t.hasClass("active") || this.model.set("curTabId", t.data("id"));
        var i = {
          0 : 1,
          1 : 2,
          2 : 3,
          5 : 4,
          9999 : 5
        } [t.data("id")],
        o = t.closest("[data-pb-block]").data("pbBlock");
        return i && a({
          t: 20,
          block: o,
          rseat: o + "_" + i
        }),
        !1
      }
    })
  },
  "AE+2": function(e, t, i) {
    "use strict";
    var s = i("sk80"),
    a = s.tools.ishow,
    o = i("EkEh"),
    n = i("E3Do");
    e.exports = Backbone.View.extend({
      initialize: function(e) {
        var t = this;
        this.model = new n,
        this.$el.append('<div class="_checkInWrap"></div>'),
        this.setDoms(),
        this.dialogView = new o({
          el: "._checkInWrap",
          dom: e.dom
        }),
        s.event.on("checkIn.dialogOpen",
        function() {
          t.datas.type = 1,
          t.model.getData()
        }),
        s.event.on("checkIn.dialogClose",
        function() {
          t.doms.$wrap.empty()
        }),
        this.model.on("ok",
        function() {
          t.dialogOpen()
        }),
        a.on("iShowLoginSuccess",
        function() {
          "index" === e.type && t.model.getData()
        })
      },
      datas: {
        type: 0
      },
      setDoms: function() {
        this.doms = {
          $wrap: $("._checkInWrap", this.$el)
        }
      },
      dialogOpen: function() {
        var e = this,
        t = this.model.get("data"),
        i = ~~$.cookie("checkInDialogShow"),
        s = ~~t.is_check_in;
        this.datas.type ? (this.datas.type = 0, this.dialogView.initData(t), this.setCookie()) : s || i || setTimeout(function() {
          e.dialogView.initData(t),
          e.setCookie()
        },
        3e3)
      },
      setCookie: function() {
        var e = new Date;
        e.setHours(23),
        e.setMinutes(59),
        e.setSeconds(59),
        document.cookie = "checkInDialogShow=1;path=/;expires=" + e
      }
    })
  },
  APMG: function(e, t, i) {
    var s = i("sk80").tools.qos,
    a = /Baiduspider|NetworkBench|Sogou|360Spider|Googlebot|YandexBot/.test(navigator.userAgent);
    window.onerror = function(e, t, i, o, n) {
      if (a) return ! 1;
      s.push(1, {
        pos: i + ":" + o,
        ri: t,
        ct: {
          error: e
        }
      })
    }
  },
  AQTH: function(e, t, i) {
    var s, a = i("sk80"),
    o = a.tools.ishow;
    function n() {
      var e = window.navigator.userAgent.toLowerCase();
      return - 1 < e.indexOf("msie") || -1 < e.indexOf("trident") || -1 < e.indexOf("ie") ? "ie": "cef"
    }
    function l(e) {
      a.event.ensure("native.socket", e)
    }
    function r(e) {
      a.event.ensure("native.init", e)
    }
    function c(e) {
      a.event.ensure("native.windowResize", e)
    }
    function d(e) {
      1 == (e = JSON.parse(e)).type ? a.event.trigger("checkLogin") : o.trigger("iShowLogout")
    }
    function u(e) {
      a.event.trigger("native.phoneCheck", e)
    }
    function p(e) {
      try {
        e = JSON.parse(e)
      } catch(t) {
        return void(e = {})
      }
      a.event.ensure("toggleShowPcnPopup", e)
    }
    function h() {
      a.event.trigger("closeMiniPlayer", {})
    }
    function m(e) {
      try {
        e = JSON.parse(e)
      } catch(t) {
        return void(e = {})
      }
      a.event.trigger("videoTypeChange", e)
    }
    function f() {
      a.event.trigger("native.deskIcon")
    } (s = "ie" === n() ? window.QXPCNative = window.external: window.QXPCNative) || (console.log("QXPCNative is not defined"), s = {}),
    window.socket = l,
    window.init = r,
    window.windowResize = c,
    window.loginState = d,
    window.phoneCheck = u,
    window.toggleShowPcnPopup = p,
    window.closeMiniPlayer = h,
    window.playerTypeChange = m,
    window.oncreateshortcut = f,
    s.config && "function" == typeof s.config && s.config({
      socket: l,
      init: r,
      windowResize: c,
      loginState: d,
      phoneCheck: u,
      toggleShowPcnPopup: p,
      closeMiniPlayer: h,
      playerTypeChange: m,
      oncreateshortcut: f
    });
    var g = ["login", "openNewWeb", "showFullCoverWeb", "goChatRoom", "hideThisWeb", "changeSize", "openSystemBrowser", "position", "charge", "checkPhone", "firstChargeState", "closeRoom", "createshortcut", "openUrlInMainBrowser", "switchtab", "showmodal"];
    if ("ie" === n()) try {
      "yes" !== s.IsQXClient() && _.each(g,
      function(e) {
        void 0 === s[e] && (s[e] = function() {})
      })
    } catch(e) {} else _.each(g,
    function(e) {
      void 0 === s[e] && (s[e] = function() {})
    });
    e.exports = s
  },
  Awsg: function(e, t) {
    e.exports = {
      follow: '<a href="javascript:;" data-pb-rseat="1"></a><span></span>',
      followNotice: '<li class="msg"><div class="row"><%= icons %><a class="name" href="javascript:void(0);"><%- nickName %></a><span class="sys">关注了主播</span></div></li>'
    }
  },
  "B/x5": function(e, t) {
    e.exports = '<div data-js-dom="kanguo-tip" class="tip-block nav-follow-tip" style="top: 4px; left: 103.5px; display:none;"<% if(isPcnClient) { %> data-pb-block="historypop"<% } %>><% if(isPcnClient) { %><div class="tip-block-header"><%= popupName %><a class="_follow-tip-see-more" href="<%= url %>" target="_blank" data-pb-rseat="more">全部></a></div><% } %><div class="arr arr-left" style="bottom:10%;"><div class="arr-in"></div></div><div class="scroll-panel scroll-nav-list"><div class="scroll-content"><%if(!history_data.length){%><div class="no-record-tip"><p style="padding-top:12px;">暂无访问记录哦~</p></div><h4 class="nft-tit">推荐直播</h4><%}%><ul class="list-history list-sye"<% if(!isPcnClient) { %> data-pb-block="17073100"<% } %>><%_.forEach(history_data.length>0?history_data:recommend_data, function(v) {%><li class="item-sye"><a href="/room/<%=v.room_id || v.user_info.room_id%>" target="room" class="eyes-item"<% if(isPcnClient) { %> data-pb-rseat="anchor"<% }else{ %> data-pb-rseat="18"<% } %>><div class="eyes-item-l"><span class="avatar-outer"><img width="50" height="50" class="avatar" src="<%=(v.user_icon || v.user_info.user_icon).replace(/http(s?):/, \'\')%>"></span></div><div class="eyes-item-r"><h4 class="t"><em class="name"><%-v.nick_name || v.user_info.nick_name%></em></h4><div class="des"><%=v.visit_time||\'\'%> <%if(!_.isArray(v.live_info)){%><span class="tag-living"><em>•</em>直播中</span> <%}%></div></div></a></li><%})%></ul></div></div></div>'
  },
  B0eW: function(e, t) {
    e.exports = {
      dialog: '<div class="xmodal xmodal-sign-in _dialog"><a href="javascript:;" class="_close"><i class="xiu-ico xiu-ico-off">&#xe63b;</i></a><div class="xmodal-title">签到领奖<div class="i-ques"><i class="xiu-ico xiu-ico-q2"></i><div class="tip-signin-ques"><div class="arrow-top"></div><p class="_tip"></p></div></div></div><div class="_content"></div></div><div class="dialog-mask"></div>',
      list: '<div class="sign-abstract"><% if (~~check_in_day > 0) { %>您本周已签到 <%= check_in_day %> 天<% } else { %>新的一周，您还没有签到过哦~<% } %></div><ul class="sign-gift-list"><% _.each(check_list, function(v, i) { %><li class="<%= v.cls %>"><div class="num"><%= i + 1 %></div><img src="<%= v.pic %>" alt="<%= v.pic_name %>"><div class="g-name"><%= v.pic_name || \'+\' + v.show_num %></div><% if (~~v.is_check_in) { %><div class="cover"><i class="icon-done"></i></div><% } %></li><% }) %></ul><div class="xmodal-btn-group"><a href="javascript:;" class="xmodal-btn xmodal-btn-a <% if (~~is_check_in && ~~is_login) { %>_close<% } else { %>_checkIn<% } %>"><% if (~~is_check_in && ~~is_login) { %>已<% } %>签到</a></div>',
      reward: '<div class="congra">恭喜您获得了</div><ul class="reward-list"><% _.each(reward, function(v) { %><li><img class="r-pic" src="<%= v.pic %>" alt="<%= v.pic_name %>"><div class="r-name"><%= v.pic_name %><% if (v.type === \'charm\') { %><span>+<%= v.num %></span><% } else { %><% if (~~v.num > 1) { %><span>×<%= v.num %></span><% } %><% } %></div></li><% }) %></ul><div class="xmodal-btn-group"><a href="javascript:;" class="xmodal-btn xmodal-btn-a _close">确定</a></div>'
    }
  },
  B2fO: function(e, t) {
    var i = function() {
      var e, t, s, a, o, n, l = "undefined",
      r = "object",
      c = "Shockwave Flash",
      d = "application/x-shockwave-flash",
      u = "SWFObjectExprInst",
      p = "onreadystatechange",
      h = window,
      m = document,
      f = navigator,
      g = !1,
      v = [function() {
        g ?
        function() {
          var e = m.getElementsByTagName("body")[0],
          t = O(r);
          t.style.visibility = "hidden",
          t.setAttribute("type", d);
          var i = e.appendChild(t);
          if (i) {
            var s = 0; !
            function() {
              if (typeof i.GetVariable != l) {
                var a = i.GetVariable("$version");
                a && (a = a.split(" ")[1].split(","), T.pv = [parseInt(a[0], 10), parseInt(a[1], 10), parseInt(a[2], 10)])
              } else if (s < 10) return s++,
              setTimeout(arguments.callee, 10);
              e.removeChild(t),
              i = null,
              S()
            } ()
          } else S()
        } () : S()
      }],
      _ = [],
      b = [],
      w = [],
      y = !1,
      k = !1,
      x = !0,
      T = function() {
        var e = typeof m.getElementById != l && typeof m.getElementsByTagName != l && typeof m.createElement != l,
        t = f.userAgent.toLowerCase(),
        i = f.platform.toLowerCase(),
        s = /win/.test(i || t),
        a = /mac/.test(i || t),
        o = !!/webkit/.test(t) && parseFloat(t.replace(/^.*webkit\/(\d+(\.\d+)?).*$/, "$1")),
        n = !1,
        u = [0, 0, 0],
        p = null;
        if (typeof f.plugins != l && typeof f.plugins[c] == r) ! (p = f.plugins[c].description) || typeof f.mimeTypes != l && f.mimeTypes[d] && !f.mimeTypes[d].enabledPlugin || (n = !(g = !0), p = p.replace(/^.*\s+(\S+\s+\S+$)/, "$1"), u[0] = parseInt(p.replace(/^(.*)\..*$/, "$1"), 10), u[1] = parseInt(p.replace(/^.*\.(.*)\s.*$/, "$1"), 10), u[2] = /[a-zA-Z]/.test(p) ? parseInt(p.replace(/^.*[a-zA-Z]+(.*)$/, "$1"), 10) : 0);
        else if (typeof h.ActiveXObject != l) try {
          var v = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
          v && (p = v.GetVariable("$version")) && (n = !0, p = p.split(" ")[1].split(","), u = [parseInt(p[0], 10), parseInt(p[1], 10), parseInt(p[2], 10)])
        } catch(e) {}
        return {
          w3: e,
          pv: u,
          wk: o,
          ie: n,
          win: s,
          mac: a
        }
      } ();
      function $() {
        if (!y) {
          try {
            var e = m.getElementsByTagName("body")[0].appendChild(O("span"));
            e.parentNode.removeChild(e)
          } catch(e) {
            return
          }
          y = !0;
          for (var t = v.length,
          i = 0; i < t; i++) v[i]()
        }
      }
      function I(e) {
        y ? e() : v[v.length] = e
      }
      function L(e) {
        if (typeof h.addEventListener != l) h.addEventListener("load", e, !1);
        else if (typeof m.addEventListener != l) m.addEventListener("load", e, !1);
        else if (typeof h.attachEvent != l) s = "onload",
        a = e,
        (i = h).attachEvent(s, a),
        w[w.length] = [i, s, a];
        else if ("function" == typeof h.onload) {
          var t = h.onload;
          h.onload = function() {
            t(),
            e()
          }
        } else h.onload = e;
        var i, s, a
      }
      function S() {
        var e = _.length;
        if (0 < e) for (var t = 0; t < e; t++) {
          var i = _[t].id,
          s = _[t].callbackFn,
          a = {
            success: !1,
            id: i
          };
          if (0 < T.pv[0]) {
            var o = B(i);
            if (o) if (!j(_[t].swfVersion) || T.wk && T.wk < 312) if (_[t].expressInstall && E()) {
              var n = {};
              n.data = _[t].expressInstall,
              n.width = o.getAttribute("width") || "0",
              n.height = o.getAttribute("height") || "0",
              o.getAttribute("class") && (n.styleclass = o.getAttribute("class")),
              o.getAttribute("align") && (n.align = o.getAttribute("align"));
              for (var r = {},
              c = o.getElementsByTagName("param"), d = c.length, u = 0; u < d; u++)"movie" != c[u].getAttribute("name").toLowerCase() && (r[c[u].getAttribute("name")] = c[u].getAttribute("value"));
              M(n, r, i, s)
            } else P(o),
            s && s(a);
            else V(i, !0),
            s && (a.success = !0, a.ref = C(i), s(a))
          } else if (V(i, !0), s) {
            var p = C(i);
            p && typeof p.SetVariable != l && (a.success = !0, a.ref = p),
            s(a)
          }
        }
      }
      function C(e) {
        var t = null,
        i = B(e);
        if (i && "OBJECT" == i.nodeName) if (typeof i.SetVariable != l) t = i;
        else {
          var s = i.getElementsByTagName(r)[0];
          s && (t = s)
        }
        return t
      }
      function E() {
        return ! k && j("6.0.65") && (T.win || T.mac) && !(T.wk && T.wk < 312)
      }
      function M(i, o, n, r) {
        s = r || null,
        a = {
          success: !(k = !0),
          id: n
        };
        var c = B(n);
        if (c) {
          t = "OBJECT" == c.nodeName ? (e = D(c), null) : (e = c, n),
          i.id = u,
          (typeof i.width == l || !/%$/.test(i.width) && parseInt(i.width, 10) < 310) && (i.width = "310"),
          (typeof i.height == l || !/%$/.test(i.height) && parseInt(i.height, 10) < 137) && (i.height = "137"),
          m.title = m.title.slice(0, 47) + " - Flash Player Installation";
          var d = T.ie && T.win ? "ActiveX": "PlugIn",
          p = "MMredirectURL=" + encodeURI(h.location).toString().replace(/&/g, "%26") + "&MMplayerType=" + d + "&MMdoctitle=" + m.title;
          if (typeof o.flashvars != l ? o.flashvars += "&" + p: o.flashvars = p, T.ie && T.win && 4 != c.readyState) {
            var f = O("div");
            n += "SWFObjectNew",
            f.setAttribute("id", n),
            c.parentNode.insertBefore(f, c),
            c.style.display = "none",
            function() {
              4 == c.readyState ? c.parentNode.removeChild(c) : setTimeout(arguments.callee, 10)
            } ()
          }
          N(i, o, n)
        }
      }
      function P(e) {
        if (T.ie && T.win && 4 != e.readyState) {
          var t = O("div");
          e.parentNode.insertBefore(t, e),
          t.parentNode.replaceChild(D(e), t),
          e.style.display = "none",
          function() {
            4 == e.readyState ? e.parentNode.removeChild(e) : setTimeout(arguments.callee, 10)
          } ()
        } else e.parentNode.replaceChild(D(e), e)
      }
      function D(e) {
        var t = O("div");
        if (T.win && T.ie) t.innerHTML = e.innerHTML;
        else {
          var i = e.getElementsByTagName(r)[0];
          if (i) {
            var s = i.childNodes;
            if (s) for (var a = s.length,
            o = 0; o < a; o++) 1 == s[o].nodeType && "PARAM" == s[o].nodeName || 8 == s[o].nodeType || t.appendChild(s[o].cloneNode(!0))
          }
        }
        return t
      }
      function N(e, t, i) {
        var s, a = B(i);
        if (T.wk && T.wk < 312) return s;
        if (a) if (typeof e.id == l && (e.id = i), T.ie && T.win) {
          var o = "";
          for (var n in e) e[n] != Object.prototype[n] && ("data" == n.toLowerCase() ? t.movie = e[n] : "styleclass" == n.toLowerCase() ? o += ' class="' + e[n] + '"': "classid" != n.toLowerCase() && (o += " " + n + '="' + e[n] + '"'));
          var c = "";
          for (var u in t) t[u] != Object.prototype[u] && (c += '<param name="' + u + '" value="' + t[u] + '" />');
          a.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"' + o + ">" + c + "</object>",
          b[b.length] = e.id,
          s = B(e.id)
        } else {
          var p = O(r);
          for (var h in p.setAttribute("type", d), e) e[h] != Object.prototype[h] && ("styleclass" == h.toLowerCase() ? p.setAttribute("class", e[h]) : "classid" != h.toLowerCase() && p.setAttribute(h, e[h]));
          for (var m in t) t[m] != Object.prototype[m] && "movie" != m.toLowerCase() && R(p, m, t[m]);
          a.parentNode.replaceChild(p, a),
          s = p
        }
        return s
      }
      function R(e, t, i) {
        var s = O("param");
        s.setAttribute("name", t),
        s.setAttribute("value", i),
        e.appendChild(s)
      }
      function A(e) {
        var t = B(e);
        t && "OBJECT" == t.nodeName && (T.ie && T.win ? (t.style.display = "none",
        function() {
          4 == t.readyState ?
          function(e) {
            var t = B(e);
            if (t) {
              for (var i in t)"function" == typeof t[i] && (t[i] = null);
              t.parentNode.removeChild(t)
            }
          } (e) : setTimeout(arguments.callee, 10)
        } ()) : setTimeout(function() {
          t.parentNode.removeChild(t)
        },
        10))
      }
      function B(e) {
        var t = null;
        try {
          t = m.getElementById(e)
        } catch(e) {}
        return t
      }
      function O(e) {
        return m.createElement(e)
      }
      function j(e) {
        var t = T.pv,
        i = e.split(".");
        return i[0] = parseInt(i[0], 10),
        i[1] = parseInt(i[1], 10) || 0,
        i[2] = parseInt(i[2], 10) || 0,
        t[0] > i[0] || t[0] == i[0] && t[1] > i[1] || t[0] == i[0] && t[1] == i[1] && t[2] >= i[2]
      }
      function z(e, t, i, s) {
        if (!T.ie || !T.mac) {
          var a = m.getElementsByTagName("head")[0];
          if (a) {
            var r = i && "string" == typeof i ? i: "screen";
            if (s && (n = o = null), !o || n != r) {
              var c = O("style");
              c.setAttribute("type", "text/css"),
              c.setAttribute("media", r),
              o = a.appendChild(c),
              T.ie && T.win && typeof m.styleSheets != l && 0 < m.styleSheets.length && (o = m.styleSheets[m.styleSheets.length - 1]),
              n = r
            }
            T.ie && T.win ? o && typeof o.addRule != l && o.addRule(e, t) : o && typeof m.createTextNode != l && o.appendChild(m.createTextNode(e + " {" + t + "}"))
          }
        }
      }
      function V(e, t) {
        if (x) {
          var i = t ? "visible": "hidden";
          y && B(e) ? B(e).style.visibility = i: z("#" + e, "visibility:" + i)
        }
      }
      function H(e) {
        return null != /[\\\"<>\.;]/.exec(e) && typeof encodeURIComponent != l ? encodeURIComponent(e) : e
      }
      return T.w3 && ((typeof m.readyState != l && "complete" == m.readyState || typeof m.readyState == l && (m.getElementsByTagName("body")[0] || m.body)) && $(), y || (typeof m.addEventListener != l && m.addEventListener("DOMContentLoaded", $, !1), T.ie && T.win && (m.attachEvent(p,
      function() {
        "complete" == m.readyState && (m.detachEvent(p, arguments.callee), $())
      }), h == top &&
      function() {
        if (!y) {
          try {
            m.documentElement.doScroll("left")
          } catch(e) {
            return setTimeout(arguments.callee, 0)
          }
          $()
        }
      } ()), T.wk &&
      function() {
        y || (/loaded|complete/.test(m.readyState) ? $() : setTimeout(arguments.callee, 0))
      } (), L($))),
      T.ie && T.win && window.attachEvent("onunload",
      function() {
        for (var e = w.length,
        t = 0; t < e; t++) w[t][0].detachEvent(w[t][1], w[t][2]);
        for (var s = b.length,
        a = 0; a < s; a++) A(b[a]);
        for (var o in T) T[o] = null;
        for (var n in T = null,
        i) i[n] = null;
        i = null
      }),
      {
        registerObject: function(e, t, i, s) {
          if (T.w3 && e && t) {
            var a = {};
            a.id = e,
            a.swfVersion = t,
            a.expressInstall = i,
            a.callbackFn = s,
            _[_.length] = a,
            V(e, !1)
          } else s && s({
            success: !1,
            id: e
          })
        },
        getObjectById: function(e) {
          if (T.w3) return C(e)
        },
        embedSWF: function(e, t, i, s, a, o, n, c, d, u) {
          var p, h, f = {
            success: !1,
            id: t
          },
          g = (h = "visibility", (p = m.getElementById(t)).currentStyle ? p.currentStyle[h] : getComputedStyle(p, !1)[h]);
          T.w3 && !(T.wk && T.wk < 312) && e && t && i && s && a ? (V(t, !1), I(function() {
            i += "",
            s += "";
            var p = {};
            if (d && typeof d === r) for (var h in d) p[h] = d[h];
            p.data = e,
            p.width = i,
            p.height = s;
            var m = {};
            if (c && typeof c === r) for (var v in c) m[v] = c[v];
            if (n && typeof n === r) for (var _ in n) typeof m.flashvars != l ? m.flashvars += "&" + _ + "=" + n[_] : m.flashvars = _ + "=" + n[_];
            if (j(a)) {
              var b = N(p, m, t);
              p.id == t && V(t, !0),
              V(p.id, "hidden" != g),
              f.success = !0,
              f.ref = b
            } else {
              if (o && E()) return p.data = o,
              void M(p, m, t, u);
              V(t, !0)
            }
            u && u(f)
          })) : u && u(f)
        },
        switchOffAutoHideShow: function() {
          x = !1
        },
        ua: T,
        getFlashPlayerVersion: function() {
          return {
            major: T.pv[0],
            minor: T.pv[1],
            release: T.pv[2]
          }
        },
        hasFlashPlayerVersion: j,
        createSWF: function(e, t, i) {
          return T.w3 ? N(e, t, i) : void 0
        },
        showExpressInstall: function(e, t, i, s) {
          T.w3 && E() && M(e, t, i, s)
        },
        removeSWF: function(e) {
          T.w3 && A(e)
        },
        createCSS: function(e, t, i, s) {
          T.w3 && z(e, t, i, s)
        },
        addDomLoadEvent: I,
        addLoadEvent: L,
        getQueryParamValue: function(e) {
          var t = m.location.search || m.location.hash;
          if (t) {
            if (/\?/.test(t) && (t = t.split("?")[1]), null == e) return H(t);
            for (var i = t.split("&"), s = 0; s < i.length; s++) if (i[s].substring(0, i[s].indexOf("=")) == e) return H(i[s].substring(i[s].indexOf("=") + 1))
          }
          return ""
        },
        expressInstallCallback: function() {
          if (k) {
            var i = B(u);
            i && e && (i.parentNode.replaceChild(e, i), t && (V(t, !0), T.ie && T.win && (e.style.display = "block")), s && s(a)),
            k = !1
          }
        }
      }
    } ();
    e.exports = i
  },
  B6WV: function(e, t) {
    e.exports = {
      1 : '<div class="gs-tip" data-tips-type="<%= tipsType %>" data-entity-type="<%= info.entity_type %>"><div class="gs-tip-arr"><div class="gs-tip-arr-in"></div></div><div class="gst-main"><div class="gstm-fl"><img src="<%= info.pic_png %>" alt="<%= info.name %>"></div><div class="gstm-fr"><p class="p-normal"><span><%= info.name %></span></p><p class="p-des"><%- info.description %></p><div class="gst-btn-act"><a href="javascript:;" class="btn-confirm" data-js-dom="useProps" data-sub-type="<%= ~~info.sub_type %>" data-product-id="<%= info.product_id %>">使用</a></div></div></div></div>',
      2 : '<div class="gs-tip" data-tips-type="<%= tipsType %>" data-entity-type="<%= info.entity_type %>"><div class="gs-tip-arr"><div class="gs-tip-arr-in"></div></div><div class="gst-main"><div class="gstm-fl"><img src="<%= info.pic_png %>" alt="<%= info.name %>"></div><div class="gstm-fr"><p class="p-normal"><span><%= info.name %></span></p><p class="p-des">余额<%= info.price * info.total_num %>奇豆</p><p class="p-danger"><%- info.description %></p><div class="gst-btn-act"><a href="javascript:;" class="btn-confirm" data-js-dom="useProps" data-sub-type="<%= ~~info.sub_type %>" data-product-id="<%= info.product_id %>">使用</a></div></div></div></div>',
      3 : '<div class="gs-tip" data-tips-type="<%= tipsType %>"><div class="gs-tip-arr"><div class="gs-tip-arr-in"></div></div><div class="gst-main"><div class="gstm-fl"><img src="<%= info.pic_png %>" alt="<%= info.name %>"></div><div class="gstm-fr"><p class="p-normal"><span><%= info.name %></span></p><div class="p-des" id="propsInput">使用数量: </div><p class="p-danger"><%- info.description %></p><div class="gst-btn-act"><a href="javascript:;" class="btn-confirm" data-js-dom="useProps" data-sub-type="<%= ~~info.sub_type %>" data-product-id="<%= info.product_id %>">使用</a></div></div></div></div>'
    }
  },
  B9hF: function(e, t) {
    e.exports = '<div data-js-dom="follow-tip" class="tip-block nav-follow-tip" style="top: 4px; left: 103.5px; display:none;" data-pb-block="<%= popupPbBlock %>"><div class="tip-block-header"><%= popupName %><a class="_follow-tip-see-more" href="<%= url %>" target="_blank" data-pb-rseat="more">更多></a></div><div class="arr arr-left" style="bottom:10%;"><div class="arr-in"></div></div><div class="scroll-panel scroll-nav-list"><div class="scroll-content"><ul class="hasliving list-sye"><% _.forEach(items, function(v) { %><li class="item-sye item-sye--category"><div class="live-panel"><div class="host-pic"><img src="<%= v.user_icon.replace(/http(s?):/, \'\') %>"><a href="/room/<%= v.room_id %>" target="room" class="dummy-play-icon" data-pb-rseat="anchor"></a></div><div class="ml-info"><div class="ml-name"><a href="/room/<%= v.room_id %>" target="room" data-pb-rseat="anchor"><%-v.nick_name%></a></div><div class="online-num"><i class="xiu-ico xiu-ico-online"></i><%-v.total_num%></div></div></div></li><% }) %></ul></div></div></div>'
  },
  BGQu: function(e, t, i) {
    "use strict";
    var s = i("sk80"),
    a = s.roomConfig,
    o = s.ui.Dialog,
    n = s.tools.ishow,
    l = i("tUqm"),
    r = i("xeLu"),
    c = i("tt90");
    e.exports = Backbone.View.extend({
      model: new r,
      template: {
        roomEdit: _.template(l.roomEdit),
        roomEditContent: _.template(l.roomEditContent)
      },
      datas: {
        roomId: a.get("roomId"),
        ownerId: a.get("roomOwner")
      },
      events: {
        "click ._anchorRoomEdit": "clickRoomEdit"
      },
      initialize: function() {
        this.listenEvent()
      },
      listenEvent: function() {
        var e = this;
        e.model.on("ok",
        function(t) {
          new o({
            clsName: "room-setting _roomEdit",
            title: "房间设置",
            width: "480",
            content: e.template.roomEditContent()
          }),
          new c({
            el: "._roomEdit",
            data: t,
            first: "basic",
            parentEl: e.$el
          })
        }),
        e.model.on("fail",
        function(t) {
          e.dialogError(t)
        }),
        n.on("iShowLoginSuccess",
        function(t) {
          200 === t.code && t.data.basic.user_id === e.datas.ownerId && e.$el.append(e.template.roomEdit())
        }),
        n.on("iShowLogout",
        function() {
          e.$el.find("._anchorRoomEdit").remove()
        })
      },
      clickRoomEdit: function() {
        this.model.set("roomId", this.datas.roomId),
        this.model.getData()
      },
      dialogError: function(e) {}
    })
  },
  BLYV: function(e, t, i) {
    var s = i("sk80"),
    a = s.roomConfig,
    o = s.ui.userIcon,
    n = i("PJxX"),
    l = i("f6A1");
    e.exports = Backbone.View.extend({
      model: new n,
      template: {
        list: _.template(l.micList)
      },
      initialize: function() {
        this.model.set("room_id", a.get("roomId")),
        this.listenEvents()
      },
      render: function(e) {
        e ? (_.each(e,
        function(e, t) {
          e.iconList = o.online(e)
        }), this.$el.html(this.template.list({
          items: e
        })), 0 === e.length ? this.$el.hide() : this.$el.show(), this.trigger("render")) : this.model.getData()
      },
      listenEvents: function() {
        var e = this;
        this.model.on("success",
        function(t, i) {
          200 === i.code && e.render(i.data)
        });
        var t = _.debounce(_.bind(this.render, this), 1e3);
        s.event.on(["socket.LIVE_START", "socket.LIVE_STOP", "socket.MIC_SEQUENCE_PULL_IN", "socket.MIC_SEQUENCE_PULL_OUT", "socket.MIC_PULL_IN", "socket.MIC_PULL_OUT", "socket.MIC_SEQUENCE_LIFT"],
        function() {
          e.model.get("visible") && t()
        })
      }
    })
  },
  "CC+k": function(e, t, i) {
    var s = i("sk80"),
    a = s.ui.Dialog,
    o = s.roomConfig,
    n = i("nj0n"),
    l = i("kU11");
    getAnchorLabelShowTips = new n,
    getAnchorLabelShowTips.on("success",
    function(e) {
      if (200 == e.code && 1 != e.data) {
        var t = new a({
          template: _.template('<div id="<%=tcid%>" class="dialog<%if(clsName){%> <%=clsName%><%}%>" node-type="baseDialog" style="display:none;" <%=attrs%>><div class="dialog-bd"><div class="dialog-main"><%if(title){%><div class="dialog-tit"><%=title%></div><%}%><div class="dialog-content"  node-type="dialogBd"></div><div class="dialog-mft pick-panel-act" style="display:none;" node-type="dialogFt"></div></div><div class="<%if(title){%>dialog-close<%}else{%>dialog-close<%}%> _def"><a title="关闭" href="javascript:void(0);">关闭</a></div></div></div>'),
          title: '主播标签<div class="icon-ques"><span class="icon-ques-font">?</span><div class="icon-ques-tip"><div class="icon-ques-tip-bd"><p>•&nbsp;设置印象标签后，移动端用户可为您添加印象标签</p><p>•&nbsp;您可在PC端"个人中心-账号设置"中设置及查看标签热度</p></div><span class="arrow"><em class="inner"></em></span></div></div>',
          content: "",
          clsName: "dialog-mc-label anchorLabelDialog",
          btn: [{
            clsName: "btn btn-sye disabled",
            type: "sub",
            text: "提交"
          }]
        });
        new l({
          el: "div.anchorLabelDialog div.dialog-content",
          labelDialog: "div.anchorLabelDialog"
        }).on("tagsSave",
        function() {
          t.hide()
        })
      }
    }),
    getAnchorLabelShowTips.subSave({
      room_id: o.get("roomId")
    })
  },
  CTKC: function(e, t, i) {
    var s, a, o = i("sk80");
    s = [i("9Xom")],
    void 0 === (a = function(e) {
      return $("body").on("click", 'a[data-click-type="reConnect"]',
      function(e) {
        e.preventDefault();
        var t = $(this);
        t.data("canclick") && (t.data("canclick", 0), o.event.trigger("chatTools.doReconnect"))
      }),
      Backbone.View.extend({
        initialize: function() {
          this.tip = new e({
            el: this.el,
            autoHide: !1,
            sty: {
              zIndex: 40
            }
          }),
          o.event.on("chatTools.changeStatus", _.bind(function(e) {
            switch (~~e) {
            case 0:
              this.startCountDown(),
              this.hasDisconnected = !0;
              break;
            case 1:
              if (!this.hasDisconnected) return;
              clearInterval(this.interval),
              this.tip.model.set("content", "", {
                silent: !0
              }),
              this.tip.model.set("content", "聊天服务连接成功！"),
              $("#" + this.tip.cid + " .close").hide(),
              setTimeout(_.bind(function() {
                $("#" + this.tip.cid).remove()
              },
              this), 3e3);
              break;
            case 2:
              clearInterval(this.interval),
              this.tip.model.set("content", "", {
                silent: !0
              }),
              this.tip.model.set("content", '聊天服务中断，请<a href="javascript:void(0);" class="cr" data-click-type="reConnect" data-canclick="1">重试</span>'),
              $("#" + this.tip.cid + " .close").show()
            }
          },
          this))
        },
        setTime: function() {
          this.timeLeft < 0 ? clearInterval(this.interval) : (this.tip.model.set("content", "聊天服务器中断，系统重连中（预计" + this.timeLeft + "s）"), this.timeLeft--)
        },
        startCountDown: function() {
          clearInterval(this.interval),
          this.timeLeft = 25,
          this.setTime(),
          $("#" + this.tip.cid + " .close").hide(),
          this.interval = setInterval(_.bind(this.setTime, this), 1e3)
        }
      })
    }.apply(t, s)) || (e.exports = a)
  },
  "CWe+": function(e, t) {
    e.exports = Backbone.Model.extend({
      urlRoot: "/buy/getPersonalCfg",
      defaults: {
        num: -1,
        nodeList: [],
        saveBtnCanClick: !1,
        resetBtnCanClick: !1,
        templList: []
      },
      initialize: function() {},
      getData: function() {
        var e = this.get("gift").product_id;
        return this.save(null, {
          data: {
            product_id: e
          },
          success: function(e, t) {
            e.trigger("success", e, t)
          },
          error: function(e, t) {
            e.trigger("error", e, t)
          }
        })
      }
    })
  },
  CloY: function(e, t, i) {
    var s = i("sk80"),
    a = i("mBk8"),
    o = i("Rgog"),
    n = s.tools.ishow;
    e.exports = Backbone.View.extend({
      model: new a,
      template: _.template(o),
      initialize: function() {
        this.setElement("body"),
        this.authcookie = $.cookie("P00001"),
        this.supportStorage = "undefined" != typeof Storage,
        this.hasShowMedalTipUsers = null,
        this.tipTimer = 0,
        this.tipExistTime = 1e4,
        this.requestDataFlag = !1,
        this.eventRegister(),
        this.authcookie && this.checkUserIfNeedRequestData(s.loginInfo.userId)
      },
      events: {
        "click .medal-wear-tip .xiu-ico-off": "closeMedalTip"
      },
      eventRegister: function() {
        var e = this;
        this.model.on("success",
        function(t) {
          this.requestDataFlag = !1,
          1 == t.is_popup && e.showMedalWearTip(),
          e.supportStorage && e.addUserToStorage(s.loginInfo.userId)
        }),
        n.on("iShowLoginSuccess",
        function(t) {
          200 == t.code && e.checkUserIfNeedRequestData(s.loginInfo.userId)
        })
      },
      checkUserIfNeedRequestData: function(e) {
        this.supportStorage ? (this.hasShowMedalTipUsers = localStorage.getItem("hasShowMedalTipUsers"), this.hasShowMedalTipUsers && -1 != this.hasShowMedalTipUsers.indexOf(e) || this.requestData()) : this.requestData()
      },
      requestData: function() {
        this.requestDataFlag || (this.model.subSave(), this.requestDataFlag = !0)
      },
      addUserToStorage: function(e) {
        if (this.hasShowMedalTipUsers) {
          if ( - 1 == this.hasShowMedalTipUsers.indexOf(e)) {
            var t = this.hasShowMedalTipUsers.split(",");
            t.push(e),
            localStorage.setItem("hasShowMedalTipUsers", t)
          }
        } else localStorage.setItem("hasShowMedalTipUsers", e)
      },
      showMedalWearTip: function() {
        var e = this.template();
        this.$el.append(e),
        this.createTipTimer()
      },
      createTipTimer: function() {
        this.tipTimer && clearTimeout(this.tipTimer);
        var e = this;
        this.tipTimer = setTimeout(function() {
          e.$el.find(".medal-wear-tip").remove()
        },
        e.tipExistTime)
      },
      closeMedalTip: function() {
        this.tipTimer && clearTimeout(this.tipTimer),
        this.$el.find(".medal-wear-tip").remove()
      }
    })
  },
  CyKM: function(e, t) {
    e.exports = Backbone.Model.extend({
      urlRoot: "/room/getChatList",
      initialize: function() {},
      getData: function() {
        return this.save(null, {
          data: {
            room_id: this.get("room_id")
          },
          success: function(e, t) {
            e.trigger("success", e, t)
          },
          error: function(e, t) {
            e.trigger("error", e, t)
          }
        })
      }
    })
  },
  D43z: function(e, t, i) {
    "use strict";
    e.exports = Backbone.Model.extend({
      urlRoot: "/api/fans/join",
      getData: function(e) {
        var t = this;
        this.save({},
        {
          data: e || {},
          success: function(e, i) {
            200 === i.code ? t.trigger("ok") : 204 === i.code ? t.trigger("noBalance") : t.trigger("fail", i.msg)
          }
        })
      }
    })
  },
  DLq4: function(e, t, i) {
    "use strict";
    e.exports = Backbone.Model.extend({
      urlRoot: "/room/setMultiLiveNotice",
      defaults: {
        room_id: "",
        start_timestamps: ""
      },
      initialize: function() {},
      getData: function() {
        var e = this;
        e.save({},
        {
          data: {
            room_id: e.get("roomId"),
            start_timestamps: e.get("startTimeStamps")
          },
          success: function(t, i) {
            200 === i.code ? e.trigger("ok") : e.trigger("fail", i.msg)
          },
          error: function(t, i) {
            e.trigger("fail", i.msg)
          }
        })
      }
    })
  },
  DPe9: function(e, t) {
    e.exports = {
      item: '<li class="msg"><div class="row"><%=frontLevels%><a class="name" href="javascript:void(0)" node-type="userHoverTip"  data-user_id="<%=user_id%>" data-nick_name="<%-nick_name%>"><%-nick_name%></a></div><div class="row"><span class="def"><%=content%></span></div></li>'
    }
  },
  DWPw: function(e, t) {
    e.exports = '<div class="bgt-give" data-js-dom="sendInfoBlock"><div class="bgt-split"></div><img alt="" title="" class="bgt-give-img"><a data-js-dom="sendGift" href="javascript:void(0);" class="bgt-give-btn" data-pb-rseat="6">赠送</a><p class="bgt-give-num"><input type="text" class="bgt-give-num-input" value="1" autocomplete="off"><i data-js-dom="gift-arr" class="io io-arr-up xiu-ico">&#xe62b;</i></p><p class="bgt-give-man" data-js-dom="sendUser">给<span></span></p></div><ul data-js-dom="giftNumList" class="bgt-give-list"></ul>'
  },
  Dv6R: function(e, t, i) {
    "use strict";
    e.exports = Backbone.Model.extend({
      urlRoot: "/card/fillCardIn",
      getData: function(e) {
        var t = this;
        e = e || {},
        t.save({},
        {
          data: e,
          success: function(e, i) {
            "A00000" === i.code ? (i.data.type = "ok", t.trigger("ok", i.data)) : "D00000" === i.code ? (i.data.type = "noPrize", t.trigger("ok", i.data)) : t.trigger("fail", i.msg)
          }
        })
      }
    })
  },
  E1my: function(e, t, i) {
    "use strict";
    var s = i("sk80"),
    a = s.ui.Toast,
    o = i("lgRd"),
    n = i("D43z");
    e.exports = Backbone.View.extend({
      initialize: function(e) {
        var t = this;
        this.datas.anchorId = e.anchorId,
        this.parentEl = e.parentEl,
        this.template = {
          privilege: _.template(o.privilege),
          privilegeTxt: _.template(o.privilegeTxt)
        },
        this.model = new n,
        this.model.on("ok",
        function() {
          t.joinOk()
        }),
        this.model.on("noBalance",
        function() {
          t.noBalance()
        }),
        this.model.on("fail",
        function(e) {
          t.joinFail(e)
        })
      },
      events: {
        "click ._trueLovePrivilegeNum": "clickNum",
        "click ._trueLoveJoin": "clickJoin"
      },
      datas: {
        anchorId: 0,
        isFan: 0,
        price: 0,
        num: 1,
        ticketNum: 0,
        disabled: 0
      },
      initData: function(e) {
        var t = this.$el;
        this.datas.isFan = e.is_fan = ~~e.is_fan,
        this.datas.price = e.price,
        this.datas.ticketNum = ~~e.ticket_num,
        this.$el.html(this.template.privilege(e)),
        this.doms = {
          $price: $("._trueLovePrivilegePrice", t),
          $txt: $("._trueLovePrivilegeTxt", t),
          $num: $("._trueLovePrivilegeNum", t),
          $btn: $("._trueLoveJoin", t)
        },
        this.doms.$txt.html(this.datas.ticketNum ? this.template.privilegeTxt({
          ticketNum: this.datas.ticketNum
        }) : "")
      },
      clickNum: function(e) {
        var t = $(e.currentTarget),
        i = +t.data("num");
        this.doms.$price.html(this.datas.ticketNum && 1 === i ? "0": i * this.datas.price),
        this.doms.$txt.html(this.datas.ticketNum && 1 === i ? this.template.privilegeTxt({
          ticketNum: this.datas.ticketNum
        }) : ""),
        this.doms.$num.removeClass("active"),
        t.addClass("active"),
        this.datas.num = i
      },
      clickJoin: function() {
        this.datas.disabled || (this.datas.disabled = 1, this.model.getData({
          anchor_id: this.datas.anchorId,
          num: this.datas.num,
          use_ticket: this.datas.ticketNum,
          is_pcn: s.env.isPcnClient ? 1 : 0
        }))
      },
      joinOk: function() {
        var e = this.model.get("data");
        this.datas.disabled = 0,
        this.datas.isFan ? (e.tpl = "privilegeRenew", s.event.trigger("truelove.privilegeDotRemove")) : (e.tpl = "privilegeOpen", s.event.trigger("truelove.showHideEntry", {
          status: 3
        })),
        s.event.trigger("truelove.dialog2Open", e),
        s.event.trigger("truelove.dialogOpen", this.datas.anchorId),
        s.event.trigger("getUserAccount.refreshAccount")
      },
      noBalance: function() {
        this.datas.disabled = 0,
        s.event.trigger("truelove.dialog2Open", {
          tpl: "privilegeNoBalance",
          num: this.datas.num,
          price: this.datas.price
        })
      },
      joinFail: function(e) {
        this.datas.disabled = 0,
        a({
          selector: this.doms.$btn,
          msg: e,
          offsetTop: 10
        })
      }
    })
  },
  E3Do: function(e, t, i) {
    "use strict";
    e.exports = Backbone.Model.extend({
      urlRoot: "/api/checkin/getCheckInInfo",
      getData: function(e) {
        var t = this;
        e = e || {},
        t.save({},
        {
          data: e,
          success: function(e, i) {
            200 === i.code && t.trigger("ok")
          }
        })
      }
    })
  },
  EDXf: function(e, t, i) {
    "use strict";
    e.exports = Backbone.Model.extend({
      urlRoot: "/room/getSpecialSelected",
      defaults: {
        top_num: 54
      },
      initialize: function() {},
      getData: function() {
        var e = this;
        e.save({},
        {
          data: {
            top_num: e.get("topNum"),
            anchor_id: e.get("anchorId")
          },
          success: function(t, i) {
            200 === i.code ? e.trigger("ok", i.data) : e.trigger("fail", i.msg)
          },
          error: function(t, i) {
            e.trigger("fail", i.msg)
          }
        })
      }
    })
  },
  "ES+E": function(e, t) {
    e.exports = Backbone.Model.extend({
      urlRoot: "/api/room/roomRankList",
      defaults: {
        maxLen: 10
      },
      initialize: function(e) {
        this.set("room_id", e.room_id),
        this.set("week", e.week),
        this.set("once", e.once || !1)
      },
      getData: function() {
        return this.get("once") && this.get("data") ? this.trigger("success", this, this.toJSON()) : this.save(null, {
          data: {
            room_id: this.get("room_id"),
            week: this.get("week")
          },
          success: function(e, t) {
            e.preProcess(t),
            e.trigger("success", e, t)
          },
          error: function(e, t) {
            e.trigger("error", e, t)
          }
        })
      },
      preProcess: function(e) {
        var t, i = e.data,
        s = this.get("maxLen");
        if (i.items.length < s) for (t = i.items.length; t < s; t++) i.items.push({
          score: 0,
          user_id: 0,
          user_info: {
            nick_name: "虚位以待",
            user_icon: "//www.iqiyipic.com/common/fix/headicons/male-70.png"
          }
        })
      }
    })
  },
  EcMa: function(e, t, i) {
    "use strict";
    e.exports = Backbone.Model.extend({
      urlRoot: "/card/cardIn",
      defaults: {
        task_id: "",
        room_id: ""
      },
      initialize: function() {},
      getData: function() {
        var e = this;
        e.save({},
        {
          data: {
            task_id: e.get("taskId"),
            room_id: e.get("roomId")
          },
          success: function(t, i) {
            "A00000" === i.code ? (i.data.type = "ok", e.trigger("ok", i.data)) : "D00000" === i.code ? (i.data.type = "noPrize", e.trigger("ok", i.data)) : e.trigger("fail", i.msg)
          },
          error: function(t, i) {
            e.trigger("fail", i.msg)
          }
        })
      }
    })
  },
  EkEh: function(e, t, i) {
    "use strict";
    var s = i("sk80"),
    a = s.ui.Toast,
    o = i("B0eW"),
    n = i("wvs8");
    e.exports = Backbone.View.extend({
      initialize: function(e) {
        var t = this;
        this.model = new n,
        this.datas.dom = e.dom,
        this.model.on("ok",
        function() {
          t.datas.disabled = 0,
          t.checkInOk()
        }),
        this.model.on("fail",
        function(e) {
          t.datas.disabled = 0,
          t.showToast(e)
        }),
        $(window).on("resize",
        function() {
          t.getDialogPos()
        })
      },
      events: {
        "click ._close": "clickClose",
        "click ._checkIn": "clickCheckIn"
      },
      datas: {
        disabled: 0,
        dom: null,
        flag: 1
      },
      initData: function(e) {
        this.$el.html(this.template.dialog()),
        this.setDoms(),
        this.renderList(e)
      },
      template: {
        dialog: _.template(o.dialog),
        list: _.template(o.list),
        reward: _.template(o.reward)
      },
      setDoms: function() {
        var e = this.$el;
        this.doms = {
          $dialog: $("._dialog", e),
          $tip: $("._tip", e),
          $content: $("._content", e)
        }
      },
      renderList: function(e) {
        var t = 1,
        i = e.checkin_page_desc.replace(/\\n/g, "<br>");
        this.doms.$tip.html(i),
        _.each(e.check_list,
        function(i) {~~i.is_check_in ? i.cls = "passed": t && !~~e.is_check_in && (i.cls = "today", t = 0)
        }),
        this.doms.$content.html(this.template.list(e)),
        this.getDialogPos()
      },
      checkInOk: function() {
        var e = this.model.get("data"),
        t = ~~e.check_in_status;
        100 === t ? this.showToast("您今天已经签到过了") : 101 === t ? this.doms.$content.html(this.template.reward(e)) : this.showToast("签到失败")
      },
      getDialogPos: function() {
        if (this.doms) {
          var e = this.doms.$dialog,
          t = e.outerWidth(),
          i = e.outerHeight(),
          s = $(window),
          a = s.width(),
          o = s.height(),
          n = s.scrollTop();
          e && e.css({
            top: (o - i) / 2 + n,
            left: (a - t) / 2
          })
        }
      },
      clickClose: function() {
        document.styleSheets[0].insertRule && this.datas.dom ? (this.datas.flag && this.setAnimate(), this.doms.$dialog.addClass("missingAni"), setTimeout(function() {
          s.event.trigger("checkIn.dialogClose")
        },
        900)) : s.event.trigger("checkIn.dialogClose")
      },
      clickCheckIn: function() {
        if (!$.cookie("P00001")) return s.event.trigger("checkIn.dialogClose"),
        void s.event.trigger("loginDialog.show");
        this.datas.disabled || (this.datas.disabled = 1, this.model.getData())
      },
      showToast: function(e) {
        a({
          selector: $("._checkIn", this.$el),
          msg: e,
          offsetTop: 20
        })
      },
      setAnimate: function() {
        var e = $(this.datas.dom),
        t = e.offset().top,
        i = e.offset().left,
        s = this.doms.$dialog,
        a = s.offset().top,
        o = s.offset().left,
        n = s.outerWidth(),
        l = "@keyframes missingAni{0%{transform:scale(1);opacity:1;top:" + a + "px;left:" + o + "px;}100%{transform:scale(0);opacity:0;top:" + (t - s.outerHeight() / 2) + "px;left:" + (i - n / 2) + "px;}}",
        r = document.createElement("style");
        r.type = "text/css",
        r.innerHTML = "",
        document.getElementsByTagName("head")[0].appendChild(r),
        this.stylesheet = document.styleSheets[document.styleSheets.length - 1];
        try {
          this.stylesheet.insertRule(l, 0)
        } catch(e) {
          console.log(e)
        }
        this.datas.flag = 0
      }
    })
  },
  EnQT: function(e, t, i) {
    new(i("M+uM"))({
      el: ".room-board"
    }),
    i("hSGw"),
    $(".room-chat").attr("data-pb-block", "17073105"),
    new(i("1LrB"))({
      el: ".room-chat"
    }),
    new(i("phvK")),
    i("pAwh"),
    new(i("a9nJ")),
    new(i("CTKC"))({
      el: ".chat-act"
    })
  },
  F6QD: function(e, t, i) {
    var s;
    void 0 === (s = function() {
      return Backbone.Model.extend({
        urlRoot: "/tag/getAnchorTags ",
        initialize: function() {},
        subSave: function(e) {
          var t = this;
          this.save({},
          {
            type: "post",
            dataType: "json",
            data: e,
            success: function(e, i) {
              200 === i.code ? t.trigger("success", i) : t.trigger("error")
            }
          })
        }
      })
    }.call(t, i, t, e)) || (e.exports = s)
  },
  FEl0: function(e, t, i) {
    "use strict";
    var s = i("sk80"),
    a = s.roomConfig,
    o = i("Vu/R"),
    n = i("qx+v");
    e.exports = Backbone.View.extend({
      model: new n,
      template: {
        medal: _.template(o.medal),
        medalItem: _.template(o.medalItem),
        medalTipWrap: _.template(o.medalTipWrap),
        medalTip: _.template(o.medalTip)
      },
      csses: {
        root: "body",
        anchorMedalPrev: "._anchorMedalPrev",
        anchorMedalNext: "._anchorMedalNext",
        anchorMedalList: "._anchorMedalList",
        anchorMedalCtrl: "._anchorMedalCtrl",
        anchorMedalTip: "._anchorMedalTip"
      },
      datas: {
        medals: [],
        userId: a.get("onlineAnchorInfo").user_id,
        roomOwnerId: a.get("roomOwner"),
        page: 1,
        pageTotal: 1,
        pageSingleNum: 5,
        pageOffsetNum: 0,
        tipOffsetTop: 15
      },
      events: {
        "hover ._anchorMedalList li": "showOrHideAnchorMedalTip",
        "click ._anchorMedalPrev:not(.disabled)": "clickPrevPage",
        "click ._anchorMedalNext:not(.disabled)": "clickNextPage"
      },
      setDoms: function() {
        var e = this,
        t = e.csses;
        e.doms = {
          $body: $(t.root),
          $anchorMedalPrev: $(t.anchorMedalPrev, e.$el),
          $anchorMedalNext: $(t.anchorMedalNext, e.$el),
          $anchorMedalList: $(t.anchorMedalList, e.$el),
          $anchorMedalCtrl: $(t.anchorMedalCtrl, e.$el)
        }
      },
      initialize: function() {
        var e = this;
        e.$el.append(e.template.medal()),
        e.setDoms(),
        e.listenEvent(),
        e.getAnchorMedal(),
        e.doms.$body.append(e.template.medalTipWrap),
        e.doms.$anchorMedalTip = $(e.csses.anchorMedalTip)
      },
      listenEvent: function() {
        var e = this;
        e.model.on("ok",
        function(t) {
          e.showAnchorMedal(t)
        }),
        e.model.on("fail",
        function(t) {
          e.doms.$anchorMedalList.empty(),
          e.doms.$anchorMedalCtrl.hide(),
          e.dialogError(t)
        }),
        s.event.on(["socket.LIVE_START", "socket.LIVE_STOP", "socket.MIC_PULL_IN"],
        function(t) {
          t.data.op_info.mic_list && t.data.op_info.mic_list.length ? e.datas.userId = t.data.op_info.mic_list[0] : e.datas.userId = e.datas.roomOwnerId,
          e.getAnchorMedal()
        })
      },
      getAnchorMedal: function() {
        this.model.set({
          user_id: this.datas.userId,
          page: 1,
          page_size: 50
        }).getData()
      },
      showAnchorMedal: function(e) {
        var t = this,
        i = t.doms.$anchorMedalList,
        s = t.doms.$anchorMedalPrev,
        a = t.doms.$anchorMedalNext;
        t.datas.medals = e && e.items.length && e.items,
        t.datas.pageTotal = Math.ceil(t.datas.medals.length / t.datas.pageSingleNum),
        t.datas.pageOffsetNum = t.datas.medals.length % t.datas.pageSingleNum,
        1 === t.datas.pageTotal && (s.hide(), a.hide()),
        i.html(t.template.medalItem({
          items: t.datas.medals
        }))
      },
      moveAnchorMedal: function(e) {
        var t = this,
        i = t.doms.$anchorMedalCtrl,
        s = t.doms.$anchorMedalList,
        a = i.outerWidth(),
        o = parseInt(s.css("marginLeft")),
        n = e ? s.children().outerWidth(!0) * t.datas.medals.length - a + o: -o,
        l = a;
        l = n <= l ? e ? o - n: o + n: e ? o - a: o + a,
        s.css({
          marginLeft: l,
          "-webkit-transition": "all .3s ease",
          "-moz-transition": "all .3s ease",
          "-ms-transition": "all .3s ease",
          "-o-transition": "all .3s ease",
          transition: "all .3s ease"
        }),
        t.datas.pageDisable = 0,
        t.changePrevAndNext()
      },
      changePrevAndNext: function() {
        var e = this,
        t = e.doms.$anchorMedalPrev,
        i = e.doms.$anchorMedalNext;
        e.datas.page >= e.datas.pageTotal ? (t.removeClass("disabled"), i.addClass("disabled")) : (e.datas.page <= 1 ? t.addClass("disabled") : t.removeClass("disabled"), i.removeClass("disabled"))
      },
      clickPrevPage: function() {
        this.datas.pageDisable || (this.datas.pageDisable = 1, this.datas.page--, this.moveAnchorMedal(0))
      },
      clickNextPage: function() {
        this.datas.pageDisable || (this.datas.pageDisable = 1, this.datas.page++, this.moveAnchorMedal(1))
      },
      showOrHideAnchorMedalTip: function(e) {
        var t = $(e.currentTarget),
        i = ~~t.data("medal-id"),
        s = this.datas.medals,
        a = null,
        o = this.doms.$anchorMedalTip;
        "mouseenter" === e.type ? ($.each(s,
        function(e) {
          if (s[e].medal_id === i) return a = s[e],
          !1
        }), o.html(this.template.medalTip(a)).css({
          top: t.offset().top + t.outerHeight() + this.datas.tipOffsetTop,
          left: t.offset().left + t.outerWidth() / 2 - o.outerWidth() / 2
        }).show()) : o.empty().hide()
      },
      dialogError: function(e) {}
    })
  },
  "FM+S": function(e, t) {
    e.exports = Backbone.Model.extend({
      urlRoot: "/api/categoryinfo/categoryList",
      initialize: function() {},
      subSave: function(e) {
        var t = this;
        this.ajaxObj && this.ajaxObj.abort();
        var i = {
          type: "post",
          data: e || {},
          cache: !1,
          success: function(e, i) {
            i && "200" == i.code && i.data && t.trigger("success", i.data)
          },
          error: function(e, i) {
            t.trigger("error", i)
          }
        };
        this.ajaxObj = this.save(null, i)
      }
    })
  },
  FPF6: function(e, t, i) {
    var s = i("sk80"),
    a = s.tools.base,
    o = s.tools.noLoginUUID,
    n = s.tools.mirror,
    l = i("hZWJ"),
    r = i("LiN8");
    s.userModel || (s.userModel = r),
    l.on("userCheckOk",
    function(e) {
      "A00000" === e.code ? r.trigger("getUserInfo", $.cookie("P00001")) : s.event.trigger("logout")
    }),
    a.on("iShowLogout",
    function() {
      o.trigger("create")
    }),
    a.on("iShowLoginSuccess",
    function(e) {
      var t = e.data.is_new ? e.data.is_new: 0 | $.cookie("xiu_new_user");
      $.cookie("xiu_new_user", null, {
        expires: -1,
        path: "/",
        domain: ".pps.tv"
      }),
      n({
        a: 7,
        u: "",
        pu: e.data.basic.user_id,
        nu: t,
        atime: (new Date).getTime()
      })
    }),
    s.event.on("checkLogin",
    function() {
      $.cookie("P00001") && l.subSave($.cookie("P00001"))
    }),
    s.event.trigger("checkLogin")
  },
  FcgP: function(e, t, i) {
    "use strict";
    e.exports = Backbone.Model.extend({
      urlRoot: "/api/fans/getFansLevel",
      getData: function(e) {
        var t = this;
        this.save({},
        {
          data: e || {},
          success: function(e, i) {
            200 === i.code && t.trigger("ok")
          }
        })
      }
    })
  },
  G2wK: function(e, t) {
    e.exports = '<form action="//account.iqiyi.com/recharge/pay.action" method="post" data-pb-block="15041045"><input type="hidden" name="partner" id="partner" value="<%=recharge.partner%>" autocomplete="off"><input type="hidden" name="payType" id="payType" value="<%=payType%>" autocomplete="off"><input type="hidden" name="platform" id="platform" value="<%=recharge.platform%>" autocomplete="off"><input type="hidden" name="amount" id="amount" value="0" autocomplete="off"><input type="hidden" name="order_key" id="order_key" value="<%=recharge.order_key%>" autocomplete="off"><input type="hidden" name="ot" id="ot" value="<%=recharge.ot%>" autocomplete="off"><input type="hidden" name="returnUrl" id="returnUrl" value="<%=recharge.returnUrl%>" autocomplete="off"><h6>充值金额：</h6><ul class="quick-sales" click-type="payAmount"><% _.each(qds, function(i){ %><li class="qs-item block <% if(i.checked){ %> selected <% } %>" data-pb-rseat="1"><em class="sales-num"><%= i.money %></em>元</li><% }) %><li class="qs-item <% if(more_money){ %> selected <% } %>"><input type="text" placeholder="其它金额" maxlength="7" class="else-sum-input" <% if(more_money){ %> value="<%=more_money%>" <% } %> data-pb-rseat="2" /><span class="tips-error"></span></li></ul><h6>充值渠道：</h6><ul class="quick-sales" click-type="payType"><% _.each(channels, function(i){ %><li class="qs-item <% if(i.checked){ %> selected <% } %>" data-pay-type="<%=i.payType%>" data-pb-rseat="3"><span class="icon-payway <%= channel_css[i.payType]%>"></span></li><% }) %></ul><a href="/recharge/recharge" target="_blank" class="more-payway" data-pb-rseat="4">更多渠道 &gt;</a><div class="treaty-agree"><input type="checkbox" id="protocol-ch" checked><label>同意<a href="//account.iqiyi.com/recharge/protocol.action" target="_blank" class="treaty-agree-link">《爱奇艺虚拟社区币服务协议》</a></label></div></form>'
  },
  G8Yg: function(e, t) {
    e.exports = {
      controlBehavior: '<li class="msg"><div class="row"><%if(!isLive){%><%if(toUserId){%><a class="name" href="javascript:void(0);" node-type="userHoverTip"  data-user_id="<%=toUserId%>" data-nick_name="<%-toNickName%>"><%-toNickName%></a><%if(!noPassive){%><span class="nr">被</span><%}%><%}%><%if(fromUserId && !noPassive){%><a class="name" href="javascript:void(0);" node-type="userHoverTip"  data-user_id="<%=fromUserId%>" data-nick_name="<%-fromNickName%>"><%-fromNickName%></a><%}%><%}%><span class="<%=isLive?"start-end":"sys"%>"><%-behavior%></span></div></li>',
      connectMic: '<li class="msg"><div class="row"><span class="nr"><%="主播"+(start?"开始":"结束")+" 和"%></span><a class="name" href="javascript:void(0);" node-type="userHoverTip"  data-user_id="<%=user_id%>" data-nick_name="<%-nick_name%>"><%-nick_name%></a><span class="nr"><%=start?"连麦，快来一起互动吧！":"的连麦，快来成为下一个连麦对象"%></span></div></li>'
    }
  },
  GSRz: function(e, t, i) {
    var s = i("sk80"),
    a = s.roomConfig,
    o = s.event,
    n = s.ui.userIcon,
    l = i("SPA7"),
    r = i("2sKr"),
    c = i("hRo8");
    e.exports = Backbone.View.extend({
      model: new r,
      template: {
        item: _.template(c.item)
      },
      initialize: function() {
        this.model.set("live_id", a.get("liveId")),
        this.roomMessageList = new l({
          max: 100
        }),
        this.firstRender = !0,
        this.listenEvents()
      },
      render: function() {
        this.firstRender ? (this.roomMessageList.setElement(this.el).render(), a.get("liveId") ? this.model.getData() : this.trigger("render", {
          list: []
        }), this.firstRender = !1) : (this.roomMessageList.setElement(this.el), this.roomMessageList.render())
      },
      listenEvents: function() {
        var e = this;
        this.model.on("success",
        function(t, i) {
          if (200 === i.code) {
            var s = [];
            _.each(i.data,
            function(t) {
              t.fromNickName = t.userInfo.userName,
              t.fromUserId = t.userInfo.userId,
              t.userInfo.badge_level = t.userInfo.guizeLeave,
              t.userInfo.guard_level = t.userInfo.shouhuLeave,
              t.fromIconHtml = n.giftMessageFrom(t.userInfo),
              t.toNickName = t.toUserInfo.userName,
              t.toUserId = t.toUserInfo.userId,
              t.isCurrentAnchor = (0 < a.get("liveId") ? a.get("onlineAnchorInfo").user_id: a.get("roomOwner")) == t.toUserId,
              t.toUserInfo.badge_level = t.toUserInfo.guizeLeave,
              t.toUserInfo.guard_level = t.toUserInfo.shouhuLeave,
              t.toIconHtml = n.giftMessageTo(t.toUserInfo),
              t.giftImg = t.giftUrl_js,
              t.giftName = t.giftName,
              t.giftCount = t.giftCount,
              s.push(e.template.item(t))
            }),
            e.roomMessageList.render(s),
            e.trigger("render", {
              list: s
            })
          }
        }),
        this.model.on("change:visible",
        function(t, i) {
          e.roomMessageList.willRender(i),
          i && o.trigger("roomMessageGift.render")
        }),
        o.on("roomMessageGift.append",
        function(t) {
          e.roomMessageList.trigger("appendItem", t, e.model.get("visible")),
          e.trigger("update", Math.min(e.roomMessageList.wholeList.length + 1, e.roomMessageList.props.max))
        }),
        o.on("roomMessageControl.clearMessage",
        function() {
          e.model.get("visible") && e.roomMessageList.empty()
        })
      },
      setVisible: function(e) {
        this.model.set("visible", e)
      },
      updateScroll: function() {
        this.roomMessageList.updateScroll()
      }
    })
  },
  GsvH: function(e, t, i) {
    var s = i("cxV9");
    e.exports = Backbone.View.extend({
      initialize: function() {
        var e = this;
        this.model = new s,
        this._openFunc = _.debounce(function() {
          e.model.subSave()
        },
        300),
        this.model.on("change:inputData",
        function(t, i) {
          this.set("product_id", i.packInfo.product_id),
          e.render()
        }),
        this.model.on("success",
        function(t) {
          200 === t.code && e.trigger("packGoodsUseSuccess")
        })
      },
      events: {
        "click .gs-tip .gift-crl-nav:not(.disabled)": "runList",
        'click [data-js-dom="openPack"]': "openPack"
      },
      render: function() {
        this.$el.append(this.template(this.model.get("inputData")))
      },
      runList: function(e) {
        e.preventDefault();
        var t = $(e.currentTarget);
        this.move(!t.hasClass("gift-crl-nav-left"))
      },
      move: function(e) {
        var t = this.$el.find('[data-js-dom="packList"]'),
        i = 4 * (t.children("li").width() + parseInt(t.children("li").css("marginLeft"), 10) + parseInt(t.children("li").css("marginRight"), 10)),
        s = parseInt(t.css("left"), 10) + (e ? -1 : 1) * i;
        s = e ? Math.max(0 - (t.width() - i), s) : Math.min(0, s),
        t.is(":animated") || t.animate({
          left: s
        },
        200),
        this.$el.find(".gift-crl-nav").each(function() {
          $(this).removeClass("disabled")
        }),
        Math.abs(s) >= Math.abs(t.width() - i) && this.$el.find(".gift-crl-nav-right").addClass("disabled"),
        0 === s && this.$el.find(".gift-crl-nav-left").addClass("disabled")
      },
      openPack: function(e) {
        e.preventDefault(),
        this._openFunc()
      }
    })
  },
  GwVu: function(e, t, i) {
    var s;
    void 0 === (s = function() {
      return new(Backbone.Model.extend({
        urlRoot: "/userinfo/getUserMICUserRelative",
        initialize: function() {
          var e, t = this;
          this.on("save",
          function(i) {
            e && e.abort(),
            e = t.subSave(i)
          })
        },
        subSave: function(e) {
          var t = this,
          i = {
            type: "post",
            data: {
              room_id: e.data.room_id
            },
            cache: !1,
            success: function(e, i) {
              t.trigger("success", e, i)
            },
            error: function(e, i) {
              t.trigger("error", e, i)
            }
          };
          return t.save(null, i)
        },
        getTime: function() {
          var e = new Date;
          return e.getHours() + ":" + (e.getMinutes() < 10 ? "0" + e.getMinutes() : e.getMinutes())
        }
      }))
    }.apply(t, [])) || (e.exports = s)
  },
  H28f: function(e, t, i) {
    var s, a;
    s = [i("jvBd"), i("9/Be")],
    void 0 === (a = function(e, t) {
      var s = i("sk80"),
      a = (s.tools.base, s.tools.inputTool, s.roomConfig);
      return s.ui.Dialog,
      Backbone.View.extend({
        template: _.template('<div class="tab-content open-guard tab-cur"><div class="figure-panel"><div class="figure"><p class="host-name em ">守护：<span class="_anchorName"><%=_.escape(anchorName)%></span></p><img width="70" height="70" src="<%=anchorPic%>"><p class="name _guardLevelName"><%=levelName%></p><p class="em-o _restTime"><%=restTime%></p></div><div class="figure-170"><div class="list-group"><span class="label">守护时间：</span><div class="desc  _payMonth"></div></div><div class="list-group _activityBox"><span class="label">活&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;动：</span><div class="desc"><%$.each(activity, function(i, v) {%><p class="em-o"><%=v.description%></p><%});%></div></div><div class="list-group"><span class="label">价&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;格：</span><div class="desc"><span class="del-text grey _oldPrice"><em class="price _oPrice"></em>奇豆</span><span class="split  _oldPrice">/</span><span class="sales"><em class="price em _nowPrice"></em>奇豆</span><span class="t-alert"></span></div></div><div class="dialog-act"><a class="btn btn-sye  _buyGuardOk" href="javascript:void(0);"><%if (guardLevel>0) {%>立即续费<%} else {%>立即开通<%}%></a></div></div></div><div class="guard-detail"><div class="slider-wrap _guardDetailInfo"></div><a class="prev-btn" href="javascript:void(0)"><span class="ico ico-prev-syc"></span></a><a class="next-btn" href="javascript:void(0)"><span class="ico ico-next-syc"></span></a></div></div>'),
        templateDetail: _.template('<ul class="clearfix"><li><span class="guard-name"><%=title%><span class="arrow"></span></span><div class="col-1 figure-panel"><p class="p-name">身份特权</p><div class="figure"><div class="perm-id"></div></div><div class="figure-60"><p><span class="ico ico-perm"></span>身份标识</p><p><span class="ico ico-perm"></span>守护专席</p><p><span class="ico ico-perm"></span>排名优先</p></div></div><div class="col-2 figure-panel"><p class="p-name">守护特权</p><div class="figure"><div class="perm-guard"></div></div><div class="figure-60"><p><span class="ico ico-perm"></span>守护通道</p><p><span class="ico ico-perm"></span><%=inEffect%>入场动画</p><p class="<%= setAntiShout ? "" : "no-perm" %>"><span class="ico  ico-perm"></span>禁止他人喊话<%if(setAntiShout){%>（<em class="em-l"><%=setAntiShout%></em>以下）<% }%></p></div></div><div class="col-1 figure-panel"><p class="p-name">聊天特权</p><div class="figure"><div class="perm-chat"></div></div><div class="figure-60"><p><span class="ico ico-perm"></span>免费喊话</p><p><span class="ico ico-perm"></span>喊话特效<em class="<%=shoutColor[1]%>"><%=shoutColor[0]%></em></p><p><span class="ico ico-perm"></span>无数字限制</p></div></div><div class="col-2 figure-panel"><p class="p-name">防护特权</p><div class="figure"><div class="perm-safe"></div></div><div class="figure-60"><p><span class="ico ico-perm"></span>拒绝上麦</p><p><span class="ico ico-perm"></span>防踢（<em class="em-l">房主</em>以下不可踢）</p><p><span class="ico ico-perm"></span>防禁文本（<em class="em-l">房主</em>以下不可禁）</p></div></div></li></ul>'),
        templateOkMessage: _.template('<div class="content"><p>您已获得守护<%=anchorName%>身份！</p><p><span class="red">使用时间<%=month%>个月</p><%=rebateHtml%></div>'),
        templateMonth: _.template('<span class="radio-sya <%= month == 1 ? "radio-sya-checked" : ""%> " data-value="1"></span><label>1个月</label><span class="radio-sya <%= month == 2 ? "radio-sya-checked" : ""%> ml15" data-value="2"></span><label>2个月</label><span class="radio-sya <%= month == 3 ? "radio-sya-checked" : ""%> ml15" data-value="3"></span><label>3个月</label><span class="radio-sya <%= month == 6 ? "radio-sya-checked" : ""%> ml15" data-value="6"></span><label>6个月</label><%if(month!=0) {%><p class="em-o">将成为<span class="_guardTit"><%=name%></span><i class="ico-lv sh-lv lv<%=level%>"></i></p><%}%>'),
        datas: {
          levelMonth: {
            1 : 1,
            2 : 2,
            3 : 3
          },
          levelName: {
            1 : "青铜守护",
            2 : "白银守护",
            3 : "黄金守护"
          },
          maxLevel: "3",
          nowLevel: 0
        },
        events: {},
        csses: {
          monthList: "._payMonth",
          oldPrice: "._oldPrice",
          nowPrice: "._nowPrice",
          price: "._oPrice",
          month: ".radio-sya",
          anchorName: "._anchorName",
          buyTip: ".t-alert",
          restTime: "._restTime",
          guardLevelName: "._guardLevelName",
          activityBox: "._activityBox",
          activityList: "._activityList",
          guardDetail: "._guardDetailInfo",
          buyBtn: "._buyGuardOk"
        },
        doms: {},
        setDoms: function() {
          var e = this.$el,
          t = this.csses;
          this.doms = {
            $monthList: $(t.monthList, e),
            $nowPrice: $(t.nowPrice, e),
            $oldPrice: $(t.oldPrice, e),
            $price: $(t.price, e),
            $anchorName: $(t.anchorName, e),
            $buyTip: $(t.buyTip, e),
            $restTime: $(t.restTime, e),
            $guardLevelName: $(t.guardLevelName, e),
            $activityList: $(t.activityList, e),
            $activityBox: $(t.activityBox, e),
            $guardDetail: $(t.guardDetail, e),
            $buyBtn: $(t.buyBtn, e)
          }
        },
        initialize: function(i) {
          var s, a = this;
          this.$el = $(this.el),
          this.model = new t({
            guard_who: i.guardInfo,
            anchorId: i.guardInfo.anchor_id,
            anchorName: i.guardInfo.name,
            anchorPic: i.guardInfo.pic
          }),
          s = new e,
          this.buyModel = s,
          a.guard_who = i.guardInfo,
          a.model.guardBox(function() {
            a.render(i)
          }),
          a.callback = i.callback,
          s.clear({
            silent: !0
          }),
          s.set(this.getRoomInfo())
        },
        render: function(e) {
          var t, i, s, a = $("._buyContainer").html(""),
          o = {},
          n = e.month,
          l = this.model.toJSON(),
          r = l.guard_info.activity;
          this.model.get("guard_info") && (this.setDatas(), t = (t = l.user_guard_info.time_length) ? this.timeFormat(t) : "", s = this.datas.levelName[this.datas.nowLevel], o = {
            guardLevel: l.user_guard_info.guard_level || 0,
            anchorName: l.anchorName,
            anchorId: l.anchorId,
            levelName: s,
            restTime: t,
            productName: l.guard_info.name,
            activity: r,
            anchorPic: l.anchorPic
          },
          this.el = $(this.template(o)).appendTo(a), this.$el = $(this.el), this.setDoms(), this.buyModel.set({
            anchor_id: e.guardInfo && e.guardInfo.anchor_id,
            product_id: l.guard_info.product_id,
            price: l.guard_info.price,
            money_type: l.guard_info.money_type
          }), this.bindEvents(), this.buyType = 0 < o.guard_level ? "续费": "新增", this.trigger("loaded"), i = this.getLevel(n), this.selectMonth(n), this.selectLevel(i.level), 0 < r.length ? this.doms.$activityBox.show() : this.doms.$activityBox.hide())
        },
        getCheckMonth: function(e) {
          var t = this.datas;
          return e - (t.levelMonth[t.nowLevel.toString()] || 0)
        },
        setDatas: function() {
          this.datas.rights = {
            1 : {
              title: "青铜守护",
              outRoom: "管理员",
              shoutColor: ["蓝色", "em-bg-general"],
              antiBan: "房主",
              antiShout: 0,
              setAntiShout: 0,
              inEffect: "青铜羽翼"
            },
            2 : {
              title: "白银守护",
              outRoom: "管理员",
              shoutColor: ["紫色", "em-bg-minor"],
              antiBan: "房主",
              antiShout: "子爵",
              setAntiShout: "侯爵",
              inEffect: "白银羽翼"
            },
            3 : {
              title: "黄金守护",
              outRoom: "管理员",
              shoutColor: ["橙色", "em-bg-primary"],
              antiBan: "房主",
              antiShout: "伯爵",
              setAntiShout: "公爵",
              inEffect: "黄金羽翼"
            }
          },
          this.datas.maxLevel = "3",
          this.datas.nowLevel = this.model.get("user_guard_info").guard_level || "0"
        },
        selectLevel: function(e) {
          var t = this.datas.rights[e.toString()],
          i = this.templateDetail(t);
          this.doms.$guardDetail.html(i).data("level", e)
        },
        clickLevelPage: function(e) {
          var t, i, s = this.datas.maxLevel,
          a = parseInt(this.doms.$guardDetail.data("level")),
          o = this.datas.nowLevel;
          "prev" === e ? (t = a - 1) < 1 && (t = s) : s < (t = a + 1) && (t = 1),
          i = o == s && t == s ? 1 : t <= o ? 0 : t - o,
          this.selectLevel(t),
          this.selectMonth(i),
          this.doms.$buyTip.html("")
        },
        bindEvents: function() {
          var e = this,
          t = this.$el;
          t.on("loginclick", "._buyGuardOk:not(.btn-sye-off)",
          function(t) {
            t.preventDefault(),
            e.buyGuard()
          }),
          t.on("click", ".radio-sya",
          function(t) {
            t.preventDefault(),
            e.clickMonth($(this))
          }),
          t.on("click", ".prev-btn",
          function(t) {
            t.preventDefault(),
            e.clickLevelPage("prev")
          }),
          t.on("click", ".next-btn",
          function(t) {
            t.preventDefault(),
            e.clickLevelPage("next")
          })
        },
        clickMonth: function(e) {
          var t = e.data("value"),
          i = this.getLevel(t);
          this.selectMonth(t),
          this.selectLevel(i.level),
          this.doms.$buyTip.html("")
        },
        selectMonth: function(e) {
          var t, i;
          "0" == (e = e.toString()) ? (i = {
            month: 0,
            name: "",
            level: 0
          },
          this.doms.$buyBtn.addClass("btn-sye-off")) : (i = {
            month: e,
            name: (t = this.getLevel(e)).name,
            level: t.level
          },
          this.doms.$buyBtn.removeClass("btn-sye-off")),
          this.doms.$monthList.html(this.templateMonth(i)),
          this.getValue(e),
          this.buyModel.set({
            time_long: e
          })
        },
        getValue: function(e) {
          var t = this.model.get("guard_info"),
          i = t.price * e,
          s = t.discount_price * e;
          this.doms.$nowPrice.html(s),
          this.doms.$price.html(i),
          i == s ? this.doms.$oldPrice.hide() : this.doms.$oldPrice.show()
        },
        getRoomInfo: function() {
          var e = {
            room_id: 0,
            live_id: 0
          };
          try {
            e.room_id = a.room_id || a.get && a.get("roomId") || 0,
            e.live_id = a.live_id || a.get && a.get("liveId") || 0
          } catch(e) {}
          return e
        },
        buyGuard: function() {
          var e = this,
          t = this.buyModel;
          this.buying || (this.buying = !0, t.set(this.getRoomInfo()), t.buyGuard(function(i) {
            e.trigger("buySuccessCallBack"),
            e.showSuccess(t.toJSON()),
            $("#buyConfirm").css("background-color", "#67b434").data("isClick", "n"),
            e.buying = !1
          },
          function(t) {
            var i = t && t.msg || "订单失败";
            202 === t.code && (i = "余额不足！请<a class='em underline' href='/recharge/recharge?balance=" + (t.data.money || 0) + "' target='_blank'>立即充值</a>"),
            e.doms.$buyTip.html(i),
            $("#buyConfirm").css("background-color", "#67b434").data("isClick", "n"),
            e.buying = !1
          }))
        },
        showSuccess: function(e) {
          $("._def").trigger("click"),
          e.data.fans_info && (s.event.trigger("truelove.dialog2Open", {
            tpl: "guard",
            mode: "",
            expireTime: e.data.fans_info.expire_time,
            list: e.data.fans_info.img,
            isFirst: e.data.fans_info.is_first,
            anchorName: e.data.anchor_name,
            guardName: e.data.guard_name
          }), this.refreshAccount())
        },
        getLevel: function(e) {
          var t = this.datas.nowLevel,
          i = this.datas.maxLevel,
          s = this.datas.levelName,
          a = (parseInt(t) + parseInt(e)).toString();
          return s[a] || (a = i),
          {
            name: s[a],
            level: a
          }
        },
        refreshAccount: function() {
          s.event.trigger("getUserAccount.refreshAccount")
        },
        timeFormat: function(e) {
          var t = e / 60,
          i = t / 60,
          s = Math.floor(i / 24);
          return t = Math.floor(60 <= t ? t % 60 : t),
          "（剩余" + s + "天" + (i = Math.floor(24 <= i ? t % 24 : i)) + "小时）"
        }
      })
    }.apply(t, s)) || (e.exports = a)
  },
  "H5/F": function(e, t) {
    e.exports = Backbone.Model.extend({
      urlRoot: "/search/getRoomOnlineUserById",
      defaults: {
        show_id: null,
        room_id: ""
      },
      emList: ["抱歉，输入的内容不可为空", "请输入正确的10位数字ID", "网络异常，请稍后重试", "服务器异常，请稍后重试", "抱歉，未搜索到相关结果"],
      initialize: function() {},
      getData: function(e) {
        e = e || {};
        var t = this,
        i = {
          type: "post",
          dataType: "json",
          data: {
            show_id: this.get("show_id"),
            room_id: this.get("room_id")
          },
          cache: !1,
          success: function(e, i) {
            200 === i.code ? null === i.data ? t.trigger("fail", t.emList[4]) : t.trigger("success", i.data) : t.trigger("fail", t.emList[3])
          },
          error: function(e, i) {
            t.trigger("fail", t.emList[2])
          }
        };
        this.save(null, i)
      },
      validate: function(e, t) {
        var i = $.trim(e.show_id),
        s = this.emList;
        return "" === i ? s[0] : /^\d+$/.test(i) && 10 === i.length ? void 0 : s[1]
      }
    })
  },
  HDZc: function(e, t, i) {
    var s = i("sk80"),
    a = i("xkxx"),
    o = s.tools.qos,
    n = i("B2fO");
    window.QX = window.QX || {},
    s.JTFAPI = s.JTFAPI || _.extend({
      init: function(e) {
        console.log("key->", e),
        this.trigger(e)
      }
    },
    Backbone.Events),
    e.exports = Backbone.View.extend({
      initialize: function(e) {
        this.model = new a(e),
        this.on("createSwf", this.createDom)
      },
      createDom: function() {
        var e = this.model.toJSON(),
        t = this,
        i = "//get.adobe.com/cn/flashplayer/",
        a = n.getFlashPlayerVersion();
        $("#" + e.attr.id).length || (e.flashvars.domId = e.attr.id, a.major && 11.3 <= parseFloat(a.major + "." + a.minor) ? n.embedSWF(e.webAddress, this.el.getAttribute("id"), e.width, e.height, e.lowerVersion, e.xi, e.flashvars, e.params, e.attr,
        function(i) {
          var a = null;
          t.swfObj = i,
          t.swfObj.flashId = e.attr.id,
          s.JTFAPI.once(e.attr.id,
          function() {
            $("#" + e.attr.id).css("visibility", "visible"),
            t.trigger("flashLoadedCallback", i),
            clearTimeout(a)
          }),
          a = setTimeout(function() {
            o.push(3, {
              ct: {
                des: "5s not call js init function ",
                flash_url: e.webAddress
              }
            })
          },
          5e3)
        }) : ( - 1 < navigator.userAgent.toLowerCase().indexOf("android") && (i = "//gdown.baidu.com/data/wisegame/fa36ee0f18487fd6/AdobeFlashPlayer111_111115081.apk"), $(".need-flash").length || s.env.isPcnClient || ($(".show-player").length && $(".show-player") || $(".video-living").length && $(".video-living") || $("#_player")).html('<div class="need-flash new-flash-tip"><p>你尚未下载flash播放器，点击<a href="' + i + '">此处</a>下载</p></div>'), o.push(10, {
          curl: e.webAddress,
          ct: {
            des: "flash version is under 11.3",
            completeFlashVersion: a.major ? parseFloat(a.major + "." + a.minor) : 0,
            clientVersion: window.js_client_version().version
          }
        })))
      },
      removeSwf: function() {
        this.swfObj.flashId && n.removeSWF(this.swfObj.flashId)
      }
    })
  },
  HIVA: function(e, t, i) {
    var s;
    void 0 === (s = function() {
      var e = i("sk80").ui.Dialog;
      return Backbone.View.extend({
        template: _.template('<p>您已选择立即<%=type === 1 ? "续费" : "开通"%><em class="goods em-o"><%=name%><%=month%>个月</em></p><p>价格：<em class="em price"><%=price%></em>奇豆</p><%if(type ===1) {%><p>续费后<em class="em-o"><%=endTime%></em></p><%} else{%><p>开通后将从<em class="em-o"><%=nowName%></em><%=type === 2 ? "升" : "降"%>级为<em class="em-o"><%=name%></em></p><%}%>'),
        initialize: function() {},
        render: function(t, i, s) {
          var a, o = this;
          t.endTime && (t.endTime = this.timeFormat(t.endTime)),
          a = $(this.template(t)),
          this.el = new e({
            clsName: "open-confirm",
            title: "提示",
            content: a,
            btn: [{
              clsName: 3 !== t.type ? "btn-sye": "btn-syj",
              type: "ok",
              text: "确定"
            },
            {
              clsName: 3 === t.type ? "btn-sye": "btn-syj",
              type: "def",
              text: "取消"
            }]
          }),
          this.$el = $(this.el),
          this.el.on("ok",
          function() {
            i && i(),
            o.trigger("ok")
          }),
          this.el.on("cancel",
          function() {
            s && s(),
            o.trigger("cancel")
          })
        },
        timeFormat: function(e) {
          var t = e / 60,
          i = t / 60,
          s = Math.floor(i / 24);
          return i = Math.ceil(24 <= i ? i % 24 : i),
          t = Math.ceil(60 <= t ? t % 60 : t),
          "剩余" + s + "天" + i + "小时"
        },
        show: function() {
          this.$el.show()
        }
      })
    }.call(t, i, t, e)) || (e.exports = s)
  },
  HPuU: function(e, t, i) {
    e.exports = {
      1 : "奇豆",
      2 : "钻石",
      3 : "钻石/奇豆"
    }
  },
  HWW9: function(e, t, i) {
    var s, a, o = i("sk80"),
    n = o.ui.Dialog,
    l = o.tools.pingback,
    r = o.ui.SubConfirm;
    s = [i("xIdY"), i("yMiT"), i("G2wK"), i("+AOU")],
    void 0 === (a = function(e, t, i, s) {
      var a = Backbone.View.extend({
        el: ".quick-recharge-layer",
        model: new t,
        templateTip: _.template('<i class="ico ico-warning"></i><%=msg%>'),
        templateAfterRecharge: '<h6 class="h">请您在新打开的页面完成支付</h6><ul class="sale-finish-list"><li><i class="ico ico-pointer-syb"></i>支付完成前请不要关闭此页面</li><li><i class="ico ico-pointer-syb"></i>支付完成后，请根据结果选择</li><li><i class="ico ico-pointer-syb"></i>支付失败时，您可拨打400-923-7171，客服专线竭诚为您服务</li></ul>',
        templateRechargeOk: "<h6>您已充值成功，谢谢！</h6>",
        templatePay: _.template(i),
        datas: {},
        csses: {
          otherTip: ".qs-item .tips-error",
          iptPartner: "[name='partner']",
          iptAmount: "[name='amount']",
          iptPayType: "[name='payType']",
          iptReturnUrl: "[name='returnUrl']",
          iptPlatform: "[name='platform']",
          iptOt: "[name='ot']",
          iptOrderKey: "[name='order_key']",
          listPayType: "[click-type='payType']",
          otherAmount: "input.else-sum-input",
          btnAgree: "#protocol-ch",
          btnRecharge: "._recharge",
          pageRecharge: "._rechargeGift"
        },
        doms: {},
        events: {
          "focus .else-sum-input": "focusElseAmount",
          "keyup .else-sum-input": "changeOtherAmount",
          "click [click-type='payAmount'] .block": "clickAmount",
          "click #protocol-ch": "clickAgree",
          "click [click-type='payType']  .qs-item": "clickPayMethod"
        },
        setDoms: function() {
          var e = this.csses,
          t = this.$el;
          this.doms = {
            $otherTip: $(e.otherTip, t),
            $iptAmount: $(e.iptAmount, t),
            $iptPartner: $(e.iptPartner, t),
            $iptPayType: $(e.iptPayType, t),
            $iptReturnUrl: $(e.iptReturnUrl, t),
            $iptPlatform: $(e.iptPlatform, t),
            $iptOt: $(e.iptOt, t),
            $iptOrderKey: $(e.iptOrderKey, t),
            $listPayType: $(e.listPayType, t),
            $otherAmount: $(e.otherAmount, t),
            $btnRecharge: $(e.btnRecharge, t),
            $btnAgree: $(e.btnAgree, t),
            $btnPageRecharge: $(e.pageRecharge)
          }
        },
        initialize: function() {},
        init: function(e) {
          e = e || {},
          this.loginFunc() && this.getRechargeData(e)
        },
        render: function(e) {
          var t;
          t = this.templatePay({
            qds: e.qds,
            recharge: e.recharge,
            payType: e.latestPayType,
            channels: e.channels[1],
            channel_css: e.channel_css,
            more_money: e.more_money
          }),
          this.payDialog = new n({
            title: "快速充值",
            clsName: "quick-recharge-layer",
            content: t,
            btn: [{
              type: "bOk",
              clsName: "btn btn-sye _recharge",
              text: "立即充值"
            }]
          }),
          this.setElement(".quick-recharge-layer"),
          this.setDoms(),
          this.setDefaultValues(),
          this.clickButtons(),
          this.bindEvts(),
          l({
            t: 21,
            jsuid: $.cookie("QC006") || "",
            u: $.cookie("QC005") || "",
            pu: o.loginInfo.userId,
            block: "602291_1",
            bstp: "QiShow"
          }),
          this.trigger("render")
        },
        getRechargeData: function(e) {
          var t = this;
          e.pcnative && (this.model.urlRoot += "?src=1"),
          this.model.getData({
            bean_need: e.bean ? e.bean: 0
          },
          function(e) {
            t.model.set({
              qds: e.data.qds,
              channels: e.data.channels,
              channel_css: e.data.channel_css,
              payType: e.data.latestPayType,
              more_money: e.data.more_money,
              recharge: e.data.recharge
            }),
            t.render(e.data)
          },
          function(e) {})
        },
        clickAgree: function() {
          this.checkAble()
        },
        checkAble: function() {
          var e = this.doms,
          t = parseInt(e.$iptAmount.val()) / 100,
          i = e.$btnAgree.prop("checked"),
          s = this.doms.$btnRecharge,
          a = !1;
          return 1 <= t && !/\D/.test(t) && i ? (s.removeClass("btn-disabled"), s.addClass("_bOk"), a = !0) : (s.addClass("btn-disabled"), s.removeClass("_bOk")),
          a
        },
        getClosetMoney: function(e) {
          for (var t = this.datas.moneyArray,
          i = t.length,
          s = 0; s < i - 1; s++) if (e > 100 * t[s] && e < 100 * t[s + 1]) return t[s + 1];
          return t[i - 1]
        },
        changeRmbVal: function(e) {
          this.doms.$iptAmount.val(e ? 100 * e: 0),
          this.checkAble()
        },
        changeOtherAmount: function(e) {
          var t = this.doms.$otherAmount.val(),
          i = "";
          $(e.currentTarget).closest("li").addClass("selected").siblings().removeClass("selected"),
          /\D/.test(t) || t < 1 ? (i = "金额须为整数", this.doms.$otherTip.html(this.templateTip({
            msg: i
          })), this.changeRmbVal(0)) : (this.doms.$otherTip.html(""), this.changeRmbVal(t))
        },
        focusElseAmount: function(e) {
          if (this.loginFunc()) {
            var t = this.doms.$otherAmount.val();
            /\D/.test(t) || t < 1 || ($(e.currentTarget).closest("li").addClass("selected").siblings().removeClass("selected"), this.changeRmbVal(t))
          } else $(e.currentTarget).blur()
        },
        clickAmount: function(e) {
          var t, i = $(e.currentTarget);
          this.loginFunc() && (i.closest("li").addClass("selected").siblings("li").removeClass("selected"), t = parseInt(i.text()) || 0, this.changeRmbVal(t), this.doms.$otherTip.html(""))
        },
        clickPayMethod: function(e) {
          if (this.loginFunc()) {
            var t = $(e.currentTarget),
            i = t.closest("li");
            i.hasClass("selected") || (i.closest('[click-type="payType"]').find("li.selected").removeClass("selected"), i.addClass("selected"), $("#payType").val(t.data("payType")))
          }
        },
        clickButtons: function() {
          var t = this;
          this.loginFunc() && (this.payDialog.on("bOk",
          function(i) {
            l.byRseat("15041045", "15041045_5"),
            "WECHATV3" !== t.doms.$iptPayType.val() ? (window.open && window.open("", "pay").focus(), t.loginCover(function() {
              t.recharge(i)
            },
            function() {
              alert("接口响应超时，请刷新页面")
            })) : t.loginCover(function() {
              var i = {
                partner: t.doms.$iptPartner.val(),
                payType: t.doms.$iptPayType.val(),
                amount: t.doms.$iptAmount.val(),
                returnUrl: t.doms.$iptReturnUrl.val(),
                platform: t.doms.$iptPlatform.val(),
                ot: t.doms.$iptOt.val()
              };
              t.payDialog.remove(),
              new e(i,
              function() {
                t.updateBalance()
              })
            },
            function() {
              alert("接口响应超时，请刷新页面")
            })
          }), this.payDialog.on("cancel",
          function() {
            l.byRseat("15041045", "15041045_6"),
            t.trigger("close")
          }))
        },
        loginCover: function(e, t) {
          $.ajax({
            url: s.authLogin,
            type: "get",
            dataType: "jsonp",
            jsonp: "callback",
            data: {
              agenttype: 39,
              authcookie: $.cookie("P00001"),
              t: (new Date).getDate() * Math.random()
            },
            success: function() {
              e && e()
            },
            error: function() {
              t && t()
            }
          })
        },
        loginFunc: function() {
          var e = !0;
          return $.cookie("P00001") || (e = !1, o.event.trigger("loginDialog.show")),
          e
        },
        recharge: function(e) {
          var t, i = this;
          $(".quick-recharge-layer form").attr("target", "pay"),
          $(".quick-recharge-layer form").submit(),
          e && e(),
          (t = r({
            title: "提示",
            clsName: "quick-recharge-layer",
            content: i.templateAfterRecharge,
            btn: [{
              clsName: "btn btn-syj",
              type: "ok",
              text: "继续充值"
            },
            {
              clsName: "btn btn-sye",
              type: "def",
              text: "充值成功"
            }]
          })).on("ok",
          function() { (new a).init()
          }),
          t.on("cancel",
          function() {
            i.updateBalance(),
            i.trigger("close")
          })
        },
        updateBalance: function() {
          o.event.trigger("getUserAccount.refreshAccount")
        },
        setDefaultValues: function() {
          var e = "";
          _.each(this.model.get("channels")[1],
          function(t) {
            t.checked && (e = t.payType)
          }),
          e || (this.doms.$listPayType.find("li:first").addClass("selected"), e = this.model.get("channels")[1][0].payType),
          this.doms.$iptPayType.val(e);
          var t = 0;
          _.each(this.model.get("qds"),
          function(e) {
            e.checked && (t = e.amount)
          }),
          t || (t = 100 * this.model.get("more_money")),
          this.doms.$iptAmount.val(t)
        },
        bindEvts: function() {
          $.browser.msie && $.browser.version < 9 && ("" == this.doms.$otherAmount.val() && this.doms.$otherAmount.val("其他金额"), this.doms.$otherAmount.focus(function() {
            "其他金额" === $(this).val() && $(this).val("")
          }), this.doms.$otherAmount.blur(function() {
            $(this).val() || $(this).val("其他金额")
          }))
        }
      });
      return new a
    }.apply(t, s)) || (e.exports = a)
  },
  Hhnc: function(e, t, i) {
    var s;
    void 0 === (s = function() {
      return Backbone.Model.extend({
        urlRoot: "/tag/setAnchorTag",
        initialize: function() {},
        subSave: function(e) {
          var t = this;
          this.save({},
          {
            type: "post",
            dataType: "json",
            data: e,
            success: function(e, i) {
              200 === i.code ? t.trigger("success", i) : t.trigger("error")
            }
          })
        }
      })
    }.call(t, i, t, e)) || (e.exports = s)
  },
  IREt: function(e, t) {
    e.exports = '<%_.forEach(list, function(v,k) {%><li data-gift-num="<%=v.value%>"><%=v.label%><%if(v.effect >= 0){%> <i class="io io-te<%=v.effect+1%>"></i><%}%></li><%})%>'
  },
  IeNx: function(e, t, i) {
    "use strict";
    var s = i("sk80"),
    a = s.roomConfig,
    o = s.tools.ishow,
    n = i("JZv9"),
    l = i("N+D0"),
    r = i("JOQP");
    e.exports = Backbone.View.extend({
      model: new n,
      datas: {
        roomId: a.get("roomId")
      },
      doms: {},
      initialize: function(e) {
        this.listenEvent(),
        new l({
          el: e.el,
          anchorName: e.anchorName,
          model: this.model
        }),
        new r({
          el: e.anchorFollow,
          onlineMICInfo: this.model
        }),
        $.cookie("P00001") || this.getOnlineMICInfo()
      },
      listenEvent: function() {
        var e = this;
        s.event.on(["socket.LIVE_START", "socket.LIVE_STOP", "socket.MIC_PULL_IN", "socket.ANCHOR_LEVEL_UP"],
        function(t) {
          switch (t.data.msgType) {
          case 100002:
            t.data.op_info.mic_list && t.data.op_info.mic_list.length || e.getOnlineMICInfo();
            break;
          default:
            e.getOnlineMICInfo()
          }
        }),
        o.on("iShowLoginSuccess iShowLogout",
        function() {
          e.getOnlineMICInfo()
        })
      },
      getOnlineMICInfo: function() {
        this.model.set("room_id", this.datas.roomId),
        this.model.getData()
      }
    })
  },
  Ihns: function(e, t) {
    e.exports = Backbone.Model.extend({
      urlRoot: "/room/getGiftList",
      initialize: function() {},
      subSave: function(e) {
        var t = this;
        this.save({},
        {
          type: "post",
          dataType: "json",
          data: {
            room_id: this.get("roomId")
          },
          success: function(e, i) {
            200 === i.code ? t.trigger("success", i) : t.trigger("error")
          }
        })
      }
    })
  },
  IlMp: function(e, t, i) {
    var s;
    void 0 === (s = function() {
      return Backbone.Model.extend({
        urlRoot: "/tag/getAllTags",
        initialize: function() {},
        subSave: function() {
          var e = this;
          this.save({},
          {
            type: "get",
            dataType: "json",
            data: {},
            success: function(t, i) {
              200 === i.code ? e.trigger("success", i) : e.trigger("error")
            }
          })
        }
      })
    }.call(t, i, t, e)) || (e.exports = s)
  },
  IwNt: function(e, t, i) {
    "use strict";
    e.exports = Backbone.Model.extend({
      urlRoot: "/api/lottery/fansDraw",
      getData: function(e) {
        var t = this;
        this.save({},
        {
          data: e || {},
          success: function(e, i) {
            200 === i.code ? t.trigger("ok") : t.trigger("fail", i.msg)
          }
        })
      }
    })
  },
  J0nQ: function(e, t) {
    e.exports = Backbone.Model.extend({
      urlRoot: "/api/bags/getUserEntityList",
      initialize: function() {},
      subSave: function(e) {
        var t = this;
        this.save({},
        {
          type: "post",
          dataType: "json",
          data: {
            page_size: 63,
            page: 1
          },
          success: function(e, i) {
            200 === i.code ? t.trigger("success", i) : t.trigger("error")
          }
        })
      }
    })
  },
  JDas: function(e, t, i) {
    i("sk80"),
    window.ISHOW.liveTools = {
      liveSwfId: "",
      changeMic: function(e) {
        this.trigger("changeMic", e)
      },
      reloadPage: function() {
        location.href = location.href.split("#")[0]
      },
      refreshAnchorInfo: function() {
        this.trigger("refreshAnchorInfo")
      },
      setZIndex: function(e) {
        $("#videoPlayer").css("z-index", null != e ? e: 1)
      }
    },
    _.extend(window.ISHOW.liveTools, Backbone.Events),
    e.exports = window.ISHOW.liveTools
  },
  JOQP: function(e, t, i) {
    "use strict";
    var s = i("sk80"),
    a = s.roomConfig,
    o = s.tools.ishow,
    n = i("Awsg"),
    l = i("l7lV");
    e.exports = Backbone.View.extend({
      initialize: function(e) {
        this.model = {
          onlineMICInfo: e.onlineMICInfo,
          followAnchor: new l
        },
        this.$el.html(this.template.follow()),
        this.doms = {
          $followBtn: $("a", this.$el),
          $followNum: $("span", this.$el)
        },
        this.listenEvent()
      },
      template: {
        follow: _.template(n.follow),
        followNotice: _.template(n.followNotice)
      },
      datas: {
        userId: s.loginInfo.userId,
        followNum: a.get("onlineAnchorInfo").anchor_stat.follow_num,
        anchorId: a.get("onlineAnchorInfo").user_id,
        opType: 1,
        followDisabled: 0,
        UNFOLLOW: 1,
        FOLLOWED: 2,
        UNFOLLOW_TXT: "+ 关注",
        FOLLOWED_TXT: "已关注",
        FOLLOWED_HOVER_TXT: "取消",
        flag: ""
      },
      events: {
        "hover a:not(.disabled)": "hoverFollow",
        "loginclick a:not(.disabled)": "clickFollow"
      },
      listenEvent: function() {
        var e = this;
        e.model.onlineMICInfo.on("ok",
        function(t) {
          e.datas.anchorId = t.base_info.user_id,
          e.datas.opType = t.user_anchor_relative.is_follow ? 2 : 1,
          e.datas.followNum = t.anchor_stat.follow_num,
          e.doms.$followNum.html(t.anchor_stat.follow_num),
          e.updateByApi(e.datas.opType),
          a.set("sendGiftAnchorInfo", {
            userId: t.base_info.user_id,
            nickName: t.base_info.nick_name
          }),
          a.set("onlineAnchorInfo", {
            anchor_stat: t.anchor_stat,
            level: t.level_info,
            medal: t.medal,
            user_id: t.base_info.user_id,
            user_icon: t.base_info.user_icon,
            nick_name: t.base_info.nick_name
          })
        }),
        e.model.onlineMICInfo.on("fail",
        function() {}),
        e.model.followAnchor.on("ok",
        function() {
          e.datas.followDisabled = 0,
          e.updateByApi(e.datas.opType === e.datas.UNFOLLOW ? e.datas.FOLLOWED: e.datas.UNFOLLOW)
        }),
        e.model.followAnchor.on("fail",
        function() {
          e.datas.followDisabled = 0
        }),
        s.event.on("socket.FOLLOW_ANCHOR",
        function(t) {
          if (e.datas.anchorId === t.data.to_userInfo.user_id.toString() && (e.datas.followNum = t.data.op_info.follow_num, e.doms.$followNum.html(e.datas.followNum), "create" === t.data.op_info.type && ~~t.data.op_info.is_show)) {
            var i = t.data.op_userInfo,
            a = s.ui.userIcon.createHtml(["badge_level"], {
              badge_level: i.badge_level
            }),
            o = e.template.followNotice({
              icons: a,
              nickName: i.nick_name
            });
            s.event.trigger("roomMessageChat.append", o)
          }
        }),
        o.on("iShowLoginSuccess",
        function(t) {
          200 === t.code && (e.datas.userId = t.data.basic.user_id)
        }),
        o.on("iShowLogout",
        function() {
          e.datas.userId = 0
        }),
        s.event.on("anchorFollow.updateStatus",
        function(t) {
          e.updateByApi(t.isFollow ? e.datas.FOLLOWED: e.datas.UNFOLLOW)
        })
      },
      updateByApi: function(e) {
        var t = "",
        i = this.datas.UNFOLLOW_TXT;
        this.datas.anchorId === this.datas.userId && (t = "disabled", e = this.datas.UNFOLLOW, i = "关注"),
        e === this.datas.FOLLOWED ? this.doms.$followBtn.removeClass().addClass("followed").html(this.datas.FOLLOWED_TXT) : this.doms.$followBtn.removeClass().addClass(t).html(i),
        this.datas.opType = e,
        this.datas.anchorId !== this.datas.userId && s.event.trigger("truelove.showHideEntry", {
          status: e === this.datas.FOLLOWED ? -1 : 0,
          anchorId: this.datas.anchorId
        })
      },
      hoverFollow: function(e) {
        var t = $(e.currentTarget);
        this.datas.opType !== this.datas.UNFOLLOW && t.html("mouseenter" === e.type ? this.datas.FOLLOWED_HOVER_TXT: this.datas.FOLLOWED_TXT)
      },
      clickFollow: function() {
        this.datas.followDisabled || (this.datas.followDisabled = 1, this.model.followAnchor.set({
          anchorId: this.datas.anchorId,
          opType: this.datas.opType
        }), this.model.followAnchor.getData())
      }
    })
  },
  JY5N: function(e, t, i) {
    var s = i("raQq"),
    a = i("6RRy"),
    o = i("mHcq");
    e.exports = new o({
      model: new s,
      template: _.template(a)
    })
  },
  JZv9: function(e, t, i) {
    "use strict";
    e.exports = Backbone.Model.extend({
      urlRoot: "/api/room/getOnlineMICInfo",
      defaults: {
        room_id: ""
      },
      initialize: function() {},
      getData: function() {
        var e = this;
        e.save({},
        {
          data: {
            room_id: e.get("room_id")
          },
          success: function(t, i) {
            200 === i.code ? e.trigger("ok", i.data) : e.trigger("fail", i.msg)
          },
          error: function(t, i) {
            e.trigger("fail", i.msg)
          }
        })
      }
    })
  },
  KC53: function(e, t, i) {
    "use strict";
    var s = i("sk80"),
    a = s.roomConfig,
    o = s.tools.ishow,
    n = i("sEZy"),
    l = i("LSV7"),
    r = i("mNhG");
    e.exports = Backbone.View.extend({
      model: new l,
      template: {
        sign: _.template(n.sign),
        signMain: _.template(n.signMain)
      },
      datas: {
        anchorId: a.get("onlineAnchorInfo").user_id,
        roomOwnerId: a.get("roomOwner")
      },
      doms: {
        $body: $("body")
      },
      events: {
        "loginclick a": "clickSign"
      },
      initialize: function(e) {
        var t = this;
        t.doms.$body.append(t.template.signMain()),
        t.doms.$siteBody = $(e.siteBody),
        t.signListView = new r({
          el: "._signMain"
        }),
        t.listenEvent(),
        $.cookie("P00001") || (t.$el.find("a").data("open", 0), t.signListView.trigger("close"), t.checkSign())
      },
      listenEvent: function() {
        var e = this;
        e.model.on("ok",
        function(t) {
          e.setSignBtn({
            isSign: t,
            isAnchor: e.datas.anchorId === s.loginInfo.userId,
            isLogin: $.cookie("P00001") ? 1 : 0
          })
        }),
        e.model.on("fail",
        function(t) {
          e.dialogError(t)
        }),
        e.doms.$siteBody.on("click.anchorSign",
        function() {
          e.$el.find("a").data("open", 0),
          e.signListView.trigger("close")
        }),
        s.event.on(["socket.LIVE_START", "socket.LIVE_STOP", "socket.MIC_PULL_IN"],
        function(t) {
          e.$el.find("a").data("open", 0),
          e.signListView.trigger("close"),
          100005 === t.data.msgType ? e.datas.anchorId = t.data.to_userInfo.user_id: t.data.op_info.mic_list && t.data.op_info.mic_list.length ? e.datas.anchorId = t.data.op_info.mic_list[0] : e.datas.anchorId = e.datas.roomOwnerId,
          e.checkSign()
        }),
        o.on("iShowLoginSuccess iShowLogout",
        function() {
          e.checkSign()
        }),
        s.event.on("anchorSign.open",
        function() {
          e.signListView.trigger("open", {
            pos: e.getPosition(),
            btn: e.$el.find("a")
          })
        })
      },
      getPosition: function() {
        var e = this.$el.offset().top,
        t = this.$el.offset().left,
        i = this.$el.width();
        return {
          top: e + this.$el.height() + 10,
          left: t + i / 2
        }
      },
      checkSign: function() {
        var e = this,
        t = {
          isSign: !1,
          isAnchor: e.datas.anchorId === s.loginInfo.userId,
          isLogin: $.cookie("P00001") ? 1 : 0
        };
        t.isLogin ? t.isAnchor ? e.setSignBtn(t) : (e.model.set("anchorId", e.datas.anchorId), e.model.getData()) : e.setSignBtn(t)
      },
      setSignBtn: function(e) {
        this.$el.html(this.template.sign(e))
      },
      clickSign: function(e) {
        var t = $(e.currentTarget),
        i = ~~t.data("open");
        this.doms.$siteBody.trigger("click.anchorSign"),
        t.data("lock") || (i ? (t.data("open", 0), this.signListView.trigger("close")) : (t.data({
          open: 1,
          lock: 1
        }), this.signListView.trigger("open", {
          pos: this.getPosition(),
          btn: t
        })))
      },
      dialogError: function(e) {}
    })
  },
  KJmi: function(e, t, i) {
    var s = i("sk80");
    e.exports = Backbone.Model.extend({
      urlRoot: "/buy/buySendGift",
      defaults: {
        roomId: null,
        money_type: 0,
        num: 1,
        cash_bean: 0,
        cash_diamond: 0,
        points: null,
        swf_type: 1,
        giftList: []
      },
      initialize: function() {
        this.set({
          rowType: 1,
          defineList: [{
            label: "1 ",
            value: 1
          },
          {
            label: "10 (十全十美) ",
            value: 10
          },
          {
            label: "66 (一切顺利) ",
            value: 66
          },
          {
            label: "188 (要抱抱) ",
            value: 188
          },
          {
            label: "520 (我爱你) ",
            value: 520
          },
          {
            label: "1314 (一生一世) ",
            value: 1314
          }]
        })
      },
      subSave: function() {
        var e = this,
        t = this.get("giftInfo"),
        i = {
          room_id: this.get("roomId"),
          to_uid: this.get("sendGiftAnchorInfo").userId,
          product_id: t.product_id,
          money_type: t.money_type,
          num: this.get("num"),
          points: (this.get("points") || []).join(""),
          swf_type: this.get("swf_type")
        };
        9999 === t.tabId ? this.urlRoot = "/api/bags/sendGift": this.urlRoot = "/buy/buySendGift",
        this.save(null, {
          type: "post",
          dataType: "json",
          data: i,
          cache: !1,
          success: function(t, i) {
            "200" == i.code ? e.trigger("success", i) : e.trigger("error", i, t)
          },
          error: function(t, i) {
            e.trigger("error", i)
          }
        })
      },
      check: function() {
        var e = {
          msg: "",
          code: 100
        };
        return $.cookie("P00001") || (s.event.trigger("loginDialog.show"), e = {
          msg: "请先登录",
          code: 101
        }),
        this.get("giftInfo") || (e = {
          msg: "请选择要赠送的礼物",
          code: 102
        }),
        5 != this.get("giftInfo").tabId && this.get("num") <= 0 && (e = {
          msg: "请输入正确的礼物数量",
          code: 103
        }),
        s.loginInfo.userId == this.get("sendGiftAnchorInfo").userId && (e = {
          msg: "您不能给你自己送礼物",
          code: 104
        }),
        5 == this.get("giftInfo").tabId && (this.get("points") ? this.get("points").length != this.get("num") ? e = {
          msg: "个性化礼物个数不正确",
          code: 106
        }: this.get("points").length < 10 && (e = {
          msg: "赠送个数需大于10",
          code: 105
        }) : e = this.get("num") ? {
          msg: "个性化礼物个数不正确",
          code: 106
        }: {
          msg: "赠送个数需大于10",
          code: 105
        }),
        e
      }
    })
  },
  KVh3: function(e, t, i) {
    "use strict";
    e.exports = Backbone.Model.extend({
      urlRoot: "/api/props/topProp",
      getData: function(e) {
        var t = this;
        this.save({},
        {
          data: e || {},
          success: function(e, i) {
            200 === i.code && t.trigger("ok")
          }
        })
      }
    })
  },
  Koub: function(e, t) {
    e.exports = {
      wrapper: '<div class="chat-act"></div>'
    }
  },
  KsOM: function(e, t, i) {
    var s = i("6RRy"),
    a = i("WCsa"),
    o = i("raQq"),
    n = QX.ui.ScrollView;
    e.exports = Backbone.View.extend({
      template: _.template(s),
      initialize: function() {
        var e = this;
        this.model = new o,
        this.on("getData",
        function() {
          this.model.subSave()
        }),
        this.model.on("success",
        function(t) {
          if (200 === t.code && t.data) {
            var i = t.data.total_live;
            e.$num[0 < i ? "show": "hide"]().text(99 < i ? "99+": i),
            this.get("isFirstTime") ? this.set("isFirstTime", !1) : e.appendTips()
          }
        })
      },
      events: {
        'hover [data-js-dom="follow-tip"]': "toggleShow",
        'hover [data-js-dom="guanzhu"]': "toggleShow"
      },
      render: function() {
        var e = $(a);
        this.$el.after(e),
        this.setElement("body"),
        this.$btn = e,
        this.$num = $(".num", e),
        this.model.subSave()
      },
      appendTips: function() {
        var e = $(this.template(_.extend(this.model.get("data"), {
          isPcnClient: QX.env.isPcnClient
        })));
        $("body").append(e),
        this.$tips = e;
        var t = this.setPos(this.$btn, this.$btn.outerHeight() / 2 - 10, 0);
        t.top = t.top - .9 * e.outerHeight() + 15,
        e.css(t),
        e.show(),
        (new n).render(e.find(".scroll-panel"))
      },
      setPos: function(e, t, i) {
        var s = e.offset(),
        a = $(document).scrollTop();
        return s.top = s.top - a + t,
        s.left = 0 + e.closest(".fix-nav").outerWidth() + i,
        s
      },
      changePos: function() {
        var e = this.model.get("pos");
        e.top = e.top - .9 * this.$btn.outerHeight() + 15,
        this.$btn.css(e),
        this.$btn.show()
      },
      toggleShow: function(e) {
        $(e.currentTarget);
        var t = e.type,
        i = this,
        s = this.$el.find('[data-js-dom="follow-tip"]');
        this.GZTimer && clearTimeout(this.GZTimer),
        this.GZTimer = setTimeout(function() {
          "mouseenter" === t ? !s.length && i.trigger("getData") : i.$tips && i.$tips.remove()
        },
        300)
      }
    })
  },
  KtRt: function(e, t, i) {
    var s;
    void 0 === (s = function() {
      return Backbone.Model.extend({
        urlRoot: "/action/inMIC",
        initialize: function() {},
        subSave: function(e) {
          var t = this,
          i = {
            type: "post",
            dataType: "json",
            data: e.data,
            success: function(e, i) {
              t.trigger("success", i)
            },
            error: function(e, i) {
              t.trigger("error", i)
            }
          };
          t.save(null, i)
        }
      })
    }.call(t, i, t, e)) || (e.exports = s)
  },
  LSV7: function(e, t, i) {
    "use strict";
    e.exports = Backbone.Model.extend({
      urlRoot: "/card/isCompleted",
      defaults: {
        anchor_id: ""
      },
      initialize: function() {},
      getData: function() {
        var e = this;
        e.save({},
        {
          data: {
            anchor_id: e.get("anchorId")
          },
          success: function(t, i) {
            "A00000" === i.code ? e.trigger("ok", i.data) : e.trigger("fail", i.msg)
          },
          error: function(t, i) {
            e.trigger("fail", i.msg)
          }
        })
      }
    })
  },
  LiN8: function(e, t, i) {
    var s, a = i("sk80").tools.ishow;
    void 0 === (s = function() {
      return new(Backbone.Model.extend({
        urlRoot: "/api/userinfo/loginfo/",
        initialize: function() {
          var e = this;
          this.on("getUserInfo",
          function(t, i, s) {
            e.subSave({
              data: null,
              success: i || null,
              error: s || null
            })
          })
        },
        subSave: function(e) {
          var t = {
            type: "get",
            data: e.data,
            cache: !1,
            success: function(t, i) {
              200 === i.code ? (_.isArray(i.data.badge) || void 0 === i.data.badge.badge_level && (i.data.badge = []), console.log("login time: " + (new Date).getTime()), i.data.basic || (i.data.basic = {}), $.cookie("QX00003", i.data.basic.user_id, {
                expires: 90,
                domain: "pps.tv",
                path: "/"
              }), a.trigger("iShowLoginSuccess", i)) : $.removeCookie("QX00003", {
                domain: "pps.tv",
                path: "/"
              }),
              e.success && e.success.call(this, t, i),
              t.unset("loading", {
                silent: !0
              }),
              t.trigger("success", t, i)
            },
            error: function(t, i) {
              $.removeCookie("QX00003", {
                domain: "pps.tv",
                path: "/"
              }),
              e.error && e.error.call(this, t, i),
              t.unset("loading", {
                silent: !0
              }),
              t.trigger("success", t, i)
            }
          };
          this.get("loading") || (this.set({
            loading: 1
          },
          {
            silent: !0
          }), this.save(null, t))
        }
      }))
    }.call(t, i, t, e)) || (e.exports = s)
  },
  "M+uM": function(e, t, i) {
    var s, a = i("sk80"),
    o = a.tools.hoverDelay,
    n = a.ui.Tab,
    l = i("/20s"),
    r = i("bwCg"),
    c = i("THsX"),
    d = i("cCqs"),
    u = window._room_config,
    p = u.room_info || {},
    h = u.rank_info || {},
    m = p.room_user_stat && p.room_user_stat.total_num,
    f = _.indexOf(["live", "week", "guard"], h.type) < 2 ? 0 : 1;
    0 === f ? s = {
      code: 200,
      data: {
        items: h.data,
        expire_time: h.expire_time,
        tabIndex: Math.max(_.indexOf(["live", "week"], h.type), 0)
      }
    }: 1 === f && (s = {
      code: 200,
      data: h.data
    }),
    e.exports = Backbone.View.extend({
      initialize: function() {
        this.tabBodies = [{
          cls: "board-tab-cont board-tab-cont-contribute",
          content: new l
        },
        {
          cls: "board-tab-cont board-tab-cont-guard",
          content: new r
        },
        {
          cls: "board-tab-cont board-tab-cont-online",
          content: new c
        }],
        this.currentIndex = 0,
        this.render(),
        this.hoverIn = !1,
        this.listenEvents()
      },
      render: function(e) {
        var t = this;
        this.tab = new n({
          el: this.el,
          tmpl: d.tabHeader,
          headers: {
            guard: {
              online: 0,
              total: 0
            },
            online: m
          },
          bodies: this.tabBodies,
          initData: s
        }).on("after",
        function(e, i, s) {
          t.currentIndex = i,
          t.tabBodies[e].content.model.set("visible", !1),
          t.tabBodies[i].content.model.set("visible", !0)
        }).tab(f)
      },
      listenEvents: function() {
        var e = this;
        o(this.$el, ".board-tab-cont",
        function() {
          e.hoverIn = !0,
          0 === e.currentIndex && $(".board-tab-cont", this.$el).addClass("board-unfold")
        },
        400,
        function() {
          e.hoverIn = !1,
          0 === e.currentIndex && $(".board-tab-cont", this.$el).removeClass("board-unfold")
        },
        300),
        e.$el.on("transitionend webkitTransitionEnd otransitionend mstransitionend",
        function() {
          e.tabBodies[e.currentIndex].content.trigger(e.hoverIn ? "hoverEnter": "hoverLeave")
        }),
        o(this.$el, ".guard-ques",
        function() {
          $(".guard-ques-tip", this.$el).show()
        },
        300,
        function() {
          $(".guard-ques-tip", this.$el).hide()
        },
        200),
        this.tabBodies[1].content.on("refreshGuardNum",
        function(t, i) {
          e.tab.$title.find("._tabHd:eq(1) span").text(i ? "(" + t + "/" + i + ")": "")
        }),
        this.tabBodies[2].content.on("updateAudienceNum",
        function(t) {
          e.tab.$title.find("._tabHd:eq(2) span").text(t ? "(" + t + ")": "")
        }),
        ISHOW.on("iShowLoginSuccess",
        function() {
          e.tab && e.tab.tab(e.currentIndex)
        })
      }
    })
  },
  MYuE: function(e, t, i) {
    var s = i("sk80"),
    a = s.core.loader,
    o = s.tools.ishow,
    n = s.tools.noLoginUUID;
    e.exports = Backbone.View.extend({
      initialize: function(e) {
        _.extend(this.props = {},
        e),
        this.hasConnected = !1,
        this.currentAC = "no authcookie",
        window.ChatSDK || this.loadSDK()
      },
      loadSDK: function() {
        var e = this;
        a("//static.iqiyi.com/js/ppsshow/plugin/chatsdk_qx.js?v=" + o.jsVersion,
        function() {
          if (window.ChatSDK) {
            e.sdkEmitter = window.ChatSDK.emitter;
            var t = $.cookie("P00001") || "",
            i = s.loginInfo.userId;
            t ? e.initSDK(i, t) : n.getUUID(function(i) {
              e.initSDK(i, t)
            }),
            e.listenEvents()
          }
        })
      },
      initSDK: function(e, t) {
        ChatSDK.init({
          type: 1,
          agentType: 1,
          roomId: this.props.roomId,
          userId: e,
          authcookie: t,
          deviceId: $.cookie("QC005")
        }),
        this.currentAC = t
      },
      changeUser: function(e, t) {
        t !== this.currentAC && (this.currentAC = t, console.log("websocket.changeUser", e, t), ChatSDK.changeUser({
          uid: e,
          deviceId: $.cookie("QC005"),
          coo: t
        }))
      },
      listenEvents: function() {
        var e = this;
        this.sdkEmitter.on("chatLoaded",
        function() {
          console.log("websocket.chatLoaded", "聊天室SDK初始化完成")
        }),
        this.sdkEmitter.on("tellConnectStatus",
        function(t, i) {
          switch (s.event.trigger("chatTools.changeStatus", t), t) {
          case 0:
            console.log("websocket 连接失败，重连ing");
            break;
          case 1:
            console.log("websocket 连接成功"),
            e.hasConnected = !0;
            break;
          case 2:
            console.log("websocket 3次重试失败，不在重连"),
            e.hasConnected = !1
          }
        }),
        this.sdkEmitter.on("tellMessage",
        function(e) {
          e instanceof Array || (e = [e]),
          _.each(e,
          function(e) {
            s.event.trigger("chatTools.flashNotice", e)
          })
        }),
        o.on("iShowLoginSuccess",
        function(t) {
          200 === t.code && e.changeUser(t.data.basic.user_id, $.cookie("P00001"))
        }),
        o.on("iShowLogout",
        function() {
          n.getUUID(function(t) {
            e.changeUser(t, "")
          })
        }),
        s.event.on("chatTools.doReconnect",
        function() {
          e.reconnect()
        })
      },
      reconnect: function() {
        ChatSDK.reconnect()
      },
      destroy: function() {
        ChatSDK.destroy(),
        this.hasConnected = !1
      }
    })
  },
  MpAF: function(e, t) {
    e.exports = '<dl class="u-info"><dt class="ct-object"><img width="50" height="50" src="<%=user_icon%>"></dt><dd class="ct-body"><h4 class="_nickName"><%-nick_name%></h4><p>ID:<%=show_id%></p><div class="level-wall"><%=roomPaperIcon%></div></dd></dl><% if(userMedalList) { %><div class="medal-wall"><div class="medal-wall-content"><%= userMedalList %></div></div><% } %><ul class="ct-act _list" data-badge_level="<%=badge_level%>" data-user_id="<%=user_id%>" data-nick_name="<%-nick_name%>" data-user_icon="<%=user_icon%>" data-pb-block="17073113"><%if(userPower.inMIC && micIndex>0){%><li><a  href="javascript:void(0);" node-type="inMic">上麦</a></li><%}%><%if(micIndex==0 && (is_self || userPower.outMIC) ){%><li><a  href="javascript:void(0);" node-type="outMic">下麦</a></li><%}%><%if(micIndex == -1 &&userPower.pullinMIC && !(mic_order|0) && is_anchor){%><li><a  href="javascript:void(0);" node-type="pullIn">拉入麦序</a></li><%}%><%if(micIndex>0 &&(userPower.pushoutMIC||is_self)){%><li><a  href="javascript:void(0);" node-type="pullOut">移出麦序</a></li><%}%><%if(userPower.appointMICOrder && micIndex>1){%><li><a  href="javascript:void(0);" node-type="upMic">麦序优先</a></li><%}%><%if(!is_room_owner){%><%if(userPower.setAdmin){%><li><a  href="javascript:void(0);" node-type="setAdmin" data-set-admin="<%=is_admin%>" data-pb-rseat="1"><%if(is_admin){%>取消<%}else{%>设置<%}%>管理员</a></li><%}%><%if(userPower.setTmpAdmin){%><li><a  href="javascript:void(0);" node-type="setTmpAdmin" data-set-tmp-admin="<%=is_admin_temp%>" data-pb-rseat="2"><%if(is_admin_temp){%>取消<%}else{%>设置<%}%>临管</a></li><%}%><%}%><%if(!is_self){%><%if(userPower.kickOutRoom&&!is_self){%><li><a  href="javascript:void(0);" node-type="outRoom" data-pb-rseat="5">踢出房间</a></li><%}%><%if(userPower.banText){%><li><a  href="javascript:void(0);" data-ban-text="<%=is_banText%>" node-type="banText" data-pb-rseat="4"><%if(is_banText){%>解除禁言<%}else{%>禁言<%}%></a></li><%}%><%if(userPower.banSpeak){%><%if(!(window._room_config && window._room_config.room_type === "5a")){%><li><a  href="javascript:void(0);" data-ban-speak="<%=is_banSpeak%>" node-type="banSpeak" data-pb-rseat="3"><%if(is_banSpeak){%>恢复<%}else{%>禁止<%}%>喊话</a></li><%}%><%}%><%if((userPower.is_anchor || is_anchor) && !is_self){%><%if(!(window._room_config && (window._room_config.room_type === "5a" || window._room_config.room_type == 6))){%><li><a click-type="menuGift" href="javascript:void(0);" data-pb-rseat="6">送礼物</a></li><%}%><%}}%></ul><div class="arr arr-top" style="left:<%=32+arrLeftDif%>px;"><div class="arr-in"></div></div>'
  },
  MwHU: function(e, t, i) {
    "use strict";
    e.exports = Backbone.Model.extend({
      urlRoot: "/action/report",
      defaults: {
        type: 1,
        content: "",
        pic_base64: "",
        qq: "",
        phone: "",
        room_id: ""
      },
      initialize: function() {},
      checkData: function() {
        var e = this;
        /^\d{5,15}$/.test(e.get("qq")) || e.set("qq", ""),
        /^((\+86)|(86))?(1)\d{10}$/.test(e.get("phone")) || e.set("phone", ""),
        500 < e.get("content").length && e.set("content", e.get("content").substring(0, 500))
      },
      getData: function() {
        var e = this;
        e.checkData(),
        e.save({},
        {
          data: {
            type: e.get("type"),
            content: e.get("content"),
            pic_base64: e.get("pic_base64"),
            qq: e.get("qq"),
            phone: e.get("phone"),
            room_id: e.get("room_id")
          },
          success: function(t, i) {
            200 === i.code ? e.trigger("ok") : e.trigger("fail", i.msg)
          },
          error: function(t, i) {
            e.trigger("fail", i.msg)
          }
        })
      }
    })
  },
  Mxc8: function(e, t) {
    e.exports = '<a href="javascript:;" data-pb-rseat="4"><i class="xiu-ico" title="分享">&#xe64a;</i>分享</a><div class="info-share-tip info-tip _roomShareTip"><i class="i-arr"><em></em></i><p>分享地址到：</p><ul class="info-share-list _roomShareList"><% _.each(list, function(v) { %><li class="info-share-item"><a href="javascript:;" data-sns-id="<%= v.id %>" data-pb-rseat="<%= v.pbRseat %>"><i class="xiu-ico info-share-<%= v.cls %>" title="<%= v.title %>"><%= v.ucode %></i><div class="info-share-item-tip info-tip"><i class="i-arr"></i>分享到<%= v.title %></div></a></li><% }) %></ul><p>分享视频给好友</p><p class="info-share-url">视频地址：<input type="text" class="_roomShareUrl" readonly value="<%= url %>"><a href="javascript:;" class="_roomShareCopy" data-pb-rseat="10">复制</a></p><div class="toast info-share-toast _roomShareToast"></div></div>'
  },
  "N+D0": function(e, t, i) {
    "use strict";
    var s = i("sk80"),
    a = s.roomConfig,
    o = s.tools.numToString.numToMillion,
    n = s.tools.rmProtocol,
    l = i("yZ9V");
    e.exports = Backbone.View.extend({
      template: {
        anchorLevel: _.template(l.anchorLevel),
        anchorStarWrap: _.template(l.anchorStarWrap),
        anchorStar: _.template(l.anchorStar)
      },
      datas: {
        roomId: a.get("roomId"),
        name: a.get("onlineAnchorInfo").nick_name,
        level: a.get("onlineAnchorInfo").level.level,
        experience: a.get("onlineAnchorInfo").level.score,
        surplus: a.get("onlineAnchorInfo").level.next_score - a.get("onlineAnchorInfo").level.score,
        percent: a.get("onlineAnchorInfo").level.percent,
        starNum: a.get("onlineAnchorInfo").anchor_stat.star_num
      },
      doms: {},
      initialize: function(e) {
        var t = this;
        t.doms.$anchorName = $(e.anchorName),
        t.doms.$anchorName.after(t.template.anchorStarWrap()),
        t.doms.$anchorStar = $("._anchorStar"),
        t.listenEvent(),
        t.setAnchorName(),
        t.setAnchorStar(),
        t.getAnchorLevel()
      },
      listenEvent: function() {
        var e = this;
        e.model.on("ok",
        function(t) {
          a.set("sendGiftAnchorInfo", {
            userId: t.base_info.user_id,
            nickName: t.base_info.nick_name
          }),
          e.updateAnchorDatas(t)
        }),
        e.model.on("fail",
        function(t) {
          e.dialogError(t)
        }),
        s.event.on(["socket.ANCHOR_INCREASE_EXPERIENCE_POINT", "socket.SEND_STAR"],
        function(t) {
          switch (t.data.msgType) {
          case 102002:
            e.datas.starNum += t.data.op_info.star_num,
            e.setAnchorStar();
            break;
          case 600006:
            e.datas.level = t.data.op_info.level,
            e.datas.experience = t.data.op_info.score,
            e.datas.surplus = t.data.op_info.next_score - t.data.op_info.score,
            e.datas.percent = t.data.op_info.percent,
            e.getAnchorLevel()
          }
        })
      },
      getAnchorLevel: function() {
        this.$el.children("div").remove().end().append(this.template.anchorLevel(this.datas))
      },
      setAnchorName: function() {
        this.doms.$anchorName.text(this.datas.name).attr("title", this.datas.name)
      },
      setAnchorPic: function(e) {
        this.$el.children("img").attr({
          src: n(e),
          alt: this.datas.name
        })
      },
      setAnchorStar: function() {
        this.doms.$anchorStar.html(this.template.anchorStar({
          starNum: this.datas.starNum,
          starNumSimple: o(this.datas.starNum)
        }))
      },
      updateAnchorDatas: function(e) {
        var t = this;
        t.datas.name = e.base_info.nick_name,
        t.datas.level = e.level_info.level,
        t.datas.experience = e.level_info.score,
        t.datas.surplus = e.level_info.next_score - e.level_info.score,
        t.datas.percent = e.level_info.percent,
        t.datas.starNum = e.anchor_stat.star_num,
        t.setAnchorName(),
        t.setAnchorPic(e.base_info.user_icon),
        t.setAnchorStar(),
        t.getAnchorLevel()
      },
      dialogError: function(e) {}
    })
  },
  NKVl: function(e, t, i) {
    "use strict";
    e.exports = Backbone.Model.extend({
      urlRoot: "/api/fans/fansInfo",
      getData: function(e) {
        var t = this;
        this.save({},
        {
          data: e || {},
          success: function(e, i) {
            200 === i.code && t.trigger("ok")
          }
        })
      }
    })
  },
  Nvfh: function(e, t, i) {
    "use strict";
    var s = i("sk80");
    e.exports = s.core.EventDispatcher.extend(function(e) {
      this.doms = {},
      _.extend(this, {
        scrolled: 0,
        isAutoScroll: !1,
        isFadeout: !1,
        cancelBubble: !1
      },
      e)
    },
    {
      render: function(e) {
        if (this.$el = $(e).addClass("scroll-panel"), this.$el[0]) {
          if (this.doms.$content = $(".scroll-content", this.$el), !this.doms.$content[0]) {
            var t = document.createDocumentFragment();
            _.each(this.$el[0].childNodes,
            function(e) {
              t.appendChild(e.cloneNode(!0))
            }),
            (this.doms.$content = $('<div class="scroll-content"></div>').appendTo(this.$el.html("")))[0].appendChild(t)
          }
          this.$el.append(this.doms.$track = $('<div class="scroll-bar"></div>').append(this.doms.$thumb = $('<span class="scroll-handler"></span>'))),
          this.isFadeout && (this.doms.$fadeoutCover = $('<span class="fade-out hide"></span>').appendTo(this.$el)),
          this.update(),
          $(window).on("resize", _.bind(this.update, this))
        }
      },
      update: function() {
        if (this.$el[0]) {
          this.viewPortSize = this.$el[0].clientHeight,
          this.contentSize = this.doms.$content[0].offsetHeight;
          var e = this.contentSize > this.viewPortSize;
          return e ? (this.resizeThumb(), this.doms.$track.removeClass("hide")) : (this.doms.$track.addClass("hide"), this.updateScrollPosition(0)),
          this.updateEvents(e),
          this.isAutoScroll && e && this.scrollToEnd(),
          e
        }
      },
      resizeThumb: function() {
        this.thumbSize = Math.max(Math.floor(Math.pow(this.viewPortSize, 2) / this.contentSize), 20),
        this.ratio = (this.contentSize - this.viewPortSize) / (this.viewPortSize - this.thumbSize),
        this.doms.$thumb.css("height", this.thumbSize + "px")
      },
      updateEvents: function(e) {
        var t = "onwheel" in document.createElement("div") ? "wheel": void 0 !== document.onmousewheel ? "mousewheel": "DOMMouseScroll";
        if (this.$el.off(t), this.doms.$track.off("click"), this.doms.$thumb.off("mousedown"), e) {
          var i = _.bind(function(e) {
            return this.moveThumb(e),
            !1
          },
          this);
          this.$el.on(t, _.bind(this.wheel, this)),
          this.doms.$track.on("click", _.bind(function(e) {
            if (e.srcElement != this.doms.$thumb[0]) {
              var t = null == e.offsetY ? e.originalEvent.layerY: e.offsetY;
              t = Math.max(0, Math.min(this.viewPortSize - this.thumbSize, t - this.thumbSize / 2)),
              this.updateScrollPosition(Math.round(t * this.ratio))
            }
          },
          this)),
          this.doms.$thumb.on("mousedown", _.bind(function(e) {
            return this.startPosition = e.pageY,
            this.startScrolled = this.scrolled,
            $("body").on("mousemove", i).one("mouseup", _.bind(function(e) {
              return $("body").off("mousemove", i),
              !1
            },
            this)),
            !1
          },
          this))
        }
      },
      moveThumb: function(e) {
        var t = e.pageY - this.startPosition,
        i = Math.round(t * this.ratio);
        this.updateScrollPosition(Math.min(Math.max(0, this.startScrolled + i), this.contentSize - this.viewPortSize))
      },
      wheel: function(e) {
        var t = (e = e.originalEvent).deltaY || e.detail || -e.wheelDelta;
        return 0 !== t && (1 === e.deltaMode && (t *= 40), t = Math.round(t / 4), this.scrolled <= 0 && t < 0 || this.scrolled >= this.contentSize - this.viewPortSize && 0 < t ? !this.cancelBubble: (this.updateScrollPosition(Math.min(Math.max(0, this.scrolled + t), this.contentSize - this.viewPortSize)), !1))
      },
      updateScrollPosition: function(e, t) {
        this.$el[0] && (this.scrolled = e, t ? (this.doms.$content.addClass("scroll-bottom-fixed"), this.doms.$content.css("top", "auto")) : (this.doms.$content.removeClass("scroll-bottom-fixed"), this.doms.$content.css("top", -e + "px")), this.doms.$thumb.css("top", Math.round(e / this.ratio) + "px"), this.isFadeout && this.doms.$fadeoutCover[e ? "removeClass": "addClass"]("hide"), this.trigger("scroll", {
          scrolled: e,
          total: this.contentSize - this.viewPortSize
        }))
      },
      scrollToStart: function() {
        this.contentSize <= this.viewPortSize || this.updateScrollPosition(0)
      },
      scrollToEnd: function() {
        this.contentSize <= this.viewPortSize || this.updateScrollPosition(this.contentSize - this.viewPortSize, this.isAutoScroll)
      },
      destroy: function() {
        this.scrollToStart(),
        this.doms.$track && this.doms.$track.remove()
      },
      getContent: function() {
        return this.doms.$content
      },
      setAutoScroll: function(e) {
        this.isAutoScroll = e,
        this.scrollToEnd()
      },
      remove: function() {
        this.doms.$track.remove()
      }
    })
  },
  O0FG: function(e, t, i) {
    var s = i("sk80"),
    a = i("zX0F");
    e.exports = Backbone.View.extend({
      template: _.template(a),
      events: {
        "click .popup-tuijiantu .pp-remove": "closePop"
      },
      initialize: function() {
        this.listenEvents()
      },
      listenEvents: function() {
        var e = this;
        s.event.on("socket.RECOMMEND_IMAGE_CHECK",
        function(t) { (t = t.data).to_userInfo.user_id;
          var i = t.op_info.content;
          e.showPop(i)
        })
      },
      showPop: function(e) {
        0 < $(".popup-tuijiantu").length && this.closePop(),
        this.$el.append(this.template({
          content: e
        }))
      },
      closePop: function() {
        $(".popup-tuijiantu").remove()
      }
    })
  },
  "Ofv+": function(e, t) {
    e.exports = Backbone.Model.extend({
      url: "/api/mall/getPackageProduct",
      defaults: {
        product_id: 0
      },
      initialize: function() {},
      subSave: function(e) {
        var t = this;
        this.get(this.get("product_id")) ? e && e(this.get(this.get("product_id"))) : (this.get("ajaxing") && this.get("ajaxing").abort(), this.set("ajaxing", this.save({},
        {
          type: "get",
          data: {
            product_id: this.get("product_id")
          },
          success: function(i, s) {
            t.unset("ajaxing"),
            200 === s.code && (t.set(t.get("product_id"), s), e && e(s))
          },
          error: function() {
            t.unset("ajaxing")
          }
        })))
      }
    })
  },
  Ojav: function(e, t) {
    e.exports = Backbone.Model.extend({
      urlRoot: "/room/savePersonalTemplates",
      defaults: {
        points: "",
        name: "",
        overLength: !1,
        oldTmplId: void 0,
        oldTmplName: "",
        tmplList: [],
        error: "",
        needDropdownList: !1
      },
      initialize: function() {},
      getData: function() {
        return this.save(null, {
          submit: !0,
          data: {
            coordinate: this.get("points"),
            template_name: this.get("name"),
            template_id: this.get("oldTmplId")
          },
          success: function(e, t) {
            e.trigger("success", e, t)
          },
          error: function(e, t) {
            e.trigger("error", e, t)
          }
        })
      },
      validate: function(e, t) {
        if (t = t || {},
        e.needDropdownList && "" === e.oldTmplName && t.submit) return "模板库存已达上限，请选择需要替换的模板";
        if (e.overLength || /[^\x00-\x7f\u4e00-\u9fa5]+/.test(e.name) || "" === $.trim(e.name)) return "10个字符以内，限中英文、数字、符号";
        if (e.needDropdownList) {
          var i = [];
          if (_.each(e.tmplList,
          function(t) {
            t.template_name !== e.template_name && i.push(t.template_name)
          }), -1 < _.indexOf(i, e.name)) return "该模板名已存在，请输入新的名称";
          this.set("error", "")
        } else if (!e.needDropdownList) {
          for (var s = -1,
          a = 0; a < e.tmplList.length; a++) if (e.tmplList[a].template_name === e.name) {
            s = a;
            break
          }
          if ( - 1 !== s) return "该模板名已存在，请输入新的名称";
          this.set("error", "")
        }
      }
    })
  },
  OwZ9: function(e, t) {
    e.exports = '<%if(tabId === 9999 && !list.data_list.length){%><li class="gift-wrapper-empty-box"><div class="gwe-inner">您的背包空空如也！</div></li><%}%><%_.forEach(list.data_list, function (v,k){%><li <%if(v.entity_type){%>data-entity-type="<%=v.entity_type%>"<%}%> <%if(typeof v.product_id != "undefined" && v.product_id == curGiftInfo.product_id && curGiftInfo.tabId ===tabId){%>class="active"<%}%> data-js-dom="giftIcon" data-gift-id="<%=v.product_id%>" <%if(!v.product_id){%>class="disabled"<%}%>><%if(v.product_id){%><img alt="<%=v.name ||v.entity_name%>" class="gift-pic" src="<%=v.pic_png%>"><% if (~~v.is_lucky) { %><div class="tag-lg tag-lg-3">幸运</div><% } if (~~v.is_weekstar) { %><div class="tag-lg tag-lg-1">周星</div><% } if (~~v.is_virtual_dressing) { %><div class="tag-sm tag-sm-3">vr</div><% } %><%if(list.tab_id>=9999){%><div class="tag-num"><%= (v.totalPrice || v.total_num) > 9999 ? \'9999+\' : (v.totalPrice || v.total_num) %></div><%}%><%}%></li><%})%>'
  },
  Ozzj: function(e, t, i) {
    var s = i("nCB2"),
    a = i("e2tq");
    e.exports = new s({
      model: new a,
      nodeType: "setTmpAdmin",
      toastMsg: function(e, t) {
        return {
          200 : "已将" + e + (1 == t ? "设置为": "取消") + "临时管理员"
        }
      }
    })
  },
  PJxX: function(e, t) {
    e.exports = Backbone.Model.extend({
      urlRoot: "/room/getMICUserList",
      defaults: {
        page: 1,
        page_size: 200
      },
      initialize: function() {},
      getData: function() {
        return this.save(null, {
          data: {
            room_id: this.get("room_id"),
            page: this.get("page"),
            page_size: this.get("page_size")
          },
          success: function(e, t) {
            e.trigger("success", e, t)
          },
          error: function(e, t) {
            e.trigger("error", e, t)
          }
        })
      }
    })
  },
  PN0l: function(e, t, i) {
    "use strict";
    var s = i("sk80"),
    a = s.roomConfig,
    o = i("Mxc8");
    e.exports = Backbone.View.extend({
      template: _.template(o),
      csses: {
        root: "body",
        roomShareTip: "._roomShareTip",
        roomShareToast: "._roomShareToast",
        roomShareList: "._roomShareList",
        roomShareUrl: "._roomShareUrl"
      },
      datas: {
        shareUrl: location.href,
        nickName: a.get("onlineAnchorInfo").nick_name,
        pic: a.get("onlineAnchorInfo").live_image,
        toastOk: "已复制视频地址到剪贴板",
        toastFail: "请手动复制视频地址",
        toastTime: 3e3,
        timer: 0,
        timerToast: 0,
        url: "http://player.share.qiyi.com/redirector/f/s/liveShow.html?",
        shareList: [{
          title: "新浪微博",
          id: 2,
          cls: "sinaweibo",
          ucode: "&#xe651;",
          pbRseat: "5"
        },
        {
          title: "QQ空间",
          id: 6,
          cls: "qzone",
          ucode: "&#xe647;",
          pbRseat: "6"
        },
        {
          title: "腾讯微博",
          id: 4,
          cls: "tecentweibo",
          ucode: "&#xe652;",
          pbRseat: "8"
        },
        {
          title: "QQ好友",
          id: 1,
          cls: "qq",
          ucode: "&#xe642;",
          pbRseat: "7"
        },
        {
          title: "百度贴吧",
          id: 9,
          cls: "baidu",
          ucode: "&#xe628;",
          pbRseat: "9"
        }]
      },
      events: {
        hover: "showOrHideRoomShare",
        "click ._roomShareList a": "openShareWindow",
        "click ._roomShareCopy": "copyUrl"
      },
      setDoms: function() {
        var e = this,
        t = e.csses;
        e.doms = {
          $body: $(t.root),
          $roomShareTip: $(t.roomShareTip, e.$el),
          $roomShareUrl: $(t.roomShareUrl, e.$el),
          $roomShareToast: $(t.roomShareToast, e.$el)
        }
      },
      initialize: function() {
        var e = this;
        e.$el.html(e.template({
          url: e.datas.shareUrl,
          list: e.datas.shareList
        })),
        e.setDoms(),
        e.listenEvent(),
        e.isPcnClient = s.env.isPcnClient
      },
      listenEvent: function() {
        var e = this;
        s.event.on(["socket.LIVE_START", "socket.LIVE_STOP", "socket.MIC_PULL_IN"],
        function(t) {
          e.changeNickName(t.data.to_userInfo.nick_name)
        })
      },
      showOrHideRoomShare: function(e) {
        var t = this;
        "mouseenter" === e.type ? (clearTimeout(t.datas.timer), t.resetToast(), t.doms.$roomShareTip.show()) : (clearTimeout(t.datas.timer), t.datas.timer = setTimeout(function() {
          t.doms.$roomShareTip.hide(),
          t.resetToast()
        },
        800))
      },
      openShareWindow: function(e) {
        var t = $(e.currentTarget),
        s = encodeURIComponent('我正在奇秀看"' + this.datas.nickName + '"的视频秀，非常精彩，一起来欣赏吧～'),
        a = this.datas.url + "channel=" + t.data("sns-id") + "&pic=" + this.datas.pic + "&wenAn=" + s + "&url=" + location.href;
        if (!this.isPcnClient) return window.open(a, "", "location=yes,left=200,top=100,width=800,height=600,resizable=yes");
        i("AQTH").openSystemBrowser(a)
      },
      changeNickName: function(e) {
        this.datas.nickName = e
      },
      copyUrl: function() {
        var e, t = this.datas.url,
        i = this.doms.$roomShareUrl;
        i.focus(),
        i.select(),
        document.execCommand ? e = document.execCommand("copy", !0) : window.clipboardData && (window.clipboardData.setData("text", t), e = !0),
        this.showToast(e)
      },
      showToast: function(e) {
        var t = this,
        i = t.doms.$roomShareToast;
        e ? i.html(t.datas.toastOk).show() : i.html(t.datas.toastFail).show(),
        clearTimeout(t.datas.timerToast),
        t.datas.timerToast = setTimeout(function() {
          t.resetToast()
        },
        t.datas.toastTime)
      },
      resetToast: function() {
        clearTimeout(this.datas.timerToast),
        this.doms.$roomShareToast.hide().empty()
      }
    })
  },
  PVRn: function(e, t) {
    e.exports = {
      shop: '<div class="scroll-panel scroll-panel-tlc"><div class="scroll-content"><div class="tls-t-1"><% if (isJoin) { %>您的积分<span><%= user_score %>分</span><% } else { %>加入真爱团才能抽奖或兑换道具哟~<% } %></div><ul class="tl-shop-list _trueLoveShopList"><% _.each(items, function(v, i) { %><li data-pid="<%= v.product_id %>"><div class="goods-picblock"><img src="<%= v.product_url %>" alt="<%= v.product_name %>"><% if (i) { %><div class="tl-lv">Lv<%= v.level %></div><div class="storage <%= v.stock === 0 ? \'empty\' : \'\' %>"><% if (fans_level < v.level) { %>未解锁<% } else { %><% if (v.stock === -1) { %>库存充足<% } else { %>库存:<%= v.stock %><% } %><% } %></div><% } %></div><div class="goods-name"><%= v.product_name %></div><div class="fee"><%= v.price %>积分</div></li><% }) %></ul></div></div>',
      product: '<div class="scroll-panel scroll-panel-tlc"><div class="scroll-content"><div class="tls-t-2"><a href="javascript:;" class="_trueLoveShopReturn">积分仓库</a> > <%= product_name %></div><div class="tls-t-1"><% if (isJoin) { %>您的积分<span class="_trueLoveShopUserScore"><%= user_score %>分</span><% } else { %>加入真爱团才能抽奖或兑换道具哟~<% } %></div><div class="tls-detail"><div class="tlsd-picbox"><img src="<%= product_url %>" alt="<%= product_name %>"><div class="tl-lv">Lv<%= level %></div><div class="storage <%= stock === 0 ? \'empty\' : \'\' %>"><% if (stock === -1) { %>库存充足<% } else { %>库存:<span class="_trueLoveShopStock"><%= stock %></span><% } %></div></div><div class="tlsd-tblock"><div class="goods-name"><%= product_name %></div><div class="fee"><%= price %>积分</div><div class="limitbuy">限购：<%= limit_desc %></div></div><div class="more-des"><%= product_desc %></div></div><ul class="tl-form-group"><li class="tlf-item-1"><label>兑换数量</label><div class="calc-panel"><a href="javascript:;" class="calc-i calc-minus disabled _trueLoveShopMinus" data-type="minus">减</a><input class="calc-input _trueLoveShopNum" type="text" value="1"><a href="javascript:;" class="calc-i calc-plus _trueLoveShopPlus <% if (!stock || ~~max_num === 1) { %>disabled<% } %>" data-type="plus">加</a></div></li><li class="tlf-item-2"><label>合计</label><p class="t-info"><span class="_trueLoveShopTotal"><%= price %></span>积分</p></li></ul><div class="xmodal-btn-group"><a class="xmodal-btn xmodal-btn-a _trueLoveShopBuy" href="javascript:;">立即兑换</a></div></div></div>',
      lottery: '<div class="tls-t-2"><a href="javascript:;" class="_trueLoveShopReturn">积分仓库</a> > 积分抽奖</div><div class="tls-jgg-contain"><div class="tls-jgg-jf">您的积分<em class="_trueLoveShopUserScore"><%= user_score %></em>分，每日抽奖上限<em class="_trueLoveLotteryCount"><%= lottery_total %></em>次</div><ul class="tls-jgg-lotto _trueLoveLotteryProduct"><% _.each(products, function(v, i) { %><li class="item-award item-award-<%= i + 1 %> <%= i ? \'\' : \'selected\' %>"><img class="item-award-gift" src="<%= v.product_img %>" alt="<%= v.name %>"><% if (v.num > 1) { %><p class="item-award-num">×<%= v.num %></p><% } %><p class="item-award-name"><%= v.name %></p></li><% }) %></ul><div class="btn-lotto-tl _trueLoveLotteryBtn <% if (!lottery_count || user_score < consume_score) { %>disabled<% } %>"><div class="t-1">点击抽奖</div><% if (lottery_count && user_score >= consume_score) { %><div class="t-2 _trueLoveLotteryBtnTip">每次<%= consume_score %>积分</div><% } else { %><div class="t-2"><%= lottery_count ? \'积分不足\' : \'当日机会已用完\' %></div><% } %></div></div>'
    }
  },
  PXWy: function(e, t, i) {
    var s = i("nCB2"),
    a = i("eB8c");
    e.exports = new s({
      model: new a,
      nodeType: "banSpeak",
      type: 3,
      toastMsg: function(e, t) {
        return {
          200 : "已将" + e + (1 == t ? "禁止喊话": "恢复喊话"),
          201 : "禁止喊话是白银、黄金守护及管理员的特权哦~"
        }
      }
    })
  },
  PiuG: function(e, t, i) {
    var s = i("sk80"),
    a = s.roomConfig,
    o = s.ui.userIcon,
    n = i("26/S"),
    l = i("f6A1");
    e.exports = Backbone.View.extend({
      model: new n,
      template: {
        title: _.template(l.audienceTitle),
        list: _.template(l.audienceList)
      },
      initialize: function() {
        this.model.set("room_id", a.get("roomId")),
        this.listenEvents(),
        this.tempData = null
      },
      render: function(e) {
        this.$el.append(this.template.title(this.model.toJSON())),
        this.model.set({
          page: 1,
          old_page: 1
        }),
        e ? (this.renderList(e), this.trigger("render")) : this.model.getData()
      },
      renderList: function(e) {
        if (this.model.get("visible")) {
          var t = this.$el.find(".u-item");
          0 < t.length && t.last().remove(),
          _.each(e.items,
          function(e, t) {
            e.iconList = o.online(e)
          }),
          this.$el.append(this.template.list({
            items: e.items,
            remain: e.current_num && e.current_num.visitor_num
          }))
        }
        this.trigger("renderList", e)
      },
      listenEvents: function() {
        var e = this;
        this.model.on("success",
        function(t, i) {
          200 === i.code && (i.data.items && 0 < i.data.items.length && (this.set("old_page", this.get("page")), this.set("page", this.get("page") + 1)), e.renderList(i.data))
        })
      },
      loadMore: function() {
        this.model.getData()
      }
    })
  },
  PsUJ: function(e, t, i) {
    e.exports = {
      roleType: {
        is_admin_temp: 2,
        is_admin: 4,
        is_anchor: 8,
        is_manager: 16,
        is_super_admin: 256,
        is_field_control: 512
      },
      abilityType: {
        is_banText: 2,
        is_banSpeak: 4
      },
      getTypeArr: function(e, t) {
        var i, s = {};
        for (i in t) t.hasOwnProperty(i) && (s[i] = !!(e & t[i]));
        return s
      },
      getRole: function(e) {
        return e |= 0,
        this.getTypeArr(e, this.roleType)
      },
      getAbility: function(e) {
        return e |= 0,
        this.getTypeArr(e, this.abilityType)
      }
    }
  },
  Pzp1: function(e, t) {
    e.exports = {
      notice: '<div class="chat-notice"><div class="r-n"><span class="tit">公告：</span><p class="n-m"><span class="_publicMsg"><%-publicMsg%></span></p></div><%_.each(officalMsgList, function(v){%><div class="o-n"><span class="tit">官告：</span><p class="n-m"><span><%=v%></span></p></div><%})%></div>'
    }
  },
  Q1jJ: function(e, t, i) {
    var s = i("sk80"),
    a = s.ui.SubConfirm,
    o = s.roomConfig;
    s.event.on("chatTools.flashNotice",
    function(e) {
      var t = 0 | e.user_id;
      1 === e.type && 2 === e.op && t && t === parseInt(o.get("loginUserId")) && !confirm && (confirm = a({
        content: '<div class="dialog-tips"><span class="tips-alert">您的账号在其他地方退出当前房间？<br><em class="red">如果这不是你的操作，请注意帐号安全，及时更改密码</em></span></div>',
        btn: [{
          type: "def",
          clsName: "btn btn-sye",
          text: "确定"
        }]
      }), confirm.once("ok cancel",
      function() {
        confirm = null
      }))
    })
  },
  "Q5+b": function(e, t, i) {
    var s = i("sk80");
    s.roomConfig,
    e.exports = Backbone.View.extend({
      initialize: function(e) {
        this.config = e,
        this.msgList = [],
        s.event.on("socket.SHOUT", _.bind(function(e) {
          this.pushMsg({
            content: e.data.op_info.content,
            badge_level: e.data.op_userInfo.badge_level,
            guard_level: e.data.op_userInfo.guard_level,
            charm_level: e.data.op_userInfo.charm_level,
            nick_name: e.data.op_userInfo.nick_name,
            speak_prop: e.data.op_info.speak_prop,
            isOwner: this.config.attributes.roomOwner == e.data.op_userInfo.user_id ? 1 : 0,
            isSourceRoom: this.config.attributes.roomId == e.data.op_info.room_id ? 1 : 0
          })
        },
        this))
      },
      pushMsg: function(e) {
        this.msgList.push(e),
        5 <= this.msgList.length ? (clearTimeout(this.timeout), this.sendMsg()) : this.timeout || (this.timeout = setTimeout(_.bind(this.sendMsg, this), 1e3))
      },
      sendMsg: function() {
        this.trigger("SHOUT", this.msgList),
        this.msgList = [],
        this.timeout = null
      }
    })
  },
  QSZu: function(e, t, i) {
    "use strict";
    e.exports = Backbone.Model.extend({
      urlRoot: "/api/speak/getSpeakPool",
      getData: function(e) {
        var t = this;
        e = e || {},
        console.log(e),
        t.save({},
        {
          data: e,
          success: function(e, i) {
            t.trigger("success", i)
          }
        })
      }
    })
  },
  Qbyj: function(e, t, i) {
    var s = i("sk80"),
    a = i("AQTH");
    e.exports = Backbone.View.extend({
      initialize: function() {
        this.setElement("body"),
        this.ifExistMiniPlayer = !1,
        this.tipTimer = 0,
        this.closeTimer = 0,
        this.ifShowMiniPlayerTip(),
        this.toggleShowMiniPlayer = this.toggleShowMiniPlayer.bind(this),
        this.tellPcnVideoTypeChange = this.tellPcnVideoTypeChange.bind(this),
        this.ifPausePlay = this.ifPausePlay.bind(this),
        this.liveStopTip = this.liveStopTip.bind(this),
        this.liveReStart = this.liveReStart.bind(this),
        this.setMediaConlStyle = this.setMediaConlStyle.bind(this)
      },
      events: {
        "click .xm-btn-mini-player, .xm-golive": "toggleShowMiniPlayer"
      },
      toggleMiniPlayerEvent: function() {
        var e = this;
        this.ifExistMiniPlayer ? (s.event.on("closeMiniPlayer", e.toggleShowMiniPlayer), s.event.on("resumePlay", e.tellPcnVideoTypeChange), s.event.on("videoTypeChange", e.ifPausePlay), s.event.on("socket.LIVE_STOP", e.liveStopTip), s.event.on("socket.LIVE_START", e.liveReStart), s.event.on("pcnResize", e.setMediaConlStyle)) : (s.event.off("closeMiniPlayer", e.toggleShowMiniPlayer), s.event.off("resumePlay", e.tellPcnVideoTypeChange), s.event.off("videoTypeChange", e.ifPausePlay), s.event.off("socket.LIVE_STOP", e.liveStopTip), s.event.off("socket.LIVE_START", e.liveReStart), s.event.off("pcnResize", e.setMediaConlStyle))
      },
      ifPausePlay: function(e) {
        "miniPlayer" != e.videoType && PlayerSDK.pausePlay()
      },
      tellPcnVideoTypeChange: function() {
        a.playerTypeChange(JSON.stringify({
          videoType: "miniPlayer"
        }))
      },
      liveStopTip: function() {
        this.$el.find(".h5-player-container").append('<div class="live-stop-tip-mp">主播正在休息</div>'),
        this.createCloseTimer()
      },
      liveReStart: function() {
        this.$el.find(".live-stop-tip-mp").remove()
      },
      setMediaConlStyle: function() {
        var e = this;
        setTimeout(function() {
          e.$el.find("#_videoLoaderContainer").css({
            width: "100%",
            height: "100%"
          }),
          e.$el.find(".xiu-media-control").css("left", "0")
        },
        0)
      },
      toggleShowMiniPlayer: function() {
        this.checkFullScreenAndExit(),
        a.setwndplay(Number(!this.ifExistMiniPlayer)),
        this.ifExistMiniPlayer = !this.ifExistMiniPlayer,
        this.ifExistMiniPlayer && (PlayerSDK.isPlaying() && this.tellPcnVideoTypeChange(), s.event.trigger("openMiniPlayer")),
        PlayerSDK.miniPlayerBtnClick(),
        this.toggleMiniPlayerEvent(),
        this.toggleHandleMiniPlayerStyle()
      },
      checkFullScreenAndExit: function() {
        1 != document.webkitIsFullScreen && 1 != document.mozFullScreen && 1 != document.msFullscreenElement && !document.fullscreen || (document.exitFullscreen ? document.exitFullscreen() : document.msExitFullscreen ? document.msExitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitExitFullscreen && document.webkitExitFullscreen())
      },
      toggleHandleMiniPlayerStyle: function() {
        this.$el.find(".site-body.nav-unfold").toggleClass("site-body-mp"),
        this.$el.find(".room-video").toggleClass("room-video-mp"),
        this.$el.find(".h5-player-container").toggleClass("h5Player-container-mp"),
        this.$el.find(".xiu-media-control").toggleClass("xiu-media-control-mp")
      },
      ifShowMiniPlayerTip: function() {
        localStorage.getItem("ifShowMiniPlayerTip") || ($(".room-video").append('<div class="mini-player-toast"><p>新增<em>小窗播放</em>功能～</p></div>'), $(".mini-player-toast, .xiu-media-control").css("opacity", 1), localStorage.setItem("ifShowMiniPlayerTip", 1), this.createTipTimer())
      },
      createTipTimer: function() {
        this.tipTimer && clearTimeout(this.tipTimer),
        this.tipTimer = setTimeout(function() {
          $(".mini-player-toast, .xiu-media-control").css("opacity", 0)
        },
        3e3)
      },
      createCloseTimer: function() {
        this.closeTimer && clearTimeout(this.closeTimer),
        this.closeTimer = setTimeout(function() {
          a.closeMiniPlayer()
        },
        5e3)
      }
    })
  },
  Qc4a: function(e, t) {
    e.exports = {
      dialogWrap: '<div id="<%= tcid %>" class="xmodal<% if (clsName) { %> <%= clsName %><% } %>" node-type="baseDialog" style="display:none;" <%= attrs %>><a href="javascript:;" class="_def"><i class="xiu-ico xiu-ico-off">&#xe63b;</i></a><% if (title) { %><div class="xmodal-title"><%= title %></div><% } %><div class="xmodal-clock-in-txt" node-type="dialogBd"></div><div class="xmodal-btn-group" node-type="dialogFt" style="display:none;"></div></div>',
      inputCon: '<div><div class="user-Propaganda-box"><p class="user-Propaganda-box-p" style="margin-bottom: 10px">全站喊话在全站直播间内以弹幕的形式展示</p><textarea type="text" class="user-Propaganda" placeholder="输入你想说的话~" /><span class="user-Propaganda-sp"><em>20</em>字</span></div><div class="xmodal-btn-group user-Propaganda-group"><a href="javascript:void(0);" class="xmodal-btn xmodal-btn-a user-Propaganda-btn"><span class="b">确定</span></a></div></div>'
    }
  },
  RLOA: function(e, t, i) {
    var s;
    void 0 === (s = function() {
      return Backbone.Model.extend({
        urlRoot: "/action/appointMICOrder",
        initialize: function() {},
        subSave: function(e) {
          var t = this,
          i = {
            type: "post",
            dataType: "json",
            data: e.data,
            success: function(e, i) {
              t.trigger("success", i)
            },
            error: function(e, i) {
              t.trigger("error", i)
            }
          };
          t.save(null, i)
        }
      })
    }.call(t, i, t, e)) || (e.exports = s)
  },
  Rgog: function(e, t) {
    e.exports = '<div class="xmodal medal-wear-tip"><a href="javascript:void(0);"><i class="xiu-ico xiu-ico-off"></i></a><h2 class="medal-wear-title">勋章佩戴功能上线啦</h2><p class="medal-wear-desc">亲可前往“个人中心-勋章墙”进行佩戴</p><div class="xmodal-btn-group"><a class="xmodal-btn xmodal-btn-a" href="/home" target="_blank">去佩戴</a></div></div>'
  },
  "Rs+i": function(e, t) {
    e.exports = Backbone.Model.extend({
      url: "/action/bless",
      defaults: {
        room_id: "",
        to_uid: 0,
        type: ""
      },
      initialize: function() {
        this.save({},
        {
          data: this.toJSON(),
          success: function() {}
        })
      }
    })
  },
  S27X: function(e, t, i) {
    var s = i("yBwq");
    e.exports = Backbone.View.extend({
      template: _.template(s),
      initialize: function() {
        this.$el.empty().append($(this.template())),
        this.roomDownloadtip = "._roomDownloadTip",
        this.timer = 0
      },
      events: {
        hover: "showOrHideRoomDownload"
      },
      showOrHideRoomDownload: function(e) {
        var t = $(this.roomDownloadtip);
        "mouseenter" === e.type ? (clearTimeout(this.timer), t.show()) : (clearTimeout(this.timer), this.timer = setTimeout(function() {
          t.hide()
        },
        800))
      }
    })
  },
  S3eq: function(e, t) {
    e.exports = Backbone.Model.extend({
      urlRoot: "/api/room/getGuardList",
      defaults: {
        min: 6,
        btnAvailable: !0
      },
      initialize: function(e) {
        this.set("anchor_id", e.anchor_id),
        this.set("room_id", e.room_id),
        this.set("is_online_sort", 1)
      },
      getData: function() {
        var e = this;
        return this.save(null, {
          data: {
            anchor_id: this.get("anchor_id"),
            room_id: this.get("room_id"),
            is_online_sort: this.get("is_online_sort")
          },
          success: function(t, i) {
            e.set("data", i.data),
            t.trigger("success", t, i)
          },
          error: function(e, t) {
            e.trigger("error", e, t)
          }
        })
      },
      preProcess: function(e) {
        var t = e.data;
        0 !== t.length && _.each(t,
        function(e) {
          var t, i = e.expire_seconds;
          t = 86400 <= i ? "剩余<br><span>" + parseInt(i / 86400) + "天</span>": 3600 <= i ? "剩余<br><span>" + parseInt(i / 3600) + "小时</span>": "即将<br/>到期",
          e.remain_html = t
        })
      }
    })
  },
  S56f: function(e, t) {
    e.exports = {
      ctrl: '<div class="starpool-act-group _starpoolAct" data-pb-block="17073106"><div class="starpool-core"><span><%=myStar%></span></div><div class="starpool-tip" style="display:none" data-js-dom="starTips">登录后可免费赠送哦<div class="st-arr"></div></div><div class="_starRule"><%_.each(starRule, function(rule, i){%><a href="javascript:void(0);" class="star-send star-send-<%=i+1%>" data-send-num="<%=rule%>" data-pb-rseat="2"><%=rule%></a><%})%></div><div class="sp-ques-box"><i class="xiu-ico xiu-ico-ques"></i><div class="tip-block tip-block-spqb"><div class="arr arr-bottom" style="right:5px"><div class="arr-in"></div></div><div class="_starDesc"></div></div></div></div>',
      rule: '<%_.each(starRule, function(rule, i){%><a href="javascript:void(0);" class="star-send star-send-<%=i+1%>" data-send-num="<%=rule%>" data-pb-rseat="2"><%=rule%></a><%})%>',
      toastVip: '<a data-pb-rseat="3" href="//vip.iqiyi.com/order.html" target="_blank" class="toast-splink">开通VIP</a>或<a href="javascript:;" class="toast-splink _openBadge">开通贵族</a>才可赠送哦~'
    }
  },
  S9GA: function(e, t) {
    e.exports = {
      topProp: '<li class="msg"><div class="row nr"><%= icons %><span class="name lightred"><%- nickName %></span>为主播使用了<span class="sys"><%= num %>张<%= name %></span>，助力主播上推荐</div></li>'
    }
  },
  SPA7: function(e, t, i) {
    var s = i("sk80"),
    a = s.ui.ScrollView,
    o = s.tools.timeSerialize.pad,
    n = i("66B1");
    e.exports = Backbone.View.extend({
      template: {
        list: _.template(n.list),
        timestamp: _.template(n.timestamp)
      },
      initialize: function(e) {
        _.extend(this.props = {},
        {
          max: 50,
          msgMinInterval: 300,
          cacheListMaxLength: 10,
          timegap: 3e5
        },
        e),
        this.lastTimer = 0,
        this.wholeList = [],
        this.cacheList = [],
        this.waiting = !1,
        this.needRender = !1,
        this.lastTimestamp = 0,
        this.scrollView = new a,
        this.autoScroll = !0,
        this.listenEvents()
      },
      render: function(e) {
        e && (this.wholeList = this.wholeList.concat(e)),
        this.$el.html(this.template.list({
          data: this.wholeList.join("")
        })),
        this.scrollView.render(this.$el.find(".scroll-panel")),
        this.scrollView.update(),
        this.scrollView.scrollToEnd(),
        this.$list = this.$el.find("._roomMessageList")
      },
      listenEvents: function() {
        var e = this;
        this.on("appendItem",
        function(t, i) {
          var s = new Date;
          e.lastTimestamp && s.getTime() - e.lastTimestamp > e.props.timegap && e.cacheList.push(e.template.timestamp({
            time: o(s.getHours(), 2) + ":" + o(s.getMinutes(), 2)
          })),
          e.lastTimestamp = s.getTime(),
          e.needRender = i,
          e.cacheList.push(t),
          e.waiting ? e.cacheList.length >= e.props.cacheListMaxLength && (e.appendHtml(), e.waiting = !1, clearTimeout(e.lastTimer)) : (e.waiting = !0, e.lastTimer = setTimeout(function() {
            e.appendHtml(),
            e.waiting = !1
          },
          e.props.msgMinInterval))
        })
      },
      appendHtml: function() {
        this.wholeList = this.wholeList.concat(this.cacheList),
        this.needRender && this.$list && this.$list.append(this.cacheList.join(""));
        var e = this.wholeList.length - this.props.max;
        0 < e && (this.wholeList.splice(0, e), this.needRender && this.$list && this.$list.children("li").slice(0, e).remove()),
        this.needRender && this.$list && (this.scrollView.update(), this.autoScroll && this.scrollView.scrollToEnd()),
        this.cacheList = []
      },
      empty: function() {
        this.$list.empty(),
        this.scrollView.update(),
        this.wholeList = [],
        this.cacheList = []
      },
      lock: function(e) {
        this.autoScroll = !e,
        this.autoScroll && this.scrollView.scrollToEnd()
      },
      willRender: function(e) {
        this.needRender = e
      },
      updateScroll: function() {
        this.scrollView.update(),
        this.scrollView.scrollToEnd()
      }
    })
  },
  SPHm: function(e, t, i) {
    "use strict";
    e.exports = Backbone.Model.extend({
      urlRoot: "/room/getLiveNoticeList",
      defaults: {
        room_id: ""
      },
      initialize: function() {},
      getData: function() {
        var e = this;
        e.save({},
        {
          data: {
            room_id: e.get("roomId")
          },
          success: function(t, i) {
            200 === i.code ? e.trigger("ok", i.data) : e.trigger("fail", i.msg)
          },
          error: function(t, i) {
            e.trigger("fail", i.msg)
          }
        })
      }
    })
  },
  SZXi: function(e, t, i) {
    var s = i("sk80");
    e.exports = Backbone.Model.extend({
      urlRoot: "/api/userinfo/getLoginUserBadge",
      subSave: function(e) {
        var t = this;
        this.get("ajaxing") && this.get("ajaxing").abort(),
        this.set("ajaxing", this.save({},
        {
          type: "get",
          data: {},
          success: function(i, a) {
            t.unset("ajaxing"),
            200 === a.code && (t.set(s.loginInfo.userId, a), e && e(a))
          },
          error: function() {
            t.unset("ajaxing")
          }
        }))
      }
    })
  },
  T0ih: function(e, t, i) {
    var s = i("sk80"),
    a = Backbone.View.extend({
      initialize: function() {
        var e = this;
        this.effType = [1, 2],
        this.effectCtrl = !0,
        this.msgList = {},
        e.clearEffectList(),
        s.event.on("h5EffectInit",
        function(t) {~_.indexOf(e.effType, t.type) && e.loaderH5(t)
        }),
        s.event.on("h5EffectList",
        function(t) {
          e.msgList[t.type] = e.msgList[t.type].concat(t.list),
          e.showEffect()
        }),
        s.event.on("roomMessageControl.effect",
        function(t) {
          e.effectObj && e.effectObj.effectSwitch(t),
          e.clearEffectList(),
          e.effectCtrl = t
        })
      },
      loaderH5: function(e) {
        var t = this;
        s.tools.effectSupport && t.effectCtrl && s.core.loader(["//static.iqiyi.com/js/ppsshow/plugin/XiuEffect.js"],
        function() {
          t.effectObj = window.xiuEffect,
          t.effectObj && t.effectObj.init(e),
          t.effType.splice(_.indexOf(t.effType, e.type), 1),
          t.showEffect()
        })
      },
      clearEffectList: function() {
        var e = this;
        _.forEach(this.effType,
        function(t) {
          e.msgList[t] = []
        })
      },
      showEffect: function() {
        var e = this;
        if (!this.effectObj) return console.log("not init"),
        !1;
        if (!s.tools.effectSupport) return ! 1;
        for (var t in this.msgList) this.msgList.hasOwnProperty(t) && (_.forEach(this.msgList[t],
        function(i) {
          e.effectObj[{
            2 : "appendEntrance",
            1 : "appendGift"
          } [t]](i)
        }), this.msgList[t] = [])
      }
    });
    e.exports = new a
  },
  THsX: function(e, t, i) {
    var s = i("sk80"),
    a = s.ui.ScrollView,
    o = s.tools.hoverDelay,
    n = s.tools.ishow,
    l = i("f6A1"),
    r = i("PiuG"),
    c = i("BLYV"),
    d = i("+zjM");
    e.exports = Backbone.View.extend({
      template: {
        layout: _.template(l.layout)
      },
      events: {
        "click ._buyBadge": "buyBadge",
        "click ._popSearch": "popSearch"
      },
      initialize: function() {
        this.scrollView = new a,
        this.micList = new c,
        this.audienceList = new r,
        this.roomSearchAudience = new d,
        this.tabTop = 35,
        this.distanceBottom = 40,
        this.willLoadMore = !1,
        this.enterUserCtrlPanel = !1,
        this.leaveUserCtrlPanelTimer = 0,
        this.model = new Backbone.Model,
        this.model.set({
          visible: !1,
          already: !1
        }),
        this.listenEvents()
      },
      render: function() {
        this.$el.attr("data-pb-block", "17073104").append(this.template.layout(this.model.toJSON())),
        this.$fake = $("._fake", this.$el),
        this.micList.setElement($(".ol-mic", this.$el)).render(),
        this.audienceList.model.set("already", this.model.get("already")),
        this.audienceList.setElement($(".ol-audience", this.$el)).render(),
        this.scrollView.render(this.$el.find(".scroll-panel")),
        this.scrollView.doms.$track.hide(),
        this.hover()
      },
      buyBadge: function() {
        s.event.trigger("liveGS.show", {
          target: "nobility"
        })
      },
      popSearch: function() {
        this.roomSearchAudience.setElement(this.$el).render()
      },
      hover: function() {
        var e = this;
        o(this.$el, null,
        function() {
          e.leaveUserCtrlPanelTimer && (clearTimeout(e.leaveUserCtrlPanelTimer), e.leaveUserCtrlPanelTimer = 0),
          e.enterUserCtrlPanel = !1,
          e.$el.addClass("board-unfold")
        },
        200,
        function() {
          e.enterUserCtrlPanel || e.$el.removeClass("board-unfold")
        },
        200)
      },
      listenEvents: function() {
        var e = this;
        this.scrollView.on("scroll",
        function(t) {
          var i = $(".ol-audience dt");
          i.offset() && i.offset().top < 37 ? e.$fake.show() : e.$fake.hide();
          var s = e.scrollView.doms.$thumb,
          a = $(".board-tab-cont").height() - parseInt(s.css("height")) - parseInt(s.css("top"));
          0 < t.total && a < e.distanceBottom && !e.willLoadMore && (e.willLoadMore = !0, e.audienceList.loadMore())
        }),
        this.on("hoverEnter",
        function() {
          e.scrollView.doms.$track.show(),
          e.scrollView.update(),
          e.active = !0
        }),
        this.on("hoverLeave",
        function() {
          e.scrollView.doms.$track.hide(),
          e.scrollView.update(),
          e.active = !1
        }),
        this.micList.on("render",
        function() {
          e.scrollView.$el && e.scrollView.$el.length && e.scrollView.update()
        }),
        this.audienceList.on("renderList",
        function(t) {
          e.willLoadMore = !1,
          e.model.get("visible") && e.scrollView.update(),
          e.trigger("updateAudienceNum", t.current_num.total_num)
        }),
        s.event.on("socket.ROOM_ON_LINE_NUMBER",
        function(t) {
          e.model.get("visible") ? e.active || (e.audienceList.$el.find(".u-item").remove(), e.audienceList.model.set({
            page: 1,
            old_page: 1
          }), e.audienceList.loadMore(), e.scrollView.scrollToStart()) : e.trigger("updateAudienceNum", t.data.op_info.total_num)
        }),
        s.event.on("socket.NOBILITY_OR_GUARD_APPLY",
        function(t) {
          e.model.set("already", 0 < ~~t.data.op_userInfo.badge_level),
          !e.active && e.model.get("visible") && (e.audienceList.$el.find(".u-item").remove(), e.audienceList.model.set({
            page: 1,
            old_page: 1
          }), e.audienceList.loadMore(), e.scrollView.scrollToStart())
        }),
        this.model.on("change:visible",
        function(t, i) {
          e.audienceList.model.set("visible", i),
          e.micList.model.set("visible", i)
        }),
        this.model.on("change:already",
        function(t, i) {
          this.get("visible") && $("._buyBadge", e.$el).text((i ? "续费": "开通") + "贵族")
        }),
        s.event.on("roomUserCtrlPanel.enter",
        function() {
          e.enterUserCtrlPanel = !0
        }),
        s.event.on("roomUserCtrlPanel.immediatelyleave",
        function() {
          e.enterUserCtrlPanel = !1,
          e.leaveUserCtrlPanelTimer = setTimeout(function() {
            e.$el.removeClass("board-unfold"),
            e.leaveUserCtrlPanelTimer = 0
          },
          220)
        }),
        n.on("iShowLoginSuccess",
        function(t) {
          e.model.set("already", 0 < ~~t.data.badge.badge_level)
        }),
        n.on("iShowLogout",
        function(t) {
          e.model.set("already", !1)
        })
      }
    })
  },
  TMET: function(e, t, i) {
    var s = i("sk80"),
    a = s.ui.SubConfirm,
    o = s.roomConfig;
    s.event.on("socket.LIVE_FIRBID_REPEAT_START",
    function(e) {
      o.get("roomId") == e.data.op_info.room_id && a({
        content: "<p>" + e.data.op_info.pub_message + "</p>",
        btn: [{
          type: "def",
          clsName: "btn btn-sye",
          text: "确定"
        }]
      })
    })
  },
  TSKP: function(e, t) {
    e.exports = Backbone.Model.extend({
      urlRoot: "/api/room/liveRankList",
      defaults: {
        maxLen: 10
      },
      initialize: function(e) {
        this.set("room_id", e.room_id)
      },
      getData: function() {
        var e = this.get("room_id");
        return this.save(null, {
          data: {
            room_id: e
          },
          success: function(e, t) {
            e.preProcess(t),
            e.trigger("success", e, t)
          },
          error: function(e, t) {
            e.trigger("error", e, t)
          }
        })
      },
      preProcess: function(e) {
        var t, i = e.data,
        s = this.get("maxLen");
        if (i.items || (i.items = []), i.items.length < s) for (t = i.items.length; t < s; t++) i.items.push({
          score: 0,
          user_id: 0,
          user_info: {
            nick_name: "虚位以待",
            user_icon: "//www.iqiyipic.com/common/fix/headicons/male-70.png"
          }
        })
      }
    })
  },
  TWpu: function(e, t) {
    e.exports = {
      dialog: '<div class="xmodal xmodal-truelove-sm md _trueLoveRename"><a href="javascript:;" class="_trueLoveRenameClose"><i class="xiu-ico xiu-ico-off">&#xe63b;</i></a><div class="xmodal-title">提示</div><div class="xmodal-bd"><div class="t-a">恭喜您已开启真爱团，快给真爱团起个名字吧！</div><div class="t-d"><input type="text" placeholder="3个字以内，限中英文、数字" maxlength="6" class="_trueLoveRenameName"></div><div class="t-c"><span class="c-a _trueLoveRenameNameErr"></span></div><div class="xmodal-btn-group"><a class="xmodal-btn xmodal-btn-a xmodal-btn-disabled _trueLoveRenameAct" href="javascript:;">确定</a></div></div></div><div class="dialog-mask"></div>',
      dialogOk: '<div class="xmodal xmodal-truelove-sm _trueLoveRenameOk"><a href="javascript:;" class="_trueLoveRenameClose"><i class="xiu-ico xiu-ico-off">&#xe63b;</i></a><div class="xmodal-title">提示</div><div class="xmodal-bd"><div class="t-a">新名称提交成功</div><div class="t-c">请耐心等待审核，审核通过后将自动为您更新</div><div class="xmodal-btn-group"><a class="xmodal-btn xmodal-btn-a _trueLoveRenameClose" href="javascript:;">确定</a></div></div></div><div class="dialog-mask"></div>'
    }
  },
  TY5e: function(e, t) {
    e.exports = {
      roomReport: '<a href="javascript:;" data-pb-rseat="3"><i class="xiu-ico" title="举报">&#xe656;</i>举报</a>',
      roomReportContent: '<div class="group"><span class="label">违规证据：</span><img src="<%= pic_base64 %>" width="160" height="90"></div><div class="group _typeFilter"><span class="label">违规类型：</span><span class="radio-sya radio-sya-checked" data-type="1"></span><label data-type="1">衣着暴露</label><span class="radio-sya ml15" data-type="2"></span><label data-type="2">非法行为（涉政、色情表演等）</label><span class="radio-sya ml15" data-type="3"></span><label data-type="3">其他低俗擦边行为</label></div><div class="group"><span class="label">举报内容：</span><div class="input-sya"><textarea placeholder="请尽可能详细描述举报原因" id="_reportContent"></textarea></div><p class="error-msg"></p></div><div class="group concat"><span class="label">联系方式：</span><label>手机：</label><span class="input-sya"><input type="text" value="" id="_telText"></span><label class="ml15">QQ：</label><span class="input-sya"><input type="text" value="" id="_qqText"></span></div><div class="group concat"><span class="label">12318举报：</span><a href="//jb.ccm.gov.cn/" target="_blank">点击举报</a></div><div class="dialog-act"><a class="btn btn-sye _bOk" href="javascript:;" id="_reportBtn">确定</a><a class="btn btn-syj _def" href="javascript:;">取消</a></div>',
      roomReportType: '<span class="label">违规类型：</span><span class="radio-sya <%=type === 1 ? "radio-sya-checked": ""%>" data-type="1"></span><label data-type="1">衣着暴露</label><span class="radio-sya ml15 <%=type === 2 ? "radio-sya-checked": ""%>" data-type="2"></span><label data-type="2">非法行为（涉政、色情表演等）</label><span class="radio-sya ml15 <%=type === 3 ? "radio-sya-checked": ""%>" data-type="3"></span><label data-type="3">其他低俗擦边行为</label>'
    }
  },
  TbCn: function(e, t) {
    e.exports = Backbone.Model.extend({
      defaults: {
        shout: !1,
        locked: !1,
        effect: !0,
        starlight: !0
      },
      initialize: function() {},
      negationProperty: function(e) {
        this.set(e, !this.get(e))
      }
    })
  },
  Tqf4: function(e, t) {
    e.exports = '<li class="msg"><div class="row"><%=frontLevels%><a class="name" href="javascript:void(0);" node-type="userHoverTip" data-user_id="<%=user_id%>"><%-nick_name%></a><span class="nr">送出<%=starNum%>个<img class="i-gift" src="//www.iqiyipic.com/ppsshow/fix/2.0/img/live_ii/chat/xingguang.png" title="星光"></span></div></li>'
  },
  U8fk: function(e, t, i) {
    "use strict";
    var s = i("sk80"),
    a = i("NKVl"),
    o = i("huCk"),
    n = i("/gYZ"),
    l = i("cB7Y"),
    r = i("WfQT"),
    c = i("E1my"),
    d = s.tools.diffPlatform;
    e.exports = Backbone.View.extend({
      initialize: function() {
        var e = this;
        this.model = new a,
        this.model.on("ok",
        function() {
          e.dialogOpen()
        }),
        $(window).on("resize",
        function() {
          e.updatePos()
        }),
        s.roomConfig && s.roomConfig.on("change:onlineAnchorInfo",
        function(t, i) {
          e.datas.anchorId = i.user_id
        }),
        s.event.on("truelove.dialogOpen",
        function(t) {
          e.datas.anchorId = t,
          e.getFansInfo()
        }),
        s.event.on("truelove.privilegeJoin",
        function() {
          e.clickTab(null, "privilege")
        }),
        s.event.on("truelove.privilegeDotRemove",
        function() {
          e.privilegeDotRemove()
        }),
        s.event.on("socket.TRUELOVE_PRIVILEGE",
        function(t) {
          s.event.trigger("roomMessageChat.append", e.template.msg(t.data.op_info))
        })
      },
      events: {
        "click ._trueLoveDialogClose": "clickClose",
        "click ._trueLoveTab li:not(.active)": "clickTab",
        "click ._trueLoveDialogIntro": "clickIntro"
      },
      datas: {
        anchorId: 0,
        fansInfo: null,
        isFan: 0
      },
      template: {
        wrap: _.template(o.wrap),
        msg: _.template(o.msg)
      },
      getFansInfo: function() {
        var e = {
          anchor_id: this.datas.anchorId
        },
        t = /QiXiu\/(\d+\.\d+)/,
        i = navigator.userAgent.match(t) && +navigator.userAgent.match(t)[1];
        s.env.isPcnClient && (e.platform = d.pf + "_" + d.p + "_" + d.p1, e.version = i),
        this.model.getData(e)
      },
      dialogOpen: function() {
        var e = this.model.get("data");~~e.fans_info.is_first_guard && s.event.trigger("truelove.dialog2Open", {
          tpl: "guard",
          mode: "auto",
          expireTime: e.fans_info.expire_time,
          list: e.img
        }),
        this.showDialog(e)
      },
      showDialog: function(e) {
        var t = this.$el,
        i = e.fans_info.is_owner = ~~e.fans_info.is_owner,
        s = e.fans_info.is_fan = ~~e.fans_info.is_fan,
        a = e.fans_info.e_msg || "",
        o = i || s && !a ? "task": "privilege";
        e.fans_info.e_msg = a,
        this.$el.html(this.template.wrap(e.fans_info)),
        this.doms = {
          $wrap: $("._trueLoveDialogWrap", t),
          $main: $("._trueLoveDialogMain", t),
          $tabs: $("._trueLoveTab li", t),
          $privilegeDot: $("._trueLovePrivilegeDot", t)
        },
        this.taskView = new n({
          el: "._trueLoveDialogCont"
        }),
        this.rankView = new l({
          el: "._trueLoveDialogCont",
          anchorId: this.datas.anchorId
        }),
        this.shopView = new r({
          el: "._trueLoveDialogCont",
          anchorId: this.datas.anchorId,
          fansName: e.fans_info.fans_name,
          action: e.fans_info.action
        }),
        this.privilegeView = new c({
          el: "._trueLoveDialogCont",
          anchorId: this.datas.anchorId,
          parentEl: t
        }),
        this.clickTab(null, o),
        this.updatePos(),
        this.trigger("render")
      },
      updatePos: function() {
        if (this.doms && this.doms.$wrap) {
          var e = this.doms.$wrap,
          t = e.outerWidth(),
          i = e.outerHeight(),
          s = $(window),
          a = s.width(),
          o = s.height(),
          n = s.scrollTop();
          e.css({
            top: (o - i) / 2 + n,
            left: (a - t) / 2
          })
        }
      },
      clickClose: function() {
        this.$el.empty(),
        s.event.trigger("truelove.close")
      },
      clickTab: function(e, t) {
        var i = e && $(e.currentTarget),
        s = (t = t || i.data("tab"), this.doms.$tabs),
        a = this.model.get("data");
        switch ((e ? i: s.filter("[data-tab=" + t + "]")).addClass("active").siblings().removeClass("active"), t) {
        case "task":
          this.taskView.initData(a);
          break;
        case "rank":
          this.rankView.init();
          break;
        case "shop":
          this.shopView.init();
          break;
        default:
          this.privilegeView.initData(a.fans_info)
        }
      },
      clickIntro: function() {
        s.event.trigger("truelove.intro")
      },
      privilegeDotRemove: function() {
        this.doms.$privilegeDot.remove()
      }
    })
  },
  UDAL: function(e, t) {
    e.exports = Backbone.Model.extend({})
  },
  UHAW: function(e, t, i) {
    "use strict";
    e.exports = function(e) {
      this.index = e.index || 0,
      this.speed = e.speed || 60,
      this.maxSpeed = e.maxSpeed || 40,
      this.minSpeed = e.minSpeed || 250,
      this.base = e.base || 3,
      this.totals = e.totals || 12,
      this.length = e.length || 8,
      this.prize = -1;
      var t = this,
      i = t.speed,
      s = null,
      a = 0;
      this.start = function() {
        var o, n, l;
        o = t.index,
        n = t.length,
        l = t.index,
        n - 1 < (o += 1) && (o = 0),
        e.moveTo && e.moveTo(l, o),
        t.index = o,
        (a += 1) > this.totals && this.prize === this.index ? (clearTimeout(s), a = 0, i = this.speed, this.prize = -1, e.callback && e.callback()) : (a < this.base ? i -= 10 : a > this.totals ? i += 60 : i += 30, i = i < this.maxSpeed ? this.maxSpeed: i > this.minSpeed ? this.minSpeed: i, s = setTimeout(function() {
          t.start()
        },
        i))
      }
    }
  },
  Uhh8: function(e, t) {
    e.exports = '<li class="msg"><div class="row"><%=op_userInfo.iconHtml%><a node-type="userHoverTip" data-user_id="<%=op_userInfo.user_id%>" data-nick_name="<%-op_userInfo.nick_name%>" class="name" href="javascript:void(0);"><%-op_userInfo.nick_name%></a><span class="nr"><%=isCurrentAnchor ? "送出" : "送给"%></span><%if(!isCurrentAnchor){%><%=to_userInfo.iconHtml%><a node-type="userHoverTip" data-user_id="<%=to_userInfo.user_id%>" data-nick_name="<%-to_userInfo.nick_name%>" class="name" href="javascript:void(0);"><%-to_userInfo.nick_name%></a><%}%><img class="i-gift" src="<%=op_info.pic%>" title="<%=op_info.name%>"><span class="gift-num">×<em><%=op_info.num%></em></span></div></li>'
  },
  Uk3S: function(e, t) {
    e.exports = Backbone.Model.extend({
      urlRoot: "/api/userinfo/getVisitHistory",
      initialize: function() {},
      subSave: function(e) {
        var t = this;
        this.ajaxObj && this.ajaxObj.abort();
        var i = {
          type: "post",
          data: {},
          cache: !1,
          success: function(e, i) {
            t.trigger("success", i)
          },
          error: function(e, i) {
            t.trigger("error", i)
          }
        };
        this.ajaxObj = this.save(null, i)
      }
    })
  },
  Ukq4: function(e, t, i) {
    var s = i("sk80"),
    a = window._room_config || {},
    o = Backbone.Model.extend({
      defaults: {
        loginUserId: s.loginInfo.userId,
        livePlatform: a.room_info.live_platform || 1,
        liveId: 0 | a.room_info.live_id,
        roomId: a.room_info.room_id,
        roomInfo: a.room_info,
        roomType: a.room_info.room_type,
        roomOwner: a.room_info.manager.user_id,
        roomOwnerNickName: a.room_info.manager.nick_name,
        chatId: a.room_info.room_id,
        onlineAnchorInfo: a.anchor_info,
        sendGiftAnchorInfo: {
          userId: a.anchor_info.user_id,
          nickName: a.anchor_info.nick_name
        },
        eventsLists: a.activity_info,
        endingMsg: a.room_info.ending_msg,
        welcomeMsg: a.room_info.welcome_msg
      }
    });
    e.exports = new o
  },
  UnAy: function(e, t, i) {
    var s = i("sk80"),
    a = i("09cZ"),
    o = i("wIHE");
    e.exports = Backbone.View.extend({
      initialize: function() {
        var e = this;
        this.template = {
          balance: _.template(a.balance),
          chatMsg: _.template(a.chatMsg),
          giftTip: _.template(a.giftTip)
        },
        this.model = new o,
        this.model.on("success",
        function(e) {
          200 === e.code && s.event.trigger("userAccount", e.data)
        }),
        this.render(),
        this.giftTips = [],
        this.giftTipsLock = 0,
        s.event.on("getUserAccount.refreshAccount",
        function() {
          e.model.subSave()
        }),
        s.event.on("userAccount",
        function(t) {
          e.showBalance(t)
        }),
        s.event.on("socket.LUCKY_GIFT",
        function(t) {
          var i = t.data.op_info;
          console.log("socket.LUCKY_GIFT", i),
          s.event.trigger("roomMessageChat.append", e.template.chatMsg(i)),
          i.user_id.toString() === s.loginInfo.userId && (e.giftTips.push(i), e.giftTipsLock || e.showTips())
        })
      },
      render: function() {
        this.$el.prepend(this.template.balance),
        this.setElement(this.$el.find(".gift-account"))
      },
      noLogin: function() {
        this.$el.find("span").remove()
      },
      events: {
        'click [data-js-dom="recharge"]': "recharge"
      },
      recharge: function(e) {
        s.event.trigger("quickPayment.show")
      },
      showBalance: function(e) {
        this.$el.find('[data-js-dom="balanceZ"]').length || this.$el.prepend('<span class="yue">余额：<em data-js-dom="balanceD"></em> 奇豆<div class="bgb-split"></div></span><span class="qidou"><em data-js-dom="balanceZ"></em> 钻石<div class="bgb-split"></div></span>'),
        this.$el.find('[data-js-dom="balanceZ"]').text(e.diamond_balance),
        this.$el.find('[data-js-dom="balanceD"]').text(e.bean_balance)
      },
      showTips: function() {
        var e = this,
        t = this.giftTips.shift(),
        i = $(this.template.giftTip({
          num: t.win_money
        })),
        s = this.$el.find("[data-js-dom=balanceZ]"),
        a = s.outerWidth(),
        o = s.outerHeight(),
        n = s.offset().top,
        l = s.offset().left;
        this.giftTipsLock = 1,
        i.appendTo("body").css({
          top: n + o + 10 + 3,
          left: l - (i.outerWidth() / 2 - a / 2)
        }),
        setTimeout(function() {
          i.remove(),
          e.giftTips.length ? e.showTips() : e.giftTipsLock = 0
        },
        3e3)
      }
    })
  },
  V78F: function(e, t) {
    e.exports = {
      layout: '<div class="panel-online-search _searchBar" style="display: block;"><div class="pos-btn-group"><div class="pos-search _search"><input type="text" class="input-search _input" placeholder="请输入用户秀场ID"><i class="xiu-ico btn-search _btn" data-pb-rseat="3">&#xe649;</i></div><a href="javascript:;" class="pos-search-cancel _cancel">取消</a></div><div class="pos-search-result _result"></div></div>',
      error: '<p class="sorry"><%=error%></p>',
      success: '<div class="pos-search-result-tit">搜索结果如下</div><div class="pos-search-usr"><a href="javascript:;" node-type="userHoverTip" data-user_id="<%=user_id%>" data-nick_name="<%-nick_name%>"><%-nick_name%></a></div>'
    }
  },
  V9MS: function(e, t, i) {
    "use strict";
    var s = i("sk80"),
    a = s.roomConfig,
    o = s.ui.Dialog,
    n = i("zY0T");
    s.flash = s.flash || {},
    s.flash.changeRandomRoom = function() {
      var e = a.get("roomId"),
      t = new n;
      t.on("ok",
      function(e) {
        location.href = "/room/" + e.room_id
      }),
      t.on("fail",
      function(e) {
        new o({
          title: "提示",
          content: e,
          btn: [{
            clsName: "btn-sye",
            type: "ok",
            text: "确定"
          }]
        })
      }),
      t.getData({
        excluded_room_ids: e
      })
    }
  },
  "Vu/R": function(e, t) {
    e.exports = {
      medal: '<div class="info-anchor-medal"><i class="xiu-ico info-anchor-medal-prev _anchorMedalPrev disabled" title="上一页">&#xe62a;</i><div class="info-anchor-medal-ctrl _anchorMedalCtrl"><ul class="info-anchor-medal-list _anchorMedalList"></ul></div><i class="xiu-ico info-anchor-medal-next _anchorMedalNext" title="下一页">&#xe627;</i></div>',
      medalItem: '<% _.each(items, function(v) { %><li class="info-anchor-medal-item" data-medal-id="<%= v.medal_id %>"><img src="<%= v.medal_pic_24_24 %>"></li><% }); %>',
      medalTipWrap: '<div class="info-anchor-medal-tip info-tip _anchorMedalTip"></div>',
      medalTip: '<i class="i-arr"><em></em></i><h6><%= medal_name %></h6><p><% if (condition) { %>点亮条件：<%= condition %><br><% } %>当前进度：<em class="imp"><%= now_progress %></em> / <%= all_progress %><br><% if (had_got) { %>到期时间：<%= useful_days > 7300 ? "永久" : expire_time %><% } else { %>点亮后可<% if(useful_days > 7300) {%>永久佩戴<% } else {%>佩带<%= useful_days %>天<% } %><% } %></p>'
    }
  },
  W6DJ: function(e, t, i) {
    var s = i("sk80"),
    a = s.roomConfig,
    o = s.event,
    n = s.ui.userIcon,
    l = i("SPA7"),
    r = i("CyKM"),
    c = i("dHyl"),
    d = i("DPe9");
    e.exports = Backbone.View.extend({
      model: new r,
      template: {
        item: _.template(d.item)
      },
      initialize: function() {
        this.model.set("room_id", a.get("roomId")),
        this.roomMessageList = new l({
          max: 100
        }),
        this.firstRender = !0,
        this.listenEvents()
      },
      render: function() {
        this.firstRender ? (this.roomMessageList.setElement(this.el).render(), ~~a.get("liveId") && this.model.getData(), this.firstRender = !1) : (this.roomMessageList.setElement(this.el), this.roomMessageList.render())
      },
      listenEvents: function() {
        var e = this;
        this.model.on("success",
        function(t, i) {
          if (200 === i.code) {
            var s = [];
            _.each(i.data,
            function(t) {
              t.user_id = t.user_id.toString(),
              t.frontLevels = n.oneIcon(t),
              t.content = _.escape(t.content),
              t.content = c.transformText(t.content),
              s.push(e.template.item(t))
            }),
            e.roomMessageList.render(s),
            e.trigger("render", {
              list: s
            })
          }
        }),
        this.model.on("change:visible",
        function(t, i) {
          e.roomMessageList.willRender(i),
          i && o.trigger("roomMessageChat.render")
        }),
        o.on("roomMessageChat.append",
        function(t) {
          e.roomMessageList.trigger("appendItem", t, e.model.get("visible"))
        }),
        o.on("roomMessageControl.clearMessage",
        function() {
          e.model.get("visible") && e.roomMessageList.empty()
        }),
        o.on("roomMessageControl.locked",
        function(t) {
          e.model.get("visible") && e.roomMessageList.lock(t)
        })
      },
      setVisible: function(e) {
        this.model.set("visible", e)
      },
      updateScroll: function() {
        this.roomMessageList.updateScroll()
      }
    })
  },
  WBms: function(e, t, i) {
    "use strict";
    e.exports = Backbone.Model.extend({
      urlRoot: "/api/fans/rename",
      getData: function(e) {
        var t = this;
        this.save({},
        {
          data: e || {},
          success: function(e, i) {
            200 === i.code ? t.trigger("ok") : t.trigger("fail", i.msg)
          }
        })
      }
    })
  },
  WCsa: function(e, t) {
    e.exports = '<li data-js-dom="guanzhu" data-auto-hide="0"><a class="nav-menu-item" href="javascript:void(0);"><i class="xiu-ico xiu-ico-liked">&#xe636;</i><span>关注<em class="num" style="display: none"></em></span></a></li>'
  },
  WcVB: function(e, t) {
    e.exports = Backbone.Model.extend({
      urlRoot: "/api/web/roomConfig",
      getData: function(e) {
        var t = this;
        this.save({},
        {
          data: e || {},
          success: function(e, i) {
            200 === i.code && t.trigger("ok")
          }
        })
      }
    })
  },
  WfQT: function(e, t, i) {
    "use strict";
    var s = i("sk80"),
    a = s.ui.ScrollView,
    o = s.ui.Toast,
    n = i("v9h0"),
    l = i("pFBy"),
    r = i("w66R"),
    c = i("IwNt"),
    d = i("PVRn"),
    u = i("UHAW");
    e.exports = Backbone.View.extend({
      initialize: function(e) {
        var t = this;
        this.datas.buyInfo.anchor_id = e.anchorId,
        this.datas.fansName = e.fansName,
        this.datas.action = e.action,
        this.model = {
          store: new n,
          buy: new l,
          getFansProduct: new r,
          fansDraw: new c
        },
        this.model.store.on("ok",
        function() {
          t.shop()
        }),
        this.model.buy.on("ok",
        function() {
          t.datas.disabled = 0,
          t.buyOk()
        }),
        this.model.buy.on("fail",
        function(e) {
          t.datas.disabled = 0,
          t.showToast(e, 1)
        }),
        this.model.getFansProduct.on("ok",
        function() {
          t.lotteryProduct()
        }),
        this.model.fansDraw.on("ok",
        function() {
          t.lotteryOk()
        }),
        this.model.fansDraw.on("fail",
        function(e) {
          t.doms.$btn.removeClass("disabled"),
          t.showToast(e)
        })
      },
      events: {
        "click ._trueLoveShopList li": "clickProduct",
        "click ._trueLoveShopReturn": "clickReturn",
        "click ._trueLoveShopMinus:not(.disabled),._trueLoveShopPlus:not(.disabled)": "changeNum",
        "keyup ._trueLoveShopNum": "checkNum",
        "click ._trueLoveShopBuy:not(.xmodal-btn-disabled)": "clickBuy",
        "click ._trueLoveLotteryBtn:not(.disabled)": "clickLottery"
      },
      datas: {
        buyInfo: {
          anchor_id: 0,
          product_id: 0,
          num: 1
        },
        fansName: "",
        userScore: 0,
        product: null,
        disabled: 0,
        lotteryPid: "0"
      },
      template: {
        shop: _.template(d.shop),
        product: _.template(d.product),
        lottery: _.template(d.lottery)
      },
      init: function() {
        this.model.store.getData({
          anchor_id: this.datas.buyInfo.anchor_id
        })
      },
      shop: function() {
        var e = this.model.store.get("data");
        this.datas.userScore = e.user_score || 0,
        e.fansName = this.datas.fansName,
        e.isJoin = void 0 === e.user_score ? 0 : 1,
        -1 === this.datas.action.indexOf("60057?") && (e.items = e.items.slice(0, 1)),
        this.$el.html(this.template.shop(e)),
        this.scrollView && this.scrollView.destroy(),
        this.scrollView = new a,
        this.scrollView.render($(".scroll-panel", this.$el))
      },
      clickProduct: function(e) {
        var t = $(e.currentTarget),
        i = t.index(),
        s = ~~t.data("pid");
        this.datas.product = null,
        s ? this.detail(i) : this.lottery()
      },
      detail: function(e) {
        var t = this.$el,
        i = this.model.store.get("data"),
        s = i.items[e];
        s.fansName = this.datas.fansName,
        s.isJoin = void 0 === i.user_score ? 0 : 1,
        s.user_score = this.datas.userScore,
        this.datas.buyInfo.product_id = s.product_id,
        this.datas.buyInfo.num = 1,
        this.datas.product = s,
        this.$el.html(this.template.product(s)),
        this.doms = {
          $btn: $("._trueLoveShopBuy", t),
          $total: $("._trueLoveShopTotal", t),
          $minus: $("._trueLoveShopMinus", t),
          $plus: $("._trueLoveShopPlus", t),
          $num: $("._trueLoveShopNum", t),
          $userScore: $("._trueLoveShopUserScore", t),
          $stock: $("._trueLoveShopStock", t)
        },
        this.scrollView && this.scrollView.destroy(),
        this.scrollView = new a,
        this.scrollView.render($(".scroll-panel", this.$el))
      },
      clickReturn: function() {
        this.init()
      },
      changeNum: function(e) {
        var t = $(e.currentTarget).data("type"),
        i = ~~this.doms.$num.val();
        "plus" === t ? i += 1 : i -= 1,
        this.checkNum(null, i)
      },
      checkNum: function(e, t) {
        var i = e && $(e.currentTarget),
        s = (t = e ? ~~i.val() : t, this.doms.$minus),
        a = this.doms.$plus,
        o = ~~this.datas.product.max_num,
        n = ~~this.datas.product.stock;
        s.removeClass("disabled"),
        a.removeClass("disabled"),
        t <= 1 ? (t = 1, s.addClass("disabled")) : o <= t && (t = o, a.addClass("disabled")),
        n && 1 !== o || (t = 1, s.addClass("disabled"), a.addClass("disabled")),
        this.datas.buyInfo.num = t,
        this.doms.$num.val(t),
        this.total()
      },
      total: function() {
        var e, t = this.datas.product.price;
        e = this.datas.buyInfo.num * t,
        this.doms.$total.html(e)
      },
      clickBuy: function() {
        this.datas.disabled || (this.datas.disabled = 1, this.model.buy.getData(this.datas.buyInfo))
      },
      buyOk: function() {
        var e = this.model.buy.get("data");
        e.tpl = "buyOk",
        s.event.trigger("truelove.dialog2Open", e),
        this.updateUserScore(),
        this.datas.product.stock -= this.datas.buyInfo.num,
        this.doms.$stock.html(this.datas.product.stock),
        this.doms.$num.val(1),
        this.checkNum(null, 1)
      },
      updateUserScore: function(e) {
        "lottery" === e ? this.datas.userScore = this.model.fansDraw.get("data").user_score: this.datas.userScore -= this.datas.buyInfo.num * this.datas.product.price,
        this.doms.$userScore.html(this.datas.userScore)
      },
      showToast: function(e, t) {
        var i = t ? 10 : -60;
        o({
          selector: this.doms.$btn,
          msg: e,
          offsetTop: i
        })
      },
      lottery: function() {
        void 0 !== this.model.store.get("data").user_score ? this.model.getFansProduct.getData({
          anchor_id: this.datas.buyInfo.anchor_id
        }) : s.event.trigger("truelove.dialog2Open", {
          tpl: "msg",
          msg: "要先加入本团才可以参与抽奖喔~"
        })
      },
      lotteryProduct: function() {
        var e = this,
        t = this.$el,
        i = this.model.getFansProduct.get("data");
        this.datas.userScore = i.user_score,
        this.$el.html(this.template.lottery(i)),
        this.doms = {
          $lotteryProduct: $("._trueLoveLotteryProduct li", t),
          $btn: $("._trueLoveLotteryBtn", t),
          $btnTip: $("._trueLoveLotteryBtnTip", t),
          $userScore: $("._trueLoveShopUserScore", t)
        },
        this.lotteryView = null,
        this.lotteryView = new u({
          moveTo: function(t, i) {
            e.doms.$lotteryProduct.eq(t).removeClass("selected"),
            e.doms.$lotteryProduct.eq(i).addClass("selected")
          },
          callback: function() {
            setTimeout(_.bind(e.lotteryResult, e), 100)
          }
        })
      },
      clickLottery: function() {
        this.doms.$btn.addClass("disabled"),
        this.model.fansDraw.getData({
          anchor_id: this.datas.buyInfo.anchor_id
        }),
        this.lotteryView.start()
      },
      lotteryOk: function() {
        var e = this.model.fansDraw.get("data").product || {};
        this.lotteryPrize(e.product_id || "0"),
        -1 === this.lotteryView.prize && this.lotteryPrize("0"),
        this.updateUserScore("lottery")
      },
      lotteryPrize: function(e) {
        var t = this,
        i = this.model.getFansProduct.get("data").products;
        this.datas.lotteryPid = e,
        _.each(i,
        function(i, s) {
          i.product_id === e && (t.lotteryView.prize = s)
        })
      },
      lotteryResult: function() {
        var e = ~~this.model.getFansProduct.get("data").consume_score,
        t = this.model.fansDraw.get("data");~~t.user_score < e || !~~t.lottery_count ? (this.doms.$btn.addClass("disabled"), this.doms.$btnTip.html(~~t.lottery_count ? "积分不足": "当日机会已用完")) : this.doms.$btn.removeClass("disabled"),
        "0" === this.datas.lotteryPid ? this.showNull() : this.showPrize()
      },
      showNull: function() {
        s.event.trigger("truelove.dialog2Open", {
          tpl: "msg",
          msg: "里面竟然什么也没有"
        })
      },
      showPrize: function() {
        var e = this.model.fansDraw.get("data").product,
        t = ~~e.is_car,
        i = ~~e.medal,
        a = ~~e.vip,
        o = ~~e.fragment;
        s.event.trigger("truelove.dialog2Open", {
          tpl: "buyOk",
          product_url: e.product_img,
          product_name: e.name,
          num: e.num,
          msg: t || i ? "已为您激活使用": a ? "已在当前账号生效": o ? "请前往活动页兑换": "礼品已放入背包"
        })
      }
    })
  },
  WoFH: function(e, t) {
    e.exports = {
      wrapper: '<div class="chat-enterroom"></div>',
      welcome: '<div class="msg"><span class="nr">欢迎</span><%=frontIcon%><em class="name"><%-op_userInfo.nick_name%></em><span class="nr">进入房间</span></div>'
    }
  },
  WqzX: function(e, t, i) {
    "use strict";
    i("r0hV"),
    i("XRe3"),
    i("EnQT"),
    i("17u4"),
    QX.env.isPcnClient ? i("1NS6") : i("+TA2")
  },
  XRe3: function(e, t, i) {
    var s = QX.roomConfig,
    a = new(i("sK8T"))({
      el: ".room-action"
    });
    a.on("fireRPG",
    function(e) {
      v.initCanvas(e)
    });
    var o = new(i("UnAy"))({
      el: "#giftBottom"
    });
    QX.roomConfig.on("change:screenWidth",
    function(e, t) {
      $.browser.msie && $.browser.version < 9 || (1600 < t ? a.setGiftNumByLine(9) : 1180 < t && t <= 1600 ? a.setGiftNumByLine(7) : t <= 1180 && a.setGiftNumByLine(5))
    }),
    QX.roomConfig.set("screenWidth", document.body.scrollWidth),
    QX.event.on("socket.SEND_GIFT",
    function(e) {
      c.model.unset("flashData", {
        silent: !0
      }).set("flashData", e.data)
    }),
    ISHOW.on("iShowLoginSuccess",
    function(e) {
      200 === e.code && (QX.event.trigger("userAccount", e.data.account), r.trigger("getMyStars", !0))
    }),
    ISHOW.on("iShowLogout",
    function(e) {
      o.noLogin(),
      r.trigger("getMyStars", !1)
    }),
    new(i("vCPS"))({
      el: ".room-action",
      siteBody: ".site-body"
    });
    var n = i("khZ/"),
    l = i("cG9a"),
    r = new n({
      el: ".room-video"
    });
    r.model.set({
      roomId: QX.roomConfig.get("roomId"),
      userId: QX.roomConfig.get("onlineAnchorInfo").user_id,
      num: 1
    },
    {
      silent: !0
    }),
    QX.roomConfig.on("change:onlineAnchorInfo",
    function(e, t) {
      r.model.set({
        userId: t.user_id
      }),
      r.fetchStarPool(t.user_id)
    }),
    r.on("effect",
    function() {
      new l({
        isGray: _room_config.gray_config.room_player_gray.is_effective_gray
      })
    }),
    QX.event.on("socket.SEND_STAR",
    function(e) {
      r.model.set("currentNum", e.data.op_info.current_star_pool_num),
      r.trigger("sendStar", e)
    }),
    QX.event.on("socket.FETCH_STAR",
    function(e) {
      r.model.set("myStar", 0 | e.data.op_info.star_num)
    });
    var c = new(i("o3Nh"))({
      isGray: _room_config.gray_config.room_player_gray.is_effective_gray
    });
    QX.event.on("socket.PERSONAL_GIFT_SHOW",
    function(e) {
      c.model.unset("flashData", {
        silent: !0
      }).set("flashData", e.data)
    });
    var d = new(i("is3A"))({
      isGray: _room_config.gray_config.room_player_gray.is_enter_effective_gray
    });
    QX.event.on("socket.ON_OFF_LINE",
    function(e) {
      d.model.unset("flashData", {
        silent: !0
      }).set("flashData", e.data)
    });
    var u = i("8x0B");
    QX.event.on("socket.ANCHOR_VIOLATION",
    function(e) {
      u.punishInfo(e)
    });
    var p = i("/ahc");
    QX.event.on("socket.ANCHOR_WARNING",
    function(e) {
      p.warnInfo(e)
    }),
    QX.roomConfig.set("liveTime", window._room_config.live_info.live_time),
    QX.roomConfig.set("totalNum", window._room_config.room_info.room_user_stat.total_num),
    new(i("8B2D"))({
      el: "._anchorRoomInfo"
    }),
    new(i("IeNx"))({
      el: "._anchorFace",
      anchorName: "._anchorName",
      anchorFollow: "._anchorFollow"
    }),
    new(i("FEl0"))({
      el: "._anchorMedal"
    });
    var h = new(i("aH3g"))({
      el: "._anchorRoomReport"
    });
    new(i("PN0l"))({
      el: "._anchorRoomShare"
    }),
    new(i("S27X"))({
      el: "._anchorRoomDownload"
    }),
    new(i("KC53"))({
      el: "._anchorSign",
      siteBody: ".site-body"
    }),
    new(i("BGQu"))({
      el: "._anchorRoomTitle"
    }),
    i("V9MS"),
    new(i("9JyU"))({
      el: "body"
    }),
    new(i("YYB2")),
    0 < window._room_config.activity_info.topic_play.pk_boss_status && QX.core.loader(["//static.iqiyi.com/js/ppsshow/modules/events/year2018March/index.js", "//static.iqiyi.com/css/ppsshow/2.0/style/theme_money_challenge.css"],
    function() {
      console.log("2018march loaded")
    });
    var m = new(i("4cuc"))({
      el: ".room-video",
      roomId: s.get("roomId")
    });
    QX.event.on("socket.STAR_TREASUREBOX",
    function(e) {
      m.pushItem({
        lifeTime: 18e4,
        params: e.data.op_info
      })
    }),
    QX.event.on("roomGameEgg.pushItem",
    function(e) {
      m.pushItem(e)
    }),
    new(i("AE+2"))({
      el: "body"
    });
    var f = i("HWW9");
    QX.event.on("quickPayment.show",
    function(e) {
      f.init(e)
    });
    var g = new(i("kSyq"))({
      el: ".room-video",
      length: 3
    });
    QX.event.on("socket.SEND_GIFT",
    function(e) {
      if (e.data.op_info.is_all_platform_gift && e.data.to_userInfo.user_id != s.get("onlineAnchorInfo").user_id) return ! 1;
      g.push(e)
    });
    var v = new(i("z01J"))({
      el: ".block-gift"
    });
    v.on("open",
    function() {
      var e = $(".room-action").offset().top,
      t = $(window).height(),
      i = Math.max(e + 101 - t, 0),
      s = 578 - (e - i);
      0 < s && $(".draw-gift-box").css("top", Math.max(75 - s, 0)),
      $("html, body").scrollTop(i).addClass("hidden-overflow"),
      $(".block-gift-top").addClass("block-gift-top-indexup"),
      $(".room-action").addClass("room-action-draw")
    }).on("close",
    function() {
      $("html, body").removeClass("hidden-overflow"),
      $(".block-gift-top").removeClass("block-gift-top-indexup"),
      $(".room-action").removeClass("room-action-draw")
    }),
    a.listenTo(v.model, "change:num",
    function(e, t) {
      this.trigger("rpgNumChange", t)
    }),
    a.listenTo(v.model, "change:nodeList",
    function(e, t) {
      this.trigger("rpgNodeListChange", t)
    }),
    a.on("closeCanvas",
    function() {
      v.trigger("closeCanvas")
    }),
    $(".room-video").append('<div style="position: absolute;left: 12px;bottom: 40px;"><img src="//www.iqiyipic.com/ppsshow/fix/2.0/img/logo_qixiu.png" width="66" height="30"></div>'),
    new(i("dJB4")),
    i("CC+k"),
    new(i("/TCn"))({
      el: ".video-container"
    }),
    h.on("getBase64",
    function(e) {
      e(window.PlayerSDK.pullreportpng())
    }),
    ISHOW.on("loginAct",
    function(e) {
      window.PlayerSDK.event.emit("loginAct")
    }),
    ISHOW.on("iShowLogout",
    function(e) {
      window.PlayerSDK.event.emit("iShowLogout")
    }),
    QX.event.on(["socket.LIVE_START", "socket.LIVE_STOP", "socket.MIC_SEQUENCE_PULL_IN", "socket.MIC_SEQUENCE_PULL_OUT", "socket.MIC_PULL_IN", "socket.MIC_PULL_OUT", "socket.MIC_SEQUENCE_LIFT"],
    function(e) {
      switch (e.data.msgType) {
      case 100001:
        s.set("liveId", +e.data.liveInfo.live_id),
        s.get("loginUserId") != parseInt(e.user_id) && window.PlayerSDK.online(e.data.op_info),
        s.get("loginUserId") == e.data.to_userInfo.user_id ? ISHOW.trigger("showMedalAnchor") : ISHOW.trigger("showMedalUser");
        break;
      case 100002:
        s.set("liveId", 0),
        s.get("loginUserId") == e.data.to_userInfo.user_id ? ISHOW.trigger("hideMedalAnchor") : ISHOW.trigger("hideMedalUser");
        break;
      case 100005:
        s.get("roomOwner") == e.data.to_userInfo.user_id && s.loginUserId == s.get("roomOwner") ? ISHOW.trigger("changeMedalAnchor", e.data) : ISHOW.trigger("changeMedalUser", e.data),
        s.set("onlineAnchorInfo", e.data.to_userInfo)
      }
      window.PlayerSDK.changeMic(e.data.op_info)
    }),
    QX.event.on("socket.GIFT_VIRTUAL",
    function(e) {
      window.PlayerSDK.virtualGift(e.data.op_info)
    }),
    QX.event.on(["socket.CONNECT_MIC_REQUEST", "socket.CONNECT_MIC_ANCHOR_RECEIVE", "socket.CONNECT_MIC_STREAM_STATUS"],
    function(e) {
      window.PlayerSDK.streamChange(e.data.op_info)
    }),
    new(i("Q5+b"))(s).on("SHOUT",
    function(e) {
      window.PlayerSDK.sendVarietyMsg(e)
    }),
    $(window).on("resize",
    function() {
      QX.roomConfig.set("screenWidth", document.body.scrollWidth),
      c.trigger("changePosition"),
      d.trigger("changePosition")
    }),
    new(i("XY2C"))({
      el: "._anchorMedal"
    })
  },
  XY2C: function(e, t, i) {
    "use strict";
    var s = i("sk80"),
    a = s.roomConfig,
    o = s.tools.hoverDelay,
    n = i("ZcZQ"),
    l = i("8NKv"),
    r = i("43og"),
    c = i("2W0g");
    e.exports = Backbone.View.extend({
      model: {
        getAnchorHotRank: new l,
        getAnchorHotSpecificRank: new r,
        getPreTimeRank: new c
      },
      template: {
        wrap: _.template(n.wrap),
        rank: _.template(n.rank),
        specificRank: _.template(n.specificRank),
        templateCountdown: _.template("剩余抢榜时间&nbsp;<em><%=hh%>:<%=mm%>:<%=ss%></em>"),
        templateLoading: _.template('<div class="ryb-loading"></div>')
      },
      events: {
        "click .xiu-ico-refresh": "refreshRank",
        "click .ryb-card-head": "switchCard"
      },
      datas: {
        anchor_id: a.get("onlineAnchorInfo").user_id,
        delayHide: null,
        getDataLoop: null,
        canGetRank: !0,
        cutDownTid: null,
        status: 0
      },
      setDoms: function() {
        var e = this.$el;
        this.doms = {
          $wrap: $(".ryb-tip", e),
          $entry: $(".ryb-entry", e),
          $rankWrap: $(".rank-wrap", e),
          $countdown: null
        }
      },
      initialize: function(e) {
        var t = this;
        t.regsterEvent(),
        t.$el.append(t.template.wrap()),
        t.getAnchorHotSpecificRank(),
        t.setDoms(),
        t.getRankMsg(),
        t.datas.getDataLoop = setInterval(function() {
          t.getAnchorHotSpecificRank()
        },
        6e4),
        s.roomConfig.on("change:onlineAnchorInfo",
        function(e, i) {
          i.user_id !== t.datas.anchor_id && (t.datas.anchor_id = i.user_id, t.getAnchorHotSpecificRank())
        }),
        o(this.$el, ".info-ryb-ctrl",
        function() {
          t.getAnchorHotRank()
        },
        500,
        function() {
          t.model.getAnchorHotRank.xhrObj && t.model.getAnchorHotRank.xhrObj.abort(),
          t.delayHide()
        },
        5)
      },
      delayHide: function() {
        var e = this;
        clearTimeout(e.datas.delayHide),
        e.datas.delayHide = setTimeout(function() {
          e.doms.$wrap.hide(),
          e.datas.status = 0,
          $(".ryb-card-head").eq(1).removeClass("active"),
          $(".ryb-card-head").eq(0).addClass("active"),
          clearInterval(e.datas.cutDownTid),
          e.datas.canGetRank = !0
        },
        3e3)
      },
      switchCard: function(e) {
        $(e.target).addClass("active").siblings("span").removeClass("active"),
        this.datas.status = parseInt($(e.target).index()),
        this.datas.canGetRank = !0,
        this.getAnchorHotRank()
      },
      refreshRank: function() {
        clearInterval(this.datas.cutDownTid),
        this.datas.canGetRank = !0,
        this.getAnchorHotRank()
      },
      getPreTimeRank: function() {
        var e = this;
        clearTimeout(e.datas.delayHide),
        e.doms.$wrap.show(),
        e.datas.canGetRank && (e.datas.canGetRank = !1, this.doms.$rankWrap.html(this.template.templateLoading()), e.model.getPreTimeRank.getData({
          anchor_id: e.datas.anchor_id
        }))
      },
      getAnchorHotRank: function() {
        var e = this;
        clearTimeout(e.datas.delayHide),
        e.doms.$wrap.show(),
        e.datas.canGetRank && (e.datas.canGetRank = !1, this.doms.$rankWrap.html(this.template.templateLoading()), 0 === e.datas.status ? e.model.getAnchorHotRank.getData({
          anchor_id: e.datas.anchor_id
        }) : 1 === e.datas.status && e.model.getPreTimeRank.getData({
          anchor_id: e.datas.anchor_id
        }))
      },
      getAnchorHotSpecificRank: function() {
        this.model.getAnchorHotSpecificRank.getData({
          anchor_id: this.datas.anchor_id
        })
      },
      regsterEvent: function() {
        var e = this;
        e.model.getAnchorHotRank.on("getRank",
        function() {
          e.renderRank()
        }),
        e.model.getAnchorHotSpecificRank.on("getSpecificRank",
        function() {
          e.renderSpecificRank()
        }),
        e.model.getPreTimeRank.on("getPreTimeRank",
        function() {
          e.renderRank()
        })
      },
      renderRank: function() {
        var e = 0 === this.datas.status ? this.model.getAnchorHotRank.get("data") : this.model.getPreTimeRank.get("data");
        if (e.rank_list.length < 3) for (var t = e.rank_list.length; t < 3; t++) e.rank_list.push({
          rank: t + 1,
          rank_tip: "0热值",
          nick_name: "虚位以待",
          user_icon: "//www.iqiyipic.com/ppsshow/fix/2.0/img/activitys/placeholder.png"
        });
        1 === this.datas.status ? (_.each(e.rank_list,
        function(e) {
          e.rank_tip || (e.rank_tip = e.hot_value + "热值")
        }), e.remain_second = 0, e.anchor_rank_info.rank_tip = e.anchor_rank_info.hot_value + "热值", e.prev = 1) : e.prev = 0,
        this.doms.$rankWrap.html(this.template.rank({
          data: e
        })),
        this.doms.$countdown = $(".ryb-countdown", this.$el),
        this.countdown(e.remain_second)
      },
      renderSpecificRank: function() {
        var e = this.model.getAnchorHotSpecificRank.get("data");
        this.doms.$entry.html(this.template.specificRank(e))
      },
      countdown: function(e) {
        var t = this;
        e = e || 60,
        1 === t.datas.status ? (clearInterval(t.datas.cutDownTid), t.doms.$countdown.html("本时段抢榜已结束")) : (t.doms.$countdown.html(t.template.templateCountdown(t.countdownWheel(e))), t.datas.cutDownTid = setInterval(function() {
          0 === e ? clearInterval(t.datas.cutDownTid) : (e--, t.doms.$countdown.html(t.template.templateCountdown(t.countdownWheel(e))))
        },
        1e3))
      },
      countdownWheel: function(e) {
        return {
          hh: parseInt(e / 60 / 60 % 24, 10) < 10 ? "0" + parseInt(e / 60 / 60 % 24, 10) : parseInt(e / 60 / 60 % 24, 10),
          mm: parseInt(e / 60 % 60, 10) < 10 ? "0" + parseInt(e / 60 % 60, 10) : parseInt(e / 60 % 60, 10),
          ss: parseInt(e % 60, 10) < 10 ? "0" + parseInt(e % 60, 10) : parseInt(e % 60, 10)
        }
      },
      getRankMsg: function() {
        var e = this;
        s.event.on("socket.HOT_SPECIFIC_RANK",
        function(t) {
          var i = t.data.op_info.rank_desc;
          e.doms.$entry.html(e.template.specificRank({
            rank_desc: i
          }))
        })
      }
    })
  },
  "Xd+x": function(e, t, i) {
    var s = QX.tools.mirror,
    a = i("s1gp"),
    o = i("+zqs"),
    n = i("JY5N"),
    l = i("1f7W");
    e.exports = Backbone.View.extend({
      popupTypeMap: {
        category: o,
        follow: n,
        visited: l
      },
      initialize: function() {
        this.popupName = "",
        this.nowPopup = null,
        this.closePopupDomArr = ["site-body", "_follow-tip-see-more"],
        this.pcnNavSwitch = new a,
        this.eventRegister()
      },
      eventRegister: function() {
        var e = this;
        QX.event.on("toggleShowPcnPopup",
        function(t) {
          var i = e.popupName,
          s = t.popupName;
          i && s && s != i || s && !i ? (i && QX.event.trigger("hidePcnPopup"), e.handleEventData(t)) : (QX.event.trigger("hidePcnPopup"), e.popupName = "", e.nowPopup = null)
        }),
        $("body").on("click",
        function(t) {
          var i = t.target; (e.popupName && !e.nowPopup.$el.find("._pcnLeftPopUp")[0].contains(i) || e.popupName && -1 != _.indexOf(e.closePopupDomArr, i.className)) && (QX.event.trigger("hidePcnPopup"), e.popupName = "")
        })
      },
      handleEventData: function(e) {
        var t, i, s = e.url,
        a = {};
        _.some(this.popupTypeMap,
        function(e, i) {
          if ( - 1 != s.indexOf("/" + i)) return t = i,
          !0
        }),
        "category" == t && (_.some(["/alllive/s0-a0-f0-b1-p1", "/hotplay/p1", "/singing/s0-a0-f0-b1-p1", "/hotchat/s0-a0-f0-b1-p1", "/hotdance/s0-a0-f0-b1-p1", "/yanzhi/s0-a0-f0-b1-p1", "/outdoors/s0-a0-f0-b1-p1", "/newstar/s0-a0-f0-b1-p1", "/family/rec-p1"],
        function(e) {
          if ( - 1 != s.indexOf(e)) {
            var t = /\/(\S+)\/(\S+)/.exec(e);
            return a.category = t[1],
            a.query = t[2],
            !0
          }
        }), i = "category_" + a.category + "pop", e.popupPbPage = i, e.popupPbBlock = i),
        "follow" == t && (e.popupPbPage = "followpop"),
        "visited" == t && (e.popupPbPage = "historypop"),
        e.popupType = t,
        e.popupInterfaceParams = a,
        this.renderPopup(t, e)
      },
      renderPopup: function(e, t) {
        var i = t.popupName,
        a = this.popupTypeMap[e];
        a.trigger("showPcnPopup", t),
        this.popupName = i,
        this.nowPopup = a,
        s({
          t: 21,
          rpage: t.popupPbPage
        })
      }
    })
  },
  XjQ7: function(e, t) {
    e.exports = Backbone.Model.extend({
      urlRoot: "/userinfo/getUserStat",
      initialize: function() {},
      subSave: function() {
        this.save(null, {
          type: "post",
          dataType: "json",
          data: {},
          success: function(e, t) {
            e.trigger("success", t)
          },
          error: function(e, t) {
            e.trigger("error", t)
          }
        })
      }
    })
  },
  Y5lf: function(e, t, i) {
    "use strict";
    var s = i("sk80"),
    a = s.roomConfig,
    o = s.ui.Dialog,
    n = s.ui.Toast,
    l = (s.tools.ishow, s.ui.LimitInput),
    r = (n = s.ui.Toast, i("Qc4a")),
    c = i("QSZu");
    e.exports = Backbone.View.extend({
      model: new c,
      template: {
        dialogWrap: _.template(r.dialogWrap),
        inputCon: _.template(r.inputCon)
      },
      datas: {
        roomId: a.get("roomId"),
        content: "",
        product_id: ""
      },
      events: {},
      initialize: function() {
        this.listenEvent()
      },
      listenEvent: function() {
        var e = this;
        s.event.on("userPropaganda.open",
        function(t) {
          e.datas.product_id = t.product_id,
          e.dialogWrapPropaganda(),
          e.limitInput = new l({
            dom: $(".user-Propaganda"),
            max: 20
          });
          var i = e.limitInput.model;
          i.on("change:max",
          function(e, t) {
            $(".user-Propaganda-sp em").text(t)
          }),
          i.on("change:remainNum",
          function(e, t) {
            $(".user-Propaganda-sp em").parent()[t < 0 ? "addClass": "removeClass"]("exceed"),
            $(".user-Propaganda-sp em").text(t)
          }),
          i.on("change:overLength",
          function(e, t) {
            $(".user-Propaganda-btn")[t ? "addClass": "removeClass"]("disabled"),
            $(".user-Propaganda-btn").hover(function() {
              $(this).css("background-color", $(".user-Propaganda-btn").hasClass("disabled") ? "#999": "#a274ff")
            })
          })
        }),
        e.model.on("success",
        function() {
          s.event.trigger("sendGiftAction.updateGiftNum", {
            product_id: e.datas.product_id,
            num: 1
          })
        })
      },
      dialogWrapPropaganda: function() {
        var e = this,
        t = new o({
          template: e.template.dialogWrap,
          clsName: "xmodal xmodal-user-propaganda",
          title: "全站喊话",
          content: e.template.inputCon
        });
        $(".user-Propaganda-btn").on("click",
        function() {
          $(this).hasClass("disabled") || (e.datas.content = $(".user-Propaganda").val().replace(/\s/gi, ""), "" != e.datas.content ? (e.dialogWrapPropagandaCb(), t.trigger("cancel")) : e.dialogError("请输入内容"))
        })
      },
      dialogWrapPropagandaCb: function() {
        var e = _.extend({},
        {
          room_id: this.datas.roomId,
          product_id: this.datas.product_id,
          content: this.datas.content
        });
        this.model.getData(e)
      },
      dialogError: function(e) {
        n({
          selector: ".xmodal-user-propaganda",
          msg: e,
          offsetTop: -($(".xmodal-user-propaganda").outerHeight() + 36) / 2
        })
      }
    })
  },
  YUNM: function(e, t) {
    e.exports = Backbone.Model.extend({
      defaults: {
        type: 1,
        content: "",
        successNormal: "",
        successShout: "",
        canClick: !0,
        maxNormal: 30,
        maxShout: 40,
        countdownTime: 3,
        normalCountdownTime: 3,
        shoutCountdownTime: 0
      },
      urlRoot: "/action/userDo",
      initialize: function() {},
      getData: function() {
        return this.save(null, {
          data: {
            room_id: this.get("room_id"),
            type: this.get("type"),
            content: this.get("content")
          },
          success: function(e, t) {
            e.trigger("success", e, t)
          },
          error: function(e, t) {
            e.trigger("error", e, t)
          }
        })
      },
      validate: function(e, t) {
        return 0 === $.trim(e.content).length ? "请输入内容": 1 === e.type && e.content === e.successNormal || 2 === e.type && e.content === e.successShout ? "同样的内容说过了,换点内容说说吧": void 0
      }
    })
  },
  YYB2: function(e, t, i) {
    "use strict";
    var s = i("KVh3"),
    a = i("S9GA");
    e.exports = Backbone.View.extend({
      initialize: function() {
        var e = this;
        this.model = new s,
        this.template = _.template(a.topProp),
        this.model.on("ok",
        function() {
          var e = this.get("productId"),
          t = this.get("num");
          QX.event.trigger("sendGiftAction.updateGiftNum", {
            product_id: e,
            num: t
          })
        }),
        QX.event.on("topProp.use",
        function(t) {
          e.model.set({
            productId: t.productId,
            num: t.useNum
          }),
          e.model.getData({
            room_id: QX.roomConfig.get("roomId"),
            anchor_id: QX.roomConfig.get("onlineAnchorInfo").user_id,
            product_id: t.productId,
            num: t.useNum
          })
        }),
        QX.event.on("socket.TOP_PROP",
        function(t) {
          var i = t.data.op_userInfo,
          s = t.data.op_info,
          a = QX.ui.userIcon.oneIcon(i);
          QX.event.trigger("roomMessageChat.append", e.template({
            icons: a,
            nickName: i.nick_name,
            num: s.num,
            name: s.name
          })),
          QX.event.trigger("giftSpecialEffect.pushData", t)
        })
      }
    })
  },
  YnnF: function(e, t, i) {
    var s = i("nCB2"),
    a = i("hbqJ"),
    o = QX.liveTools,
    n = new s({
      model: new a,
      nodeType: "outMic",
      toastMsg: function(e) {
        return {
          200 : "已将" + e + "设置下麦"
        }
      }
    });
    o.on("changeMic",
    function(e) {
      "outMic" === e.type && n.postData(e.user_id)
    }),
    e.exports = n
  },
  ZDjE: function(e, t, i) {
    var s, a;
    s = [i("xkxx")],
    void 0 === (a = function(e) {
      var t = i("sk80"),
      s = t.tools.qos;
      t.JTFAPI = t.JTFAPI || _.extend({
        init: function(e) {
          console.log("key->", e),
          this.trigger(e)
        }
      },
      Backbone.Events);
      var a = t.tools.swfobject;
      return Backbone.View.extend({
        initialize: function(t) {
          this.model = new e(t),
          this.on("createSwf", this.createDom)
        },
        createDom: function() {
          var e = this.model.toJSON(),
          i = this,
          o = "//get.adobe.com/cn/flashplayer/",
          n = a.getFlashPlayerVersion();
          $("#" + e.attr.id).length || (e.flashvars.domId = e.attr.id, n.major && 11.3 <= parseFloat(n.major + "." + n.minor) ? a.embedSWF(e.webAddress, this.el.getAttribute("id"), e.width, e.height, e.lowerVersion, e.xi, e.flashvars, e.params, e.attr,
          function(a) {
            var o = null;
            i.swfObj = a,
            i.swfObj.flashId = e.attr.id,
            t.JTFAPI.once(e.attr.id,
            function() {
              $("#" + e.attr.id).css("visibility", "visible"),
              i.trigger("flashLoadedCallback", a),
              clearTimeout(o)
            }),
            o = setTimeout(function() {
              s.push(3, {
                ct: {
                  des: "5s not call js init function ",
                  flash_url: e.webAddress
                }
              })
            },
            5e3)
          }) : ( - 1 < navigator.userAgent.toLowerCase().indexOf("android") && (o = "//gdown.baidu.com/data/wisegame/fa36ee0f18487fd6/AdobeFlashPlayer111_111115081.apk"), $(".need-flash").length || ($(".show-player").length && $(".show-player") || $(".video-living").length && $(".video-living") || $(".room-video").length && $(".room-video")).html('<div class="need-flash new-flash-tip"><p>你尚未下载flash播放器，点击<a href="' + o + '">此处</a>下载</p></div>'), s.push(10, {
            curl: e.webAddress,
            ct: {
              des: "flash version is under 11.3",
              completeFlashVersion: n.major ? parseFloat(n.major + "." + n.minor) : 0,
              clientVersion: window.js_client_version().version
            }
          })))
        },
        removeSwf: function() {
          this.swfObj.flashId && a.removeSWF(this.swfObj.flashId)
        }
      })
    }.apply(t, s)) || (e.exports = a)
  },
  ZcZQ: function(e, t) {
    e.exports = {
      wrap: '<div class="info-ryb-ctrl"><div class="ryb-entry"></div><div class="tip-block ryb-tip"><div class="ryb-arr"><em></em></div><h3 class="ryb-title"><span class="ryb-card-head active">当前排名<b></b></span><span class="ryb-card-head">上时段排名<b></b></span><i class="xiu-ico xiu-ico-refresh">&#xe646;</i></h3><div class="rank-wrap"></div></div></div>',
      specificRank: "<em><%=rank_desc %></em>",
      rank: '<ul class="ryb-rank"><%_.each(data.rank_list.slice(0,3),function(value){%><% var roomPath = \'/room/\'+value.room_id %><li class="<%= value.is_self === 1 ? \'ryb-current-anchor\' : \'\' %>"><a href="<%= (value.is_self === 1 || !value.room_id ) ? \'javascript:;\' : roomPath %>" style="display: block;height: 40px"  target="_blank"><span class="ryb-ranking <%= value.rank === 1 ? \'ryb-first\' : (value.rank === 2 ? \'ryb-second\' : (value.rank === 3 ? \'ryb-third\' : \'\')) %>"><%=value.rank%></span><div><img src=<%=value.user_icon%>><% if (value.anchor_level) { %><i title="主播等级 <%=value.anchor_level%>级" class="ico-lv zb-lv lv<%=value.anchor_level%> ryb_lv"></i><% } %></div><span class="ryb-anchor-name"><%=value.nick_name%></span><em><%=value.rank_tip%></em></a></li><%})%></ul><div class="ryb-mid"><p>TOP1主播将获得热1位置奖励，快来秒榜</p><div class="ryb-countdown"></div></div><ul class="ryb-rank"><% if (!data.anchor_rank_info.is_have_rank || (data.prev && data.anchor_rank_info.rank > 3)) { %><li class="<%= data.anchor_rank_info.is_have_rank ? \'ryb-current-anchor\' : \'ryb-current-anchor ryb-norank-anchor\' %>"><span class="<%= data.anchor_rank_info.is_have_rank ? \'ryb-ranking\' : \'ryb-ranking ryb-no-rank\' %>"><%= data.prev?data.anchor_rank_info.rank:"未上榜" %></span><div><img src=<%=data.anchor_rank_info.user_icon%>><i title="主播等级 <%=data.anchor_rank_info.anchor_level%>级" class="ico-lv zb-lv lv<%=data.anchor_rank_info.anchor_level%> ryb_lv"></i></div><span class="ryb-anchor-name"><%=data.anchor_rank_info.nick_name%></span><em><%=data.anchor_rank_info.rank_tip%></em></li><% } %><% if (data.anchor_rank_info.is_have_rank && data.anchor_rank_info.rank==100) { %><%_.each(data.rank_list.slice(3,2),function(value){%><% var roomPath = \'/room/\'+value.room_id %><li class="<%= value.is_self === 1 ? \'ryb-current-anchor\' : \'\' %>" ><a href="<%= (value.is_self === 1 || !value.room_id ) ? \'javascript:;\' : roomPath %>" style="display: block;height: 40px" target="_blank"><span class="ryb-ranking <%= value.rank === 1 ? \'ryb-first\' : (value.rank === 2 ? \'ryb-second\' : (value.rank === 3 ? \'ryb-third\' : \'\')) %>"><%=value.rank%></span><div><img src=<%=value.user_icon%>><% if (value.anchor_level) { %><i title="主播等级 <%=value.anchor_level%>级" class="ico-lv zb-lv lv<%=value.anchor_level%> ryb_lv"></i><% } %></div><span class="ryb-anchor-name"><%=value.nick_name%></span><em><%=value.rank_tip%></em></a></li><%})%><% }else if(data.anchor_rank_info.is_have_rank && data.anchor_rank_info.rank<100){ %><%_.each(data.rank_list.slice(3),function(value){%><% var roomPath = \'/room/\'+value.room_id %><li class="<%= value.is_self === 1 ? \'ryb-current-anchor\' : \'\' %>"><a href="<%= (value.is_self === 1 || !value.room_id ) ? \'javascript:;\' : roomPath %>" style="display: block;height: 40px" target="_blank"><span class="ryb-ranking <%= value.rank === 1 ? \'ryb-first\' : (value.rank === 2 ? \'ryb-second\' : (value.rank === 3 ? \'ryb-third\' : \'\')) %>"><%=value.rank%></span><div><img src=<%=value.user_icon%>><% if (value.anchor_level) { %><i title="主播等级 <%=value.anchor_level%>级" class="ico-lv zb-lv lv<%=value.anchor_level%> ryb_lv"></i><% } %></div><span class="ryb-anchor-name"><%=value.nick_name%></span><em><%=value.rank_tip%></em></a></li><%})%><% } %></ul>'
    }
  },
  ZsMu: function(e, t, i) {
    var s = i("sk80"),
    a = s.ui.RollView2,
    o = s.tools.mirror;
    e.exports = Backbone.View.extend({
      initialize: function() {
        this.obj = this.$el,
        this.render()
      },
      render: function() {
        var e = this;
        this.rollView = new a({
          delay: 6e3,
          orderKey: "prior"
        }),
        this.setElement($('<div class="trump-tip" data-js-dom="bigTrumpet"></div>').css("display", "none")),
        this.rollView.render(this.$el),
        this.$el.appendTo($("body")),
        this.rollView.on("finished",
        function() {
          e.$el.empty().css("display", "none")
        }),
        s.event.on("bigTrumpetMsg2",
        function(t) {
          e.appendMsg(t)
        }),
        $("body").on("click", '[data-js-dom="bigTrumpet"] a',
        function(e) {
          var t = $(e.currentTarget).attr("href");
          if (/javascript/.test(t) || o({
            block: "17073112",
            rseat: "17073112_1"
          }), ~location.pathname.indexOf(t)) return ! 1
        })
      },
      appendMsg: function(e) {
        this.$el.css("display", "block"),
        this.rollView.showMsg(e),
        this.changeReferenceDom(this.obj)
      },
      changeReferenceDom: function(e) {
        var t = $(e).offset();
        this.$el.css({
          top: t.top - 30
        })
      }
    })
  },
  ZtPF: function(e, t, i) {
    var s = i("sk80"),
    a = s.ui.RollView,
    o = s.ui.userIcon,
    n = i("PsUJ"),
    l = i("WoFH");
    e.exports = Backbone.View.extend({
      initialize: function() {
        this.render(),
        this.listenEvents()
      },
      render: function() {
        this.$el.append(l.wrapper),
        this.rollView = new a({
          template: l.welcome
        }),
        this.rollView.render($(".chat-enterroom", this.$el))
      },
      listenEvents: function() {
        var e = this;
        s.event.on("socket.ON_OFF_LINE",
        function(t) {
          3 === t.type && 1 === t.op && (_.extend(t.data.op_userInfo, n.getRole(t.data.op_userInfo.role_type)), t.data.frontIcon = o.threeIcon(t.data.op_userInfo), e.rollView.showMsg(t.data))
        })
      }
    })
  },
  a9nJ: function(e, t, i) {
    var s = i("sk80"),
    a = s.ui.userIcon,
    o = i("7G0m");
    e.exports = Backbone.View.extend({
      template: _.template(o),
      initialize: function() {
        var e = this;
        s.event.on("socket.ROOKIE_GIFT",
        function(t) {
          var i = t.data.op_userInfo,
          o = t.data.op_info,
          n = e.template({
            iconList: a.giftMessageFrom(i),
            userId: i.user_id,
            nickName: i.nick_name,
            productName: o.product_name,
            productPic: o.product_pic
          });
          s.event.trigger("roomMessageChat.append", n)
        })
      }
    })
  },
  aC6a: function(e, t) {
    e.exports = Backbone.Model.extend({
      urlRoot: "/room/getPersonalTemplates",
      defaults: {
        peronalList: null,
        systemList: null,
        currentData: null
      },
      initialize: function() {},
      getData: function() {
        return this.save(null, {
          success: function(e, t) {
            e.trigger("success", e, t)
          },
          error: function(e, t) {
            e.trigger("error", e, t)
          }
        })
      }
    })
  },
  aFJb: function(e, t, i) {
    "use strict";
    e.exports = Backbone.Model.extend({
      urlRoot: "/api/userinfo/getAccount",
      defaults: {},
      initialize: function() {},
      getData: function() {
        var e = this;
        e.save({},
        {
          data: {},
          success: function(t, i) {
            200 === i.code ? e.trigger("ok", i.data) : e.trigger("fail", i.msg)
          },
          error: function(t, i) {
            e.trigger("fail", i.msg)
          }
        })
      }
    })
  },
  aH3g: function(e, t, i) {
    "use strict";
    var s = i("sk80"),
    a = s.ui.Dialog,
    o = s.ui.Toast,
    n = s.roomConfig,
    l = i("TY5e"),
    r = i("MwHU");
    e.exports = Backbone.View.extend({
      model: new r,
      template: {
        roomReport: _.template(l.roomReport),
        roomReportContent: _.template(l.roomReportContent),
        roomReportType: _.template(l.roomReportType)
      },
      csses: {
        typeFilter: "._typeFilter",
        content: "#_reportContent",
        qqText: "#_qqText",
        telText: "#_telText",
        tip: ".error-msg"
      },
      events: {
        "loginclick a": "clickRoomReport"
      },
      datas: {
        roomId: n.get("roomId"),
        liveId: ~~n.get("liveId"),
        anchorId: n.get("onlineAnchorInfo").user_id,
        errorTip: "请填写举报内容！",
        type: 1,
        content: "",
        qq: "",
        phone: ""
      },
      setDoms: function() {
        var e = this.csses;
        this.doms = {
          $typeFilter: $(e.typeFilter),
          $content: $(e.content),
          $qqText: $(e.qqText),
          $telText: $(e.telText),
          $tip: $(e.tip)
        }
      },
      initialize: function() {
        var e = this;
        e.$el.html(e.template.roomReport()),
        e.datas.liveId && e.datas.anchorId !== s.loginInfo.userId || e.hideRoomReport(),
        s.event.on("socket.LIVE_START",
        function() {
          e.datas.anchorId !== s.loginInfo.userId && e.$el.show()
        }),
        s.event.on("socket.LIVE_STOP",
        function() {
          e.hideRoomReport()
        })
      },
      listenEvent: function() {
        var e = this;
        e.reportDialog.off("bOk").on("bOk",
        function() {
          e.checkReportContent() && (e.doms.$tip.empty(), e.getRoomReportData(), e.sendRoomReport())
        }),
        e.doms.$typeFilter.on("click", ".radio-sya, label",
        function(t) {
          var i = $(t.target).data("type");
          e.changeReportType(i)
        }),
        e.doms.$content.on("keyup",
        function(t) {
          var i = $(t.target),
          s = e.doms.$tip;
          "" !== i.val() && s.empty()
        }),
        e.model.off(),
        e.model.on("ok",
        function() {
          e.anchorRoomReportOk()
        }),
        e.model.on("fail",
        function(t) {
          e.anchorRoomReportFail(t)
        })
      },
      clickRoomReport: function() {
        var e = this;
        this.trigger("getBase64",
        function(t) {
          t ? (e.reportDialog = new a({
            clsName: "inform-dialog",
            title: "举报",
            content: e.template.roomReportContent({
              pic_base64: t
            })
          }), e.setDoms(), e.listenEvent()) : e.dialogError("截屏失败，请重试")
        })
      },
      changeReportType: function(e) {
        this.doms.$typeFilter.html(this.template.roomReportType({
          type: e
        })),
        this.datas.type = e
      },
      checkReportContent: function() {
        var e = this.doms.$content;
        return "" !== e.val() || (this.doms.$tip.html(this.datas.errorTip), e.focus(), !1)
      },
      getRoomReportData: function() {
        var e = this.doms;
        this.datas.content = $.trim(e.$content.val()),
        this.datas.qq = $.trim(e.$qqText.val()),
        this.datas.phone = $.trim(e.$telText.val())
      },
      sendRoomReport: function() {
        var e = this;
        e.model.set({
          pic_base64: e.datas.pic_base64,
          type: e.datas.type,
          content: e.datas.content,
          qq: e.datas.qq,
          phone: e.datas.phone,
          room_id: e.datas.roomId
        }),
        e.model.getData()
      },
      anchorRoomReportOk: function() {
        var e = this;
        new a({
          title: "提交",
          btn: [{
            type: "ok",
            text: "确定",
            clsName: "btn-sye"
          }],
          content: '<p class="center">提交成功，感谢您对秀场的支持！</p>'
        }).on("ok",
        function() {
          e.reportDialog.remove()
        })
      },
      anchorRoomReportFail: function(e) {
        new a({
          title: "提交",
          btn: [{
            type: "ok",
            text: "确定",
            clsName: "btn-sye"
          }],
          content: '<p class="center">' + e + "</p>"
        })
      },
      hideRoomReport: function() {
        this.$el.hide()
      },
      dialogError: function(e) {
        o({
          selector: "._anchorRoomReport",
          msg: e
        })
      }
    })
  },
  aHfg: function(e, t) {
    e.exports = {
      icons: [{
        id: 1,
        img: "//www.iqiyipic.com/ppsshow/fix/2.0/img/live_ii/game/game-icon-mission.png",
        num: 1,
        path: ["//static.iqiyi.com/js/ppsshow/modules/addons/task.js"]
      },
      {
        id: 2,
        img: "//www.iqiyipic.com/ppsshow/fix/2.0/img/live_ii/game/game-icon-hongbao.png",
        path: ["//static.iqiyi.com/js/ppsshow/modules/addons/redEnvelope.js"]
      },
      {
        id: 3,
        img: "//www.iqiyipic.com/ppsshow/fix/2.0/img/live_ii/game/game-icon-anchorPK.png",
        path: ["//static.iqiyi.com/js/ppsshow/modules/addons/anchorPk.js"]
      },
      {
        id: 4,
        img: "//www.iqiyipic.com/ppsshow/fix/2.0/img/live_ii/game/game-icon-redu.png",
        r: 1,
        path: ["//static.iqiyi.com/js/ppsshow/modules/addons/hotwork.js"]
      },
      {
        id: 5,
        img: "//www.iqiyipic.com/ppsshow/fix/2.0/img/live_ii/game/game-icon-familyPK.png",
        effect: 1,
        path: ["//static.iqiyi.com/js/ppsshow/modules/addons/fzonePk.js"]
      },
      {
        id: 7,
        img: "//www.iqiyipic.com/ppsshow/fix/2.0/img/live_ii/game/game-icon-promotion.png",
        path: ["//static.iqiyi.com/js/ppsshow/modules/addons/anchorPromote.js"]
      },
      {
        id: 8,
        img: "//www.iqiyipic.com/ppsshow/fix/2.0/img/live_ii/game/game-icon-gangwar.png",
        path: ["//static.iqiyi.com/js/ppsshow/modules/addons/gangWar.js"]
      },
      {
        id: 9,
        img: "//www.iqiyipic.com/ppsshow/fix/2.0/img/live_ii/game/game-icon-suipian.png",
        path: ["//static.iqiyi.com/js/ppsshow/modules/addons/fragment.js"]
      },
      {
        id: 10,
        img: "//www.iqiyipic.com/ppsshow/fix/2.0/img/live_ii/game/game-icon-cm.png",
        r: 3,
        path: ["//static.iqiyi.com/js/ppsshow/modules/addons/lianmai.js"]
      },
      {
        id: 11,
        img: "//www.iqiyipic.com/ppsshow/fix/2.0/img/live_ii/game/game-icon-weekstar.png",
        path: ["//static.iqiyi.com/js/ppsshow/modules/addons/weekStar.js"]
      },
      {
        id: 12,
        img: "//www.iqiyipic.com/ppsshow/fix/2.0/img/live_ii/game/game-icon-roomplay.png"
      },
      {
        id: 13,
        img: "//www.iqiyipic.com/ppsshow/fix/2.0/img/live_ii/game/game-icon-highladder.png",
        path: ["//static.iqiyi.com/js/ppsshow/modules/addons/highladder.js"]
      },
      {
        id: 14,
        img: "//www.iqiyipic.com/ppsshow/fix/2.0/img/live_ii/game/game-icon-football.png",
        path: ["//static.iqiyi.com/js/ppsshow/modules/addons/football.js"]
      },
      {
        id: 15,
        img: "//www.iqiyipic.com/ppsshow/fix/2.0/img/live_ii/game/game-icon-pickcard.png",
        r: 2,
        path: ["//static.iqiyi.com/js/ppsshow/modules/addons/pickCard.js"]
      },
      {
        id: 16,
        img: "//www.iqiyipic.com/ppsshow/fix/2.0/img/live_ii/game/game-icon-recharge2.png",
        external: "/html/zt/year2018Recharge2.html"
      }]
    }
  },
  ayDO: function(e, t, i) {
    "use strict";
    e.exports = function(e, t, i) {
      if (t = t || 1, i = i || {},
      !(e instanceof Array) || e.length < t) for (var s = e.length; s < t; s++) e.push(_.extend({},
      {
        is_follow: 0,
        is_live: 0,
        is_ugc_room: 0,
        nick_name: "虚位以待",
        rank: s + 1,
        room_id: 0,
        score: 0,
        user_icon: "//www.iqiyipic.com/ppsshow/fix/2.0/img/actions2017_main_match/user_placeholder.png",
        user_id: 0
      },
      i));
      return e
    }
  },
  ayMT: function(e, t, i) {
    "use strict";
    e.exports = Backbone.Model.extend({
      urlRoot: "/api/fans/isFansFollow",
      getData: function(e) {
        var t = this;
        this.save({},
        {
          data: e || {},
          success: function(e, i) {
            200 === i.code && t.trigger("ok")
          }
        })
      }
    })
  },
  "b+v/": function(e, t, i) {
    var s;
    void 0 === (s = function() {
      var e = Backbone.Model.extend({
        defaults: {
          cur: 1,
          max: 10,
          min: 1
        }
      });
      return Backbone.View.extend({
        template: _.template('<div class="input-amount-wrap"><a click-type="amountReduce" class="amount-btn <%if(cur <= min){%>amount-decrease-off<%}else{%>amount-decrease<%}%>" href="javascript:void(0);">-</a><input click-type="amountInput" type="text" <%if(readOnly){%>readonly=""<%}%> value="<%=formatData(cur)%>"><a click-type="amountAdd" class="amount-btn <%if(cur >= max){%>amount-increase-off<%}else{%>amount-increase<%}%>" href="javascript:void(0);">+</a></div>'),
        el: "body",
        initialize: function(t) {
          t = t || {};
          var i = this;
          this.model = new e,
          this.model.set("readOnly", !0),
          this.model.set("formatData",
          function(e) {
            return e + "个"
          }),
          this.model.set(t),
          this.model.on("change:cur",
          function(e) {
            var t = e.get("cur");
            t >= e.get("max") && (t = e.get("max")),
            t <= e.get("min") && (t = e.get("min")),
            i.$el.find('[click-type="amountAdd"]').attr("class", t >= e.get("max") ? "amount-btn amount-increase-off": "amount-btn amount-increase"),
            i.$el.find('[click-type="amountReduce"]').attr("class", t <= e.get("min") ? "amount-btn amount-decrease-off": "amount-btn amount-decrease"),
            e.set("cur", t, {
              silent: !0
            }),
            i.$el.find('[click-type="amountInput"]').val(e.get("formatData")(e.get("cur")))
          }),
          this.putHtml()
        },
        events: {
          'click [click-type="amountReduce"],[click-type="amountAdd"]': "changeAmount",
          'keyup [click-type="amountInput"]': "pullAmount"
        },
        changeAmount: function(e) {
          e.preventDefault();
          var t = $(e.currentTarget).attr("click-type");
          if ($(e.currentTarget).is(".amount-increase-off")) return ! 1;
          this.model.set("cur", "amountReduce" === t ? this.model.get("cur") - 1 * (this.model.get("step") || 1) : this.model.get("cur") + 1 * (this.model.get("step") || 1))
        },
        pullAmount: function(e) {
          var t = $(e.currentTarget),
          i = t.val();
          if (t.attr("readonly")) return ! 1;
          this.model.set("cur", i)
        },
        putHtml: function() {
          this.$el.append(this.template(this.model.toJSON()))
        }
      })
    }.call(t, i, t, e)) || (e.exports = s)
  },
  bDVM: function(e, t, i) {
    var s = i("OwZ9"),
    a = i("fMCT"),
    o = i("B6WV"),
    n = i("hbdQ"),
    l = i("l8jB"),
    r = i("HPuU"),
    c = i("GsvH"),
    d = i("/6HC"),
    u = i("y6tw"),
    p = i("Ofv+"),
    h = i("SZXi"),
    m = {
      1 : "爵士",
      2 : "男爵",
      3 : "子爵",
      4 : "伯爵",
      5 : "侯爵",
      6 : "公爵",
      7 : "国王"
    };
    e.exports = Backbone.View.extend({
      template: _.template(s),
      initialize: function() {
        var e = this;
        this.model = new(Backbone.Model.extend({})),
        this.model.set({
          maxGiftNum: 63,
          numPerLine: 7,
          switchType: 1,
          curSelectGIft: 0,
          curGiftInfo: null,
          hoverTime: null
        }),
        this.userBagInfoModel = new p,
        this.getUserBadgeInfoModel = new h,
        this.render(),
        this.packCtrl = new c({
          el: this.$el.find(".gift-section")
        }),
        this.useBadge = new d({
          el: this.$el.find(".gift-section")
        }),
        this.useProps = new u({
          el: this.$el.find(".gift-section")
        }),
        this.packCtrl.template = _.template(a[2]),
        this.useBadge.template = _.template(a[3]),
        this.model.on("change:numPerLine",
        function() {
          this.unset("switchType", {
            silent: !0
          }).set("switchType", 1)
        }),
        this.model.on("change:switchType",
        function(t, i) {
          if (t.get("list")) {
            e.changeListHeight();
            var s = e.model.get("timer");
            e.$el.find('[data-js-dom="gift-switch"] .io').removeClass("io-arr-up io-arr-down").addClass("io-arr-" + ["down", "up"][i]).html(i ? "&#xe62b;": "&#xe626;"),
            s && clearTimeout(s),
            e.model.set("timer", setTimeout(function() {
              e.appendList()
            },
            150)),
            e.$el.find(".gift-section .gs-tip").remove()
          }
        }),
        this.model.on("change:list",
        function(t, i) {
          this.set("listMap", _.indexBy(i.data_list, "product_id")),
          !this.get("curGiftInfo") && this.set("curGiftInfo", this.get("list").data_list[0]),
          e.appendList(),
          e.changeListHeight()
        }),
        this.listenTo(this.packCtrl, "packGoodsUseSuccess",
        function() {
          this.trigger("packGoodsUseSuccess"),
          this.$el.find(".gs-tip").remove()
        }),
        this.listenTo(this.useBadge, "packGoodsUseSuccess",
        function() {
          this.trigger("packGoodsUseSuccess"),
          this.$el.find(".gs-tip").remove()
        }),
        QX.event.on("clickHide",
        function() {
          e.model.set("switchType", 1)
        }),
        QX.event.on("giftList.removeGsTip",
        function() {
          e.$el.find(".gs-tip").remove()
        })
      },
      render: function() {
        this.$el.append(l)
      },
      events: {
        'click [data-js-dom="gift-switch"]': "switchList",
        'click [data-js-dom="giftIcon"]': "setCurSendGift",
        'hover [data-js-dom="giftIcon"]': "showGiftDetail",
        "hover .gs-tip": "hoverDetail"
      },
      appendList: function() {
        this.model.get("list") && (_.each(this.model.get("list").data_list,
        function(e) {
          2 == ~~e.entity_type && e.sub_type && n[e.sub_type].totalPriceShow && (e.totalPrice = e.price * e.total_num)
        }), this.$el.find('ul[data-js-dom="giftList"]').html(this.template(_.extend({},
        this.model.toJSON(), this.formatData()))), this.switchBtn())
      },
      formatData: function() {
        var e = this.model.toJSON(),
        t = {},
        i = 0,
        s = 1,
        a = 0,
        o = this.model.get("maxGiftNum"),
        n = [].concat(e.list.data_list).slice(0, o),
        l = e.numPerLine - Math.min(o, e.list.data_list.length) % e.numPerLine;
        if (l != e.numPerLine && 0 < l && n.length < o) for (var r = 0,
        c = l; r < c; r++) n.push({});
        return _.forEach(n,
        function(t, i) {
          t.product_id === e.curGiftInfo.product_id && void 0 !== e.curGiftInfo.product_id && (a = i + 1)
        }),
        i = a / e.numPerLine | 0,
        s = Math.min(this.getLine(), i + 1),
        0 !== a && a % e.numPerLine == 0 && (s = i, i -= 1),
        t.data_list = n,
        e.switchType && (t.data_list = n.slice(e.numPerLine * i, e.numPerLine * s)),
        {
          list: _.extend({},
          e.list, t)
        }
      },
      switchBtn: function() {
        this.$el.find('[data-js-dom="gift-switch"]')[this.model.get("numPerLine") >= this.model.get("list").data_list.length ? "addClass": "removeClass"]("disabled")
      },
      switchList: function(e) {
        return e.preventDefault(),
        $(e.currentTarget).hasClass("disabled") || (this.model.set("switchType", 0 | !this.model.get("switchType")), this.$el.find(".gift-section .gs-tip").remove()),
        !1
      },
      showGiftDetail: function(e) {
        var t = $(e.currentTarget),
        i = t.data("giftId"),
        s = this.$el.find(".gift-section"),
        l = this,
        r = {};
        i && (this.model.get("hoverTime") && clearTimeout(this.model.get("hoverTime")), this.model.unset("hoverTime"), "mouseenter" === e.type ? this.model.set("hoverTime", setTimeout(function() {
          var e;
          s.find(".gs-tip").remove(),
          l.getDetailInfo(i,
          function(i) {
            if (~_.indexOf([2, 3], i.tipsType)) 3 === i.tipsType && (i.badge.realName = m[i.badge.badge_level]),
            l[{
              2 : "packCtrl",
              3 : "useBadge"
            } [i.tipsType]].model.unset("inputData", {
              silent: !0
            }),
            l[{
              2 : "packCtrl",
              3 : "useBadge"
            } [i.tipsType]].model.set("inputData", i);
            else if (4 === i.tipsType) {
              var c = i.info.sub_type || 0;
              s.append(_.template(o[n[c].tpl], i)),
              3 === n[c].tpl && (l.useProps.model.unset("inputData", {
                silent: !0
              }), l.useProps.model.set("inputData", i))
            } else s.append(_.template(a[i.tipsType], i));
            $tips = s.find(".gs-tip"),
            r = l.tipsWH(),
            e = t.position().left + r.w > s.find('[data-js-dom="giftList"]').width(),
            s.find(".gs-tip").css({
              top: t.position().top + s.height() - s.find('[data-js-dom="giftList"]').height() - r.h,
              left: e ? s.find('[data-js-dom="giftList"]').width() - r.w: t.position().left
            }),
            s.find(".gs-tip .gs-tip-arr").css("left", (e ? t.position().left - (s.find('[data-js-dom="giftList"]').width() - r.w) : 0) + t.width() / 2 - 2),
            s.find(".gs-tip").show()
          })
        },
        s.find(".gs-tip").length ? 20 : 300)) : this.model.set("hoverTime", setTimeout(function() {
          s.find(".gs-tip").remove()
        },
        500)))
      },
      hoverDetail: function(e) {
        var t = $(e.currentTarget).data("tipsType");
        "mouseenter" === e.type && ~_.indexOf([2, 3, 4], t) && clearTimeout(this.model.get("hoverTime"))
      },
      getDetailInfo: function(e, t) {
        var i = this.model.get("listMap")[e],
        s = {};
        i.tabId = this.model.get("tabId"),
        s.tipsType = {
          6 : 2,
          3 : 3,
          2 : 4
        } [i.entity_type] || 1,
        9999 === this.model.get("tabId") ? 6 == i.entity_type ? this.userBagInfoModel.set("product_id", e).subSave(function(e) {
          s.info = e.data,
          s.packInfo = i,
          t && t(s)
        }) : ((s.info = i).name = i.entity_name, i.pic = i.entity_pic, 3 == i.entity_type ? this.getUserBadgeInfoModel.subSave(function(e) {
          s.badge = e.data,
          t && t(s)
        }) : t && t(s)) : (i.payTypeWords = r[i.money_type], s.info = i, t && t(s))
      },
      tipsWH: function() {
        var e = this.$el.find(".gift-section").find(".gs-tip"),
        t = 0,
        i = 37;
        return e.length && (t += e.width(), i += e.height()),
        {
          w: t,
          h: i
        }
      },
      setCurSendGift: function(e) {
        var t = $(e.currentTarget);
        if (t.data("giftId") && (!t.hasClass("active") || 5 == this.model.get("tabId"))) {
          var i = this.model.get("listMap")[t.data("giftId")];
          9999 === this.model.get("tabId") && 1 != i.entity_type || (t.addClass("active").siblings(".active").removeClass("active"), this.model.unset("curGiftInfo", {
            silent: !0
          }).set("curGiftInfo", i))
        }
      },
      switchDownList: function(e) {
        var t = this;
        this.switchTimer && clearTimeout(this.switchTimer),
        "mouseleave" === e.type && (this.switchTimer = setTimeout(function() { ! t.$el.find(".gs-tip").length && t.model.set("switchType", 1)
        },
        2e3))
      },
      getLine: function() {
        return Math.ceil(this.model.get("maxGiftNum") / this.model.get("numPerLine"))
      },
      changeListHeight: function() {
        var e = Math.min(this.getLine(), Math.ceil(this.model.get("list").data_list.length / (0 | this.model.get("numPerLine"))));
        $('[data-js-dom="giftList"]').removeClass().addClass("gift-wrapper " + (this.model.get("switchType") ? "": "extend-row-" + e))
      }
    })
  },
  bwCg: function(e, t, i) {
    var s = i("sk80"),
    a = s.roomConfig,
    o = s.tools.hoverDelay,
    n = s.ui.ScrollView,
    l = s.tools.ishow,
    r = i("S3eq"),
    c = i("rvpG");
    e.exports = Backbone.View.extend({
      template: {
        entry: c.entry,
        list: _.template(c.list),
        empty: c.empty
      },
      model: new r({
        anchor_id: a.get("onlineAnchorInfo").user_id,
        room_id: a.get("roomId")
      }),
      events: {
        "click ._absent:not(.disabled)": "buyGuard",
        "hover ._avatar": "hoverAvatar"
      },
      initialize: function() {
        this.scrollView = new n,
        this.listenEvents(),
        this.model.set("visible", !1),
        this.render()
      },
      render: function(e) {
        if (e) {
          if (this.model.get("visible") && (this.$el.attr("data-pb-block", "17073103").html(this.template.entry), this.hover()), 200 === e.code) {
            e.onlineNum = 0;
            var t = e.data.length;
            this.addAbsent(e.data),
            this.model.preProcess(e),
            this.model.get("visible") && (0 === t ? this.$el.append(this.template.empty) : (this.$el.append(this.template.list(e)), this.scrollView.render($(".scroll-panel", this.$el)), this.scrollView.scrollToStart(), this.model.set("rowHeight", $(".gwl-gold", this.$el).height()), this.model.set("minHeight", this.$el.height())), this.setAvailableBtn(), this.setBuyBtn(e, t)),
            this.trigger("refreshGuardNum", e.onlineNum || this.getOnlineNum(e.data), t)
          }
        } else this.model.getData()
      },
      listenEvents: function() {
        var e = this;
        this.model.on("success",
        function(t, i) {
          e.render(i)
        }),
        this.on("hoverEnter hoverLeave",
        function() {
          e.scrollView.$el.length && e.scrollView.update()
        }),
        l.on("iShowLoginSuccess",
        function(t) {
          var i = !0;
          t.data.basic.user_id === a.get("onlineAnchorInfo").user_id && (i = !1),
          e.model.set("btnAvailable", i),
          e.model.get("visible") && e.setAvailableBtn()
        }),
        l.on("iShowLogout",
        function(t) {
          e.model.set("btnAvailable", !0),
          e.model.get("visible") && e.setAvailableBtn()
        }),
        s.event.on("socket.MIC_PULL_IN",
        function(t) {
          e.model.set("anchor_id", t.data.to_userInfo.user_id),
          e.model.set("btnAvailable", a.get("loginUserId") !== t.data.to_userInfo.user_id),
          e.render()
        }),
        s.event.on("socket.LIVE_STOP",
        function(t) {
          e.model.set("anchor_id", a.get("roomOwner")),
          e.model.set("btnAvailable", a.get("loginUserId") !== a.get("roomOwner")),
          e.render()
        }),
        s.event.on("socket.NOBILITY_OR_GUARD_APPLY",
        function() {
          e.model.get("visible") && e.render()
        })
      },
      hover: function() {
        var e = this;
        o(this.$el, null,
        function() {
          var t = e.model.get("data");
          if (!t) return ! 1;
          var i = t.length;
          if (6 < i && (e.$el.addClass("board-unfold"), i <= 12)) {
            var s = Math.ceil((i - 6) / 3);
            e.$el.addClass("board-unfold"),
            e.$el.css("height", e.model.get("minHeight") + s * e.model.get("rowHeight") + 10 + "px")
          }
        },
        200,
        function() {
          e.$el.attr("style", "display:block"),
          e.$el.removeClass("board-unfold")
        },
        200)
      },
      buyGuard: function() {
        s.event.trigger("liveGS.show", {
          target: "guard"
        })
      },
      getOnlineNum: function(e) {
        var t = 0;
        return _.each(e,
        function(e) {
          t += 0 | e.is_online
        }),
        t
      },
      addAbsent: function(e) {
        for (var t = e.length,
        i = {
          absent: !0
        },
        s = t; s < this.model.get("min"); s++) e.push(i);
        6 <= t && e.push(i)
      },
      setAvailableBtn: function() {
        var e = this.model.get("btnAvailable"),
        t = this.$el.find("._open"),
        i = this.$el.find("._goBuy");
        t[e ? "removeClass": "addClass"]("disabled"),
        i[e ? "show": "hide"]()
      },
      hoverAvatar: function(e) {
        var t = $(e.currentTarget).find("._offline");
        "mouseenter" === e.type ? t.hide() : t.show()
      },
      setBuyBtn: function(e, t) {
        if (200 === e.code) for (var i = 0,
        s = e.data; i < t; i++) if (s[i].user_id == a.get("loginUserId")) {
          $("._open", this.$el).text("续费守护");
          break
        }
        i === t && $("._open", this.$el).text("开通守护")
      }
    })
  },
  c4nZ: function(e, t, i) {
    var s = i("sk80"),
    a = s.tools.ishow,
    o = s.tools.hoverDelay,
    n = s.tools.rmProtocol,
    l = i("lrO5"),
    r = i("0G7x");
    e.exports = Backbone.View.extend({
      initialize: function(e) {
        _.extend(this.props = {},
        e),
        this.model = new r,
        this.state = {
          hasRender: !1
        },
        this.roomUserInfoPanel = new l({
          emitDom: this.props.infoArea
        }),
        this.listenEvents()
      },
      showPanel: function(e) { ! this.state.hasRender && e && (this.state.hasRender = !0, this.roomUserInfoPanel.render(e))
      },
      listenEvents: function() {
        var e = this;
        this.props.infoArea.on("click",
        function() {
          e.state.loginInfo || s.event.trigger("loginDialog.show")
        }),
        o(this.props.infoArea, null,
        function() {
          $.cookie("P00001") && (e.ajObject = e.model.subSave(function(t) {
            200 === t.code && e.showPanel(t.data)
          }))
        },
        300,
        function() {
          $.cookie("P00001") && (e.ajObject && e.ajObject.abort(), e.resetPanel())
        },
        300, "._userPanel"),
        a.on("iShowLoginSuccess",
        function(t) {
          200 === t.code && (e.state.loginInfo = t.data, e.renderInfo(t.data.basic))
        }),
        a.on("iShowLogout",
        function(t) {
          e.state.loginInfo = null,
          e.renderInfo({
            user_icon: "//www.iqiyipic.com/common/fix/headicons/male-70.png",
            nick_name: "未登录"
          }),
          e.resetPanel()
        }),
        s.event.on("userAccount",
        function(t) {
          e.state.loginInfo && _.extend(e.state.loginInfo.account, t)
        })
      },
      resetPanel: function() {
        this.roomUserInfoPanel.close(),
        this.state.hasRender = !1
      },
      renderInfo: function(e) {
        this.props.avatar.attr("src", n(e.user_icon)),
        this.props.name.text(e.nick_name).attr("title", e.nick_name)
      }
    })
  },
  cB7Y: function(e, t, i) {
    "use strict";
    var s = i("sk80").ui.ScrollView,
    a = i("ayDO"),
    o = i("stb4"),
    n = i("tVAW");
    e.exports = Backbone.View.extend({
      initialize: function(e) {
        var t = this;
        this.datas.params.anchor_id = e.anchorId,
        this.model = new o,
        this.model.on("ok",
        function() {
          t.datas.refresh ? t.render() : t.renderList()
        })
      },
      events: {
        "click ._trueLoveRankTab:not(.active)": "clickTab"
      },
      datas: {
        params: {
          rank_type: 1,
          anchor_id: 0,
          page: 1,
          page_size: 20
        },
        refresh: 1,
        flag: 1,
        fakeTpl: {
          user_id: 0,
          icon: "//www.iqiyipic.com/ppsshow/fix/2.0/img/actions2017_main_match/user_placeholder.png",
          experience: 0,
          fan_medal_info: {
            guard_level: 0,
            user_level: 1,
            medal_type: 0,
            fans_name: "真爱团"
          }
        }
      },
      template: {
        rank: _.template(n.rank),
        top: _.template(n.top),
        list: _.template(n.list)
      },
      init: function() {
        var e = this.$el;
        this.$el.html(this.template.rank()),
        this.doms = {
          $tabs: $("._trueLoveRankTab", e),
          $top: $("._trueLoveRankTop", e),
          $list: $("._trueLoveRankList", e)
        },
        this.clickTab(null, 1)
      },
      clickTab: function(e, t) {
        var i = e && $(e.currentTarget),
        s = (t = t || i.data("tab"), this.doms.$tabs),
        a = e ? i: s.filter("[data-tab=" + t + "]");
        s.removeClass("active"),
        a.addClass("active"),
        this.datas.refresh = 1,
        this.datas.flag = 1,
        this.datas.params.rank_type = ~~t,
        this.datas.params.page = 1,
        this.model.getData(this.datas.params)
      },
      render: function() {
        var e = this,
        t = this.model.get("data");
        t.items = a(t.items, 8, this.datas.fakeTpl),
        this.doms.$top.html(this.template.top({
          items: t.items.slice(0, 3)
        })),
        this.doms.$list.html(this.template.list({
          items: t.items.slice(3)
        })),
        this.scrollView && this.scrollView.destroy(),
        this.scrollView = new s,
        this.scrollView.render($(".scroll-panel", this.$el)),
        this.scrollView.on("scroll",
        function(t) {
          if (e.datas.flag && t.scrolled >= .9 * t.total) {
            e.datas.flag = 0;
            var i = e.model.get("data"),
            s = i.page_info.page + 1;
            s <= i.page_info.total_page ? (e.datas.refresh = 0, e.datas.params.page = s, e.model.getData(e.datas.params)) : e.datas.flag = 1
          }
        })
      },
      renderList: function() {
        var e = this.model.get("data");
        this.doms.$list.append(this.template.list(e)),
        this.scrollView && this.scrollView.update(),
        this.datas.flag = 1
      }
    })
  },
  cCqs: function(e, t) {
    e.exports = {
      tabHeader: '<ul class="board-tab"><li class="board-contribute _tabHd" data-pb-block="17073102" data-pb-rseat="1">贡献榜<b></b></li><li class="board-guard _tabHd"  data-pb-block="17073103" data-pb-rseat="1">守护<%if(guard.total){%><span>(<%=guard.online%>/<%=guard.total%>)</span><%}else{%><span></span><%}%><div class="guard-ques"><div class="guard-ques-tip"><p>1.数值显示说明：当前在线守护数/总守护人数</p><p>2.在线守护排名靠前</p><p>3.若状态相同，守护等级高者排名靠前</p><p>4.若守护等级相同，亲密等级高者排名靠前</p><i class="i-arr"><em></em></i></div></div><b></b></li><li class="board-online _tabHd" data-pb-block="17073104" data-pb-rseat="1">在线<span>(<%=online%>)</span><b></b></li></ul>'
    }
  },
  cG9a: function(e, t, i) {
    var s = i("sk80"),
    a = s.createSwf;
    e.exports = Backbone.View.extend({
      initialize: function(e) {
        var t, i = $(".video-container"),
        o = i.offset();
        if (e.isGray) return s.event.trigger("h5EffectInit", {
          type: 1,
          dom: $(".video-container,.video-living").get(0),
          offsetX: 615,
          offsetY: 338,
          w: 1348,
          h: 740
        }),
        s.event.trigger("h5EffectList", {
          type: 1,
          list: [null]
        }),
        !1;
        $("#starEffectWrap").length ? $("#starEffectWrap").append('<div id="starEffect"></div>') : $("body").append('<div id="starEffectWrap" class="effect-penetrate" style="position:absolute;left:0;top:0"><div id="starEffect"></div></div>'),
        $("#starEffectWrap").css({
          position: "absolute",
          left: o.left,
          top: o.top
        }).show(),
        (t = new a({
          el: "#starEffect",
          webAddress: "//static.iqiyi.com/ppsshow/flashplayer/showStarShower2.swf?v=" + ISHOW.flashVersion,
          width: i.width(),
          height: i.height()
        })).createDom(),
        window.CLOSE_STAR_SWF = function() {
          t.removeSwf(),
          window.CLOSE_STAR_SWF = null,
          $("#starEffectWrap").hide()
        }
      }
    })
  },
  clEN: function(e, t) {
    e.exports = '<div id="honour-notice-dialog" class="new-start-dialog <%= type && ({1:"start-dialog-year2018-base1 new-start-year2018-bg1",2:"start-dialog-year2018-base1 new-start-year2018-bg2",3:"start-dialog-year2018-base1 new-start-year2018-bg3",4:"start-dialog-year2018-base1 new-start-year2018-bg4"}[type]) || "start-dialog-sya" %>" style="display: block;"><a href="javascript:;" class="close" title="关闭"><span class="b">关闭</span></a><div class="figure"><img src="<%=user_icon%>" class="avatar"><b class="dec"></b></div><div class="content"><h5><span class="name"><%-nick_name%></span></h5><p class="ct"><%=msg%></p></div><div class="act"><a href="/room/<%=room_id%>" class="btn btn-sys-e" target="room">速来围观</a></div></div>'
  },
  cxV9: function(e, t) {
    e.exports = Backbone.Model.extend({
      defaults: {
        product_id: 0
      },
      urlRoot: "/api/bags/openPackage",
      initialize: function() {},
      subSave: function() {
        var e = this;
        this.save({},
        {
          data: {
            product_id: e.get("product_id")
          },
          success: function(t, i) {
            200 == i.code && e.trigger("success", i)
          }
        })
      }
    })
  },
  "d/a7": function(e, t, i) {
    var s;
    void 0 === (s = function() {
      return Backbone.Model.extend({
        urlRoot: "/action/setAdmin",
        initialize: function() {},
        subSave: function(e) {
          var t = this,
          i = {
            type: "post",
            dataType: "json",
            data: e.data,
            success: function(e, i) {
              t.trigger("success", i)
            },
            error: function(e, i) {
              t.trigger("error", i)
            }
          };
          t.save(null, i)
        }
      })
    }.call(t, i, t, e)) || (e.exports = s)
  },
  dHyl: function(e, t) {
    var i = [{
      key: "[开心]",
      src: "//www.iqiyipic.com/ppsxiu/fix/sc/phiz_kaixin_32x32"
    },
    {
      key: "[色色]",
      src: "//www.iqiyipic.com/ppsxiu/fix/sc/phiz_sese_32x32"
    },
    {
      key: "[呆]",
      src: "//www.iqiyipic.com/ppsxiu/fix/sc/phiz_dai_32x32"
    },
    {
      key: "[哭]",
      src: "//www.iqiyipic.com/ppsxiu/fix/sc/phiz_ku_32x32"
    },
    {
      key: "[大笑]",
      src: "//www.iqiyipic.com/ppsxiu/fix/sc/phiz_daxiao_32x32"
    },
    {
      key: "[傻乐]",
      src: "//www.iqiyipic.com/ppsxiu/fix/sc/phiz_shale_32x32"
    },
    {
      key: "[可怜]",
      src: "//www.iqiyipic.com/ppsxiu/fix/sc/phiz_kelian_32x32"
    },
    {
      key: "[无语]",
      src: "//www.iqiyipic.com/ppsxiu/fix/sc/phiz_wuyu_32x32"
    },
    {
      key: "[汗]",
      src: "//www.iqiyipic.com/ppsxiu/fix/sc/phiz_han_32x32"
    },
    {
      key: "[抓狂]",
      src: "//www.iqiyipic.com/ppsxiu/fix/sc/phiz_zhuakuang_32x32"
    },
    {
      key: "[亲亲]",
      src: "//www.iqiyipic.com/ppsxiu/fix/sc/phiz_qinqin_32x32"
    },
    {
      key: "[落寞]",
      src: "//www.iqiyipic.com/ppsxiu/fix/sc/phiz_luomo_32x32"
    },
    {
      key: "[囧]",
      src: "//www.iqiyipic.com/ppsxiu/fix/sc/phiz_jiong_32x32"
    },
    {
      key: "[抠鼻]",
      src: "//www.iqiyipic.com/ppsxiu/fix/sc/phiz_koubi_32x32"
    },
    {
      key: "[闭嘴]",
      src: "//www.iqiyipic.com/ppsxiu/fix/sc/phiz_bizui_32x32"
    },
    {
      key: "[挑眉]",
      src: "//www.iqiyipic.com/ppsxiu/fix/sc/phiz_tiaomei_32x32"
    },
    {
      key: "[惊恐]",
      src: "//www.iqiyipic.com/ppsxiu/fix/sc/phiz_jingkong_32x32"
    },
    {
      key: "[晕]",
      src: "//www.iqiyipic.com/ppsxiu/fix/sc/phiz_yun_32x32"
    },
    {
      key: "[惊讶]",
      src: "//www.iqiyipic.com/ppsxiu/fix/sc/phiz_jingya_32x32"
    },
    {
      key: "[再见]",
      src: "//www.iqiyipic.com/ppsxiu/fix/sc/phiz_zaijian_32x32"
    }];
    i = _.uniq([{
      key: "[微笑]",
      src: "//www.iqiyipic.com/ppsxiu/fix/sc/phiz_weixiao_32x32"
    },
    {
      key: "[色色]",
      src: "//www.iqiyipic.com/ppsxiu/fix/sc/phiz_sese_32x32"
    },
    {
      key: "[呆]",
      src: "//www.iqiyipic.com/ppsxiu/fix/sc/phiz_dai_32x32"
    },
    {
      key: "[惊讶]",
      src: "//www.iqiyipic.com/ppsxiu/fix/sc/phiz_jingya_32x32"
    },
    {
      key: "[大笑]",
      src: "//www.iqiyipic.com/ppsxiu/fix/sc/phiz_daxiao_32x32"
    },
    {
      key: "[坏笑]",
      src: "//www.iqiyipic.com/ppsxiu/fix/sc/phiz_huaixiao_32x32"
    },
    {
      key: "[可怜]",
      src: "//www.iqiyipic.com/ppsxiu/fix/sc/phiz_kelian_32x32"
    },
    {
      key: "[憨笑]",
      src: "//www.iqiyipic.com/ppsxiu/fix/sc/phiz_hanxiao_32x32"
    },
    {
      key: "[流泪]",
      src: "//www.iqiyipic.com/ppsxiu/fix/sc/phiz_liulei_32x32"
    },
    {
      key: "[疑问]",
      src: "//www.iqiyipic.com/ppsxiu/fix/sc/phiz_yiwen_32x32"
    },
    {
      key: "[亲亲]",
      src: "//www.iqiyipic.com/ppsxiu/fix/sc/phiz_qinqin_32x32"
    },
    {
      key: "[石化]",
      src: "//www.iqiyipic.com/ppsxiu/fix/sc/phiz_shihua_32x32"
    },
    {
      key: "[晕]",
      src: "//www.iqiyipic.com/ppsxiu/fix/sc/phiz_yun_32x32"
    },
    {
      key: "[再见]",
      src: "//www.iqiyipic.com/ppsxiu/fix/sc/phiz_zaijian_32x32"
    },
    {
      key: "[闭嘴]",
      src: "//www.iqiyipic.com/ppsxiu/fix/sc/phiz_bizui_32x32"
    },
    {
      key: "[囧]",
      src: "//www.iqiyipic.com/ppsxiu/fix/sc/phiz_jiong_32x32"
    },
    {
      key: "[愤怒]",
      src: "//www.iqiyipic.com/ppsxiu/fix/sc/phiz_fennu_32x32"
    },
    {
      key: "[汗]",
      src: "//www.iqiyipic.com/ppsxiu/fix/sc/phiz_han_32x32"
    },
    {
      key: "[抠鼻]",
      src: "//www.iqiyipic.com/ppsxiu/fix/sc/phiz_koubi_32x32"
    },
    {
      key: "[无语]",
      src: "//www.iqiyipic.com/ppsxiu/fix/sc/phiz_wuyu_32x32"
    }].concat(i),
    function(e) {
      return e.key
    });
    var s = ".png";
    _.each(i,
    function(e) {
      e.src += s
    });
    var a = !1; !
    function(e) {
      var t;
      try {
        t = 0 == document.createElement("canvas").toDataURL("image/webp").indexOf("data:image/webp")
      } catch(e) {
        t = !1
      } !
      function(e) {
        a || (a = !0, s = e ? ".webp": ".png", _.each(i,
        function(e) {
          e.src = e.src.replace(/\.[^\.]+$/, s)
        }))
      } (t)
    } (),
    e.exports = {
      transformText: function(e) {
        return (e = e || "").replace(/(\[\W*?\])/g,
        function(e) {
          var t = _.filter(i,
          function(t) {
            return t.key === e
          })[0];
          return t ? '<img class="emoj" height="25px" width="25px" title="' + t.key + '" alt="' + t.key + '" src="' + t.src + '"/>': e
        })
      },
      list: i
    }
  },
  dIbF: function(e, t, i) {
    "use strict";
    e.exports = Backbone.Model.extend({
      urlRoot: "/card/getUserRank",
      defaults: {
        anchor_id: ""
      },
      initialize: function() {},
      getData: function() {
        var e = this;
        e.save({},
        {
          data: {
            anchor_id: e.get("anchorId")
          },
          success: function(t, i) {
            "A00000" === i.code ? e.trigger("ok", i.data) : e.trigger("fail", i.msg)
          },
          error: function(t, i) {
            e.trigger("fail", i.msg)
          }
        })
      }
    })
  },
  dJB4: function(e, t, i) {
    var s = i("sk80"),
    a = s.roomConfig,
    o = i("eGpb"),
    n = i("pnyl"),
    l = i("Rs+i");
    e.exports = Backbone.View.extend({
      templateMsg: _.template(n.msg),
      templateAnchorMsg: _.template(n.anchorMsg),
      levelTypeTmplMap: {
        1 : _.template(n.charmLavel),
        2 : _.template(n.qmLevel),
        3 : _.template(n.userLevel),
        4 : _.template(n.anchorLevel)
      },
      doms: {},
      levelUpEffectLists: [],
      levelUpEffectExist: !1,
      initialize: function() {
        this.el = $('<div id="_levelUpFlashContent" class="xmodal  xmodal-lvup-effect" style="position:absolute; left: -9999px; top:-9999px; width:500px; height:300px;"></div>').appendTo("body"),
        this.$el = $(this.el),
        this.msgList = [],
        this.doms.$otherMessageList = $("._publicMsgList"),
        this.listenMsg()
      },
      checkBind: !0,
      events: {
        "click #_levelUpFlashContent .xm-lvup-eff-close": "newClose",
        "click #_levelUpFlashContent .xm-lvup-eff-gx": "newSendGreetings"
      },
      listenMsg: function() {
        var e = this;
        s.event.on("chatTools.flashNotice",
        function(t) {
          var i = t.data.msgType;
          500003 === i && (2 == t.data.op_info.level_type ? a.get("onlineAnchorInfo").user_id == t.data.op_info.anchor_id && e.saveLevelUpList(t.data) : e.saveLevelUpList(t.data)),
          600001 === i && a.get("onlineAnchorInfo").user_id == t.data.op_info.anchor_id && e.saveLevelUpList(t.data),
          102004 !== i && 102005 !== i || e.showGreetings(t.data)
        })
      },
      setPosition: function() {
        var e = document.documentElement.clientWidth,
        t = document.documentElement.clientHeight;
        this.$el.css({
          left: e / 2 - 250 - Math.max(0, ($(window).width() - $("body").width()) / 2),
          top: t / 2 - 150,
          position: "absolute"
        })
      },
      saveLevelUpList: function(e) {
        this.levelUpEffectLists.push(e),
        this.checkExistBeforeRender()
      },
      checkExistBeforeRender: function() {
        this.levelUpEffectExist || this.checklevelUpEffectLists()
      },
      checklevelUpEffectLists: function() {
        var e = this.levelUpEffectLists;
        if (0 < e.length) {
          var t = e.shift();
          this.newShowLevelUp(t)
        }
      },
      newShowLevelUp: function(e) {
        var t = e.op_info.level_type,
        i = this.levelTypeTmplMap[t];
        if (4 == t) {
          var a = this.getAnchorId(),
          n = s.loginInfo.userId;
          e.op_info.level_type = a == n ? "1": "0"
        }
        e.isSupportWebp = o;
        var l = i(e);
        this.setPosition(),
        this.$el.html(l),
        this.levelUpEffectExist = !0
      },
      newClose: function() {
        this.$el.css({
          position: "absolute",
          left: -99999,
          top: -99999
        }),
        this.levelUpEffectExist = !1,
        this.checkExistBeforeRender()
      },
      newSendGreetings: function(e) {
        e.preventDefault();
        var t = this.getAnchorId(),
        i = t == s.loginInfo.userId ? 1 : 2;
        $.cookie("P00001") ? new l({
          room_id: a.get("roomId"),
          to_uid: 1 === i ? 0 : t,
          type: i
        }) : s.event.trigger("loginDialog.show"),
        this.newClose()
      },
      showGreetings: function(e) {
        var t;
        t = 1 === e.op_info.type ? this.templateAnchorMsg({
          userId: e.op_userInfo.user_id,
          userName: e.op_userInfo.nick_name
        }) : this.templateMsg({
          userId: e.op_userInfo.user_id,
          userName: e.op_userInfo.nick_name,
          anchorId: e.to_userInfo.user_id,
          anchorName: e.to_userInfo.nick_name
        }),
        s.event.trigger("roomMessageChat.append", t)
      },
      getAnchorId: function() {
        var e = $(".host-info");
        return e.data("onmic-is-anchor") ? e.data("onmic-uid") : a.get("roomOwner") || ""
      }
    })
  },
  e2tq: function(e, t, i) {
    var s;
    void 0 === (s = function() {
      return Backbone.Model.extend({
        urlRoot: "/action/setTmpAdmin",
        initialize: function() {},
        subSave: function(e) {
          var t = this,
          i = {
            type: "post",
            dataType: "json",
            data: e.data,
            success: function(e, i) {
              t.trigger("success", i)
            },
            error: function(e, i) {
              t.trigger("error", i)
            }
          };
          t.save(null, i)
        }
      })
    }.call(t, i, t, e)) || (e.exports = s)
  },
  e7oq: function(e, t, i) {
    "use strict";
    var s = i("sk80").tools.ishow,
    a = i("3imW"),
    o = i("rMRD"),
    n = i("ykb1");
    e.exports = Backbone.View.extend({
      model: {
        getMsgsList: new a,
        delMsgs: new o
      },
      template: _.template(n),
      datas: {
        timer: 0,
        clearList: {},
        showTimer: {},
        msgsList: null
      },
      events: {
        "click [id^=kb-notice-dialog] .close": "showHtml",
        "click [id^=kb-notice-dialog] .btn-sys-f": "stayHere"
      },
      initialize: function() {
        $.cookie("kb-lock", null, {
          expires: -1,
          path: "/",
          domain: "pps.tv"
        }),
        this.listenEvent()
      },
      listenEvent: function() {
        var e = this;
        e.model.getMsgsList.on("ok",
        function(t) {
          e.datas.msgsList = _.uniq(t.data, !1,
          function(t) {
            try {
              t.content = JSON.parse(t.content),
              e.datas.clearList[t.content.user_id] || (e.datas.clearList[t.content.user_id] = []),
              e.datas.clearList[t.content.user_id].push(t.id)
            } catch(t) {}
            return t.content.user_id
          }),
          e.showHtml()
        }),
        s.on("iShowLoginSuccess",
        function(t) {
          200 === t.code && (e.loadData(), e.circleTime())
        }),
        s.on("iShowLogout",
        function() {
          e.datas.timer = 0
        })
      },
      showHtml: function() {
        var e = this,
        t = null,
        i = "";
        if ($("[id^=kb-notice-dialog]:visible").remove(), !e.datas.msgsList.length) return ! 1;
        for (; (t = e.datas.msgsList.shift()) && 0 === t.content.is_anchor;) t = null;
        try {
          i = e.datas.clearList[t.content.user_id].join(",")
        } catch(i) {}
        if (!t.content.nick_name) return ! 1;
        i && e.model.delMsgs.subSave({
          data: {
            msgids: i,
            authcookie: $.cookie("P00001")
          }
        });
        try {
          delete e.datas.clearList[t.content.user_id]
        } catch(i) {}
        if (location.pathname === t.content.link_url) return ! 1;
        if (!$("#badgeExpireNotice").length) for (var a in s.trigger("showKaiBo"), $("body").append(e.template(t)), e.datas.clearList) if (e.datas.clearList.hasOwnProperty(a)) {
          e.datas.showTimer[t.id] = setInterval(function() {
            var i = e.$el.find("#kb-notice-dialog-" + t.id).find(".btn-sys-e");
            i.data("time", i.data("time") - 1),
            i.data("time") <= 0 && (e.showHtml(), clearInterval(e.datas.showTimer[t.id]))
          },
          1e3);
          break
        }
      },
      stayHere: function(e) {
        var t = $(e.currentTarget);
        clearInterval(this.datas.showTimer[t.data("msgId")]),
        this.showHtml()
      },
      circleTime: function() {
        var e = this;
        clearInterval(e.datas.timer),
        e.datas.timer = setInterval(function() {
          e.loadData()
        },
        6e4)
      },
      loadData: function() {
        this.model.getMsgsList.subSave({
          data: {
            authcookie: $.cookie("P00001") || ""
          }
        })
      }
    })
  },
  eB8c: function(e, t, i) {
    var s;
    void 0 === (s = function() {
      return Backbone.Model.extend({
        urlRoot: "/action/banUserDo",
        initialize: function() {},
        subSave: function(e) {
          var t = this,
          i = {
            type: "post",
            dataType: "json",
            data: e.data,
            cache: !1,
            success: function(e, i) {
              t.trigger("success", i)
            },
            error: function(e, i) {
              t.trigger("error", i)
            }
          };
          this.save(null, i)
        }
      })
    }.call(t, i, t, e)) || (e.exports = s)
  },
  eGpb: function(e, t) {
    var i;
    try {
      i = 0 == document.createElement("canvas").toDataURL("image/webp").indexOf("data:image/webp")
    } catch(e) {
      i = !1
    }
    e.exports = i
  },
  eRGi: function(e, t, i) {
    "use strict";
    var s = i("sk80"),
    a = s.roomConfig,
    o = s.ui.Dialog,
    n = i("tUqm"),
    l = i("fKcl");
    e.exports = Backbone.View.extend({
      model: new l,
      template: _.template(n.roomEditBasic),
      csses: {
        roomName: "[name=room_name]",
        notice: "[name=notice_msg]",
        welcome: "[name=welcome_msg]",
        ending: "[name=ending_msg]",
        roomNameTip: "._forRoomName",
        noticeTip: "._forNotice"
      },
      events: {
        "keydown input": "changeText",
        "keyup input": "changeText",
        "click ._ok": "clickSave"
      },
      datas: {
        roomId: a.get("roomId"),
        roomTitle: "",
        tipMsg: {
          roomName: "请输入房间名称！",
          notice: "请输入公告内容！"
        },
        maxLen: {
          roomName: 26,
          notice: 60
        }
      },
      setDoms: function() {
        var e = this.$el,
        t = this.csses;
        this.doms = {
          $roomName: $(t.roomName, e),
          $notice: $(t.notice, e),
          $welcome: $(t.welcome, e),
          $ending: $(t.ending, e),
          $roomNameTip: $(t.roomNameTip, e),
          $noticeTip: $(t.noticeTip, e)
        }
      },
      initialize: function(e) {
        var t = this;
        t.$el.html(t.template(e.data)),
        t.datas.roomTitle = e.data.room_name,
        t.setDoms(),
        t.doms.$dialogEl = e.dialogEl,
        t.doms.$parentEl = e.parentEl,
        t.listenEvent()
      },
      listenEvent: function() {
        var e = this;
        e.model.off(),
        e.model.on("ok",
        function() {
          e.doms.$parentEl.find("strong").text(e.datas.roomTitle),
          e.doms.$dialogEl.find("._def").trigger("click")
        }),
        e.model.on("fail",
        function(t) {
          e.dialogError(t)
        })
      },
      changeText: function(e) {
        var t = this,
        i = $(e.currentTarget),
        s = i.val(),
        a = i.attr("name"),
        o = "room_name" === a ? t.datas.maxLen.roomName: t.datas.maxLen.notice,
        n = "room_name" === a ? t.doms.$roomNameTip: t.doms.$noticeTip;
        t.getLength(s) >= o && i.val(t.subTxt(s, o)),
        "" !== s && n.empty()
      },
      getLength: function(e) {
        var t = e.match(/[^\x00-\x80]/g) || [];
        return e.length + t.length
      },
      subTxt: function(e, t) {
        for (var i = e.length,
        s = 0,
        a = 0; s < i && (255 < e.charCodeAt(s) ? a += 2 : (e[s], a++), !(t < a)); s++);
        return e.substring(0, s)
      },
      checkErr: function(e) {
        var t = this.doms;
        switch (e) {
        case "name_err":
          t.$roomNameTip.html(this.datas.tipMsg.roomName),
          t.$roomName.focus();
          break;
        case "notice_err":
          t.$noticeTip.html(this.datas.tipMsg.notice),
          t.$notice.focus()
        }
      },
      clickSave: function() {
        var e, t = this;
        return t.model.set({
          roomId: t.datas.roomId,
          roomName: $.trim(t.doms.$roomName.val()),
          noticeMsg: $.trim(t.doms.$notice.val()),
          welcomeMsg: $.trim(t.doms.$welcome.val()),
          endingMsg: $.trim(t.doms.$ending.val())
        },
        {
          validate: !0
        }),
        (e = t.model.validationError) ? t.checkErr(e) : (t.datas.roomTitle = $.trim(t.doms.$roomName.val()), t.model.getData()),
        !1
      },
      dialogError: function(e) {
        new o({
          title: "提示",
          content: e,
          btn: [{
            clsName: "btn-sye",
            type: "ok",
            text: "确定"
          }]
        })
      }
    })
  },
  eeED: function(e, t) {
    e.exports = '<div data-js-dom="qrLeftSide" class="tip-block nav-appdown-tip" style="top: 4px;left: 103.5px;display: none;"><div class="arr arr-left" style="top:140px;"><div class="arr-in"></div></div><div class="qr"></div>扫码下载奇秀app</div>'
  },
  exB7: function(e, t, i) {
    var s, a;
    s = [i("jvBd"), i("9/Be"), i("HIVA")],
    void 0 === (a = function(e, t, s) {
      var a = i("sk80"),
      o = (a.tools.base, a.tools.inputTool, a.roomConfig),
      n = a.ui.Dialog;
      return Backbone.View.extend({
        template: _.template('<% var smallPic="24*24";%><div class="tab-content open-noble tab-cur"><div class="figure-panel"><div class="figure"></div><div class="figure-170"><div class="list-group"><span class="label mt10">贵族身份：</span><div class="desc"><ol class="guard-list _itemList"><% _.each(badge_list,function(item,key){  %><li class="_item"><a class="lv-bg" href="#"><img width="24" height="24"src="<%=item.pics[smallPic]%>" /></a></li><%});%></ol></div></div><div class="list-group"><span class="label">开通时间：</span><div class="desc"><span class="radio-sya radio-sya-checked"  data-value="1"></span><label>1个月</label><span class="radio-sya ml15"  data-value="3"></span><label>3个月</label><span class="radio-sya ml15"  data-value="6"></span><label>6个月</label></div></div><div class="list-group _activityBox"><span class="label">活&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;动：</span><div class="desc _activityList"></div></div><div class="list-group"><span class="label">价&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;格：</span><div class="desc"><span class="del-text grey _oldPrice"><em class="price _oPrice"><%=badge_list[0].discount_price||badge_list[0].price %></em>奇豆</span><span class="split _oldPrice">/</span><span class="sales"><em class="price em  _nowPrice"><%=badge_list[0].discount_price||badge_list[0].price %></em>奇豆</span><span class="t-alert"></span></div></div><div class="dialog-act"><a class="btn btn-sye  _buyNobilityOk" href="#"></a></div></div></div><div class="noble-detail"> </div></div>'),
        templateDetail: _.template('<p><span class="title">房间特权<span class="arrow"></span></span><span><span class="ico ico-perm"></span>贵族通道</span><span class="split"><span class="ico ico-perm"></span>防踢（<%if(outRoom) {%><em class="em-l"><%=outRoom%></em>以下不可踢<%} else{%>均不可踢<%}%>）</span></p><p><span class="title">身份特权<span class="arrow"></span></span><span><span class="ico ico-perm"></span>身份标识</span><span class="split"><span class="ico ico-perm"></span>贵宾专席</span><span class="split"><span class="ico ico-perm"></span>排名优先</span><span class="split"><span class="ico ico-perm"></span><%=inEffect%>入场动画</span></p><p><span class="title">喊话特权<span class="arrow"></span></span><span><span class="ico ico-perm"></span>免费喊话<%=shoutTime ? ("（"+shoutTime+"）") : ""%></span><span class="split"><span class="ico ico-perm"></span>喊话特效<em class="<%=shoutColor[1]%>"><%=shoutColor[0]%></em>\x3c!-- <em class="em-bg-b">蓝色</em><em class="em-bg-p">紫色</em> --\x3e</span><span class="split <%= !antiShout ? "no-perm" : ""%>"><span class="ico ico-perm"></span>防喊话被禁<%if(antiShout){%>（<%if(antiShout === "all"){%>均不可禁<%} else{%><em class="em-l"><%=antiShout%></em>以下不可禁<%}%>）<% }%></span></p><p><span class="title">聊天特权<span class="arrow"></span></span><span class=""><span class="ico ico-perm"></span>拒绝上麦</span><span class="split"><span class="ico ico-perm"></span>无字数限制</span><span class="split <%= !antiBan ? "no-perm" : ""%>"><span class="ico ico-perm"></span>防禁文本<%if(antiBan){%>（<em class="em-l"><%=antiBan%></em>以下不可禁）<%}%></span></p><p><span class="title">奖励特权<span class="arrow"></span></span><span><span class="ico ico-perm"></span>每日签到双倍奖励</span></p>'),
        templateBigPic: _.template('<img width="100" height="100" src="<%=pics["100*100"]%>" ><p class="name"><%=name%></p><p class="em-o"><%=restTime%></p><a class="prev-btn" href="#"><span class="ico ico-prev-syc"></span></a><a class="next-btn" href="#"><span class="ico ico-next-syc"></span></a>'),
        templateActivity: _.template('<%$.each(data, function(i, v) {%><p class="em-o"><%=v.description%></p><%});%>'),
        templateOkMessage: _.template('<div class="content"><p>您已获得<%=name%>身份！</p><p><span class="red">使用时间<%=month%>个月</p><%=rebateHtml%></div>'),
        events: {},
        csses: {
          bigPicBox: ".figure",
          monthList: "._payMonth",
          price: "._oPrice",
          nowPrice: "._nowPrice",
          month: ".radio-sya",
          buyBtn: "._buyNobilityOk",
          itemList: "._itemList",
          item: "._item",
          buyTip: ".t-alert",
          restTime: "._restTime",
          detail: ".noble-detail",
          activityBox: "._activityBox",
          activityList: "._activityList",
          oldPrice: "._oldPrice"
        },
        doms: {},
        datas: {
          rights: {},
          tipView: null
        },
        initialize: function(i) {
          _.bindAll(this, "buy");
          var s = this;
          this.model = new t,
          this.callback = i.callback,
          this.buyModel = new e,
          this.initBuyModel(i),
          this.setDatas(),
          this.model.nobilityBox(function() {
            s.render(),
            s.setDoms(),
            s.bindEvents(),
            s.setCurrent(),
            s.trigger("loaded")
          })
        },
        initBuyModel: function(e) {
          this.buyModel.clear({
            silent: !0
          });
          var t = $.extend({},
          {
            anchor_id: e.anchor_id || 0,
            time_long: 1,
            beginLevel: e.beginLevel || 0
          },
          this.getRoomInfo());
          this.buyModel.set(t)
        },
        render: function() {
          var e = $("._buyContainer").html(""),
          t = this.template(this.model.toJSON());
          this.el = $(t).appendTo(e),
          this.$el = $(this.el)
        },
        setDatas: function() {
          this.datas.rights = {
            1 : {
              outRoom: "管理员",
              shoutColor: ["蓝色", "em-bg-general"],
              shoutTime: "5秒/次",
              antiBan: 0,
              antiShout: 0,
              inEffect: "弹簧鞋"
            },
            2 : {
              outRoom: "管理员",
              shoutColor: ["蓝色", "em-bg-general"],
              shoutTime: "3秒/次",
              antiBan: 0,
              antiShout: 0,
              inEffect: "竹蜻蜓"
            },
            3 : {
              outRoom: "管理员",
              shoutColor: ["蓝色", "em-bg-general"],
              shoutTime: 0,
              antiBan: "管理员",
              antiShout: 0,
              inEffect: "喷射器"
            },
            4 : {
              outRoom: "房主",
              shoutColor: ["紫色", "em-bg-minor"],
              shoutTime: 0,
              antiBan: "管理员",
              antiShout: "白银守护",
              inEffect: "摩托车"
            },
            5 : {
              outRoom: "房主",
              shoutColor: ["紫色", "em-bg-minor"],
              shoutTime: 0,
              antiBan: "管理员",
              antiShout: "黄金守护",
              inEffect: "轿车"
            },
            6 : {
              outRoom: "房主",
              shoutColor: ["紫色", "em-bg-minor"],
              shoutTime: 0,
              antiBan: "房主",
              antiShout: "房主",
              inEffect: "直升机"
            },
            7 : {
              outRoom: "",
              shoutColor: ["橙色", "em-bg-primary"],
              shoutTime: 0,
              antiBan: "房主",
              antiShout: "all",
              inEffect: "火箭"
            }
          }
        },
        setDoms: function() {
          var e = this.$el,
          t = this.csses;
          this.doms = {
            $bigPicBox: $(t.bigPicBox, e),
            $monthList: $(t.monthList, e),
            $price: $(t.price, e),
            $nowPrice: $(t.nowPrice, e),
            $buyBtn: $(t.buyBtn, e),
            $itemList: $(t.itemList, e),
            $buyTip: $(t.buyTip, e),
            $restTime: $(t.restTime, e),
            $detail: $(t.detail, e),
            $activityList: $(t.activityList, e),
            $activityBox: $(t.activityBox, e),
            $oldPrice: $(t.oldPrice, e)
          }
        },
        setCurrent: function() {
          var e = this.buyModel.get("beginLevel") || this.model.toJSON().user_badge_info.badge_level || 0,
          t = this.model.toJSON().badge_list,
          i = this.csses,
          s = 0;
          $.each(t,
          function(t, i) {
            if (i.level == e) return s = t,
            !1
          }),
          this.doms.$itemList.find(i.item).eq(s).trigger("click")
        },
        clickMonth: function(e) {
          var t = e.data("value");
          this.selectMonth(t, e),
          this.doms.$buyTip.html("")
        },
        selectMonth: function(e, t) {
          t.addClass("radio-sya-checked").siblings().removeClass("radio-sya-checked"),
          this.buyModel.set({
            time_long: e
          }),
          this.getValue()
        },
        selectNobility: function(e) {
          var t = e.index();
          this.changeNobility(t, e)
        },
        changeNobility: function(e, t) {
          var i, s, a, o = this.doms,
          n = this.csses,
          l = (t = t || this.doms.$itemList.find(n.item).eq(e), this.model.toJSON()),
          r = l.badge_list[e],
          c = l.user_badge_info.badge_level || 0,
          d = r.level,
          u = r.activity;
          this.buyModel.set({
            product_id: r.product_id,
            money_type: r.money_type,
            price: r.price,
            discount_price: r.discount_price,
            badge_level: d,
            name: r.name
          }),
          this.getValue(),
          t.addClass("selected").siblings().removeClass("selected"),
          0 < u.length ? (o.$activityBox.show(), o.$activityList.html(this.templateActivity({
            data: u
          }))) : (o.$activityBox.hide(), o.$activityList.html("")),
          this.changeDetail(d),
          d === c && (s = l.user_badge_info.time_length, a = this.timeFormat(s)),
          r.restTime = a,
          o.$bigPicBox.html(this.templateBigPic(r)),
          i = c == d ? "立即续费": "立即开通",
          o.$buyBtn.html(i),
          this.doms.$buyTip.html("")
        },
        changeDetail: function(e) {
          var t = this.datas.rights[e];
          this.doms.$detail.html(this.templateDetail(t))
        },
        clickNext: function(e) {
          var t = this.doms.$itemList,
          i = t.find(".selected").index() + 1;
          i = t.find("li").length <= i ? 0 : i,
          this.changeNobility(i)
        },
        clickPrev: function() {
          var e = this.doms.$itemList,
          t = e.find(".selected").index() - 1,
          i = e.find("li").length;
          t = t < 0 ? i - 1 : t,
          this.changeNobility(t)
        },
        bindEvents: function() {
          var e = this.$el,
          t = this;
          e.on("loginclick", "._buyNobilityOk",
          function() {
            return t.buyNobility(),
            !1
          }),
          e.on("click", ".radio-sya",
          function() {
            return t.clickMonth($(this)),
            !1
          }),
          e.on("click", "li._item",
          function() {
            return t.selectNobility($(this)),
            !1
          }),
          e.on("click", ".next-btn",
          function() {
            return t.clickNext($(this)),
            !1
          }),
          e.on("click", ".prev-btn",
          function() {
            return t.clickPrev($(this)),
            !1
          })
        },
        getValue: function() {
          var e = this.buyModel.toJSON(),
          t = e.price * e.time_long,
          i = e.discount_price * e.time_long;
          this.doms.$nowPrice.html(i),
          this.doms.$price.html(t),
          t == i ? this.doms.$oldPrice.hide() : this.doms.$oldPrice.show()
        },
        getRoomInfo: function() {
          var e = {
            room_id: 0,
            live_id: 0
          };
          try {
            e.room_id = o.room_id || o.get && o.get("roomId") || 0,
            e.live_id = o.room_id || o.get && o.get("liveId") || 0
          } catch(e) {}
          return e
        },
        showTip: function(e, t, i) {
          var a = this.datas.tipView;
          a || (this.datas.tipView = a = new s),
          a.render(e, t, i),
          a.show()
        },
        buyNobility: function(e) {
          return this.model.get(),
          !this.buying && (this.buying = !0, !!this.checkLevel() && void this.buy())
        },
        buy: function() {
          var e = this;
          this.buyModel.buyNobility(function(t, i) {
            e.trigger("buySuccessCallBack"),
            e.showSuccess(e.buyModel.toJSON()),
            e.buying = !1
          },
          function(t) {
            var i = t && t.msg || "订单失败";
            202 === t.code && (i = "余额不足！请<a class='em underline' href='/recharge/recharge?balance=" + (t.data.money || 0) + "' target='_blank'>立即充值</a>"),
            e.doms.$buyTip.html(i),
            e.buying = !1
          })
        },
        checkLevel: function() {
          var e = this,
          t = this.model.toJSON().user_badge_info,
          i = this.buyModel.toJSON(),
          s = i.time_long,
          a = parseInt(t.badge_level),
          o = parseInt(i.badge_level),
          n = t.entity_name,
          l = i.name,
          r = a === o ? 1 : a < o ? 2 : 3,
          c = t.expire_time + 30 * s * 24 * 60 * 60,
          d = i.price * s;
          return ! a || (this.showTip({
            nowName: n,
            name: l,
            month: s,
            type: r,
            endTime: c,
            price: d
          },
          function() {
            e.buy()
          },
          function() {
            e.buying = !1
          }), !1)
        },
        showSuccess: function(e) {
          var t, i = this,
          s = e.data.order_info.rebate_data,
          a = "";
          $("._def").trigger("click"),
          s.length && (a = 0, _.each(s,
          function(e) {
            a += parseInt(e)
          }), a = "<p>您已获得活动返钻：" + a + "钻石</p>"),
          t = this.templateOkMessage({
            name: e.name,
            month: e.time_long,
            rebateHtml: a
          });
          var o = new n({
            title: "消息",
            content: t
          });
          setTimeout(function() {
            i.callback ? (o.remove(), i.callback(e)) : window.location.reload()
          },
          3e3),
          this.refreshAccount()
        },
        timeFormat: function(e) {
          var t = e / 60,
          i = t / 60,
          s = Math.floor(i / 24);
          return i = Math.ceil(24 <= i ? i % 24 : i),
          t = Math.ceil(60 <= t ? t % 60 : t),
          "（剩余" + s + "天" + i + "小时）"
        },
        refreshAccount: function() {
          a.event.trigger("getUserAccount.refreshAccount")
        }
      })
    }.apply(t, s)) || (e.exports = a)
  },
  f6A1: function(e, t) {
    e.exports = {
      layout: '<div class="scroll-panel scroll-panel-online"><div class="scroll-content"><dl class="ol-mic"></dl><dl class="ol-audience"></dl></div></div><i class="xiu-ico xiu-ico-find _popSearch">&#xe649;</i><div class="kai-fake _fake">观众<a class="up-vp _buyBadge" href="javascript:;" data-pb-rseat="2"><%=already?"续费":"开通"%>贵族</a></div>',
      micList: '<%if(items.length){%><dt>麦序</dt><%}%><%_.each(items, function(v, i){%><dd class="u-item"><span class="num"><%=i+1%></span><%=v.iconList%><a class="name" href="javascript:void(0);" node-type="userHoverTip" data-user_id="<%=v.user_id%>" data-nick_name="<%-v.nick_name%>"><%-v.nick_name%></a></dd><%})%>',
      audienceTitle: '<dt>观众<a class="up-vp _buyBadge" href="javascript:;" data-pb-rseat="2"><%=already?"续费":"开通"%>贵族</a></dt>',
      audienceList: '<%_.each(items, function(v, i){%><dd class="u-item"><%=v.iconList%><a class="name" href="javascript:void(0);" node-type="userHoverTip" data-user_id="<%=v.user_id%>" data-nick_name="<%-v.nick_name%>"><%-v.nick_name%></a></dd><%})%><%if(remain){%><dd class="u-item"><a class="no-name" href="javascript:void(0);">已为您隐藏了<%=remain%>位未登录用户</a></dd><%}%>'
    }
  },
  fKcl: function(e, t, i) {
    "use strict";
    e.exports = Backbone.Model.extend({
      urlRoot: "/action/setRoomInfo",
      defaults: {
        room_id: "",
        room_name: "",
        notice_msg: "",
        ending_msg: "",
        welcome_msg: ""
      },
      initialize: function() {},
      validate: function(e) {
        return "" === e.roomName ? "name_err": "" === e.noticeMsg ? "notice_err": void 0
      },
      getData: function() {
        var e = this;
        e.save({},
        {
          data: {
            room_id: e.get("roomId"),
            room_name: e.get("roomName"),
            notice_msg: e.get("noticeMsg"),
            welcome_msg: e.get("welcomeMsg"),
            ending_msg: e.get("endingMsg")
          },
          success: function(t, i) {
            200 === i.code ? e.trigger("ok") : e.trigger("fail", i.msg)
          },
          error: function(t, i) {
            e.trigger("fail", i.msg)
          }
        })
      }
    })
  },
  fMCT: function(e, t) {
    e.exports = {
      1 : '<div class="gs-tip" data-tips-type="<%=tipsType%>" data-entity-type="<%= info.entity_type %>"><div class="gs-tip-arr"><div class="gs-tip-arr-in"></div></div><div class="gst-main"><div class="gstm-fl"><img src="<%=info.pic_png%>" alt="<%=info.name%>"><%if(~~info.is_lucky){%><div class="lucky-pres">幸运礼物</div><%}%><%if(~~info.is_virtual_dressing){%><div class="lucky-pres">穿戴礼物</div><%}%></div><div class="gstm-fr"><p class="p-normal"><span><%=info.name%></span> <%if(info.price && info.tabId !== 9999){%>(<em><%=info.price%></em><%=info.payTypeWords%>）</p><%}%><p class="p-des"><%-info.description%></p><%if(info.effect_nums.length){%><p class="p-normal">赠送<em><%=info.effect_nums[0]%></em>个触发礼物特效</p><%}%><% if (info.entity_type === \'2\') { %><div class="gst-btn-act"><a href="javascript:;" class="btn-confirm" data-js-dom="useProps" data-sub-type="<%= ~~info.sub_type %>" data-product-id="<%= info.product_id%>">使用</a></div><% } %></div></div><%if(info.weekstar_title){%><div class="gst-zhouxing"><i class="guan-pic">周星冠名</i><span class="name"><%-info.weekstar_title%></span></div><%}%></div>',
      2 : '<div class="gs-tip" data-tips-type="<%=tipsType%>"><div class="gs-tip-arr"><div class="gs-tip-arr-in"></div></div><p class="gift-carousel-tit"><%=packInfo.entity_name%></p><div class="gift-carousel"><div class="gift-crl-cont"><ul class="gift-crl-wrap" style="width:<%=info.length*58%>px;left:0px;" data-js-dom="packList"><%_.forEach(info, function(v,k){%><li><div class="gift-img"><img src="<%=v.pic_png%>" alt="<%=v.name%>"><div class="tag-num"><%=v.num%></div></div><div class="gift-name"><%=v.name%></div></li><%})%></ul></div><%if(info.length>4){%><a href="javascript:void(0);" class="gift-crl-nav gift-crl-nav-left xiu-ico disabled">&#xe62a;</a><a href="javascript:void(0);" class="gift-crl-nav gift-crl-nav-right xiu-ico">&#xe627;</a><%}%></div><div class="gst-btn-act"><a href="javascript:void(0);" class="btn-confirm" data-js-dom="openPack">打开</a></div></div>',
      3 : '<div class="gs-tip" data-tips-type="<%=tipsType%>"><div class="gs-tip-arr"><div class="gs-tip-arr-in"></div></div><div class="gst-main"><div class="gstm-fl"><img src="<%=info.entity_pic%>" alt="<%=info.name%>"></div><div class="gstm-fr"><p class="p-normal"><span><%=info.name%></span></p><div class="p-des" id="abc"><%if(info.level>=(badge.badge_level|0)){%>使用<%}%>数量: <%if(info.level< badge.badge_level){%><%=info.total_num%><%}%></div><%if(info.level>=~~badge.badge_level){%><p class="p-danger">有效期<%if(info.level == badge.badge_level){%>延长<%}%>至：<span class="_nextTime"></span></p><%}%></div></div><div class="gst-main"><%if((info.level != badge.badge_level) && badge.badge_level){%><p class="p-des">您当前拥有<em><%=badge.realName%></em>身份，有效期至<%=badge.YMD%>，<%if(info.level>badge.badge_level){%>确认升级后当前身份将<em>永久失效</em><%} else{%>请在该身份失效后再使用<%}%></p><%}%><%if(info.level>=~~badge.badge_level){%><div class="gst-btn-act"><a href="javascript:void(0);" class="btn-confirm" data-js-dom="useBadge"><%if(info.level>badge.badge_level){%>确认升级<%}else {%>确定<%}%></a></div><%}%></div></div>'
    }
  },
  faO6: function(e, t, i) {
    var s = i("sk80"),
    a = s.tools.clientPlug,
    o = s.tools.base,
    n = "[IQIYI-loginReg] =>";
    function l(e) {
      console.log(n, e)
    }
    var r, c = !(document.domain = "pps.tv"),
    d = {
      oprUserInfo: !0,
      agenttype: 78,
      ptid: "01010041010000000000",
      pingbackParams: "pf=1&p=10&p1=101&p2=1016"
    };
    function u(e, t) {
      var i = "//static.iqiyi.com/js/newLoginRegSDK/loginRegPackVer.js?v=" + Math.random(),
      s = document.getElementsByTagName("HEAD").item(0),
      a = document.createElement("script");
      a.type = "text/javascript",
      a.src = i,
      s.appendChild(a);
      var o = navigator.userAgent.toLowerCase();
      /msie/.test(o) ? a.onreadystatechange = function() { / loaded | complete / .test(a.readyState) && window.requireLoginReg(e, t)
      }: a.onload = function() {
        window.requireLoginReg(e, t)
      }
    }
    function p(e) {
      window.loginRegPackage && (r || (r = window.loginRegPackage.init(d)), r.un("registed"), r.un("login"), r.un("qipaLoginIfrHide"), r.un("qipaLoginIfrRendered"), r.on("registed",
      function() {
        l("监听注册成功后")
      }), r.on("login",
      function() {
        var e;
        l("监听登录成功后"),
        o.trigger("loginAct"),
        e = function() {
          m()
        },
        s.userModel.trigger("getUserInfo", $.cookie("P00001"),
        function() {
          e && e()
        },
        function() {
          e && e()
        })
      }), r.on("qipaLoginIfrHide",
      function() {
        l("监听关闭登录注册弹窗时后")
      }), r.on("qipaLoginIfrRendered",
      function() {
        l("登录注册弹窗加载完")
      }), r.openLoginRegWindow(e))
    }
    function h() {
      window.loginRegPackage && (r || (r = window.loginRegPackage.init(d)), r.un("logout"), r.on("logout",
      function() {
        l("监听登出成功后"),
        $.removeCookie("QX00003", {
          domain: "pps.tv",
          path: "/"
        }),
        m(),
        o.trigger("iShowLogout")
      }), r.logout())
    }
    function m() {
      a.setWebLoginInfo({
        uid: s.loginInfo.userId,
        auth: $.cookie("P00001")
      })
    }
    s.event.on("loginDialog.show",
    function(e) {
      if ($.cookie("P00001") && "deleted" !== $.cookie("P00001")) l("当前已登录，无需加载登录框");
      else {
        e = e || {};
        var t, a = {};
        l("触发登录注册"),
        s.env.isPcnClient ? i("AQTH").login() : ("register" === e.whichShow && (a.isReg = !0, l("登录类型")), t = (t = a) || {},
        c ? window.loginRegPackage && p(t) : (u(t, p), c = !0))
      }
    }),
    s.event.on("logout",
    function() {
      c ? window.loginRegPackage && h() : (u({},
      h), c = !0)
    })
  },
  fnvi: function(e, t, i) {
    var s, a, o = i("sk80"),
    n = o.roomConfig;
    s = [i("eB8c")],
    void 0 === (a = function(e) {
      var t = null;
      return new(Backbone.View.extend({
        el: "body",
        model: new e,
        events: {
          'click [node-type="refuseInMIC"]': "refuseMic"
        },
        refuseMic: function(e) {
          e.preventDefault();
          var i = $(e.currentTarget),
          s = this;
          clearTimeout(t),
          $(e.currentTarget).children(".radio-syb").toggleClass("radio-syb-checked"),
          t = setTimeout(function() {
            s.model.subSave({
              data: {
                room_id: n.get("roomId"),
                type: 4,
                to_uid: o.loginInfo.userId,
                op_type: i.children("span.radio-syb").is(".radio-syb-checked") ? 1 : 2
              }
            })
          },
          1500)
        }
      }))
    }.apply(t, s)) || (e.exports = a)
  },
  fsd3: function(e, t, i) {
    var s = i("3I0v"),
    a = i("KsOM"),
    o = i("eeED"),
    n = i("sk80");
    e.exports = Backbone.View.extend({
      el: ".fix-nav",
      initialize: function() {
        var e = this;
        this.kanguo = new s,
        this.guanzhu = new a,
        this.appendQr(),
        n.tools.hoverDelay($(".nav-app"), null,
        function(t) {
          var i = e.$qr;
          i.show(),
          i.is(":visible") && i.css(e.setPos($(t.currentTarget), -130, 41))
        },
        300,
        function(t) {
          e.$qr.hide()
        },
        300, '[data-js-dom="qrLeftSide"]'),
        ISHOW.on("iShowLoginSuccess",
        function(t) {
          200 === t.code && e.render()
        }),
        ISHOW.on("iShowLogout",
        function(t) {
          e.kanguo.$btn.remove(),
          e.guanzhu.$btn.remove()
        }),
        this.guanzhu.on("hoverTips",
        function(t) {
          clearTimeout(e.GZTimer),
          "mouseleave" === t.type && (e.GZTimer = setTimeout(function() {
            e.$el.find('[data-js-dom="guanzhu"]').removeClass("_show"),
            e.guanzhu.remove()
          },
          300))
        }),
        this.kanguo.on("hoverTips",
        function(t) {
          clearTimeout(e.KGTimer),
          "mouseleave" === t.type && (e.KGTimer = setTimeout(function() {
            e.$el.find('[data-js-dom="kanguo"]').removeClass("_show"),
            e.kanguo.remove()
          },
          300))
        })
      },
      render: function() {
        this.kanguo.setElement(".nav-menu >li:not(.nav-app):last"),
        this.kanguo.render(),
        this.guanzhu.setElement(".nav-menu >li:not(.nav-app):last"),
        this.guanzhu.render()
      },
      events: {
        "click .nav-switch": "switchSideBar"
      },
      appendQr: function() {
        $("body").append(o),
        this.$qr = $('[data-js-dom="qrLeftSide"]')
      },
      switchSideBar: function(e) {
        var t = $(e.currentTarget);
        _.forEach(t.find(".xiu-ico"),
        function(e) {
          $(e).css("display", "block" == $(e).css("display") ? "none": "block")
        }),
        $(".site-body").toggleClass("nav-unfold")
      },
      setPos: function(e, t, i) {
        var s = e.offset(),
        a = $(document).scrollTop();
        return s.top = s.top - a + t,
        s.left = 0 + e.outerWidth() + i,
        s
      }
    })
  },
  g0Hh: function(e, t) {
    e.exports = '<li data-js-dom="kanguo" data-auto-hide="0"><a class="nav-menu-item" href="javascript:void(0);"><i class="xiu-ico xiu-ico-clock">&#xe62c;</i><span>看过</span></a></li>'
  },
  gOnX: function(e, t) {
    e.exports = '<% _.each(items, function(v) { %><li><div class="rr-box"><a href="/room/<%= v.room_id %>" data-pb-rseat="1"><img src="<%= v.image_square_big %>" alt="<%= _.escape(v.nick_name) %>"><div class="dummy-play-icon"></div><div class="rr-info"><div class="name"><%= _.escape(v.nick_name) %></div><div class="online-guy"><%= v.total_num %>人</div></div></a></div></li><% }); %>'
  },
  gQqq: function(e, t, i) {
    var s, a = i("sk80"),
    o = a.roomConfig,
    n = a.event,
    l = a.ui.userIcon,
    r = a.ui.Toast,
    c = i("3gbC"),
    d = i("vtTN"),
    u = a.ui.LimitInput,
    p = a.tools.isDomDescendant,
    h = i("YUNM"),
    m = i("dHyl"),
    f = (s = [[1, 2, 3], [4, 5, 6], [7]],
    function(e) {
      for (var t = -1,
      i = 0; i < s.length; i++) if ( - 1 < _.indexOf(s[i], e)) {
        t = i;
        break
      }
      return t
    });
    e.exports = Backbone.View.extend({
      model: new h,
      template: {
        message: _.template(c.message),
        shout: _.template(c.shout)
      },
      events: {
        "click ._emotion": "toggleEmotion",
        "loginclick ._send:not(.disabled)": "sendMessage",
        "keyup ._input": "enterMessage"
      },
      initialize: function(e) {
        _.extend(this.props = {},
        e),
        this.emotion = new d,
        this.model.set("room_id", o.get("roomId")),
        this.render(),
        this.listenEvents()
      },
      render: function() {
        this.$el.append(c.layout),
        this.emotion.setElement($(".chat-emotion-tip", this.$el)),
        this.$wrapper = $("._wrapper", this.$el),
        this.$input = $("._input", this.$el),
        this.$remainNum = $("._remainNum", this.$el),
        this.$send = $("._send", this.$el),
        this.$ctd = $("._ctd", this.$el),
        this.$emotion = $("._emotion", this.$el),
        this.$emotionTip = $("._emotionTip", this.$el),
        this.limitInput = new u({
          dom: this.$input,
          max: 30
        })
      },
      toggleEmotion: function() {
        this.emotion.toggle()
      },
      sendMessage: function() {
        if (!this.model.get("canClick")) return ! 1;
        this.model.set("canClick", !1),
        this.model.set("content", this.limitInput.model.get("value")),
        this.model.getData(),
        this.limitInput.reset()
      },
      enterMessage: function(e) {
        if (13 === e.which) {
          if (!$.cookie("P00001")) return a.event.trigger("loginDialog.show"),
          this.$input.blur(),
          !1;
          this.sendMessage()
        }
      },
      disableSendBtn: function() {
        var e = this.model.get("countdownTime");
        if (0 !== e) {
          var t = this.$send,
          i = this.$ctd,
          s = this;
          t.hide(),
          i.text(e--).show();
          var a = setInterval(function() {
            i.text(e--),
            -1 === e && (i.hide(), t.show(), s.model.set("canClick", !0), clearInterval(a))
          },
          1e3)
        } else this.model.set("canClick", !0)
      },
      getColor: function(e) {
        var t = f(~~e.badge_level),
        i = Math.max(t, _.indexOf([1, 2, 3], ~~e.guard_level));
        return i < 0 ? (colorIndex = i, 7 <= ~~e.charm_level && (colorIndex = 0)) : colorIndex = i,
        e.user_id == o.get("roomOwner") && (colorIndex = 2),
        ["blue", "purple", "yellow"][colorIndex]
      },
      updateCountdownTime: function(e, t) {
        var i = 0;
        0 < e || 2 < t ? i = 0 : 2 == t ? i = 3 : 1 != t && o.get("loginUserId") != o.get("roomOwner") || (i = 5),
        this.model.set("shoutCountdownTime", i),
        2 === this.model.get("type") && this.model.set("countdownTime", i)
      },
      listenEvents: function() {
        var e = this,
        t = this.limitInput.model;
        $("body").on("click",
        function(t) {
          var i = t.target;
          p(e.$emotionTip.get(0), i, !0) || i === e.$emotion.get(0) || e.emotion.fold()
        }),
        this.model.on("invalid",
        function(e, t) {
          r({
            selector: ".chat-inputblock",
            msg: t
          }),
          this.set("canClick", !0)
        }),
        this.model.on("success",
        function(t, i) {
          e.disableSendBtn(),
          200 === i.code ? 1 === this.get("type") ? this.set("successNormal", this.get("content")) : 2 === this.get("type") && this.set("successShout", this.get("content")) : 204 == i.code ? new a.ui.Dialog({
            btn: [{
              text: "确定",
              clsName: "btn btn-sye",
              type: "ok"
            }],
            content: '<span class="dialog-ico ico-alert"></span><div class="pl55 content"><h4>账号验证</h4><p>您的账号需要通过验证才能进行发言</p></div>'
          }).on("ok",
          function() {
            location.href = "http://www.pps.tv/iframe/bindphone?show_back=1&isQxGm=1&from_url=" + location.href
          }) : (i.msg = i.msg.replace(/\\n/g, "<br>"), r({
            isHtml: 1,
            clsName: "center",
            selector: ".chat-inputblock",
            msg: i.msg
          }))
        }),
        this.model.on("change:type",
        function(i, s) {
          1 === s ? (e.$wrapper.removeClass("active"), i.set("countdownTime", i.get("normalCountdownTime")), t.set("max", i.get("maxNormal")), e.$input.attr("placeholder", "和大家聊聊天")) : 2 === s && (e.$wrapper.addClass("active"), i.set("countdownTime", i.get("shoutCountdownTime")), t.set("max", i.get("maxShout")), e.$input.attr("placeholder", "魅力等级7级可开启酷炫弹幕！"))
        }),
        t.on("change:max",
        function(t, i) {
          e.$remainNum.text(i)
        }),
        n.on("userAndAnchorRelation.change",
        function(i) {
          var s = i ? i.data.identity: {},
          a = s.is_anchor || 0 < s.badge_level || 0 < s.guard_level ? 100 : 30;
          1 === e.model.get("type") && (e.model.set("maxNormal", a), t.set("max", a));
          var o = s.guard_level,
          n = s.badge_level;
          e.updateCountdownTime(o, n)
        }),
        n.on("socket.NOBILITY_OR_GUARD_APPLY",
        function(t) {
          var i = t.data.op_userInfo;
          i.user_id == o.get("loginUserId") && e.updateCountdownTime(i.guard_level, i.badge_level)
        }),
        n.on("roomMessageControl.shout",
        function(t) {
          e.model.set("type", t ? 2 : 1)
        }),
        n.on("socket.CHAT_PUBLIC",
        function(t) {
          var i = t.data.op_userInfo,
          s = t.data.op_info,
          a = e.template.message({
            userInfo: i,
            iconList: l.oneIcon(i),
            content: m.transformText(_.escape(s.msg))
          });
          n.trigger("roomMessageChat.append", a)
        }),
        n.on("socket.SHOUT",
        function(t) {
          var i = t.data.op_userInfo,
          s = t.data.op_info;
          if (o.get("roomId") == t.data.op_info.room_id || 1 != s.speak_prop) {
            var a = e.template.shout({
              userInfo: i,
              iconList: l.oneIcon(i),
              content: m.transformText(_.escape(s.content)),
              color: e.getColor(i)
            });
            n.trigger("roomMessageChat.append", a)
          }
        }),
        this.emotion.on("choose",
        function(i) {
          t.set("manualInput", !1);
          var s, a = t.get("pos"),
          o = t.get("value");
          o = o.substring(0, a) + i + o.substring(a),
          s = a + i.length,
          e.limitInput.setValue(o),
          e.$input[0].focus(),
          e.limitInput.setCursorPos(s)
        }),
        t.on("change:remainNum",
        function(t, i) {
          e.$remainNum.parent()[i < 0 ? "addClass": "removeClass"]("exceed"),
          e.$remainNum.text(i)
        }),
        t.on("change:overLength",
        function(t, i) {
          e.$send[i ? "addClass": "removeClass"]("disabled")
        })
      }
    })
  },
  ggwn: function(e, t, i) {
    "use strict";
    var s = i("sk80"),
    a = i("0W60");
    e.exports = Backbone.View.extend({
      initialize: function() {
        var e = this;
        $(window).on("resize",
        function() {
          e.updatePos()
        }),
        s.event.on("truelove.dialog2Open",
        function(t) {
          e.dialogOpen(t)
        })
      },
      events: {
        "click ._trueLoveDialog2Close": "clickClose",
        "click ._trueLoveDialog2Payment": "clickPayment"
      },
      template: {
        wrap: _.template(a.wrap),
        privilegeOpen: _.template(a.privilegeOpen),
        privilegeRenew: _.template(a.privilegeRenew),
        privilegeNoBalance: _.template(a.privilegeNoBalance),
        guard: _.template(a.guard),
        buyOk: _.template(a.buyOk),
        msg: _.template(a.msg)
      },
      dialogOpen: function(e) {
        var t = this.$el;
        this.$el.html(this.template.wrap()),
        this.doms = {
          $wrap: $("._trueLoveDialog2Wrap", t),
          $main: $("._trueLoveDialog2Main", t)
        },
        this.doms.$main.html(this.template[e.tpl](e)),
        this.updatePos()
      },
      updatePos: function() {
        if (this.doms && this.doms.$wrap) {
          var e = this.doms.$wrap,
          t = e.outerWidth(),
          i = e.outerHeight(),
          s = $(window),
          a = s.width(),
          o = s.height(),
          n = s.scrollTop();
          e.css({
            top: (o - i) / 2 + n,
            left: (a - t) / 2
          })
        }
      },
      clickClose: function() {
        this.$el.empty()
      },
      clickPayment: function() {
        this.clickClose(),
        s.event.trigger("quickPayment.show")
      }
    })
  },
  goYk: function(e, t, i) {
    "use strict";
    var s = i("sk80"),
    a = s.roomConfig,
    o = s.ui.Dialog,
    n = i("tUqm"),
    l = i("SPHm"),
    r = i("DLq4");
    e.exports = Backbone.View.extend({
      model: {
        liveNoticeList: new l,
        setLiveNotice: new r
      },
      template: {
        roomEditLiveTime: _.template(n.roomEditLiveTime),
        roomEditLiveTimeEmpty: _.template(n.roomEditLiveTimeEmpty),
        roomEditLiveTimeItem: _.template(n.roomEditLiveTimeItem),
        roomEditLiveTimeItemTime: _.template(n.roomEditLiveTimeItemTime)
      },
      csses: {
        liveTimeList: "._liveTimeList",
        liveTimeItem: "._liveTimeItem",
        liveTimeCancel: "._def",
        liveDay: "._liveDay",
        liveHour: "._liveHour",
        liveMinute: "._liveMinute",
        selectTime: "._selectTime",
        selectOpen: "is-b-open",
        selectDrop: ".select-drop-b"
      },
      datas: {
        roomId: a.get("roomId"),
        liveTimeList: null
      },
      events: {
        "click ._startSetLiveTime": "clickSetLiveTime",
        "click ._liveTimeAdd": "clickAddLiveTime",
        "click ._liveTimeMinus": "clickDelLiveTime",
        "click ._liveTimeSave": "clickSaveLiveTime",
        "click ._selectTimeHandler": "switchSelects",
        "click ._selectTimeItem": "clickSelectTimeItem"
      },
      setDoms: function() {
        var e = this.$el,
        t = this.csses;
        this.doms = {
          $liveTimeList: $(t.liveTimeList, e),
          $liveTimeCancel: $(t.liveTimeCancel, e)
        }
      },
      initialize: function() {
        this.listenEvent(),
        this.model.liveNoticeList.set("roomId", this.datas.roomId),
        this.model.liveNoticeList.getData()
      },
      listenEvent: function() {
        var e = this;
        e.model.liveNoticeList.off(),
        e.model.setLiveNotice.off(),
        e.model.liveNoticeList.on("ok",
        function(t) { (e.datas.liveTimeList = t).length ? e.setHasData() : e.$el.html(e.template.roomEditLiveTimeEmpty())
        }),
        e.model.liveNoticeList.on("fail",
        function(t) {
          e.dialogError(t)
        }),
        e.model.setLiveNotice.on("ok",
        function() {
          e.doms.$liveTimeCancel.trigger("click")
        }),
        e.model.setLiveNotice.on("fail",
        function(t) {
          e.dialogError(t)
        })
      },
      renderList: function() {
        var e, t = this,
        i = t.doms.$liveTimeList;
        e = t.datas.liveTimeList.length ? t.formatDatas(t.datas.liveTimeList) : [t.getDefaultTime()],
        i.html(t.template.roomEditLiveTimeItem({
          list: e,
          len: e.length,
          type: "list"
        }))
      },
      renderOne: function() {
        var e, t = this.doms.$liveTimeList,
        i = t.children().length;
        if (5 === i) return ! 1;
        e = this.template.roomEditLiveTimeItem({
          list: [this.getDefaultTime()],
          type: "addOne",
          len: i + 1
        }),
        $(e).appendTo(t)
      },
      clickSetLiveTime: function() {
        this.setHasData()
      },
      setHasData: function() {
        var e = this;
        e.$el.html(e.template.roomEditLiveTime({
          list: e.datas.liveTimeList
        })),
        e.setDoms(),
        e.renderList()
      },
      clickAddLiveTime: function() {
        this.renderOne()
      },
      clickDelLiveTime: function(e) {
        $(e.currentTarget).parents(this.csses.liveTimeItem).remove(),
        this.doms.$liveTimeList.children().each(function(e) {
          $(this).find("._order").html(e + 1)
        })
      },
      switchSelects: function(e) {
        var t = this.csses,
        i = $(e.currentTarget),
        s = i.parents(t.selectTime),
        a = i.attr("target");
        s.toggleClass(t.selectOpen),
        0 === s.find("li").length && this.loadSelects(a, s.find(t.selectDrop))
      },
      loadSelects: function(e, t) {
        var i = "";
        switch (e) {
        case "day":
          i = this.getDayHtml();
          break;
        case "hour":
          i = this.getHourHtml();
          break;
        case "m":
          i = this.getMinuteHtml()
        }
        t.html(i)
      },
      getDayHtml: function() {
        for (var e = new Date,
        t = [], i = new Date(e.getTime() + 6048e5); e < i;) {
          var s = e.getMonth() + 1,
          a = e.getDate();
          t.push(e.getFullYear() + "-" + (s < 10 ? "0" + s: s) + "-" + (a < 10 ? "0" + a: a)),
          e = new Date(e.getTime() + 864e5)
        }
        return this.template.roomEditLiveTimeItemTime({
          txt: t
        })
      },
      getHourHtml: function() {
        for (var e = 0,
        t = []; e <= 23; e++) t.push((e < 10 ? "0" + e: e) + "点");
        return this.template.roomEditLiveTimeItemTime({
          txt: t
        })
      },
      getMinuteHtml: function() {
        for (var e = 0,
        t = []; e <= 59; e++) t.push((e < 10 ? "0" + e: e) + "分");
        return this.template.roomEditLiveTimeItemTime({
          txt: t
        })
      },
      clickSelectTimeItem: function(e) {
        var t = this.csses,
        i = $(e.currentTarget),
        s = i.html(),
        a = i.parents(t.selectTime);
        a.find("input").val(s),
        a.removeClass(t.selectOpen)
      },
      clickSaveLiveTime: function() {
        var e = this.getTimeValue() || "";
        return this.model.setLiveNotice.set({
          roomId: this.datas.roomId,
          startTimeStamps: e
        }),
        this.model.setLiveNotice.getData(),
        !1
      },
      formatDatas: function(e) {
        var t = [];
        return $.each(e,
        function(e, i) {
          var s = i.start_time.match(/(\d+-\d+-\d+)\s+(\d+):(\d+):(\d+)/);
          t.push({
            day: s[1],
            hour: s[2],
            m: s[3]
          })
        }),
        t
      },
      getDefaultTime: function() {
        var e, t, i = new Date;
        return e = (i = new Date(i.getTime() + 864e5)).getMonth() + 1,
        t = i.getDate(),
        {
          day: i.getFullYear() + "-" + (e < 10 ? "0" + e: e) + "-" + (t < 10 ? "0" + t: t),
          hour: "10",
          m: "00"
        }
      },
      getTimeValue: function() {
        var e = this.csses,
        t = [],
        i = this.doms.$liveTimeList.find(this.csses.liveTimeItem);
        return $.each(i,
        function(i, s) {
          var a = $(s),
          o = a.find(e.liveDay).val().replace(/-/g, "/") + " " + parseInt(a.find(e.liveHour).val(), 10) + ":" + parseInt(a.find(e.liveMinute).val(), 10) + ":0";
          t.push(new Date(o).getTime() / 1e3)
        }),
        $.unique(t),
        t.join(",")
      },
      dialogError: function(e) {
        new o({
          title: "提示",
          content: e,
          btn: [{
            clsName: "btn-sye",
            type: "ok",
            text: "确定"
          }]
        })
      }
    })
  },
  hRo8: function(e, t) {
    e.exports = {
      item: '<li class="msg"><div class="row"><%=fromIconHtml%><a class="name" href="javascript:void(0)" node-type="userHoverTip"  data-user_id="<%=fromUserId%>" data-nick_name="<%-fromNickName%>"><%-fromNickName%></a><span class="nr"><%=isCurrentAnchor ? "送出" : "送给"%></span><%if(!isCurrentAnchor){%><%=toIconHtml%><a class="name" href="javascript:void(0)" node-type="userHoverTip"  data-user_id="<%=toUserId%>" data-nick_name="<%-toNickName%>"><%-toNickName%></a><%}%><img src="<%=giftImg%>" title="<%=giftName%>" alt="<%=giftName%>" class="i-gift"><span class="gift-num">×<em><%=giftCount%></em></span></div></li>'
    }
  },
  hSGw: function(e, t, i) {
    var s = i("sk80"),
    a = s.ui.userIcon,
    o = i("wkko"),
    n = i("lVk0"),
    l = _.template(n),
    r = (i("v0OY"), {
      1 : "爵士",
      2 : "男爵",
      3 : "子爵",
      4 : "伯爵",
      5 : "侯爵",
      6 : "公爵",
      7 : "国王"
    });
    s.event.on("liveGS.show",
    function(e) {
      o(e)
    }),
    s.event.on("socket.NOBILITY_OR_GUARD_APPLY",
    function(e) {
      if (e) {
        var t = e.data.op_userInfo,
        i = e.data.op_info.guard_user || {},
        o = "保驾护航",
        n = e.data.op_info.type;
        3 == n && (o = r[t.badge_level]);
        var c = l({
          iconList: a.twoIcon(t),
          fromUserId: t.user_id,
          fromNickName: t.nick_name,
          toUserId: i.user_id,
          toNickName: i.nick_name,
          name: o,
          type: n
        });
        s.event.trigger("roomMessageChat.append", c)
      }
    })
  },
  hZWJ: function(e, t, i) {
    var s, a;
    s = [i("+AOU")],
    void 0 === (a = function(e) {
      return new(Backbone.Model.extend({
        urlRoot: e.info,
        subSave: function(e) {
          var t = {
            type: "get",
            dataType: "jsonp",
            cache: !1,
            data: {
              authcookie: e
            },
            success: function(e, t) {
              e.trigger("userCheckOk", t)
            }
          };
          this.save(null, t)
        }
      }))
    }.apply(t, s)) || (e.exports = a)
  },
  hbdQ: function(e, t, i) {
    "use strict";
    e.exports = {
      0 : {
        tpl: 1,
        totalPriceShow: 0
      },
      1 : {
        tpl: 1,
        totalPriceShow: 0
      },
      2 : {
        tpl: 1,
        totalPriceShow: 0
      },
      3 : {
        tpl: 3,
        totalPriceShow: 0
      },
      4 : {
        tpl: 2,
        totalPriceShow: 1
      }
    }
  },
  hbqJ: function(e, t, i) {
    var s;
    void 0 === (s = function() {
      return Backbone.Model.extend({
        urlRoot: "/action/outMIC",
        initialize: function() {},
        subSave: function(e) {
          var t = this,
          i = {
            type: "post",
            dataType: "json",
            data: e.data,
            success: function(e, i) {
              t.trigger("success", i)
            },
            error: function(e, i) {
              t.trigger("error", i)
            }
          };
          t.save(null, i)
        }
      })
    }.call(t, i, t, e)) || (e.exports = s)
  },
  huCk: function(e, t) {
    e.exports = {
      wrap: '<div class="xmodal xmodal-truelove _trueLoveDialogWrap"><a href="javascript:;" class="_trueLoveDialogClose"><i class="xiu-ico xiu-ico-off">&#xe63b;</i></a><a href="javascript:;" class="link-extra _trueLoveDialogIntro">查看说明</a><div class="xmodal-title"><%- anchor_name %>的真爱团-<%- fans_name %></div><div class="xmodal-bd"><div class="xmodal-tl-side"><div class="tl-anchor-infoblock"><div class="tl-avatorbox"><img src="<%= anchor_icon %>" alt="<%- anchor_name %>"><i class="za-zb-lv za-zb-lv-<%= fans_level %>"></i><div class="tip-block tip-block-tls"><div class="arr arr-top" style="left:50%;margin-left:-10px;"><div class="arr-in"></div></div><div class="tl-prograss"><div class="tl-pro-t">最近180天<%= fans_experience %><% if (fans_left_experience) { %><span>还需<%= fans_left_experience %>升级Lv<%= ~~fans_level + 1 %></span><% } else { %><span>已满级</span><% } %></div><div class="tl-pro-bar"><div class="tl-pro-bar-inner" style="width:<%= (1 - fans_left_experience / fans_max_experience) * 100 %>%"></div></div></div></div></div><div class="tl-data"><p class="tl-data-val"><%= fans_num %></p><p>成员</p></div><div class="tl-data right"><p class="tl-data-val"><%= fans_week_experience %></p><p>本周人气值</p></div></div><ul class="tl-tab-list _trueLoveTab"><li data-tab="task"><i class="xiu-ico xiu-ico-checklist">&#xe644;</i>每日任务<b></b></li><li data-tab="rank"><i class="xiu-ico xiu-ico-rank">&#xe645;</i>排行榜<b></b></li><% if (!is_owner) { %><li data-tab="shop"><i class="xiu-ico xiu-ico-warehouse">&#xe65c;</i>积分仓库<b></b></li><li data-tab="privilege"><i class="xiu-ico xiu-ico-crown">&#xe65b;</i>真爱特权<% if (is_fan && e_msg) { %><em class="dot _trueLovePrivilegeDot"></em><% } %><b></b></li><% } %></ul></div><div class="xmodal-tl-main"><div class="tl-tab-cont _trueLoveDialogMain" style="display:block;"><div class="_trueLoveDialogCont"></div></div></div></div></div><div class="dialog-mask"></div>',
      msg: '<li class="msg"><div class="row"><span class="sys"><%= msg %></span></div></li>'
    }
  },
  iE2k: function(e, t, i) {
    var s = i("sk80"),
    a = s.roomConfig,
    o = i("/HIr"),
    n = i("Pzp1");
    e.exports = Backbone.View.extend({
      model: new o,
      template: {
        notice: _.template(n.notice)
      },
      initialize: function() {
        this.model.set("publicMsg", window._room_config.room_info.notice_msg),
        this.render(),
        this.listenEvents()
      },
      render: function() {
        this.$el.append(this.template.notice({
          publicMsg: this.model.get("publicMsg"),
          officalMsgList: []
        }))
      },
      listenEvents: function() {
        var e = this;
        s.event.on("socket.ROOM_INFO_SET",
        function(t) {
          var i = t.data.op_info;
          e.model.set("publicMsg", i.notice_msg),
          a.set({
            endingMsg: i.ending_msg,
            welcomeMsg: i.welcome_msg
          })
        }),
        this.model.on("change:publicMsg",
        function(t, i) {
          $("._publicMsg", e.$el).text(i)
        })
      }
    })
  },
  iGz5: function(e, t) {
    e.exports = Backbone.Model.extend({
      urlRoot: "/bags/useBadge",
      initialize: function() {},
      subSave: function() {
        this.save(null, {
          data: {
            product_id: this.get("productId"),
            num: this.get("useNum"),
            room_id: this.get("roomId") || 0
          },
          success: function(e, t) {
            e.trigger("success", t)
          },
          error: function(e, t) {
            e.trigger("error", t)
          }
        })
      }
    })
  },
  is3A: function(e, t, i) {
    var s = i("sk80"),
    a = s.core.visibilityDelay,
    o = s.createSwf,
    n = s.tools.ishow;
    e.exports = Backbone.View.extend({
      initialize: function(e) {
        _.bindAll(this, "changeFlashWrap");
        var t = this,
        i = _.throttle(this.changeFlashWrap, 300);
        this.model = new(Backbone.Model.extend({})),
        this.model.set("effectCtrl", !0),
        this.wh = [1348, 740],
        this.msgList = [],
        this.isGray = e.isGray,
        this.h5Init = !1,
        s.event.on("roomMessageControl.effect",
        function(e) {
          t.model.set("effectCtrl", e),
          e || (t.msgList = []);
          try {
            n.getFlash(t.swfId).fl_effectSwitch(e)
          } catch(e) {}
        }),
        window.ISHOW || (window.ISHOW = {}),
        ISHOW.vipIn = {
          setEntranceFlashState: function(e) {
            t.toggle(e)
          }
        },
        this.model.on("change:flashData",
        function(e, i) {
          t.formatData(),
          t.isGray && s.tools.effectSupport ? (!t.h5Init && s.event.trigger("h5EffectInit", {
            type: 2,
            dom: $(".video-container,.video-living").get(0),
            offsetX: 1080,
            offsetY: 600,
            w: 1348,
            h: 740
          }), t.h5Init = !0, s.event.trigger("h5EffectList", {
            type: 2,
            list: t.msgList
          }), t.msgList = []) : t.showEffect()
        }),
        this.on("changePosition",
        function() {
          i()
        }),
        this.model.on("change:effectCtrl",
        function(e, i) {
          t.toggle(i),
          status || (t.msgList = []);
          try {
            n.getFlash(t.swfId).fl_effectSwitch(status)
          } catch(e) {}
        }),
        a(60,
        function() {
          this.msgList = []
        },
        function() {})
      },
      render: function() {
        $("#vipInWrap").length || ($("body").append('<div id="vipInWrap" class="full-screen-effect" style="position:absolute;width:1000px;height:1000px;left:-9999px;top:-9999px;"><div id="vipIn"></div></div>'), this.setElement("#vipInWrap"), this.createSwf())
      },
      toggle: function(e) {
        e ? this.$el.css(_.extend({
          width: this.wh[0],
          height: this.wh[1]
        },
        this.calculatePosition())) : this.$el.css({
          left: -9999,
          top: -9999,
          height: 4,
          width: 4
        })
      },
      showEffect: function() {
        var e = this;
        this.swfId && this.model.get("effectCtrl") ? (_.each(this.msgList,
        function(t) {
          try {
            n.getFlash(e.swfId).pushData(t)
          } catch(t) {
            console.log(t)
          }
        }), e.msgList = []) : this.render()
      },
      formatData: function() {
        var e = 0,
        t = this.model.get("flashData"),
        i = t.op_info.url;
        return 1 <= t.op_userInfo.guard_level ? e = 2 : 1 <= t.op_userInfo.badge_level && (e = 1),
        !(!e && !i) && this.msgList.push({
          charmLv: t.op_userInfo.charm_level,
          url: i || "",
          nickName: t.op_userInfo.nick_name,
          type: e,
          level: t.op_userInfo[{
            1 : "badge_level",
            2 : "guard_level"
          } [e]]
        })
      },
      createSwf: function() {
        var e, t = this; (e = new o({
          el: t.$el.find("#vipIn").get(0),
          webAddress: "//static.iqiyi.com/ppsshow/flashplayer/showEntrance2.swf?v=" + ISHOW.flashVersion,
          width: "100%",
          height: "100%",
          flashvars: {
            isNew: 1,
            offsetX: 1080,
            offsetY: 600
          }
        })).createDom(),
        e.on("flashLoadedCallback",
        function(e) {
          t.swfId = e.ref.id,
          t.showEffect()
        })
      },
      calculatePosition: function() {
        var e = $(".video-container,.video-living"),
        t = {},
        i = e.offset();
        function s(e, t, i) {
          return Math.max(0, e + t - i)
        }
        return t.y = s(i.top, e.height(), 600),
        t.x = s(i.left, e.width(), 1080),
        {
          left: t.x,
          top: t.y
        }
      },
      changeFlashWrap: function() {
        var e = $("#vipInWrap");
        1 < e.width() && e.css(this.calculatePosition())
      }
    })
  },
  jECO: function(e, t) {
    e.exports = {
      intro: '<div class="xmodal xmodal-truelove-ins _trueLoveIntro"><a href="javascript:;" class="_trueLoveIntroClose"><i class="xiu-ico xiu-ico-off">&#xe63b;</i></a><div class="xmodal-title">真爱团说明</div><div class="xmodal-bd"><div class="xmodal-tl-side"><ul class="tl-tab-list _trueLoveIntroTab"><li data-tab="tab1">真爱团简介<b></b></li><li data-tab="tab2">真爱团等级<b></b></li><li data-tab="tab3">粉丝等级/抽奖<b></b></li><li data-tab="tab4">其他<b></b></li></ul></div><div class="xmodal-tl-main"><div class="tl-tab-cont" style="display:block"><div class="scroll-panel scroll-panel-tld"><div class="scroll-content _trueLoveIntroMain"></div></div></div></div></div></div><div class="dialog-mask zindex2"></div>',
      tab1: '<div class="arti-grp"><h4>什么是真爱团</h4><p>真爱团由主播核心粉丝组成，是主播在奇秀平台的人气象征之一。加入真爱团后，粉丝通过完成任务提升团等级和个人等级，还可获得积分，用于抽奖或兑换珍稀礼物道具。</p></div><div class="arti-grp"><h4>如何加入真爱团</h4><div>&bull;&nbsp;&nbsp;在直播间内点开主播的真爱团入口，点击[开通]，成功付费1元即可购买30天粉丝身份，获得粉丝勋章，只在当前直播间显示。<div class="za-user-lv za-user-lv-pt za-user-lv-bg-a"><div class="za-num">5</div><div class="za-name">真爱团</div></div></div><div>&bull;&nbsp;&nbsp;成为守护后自动加入真爱团，获得粉丝守护勋章。</div><div class="mt10"><div class="za-user-lv za-user-lv-sh za-user-lv-bg-a"><div class="za-num">5</div><div class="za-name">真爱团</div><div class="za-sh za-sh-gold"></div></div><div class="za-user-lv za-user-lv-sh za-user-lv-bg-a"><div class="za-num">5</div><div class="za-name">真爱团</div><div class="za-sh za-sh-silver"></div></div><div class="za-user-lv za-user-lv-sh za-user-lv-bg-a"><div class="za-num">5</div><div class="za-name">真爱团</div><div class="za-sh za-sh-bronze"></div></div></div></div>',
      tab2: '<div class="arti-grp"><h4>什么是真爱团等级</h4><p>真爱团等级反映最近6个月真爱团人气值与粉丝活跃度。根据真爱团等级，主播将得到对应的咖位称号：</p><div class="chart-1"></div><p>更多荣耀特权，敬请期待。</p></div><div class="arti-grp"><h4>如何提升真爱团等级</h4><div>&bull;&nbsp;&nbsp;粉丝完成真爱团任务增加真爱团人气值；（每天20000点以内正常计算，20001-100000点需乘以系数0.5,超出100001点的部分需乘以系数0.1）；</div><div>&bull;&nbsp;&nbsp;每开通/续费守护1个月增加2000点人气值；</div><div>&bull;&nbsp;&nbsp;参与更多精彩真爱团活动赢取人气值，敬请期待。</div></div>',
      tab3: '<div class="arti-grp"><h4>什么是粉丝等级</h4><p>真爱粉等级可反映粉丝最近30天内的活跃程度，一共有1-5个等级：</p><div class="chart-2"></div><p>更多荣耀特权，敬请期待。</p></div><div class="arti-grp"><h4>什么是真爱值/积分</h4><div>真爱值用于提升个人等级，积分可参与每日抽奖，有几率获得稀有炫彩粉丝勋章：<div class="za-user-lv za-user-lv-pt za-user-lv-bg-b"><div class="za-num">5</div><div class="za-name">真爱团</div></div></div></div><div class="arti-grp"><h4>如何获得真爱值/积分</h4><div>&bull;&nbsp;&nbsp;粉丝完成真爱团任务增加个人真爱值/积分；</div><div>&bull;&nbsp;&nbsp;每开通/续费守护1个月增加2000点真爱值/积分；</div><div>&bull;&nbsp;&nbsp;参与更多精彩真爱团活动赢取真爱值/积分，敬请期待。</div></div>',
      tab4: '<div class="arti-grp"><h4>粉丝身份过期</h4><div>粉丝身份过期后，会立即失去粉丝身份标识及特权，积分及历史贡献值仍然保留。</div></div><div class="arti-grp"><h4>主播如何开通真爱团</h4><div>当主播等级达到条件后（目前逐步开放），系统将自动给您开启真爱团功能。您需要为真爱团取一个3个汉字内的名字作为真爱团专属徽章。若未取名，则默认显示“真爱团”。</div></div><div class="arti-grp"><h4>守护身份与真爱粉身份</h4><div>守护及普通真爱粉都是真爱团中的成员，两种身份可同时存在并同时计时，优先显示守护身份。</div><div>在主播开启真爱团之前已经成为守护的用户，在主播开启真爱团后会根据守护类型获得初始奖励：黄金守护6000点真爱值/积分，白银守护4000点真爱值/积分，青铜守护2000点真爱值/积分。</div></div>'
    }
  },
  jEh3: function(e, t, i) {
    var s = i("sk80"),
    a = s.tools.mirror,
    o = s.tools.pingback,
    n = Backbone.View.extend({
      el: "body",
      initialize: function(e) {
        this.render(e)
      },
      events: {
        "click.pba [data-pb-rseat]": "pbQuote"
      },
      render: function(e) {
        var t = $.cookie("x_npc") ? $.cookie("x_npc").split("|") : null;
        $.removeCookie("x_npc", {
          path: "/",
          domain: "pps.tv"
        }),
        t && (t = _.object(_.map(t,
        function(e) {
          return e.split("=")
        })), a(t));
        var i, s = encodeURIComponent(document.referrer),
        n = s || "DIRECT";
        i = {
          t: 21,
          bstp: 1,
          purl: encodeURIComponent(location.href),
          rfr: s,
          lrfr: n
        },
        e && (i.roomid = e.roomId, i.anchor_id = e.userId),
        o(i),
        ISHOW.on("iShowLoginSuccess",
        function(e) {
          if (200 === e.code) {
            var t = e.data.is_new ? e.data.is_new: 0 | $.cookie("xiu_new_user");
            $.cookie("xiu_new_user", null, {
              expires: -1,
              path: "/",
              domain: ".pps.tv"
            }),
            a({
              a: 7,
              u: "",
              pu: e.data.basic.user_id,
              nu: t,
              atime: (new Date).getTime()
            })
          }
        })
      },
      pbQuote: function(e) {
        var t = e.currentTarget.tagName.toLowerCase(),
        i = $(e.currentTarget),
        s = i.closest("[data-pb-block]").data("pb-block"),
        o = {
          t: 20,
          block: i.closest("[data-tb-block]").length ? i.closest("[data-tb-block]").data("tb-block") : s,
          rseat: (s || "") + "_" + i.closest("[data-pb-rseat]").data("pb-rseat"),
          rpage: $("body").data("pb-rpage") || ""
        },
        n = [],
        l = i.attr("target");
        "a" === t ? l && !~l.indexOf("_self") || i.attr("href") && ~i.attr("href").indexOf("javascript") ? a(o) : (o.rlink = encodeURIComponent(i.attr("href")), $.each(o,
        function(e, t) {
          n.push(e + "=" + t)
        }), n = n.join("|"), $.cookie("x_npc", n, {
          expires: "",
          domain: "pps.tv",
          path: "/"
        })) : a(o)
      }
    });
    e.exports = n
  },
  jvBd: function(e, t, i) {
    var s, a = i("sk80");
    void 0 === (s = function() {
      return Backbone.Model.extend({
        defaults: {
          product_id: 0,
          anchor_id: 0,
          room_id: 0,
          live_id: 0,
          time_long: "1",
          money_type: 1,
          price: 0,
          cash_bean: 0,
          cash_diamond: 0
        },
        urlRoot: "/mall/",
        initialize: function() {
          this.set({
            user_id: a.loginInfo.userId
          })
        },
        validate: function(e) {},
        buyNobility: function(e, t) {
          this.set("consume_type", 1),
          this.urlRoot = "/api/buy/buyUseBadge/",
          this._buyProduct({
            anchor_id: this.get("anchor_id"),
            room_id: this.get("room_id"),
            live_id: this.get("live_id")
          },
          e, t)
        },
        buyGuard: function(e, t) {
          this.set("consume_type", 2),
          this.urlRoot = "/api/buy/buyUseGuard/",
          this._buyProduct({
            anchor_id: this.get("anchor_id"),
            room_id: this.get("room_id"),
            live_id: this.get("live_id")
          },
          e, t)
        },
        buyNiceno: function(e, t) {
          this.set("consume_type", 5),
          this.urlRoot = "/buy/buyNiceno/",
          this._buyProduct({},
          e, t)
        },
        _buyProduct: function(e, t, i) {
          e = $.extend({
            product_id: this.get("product_id"),
            time_long: this.get("time_long"),
            money_type: this.get("money_type")
          },
          e),
          this.save(null, {
            patch: !0,
            type: "post",
            dataType: "json",
            data: e,
            cache: !1,
            success: function(e, s) {
              "200" == s.code ? t && t(s, e) : i && i(s)
            },
            error: function(e, t) {
              i && i(t)
            }
          })
        },
        getAccount: function(e, t) {
          var i = this;
          i.save(null, {
            url: "/api/userinfo/getAccount/",
            type: "get",
            dataType: "json",
            data: {},
            success: function(s, a) {
              "200" == a.code ? (i.set({
                cash_bean: a.data.bean_balance,
                cash_diamond: a.data.diamond_balance
              },
              {
                validate: !0
              }), e && e()) : t && t(a)
            },
            error: function(e, i) {
              t && t(i)
            }
          })
        }
      })
    }.apply(t, [])) || (e.exports = s)
  },
  k8tl: function(e, t, i) {
    "use strict";
    e.exports = Backbone.Model.extend({
      urlRoot: "/api/fans/isFans",
      getData: function(e) {
        var t = this;
        this.save({},
        {
          data: e || {},
          success: function(e, i) {
            200 === i.code && t.trigger("ok")
          }
        })
      }
    })
  },
  kSyq: function(e, t, i) {
    function s(e, t) {
      for (var i = [], s = t; 0 < e--;) t instanceof Array && (s = t.concat([])),
      i.push(s);
      return i
    }
    var a = i("rr8t");
    e.exports = Backbone.View.extend({
      template: _.template(a.item),
      initialize: function(e) {
        _.extend(this.props = {},
        e),
        this.alReady = !1,
        this.run = !1,
        this.minShowTime = 1200,
        this.minAnimationTime = 1e3,
        this.msgTime = 50,
        this.autoDisapperTime = 2500,
        this.minShowTimer = [],
        this.minAnimationTimer = [],
        this.autoDisapperTimer = [],
        this.canBeReplaced = s(e.length, 1),
        this.canAnimation = s(e.length, 1),
        this.displayData = [],
        this.queue = s(e.length, []),
        this.stageIndex = 0,
        this.stageLength = e.length,
        this.lastData = null,
        this.stageList = []
      },
      render: function() {
        this.$el.append(a.wrapper),
        this.setElement($("._giftMessageTip", this.$el));
        for (var e = 0; e < this.props.length; e++) {
          var t = $('<div class="row"></div>');
          this.$el.append(t),
          this.stageList.push(t)
        }
      },
      combo: function(e, t, i) {
        if (!this.minShowTimer[e] || !this.minAnimationTimer[e]) {
          var s = this;
          this.queue[e].shift(),
          t.highlight = 1e4 <= t.gift_num * t.price * t.group,
          t.replace = i,
          this.stageList[e][t.highlight ? "addClass": "removeClass"]("gfc-gold").html(this.template(t)),
          this.canBeReplaced[e] = 0,
          this.canAnimation[e] = 0,
          this.autoDisapperTimer[e] = setTimeout(function() {
            s.clean(e);
            for (var t = !0,
            i = 0; i < s.props.length; i++) t = t && s.isEmpty(i);
            for (t && (s.lastData = null), t = !(s.displayData[e] = null), i = 0; i < s.props.length; i++) t = t && !s.displayData[i];
            t && (s.lastData = null)
          },
          this.autoDisapperTime),
          clearTimeout(this.minShowTimer[e]),
          this.minShowTimer[e] = setTimeout(function() {
            s.minShowTimer[e] = 0,
            s.canBeReplaced[e] = 1
          },
          this.minShowTime),
          clearTimeout(this.minAnimationTimer[e]),
          this.minAnimationTimer[e] = setTimeout(function() {
            s.minAnimationTimer[e] = 0,
            s.canAnimation[e] = 1
          },
          this.minAnimationTime)
        }
      },
      push: function(e) {
        this.already || (this.render(), this.already = !0),
        this.process(e),
        this.run || (this.run = !0, this.autoRun())
      },
      autoRun: function() {
        var e = this;
        setInterval(function() {
          for (var t = 0; t < e.queue.length; t++) {
            var i = e.queue[t];
            if (0 < i.length) {
              var s = i[0];
              clearTimeout(e.autoDisapperTimer[t]),
              e.equal(s, e.displayData[t]) ? e.canAnimation[t] && (e.combo(t, s, !1), e.displayData[t] = s) : e.canBeReplaced[t] && (e.combo(t, s, !0), e.displayData[t] = s)
            }
          }
        },
        this.msgTime)
      },
      process: function(e) {
        var t = e.data.op_userInfo,
        i = e.data.op_info;
        e = {
          user_icon: t.user_icon,
          user_id: t.user_id,
          nick_name: t.nick_name,
          gift_num: +i.num,
          gift_name: i.name,
          gift_pic: i.pic,
          gift_id: i.id,
          level: t.badge_level,
          price: +i.price,
          group: parseInt(i.group)
        },
        this.lastData && this.equal(this.lastData, e) ? this.numPatch(this.getPreviousStageIndex(), e) : (this.queue[this.stageIndex].push(e), this.lastData = e, this.updateStageIndex())
      },
      numPatch: function(e, t) {
        for (var i = this.lastData,
        s = i.group + 1; s <= t.group; s++) {
          var a = _.extend({},
          i, {
            group: s
          });
          this.queue[e].push(a)
        }
        s !== i.group + 1 && (this.lastData = t)
      },
      updateStageIndex: function() {
        this.stageIndex = this.getNextStageIndex()
      },
      getNextStageIndex: function() {
        return (this.stageIndex + 1) % this.stageLength
      },
      getPreviousStageIndex: function() {
        return (this.stageIndex + this.stageLength - 1) % this.stageLength
      },
      equal: function(e, t) {
        return ! (!e || !t) && e.gift_id == t.gift_id && e.user_id == t.user_id && e.gift_num == t.gift_num
      },
      clean: function(e) {
        var t = this.stageList[e];
        t.find(".gfc-sec").removeClass("gfcAni").addClass("gfcAniRev"),
        setTimeout(function() {
          t.html("")
        },
        500)
      },
      isEmpty: function(e) {
        return !! this.stageList[e].html()
      }
    })
  },
  kU11: function(e, t, i) {
    var s, a, o = i("sk80");
    s = [i("IlMp"), i("Hhnc"), i("F6QD"), i("6WGU"), i("mEoQ"), i("pDVM"), i("Nvfh")],
    void 0 === (a = function(e, t, i, s, a, n, l) {
      return Backbone.View.extend({
        el: "",
        getAllTagsModel: new e,
        setTagModel: new t,
        getTagModel: new i,
        pageMarkup: _.template(s),
        doms: {},
        labelDialog: "",
        state: {
          choosedlabel: {
            content: [],
            beauty: [],
            quality: []
          },
          headerLabels: [],
          storedHeaderLabels: []
        },
        initialize: function(e) {
          this.$el = $(this.el),
          this.doms.$content = this.$el,
          this.$labelDialog = e.labelDialog && $(e.labelDialog) || null,
          this.render()
        },
        render: function() {
          this.doms.$content.html(this.pageMarkup()),
          this.manageModel()
        },
        manageModel: function() {
          var e = this,
          t = [$(".content-label-block ul.label-list", e.$el), $(".beauty-label-block ul.label-list", e.$el), $(".quality-label-block ul.label-list", e.$el)],
          i = e.$labelDialog && $(".pick-panel-act a.btn", e.$labelDialog) || $(".pick-panel-act a.btn", e.$el);
          e.doms.$resultTitle = $(".result-panel h5", e.$el),
          e.doms.$resultList = $(".result-panel ul.label-list", e.$el),
          this.getTagModel.subSave({
            anchor_id: o.loginInfo.userId
          }),
          this.getTagModel.on("success",
          function(t) {
            t && t.data && (e.state.storedHeaderLabels = t.data, e.renderHeaderLabels(t.data), e.getAllTagsModel.subSave()),
            e.doms.$resultList.on("click",
            function(t) {
              "li" == t.target.tagName.toLowerCase() && "checked" == $(t.target).attr("class") && ("checked" == $(t.target).attr("class") && $(t.target).attr("class", "disabled").html("未添加"), $("#" + $(t.target).attr("data-id")).trigger("click"), e.state.headerLabels = _.filter(e.state.headerLabels,
              function(e) {
                return e.tag_id != $(t.target).attr("data-id")
              }), e.renderHeaderLabels(e.state.headerLabels))
            })
          }),
          this.getAllTagsModel.on("success",
          function(s) {
            if (s && s.data) for (var a = 0; a < s.data.length; a++) e.renderLabel(s.data[a].items, t[a]),
            function(s) {
              t[s].on("click",
              function(a) {
                var o = e.state.choosedlabel.content.length,
                n = e.state.choosedlabel.beauty.length,
                l = e.state.choosedlabel.quality.length;
                if ("li" != $(a.target).parent().prop("tagName").toLowerCase()) {
                  if ("li" == a.target.tagName.toLowerCase() && "disabled" != $(a.target).attr("class")) {
                    if ("checked" == $(a.target).attr("class")) e.state.headerLabels = _.filter(e.state.headerLabels,
                    function(e) {
                      return e.tag_id != $(a.target).attr("id")
                    }),
                    e.renderHeaderLabels(e.state.headerLabels);
                    else {
                      var r = _.filter(e.state.storedHeaderLabels,
                      function(e) {
                        return e.tag_id == $(a.target).attr("id")
                      });
                      1 == r.length ? e.state.headerLabels.push(r[0]) : e.state.headerLabels.push({
                        tag_id: $(a.target).attr("id"),
                        name: $(a.target).text()
                      }),
                      e.renderHeaderLabels(e.state.headerLabels)
                    }
                    0 == s && (0 == o && (e.state.choosedlabel.content.push(a.target.id), $("li", t[s]).attr("class", "disabled"), $(a.target).attr("class", "checked").append('<i class="icon-label-checked"></i>')), 1 == o && (e.state.choosedlabel.content.pop(), $("li", t[s]).removeClass("disabled"), $(a.target).removeClass("checked").contents().filter(function() {
                      return "icon-label-checked" === $(this).attr("class")
                    }).remove())),
                    1 == s && e.beautyAndQualityHandler(n, e.state.choosedlabel.beauty, $(a.target), t[1], t[2], l, a),
                    2 == s && e.beautyAndQualityHandler(l, e.state.choosedlabel.quality, $(a.target), t[2], t[1], n, a),
                    0 < e.state.choosedlabel.content.length && 0 < e.state.choosedlabel.beauty.length && 0 < e.state.choosedlabel.quality.length ? i.removeClass("disabled") : "disabled" != i.attr("class") && i.addClass("disabled")
                  }
                } else $(a.target).parent().trigger("click")
              })
            } (a);
            _.each(e.state.storedHeaderLabels,
            function(e) {
              $("#" + e.tag_id).append('<span class="split">|</span><span class="label-num">' + n.numToMillion(e.score) + "</span>"),
              $("#" + e.tag_id).trigger("click")
            })
          }),
          i.on("click",
          function(t) {
            if ("a" != $(t.target).parent().prop("tagName").toLowerCase()) {
              if ("a" == t.target.tagName.toLowerCase() && !$(t.target).hasClass("disabled")) {
                var i = [].concat(e.state.choosedlabel.content).concat(e.state.choosedlabel.beauty).concat(e.state.choosedlabel.quality);
                e.setTagModel.subSave({
                  tag_ids: i.toString()
                })
              }
            } else $(t.target).parent().trigger("click")
          }),
          this.setTagModel.on("success",
          function(t) { [].concat(e.state.choosedlabel.content).concat(e.state.choosedlabel.beauty).concat(e.state.choosedlabel.quality);
            var i = null,
            s = t && t.data,
            o = [];
            _.each(s,
            function(t) {
              $("#" + t.id).contents().filter(function() {
                return 1 === this.nodeType && "i" != this.tagName.toLowerCase()
              }).remove(),
              $("#" + t.id).append('<span class="split">|</span><span class="label-num">' + n.numToMillion(t.score) + "</span>");
              var i = _.each(e.state.headerLabels,
              function(e) {
                return e.tag_id == t.id
              })[0];
              i.score = t.score,
              o.push(i)
            }),
            e.state.headerLabels = o,
            e.renderHeaderLabels(e.state.headerLabels),
            i = new a({
              title: "提示",
              content: t.msg || "  成功"
            }),
            setTimeout(function() {
              i.hide()
            },
            3e3),
            e.trigger("tagsSave")
          }),
          this.setTagModel.on("error",
          function(e) {
            new a({
              title: "提示",
              content: "提交印象标签失败，请稍后重试"
            })
          })
        },
        renderHeaderLabels: function(e) {
          var t = e.concat(new Array(4 - e.length));
          this.doms.$resultTitle.html("您已添加的标签<span>(" + e.length + "/4)</span>"),
          this.doms.$resultList.empty();
          for (var i = 0; i < t.length; i++) t[i] && t[i].name ? this.doms.$resultList.append('<li class="checked" data-id="' + t[i].tag_id + '" >' + t[i].name + ((t[i].score || "0" == t[i].score) && '<span class="split">|</span><span class="label-num">' + n.numToMillion(t[i].score) + "</span>" || "") + ' <i class="icon-label-checked"></i></li>') : this.doms.$resultList.append('<li class="disabled">未添加</li>')
        },
        renderLabel: function(e, t) {
          var i = new l;
          _.each(e,
          function(e) {
            t.append("<li id=" + e.id + ">" + e.name + "</li>")
          }),
          i.render($("div.pick-panel div.option-panel div.scroll-panel", this.$el))
        },
        beautyAndQualityHandler: function(e, t, i, s, a, o, n) {
          0 == e && (t.push(n.target.id), i.attr("class", "checked").append('<i class="icon-label-checked"></i>'), 2 == o && $("li", s).filter(function() {
            return "checked" != $(this).attr("class")
          }).attr("class", "disabled")),
          1 == e && ("checked" == i.attr("class") ? (t.splice(_.indexOf(t, i.id), 1), i.removeClass("checked").contents().filter(function() {
            return "icon-label-checked" === $(this).attr("class")
          }).remove(), 2 == o && $("li", s).filter(function() {
            return "disabled" == $(this).attr("class")
          }).removeClass("disabled")) : (t.push(n.target.id), $("li", s).filter(function(e) {
            return "checked" != $(this).attr("class")
          }).attr("class", "disabled"), i.attr("class", "checked").append('<i class="icon-label-checked"></i>'), 1 == o && $("li", a).filter(function() {
            return "checked" != $(this).attr("class")
          }).attr("class", "disabled"))),
          2 == e && (t.splice(_.indexOf(t, n.target.id), 1), $("li", s).filter(function(e) {
            return "checked" != $(this).attr("class")
          }).removeClass("disabled"), i.removeClass("checked").contents().filter(function() {
            return "icon-label-checked" === $(this).attr("class")
          }).remove(), 1 == o && $("li", a).filter(function() {
            return "checked" != $(this).attr("class")
          }).removeClass("disabled"))
        }
      })
    }.apply(t, s)) || (e.exports = a)
  },
  "khZ/": function(e, t, i) {
    var s = i("p2Sg"),
    a = i("S56f"),
    o = i("yD5P"),
    n = i("XjQ7"),
    l = i("oX3G"),
    r = i("Tqf4"),
    c = i("sk80"),
    d = c.ui.userIcon,
    u = c.userModel;
    e.exports = Backbone.View.extend({
      template: {
        starCtrl: _.template(a.ctrl),
        starRule: _.template(a.rule)
      },
      initialize: function() {
        var e = this;
        this.model = new o,
        this.model.set("effectCtrl", !0),
        this.model.set("starEffect", !0),
        this.bar = new s({
          el: this.el
        }),
        this.myStarModel = new n,
        this.starPoolModel = new l,
        this.render(),
        this.bar.model.listenTo(this.model, "change:userId",
        function(t, i) {
          e.bar.model.set("userId", i)
        }),
        c.event.on("roomMessageControl.starlight",
        function(t) {
          e.model.set("effectCtrl", t)
        }),
        c.event.on("roomMessageControl.effect",
        function(t) {
          e.model.set("starEffect", t)
        }),
        this.on("getMyStars",
        function(e) {
          e ? this.myStarModel.subSave() : this.model.set("myStar", 0)
        }),
        this.myStarModel.on("success",
        function(t) {
          200 === t.code && e.model.set({
            myStar: t.data.star_num,
            maxStar: t.data.star_limit_num,
            isVip: t.data.is_vip,
            starRule: t.data.star_rule || []
          })
        }),
        e.bar.on("effect",
        function() {
          e.model.get("starEffect") && e.trigger("effect")
        }),
        this.model.on("success",
        function(t) {
          if (200 === t.code) e.model.set("myStar", t.data.num);
          else {
            var i;
            i = 203 === t.code && 188 == this.get("num") ? a.toastVip: t.msg,
            e.showTips(i)
          }
        }),
        this.model.on("change:currentNum",
        function(t, i) {
          e.bar.model.set("currentNum", i)
        }),
        this.model.on("change:myStar",
        function(t, i) {
          e.refreshMyStar()
        }),
        this.model.on("change:starRule",
        function(t, i) {
          e.refreshStarRule()
        }),
        this.model.on("change:desc",
        function(t, i) {
          e.refreshStarDesc()
        }),
        this.on("sendStar",
        function(e) {
          this.model.get("effectCtrl") && (this.showPublicMsg(e), c.event.trigger("giftSpecialEffect.pushData", e))
        }),
        this.starPoolModel.on("success",
        function(t, i) {
          i && 200 === i.code && i.data && (i = i.data, e.bar.model.set({
            limitNum: ~~i.anchor_pool_limit_num,
            currentNum: ~~i.anchor_star_pool_current_num
          }), e.model.set({
            desc: i.star_pool_desc
          }))
        })
      },
      render: function() {
        this.$el.append(this.template.starCtrl(this.model.toJSON()))
      },
      events: {
        "hover .starpool-core": "toggleShow",
        "hover .star-send": "toggleShow",
        "hover .sp-ques-box": "toggleShow",
        "loginclick .star-send": "sendStar",
        "click ._openBadge": "openBadge"
      },
      toggleShow: function(e) {
        var t = e.type,
        i = this.$el.find(".starpool-act-group");
        clearTimeout(this.timer),
        this.timer = setTimeout(function() {
          i["mouseenter" === t ? "addClass": "removeClass"]("act-unfold")
        },
        300)
      },
      sendStar: function(e) {
        var t = $(e.currentTarget);
        this.model.set({
          num: t.data("sendNum"),
          isBadge: 0 < ~ (u.get("data").badge.badge_level || 0)
        }).subSave()
      },
      refreshMyStar: function() {
        var e = this.model.get("myStar");
        this.$el.find(".starpool-core span").text(999 < e ? "999+": e)
      },
      refreshStarRule: function() {
        var e = this.model.get("starRule");
        $("._starRule").html(this.template.starRule({
          starRule: e
        }))
      },
      refreshStarDesc: function() {
        var e = this.model.get("desc"),
        t = _.map(e.split(/\n/),
        function(e, t) {
          return "<p>" + e + "</p>"
        }).join("");
        $("._starDesc").html(t)
      },
      showPublicMsg: function(e) {
        var t = e.data,
        i = {
          frontLevels: d.giftMessageFrom(t.op_userInfo),
          nick_name: t.op_userInfo.nick_name,
          starNum: t.op_info.star_num,
          pic: t.op_info.pic,
          user_id: t.op_userInfo.user_id
        };
        c.event.trigger("roomMessageGift.append", _.template(r, i))
      },
      showTips: function(e) {
        var t = this.$el.find('[data-js-dom="starTips"]');
        t.html(e + '<div class="st-arr"></div>'),
        t.show(),
        this._timer = setTimeout(function() {
          t.hide()
        },
        3e3)
      },
      fetchStarPool: function(e) {
        this.starPoolModel.set({
          anchorId: e
        },
        {
          silent: !0
        }),
        this.starPoolModel.getData()
      },
      openBadge: function() {
        c.event.trigger("liveGS.show", {
          target: "nobility"
        })
      }
    })
  },
  ktdX: function(e, t) {
    e.exports = Backbone.Model.extend({
      urlRoot: "/api/lottery/luckDraw",
      initialize: function() {},
      getData: function(e) {
        var t = this,
        i = {
          type: "post",
          dataType: "json",
          data: {
            from_room_id: (e = e || {}).fromRoomId,
            box_uuid: e.boxUuid
          },
          cache: !1,
          success: function(e, i) {
            t.trigger("success", e, i)
          },
          error: function(e, i) {
            t.trigger("error", e, i)
          }
        };
        this.save(null, i)
      }
    })
  },
  l7lV: function(e, t, i) {
    "use strict";
    e.exports = Backbone.Model.extend({
      urlRoot: "/room/followAnchor",
      defaults: {
        anchor_id: "",
        op_type: 1
      },
      initialize: function() {},
      getData: function() {
        var e = this;
        e.save({},
        {
          data: {
            anchor_id: e.get("anchorId"),
            op_type: e.get("opType")
          },
          success: function(t, i) {
            200 === i.code ? e.trigger("ok") : e.trigger("fail", i.msg)
          },
          error: function(t, i) {
            e.trigger("fail", i.msg)
          }
        })
      }
    })
  },
  l8jB: function(e, t) {
    e.exports = '<div class="gift-section" data-js-dom="clickHide"><a data-js-dom="gift-switch" href="javascript:void(0);" class="gift-sec-switch"><i class="io xiu-ico io-arr-up">&#xe62b;</i></a><ul data-js-dom="giftList" class="gift-wrapper"></ul></div>'
  },
  lCwM: function(e, t, i) {
    "use strict";
    var s = i("sk80"),
    a = s.ui.Toast,
    o = i("k8tl"),
    n = i("WBms"),
    l = i("TWpu");
    e.exports = Backbone.View.extend({
      initialize: function() {
        var e = this;
        this.model = {
          isFans: new o,
          rename: new n
        },
        this.model.isFans.on("ok",
        function() {
          e.showDialog()
        }),
        this.model.rename.on("ok",
        function() {
          e.renameOk()
        }),
        this.model.rename.on("fail",
        function(t) {
          e.showToast(t)
        }),
        $(window).on("resize",
        function() {
          e.updatePos()
        }),
        s.roomConfig.on("change:onlineAnchorInfo",
        function(t, i) {
          i.user_id === s.roomConfig.get("loginUserId") && e.model.isFans.getData()
        })
      },
      events: {
        "click ._trueLoveRenameClose": "clickClose",
        "click ._trueLoveRenameAct": "clickRename",
        "blur ._trueLoveRenameName": "blurName"
      },
      datas: {
        disabled: 1
      },
      template: {
        dialog: _.template(l.dialog),
        dialogOk: _.template(l.dialogOk)
      },
      showDialog: function() {
        var e = this.$el,
        t = this.model.isFans.get("data");~~t.status && (1 == ~~t.status && (this.$el.html(this.template.dialog), this.doms = {
          $dialog: $("._trueLoveRename", e),
          $name: $("._trueLoveRenameName", e),
          $err: $("._trueLoveRenameNameErr", e),
          $btn: $("._trueLoveRenameAct", e)
        },
        this.updatePos()), s.event.trigger("truelove.showHideEntry", {
          status: 3
        }))
      },
      updatePos: function() {
        if (this.doms && this.doms.$dialog) {
          var e = this.doms.$dialog,
          t = e.outerWidth(),
          i = e.outerHeight(),
          s = $(window),
          a = s.width(),
          o = s.height(),
          n = s.scrollTop();
          e.css({
            top: (o - i) / 2 + n,
            left: (a - t) / 2
          })
        }
      },
      clickClose: function() {
        this.$el.empty()
      },
      blurName: function(e) {
        var t = $(e.currentTarget).val(),
        i = t.length,
        s = this.doms.$btn,
        a = "xmodal-btn-disabled",
        o = null;
        return 0 === $.trim(t).length ? (this.datas.disabled = 1, s.hasClass(a) || s.addClass(a), void this.doms.$err.empty()) : /[^\w\u4E00-\u9FA5]{1,6}/.test(t) ? (this.datas.disabled = 1, s.hasClass(a) || s.addClass(a), void this.doms.$err.html("不可使用空格或特殊字符")) : 1 === (o = t.match(/[\u4E00-\u9FA5]/g) || []).length && 5 < i || 2 === o.length && 4 < i || 3 === o.length && 3 < i || 3 < o.length ? (this.datas.disabled = 1, s.hasClass(a) || s.addClass(a), void this.doms.$err.html("名称不可超过6个字符（3个汉字）")) : (this.datas.disabled = 0, s.removeClass(a), void this.doms.$err.empty())
      },
      clickRename: function() {
        var e = this.doms.$name.val();
        this.datas.disabled || (this.datas.disabled = 1, this.model.rename.getData({
          name: e
        }))
      },
      renameOk: function() {
        this.$el.html(this.template.dialogOk()),
        this.doms.$dialog = $("._trueLoveRenameOk", this.$el),
        this.updatePos()
      },
      showToast: function(e) {
        a({
          selector: this.doms.$btn,
          msg: e,
          offsetTop: 10
        })
      }
    })
  },
  lVk0: function(e, t) {
    e.exports = '<li class="msg"><div class="row"><%=iconList%><a class="name green" href="javascript:void(0)" node-type="userHoverTip"  data-user_id="<%=fromUserId%>" data-nick_name="<%-fromNickName%>"><%-fromNickName%></a><%if(type==3){%><span class="nr">荣升为</span><span class="bought"><%=name%></span><%}else{%><span class="nr">为</span><a class="name" href="javascript:void(0)" node-type="userHoverTip"  data-user_id="<%=toUserId%>" data-nick_name="<%-toNickName%>"><%-toNickName%></a><span class="bought"><%=name%></span><%}%></div></li>'
  },
  lgRd: function(e, t) {
    e.exports = {
      privilege: '<div class="tlp-t-1"><% if (is_fan) { %>您已加入真爱团，有效期至<%= e_msg ? \'<span>\' : \'\' %><%= now_expire_time %><%= e_msg ? \'</span>\' : \'\' %>，尊享以下特权：<% } else { %>加入真爱团，即可获得以下特权：<% } %></div><ul class="tl-power-list"><li class="tlp-item tlp-item-1"><p class="tit">真爱勋章</p><p>真爱粉唯一标识</p></li><li class="tlp-imtem tlp-item-2"><p class="tit">为主播打榜</p><p>助TA成为超级巨星</p></li><li class="tlp-item tlp-item-3"><p class="tit">专属福利</p><p>积分抽奖得道具</p></li></ul><ul class="tl-form-group"><li class="tlf-item-1"><label><%= is_fan ? \'续费\' : \'开通\' %>时间</label><div class="tl-radio _trueLovePrivilegeNum active" data-num="1">1个月</div><% if (!ticket_num) { %><div class="tl-radio _trueLovePrivilegeNum" data-num="3">3个月</div><div class="tl-radio _trueLovePrivilegeNum" data-num="6">6个月</div><% } %></li><li class="tlf-item-2"><label>价格</label><p class="t-info"><em><span class="_trueLovePrivilegePrice"><%= ticket_num ? \'0\' : price %></span>奇豆</em><span class="_trueLovePrivilegeTxt"></span></p></li></ul><div class="xmodal-btn-group"><a class="xmodal-btn xmodal-btn-a _trueLoveJoin" href="javascript:;">立即<%= is_fan ? \'续费\' : \'开通\' %></a></div>',
      privilegeTxt: "（剩<em><%= ticketNum %></em>次免费加团）"
    }
  },
  lrO5: function(e, t, i) {
    var s = i("sk80"),
    a = s.ui.userIcon,
    o = i("qbbx");
    e.exports = Backbone.View.extend({
      el: "body",
      template: _.template(o),
      events: {
        "click ._logout": "logout",
        "click ._userInfoPanelCheckIn": "checkIn"
      },
      initialize: function(e) {
        _.extend(this.props = {},
        e)
      },
      render: function(e) {
        this.setElement("body"),
        e.iconList = a.medals(e.icons),
        e.anchor_level = e.anchor_level || null,
        this.$panel = $(this.template(e)),
        this.$el.append(this.$panel),
        this.setPosition(this.$panel).show(),
        this.setElement("._userPanel")
      },
      setPosition: function(e) {
        var t = this.props.emitDom.get(0),
        i = t.offsetTop,
        s = t.offsetLeft,
        a = t.clientWidth;
        return e.css({
          top: i,
          left: s || 0 + a - ($(".site-body").hasClass("nav-unfold") ? 3 : 2)
        }),
        e
      },
      logout: function() {
        s.event.trigger("logout")
      },
      close: function() {
        if ("BODY" === this.el.nodeName) return ! 1;
        this.remove()
      },
      checkIn: function() {
        s.event.trigger("checkIn.dialogOpen")
      }
    })
  },
  mBk8: function(e, t) {
    e.exports = Backbone.Model.extend({
      urlRoot: "/api/userinfo/ifNeedShowMedalTip",
      initialize: function() {},
      subSave: function(e) {
        var t = this;
        this.ajaxObj && this.ajaxObj.abort();
        var i = {
          type: "post",
          data: e || {},
          cache: !1,
          success: function(e, i) {
            200 == i.code && t.trigger("success", i.data)
          },
          error: function(e, i) {
            t.trigger("error", i)
          }
        };
        this.ajaxObj = this.save(null, i)
      }
    })
  },
  mEoQ: function(e, t, i) {
    var s, a;
    s = [i("oEHh"), i("rF/M")],
    void 0 === (a = function(e, t) {
      var s = i("sk80");
      return Backbone.View.extend({
        model: new e,
        template: _.template('<div id="<%=tcid%>" class="dialog<%if(clsName){%> <%=clsName%><%}%>" node-type="baseDialog" style="display:none;" <%=attrs%>><div class="dialog-bd"><div class="dialog-main"><%if(title){%><div class="dialog-tit"><%=title%></div><%}%><div class="dialog-mbd" node-type="dialogBd"></div><div class="dialog-mft" style="display:none;" node-type="dialogFt"></div></div><div class="<%if(title){%>dialog-close<%}else{%>dialog-close<%}%> _def"><a title="关闭" href="javascript:void(0);">关闭</a></div></div></div>'),
        btnhtml: '<a href="javascript:void(0);" class="btn"><span class="b"></span></a>',
        btn: {
          ok: {
            text: "确定",
            clsName: "btn-sya",
            _callback: function() {
              this.remove()
            },
            callback: function() {}
          },
          def: {
            text: "取消",
            clsName: "btn-syb",
            _callback: function() {
              this.remove()
            },
            callback: function() {}
          },
          bOk: {
            text: "确定",
            clsName: "btn-sya"
          }
        },
        shadow: null,
        initialize: function(e) {
          var t = this;
          e.template && (this.template = e.template),
          _.bindAll(this, "show", "printShadow", "setPosition", "subCancel", "subOk"),
          this.model.set(e),
          this.model.set("tcid", this.cid),
          $("body").find("#" + this.cid).length || $("body").append(this.template(this.model.toJSON())),
          this.$el = $("#" + this.cid),
          this.createBtn(),
          this.model.get("initShow") && this.show(),
          this.on("ok",
          function() {
            t.remove()
          }),
          this.on("cancel",
          function() {
            t.remove()
          }),
          this.model.clear({
            silent: !0
          }),
          this.model.set(this.model.defaults),
          $(window).bind("resize.dialog", this.setPosition)
        },
        events: {
          "click ._def": "subCancel",
          "click ._ok": "subOk",
          "click ._bOk": "subBok"
        },
        hide: function() {
          this.$el.hide(),
          $('[node-type="dialogShadow"]').hide()
        },
        printShadow: function() {
          var e;
          if (this.model.toJSON().withShadow) {
            e = new t({
              shadowOpacity: this.model.get("shadowOpacity") || .4
            });
            var i = this.remove;
            this.remove = function() {
              i.call(this),
              e.remove()
            }
          }
        },
        setPosition: function() {
          this.$el.css({
            top: $(document).scrollTop() + ($(window).height() - this.$el.outerHeight()) / 2 - s.env.dialogOffset.top,
            left: ($("body").outerWidth(!0) - this.$el.outerWidth()) / 2 - s.env.dialogOffset.left
          })
        },
        createBtn: function() {
          var e = this;
          _.each(this.model.get("btn"),
          function(t, i) {
            var s = $(e.btnhtml),
            a = $.extend(!0, e.btn[t.type] || {},
            t);
            s.addClass(a.clsName + " _" + t.type).attr("href", t.url || "javascript:void(0);").attr("target", t.target || "_self").find(".b").html(a.text),
            _.each(a.attrs,
            function(e, t) {
              s.attr(t, e)
            }),
            e.$el.find('[node-type="dialogFt"]').append(s).show()
          })
        },
        subOk: function(e) {
          e.preventDefault(),
          this.trigger("ok", e)
        },
        subCancel: function(e) {
          e.preventDefault(),
          this.trigger("cancel", e)
        },
        subBok: function(e) {
          var t = this;
          e.preventDefault(),
          this.trigger("bOk",
          function() {
            t.remove()
          })
        },
        show: function() {
          var e = this;
          this.model.set("withShadow", !!this.model.get("withShadow") && !$('[node-type="dialogShadow"]').length),
          this.printShadow(),
          this.$el.css({
            width: this.model.get("width"),
            height: this.model.get("height") || "auto",
            position: "absolute"
          }),
          this.$el.find('[node-type="dialogBd"]').html(this.model.get("content")),
          setTimeout(function() {
            e.$el.show(),
            e.setPosition()
          },
          20)
        }
      })
    }.apply(t, s)) || (e.exports = a)
  },
  mHcq: function(e, t, i) {
    var s = i("sk80"),
    a = s.ui.ScrollView;
    e.exports = Backbone.View.extend({
      initialize: function(e) {
        this.setElement("body"),
        this.scrollView = new a,
        this.isPcnClient = s.env.isPcnClient,
        this.ifExistPopup = !1,
        this.model = e.model,
        this.template = e.template,
        this.arrowOffsetTopTypeMap = {
          category: 8
        },
        this.eventRegister()
      },
      eventRegister: function() {
        var e = this;
        this.on("showPcnPopup",
        function(e) {
          this.pcnInitData = e,
          this.model.subSave(e.popupInterfaceParams)
        }),
        this.model.on("success",
        function(t) {
          e.render(),
          e.ifExistPopup = !0
        }),
        s.event.on("hidePcnPopup",
        function() {
          e.model.ajaxObj && e.model.ajaxObj.abort(),
          e.$el.find("._pcnLeftPopUp").remove(),
          e.ifExistPopup = !1
        }),
        s.event.on("pcnResize",
        function(t) {
          if (e.ifExistPopup) {
            var i = e.getPopupAndArrowPos(e.$el, e.pcnInitData.offsetTop, !0, t.windowHeight);
            i.popupPosition.top != e.popupPosition.top && (e.$el.css(i.popupPosition), e.$el.find(".arr.arr-left").css(i.arrowPosition))
          }
        })
      },
      getPopupAndArrowPos: function(e, t, i, s) {
        var a;
        a = i ? e.offset().top: t - 130;
        var o = e.outerHeight();
        return (s = s || $("body").height()) < a + o && (a = s - 10 - o),
        {
          popupPosition: {
            top: a,
            left: 10
          },
          arrowPosition: {
            top: t - a - 40 - (this.arrowOffsetTopTypeMap[this.pcnInitData.popupType] || 5),
            bottom: 0
          }
        }
      },
      render: function() {
        var e = _.extend(this.model.get("data"), {
          isPcnClient: this.isPcnClient
        },
        this.pcnInitData),
        t = $(this.template(e));
        t.addClass("_pcnLeftPopUp"),
        this.$el.append(t);
        var i = this.getPopupAndArrowPos(t, this.pcnInitData.offsetTop);
        this.popupPosition = i.popupPosition,
        t.css(i.popupPosition),
        t.find(".arr.arr-left").css(i.arrowPosition),
        t.show(),
        this.scrollView.render(t.find(".scroll-panel"))
      }
    })
  },
  mNhG: function(e, t, i) {
    "use strict";
    var s = i("sk80"),
    a = s.roomConfig,
    o = s.ui.Dialog,
    n = s.ui.Toast,
    l = i("nb6I"),
    r = i("vwHx"),
    c = i("EcMa"),
    d = i("Dv6R"),
    u = i("aFJb"),
    p = i("dIbF"),
    h = $('<img src="//www.iqiyipic.com/ppsshow/fix/2.0/img/live/icon_qinmi.png">').hide();
    e.exports = Backbone.View.extend({
      model: {
        monthCardTask: new r,
        cardIn: new c,
        fillCardIn: new d,
        account: new u,
        userRank: new p
      },
      template: {
        signMain: _.template(l.signMain),
        signDate: _.template(l.signDate),
        signRank: _.template(l.signRank),
        dialogFillCard: _.template(l.dialogFillCard),
        dialogFillCardRecharge: _.template(l.dialogFillCardRecharge),
        dialogWrap: _.template(l.dialogWrap)
      },
      csses: {
        monthItem: "._signMonthItem",
        dateList: "._signDate",
        signRank: "._signRank",
        signFillCardTicketNum: "._signFillCardTicketNum"
      },
      doms: {},
      datas: {
        anchorId: a.get("onlineAnchorInfo").user_id,
        roomId: a.get("roomId"),
        roomOwner: a.get("roomOwner"),
        pos: null,
        lock: 0,
        isSign: 0,
        taskId: 0,
        isAnchor: 0,
        signDate: null,
        signFillPrice: 0,
        showSignAfter: 0,
        monthType: 1,
        fillCardTicketPid: 0,
        fillCardTicketNum: 0
      },
      events: {
        "click .ci-tab .tab-item:not(.selected)": "tabClick",
        "click .dialog-close": "closeClick",
        "click ._signMonthItem:not(.dp-month-item-active)": "monthClick",
        "click a.item": "signFill"
      },
      setDoms: function() {
        var e = this.$el,
        t = this.csses;
        this.doms.$monthItem = $(t.monthItem, e),
        this.doms.$dateList = $(t.dateList, e),
        this.doms.$signRank = $(t.signRank, e),
        this.doms.$signFillCardTicketNum = $(t.signFillCardTicketNum, e)
      },
      initialize: function() {
        this.listenEvent()
      },
      listenEvent: function() {
        var e = this;
        e.on("open",
        function(t) {
          e.datas.pos = t.pos,
          e.doms.$signBtn = t.btn,
          e.datas.isSign = ~~t.btn.data("complete"),
          e.getSignList()
        }),
        e.on("close",
        function() {
          e.datas.monthType = 1,
          e.$el.hide().empty(),
          h.remove()
        }),
        e.model.monthCardTask.on("ok",
        function(t) {
          e.doms.$signBtn.data({
            open: 1,
            lock: 0
          }),
          e.datas.lock = 0,
          e.datas.signDate = t.card_calendar,
          e.datas.signFillPrice = t.fill_card_price,
          t.isAnchor = e.datas.anchorId === s.loginInfo.userId,
          e.renderSignList(t),
          e.datas.isSign || t.isAnchor || e.signToday()
        }),
        e.model.monthCardTask.on("fail",
        function(t) {
          e.doms.$signBtn.data({
            open: 1,
            lock: 0
          }),
          e.datas.lock = 0,
          e.dialogError(t)
        }),
        e.model.userRank.on("ok",
        function(t) {
          e.doms.$signBtn.data({
            open: 1,
            lock: 0
          }),
          e.renderSignRank(t)
        }),
        e.model.userRank.on("fail",
        function(t) {
          e.doms.$signBtn.data({
            open: 1,
            lock: 0
          }),
          e.dialogError(t)
        }),
        e.model.cardIn.on("ok",
        function(t) {
          e.datas.isSign = 1,
          e.showSignAfter(t),
          e.changeSignBtn(),
          e.showToast(t.reward_msg)
        }),
        e.model.cardIn.on("fail",
        function(t) {
          e.dialogError(t)
        }),
        e.model.fillCardIn.on("ok",
        function(t) {
          e.showSignAfter(t),
          e.showToast(t.reward_msg),
          0 < e.datas.fillCardTicketNum && (e.datas.fillCardTicketNum--, e.doms.$signFillCardTicketNum.html(e.datas.fillCardTicketNum), s.event.trigger("sendGiftAction.updateGiftNum", {
            product_id: e.datas.fillCardTicketPid,
            num: 1
          }))
        }),
        e.model.fillCardIn.on("fail",
        function(t) {
          e.dialogError(t),
          e.getSignList()
        }),
        e.model.account.on("ok",
        function(t) {
          e.datas.lock = 0,
          t.bean_balance + t.diamond_balance >= e.datas.signFillPrice ? e.dialogFillCardPrice() : e.dialogFillCardRecharge()
        }),
        e.model.account.on("fail",
        function(t) {
          e.datas.lock = 0,
          e.dialogError(t)
        }),
        s.event.on(["socket.LIVE_START", "socket.LIVE_STOP", "socket.MIC_PULL_IN"],
        function(t) {
          100005 === t.data.msgType ? e.datas.anchorId = t.data.to_userInfo.user_id: t.data.op_info.mic_list && t.data.op_info.mic_list.length ? e.datas.anchorId = t.data.op_info.mic_list[0] : e.datas.anchorId = e.datas.roomOwnerId
        }),
        $(window).on("resize",
        function() {
          e.doms.$signBtn && setTimeout(function() {
            e.updatePosition(e.doms.$signBtn),
            e.$el.css("left", e.datas.pos.left - e.$el.width() / 2)
          },
          210)
        })
      },
      tabClick: function(e) {
        var t = $(e.currentTarget),
        i = t.data("target");
        t.addClass("selected").siblings().removeClass("selected"),
        this.showTab(i)
      },
      showTab: function(e) {
        "rank" === (e = e || "sign") && (this.model.userRank.set("anchorId", this.datas.anchorId), this.model.userRank.getData()),
        $("[data-content=" + e + "]", this.$el).show().siblings(".tab-panel").hide()
      },
      getSignList: function() {
        var e = this;
        e.datas.isAnchor = e.datas.anchorId === s.loginInfo.userId,
        e.datas.isAnchor ? (e.model.userRank.set("anchorId", e.datas.anchorId), e.model.userRank.getData()) : (e.model.monthCardTask.set({
          anchorId: e.datas.anchorId,
          monthType: e.datas.monthType
        }), e.model.monthCardTask.getData())
      },
      renderSignList: function(e) {
        this.datas.fillCardTicketPid = e.fill_card_ticket_pid,
        this.datas.fillCardTicketNum = ~~e.fill_card_ticket_num,
        this.$el.css({
          top: this.datas.pos.top,
          left: this.datas.pos.left - this.$el.width() / 2
        }).html(this.template.signMain(e)),
        this.setDoms(),
        e.isAnchor || (this.setMonthTab(), this.renderSignDate()),
        this.$el.show()
      },
      updatePosition: function(e) {
        var t = e.offset().left,
        i = e.outerWidth();
        this.datas.pos.left = t + i / 2
      },
      renderSignDate: function() {
        this.doms.$dateList.html(this.template.signDate({
          card_calendar: this.datas.signDate
        }))
      },
      renderSignRank: function(e) {
        this.datas.isAnchor && (e.isAnchor = this.datas.isAnchor, this.renderSignList(e)),
        this.doms.$signRank.html(this.template.signRank({
          list: e
        }))
      },
      setMonthTab: function() {
        var e = this.model.monthCardTask.get("curInfo"),
        t = this.datas.signDate[0].task;
        this.doms.$monthItem.first().text((e.month - 1 || 12) + "月"),
        this.doms.$monthItem.last().text(e.month + "月"),
        e.year === t.task_year && e.month === t.task_month ? this.doms.$monthItem.last().addClass("dp-month-item-active") : this.doms.$monthItem.first().addClass("dp-month-item-active")
      },
      monthClick: function(e) {
        var t = $(e.currentTarget);
        if (this.datas.lock) return ! 1;
        this.datas.lock = 1,
        this.datas.monthType = t.data("month-type"),
        this.getSignList()
      },
      sign: function() {
        this.model.cardIn.set({
          taskId: this.datas.taskId,
          roomId: this.datas.roomId
        }),
        this.model.cardIn.getData()
      },
      signToday: function() {
        var e = this;
        $.each(e.datas.signDate,
        function(t, i) {
          if (1 === i.is_card) return e.datas.taskId = ~~i.task.task_id,
          !1
        }),
        e.sign()
      },
      signFill: function(e) {
        var t = $(e.currentTarget);
        if (this.datas.lock) return ! 1;
        this.datas.lock = 1,
        this.datas.taskId = ~~t.data("task-id"),
        this.datas.fillCardTicketNum ? this.dialogFillCardTicket() : this.model.account.getData()
      },
      dialogFillCardTicket: function() {
        var e = this;
        new o({
          template: this.template.dialogWrap,
          clsName: "xmodal-clock-in",
          title: "提示",
          content: this.template.dialogFillCard({
            tpl: "fillCardTicket"
          }),
          btn: [{
            clsName: "xmodal-btn xmodal-btn-a",
            type: "ok",
            text: "确定"
          },
          {
            clsName: "xmodal-btn xmodal-btn-b",
            type: "def",
            text: "取消"
          }]
        }).on("ok",
        function() {
          e.dialogFillCardCb({
            use_ticket: 1
          })
        }),
        this.datas.lock = 0
      },
      dialogFillCardPrice: function() {
        var e = this;
        new o({
          template: this.template.dialogWrap,
          clsName: "xmodal-clock-in",
          title: "提示",
          content: this.template.dialogFillCard({
            tpl: "fillCardPrice",
            price: this.datas.signFillPrice
          }),
          btn: [{
            clsName: "xmodal-btn xmodal-btn-a",
            type: "ok",
            text: "确定"
          },
          {
            clsName: "xmodal-btn xmodal-btn-b",
            type: "def",
            text: "取消"
          }]
        }).on("ok",
        function() {
          e.dialogFillCardCb()
        })
      },
      dialogFillCardCb: function(e) {
        var t = _.extend({},
        {
          task_id: this.datas.taskId,
          room_id: this.datas.roomId
        },
        e);
        this.model.fillCardIn.getData(t)
      },
      dialogFillCardRecharge: function() {
        new o({
          template: this.template.dialogWrap,
          clsName: "xmodal-clock-in",
          title: "提示",
          content: this.template.dialogFillCardRecharge({
            price: this.datas.signFillPrice
          }),
          btn: [{
            clsName: "xmodal-btn xmodal-btn-a",
            type: "ok",
            text: "充值"
          },
          {
            clsName: "xmodal-btn xmodal-btn-b",
            type: "def",
            text: "取消"
          }]
        }).on("ok",
        function() {
          s.event.trigger("quickPayment.show")
        })
      },
      showSignAfter: function(e) {
        var t = this,
        i = 0;
        t.datas.showSignAfter = 1,
        $.each(t.datas.signDate,
        function(e, s) {
          if (~~s.task.task_id === t.datas.taskId) return i = e,
          !1
        }),
        t.datas.signDate[i].is_card = 2,
        t.renderSignDate(),
        t.showIntimacyPlus({
          add: e.intimate.increase,
          index: i
        },
        function() {
          t.doms.$signBtn.data("open") && t.getSignList()
        })
      },
      changeSignBtn: function() {
        this.doms.$signBtn.data("complete", 1).removeClass("unsign").html("已打卡")
      },
      showIntimacyPlus: function(e, t) {
        var i = this.doms.$dateList.find("li").eq(e.index),
        s = $('<div class="intimacy-value-plus">+ ' + e.add + "</div>"),
        a = this.$el.find(".intimacy-scroll-bg").offset(),
        o = $(document);
        h.appendTo("body").offset({
          top: i.offset().top + o.scrollTop(),
          left: i.offset().left + o.scrollLeft()
        }).css({
          position: "absolute",
          zIndex: 21
        }).show(),
        s.appendTo(".cl-instuction").css({
          position: "absolute"
        }).hide(),
        h.animate({
          top: a.top - 15,
          left: a.left + 250
        },
        1500,
        function() {
          h.remove(),
          s.show().animate({
            top: -9
          },
          800,
          function() {
            t && t(),
            setTimeout(function() {
              s.remove()
            },
            300)
          })
        })
      },
      dialogError: function(e) {
        new o({
          title: "提示",
          content: e,
          btn: [{
            clsName: "btn-sye",
            type: "ok",
            text: "确定"
          }]
        })
      },
      closeClick: function() {
        this.doms.$signBtn.data("open", 0),
        this.trigger("close")
      },
      showToast: function(e) {
        e && n({
          selector: this.csses.dateList,
          msg: e
        })
      }
    })
  },
  mtJN: function(e, t, i) {
    "use strict";
    e.exports = {
      widgets: {
        1 : {
          js: "//static.iqiyi.com/js/ppsshow/modules/roomEventPics.js",
          css: "//static.iqiyi.com/css/ppsshow/2.0/style/pendant_year2018_schedule.css"
        },
        common_widget: {
          js: "//static.iqiyi.com/js/ppsshow/modules/roomEventPics.js",
          css: "//static.iqiyi.com/css/ppsshow/2.0/style/pendant_year2018_schedule.css"
        },
        year2017_final: {
          js: "//static.iqiyi.com/js/ppsshow/modules/room2017AwardWidget.js",
          css: "//static.iqiyi.com/css/ppsshow/2.0/style/theme_award_ceremony.css"
        }
      },
      trump: {
        css: "//static.iqiyi.com/css/ppsshow/2.0/style/trump_custom.css"
      }
    }
  },
  n4nJ: function(e, t, i) {
    "use strict";
    var s = i("sk80"),
    a = s.tools.ishow,
    o = i("ayMT");
    e.exports = Backbone.View.extend({
      initialize: function() {
        var e = this;
        this.model = new o,
        this.model.on("ok",
        function() {
          e.showHideEntry( - 1)
        }),
        s.roomConfig.on("change:onlineAnchorInfo",
        function(t, i) {
          e.datas.anchorId = i.user_id
        }),
        s.event.on("truelove.showHideEntry",
        function(t) { - 1 === t.status ? (t.anchorId && (e.datas.anchorId = t.anchorId), e.model.getData({
            anchor_id: e.datas.anchorId
          })) : e.showHideEntry(t.status)
        }),
        a.on("iShowLogout",
        function() {
          e.$el.empty().removeClass(e.datas.aniCls)
        })
      },
      events: {
        "click a": "clickEntry"
      },
      datas: {
        anchorId: 0,
        aniCls: "tl-show-ani"
      },
      template: _.template('<a href="javascript:;"><% if (status === 3) { %><div class="ico-tl"></div><% } else { %>加入<% } %>真爱团</a>'),
      showHideEntry: function(e) {
        var t;
        1 < (t = -1 === e ? ~~this.model.get("data").status: e) ? this.$el.html(this.template({
          status: t
        })).addClass(this.datas.aniCls) : this.$el.removeClass(this.datas.aniCls),
        s.env.isPcnClient && s.event.ensure("tourbus.guideFans", t)
      },
      clickEntry: function() {
        s.event.trigger("truelove.dialogOpen", this.datas.anchorId)
      }
    })
  },
  nCB2: function(e, t, i) {
    var s = i("sk80"),
    a = s.roomConfig,
    o = s.ui.Toast;
    e.exports = Backbone.View.extend({
      el: "body",
      initialize: function(e) {
        var t = this;
        _.extend(this.props = {},
        e),
        this.props.selector = '[node-type="' + e.nodeType + '"]',
        this.model = this.props.model,
        this.model.on("success",
        function(e) {
          o({
            selector: "#_userPaper",
            msg: t.props.toastMsg($("#_userPaper ._nickName").text(), this.get("opType"))[e.code] || e.msg || "当前操作受限"
          })
        }),
        this.model.on("error success",
        function() {
          $(t.props.selector).data("loading", 0)
        }),
        this.$el.on("loginclick", this.props.selector, _.bind(this.operate, this))
      },
      operate: function(e) {
        e.preventDefault();
        var t = $(e.currentTarget);
        t.data("loading") || (t.data("loading", 1), this.model.set("opType", 1 == t.data(this.props.nodeType) ? 2 : 1), this.postData(t.closest("[data-user_id]").data("user_id")))
      },
      postData: function(e) {
        this.model.subSave({
          data: {
            room_id: a.get("roomId"),
            type: this.props.type,
            op_type: this.model.get("opType"),
            to_uid: e
          }
        })
      }
    })
  },
  nVpQ: function(e, t, i) {
    var s = i("AQTH");
    e.exports = function() {
      window.onbeforeunload = function() {
        s.showmodal(0, "")
      },
      $("body").on("click", "a",
      function(e) {
        var t, i = this.href,
        a = /javascript/.test(t = i) || "" === t ? "js": /\/room\/\d+/.test(t) ? "room": /blob:/.test(t) ? "blob": "normal";
        if ("blob" != a) switch ("js" !== a && e.preventDefault(), a) {
        case "js":
          break;
        case "room":
          s.goChatRoom(~~i.replace(/.+\/room\//, ""));
          break;
        case "normal":
          var o = /QiXiu\/(\d+\.\d+)/;
          2.8 <= (navigator.userAgent.match(o) && +navigator.userAgent.match(o)[1]) && /x(?:iu)?\.pps\.tv(\S*)/.test(i) ? (i = location.protocol + "//" + location.host + this.pathname + this.search, s.openUrlInMainBrowser(i, 1)) : s.openSystemBrowser(i)
        }
      })
    }
  },
  nb6I: function(e, t) {
    e.exports = {
      signMain: '<div class="clock-in-hd"><ul class="ci-tab"><% if (!isAnchor) { %><li class="tab-item selected first" data-target="sign"><a href="javascript:;">打卡</a><b></b></li><% } %><li class="tab-item <%= isAnchor ? \'selected\' : \'\' %>" data-target="rank"><a href="javascript:;">榜单</a><b></b></li></ul></div><div class="clock-in-bd"><div class="ci-content"><% if (!isAnchor) { %><div class="tab-panel daka-panel" data-content="sign"><div class="had-clocked-day">本月打卡天数<span class="hcd-n"><%= count_card %></span><a class="clock-question" href="javascript:;"><span class="cq-icon">?</span><div class="help-tip" style="top:28px; left:-145px;"><div class="tip-bd"><p class="tip-bd-p"><span class="icon-circle-g">●</span>每月为单个主播打卡达到7天、14天、21天后可获取额外奖励。（为多个主播打卡无法叠加领取奖励）</p><p class="tip-bd-p"><span class="icon-circle-g">●</span>可以对本月和上月漏打的日期点击进行补打卡，补打卡将延续您的打卡天数来获取奖励</p></div><span class="arrow"><em class="inner"></em></span></div></a></div><div class="clock-prize-block"><a href="javascript:;" class="_signPrizeItem cp-item"><div class="cp-item-pic"><img src="<%= next_reward.pic %>" width="30" height="30"><span>x<%= next_reward.product_num %></span></div><p class="cp-item-name"><%= next_reward.name %></p><% if (~~next_reward.completed) { %><p class="cp-item-tip">已领取</p><% } else { %><p class="cp-item-tip"><%= next_reward.card_num %>日可领</p><% } %><div class="cp-item-line"></div></a><% _.each(rewards, function(r, i) { %><a href="javascript:;" class="_signPrizeItem cp-item"><div class="cp-item-pic"><img src="<%= r.pic %>" width="30" height="30"><span>x<%= r.product_num %></span></div><p class="cp-item-name"><%= r.name %></p><% if (~~r.completed) { %><p class="cp-item-tip">已领取</p><% } else { %><p class="cp-item-tip"><%= r.card_num %>日可领</p><% } %></a><% }); %></div><div class="clock-in-lvlinfo"><div class="cl-instuction"><span class="ico-lv qm-lv lv<%= intimate.level %>"></span>升级还需要<span class="intimacy-value"><%= intimate.next_score - intimate.score %></span>亲密值<a class="clock-question clock-question-hover" href="javascript:;"><span class="cq-icon">?</span><div class="help-tip" style="top:28px; left:-145px;"><div class="tip-bd"><p>连续打卡不足2天，亲密值＋10</p><p class="tip-bd-p <%= card_days >= 2 && card_days <= 4 && \'tip-bd-p-select\' || \'\' %>"><span class="icon-circle-g">●</span><span class="tip-bd-con">阶段1：连续打卡2-4天，亲密值＋12</span><span class="tip-bd-dec"></span></p><p class="tip-bd-p <%= card_days >= 5 && card_days <= 7 && \'tip-bd-p-select\' || \'\' %>"><span class="icon-circle-g">●</span><span class="tip-bd-con">阶段2：连续打卡5-7天，亲密值＋20</span><span class="tip-bd-dec"></span></p><p class="tip-bd-p <%= card_days >= 8 && card_days <= 14 && \'tip-bd-p-select\' || \'\' %>"><span class="icon-circle-g">●</span><span class="tip-bd-con">阶段3：连续打卡8-14天，亲密值＋25</span><span class="tip-bd-dec"></span></p><p class="tip-bd-p <%= card_days >= 15 && card_days <= 29 && \'tip-bd-p-select\' || \'\' %>"><span class="icon-circle-g">●</span><span class="tip-bd-con">阶段4：连续打卡15-29天，亲密值＋30</span><span class="tip-bd-dec"></span></p><p class="tip-bd-p tip-bd-p-last <%= card_days >= 30 && \'tip-bd-p-select\' || \'\' %>"><span class="icon-circle-g">●</span><span class="tip-bd-con">阶段5：连续打卡30天及以上，亲密值＋40</span></p></div><span class="arrow"><em class="inner"></em></span></div></a></div><div class="intimacy-scroll-bg"><div class="intimacy-scroll-bar" style="width:<%= intimate.percent %>;"></div></div></div><div class="datepick-header"><p class="clock-day-panel">已连打卡<span class="combo-clock-day"><%=card_days%></span>天，漏打卡<span class="miss-clock-day"><%= miss_days %></span>天，补打卡券<span class="miss-clock-day _signFillCardTicketNum"><%= fill_card_ticket_num %></span>张</p><div class="dp-month"><div class="dp-month-item _signMonthItem" data-month-type="-1"></div><div class="dp-month-item _signMonthItem" data-month-type="1"></div></div></div><div class="clearfix" style="clear: both;"></div><div class="date-list-block"><ul class="date-list _signDate"></ul></div></div><% } %><div class="tab-panel host-content _signRank" data-content="rank"></div></div></div><span class="dialog-close"><a href="javascript:;">关闭</a></span><span class="d-arrow"><span class="inner"></span></span>',
      signDate: '<% _.each(card_calendar, function(v) { %><% if (v.is_card === 4) { %><li class="may-clock"><a class="item" href="javascript:;" data-task-id="<%= v.task.task_id %>"><em class="n"><%= v.task.task_day %></em><em class="bu">补</em></a></li><% } else if (v.is_card === 3) { %><li class="cant-clock"><span class="item"><%= v.task.task_day %></span></li><% } else { %><li class="clocked <%= v.is_card === 1 ? \'_not\' : \'\' %>"><span class="item"><%= v.task.task_day %></span></li><% } %><% }); %>',
      dialogWrap: '<div id="<%= tcid %>" class="xmodal<% if (clsName) { %> <%= clsName %><% } %>" node-type="baseDialog" style="display:none;" <%= attrs %>><a href="javascript:;" class="_def"><i class="xiu-ico xiu-ico-off">&#xe63b;</i></a><% if (title) { %><div class="xmodal-title"><%= title %></div><% } %><div class="xmodal-clock-in-txt" node-type="dialogBd"></div><div class="xmodal-btn-group" node-type="dialogFt" style="display:none;"></div></div>',
      dialogFillCard: "<p>您已选择补打卡</p><p>需消费<span><% if (tpl === 'fillCardTicket') { %>1张补打卡券<% } else { %><%= price %>奇豆/钻石<% } %></span></p>",
      dialogFillCardRecharge: "<p>您的余额不足</p><p><span>补打价格：<%= price %>奇豆/钻石</span><br></p>",
      signRank: '<div class="clock-medal-stage"><% _.each([\'gold\', \'silver\', \'bronze\'], function(v, i) { %><div class="clock-medal-item md-<%= v %>"><div class="clock-avator"><img src="<%= list[i] ? list[i].user_info.user_icon : \'//www.iqiyipic.com/ppsshow/fix/2.0/img/live/placeholder.png\' %>" width="50" height="50"><div class="clock-md"></div></div><div class="days"><em><%= list[i] ? list[i].card_days : 0 %></em>&nbsp;天</div><% if (list[i]) { %><div class="name"><i class="ico-lv qm-lv lv<%= list[i].intimate.intimate_level %>"></i><%- list[i].user_info.nick_name %></div><% } else { %><div class="name">虚位以待</div><% } %></div><% }); %></div><ul class="host-list"><% for (var i = 3; i < 10; i++) { v = list[i] %><li><span class="n"><%= i + 1 %></span><% if (v) { %><span class="name"><i class="ico-lv qm-lv lv<%= v.intimate.intimate_level %>"></i><%- v.user_info.nick_name %></span><% } else { %><span class="name">虚位以待</span><% } %><span class="days"><em><%= v ? v.card_days : 0 %></em>&nbsp;&nbsp;天</span></li><% } %></ul>'
    }
  },
  nj0n: function(e, t, i) {
    var s;
    void 0 === (s = function() {
      return Backbone.Model.extend({
        urlRoot: "/tag/isShowTips",
        initialize: function() {},
        subSave: function(e) {
          var t = this;
          this.save({},
          {
            type: "post",
            dataType: "json",
            data: e,
            success: function(e, i) {
              200 === i.code ? t.trigger("success", i) : t.trigger("error")
            }
          })
        }
      })
    }.call(t, i, t, e)) || (e.exports = s)
  },
  nmmu: function(e, t) {
    e.exports = {
      carportEmpty: '<div class="empty-haoche">房间里还没壕车，快去<a href="/mall/car" target="_blank" data-pb-rseat="1">购买壕车</a>吧~</div>',
      carportList: '<div class="scroll-panel scroll-panel-haoche"><div class="scroll-content"><ul class="haoche-list _carportLists"></ul></div></div>',
      carportItem: '<%var len = items.length;if (type === \'refresh\') {len = items.length < 4 ? 4 : items.length;}%><% for (var i = 0; i < len; i++) { %><% if (type === \'refresh\' && items.length < 4 && i >= items.length) { %><li><a href="/mall/car" target="_blank" data-pb-rseat="1"><div class="pic-box"><div class="xydw-haoche">占位图</div></div><div class="u-name center">虚位以待</div></a></li><% } else { %><li><div class="pic-box"><img src="<%= items[i].pic %>" alt="<%= items[i].name %>"><div class="haoche-name"><%= items[i].name %></div></div><div class="u-name"><% if(items[i].user_info.badge_level > 0) { %><i title="<%= items[i].user_info.entity_name %>" class="ico-lv gz-lv lv<%= items[i].user_info.badge_level %>"></i><% } %><% if(items[i].user_info.guard_level > 0) { %><i class="ico-lv sh-lv lv<%= items[i].user_info.guard_level %>"></i><% } %><%= _.escape(items[i].user_info.nick_name) %></div></li><% } %><% } %>'
    }
  },
  ntod: function(e, t, i) {
    "use strict";
    var s = i("sk80"),
    a = s.roomConfig,
    o = s.ui.Dialog,
    n = s.ui.ScrollView,
    l = i("tUqm"),
    r = i("pr2G");
    e.exports = Backbone.View.extend({
      model: new r,
      template: {
        roomEditManager: _.template(l.roomEditManager),
        roomEditManagerNotice: _.template(l.roomEditManagerNotice)
      },
      datas: {
        roomId: a.get("roomId"),
        anchorId: a.get("onlineAnchorInfo").user_id,
        anchorName: a.get("onlineAnchorInfo").nick_name,
        toUid: 0,
        opType: 2,
        listData: null,
        delIndex: 0
      },
      events: {
        "click ._del": "clickDelRoomAdmin"
      },
      initialize: function(e) {
        this.datas.listData = e.data,
        this.render(),
        this.listenEvent()
      },
      listenEvent: function() {
        var e = this;
        e.model.off(),
        e.model.on("ok",
        function() {
          e.datas.listData.splice(e.datas.delIndex, 1),
          e.render()
        }),
        e.model.on("fail",
        function(t) {
          e.dialogError(t)
        })
      },
      render: function() {
        var e = this.datas.listData;
        this.$el.html(this.template.roomEditManager({
          list: e
        })),
        e.length && (this.scrollView = new n, this.scrollView.render($(".scroll-panel", this.$el)))
      },
      clickDelRoomAdmin: function(e) {
        var t = $(e.currentTarget),
        i = t.data("userid"),
        s = t.data("username"),
        a = t.parents("li");
        this.datas.delIndex = a.index(),
        this.model.set({
          roomId: this.datas.roomId,
          toUid: i,
          opType: this.datas.opType
        }),
        this.model.getData(),
        this.datas.delUserId = i,
        this.datas.delUserName = s
      },
      dialogError: function(e) {
        new o({
          title: "提示",
          content: e,
          btn: [{
            clsName: "btn-sye",
            type: "ok",
            text: "确定"
          }]
        })
      }
    })
  },
  o2Ur: function(e, t, i) {
    "use strict";
    e.exports = Backbone.Model.extend({
      urlRoot: "/api/car/getCarportList",
      defaults: {
        room_id: "",
        page: 1,
        page_size: 20
      },
      initialize: function() {},
      getData: function() {
        var e = this;
        e.save({},
        {
          data: {
            room_id: e.get("roomId"),
            page: e.get("page"),
            page_size: e.get("pageSize")
          },
          success: function(t, i) {
            200 === i.code ? e.trigger("ok", i.data) : e.trigger("empty")
          },
          error: function(t, i) {
            e.trigger("fail", i.msg)
          }
        })
      }
    })
  },
  o3Nh: function(e, t, i) {
    var s = i("sk80"),
    a = s.tools.ishow,
    o = s.core.visibilityDelay,
    n = s.createSwf,
    l = i("PsUJ"),
    r = i("3/Hw");
    e.exports = Backbone.View.extend({
      el: "body",
      initialize: function(e) {
        _.bindAll(this, "changeFlashWrap");
        var t = this,
        i = !1,
        l = _.throttle(this.changeFlashWrap, 300);
        this.model = new(Backbone.Model.extend({})),
        this.msgList = [],
        this.wh = [1348, 740],
        this.model.set("effectCtrl", !0),
        this.isGray = e.isGray,
        this.h5Init = !1,
        this.getEffectsModel = new r,
        this.effectsSetting = null,
        this.getEffectsDelay = 6e4,
        this.packUrlMap = {
          102001 : "packUrlByEffectInfo",
          600040 : "packUrlByEffect"
        },
        this.getEffectsSetting(),
        s.event.on("roomMessageControl.effect",
        function(e) {
          t.model.set("effectCtrl", e),
          e || (t.msgList = []);
          try {
            a.getFlash(t.flashId).fl_effectSwitch(e)
          } catch(e) {}
        }),
        $("body").append('<div id="fullScreenEffect" class="full-screen-effect" style="position:absolute;width:4px;height:4px;left:-9999px;top:-9999px;"><div id="gfts"></div></div>');
        var c = !(window.effectSwfTriggerBlockSpecial = function(e) {
          var i = $("#fullScreenEffect"),
          s = {
            width: 1,
            height: 1,
            left: "-9999px",
            top: "-9999px",
            zIndex: 1
          };
          switch (e) {
          case 1:
            s = _.extend({
              zIndex: 99,
              width: t.wh[0],
              height: t.wh[1]
            },
            t.calculatePosition());
            break;
          case 2:
            s = _.extend({
              zIndex: 99,
              width: t.wh[0],
              height: t.wh[1]
            },
            t.calculateStarPosition())
          }
          i.css(s)
        });
        o(60,
        function() {
          c = !0
        },
        function() {
          c = !1
        }),
        this.model.on("change:flashData",
        function(e, o) {
          if (!c && this.get("effectCtrl")) {
            if (t.isGray && s.tools.effectSupport) return t.msgList.push(t.formatData(o)),
            !t.h5Init && s.event.trigger("h5EffectInit", {
              type: 1,
              dom: $(".video-container,.video-living").get(0),
              offsetX: 615,
              offsetY: 338,
              w: 1348,
              h: 740
            }),
            t.h5Init = !0,
            s.event.trigger("h5EffectList", {
              type: 1,
              list: t.msgList
            }),
            !(t.msgList = []);
            if (i || (i = !0, $("#fullScreenEffect").css({
              width: 1e3,
              height: 1e3
            }), t.swfObj = new n({
              el: "#gfts",
              webAddress: "//static.iqiyi.com/ppsshow/flashplayer/EffectOnLiveSpecial2.swf?v=" + ISHOW.flashVersion,
              width: "100%",
              height: "100%",
              flashvars: {
                isNew: 1,
                offsetX: 615,
                offsetY: 338
              }
            }), t.swfObj.createDom(), t.swfObj.on("flashLoadedCallback",
            function(e) {
              e.success && (t.flashId = e.ref.id),
              _.each(t.msgList,
              function(e) {
                try {
                  a.getFlash(t.flashId).fl_showGiftEffectSpecial(e)
                } catch(e) {
                  console.log(e)
                }
              }),
              t.msgList = []
            })), t.flashId) try {
              a.getFlash(t.flashId).fl_showGiftEffectSpecial(t.formatData(o))
            } catch(e) {
              console.log(e)
            } else t.msgList.push(t.formatData(o))
          }
        }),
        this.on("changePosition",
        function() {
          l()
        }),
        s.event.on("giftSpecialEffect.pushData",
        function(e) {
          t.model.unset("flashData", {
            silent: !0
          }).set("flashData", e.data)
        }),
        this.getEffectsModel.on("success",
        function(e, i) {
          t.effectsSetting = i.data
        }),
        this.getEffectsModel.on("error",
        function(e, i) {
          setTimeout(function() {
            t.getEffectsSetting()
          },
          t.getEffectsDelay)
        })
      },
      formatData: function(e) {
        var t;
        return "102001" == e.msgType || "600040" == e.msgType ? t = this.commonFlashEffect(e) : "102011" == e.msgType ? t = this.personalEffect(e) : "102002" == e.msgType && (t = this.starEffect(e)),
        t
      },
      commonFlashEffect: function(e) {
        var t, i = (e = e || {}).op_info.pic,
        s = e.op_userInfo,
        a = e.to_userInfo,
        o = l.getRole(s.role_type),
        n = l.getRole(a.role_type);~i.indexOf("//www.iqiyipic.com/ppsxiu/fix/sc/") && (i = "//www.iqiyi.com/player/common/sc/" + (i = i.split(/\//g).pop().replace(/(\d{1,})|(\.[a-z]{3,4}$)/g,
        function(e, t, i, s, a) {
          return t ? "50": ".swf"
        }))),
        (t = {
          type: "buyGift",
          giftUrl: i,
          giftName: e.op_info.name,
          giftCount: e.op_info.num,
          showtime: e.op_info.time,
          giftPrice: e.op_info.price,
          is_all_platform_gift: !!e.op_info.is_all_platform_gift,
          toUser: !n.is_anchor,
          zhubo: a.nick_name,
          userInfo: {
            guizeLeave: 0 | s.badge_level,
            shouhuLeave: 0 | s.guard_level,
            userName: s.nick_name,
            userID: s.user_id,
            medal_info: s.medal_info || [],
            is_super_admin: !!o.is_super_admin,
            is_field_control: !!o.is_field_control
          }
        }).toUserInfo = {
          guizeLeave: 0 | a.badge_level,
          shouhuLeave: 0,
          userName: a.nick_name,
          userID: a.user_id,
          medal_info: a.medal_info || [],
          is_super_admin: !!n.is_super_admin,
          is_field_control: !!n.is_field_control
        };
        var r = this[this.packUrlMap[e.msgType]](e, t, i);
        return $.extend({
          url: r
        },
        t)
      },
      personalEffect: function(e) {
        var t = e.op_info;
        return {
          points: t.points,
          swf_type: t.swf_type,
          pic_png: t.url,
          userInfo: {
            userName: t.op_nick_name
          }
        }
      },
      starEffect: function(e) {
        var t = (e = e || {}).op_userInfo,
        i = e.to_userInfo,
        s = l.getRole(t.role_type),
        a = l.getRole(i.role_type);
        return {
          type: "star",
          url: e.op_info.effect_info.pcw.effect_url,
          toUser: !a.is_anchor,
          zhubo: i.nick_name,
          userInfo: {
            guizeLeave: 0 | t.badge_level,
            shouhuLeave: 0 | t.guard_level,
            userName: t.nick_name,
            userID: t.user_id,
            medal_info: t.medal_info || [],
            is_super_admin: !!s.is_super_admin,
            is_field_control: !!s.is_field_control
          },
          toUserInfo: {
            guizeLeave: 0 | i.badge_level,
            shouhuLeave: 0,
            userName: i.nick_name,
            userID: i.user_id,
            medal_info: i.medal_info || [],
            is_super_admin: !!a.is_super_admin,
            is_field_control: !!a.is_field_control
          }
        }
      },
      calculatePosition: function() {
        var e = $(".video-container"),
        t = {},
        i = e.offset();
        function s(e, t, i) {
          return Math.max(0, e + t / 2 - i)
        }
        return t.y = s(i.top, e.height(), 338),
        t.x = s(i.left, e.width(), 615),
        {
          left: t.x,
          top: t.y
        }
      },
      calculateStarPosition: function() {
        var e = $(".starpool-core").offset();
        return {
          left: e.left - 1009,
          top: e.top - 534
        }
      },
      changeFlashWrap: function() {
        var e = $("#fullScreenEffect");
        1 < e.width() && e.css(this.calculatePosition())
      },
      getEffectsSetting: function() {
        this.getEffectsModel.getData()
      },
      packUrlByEffectInfo: function(e) {
        var t = this.effectsSetting,
        i = e.op_info.effect_info.pc_web.effect_id,
        s = {};
        return null !== t && (s = t[i] || s),
        s.url && s.url.replace(/(^https?:)|(\?.+)/g, "") || ""
      },
      packUrlByEffect: function(e, t, i) {
        for (var s = e.op_info.effect.toString().split(",").sort(function(e, t) {
          return 0 < e - t ? -1 : 1
        }), a = "", o = 0, n = s.length; o < n; o++) if (parseInt(t.giftCount, 10) >= parseInt(s[o], 10)) {
          a = i + "." + s[o] + ".swf";
          break
        }
        return a
      }
    })
  },
  oEHh: function(e, t, i) {
    var s;
    void 0 === (s = function() {
      return Backbone.Model.extend({
        defaults: {
          title: "提示",
          clsName: "",
          width: "",
          height: "auto",
          attrs: "",
          btn: [],
          withShadow: !0,
          initShow: !0
        },
        initialize: function() {
          this.bind("add",
          function(e, t) {}),
          this.bind("change",
          function(e, t) {})
        }
      })
    }.call(t, i, t, e)) || (e.exports = s)
  },
  oX3G: function(e, t) {
    e.exports = Backbone.Model.extend({
      urlRoot: "/api/star/getStarPoolNum",
      initialize: function() {},
      getData: function() {
        this.save(null, {
          type: "post",
          dataType: "json",
          data: {
            anchor_id: this.get("anchorId")
          },
          success: function(e, t) {
            e.trigger("success", e, t)
          },
          error: function(e, t) {
            e.trigger("error", e, t)
          }
        })
      }
    })
  },
  p2Sg: function(e, t, i) {
    var s = i("sk80"),
    a = i("p9Dq"),
    o = i("UDAL");
    e.exports = Backbone.View.extend({
      initialize: function() {
        var e = this;
        this.model = new o,
        this.model.set({
          limitNum: 500
        }),
        this.render(),
        this.setElement(this.$el.find(".starpool-box")),
        this.model.on("change:limitNum",
        function(e, t) {}),
        this.model.on("change:currentNum",
        function(t, i) {
          e.changeProgress(i, t.get("limitNum"))
        }),
        s.event.on("socket.STAR_EFFECT",
        function(t) {
          e.trigger("effect")
        })
      },
      events: {
        hover: "barInfo"
      },
      render: function() {
        this.$el.append(a)
      },
      changeProgress: function(e, t) {
        var i = e / t * 100;
        i = i.toFixed(1),
        this.$el.find(".num-progress").text(i + "%"),
        this.$el.find(".cur").css("height", i + "%"),
        this.appendStarDom(i)
      },
      appendStarDom: function(e) {
        var t = Math.floor(e / 11),
        i = [ - 8, 5],
        s = this.$el.find(".sp-meteor").length,
        a = t - s,
        o = [];
        if (0 < a) {
          for (var n = 1; n < a; n++) o.push('<div class="sp-meteor starAnimate" style="' + ["right", "left"][(s + n) % 2] + ":" + i[0] + "px;bottom:" + (20 * (s + o.length) + i[1]) + 'px"></div>');
          this.$el.find(".cur").append(o.join(""))
        } else this.$el.find(".sp-meteor").slice(a - 1).remove()
      },
      barInfo: function(e) {
        var t = $(e.currentTarget),
        i = this.model.toJSON();
        i.currentNum && $('[data-js-dom="barTips"]', t).html(_.template('当前星光<%=currentNum%>，<%=limitNum%>星光引爆流星雨<div class="st-arr"></div>', i))["mouseenter" === e.type ? "show": "hide"]()
      }
    })
  },
  p9Dq: function(e, t) {
    e.exports = '<div class="starpool-box" data-js-dom="starBar"><div class="starpool-col"><div class="cur" style="height:0%;"></div></div><span class="num-progress">0%</span><div class="starpool-tip" data-js-dom="barTips" style="display: none;">当前星光,星光引爆流星雨<div class="st-arr"></div></div></div>'
  },
  pAwh: function(e, t, i) {
    var s = i("sk80"),
    a = s.roomConfig,
    o = i("G8Yg"),
    n = i("8qOl");
    function l() {
      $(window).unbind("beforeunload")
    }
    var r = _.template(o.controlBehavior),
    c = {
      100001 : "直播开始了～",
      100002 : a.get("endingMsg"),
      100003 : "拉入麦序",
      100004 : "移出麦序",
      100005 : "上麦了",
      100006 : "下麦了",
      100007 : "设为麦序优先",
      101001 : "禁言",
      101002 : "解除禁言",
      101003 : "禁止喊话",
      101004 : "恢复喊话",
      101005 : "提升为管理员",
      101006 : "解除管理员",
      101007 : "提升为临时管理员",
      101008 : "解除临时管理员",
      101009 : "踢出房间"
    };
    a.on("change:endingMsg",
    function(e, t) {
      c[100002] = t
    }),
    s.event.on(["socket.LIVE_START", "socket.LIVE_STOP", "socket.MIC_SEQUENCE_PULL_IN", "socket.MIC_SEQUENCE_PULL_OUT", "socket.MIC_PULL_IN", "socket.MIC_PULL_OUT", "socket.MIC_SEQUENCE_LIFT", "socket.SPEAK_FORBID", "socket.SPEAK_CANCEL_FORBID", "socket.SHOUT_FORBID", "socket.SHOUT_CANCEL_FORBID", "socket.ROOM_MANAGE_SET", "socket.ROOM_MANAGE_CANCEL_SET", "socket.ROOM_MANAGE_SET_TEMPORARY", "socket.ROOM_MANAGE_CANCEL_SET_TEMPORARY", "socket.ROOM_KICK_OUT"],
    function(e) {
      var t = e.data.op_userInfo,
      i = e.data.to_userInfo,
      o = e.data.msgType,
      d = r({
        fromUserId: t.user_id,
        fromNickName: t.nick_name,
        toUserId: i.user_id,
        toNickName: i.nick_name,
        behavior: c[o],
        noPassive: !t.user_id || t.user_id == i.user_id,
        isLive: -1 < _.indexOf([100001, 100002], o)
      });
      s.event.trigger("roomMessageChat.append", d),
      a.get("loginUserId") === i.user_id && ( - 1 < _.indexOf([100001, 100005], o) ? $(window).bind("beforeunload",
      function(e) {
        if (!window.ActiveXObject) return "直播进行中，是否离开当前房间?";
        e.returnValue = "直播进行中，是否离开当前房间？"
      }) : 100006 === o && l()),
      100002 === o && l(),
      101009 == o && ~~a.get("loginUserId") == ~~i.user_id && (l(), n())
    });
    var d = _.template(o.connectMic),
    u = {
      merged: !0,
      stop: !1
    };
    s.event.on("socket.CONNECT_MIC_STREAM_STATUS",
    function(e) {
      var t = e.data.op_info.sub_type;
      if (~_.indexOf(["merged", "stop"], t)) {
        var i = u[t],
        a = d(_.extend({
          start: i
        },
        e.data.op_info));
        s.event.trigger("roomMessageChat.append", a)
      }
    })
  },
  pDVM: function(e, t, i) {
    var s;
    void 0 === (s = function() {
      return {
        numToMillion: function(e) {
          var t = parseInt(e);
          return 1e4 <= t && t < 1e8 ? t = Math.floor(10 * t / 1e4) / 10 + "万": 1e8 <= t && (t = Math.floor(10 * t / 1e8) / 10 + "亿"),
          t
        }
      }
    }.call(t, i, t, e)) || (e.exports = s)
  },
  pFBy: function(e, t, i) {
    "use strict";
    e.exports = Backbone.Model.extend({
      urlRoot: "/api/fans/buy",
      getData: function(e) {
        var t = this;
        this.save({},
        {
          data: e || {},
          success: function(e, i) {
            200 === i.code ? t.trigger("ok") : t.trigger("fail", i.msg)
          }
        })
      }
    })
  },
  phvK: function(e, t, i) {
    var s = i("sk80"),
    a = s.ui.userIcon,
    o = s.roomConfig,
    n = i("zwY2"),
    l = i("PsUJ"),
    r = i("MpAF");
    i("PXWy"),
    i("y8mZ"),
    i("8xq9"),
    i("YnnF"),
    i("3mSo"),
    i("9nyu"),
    i("fnvi"),
    i("08I3"),
    i("Ozzj"),
    i("preH");
    var c = null;
    e.exports = Backbone.View.extend({
      el: "body",
      model: new n,
      template: _.template(r),
      initialize: function() {
        var e = this;
        this.$el.append('<div id="_userPaper" class="tip-block chat-user-tip" style="left:-9999px;top:-9999px;"></div>'),
        this.$panel = $("#_userPaper"),
        this.model.set("width", this.$panel.outerWidth()),
        this.model.on("success",
        function(t, i) {
          if (200 == i.code) {
            var s = this.get("$tar"),
            a = e.fmtData(s.closest(".ol-mic").length ? s.closest(".u-item").index() - 1 : -1, i.data);
            if (this.get("$tar")) {
              var o = e.getPanelPositionLeft(a);
              e.$panel.empty().append(e.template(a)).css({
                top: this.get("$tar").offset().top + this.get("$tar").outerHeight() + 3,
                left: o
              });
              var n = e.$panel.find("._list");
              0 === n.find("li").length && n.hide(),
              e.$panel.show()
            }
          }
        })
      },
      events: {
        'hover [node-type="userHoverTip"]': "show",
        "hover #_userPaper": "triggerShow",
        'click [click-type="menuGift"]': "doSMT"
      },
      triggerShow: function(e) {
        var t = $(e.currentTarget);
        "mouseenter" === e.type ? (s.event.trigger("roomUserCtrlPanel.enter"), clearTimeout(c)) : (c = setTimeout(function() {
          t.hide()
        },
        300), s.event.trigger("roomUserCtrlPanel.immediatelyleave"))
      },
      fmtData: function(e, t) {
        var i = t.to_userInfo,
        s = t.op_userInfo,
        n = t.op_rights,
        r = {};
        if ($.extend(!0, i, l.getRole(t.to_userInfo.role_type), l.getAbility(t.to_userInfo.ban_level)), i) {
          n.is_anchor = s.is_anchor;
          var c = {
            medal_info: i.medal
          };
          r = $.extend(!1, i, {
            is_self: !!$.cookie("P00001") && i.user_id == o.get("loginUserId"),
            is_room_owner: o.get("roomOwner") == i.user_id,
            roomPaperIcon: a.commonHeaderIcon(i),
            userMedalList: a.oneIcon(c),
            micIndex: e,
            userPower: n
          })
        }
        return r
      },
      setTemplate: function(e) {
        var t = {
          is_banSpeak: 0,
          is_banText: 0,
          is_inmic: 0
        };
        $.cookie("P00001") ? (this.model.once("success",
        function(t, i) {
          200 == i.code && e(i.data)
        }), this.model.once("error",
        function(i, s) {
          e(t)
        })) : e(t)
      },
      show: function(e) {
        clearTimeout(c);
        var t = this,
        i = $(e.currentTarget),
        s = i.closest("[data-user_id]").data("user_id").toString();
        c = "mouseenter" === e.type ? setTimeout(function() {
          t.model.set("$tar", i),
          t.model.subSave({
            room_id: o.get("roomId"),
            user_id: s
          })
        },
        this.$panel.is(":visible") ? 0 : 200) : (t.model.unset("$tar"), t.model.xhrObj && t.model.xhrObj.abort(), setTimeout(function() {
          t.$panel.hide()
        },
        300))
      },
      doSMT: function(e) {
        var t = $(e.currentTarget).closest("ul").data();
        o.set("sendGiftAnchorInfo", {
          userId: t.user_id,
          nickName: t.nick_name
        })
      },
      getPanelPositionLeft: function(e) {
        var t = this.model.get("$tar"),
        i = Math.max(0, ($(window).width() - $("body").width()) / 2),
        s = t.offset().left - i + t.width() / 2 - 38,
        a = s - (document.documentElement.scrollLeft || document.body.scrollLeft) + this.model.get("width") - $("body").width();
        return e.arrLeftDif = 0 < a ? (s -= a, a) : 0,
        s
      }
    })
  },
  pnyl: function(e, t) {
    e.exports = {
      msg: '<li class="msg"><div class="row"><a class="name"  href="javascript:void(0)" node-type="userHoverTip" data-user_id="<%=userId%>"><%=userName%></a><span class="nr">为</span><a class="name"  href="javascript:void(0)" node-type="userHoverTip" data-user_id="<%=anchorId%>"><%=anchorName%></a><span class="sys">升级送出一片心意</span></div></li>',
      anchorMsg: '<li class="msg"><div class="row"><a class="name"  href="javascript:void(0)" node-type="userHoverTip" data-user_id="<%=userId%>"><%=userName%></a><span class="sys">诚挚感谢亲们的贡献</span></div></li>',
      charmLavel: '<div class="xm-lvup-eff-block ml"><a href="javascript:void(0);" class="xiu-ico xm-lvup-eff-close"></a><img class="eff-img eff-img-ml" src="//www.iqiyipic.com/ppsshow/<%= isSupportWebp ? \'fix/img/h5_player/ml-lv-effect.webp\' : \'fix/2.0/img/h5_player/ml-lv-effect.png\' %>" alt=""><div class="lv-txt">魅力等级：<em><%= op_info.current_level %></em></div><div class="lv-gongxi">恭喜你！你的魅力等级升级为<em><%= op_info.current_level %></em>级</div></div>',
      qmLevel: '<div class="xm-lvup-eff-block qm"><a href="javascript:void(0);" class="xiu-ico xm-lvup-eff-close"></a><img class="lvup-avator lvup-avator-zb" src="<%- (op_info.anchor_icon || \'//www.iqiyipic.com/ppsshow/fix/2.0/img/placeholder.png\').replace(/http(s?):/, \'\') %>" alt=""><img class="lvup-avator lvup-avator-ur" src="<%- (op_info.user_icon || \'//www.iqiyipic.com/ppsshow/fix/2.0/img/placeholder.png\').replace(/http(s?):/, \'\') %>" alt=""><img class="eff-img eff-img-qm" src="//www.iqiyipic.com/ppsshow/<%= isSupportWebp ? \'fix/img/h5_player/qm-lv-effect.webp\' : \'fix/2.0/img/h5_player/qm-lv-effect.png\' %>" alt=""><div class="lv-txt">亲密等级：<em><%= op_info.current_level %></em></div><div class="lv-gongxi">你俩更加亲密了呢！</div></div>',
      userLevel: '<div class="xm-lvup-eff-block yh"><a href="javascript:void(0);" class="xiu-ico xm-lvup-eff-close"></a><img class="eff-img eff-img-yh" src="//www.iqiyipic.com/ppsshow/<%= isSupportWebp ? \'fix/img/h5_player/user-lv-effect.webp\' : \'fix/2.0/img/h5_player/user-lv-effect.png\' %>" alt=""><div class="lv-txt">用户等级：<em><%= op_info.current_level %></em></div><div class="lv-gongxi">恭喜你！你的用户等级升级为<em><%= op_info.current_level %></em>级</div></div>',
      anchorLevel: '<div class="xm-lvup-eff-block zb<%= op_info.level_type %>"><a href="javascript:void(0);" class="xiu-ico xm-lvup-eff-close"></a><img class="eff-img eff-img-zb<%= op_info.level_type %>" src="<%= \'//www.iqiyipic.com/ppsshow/\' + (isSupportWebp ? \'fix/img/h5_player/zb-lv-effect-\' + op_info.level_type + \'.webp\' : \'fix/2.0/img/h5_player/zb-lv-effect-\' + op_info.level_type + \'.png\')%>" alt=""><div class="lv-txt">主播等级：<em><%= op_info.current_level %></em></div><% if(op_info.level_type == 0) { %><div class="lv-gongxi lv-gongxi-more">热烈祝贺！</div><div class="lv-gongxi"><span class="a-name"><%= op_info.anchor_name %></span>升级到<em><%= op_info.current_level %></em>级</div><a href="javascript:void(0);" class="xm-lvup-eff-gx">心意祝福</a><% } else { %><div class="lv-gongxi">恭喜你！你升级为<em><%= op_info.current_level %></em>级主播</div><a href="javascript:void(0);" class="xm-lvup-eff-gx">诚意感谢</a><% } %></div>'
    }
  },
  pr2G: function(e, t, i) {
    "use strict";
    e.exports = Backbone.Model.extend({
      urlRoot: "/action/setAdmin",
      defaults: {
        room_id: "",
        to_uid: "",
        op_type: 2
      },
      initialize: function() {},
      getData: function() {
        var e = this;
        e.save({},
        {
          data: {
            room_id: e.get("roomId"),
            to_uid: e.get("toUid"),
            op_type: e.get("opType")
          },
          success: function(t, i) {
            200 === i.code ? e.trigger("ok") : e.trigger("fail", i.msg)
          },
          error: function(t, i) {
            e.trigger("fail", i.msg)
          }
        })
      }
    })
  },
  preH: function(e, t, i) {
    var s = i("nCB2"),
    a = i("RLOA");
    e.exports = new s({
      model: new a,
      nodeType: "upMic",
      toastMsg: function(e, t) {
        return {
          200 : "已将" + e + "设置为麦序优先"
        }
      }
    })
  },
  qLn7: function(e, t) {
    e.exports = '<div class="block-gift" data-pb-block="17073108"><div id="giftTop" class="block-gift-top"></div><div id="giftBottom" class="block-gift-bottom"></div></div>'
  },
  qMzH: function(e, t, i) {
    var s = i("sk80"),
    a = {},
    o = [{
      type: 1,
      msgTypes: {}
    },
    {
      type: 2,
      msgTypes: {
        ANCHOR_WARNING: 107001,
        RECOMMEND_IMAGE_CHECK: 108001,
        CHAT_PUBLIC: 300001,
        CHAT_PRIVATE: 300002,
        MISSION_REWARD: 500001,
        FETCH_STAR: 500002,
        USER_LEVEL_UP: 500003,
        ANCHOR_VIOLATION: 500004,
        LIVE_FIRBID_REPEAT_START: 500005,
        LUCKY_GIFT_DOUBLE_REWARD: 500006,
        ANCHOR_PK_ACCEPT: 500007,
        GIFT_VIRTUAL: 500008,
        ANCHOR_PROMOTE: 500009,
        ANCHOR_LEVEL_UP: 600001,
        HOT_WORK_REWARD: 700003,
        HOT_WORK_LOTTERY: 700007,
        HOT_WORK_USER_GET_THX: 700015,
        HOT_WORK_ANCHOR_GET_THX: 700016,
        BOSS_FRAGMENT: 700017,
        BOSS_TICKET: 700025,
        CONNECT_MIC_ANCHOR_RECEIVE: 900002,
        CONNECT_MIC_ANCHOR_REQUEST: 900004,
        TOURBUS_TASK_FINISH: 700092
      }
    },
    {
      type: 3,
      msgTypes: {
        CONNECT_MIC_STREAM_STATUS: 900003,
        LIVE_START: 100001,
        LIVE_STOP: 100002,
        MIC_SEQUENCE_PULL_IN: 100003,
        MIC_SEQUENCE_PULL_OUT: 100004,
        MIC_PULL_IN: 100005,
        MIC_PULL_OUT: 100006,
        MIC_SEQUENCE_LIFT: 100007,
        SPEAK_FORBID: 101001,
        SPEAK_CANCEL_FORBID: 101002,
        SHOUT_FORBID: 101003,
        SHOUT_CANCEL_FORBID: 101004,
        ROOM_MANAGE_SET: 101005,
        ROOM_MANAGE_CANCEL_SET: 101006,
        ROOM_MANAGE_SET_TEMPORARY: 101007,
        ROOM_MANAGE_CANCEL_SET_TEMPORARY: 101008,
        ROOM_KICK_OUT: 101009,
        ROOM_INFO_SET: 101010,
        VOTE_BEGIN_OR_END: 101011,
        SEND_GIFT: 102001,
        SEND_STAR: 102002,
        FOLLOW_ANCHOR: 102003,
        BLESSING_SEND: 102004,
        BLESSING_THANK: 102005,
        CARD_REFRESH_NUM: 102006,
        LUCKY_GIFT: 102007,
        ANCHOR_PK_CREATE: 102009,
        PERSONAL_GIFT_SHOW: 102011,
        ROOKIE_GIFT: 102012,
        STAR_EFFECT: 102013,
        SHOUT: 103001,
        BUY_GOODS: 104001,
        NOBILITY_OR_GUARD_APPLY: 105001,
        ON_OFF_LINE: 200001,
        NOBILITY_ON_OFF_LINE: 200002,
        ROOM_ON_LINE_NUMBER: 400001,
        TRUMPET_NOBILITY: 600002,
        TRUMPET_GUARD: 600003,
        TRUMPET_GIFT: 600004,
        OFFICIAL_ANNOUNCEMENT: 600005,
        ANCHOR_INCREASE_EXPERIENCE_POINT: 600006,
        LUCKY_LARGE_GIFT: 600007,
        FLY_MESSAGE: 600008,
        HONOUR_NOTICE: 600010,
        GIFT_COMBO: 600018,
        GIFT_COMBO_BIG_TRUMPET: 600019,
        VOTE_UPDATE_INFO: 600020,
        BIG_TRUMPET: 600030,
        STAR_TREASUREBOX: 600031,
        TOP_PROP: 600040,
        HOT_WORK_REFRESH: 700001,
        PK_MATICHING_BEGIN_OR_END: 700004,
        PK_MATICHING_REFRESH: 700005,
        ANCHOR_PK_REFRESH: 700006,
        HOT_WORK_STEP: 700013,
        HOT_WORK_BIG_TRUMPET: 700014,
        BOSS_ROOM_ENTER: 700020,
        BOSS_DAMAGE: 700021,
        BOSS_TREASURE: 700022,
        BOSS_WORLD_ENTER: 700023,
        GANGWAR_START: 700026,
        GANGWAR_CARD_RESULT: 700027,
        GANGWAR_CARD: 700028,
        GANGWAR_ATTACK: 700029,
        GANGWAR_ATTACK_MAX: 700030,
        NEW_ANCHOR_MATCH: 700031,
        GANGWAR_WILL_OVER: 700032,
        BOSS_WELFARE_WILL_COME: 700041,
        BOSS_WELFARE_COME: 700040,
        WAWA_COUNTDOWN: 700042,
        WAWA_COME: 700043,
        WAWA_DAMAGE: 700044,
        BOSS_WORLD_OPEN: 700045,
        TRUELOVE_PRIVILEGE: 700050,
        WORLDCUP_BALL_TRAILER: 700067,
        WORLDCUP_BALL_PROMOTION: 700068,
        WORLDCUP_BALL_SCORE: 700069,
        WORLDCUP_BALL_CONTROL: 700070,
        HIGHLADDER_WILL_COME: 700080,
        HIGHLADDER_MATCH_SUCC: 700081,
        HIGHLADDER_PK_PROGRESS: 700082,
        HIGHLADDER_PK_FINISH: 700083,
        HIGHLADDER_NO_ONE_MATCH: 700084,
        HIGHLADDER_CANCEL_MATCH: 700085,
        RED_ENVELOP_TRUMPET: 800001,
        RED_ENVELOP_RESULT: 800002,
        RED_ENVELOP_VIEW: 800003,
        RED_ENVELOP_WIN: 800004,
        RED_ENVELOP_LOSE: 800005,
        RED_ENVELOP_OWNER: 800006,
        RED_ENVELOP_WINNER_LIST: 800007,
        CONNECT_MIC_REQUEST: 900001,
        MONSTER_YEAR_ENTER_OUT: 700046,
        MONSTER_YEAR_DAMAGE: 700047,
        FOOTBALL_GAME_PRIZE: 700090,
        HOT_SPECIFIC_RANK: 700091,
        PICK_CARD_MSG: 1008,
        YEAR2018_PKBET_REWARD: 700094
      }
    },
    {
      type: 4,
      msgTypes: {}
    }],
    n = [{
      type: 2,
      msgTypes: {
        CONNECT_MIC_ANCHOR_RECEIVE: 900002,
        CONNECT_MIC_ANCHOR_REQUEST: 900004,
        GIFT_VIRTUAL: 500008
      }
    },
    {
      type: 3,
      msgTypes: {
        LIVE_START: 100001,
        LIVE_STOP: 100002,
        MIC_SEQUENCE_PULL_IN: 100003,
        MIC_SEQUENCE_PULL_OUT: 100004,
        MIC_PULL_IN: 100005,
        MIC_PULL_OUT: 100006,
        MIC_SEQUENCE_LIFT: 100007,
        CONNECT_MIC_STREAM_STATUS: 900003,
        CONNECT_MIC_REQUEST: 900001
      }
    }],
    l = function(e) {
      var t = {};
      _.each(e,
      function(e) {
        var i = e.type;
        t[i] = {},
        _.each(e.msgTypes,
        function(e, a) {
          t[i][e] = function(e, t) {
            s.event.trigger("socket." + a, t)
          }
        })
      }),
      a.eventHandler = t
    };
    s.event.on("openMiniPlayer",
    function() {
      l(n)
    }),
    s.event.on("closeMiniPlayer",
    function() {
      l(o)
    }),
    l(o),
    e.exports = a
  },
  qbbx: function(e, t) {
    e.exports = '<div class="tip-block nav-login-tip _userPanel" style="top: 174px;left: 103.5px;display:none;"><div class="arr arr-left" style="top:32px;"><div class="arr-in"></div></div><dl class="nlt-info"><dt class="nlt-object"><img width="66" height="66" src="<%=basic.user_icon.replace(\'http:\', \'\')%>"></dt><dd class="nlt-body"><h4><%if(!_.isArray(badge)&&badge.badge_level){%><i title="<%={1:\'爵士\',2:\'男爵\',3:\'子爵\',4:\'伯爵\',5:\'侯爵\',6:\'公爵\',7:\'国王\'}[badge.badge_level]%>" class="ico-lv gz-lv lv<%=badge.badge_level%>"></i><%}%><%-basic.nick_name%></h4><ul class="nlt-proc"><%if(is_anchor == 1 && anchor_level){%><li class="zb"><i title="主播等级 <%= anchor_level.anchor_level %>级" class="ico-lv zb-lv lv<%=anchor_level.anchor_level%>"></i><div class="haixu">还需<%=anchor_level.next_anchor_lv_exp - anchor_level.anchor_experience%></div><div class="pro-track"><div class="pro-cur" style="width: <%=((anchor_level.anchor_experience - anchor_level.current_anchor_lv_exp)/Math.max(1,(anchor_level.next_anchor_lv_exp - anchor_level.current_anchor_lv_exp))*100)|0%>%"></div></div></li><%}%><li class="ml"><i title="魅力等级 <%=level.charm_level%>级" class="ico-lv ml-lv-small ml-lv-<%=level.charm_level%>"></i><div class="haixu">还需<%=level.next_charm_lv_exp - level.charm_experience%></div><div class="pro-track"><div class="pro-cur" style="width: <%=((level.charm_experience - level.current_charm_lv_exp)/Math.max(1,(level.next_charm_lv_exp - level.current_charm_lv_exp))*100)|0%>%"></div></div></li></ul></dd></dl><div class="nlt-act" data-pb-block="17073100"><a href="/recharge/recharge" class="nlt-recharge" target="_blank" data-pb-rseat="2">充值</a><a href="javascript:;" class="nlt-signin _userInfoPanelCheckIn" data-pb-rseat="3">签到</a><div class="row">奇豆<i class="nlt-ico-bean"></i><%=account.bean_balance%></div><div class="row r-b">钻石<i class="nlt-ico-diamond"></i><%=account.diamond_balance%></div><div class="row r-t"><a href="/home" class="nlt-usercenter" target="_blank" data-pb-rseat="1"><i class="xiu-ico xiu-ico-user"></i>个人中心</a></div><div class="row"><a href="/home" class="nlt-medal"><i class="xiu-ico xiu-ico-medal">&#xe65d;</i>勋章墙<%=medal_count>0?("（"+medal_count+"）"):""%></a></div><div class="row"><a href="javascript:;" class="nlt-logout _logout"><i class="xiu-ico xiu-ico-logout"></i>退出登录</a></div></div></div>'
  },
  qkiY: function(e, t) {
    e.exports = Backbone.View.extend({
      initialize: function(e) {
        _.extend(this.props = {
          divideTop: 0,
          topInterval: [30, void 0],
          bottomInterval: [60, void 0],
          topView: null,
          bottomView: null,
          dragHeight: 0
        },
        e),
        this.isDraging = !1,
        this.divideTop = e.divideTop,
        this.render(),
        this.listenEvents()
      },
      render: function() {
        var e = this.props;
        this.model = new Backbone.Model,
        this.$drag = $("._dragBar", this.$el),
        this.$draging = $("._dragingBar", this.$el),
        this.$top = $("._top", this.$el),
        this.$bottom = $("._bottom", this.$el),
        this.model.set({
          divideTop: this.divideTop
        }),
        e.topView.setElement(this.$top).render(),
        e.bottomView.setElement(this.$bottom).render(),
        this.$drag.css("top", e.divideTop + "px"),
        this.$draging.css("top", e.divideTop + "px")
      },
      listenEvents: function() {
        var e = this,
        t = this.props,
        i = this.model.get("divideTop");
        this.$drag.on("mousedown",
        function(t) {
          e.isDraging = !0,
          e.startY = t.pageY
        }),
        $("body").on("mousemove",
        function(s) {
          e.isDraging && ((i = s.pageY - e.startY + e.model.get("divideTop")) <= t.topInterval[0] && (i = t.topInterval[0]), i >= t.topInterval[1] && (i = t.topInterval[1]), e.$draging.css({
            top: i + "px",
            display: "block"
          }), s.preventDefault ? s.preventDefault() : s.returnValue = !1)
        }),
        $("body").on("mouseup",
        function() {
          e.isDraging && (e.$draging.css("display", "none"), e.model.set("divideTop", i), e.trigger("afterDrag")),
          e.isDraging = !1
        }),
        this.model.on("change:divideTop",
        function(t, i) {
          e.$draging.css("display", "none"),
          e.updateHeights(i)
        }),
        $(window).on("resize",
        function() {
          e.updateHeights(e.model.get("divideTop"))
        })
      },
      updateHeights: function(e) {
        var t = this.props,
        i = parseInt(this.$el.css("height"));
        this.$top.css("height", e + "px"),
        this.$drag.css({
          top: e + "px",
          display: "block"
        }),
        0 < i && (this.$bottom.css("top", t.dragHeight + e + "px"), t.topInterval[1] = i - t.dragHeight - t.bottomInterval[0], this.trigger("updateHeights"))
      }
    })
  },
  "qx+v": function(e, t, i) {
    "use strict";
    e.exports = Backbone.Model.extend({
      urlRoot: "/usermedal/getMedalBar",
      defaults: {
        user_id: "",
        page: 1,
        page_size: 5
      },
      initialize: function() {},
      getData: function() {
        var e = this;
        e.save({},
        {
          data: {
            user_id: e.get("user_id"),
            page: e.get("page"),
            page_size: e.get("page_size")
          },
          success: function(t, i) {
            200 === i.code ? e.trigger("ok", i.data) : e.trigger("fail", i.msg)
          },
          error: function(t, i) {
            e.trigger("fail", i.msg)
          }
        })
      }
    })
  },
  r0hV: function(e, t, i) {
    i("APMG");
    var s = i("sk80"),
    a = (s.tools.qos, s.tools.base),
    o = i("Ukq4"),
    n = i("HDZc"),
    l = i("jEh3");
    i("T0ih"),
    s.roomConfig = o,
    s.createSwf = n,
    new l({
      userId: s.roomConfig.get("onlineAnchorInfo").user_id,
      roomId: s.roomConfig.get("roomId")
    }),
    i("FPF6");
    var r = i("JDas");
    s.liveTools = r;
    var c = i("GwVu");
    s.roomUserInfo = c,
    a.on("loginAct",
    function(e) {
      s.event.trigger("miclinkStatus", 0 < o.get("liveId"))
    }),
    a.on("iShowLoginSuccess",
    function(e) {
      o.isAnchor = e.data.is_anchor,
      o.set("loginUserId", e.data.basic.user_id.toString()).set("isAnchor", e.data.is_anchor),
      c.trigger("save", {
        data: {
          room_id: o.get("roomId")
        }
      })
    }),
    a.on("iShowLogout",
    function() {
      o.isAnchor = !1,
      o.set("loginUserId", "").set("isAnchor", 0),
      s.event.trigger("userAndAnchorRelation.change", null),
      s.event.trigger("miclinkStatus", 0 < o.get("liveId"))
    }),
    c.on("success",
    function(e, t) {
      200 === t.code && s.event.trigger("userAndAnchorRelation.change", t)
    }),
    $("body").bind("click.tipHide",
    function(e) {
      if (0 == $(e.target).data("autoHide")) return ! 1;
      $(e.target).closest('[data-js-dom="clickHide"]').length || ($('[data-js-dom="clickHide"][data-click-hide="1"]:visible').hide(), s.event.trigger("clickHide", e))
    }),
    i("faO6"),
    i("wDN7"),
    i("Q1jJ"),
    i("TMET"),
    new(i("Y5lf"))({
      el: "body"
    }),
    new(i("MYuE"))({
      roomId: o.get("roomId")
    });
    var d = i("qMzH");
    s.event.on("chatTools.flashNotice",
    function(e) {
      var t = e.type,
      i = e.data ? e.data.msgType: void 0,
      s = d.eventHandler[t][i];
      s && s.call(null, i, e)
    }),
    window.performance && s.core.loader("//static.iqiyi.com/js/ppsshow/modules/perf.js?v=" + a.jsVersion,
    function() {}),
    new(i("O0FG"))({
      el: ".site-body"
    })
  },
  r89D: function(e, t, i) {
    var s = i("/VEJ"),
    a = i("gQqq"),
    o = i("Koub");
    e.exports = Backbone.View.extend({
      initialize: function() {
        this.$el.append(o.wrapper);
        var e = $(".chat-act", this.$el);
        new s({
          el: e
        }),
        new a({
          el: e
        })
      }
    })
  },
  "rF/M": function(e, t, i) {
    var s, a;
    s = [i("teNv")],
    void 0 === (a = function(e) {
      var t = i("sk80"),
      s = Backbone.View.extend({
        model: new e,
        initialize: function(e) {
          $(document).height(),
          e = e || {},
          this.model.set({
            opacity: e.shadowOpacity || .4,
            filter: "alpha(opacity=" + 100 * (e.shadowOpacity || .4) + ")"
          }),
          this.model.set({
            position: "fixed",
            display: "block"
          }),
          this.$el.attr("node-type", "dialogShadow"),
          _.bindAll(this, "show"),
          this.model.bind("change", this.show),
          this.show()
        },
        show: function() {
          this.$el.css(this.model.toJSON()),
          $("body").remove('div[node-type="dialogShadow"]').append(this.$el)
        }
      }),
      a = s.prototype.show;
      s.prototype.show = function() {
        a.call(this),
        t.env.isPcnClient && i("AQTH").showmodal(1, "#66000000")
      };
      var o = s.prototype.remove;
      return s.prototype.remove = function() {
        o.call(this),
        t.env.isPcnClient && i("AQTH").showmodal(0, "")
      },
      s
    }.apply(t, s)) || (e.exports = a)
  },
  rMRD: function(e, t, i) {
    "use strict";
    e.exports = Backbone.Model.extend({
      urlRoot: "https://notice.iqiyi.com/apis/msg/pps/update_status.action",
      initialize: function() {},
      subSave: function(e) {
        var t = {
          type: "get",
          dataType: "jsonp",
          jsonp: "callback",
          data: $.extend({
            status: 1,
            agent_type: 75
          },
          e.data || {}),
          cache: !1,
          success: function(e, t) {
            e.trigger("ok", t.data)
          },
          error: function(e, t) {
            e.trigger("fail", t.msg)
          }
        };
        this.save(null, t)
      }
    })
  },
  raQq: function(e, t) {
    e.exports = Backbone.Model.extend({
      urlRoot: "/api/userinfo/followList",
      defaults: {
        isFirstTime: !0
      },
      initialize: function() {},
      subSave: function(e) {
        var t = this;
        this.ajaxObj && this.ajaxObj.abort();
        var i = {
          type: "post",
          data: {},
          cache: !1,
          success: function(e, i) {
            t.trigger("success", i)
          },
          error: function(e, i) {
            t.trigger("error", i)
          }
        };
        this.ajaxObj = this.save(null, i)
      }
    })
  },
  rr8t: function(e, t) {
    e.exports = {
      wrapper: '<div class="gf-combo-block _giftMessageTip"></div>',
      item: '<div class="gfc-sec<%=replace?" gfcAni":""%>"><div class="gfc-bg"><%if(highlight){%><div class="gfc-sg"></div><%}%></div><div class="gfc-avator"><img src="<%=user_icon%>"><i class="ico-lv<%=level>0?(" gz-lv lv"+level):""%>"></i></div><div class="gfc-txt"><div class="gfc-user"><%-nick_name%></div><div class="gfc-s">送出<%=gift_name%> <span><%=gift_num%>个</span></div></div><dd class="gfc-g"><img src="<%=gift_pic%>"></dd></div><div class="gfc-num-group gfcNumCombo"><em class="gfc-ico-time">×</em><span class="gfc-gift-num"><%=group%></span></div>'
    }
  },
  rtKp: function(e, t, i) {
    var s = i("DWPw"),
    a = i("IREt"),
    o = i("KJmi"),
    n = i("spgc"),
    l = QX.ui.Dialog,
    r = QX.tools.Qformat,
    c = QX.tools.rmProtocol,
    d = QX.ui.Toast,
    u = ((window._room_config || {}).switch_config || {}).refresh_bags || 0;
    e.exports = Backbone.View.extend({
      initialize: function() {
        var e = this,
        t = _.debounce(function() {
          QX.event.trigger("getUserAccount.refreshAccount")
        },
        300),
        i = _.debounce(function() {
          e.trigger("getPackList")
        },
        300);
        this.model = new o,
        this.render(),
        this.model.on("change:rowType",
        function(t, i) {
          e.$el.find('[data-js-dom="gift-arr"]').removeClass("io-arr-up io-arr-down").addClass(i ? "io-arr-up": "io-arr-down").html(i ? "&#xe62b;": "&#xe626;"),
          i ? e.$el.find('[data-js-dom="giftNumList"]').removeAttr("style") : e.$el.find('[data-js-dom="giftNumList"]').css("height", 41 * e.$el.find('[data-js-dom="giftNumList"] li').length)
        }),
        this.model.on("change:giftInfo",
        function(t, i) {
          i.tabId = this.get("tabId"),
          e.$el.find('[data-js-dom="sendInfoBlock"] img').attr({
            src: c(i.pic_png),
            alt: i.name,
            title: i.name
          }),
          this.set("points", null),
          e.rendSendNumList(),
          5 == i.tabId ? this.set("num", 0) : !this.get("num") && this.set("num", 1),
          this.set("rowType", 1)
        }),
        this.model.on("change:sendGiftAnchorInfo",
        function(t, i) {
          e.$el.find('[data-js-dom="sendUser"] span').html(_.escape(i.nickName))
        }),
        this.model.on("change:num",
        function(t, i) {
          e.$el.find('input[type="text"]').attr("value", i)
        }),
        this.model.on("success",
        function(s) {
          if (9999 === this.get("giftInfo").tabId) if (u) i();
          else {
            var a = s.data;
            a && a.product_id && e.updateGiftNumWithoutNetwork(a.product_id, a.num)
          } else t();
          5 === this.get("tabId") && e.trigger("closeCanvas")
        }),
        this.model.on("error",
        function(t, i) {
          var s = t.code;
          switch (t.code) {
          case 202:
            "/buy/buySendGift" === this.url() && (s = 902)
          }
          e.showError(s, t)
        }),
        QX.event.on("clickHide",
        function() {
          e.model.set("rowType", 1)
        }),
        QX.event.on("sendGiftAction.updateGiftNum",
        function(t) {
          e.updateGiftNumWithoutNetwork(t.product_id, t.num)
        })
      },
      render: function() {
        this.$el.prepend(s)
      },
      events: {
        'click [data-js-dom="gift-arr"]': "toggleSendNumList",
        "click [data-gift-num]": "clickSetGiftNum",
        'click [data-js-dom="sendGift"]': "sendGift",
        'input input[type="text"]': "maxInput",
        'change input[type="text"]': "maxInput"
      },
      toggleSendNumList: function(e) {
        return e.preventDefault(),
        this.model.set("rowType", 0 | !this.model.get("rowType")),
        !1
      },
      rendSendNumList: function() {
        var e = this.$el.find('[data-js-dom="giftNumList"]');
        e.empty();
        var t = JSON.parse(JSON.stringify(this.model.get("giftInfo").effect_nums || [])),
        i = this.model.get("tabId") || 0,
        s = t.length,
        o = [].slice.apply(JSON.parse(JSON.stringify(this.model.get("defineList"))), -1 < _.indexOf([1, 2], i) ? [0, 1] : [0]);
        _.forEach(o,
        function(e) {
          _.forEach(t,
          function(i, a) {
            e.value >= i && (a == s - 1 || e.value < t[a + 1]) && (e.effect = a)
          })
        }),
        e.html(_.template(a, {
          list: o
        }))
      },
      clickSetGiftNum: function(e) {
        this.model.set("num", $(e.currentTarget).data("giftNum")),
        this.model.set("rowType", 1)
      },
      maxInput: function(e) {
        var t = $.trim($(e.currentTarget).val());
        4 <= t.length && (t = t.substring(0, 4)),
        t = "" !== t && parseInt(t, 10) || "",
        $(e.currentTarget).val(t),
        this.model.set("num", t)
      },
      sendGift: function(e) {
        var t = this.model.check();
        100 !== t.code ? 101 === t.code ? QX.event.trigger("loginDialog.show") : this.showToast(t.code, t) : this.model.subSave()
      },
      getGiftById: function(e) {
        return _.filter(this.model.get("giftList"),
        function(t) {
          return t.product_id == e
        })[0]
      },
      dialogError: function(e, t) {
        new l({
          title: "提示",
          content: _.template(n[902], {
            diamond: t.data.user_account.diamond_balance,
            bean: t.data.user_account.bean_balance,
            bean_need: r(t.data.bean_need, 0)
          }),
          btn: [{
            clsName: "btn-sye",
            type: "ok",
            text: "充值"
          }]
        }).on("ok",
        function() {
          QX.event.trigger("quickPayment.show", {
            bean: t.data.bean_need
          })
        })
      },
      showToast: function(e, t) {
        d({
          selector: this.$el,
          msg: _.template(n[0], {
            code: e,
            data: t
          })
        })
      },
      showError: function(e, t) {
        902 === e ? this.dialogError(e, t) : this.showToast(e, t)
      },
      updateGiftNumWithoutNetwork: function(e, t) {
        if (!u && 9999 === this.model.get("tabId")) {
          var i = $('[data-gift-id="' + e + '"]').find(".tag-num"),
          s = this.getGiftById(e),
          a = +s.total_num;
          if (t <= a) {
            var o = a - t;
            0 < o ? (i.text(9999 < o ? "9999+": o), s.total_num = o) : this.trigger("getPackList")
          }
        }
      }
    })
  },
  rvpG: function(e, t) {
    e.exports = {
      entry: '<a href="javascript:;" class="open-guard _absent _open" data-pb-rseat="2">开通守护</a>',
      list: '<div class="scroll-panel scroll-panel-guard"><div class="scroll-content"><ul class="guard-wing-list"><%_.each(data, function(v, i){onlineNum+=v.is_online|0%><%if(v.absent){%><li class="_absent"><div class="gwl-avtor"><i class="xiu-ico xiu-ico-join"></i><div class="gwl-mask"></div></div><div class="gwl-name">虚位以待</div></li><%}else{%><li class="<%=["gwl-bronze","gwl-silver","gwl-gold"][~~v.guard_level-1]||""%>"><div class="gwl-avtor _avatar"><img src="<%=v.user_icon%>" alt=""><div class="gwl-cover"><%=v.remain_html%></div><div class="gwl-mask"></div><%if(!v.is_online){%><div class="gwl-cover _offline" style="display:block"></div><%}%></div><div class="gwl-name"><%-v.nick_name%></div></li><%}%><%})%></ul></div></div>',
      empty: '<div class="panel-guard-empty">房间里还没有守护<span class="_goBuy">，快去<a href="javascript:;" class="_absent">开通守护</a>吧~</span></div>'
    }
  },
  s1gp: function(e, t, i) {
    var s = i("AQTH"),
    a = i("4ab0");
    e.exports = Backbone.View.extend({
      template: _.template(a),
      initialize: function() {
        this.setElement("body"),
        this.render(),
        this.ifShowSideNavBar = !0
      },
      events: {
        "click .nav-switch": "switchSideBar"
      },
      switchSideBar: function(e) {
        var t = $(e.currentTarget);
        _.forEach(t.find(".xiu-ico"),
        function(e) {
          $(e).css("display", "block" == $(e).css("display") ? "none": "block")
        }),
        this.ifShowSideNavBar = !this.ifShowSideNavBar,
        s.showNavigateBar(this.ifShowSideNavBar)
      },
      render: function() {
        this.$el.append(this.template())
      }
    })
  },
  sEZy: function(e, t) {
    e.exports = {
      sign: '<% if (isLogin) { %><a href="javascript:;" class="<% if (!isSign && !isAnchor) { %>unsign<% } %>" data-pb-rseat="2" data-open="0" data-complete="<%= (isSign && !isAnchor) ? 1 : 0 %>"><%= isAnchor ? \'打卡榜\' : isSign ? \'已打卡\' : \'打卡\' %><i></i></a><% } else { %><a href="javascript:;" data-pb-rseat="2">打卡</a><% } %>',
      signMain: '<div class="clock-in-tip _signMain"></div>'
    }
  },
  sK8T: function(e, t, i) {
    var s = i("qLn7"),
    a = i("Uhh8"),
    o = i("9oud"),
    n = i("bDVM"),
    l = i("rtKp"),
    r = (i("tNx5"), i("sk80")),
    c = r.roomConfig,
    d = r.ui.userIcon;
    e.exports = Backbone.View.extend({
      initialize: function() {
        var e = this;
        this.$el.append(s),
        this._giftTab = new o({
          el: this.$el.find("#giftBottom")
        }),
        this._giftList = new n({
          el: this.$el.find("#giftTop")
        }),
        this._sendGiftAction = new l({
          el: this.$el.find("#giftTop")
        }),
        this._giftTab.on("changeGiftList",
        function(t) {
          e._sendGiftAction.model.set({
            tabId: t.tab_id,
            giftList: t.data_list
          }),
          e._giftList.model.set({
            tabId: t.tab_id,
            list: t
          })
        }),
        this._sendGiftAction.model.listenTo(this._giftList.model, "change:curGiftInfo",
        function(t, i) {
          e._sendGiftAction.model.unset("giftInfo", {
            silent: !0
          }).set("giftInfo", i),
          5 === i.tabId && e.trigger("fireRPG", i)
        }),
        this.on("rpgNodeListChange",
        function(t) {
          e._sendGiftAction.model.set("num", t.length),
          e._sendGiftAction.model.set("points", t)
        }),
        c.on("change:sendGiftAnchorInfo",
        function(t, i) {
          e._sendGiftAction.model.set({
            sendGiftAnchorInfo: i
          })
        }),
        this._sendGiftAction.model.set({
          sendGiftAnchorInfo: c.get("sendGiftAnchorInfo"),
          roomId: c.get("roomId")
        }),
        this._sendGiftAction.model.listenTo(c, "change:sendGiftAnchorInfo",
        function(t, i) {
          e._sendGiftAction.model.set("sendGiftAnchorInfo", i)
        }),
        this._giftList.on("packGoodsUseSuccess",
        function() {
          e._giftTab.trigger("refreshBagList")
        }),
        this._sendGiftAction.on("getPackList",
        function() {
          e._giftTab.trigger("refreshBagList")
        }),
        this._sendGiftAction.on("closeCanvas",
        function() {
          e.trigger("closeCanvas")
        }),
        r.event.on("socket.SEND_GIFT",
        function(t) {
          if (t.data.op_info.is_all_platform_gift && t.data.to_userInfo.user_id != c.get("onlineAnchorInfo").user_id) return ! 1;
          e.showGiftMessage(t)
        }),
        ISHOW.on("iShowLogout",
        function() {
          9999 === e._giftTab.model.get("curTabId") && e._giftTab.model.set("curTabId", 0)
        })
      },
      setGiftNumByLine: function(e) {
        this._giftList.model.set("numPerLine", e)
      },
      showGiftMessage: function(e) {
        var t = e.data;
        t.op_userInfo.iconHtml = d.giftMessageFrom(t.op_userInfo),
        t.to_userInfo.iconHtml = d.giftMessageTo(t.to_userInfo),
        t.isCurrentAnchor = (0 < c.get("liveId") ? c.get("onlineAnchorInfo").user_id: c.get("roomOwner")) == t.to_userInfo.user_id,
        r.event.trigger("roomMessageGift.append", _.template(a, t))
      }
    })
  },
  sRfo: function(e, t, i) {
    "use strict";
    var s = i("sk80"),
    a = s.roomConfig,
    o = s.ui.ScrollView,
    n = i("nmmu"),
    l = i("o2Ur");
    e.exports = Backbone.View.extend({
      model: new l,
      template: {
        carportEmpty: _.template(n.carportEmpty),
        carportList: _.template(n.carportList),
        carportItem: _.template(n.carportItem)
      },
      datas: {
        roomId: a.get("roomId"),
        page: 1,
        pageTotal: 1,
        pageSize: 8,
        total: 0,
        timer: 0,
        refreshTime: 6e4,
        type: "refresh",
        scrollRatio: .75
      },
      csses: {
        carportLists: "._carportLists"
      },
      doms: {},
      initialize: function(e) {
        this.doms.$carportNum = $(e.carportNum),
        this.$el.attr("data-pb-block", "17073110"),
        this.listenEvent(),
        this.getList(this.datas.page)
      },
      listenEvent: function() {
        var e = this;
        e.model.on("ok",
        function(t) {
          e.datas.total = t.page_info.total,
          e.datas.pageTotal = t.page_info.total_page,
          "refresh" === e.datas.type ? t.items && t.items.length ? (e.$el.html(e.template.carportList()), e.doms.$carportLists = $(e.csses.carportLists, e.$el), e.renderList(e.datas.type, t.items)) : e.renderEmpty() : e.renderList(e.datas.type, t.items)
        }),
        e.model.on("fail",
        function(t) {
          e.dialogError(t)
        }),
        e.model.on("empty",
        function() {
          e.renderEmpty()
        })
      },
      getList: function(e) {
        var t = this;
        t.model.set({
          roomId: t.datas.roomId,
          page: e,
          pageSize: t.datas.pageSize
        }),
        t.model.getData(),
        clearTimeout(t.datas.timer),
        t.datas.timer = setTimeout(function() {
          t.datas.type = "refresh",
          t.datas.page = 1,
          t.getList(t.datas.page)
        },
        t.datas.refreshTime)
      },
      renderEmpty: function() {
        this.$el.html(this.template.carportEmpty())
      },
      renderList: function(e, t) {
        var i = this,
        s = i.doms.$carportLists;
        i.doms.$carportNum.html("(" + i.datas.total + ")"),
        "refresh" === e ? (s.html(i.template.carportItem({
          items: t,
          type: e
        })), i.scrollView = new o, i.scrollView.render($(".scroll-panel", i.$el)), i.scrollView.on("scroll",
        function(e) {
          e.scrolled > e.total * i.datas.scrollRatio && (i.datas.type = "append", i.datas.page++, i.datas.page <= i.datas.pageTotal && i.getList(i.datas.page))
        })) : (s.append(i.template.carportItem({
          items: t,
          type: e
        })), i.scrollView.update())
      },
      dialogError: function(e) {}
    })
  },
  sk80: function(e, t) {
    e.exports = QX
  },
  spgc: function(e, t) {
    e.exports = {
      902 : '<span class="dialog-ico ico-alert"></span><div class="pl55 content"><h4>还需 <em class="em"><%=bean_need%></em> 奇豆</h4><p>账户余额：<em class="em mr3"><%=diamond%></em>钻石<em class="ml10 mr3 em"><%=bean%></em>奇豆</p></div>',
      0 : "<%=data.msg%>"
    }
  },
  stb4: function(e, t, i) {
    "use strict";
    e.exports = Backbone.Model.extend({
      urlRoot: "/api/fans/userRank",
      getData: function(e) {
        var t = this;
        this.save({},
        {
          data: e || {},
          success: function(e, i) {
            200 === i.code && t.trigger("ok")
          }
        })
      }
    })
  },
  tNx5: function(e, t) {
    e.exports = {
      600004 : '<div class="item"><a target="room" href="<%if(op_info.room_id){%>/room/<%=op_info.room_id%><%}else{%>javascript:void(0)<%}%>"><img width="50" height="50" src="<%=op_info.user_icon%>" class="photo"><em class="em-g name"><%=_.escape(op_info.user_name)%></em>送给<em class="name em-o"><%=_.escape(op_info.anchor_name)%></em><strong><%=op_info.gift_num%>个</strong><img width="50" height="50" src="<%=op_info.gift_pic%>"></a></div>',
      600019 : '<div class="item"><a target="room" href="<%if(op_info.room_id){%>/room/<%=op_info.room_id%><%}else{%>javascript:void(0)<%}%>"><img width="50" height="50" src="<%=op_info.user_icon%>" class="photo"><em class="em-g name"><%=_.escape(op_info.user_name)%></em>送给<em class="name em-o"><%=_.escape(op_info.anchor_name)%></em><strong><%=op_info.gift_num%>个</strong><img width="50" height="50" src="<%=op_info.gift_pic%>"><em class="text-liansong">连送</em><em class="em-x">x</em><em class="em-y"><%=op_info.group_count%></em></a></div>'
    }
  },
  tUqm: function(e, t) {
    e.exports = {
      roomEdit: '<i class="xiu-ico _anchorRoomEdit" title="设置">&#xe64c;</i>',
      roomEditContent: '<div class="tab-panel"><ul class="tab-tit"><li data-target="basic"><a class="btn btn-syj" href="javascript:;">基本信息</a></li><li data-target="liveTime"><a class="btn btn-syj" href="javascript:;">开播通知</a></li><li data-target="manager"><a class="btn btn-syj" href="javascript:;">管理员</a></li></ul><div class="_tabContentContainer"><div class="tab-content _roomEditBasic"></div><div class="tab-content _roomEditLiveTime"></div><div class="tab-content tab-admin _roomEditManager"></div></div></div>',
      roomEditBasic: '<div class="form-group"><label>房间名称</label><div class="input-sya"><input type="text" name="room_name" placeholder="请输入房间名称，13字以内" value="<%= room_name %>"></div><span class="tips-item _forRoomName"></span></div><div class="form-group"><label>房间公告</label><div class="input-sya"><input type="text" name="notice_msg" placeholder="请输入公告内容，30字以内" value="<%= notice_msg %>"></div><span class="tips-item _forNotice"></span></div><div class="form-group"><label>欢迎语</label><div class="input-sya"><input type="text" name="welcome_msg" placeholder="请输入欢迎语，30字以内" value="<%= welcome_msg %>"></div></div><div class="form-group"><label>结束语</label><div class="input-sya"><input type="text" name="ending_msg" placeholder="请输入结束语，30字以内" value="<%= ending_msg %>"></div></div><div class="dialog-act"><a class="btn btn-sye _ok" href="javascript:;">确定</a><a class="btn btn-syj _def" href="javascript:;">取消</a></div>',
      roomEditLiveTime: '<h4>设置开播时间表（最多5条）<span class="t-alert"></span><a class="btn btn-add _liveTimeAdd" href="javascript:;"><span class="ico ico-plus"></span>添加</a></h4><ol class="live-time-list _liveTimeList"></ol><div class="dialog-act"><a class="btn btn-sye _liveTimeSave" href="javascript:;">保存</a><a class="btn btn-syj _def" href="javascript:;">取消</a></div>',
      roomEditLiveTimeEmpty: '<p class="empty">尚未设置开播时间~<a class="em _startSetLiveTime" href="javascript:;">点击设置</a></p>',
      roomEditLiveTimeItem: '<% $.each(list, function(i, v) { var num = type === \'addOne\' ? len : (i + 1) %><li class="_liveTimeItem"><span class="order _order"><%= num %></span><label>开播时间：</label><div class="input-select-b day-selete _selectTime"><span class="input-text"><input readonly="" value="<%= v.day %>" class="value _liveDay"><span class="open-handler _selectTimeHandler" target="day"><span class="ico ico-arraw-b"></span></span></span><ul class="select-drop-b"></ul></div><div class="input-select-b hour-selete _selectTime"><span class="input-text"><input readonly="" value="<%= v.hour %>点" class="value _liveHour"><span class="open-handler _selectTimeHandler" target="hour"><span class="ico ico-arraw-b"></span></span></span><ul class="select-drop-b"></ul></div><div class="input-select-b minute-selete _selectTime"><span class="input-text"><input readonly="" value="<%= v.m %>分" class="value _liveMinute"><span class="open-handler _selectTimeHandler" target="m"><span class="ico ico-arraw-b"></span></span></span><ul class="select-drop-b"></ul></div><div class="act"><a class="ico ico-minus _liveTimeMinus" href="javascript:;">-</a></div></li><% }); %>',
      roomEditLiveTimeItemTime: '<% $.each(txt, function(i, v) { %><li><a href="javascript:;" class="sel-item-b _selectTimeItem"><%= v %></a></li><% }); %>',
      roomEditManager: '<% if (list.length) { %><div class="list-title"><span class="col1">序号</span><span class="col2">用户名</span><span class="col5">操作</span></div><div class="scroll-panel"><div class="scroll-content"><ol class="admin-list"><% _.each(list, function(item, key) { %><li><span class="order"><%= key + 1 %></span><span class="col1 lv-wall"><% if(item.badge_level > 0) { %><i class="ico-lv gz-lv lv<%= item.badge_level %>"></i><% } %><% if(item.guard_level > 0) { %><i class="ico-lv sh-lv lv<%= item.guard_level %>"></i><% } %></span><span class="col2"><a class="name" href="javascript:;"><%= _.escape(item.nick_name) %></a></span><span class="col5"><a class="btn btn-syl _del" href="javascript:;" data-userid="<%= item.user_id %>" data-username="<%= _.escape(item.nick_name) %>">取消</a></span></li><% }); %></ol></div></div><% } else { %><p class="empty">你还没有管理员呢~</p><% } %>',
      roomEditManagerNotice: '<li class="msg"><div class="row"><a class="name" href="javascript:;" data-user_id="<%= userId %>" data-nick_name="<%= userName %>" node-type="userHoverTip"><%= userName %></a><span class="nr">被</span><a class="name" href="javascript:;" data-user_id="<%= adminId %>" data-nick_name="<%= adminName %>" node-type="userHoverTip"><%= adminName %></a><span class="sys">解除管理员</span></div></li>'
    }
  },
  tVAW: function(e, t) {
    e.exports = {
      rank: '<div class="tl-rank-tab"><div class="tlrt-item tlrt-item-1 _trueLoveRankTab" data-tab="1">7日榜<b></b></div><div class="tlrt-item tlrt-item-2 _trueLoveRankTab" data-tab="2">30日榜<b></b></div><div class="tlrt-item tlrt-item-3 _trueLoveRankTab" data-tab="3">总榜<b></b></div><a href="/rank/truelove" class="tl-rank-linkmore" target="_blank">更多></a></div><div class="tl-rank-cont"><div class="scroll-panel scroll-panel-tlb"><div class="scroll-content"><ul class="tl-rank-topgroup _trueLoveRankTop"></ul><ul class="tl-rank-list _trueLoveRankList"></ul></div></div></div>',
      top: '<% _.each(items, function(v) { %><li class="r-<%= v.rank %>"><div class="num"><%= v.rank %></div><div class="avator"><% if (v.rank === 1) { %><div class="st" style="left:-5px;top:0">星</div><div class="st" style="right:-15px;top:22px;">星</div><% } %><img src="<%= v.icon %>" alt="<%- v.nick_name %>"><div class="za-user-lv za-user-lv-<%= ~~v.fan_medal_info.guard_level ? \'sh\' : \'pt\' %> za-user-lv-bg-<%= v.fan_medal_info.medal_type ? (v.fan_medal_info.medal_type === 1 ? \'b\' : \'c\') : \'a\' %>"><div class="za-num"><%= v.fan_medal_info.user_level %></div><div class="za-name"><%- v.fan_medal_info.fans_name %></div><% if (~~v.fan_medal_info.guard_level) { %><div class="za-sh za-sh-<%= ~~v.fan_medal_info.guard_level === 1 ? \'bronze\' : ~~v.fan_medal_info.guard_level === 2 ? \'silver\' : \'gold\' %>"></div><% } %></div></div><p><%- v.nick_name %></p><p class="zaz">真爱值</p><p><%= v.experience %></p></li><% }) %>',
      list: "<% _.each(items, function(v) { %><li><div class=\"num\"><%= v.rank %>.</div><div class=\"za-user-lv za-user-lv-<%= ~~v.fan_medal_info.guard_level ? 'sh' : 'pt' %> za-user-lv-bg-<%= v.fan_medal_info.medal_type ? (v.fan_medal_info.medal_type === 1 ? 'b' : 'c') : 'a' %>\"><div class=\"za-num\"><%= v.fan_medal_info.user_level %></div><div class=\"za-name\"><%- v.fan_medal_info.fans_name %></div><% if (~~v.fan_medal_info.guard_level) { %><div class=\"za-sh za-sh-<%= ~~v.fan_medal_info.guard_level === 1 ? 'bronze' : ~~v.fan_medal_info.guard_level === 2 ? 'silver' : 'gold' %>\"></div><% } %></div><div class=\"name\"><%- v.nick_name %></div><span class=\"za-val\">真爱值：<%= v.experience %></span></li><% }) %>"
    }
  },
  teNv: function(e, t, i) {
    var s;
    void 0 === (s = function() {
      return Backbone.Model.extend({
        defaults: {
          display: "none",
          width: "100%",
          height: "100%",
          position: "absolute",
          top: "0",
          left: "0",
          background: "#000",
          filter: "alpha(opacity=40)",
          opacity: "0.4"
        },
        initialize: function() {}
      })
    }.call(t, i, t, e)) || (e.exports = s)
  },
  tlbo: function(e, t, i) {
    var s = i("sk80");
    e.exports = Backbone.View.extend({
      initialize: function() {
        this.setElement(".room-video"),
        this.timer = 0,
        this.delayTime = 300,
        this.applyProperSize(),
        this.eventRegister()
      },
      eventRegister: function() {
        var e = this;
        $(window).on("resize",
        function() {
          e.timer && clearTimeout(e.timer),
          this.changeSizeNow ? this.changeSizeNow = !1 : e.timer = setTimeout(e.changeSize.bind(e), e.delayTime)
        }),
        s.event.on("changeSizeNow",
        function() {
          this.changeSizeNow = !0,
          e.changeSize.bind(e)()
        })
      },
      changeSize: function() {
        this.applyProperSize(),
        s.event.trigger("pcnResize", {
          windowWidth: window.innerWidth,
          windowHeight: window.innerHeight
        })
      },
      calculatePropperSize: function(e, t) {
        var i = 4 * t / 3,
        s = e / 4 * 3;
        if (e <= i && s <= t) i = e;
        else if (i <= e && t < s) s = t;
        else {
          for (; i <= e;) i = --t / 4 * 3;
          s = t
        }
        return {
          width: i,
          height: s
        }
      },
      applyProperSize: function() {
        var e = window.innerHeight - $(".room-mes").outerHeight() - $(".room-action").outerHeight(),
        t = this.$el.width();
        if (this.$el.height(e), 3 != s.roomConfig.get("livePlatform")) {
          var i = this.calculatePropperSize(t, e);
          this.$el.find("#_videoLoaderContainer").css({
            width: i.width + "px",
            height: i.height + "px"
          })
        }
      }
    })
  },
  tt90: function(e, t, i) {
    "use strict";
    var s = i("eRGi"),
    a = i("goYk"),
    o = i("ntod");
    e.exports = Backbone.View.extend({
      csses: {
        tabTit: ".tab-tit",
        roomEditBasic: "._roomEditBasic",
        roomEditLiveTime: "._roomEditLiveTime",
        roomEditManager: "._roomEditManager"
      },
      tabContent: {
        basic: null,
        manager: null,
        liveTime: null
      },
      events: {
        "click .tab-tit li": "clickTab"
      },
      setDoms: function() {
        var e = this.$el,
        t = this.csses;
        this.doms = {
          $tabTit: $(t.tabTit, e),
          $roomEditBasic: $(t.roomEditBasic, e),
          $roomEditLiveTime: $(t.roomEditLiveTime, e),
          $roomEditManager: $(t.roomEditManager, e)
        }
      },
      initialize: function(e) {
        this.setDoms(),
        this.loadTabContent(e),
        this.changeTab(e.first)
      },
      loadTabContent: function(e) {
        new s({
          el: "._roomEditBasic",
          data: e.data.room_info,
          dialogEl: this.$el,
          parentEl: e.parentEl
        }),
        new a({
          el: "._roomEditLiveTime"
        }),
        this.roomEditManagerView = new o({
          el: "._roomEditManager",
          data: e.data.admin_list
        }),
        this.tabContent.basic = this.doms.$roomEditBasic,
        this.tabContent.liveTime = this.doms.$roomEditLiveTime,
        this.tabContent.manager = this.doms.$roomEditManager
      },
      changeTab: function(e, t) {
        var i = "";
        t || (i = '[data-target="' + e + '"]', t = this.doms.$tabTit.find(i)),
        t.addClass("selected").siblings().removeClass("selected"),
        this.tabContent[e].show().siblings().hide(),
        "manager" === e && this.roomEditManagerView.scrollView && this.roomEditManagerView.scrollView.update()
      },
      clickTab: function(e) {
        var t = $(e.currentTarget),
        i = t.data("target");
        return this.changeTab(i, t),
        !1
      }
    })
  },
  "u3i/": function(e, t, i) {
    "use strict";
    var s = i("sk80"),
    a = i("FcgP");
    e.exports = Backbone.View.extend({
      initialize: function() {
        var e = this;
        this.model = new a,
        this.model.on("ok",
        function() {
          e.showLevel()
        }),
        s.roomConfig.on("change:onlineAnchorInfo",
        function(t, i) {
          e.model.getData({
            anchor_id: i.user_id
          })
        })
      },
      showLevel: function() {
        var e = this.model.get("data"),
        t = this.$el.siblings("i"),
        i = ~~e.fans_level ? '<i class="za-zb-lv za-zb-lv-' + e.fans_level + '"></i>': t.prop("outerHTML");
        t.replaceWith(i)
      }
    })
  },
  v0OY: function(e, t) {
    e.exports = {
      600002 : '<div class="item"><a target="room%>" href="<%if(op_info.room_id){%>/room/<%=op_info.room_id%><%}else{%>javascript:void(0)<%}%>"><img width="50" height="50" src="<%=op_info.user_icon%>" class="photo"><em class="em-g name"><%=_.escape(op_info.user_name)%></em>开通了<strong><%=op_info.badge_name%></strong><i class="ico-lv gz-lv-large lv<%=op_info.badge_level%>"></i></a></div>',
      600003 : '<div class="item"><a target="room" href="<%if(op_info.room_id){%>/room/<%=op_info.room_id%><%}else{%>javascript:void(0)<%}%>"><img width="50" height="50" src="<%=op_info.user_icon%>" class="photo"><em class="em-g name"><%=_.escape(op_info.user_name)%></em>为<em class="name em-o"><%=_.escape(op_info.anchor_name)%></em>开通了<strong><%=op_info.guard_name%></strong><i class="ico-lv sh-lv-large lv<%=op_info.guard_level%>"></i></a></div>'
    }
  },
  v9h0: function(e, t, i) {
    "use strict";
    e.exports = Backbone.Model.extend({
      urlRoot: "/api/fans/store",
      getData: function(e) {
        var t = this;
        this.save({},
        {
          data: e || {},
          success: function(e, i) {
            200 === i.code && t.trigger("ok")
          }
        })
      }
    })
  },
  vCPS: function(e, t, i) {
    var s = i("sk80"),
    a = s.roomConfig,
    o = s.tools.ishow,
    n = i("wtz4"),
    l = i("WcVB"),
    r = i("aHfg"),
    c = s.tools.mirror;
    e.exports = Backbone.View.extend({
      initialize: function(e) {
        var t = this;
        this.template = _.template(n),
        this.model = new l,
        this.$siteBody = $(e.siteBody),
        this.$siteBody.on("click.close",
        function(e) {
          t.model.get("oldId") && (s.event.trigger("roomEventsBlock.close", t.model.get("oldId")), t.model.unset("oldId").unset("newId", {
            silent: !0
          }))
        }),
        s.event.on("roomEventsBlock.push",
        function(e) {
          t.model.set("newId", e || 0)
        }),
        s.event.on("roomEventsBlock.close",
        function(e) {
          12 === e && t.closeRoomPlay()
        }),
        s.event.on("roomEventsBlock.render",
        function() {
          t.render()
        }),
        o.on("iShowLoginSuccess iShowLogout",
        function() {
          t.getRoomConfig()
        }),
        this.model.on("ok",
        function() {
          t.render(),
          t.loadPath()
        }).on("change:newId",
        function(e, t) {
          s.event.trigger("roomEventsBlock.close", e.get("oldId")),
          e.set("oldId", t)
        }),
        $.cookie("P00001") || this.getRoomConfig()
      },
      events: {
        "click [data-event-id=12] > img": "clickRoomPlay"
      },
      getRoomConfig: function() {
        this.model.getData({
          room_id: a.get("roomId"),
          user_id: s.loginInfo.userId
        })
      },
      render: function() {
        var e, t = this,
        i = this.model.get("data").button_icon;
        i = _.map(i,
        function(e) {
          return e.sub_button_icon && e.sub_button_icon.length && (_.map(e.sub_button_icon,
          function(e) {
            return t.dataExtend(e)
          }), e.sub_button_icon = t.dataFilter(e.sub_button_icon)),
          t.dataExtend(e)
        }),
        i = this.dataFilter(i),
        e = Math.max(Math.ceil(this.calcIconsLen(i) / 2), 3),
        $("#eventsList").length && $("#eventsList").remove(),
        this.$el.append(this.template({
          icons: i,
          column: e
        }))
      },
      dataExtend: function(e) {
        return _.extend(e, _.find(r.icons,
        function(t) {
          return t.id === e.id
        }))
      },
      dataFilter: function(e) {
        var t = a.get("roomOwner") === s.loginInfo.userId,
        i = a.get("onlineAnchorInfo").user_id === s.loginInfo.userId,
        o = a.get("isAnchor");
        return _.filter(e,
        function(e) {
          return e.show = !e.r || 1 === e.r && t || 2 === e.r && i || 3 === e.r && o,
          e
        })
      },
      clickRoomPlay: function(e) {
        e.stopPropagation();
        var t = $(e.currentTarget).parent(); (this.$roomPlay = t).hasClass("active") ? s.event.trigger("roomEventsBlock.push") : (s.event.trigger("roomEventsBlock.push", 12), t.addClass("active"), c({
          t: 20,
          block: "17073107",
          rseat: "xc_wanfa_icon"
        }))
      },
      closeRoomPlay: function() {
        this.$roomPlay && this.$roomPlay.removeClass("active"),
        s.event.trigger("gangwar.tipClose")
      },
      loadPath: function() {
        _.forEach(this.model.get("data").button_icon,
        function(e) {
          e.path && s.core.loader(e.path),
          e.sub_button_icon && _.forEach(e.sub_button_icon,
          function(e) {
            e.path && s.core.loader(e.path)
          })
        })
      },
      calcIconsLen: function(e) {
        var t = 0;
        return e && e.length && _.each(e,
        function(e) {
          e.sub_button_icon && e.sub_button_icon.length && _.each(e.sub_button_icon,
          function(e) {
            e.show && t++
          })
        }),
        t
      }
    })
  },
  vtTN: function(e, t, i) {
    var s = i("3gbC"),
    a = i("dHyl"),
    o = i("sk80");
    e.exports = Backbone.View.extend({
      events: {
        "click img": "chooseItem"
      },
      template: {
        emotion: _.template(s.emotion)
      },
      initialize: function() {
        this.hasRender = !1,
        this.visible = !1
      },
      render: function() {
        this.hasRender = !0,
        this.$el.prepend(this.template.emotion({
          list: a.list.slice(0, 20)
        })),
        o.tools.loadImageInSequence([].slice.call($("._emotionTip").find("img")))
      },
      toggle: function() {
        this.visible ? this.fold() : this.unfold()
      },
      fold: function() {
        this.visible = !1,
        this.$el.hide()
      },
      unfold: function() {
        this.visible = !0,
        this.hasRender || this.render(),
        this.$el.show()
      },
      chooseItem: function(e) {
        this.trigger("choose", e.currentTarget.title),
        this.fold()
      }
    })
  },
  vwHx: function(e, t, i) {
    "use strict";
    e.exports = Backbone.Model.extend({
      urlRoot: "/card/getMonthCardTask",
      defaults: {
        anchor_id: "",
        date: 1
      },
      initialize: function() {},
      getData: function() {
        var e = this;
        e.save({},
        {
          data: {
            anchor_id: e.get("anchorId"),
            date: e.get("monthType")
          },
          success: function(t, i) {
            if ("A00000" === i.code) {
              if ( - 1 !== e.get("monthType")) {
                var s = i.data.card_calendar[0].task;
                e.set("curInfo", {
                  month: s.task_month,
                  year: s.task_year
                })
              }
              e.trigger("ok", i.data)
            } else e.trigger("fail", i.msg)
          },
          error: function(t, i) {
            e.trigger("fail", i.msg)
          }
        })
      }
    })
  },
  w66R: function(e, t, i) {
    "use strict";
    e.exports = Backbone.Model.extend({
      urlRoot: "/api/lottery/getFansProduct",
      getData: function(e) {
        var t = this;
        this.save({},
        {
          data: e || {},
          success: function(e, i) {
            200 === i.code && t.trigger("ok")
          }
        })
      }
    })
  },
  wBJt: function(e, t) {
    for (var i = 0,
    s = ["webkit", "moz"], a = 0; a < s.length && !window.requestAnimationFrame; ++a) window.requestAnimationFrame = window[s[a] + "RequestAnimationFrame"],
    window.cancelAnimationFrame = window[s[a] + "CancelAnimationFrame"] || window[s[a] + "CancelRequestAnimationFrame"];
    window.requestAnimationFrame || (window.requestAnimationFrame = function(e, t) {
      var s = (new Date).getTime(),
      a = Math.max(0, 16.7 - (s - i)),
      o = window.setTimeout(function() {
        e(s + a)
      },
      a);
      return i = s + a,
      o
    }),
    window.cancelAnimationFrame || (window.cancelAnimationFrame = function(e) {
      clearTimeout(e)
    })
  },
  wDN7: function(e, t, i) {
    "use strict";
    var s;
    void 0 === (s = function() {
      var e, t, s = i("sk80"),
      a = s.core.visibilityDelay,
      o = s.tools.qos;
      a(60,
      function() {
        t = Math.random(),
        o.push(9, {
          ct: {
            r: t,
            type: "disable"
          }
        }),
        e = new Date
      },
      function() {
        o.push(9, {
          ct: {
            r: t,
            type: "enable",
            time: (e ? ((new Date).getTime() - e.getTime()) / 1e3: 0) + "s"
          }
        })
      })
    }.call(t, i, t, e)) || (e.exports = s)
  },
  wIHE: function(e, t) {
    e.exports = Backbone.Model.extend({
      urlRoot: "/api/userinfo/getAccount",
      initialize: function() {},
      subSave: function() {
        this.save(null, {
          type: "post",
          dataType: "json",
          cache: !1,
          data: {},
          success: function(e, t) {
            e.trigger("success", t)
          },
          error: function(e, t) {
            e.trigger("error", t)
          }
        })
      }
    })
  },
  wkko: function(e, t, i) {
    var s, a;
    s = [i("H28f"), i("exB7")],
    void 0 === (a = function(e, t) {
      var s = i("sk80"),
      a = s.roomConfig,
      o = (s.tools.base, s.ui.Dialog),
      n = s.ui.SubConfirm,
      l = Backbone.View.extend({
        initialize: function(e) {
          this.opts = e,
          this.dialogBody = e.dialogBody,
          this.guardCallBack = e.guardCallBack ||
          function() {},
          this.nobilityCallBack = e.nobilityCallBack ||
          function() {},
          this.$el = $(this.el).addClass("open-dialog"),
          this.loadTab(e.target, e)
        },
        csses: {
          tabSelected: "selected"
        },
        events: {
          "click ._tabLi": "changeTab"
        },
        changeTab: function(e) {
          e.preventDefault();
          var t = $(e.currentTarget),
          i = this.csses.tabSelected,
          s = t.data("target");
          t.hasClass(i) || (t.addClass(i).siblings().removeClass(i), this.loadTab(s))
        },
        formatTime: function(e) {
          var t = e.getHours(),
          i = e.getMinutes();
          return (t < 10 ? "0" + t: t) + ":" + (i < 10 ? "0" + i: i)
        },
        loadTab: function(i, o) {
          var l, r, c, d = this,
          u = null,
          p = ($("._buyContainer", this.$el), $(".host-info"));
          if (l = (o = o || $.extend({},
          this.opts, {
            month: 1
          })).anchorId || a.onlineAnchor_id || a.room_owner || a.get("onlineAnchorInfo").user_id || a.get("roomOwner"), i && "nobility" == i) u = new t({
            beginLevel: d.opts.NobilityBeginLevel,
            anchor_id: l,
            callback: function(e) {
              d.nobilityCallBack(e)
            }
          });
          else {
            if (r = o.nickName || (1 != p.data("onmic-is-anchor") ? $.trim(p.find("h4").text()) || a.get("onlineAnchorInfo").nick_name: a.room_owner_nick_name || "房主"), c = o.pic || p.find(".figure-l img").attr("src") || a.anchor_icon || a.get("onlineAnchorInfo").user_icon, l == s.loginInfo.userId) return $("._def").trigger("click"),
            void n({
              content: "不能守护自己"
            });
            u = new e({
              month: o.month,
              guardInfo: {
                name: r,
                anchor_id: l,
                pic: c
              },
              callback: function(e) {
                d.guardCallBack(e)
              }
            })
          }
          u.on("loaded",
          function() {
            d.dialogBody.setPosition()
          }),
          u.on("buySuccessCallBack",
          function() {})
        }
      });
      return function(e) {
        if ($.cookie("P00001")) {
          var t, i, a = {
            target: "guard",
            month: 1,
            anchorId: "",
            pic: "",
            nickName: "",
            page: "room"
          };
          return a = $.extend({},
          a, e),
          t = _.template('<div class="tab-panel"><ul class="tab-tit"><li  class="_tabLi <%= target === "nobility" ? "selected" : "" %>"  data-target="nobility"><a class="btn btn-syj" href="javascript:void(0);">贵 族</a></li><li class="_tabLi <%= target === "guard" ? "selected" : "" %>" data-target="guard"><a class="btn btn-syj" href="javascript:void(0);" >守 护</a></li></ul><div class="_buyContainer"></div></div>'),
          i = new o({
            title: "贵族和守护",
            content: t({
              target: a.target
            })
          }),
          new l($.extend({},
          {
            el: i.$el,
            dialogBody: i
          },
          a))
        }
        s.event.trigger("loginDialog.show")
      }
    }.apply(t, s)) || (e.exports = a)
  },
  wre7: function(e, t, i) {
    "use strict";
    var s = i("sk80"),
    a = s.ui.ScrollView,
    o = i("jECO");
    e.exports = Backbone.View.extend({
      initialize: function() {
        var e = this;
        $(window).on("resize",
        function() {
          e.updatePos()
        }),
        s.event.on("truelove.intro",
        function() {
          e.intro()
        })
      },
      events: {
        "click ._trueLoveIntroClose": "clickClose",
        "click ._trueLoveIntroTab li:not(.active)": "clickTab"
      },
      template: {
        intro: _.template(o.intro),
        tab1: _.template(o.tab1),
        tab2: _.template(o.tab2),
        tab3: _.template(o.tab3),
        tab4: _.template(o.tab4)
      },
      intro: function() {
        var e = this.$el;
        this.$el.html(this.template.intro()),
        this.doms = {
          $intro: $("._trueLoveIntro", e),
          $tabs: $("._trueLoveIntroTab li", e),
          $main: $("._trueLoveIntroMain", e)
        },
        this.clickTab(null, "tab1"),
        this.updatePos()
      },
      updatePos: function() {
        if (this.doms && this.doms.$intro) {
          var e = this.doms.$intro,
          t = e.outerWidth(),
          i = e.outerHeight(),
          s = $(window),
          a = s.width(),
          o = s.height(),
          n = s.scrollTop();
          e.css({
            top: (o - i) / 2 + n,
            left: (a - t) / 2
          })
        }
      },
      clickClose: function() {
        this.$el.empty()
      },
      clickTab: function(e, t) {
        var i = e && $(e.currentTarget),
        s = (t = t || i.data("tab"), this.doms.$tabs); (e ? i: s.filter("[data-tab=" + t + "]")).addClass("active").siblings().removeClass("active"),
        this.doms.$main.html(this.template[t]()),
        this.scrollView && this.scrollView.destroy(),
        this.scrollView = new a,
        this.scrollView.render($(".scroll-panel", this.$el))
      }
    })
  },
  wtz4: function(e, t) {
    e.exports = '<div class="block-game" id="eventsList" data-pb-block="17073107"><div class="game-container"><ul class="game-wrapper"><% _.forEach(icons, function(v) { %><% if (v.show) { %><li data-event-id="<%= v.id %>" <% if (v.effect) { %>class="animateTada"<% } %>><% if (v.external) { %><a href="<%= v.external %>" target="_blank"><% } %><img src="<%= v.img %>" title="<%= v.name %>" alt="<%= v.name %>"><% if (v.external) { %></a><% } %><% if (v.num) { %><span class="num"></span><% } %><% if (v.sub_button_icon && v.sub_button_icon.length) { %><div class="tip-block roomplay-tip roomplay-tip-c<%= column %>"><div class="arr arr-bottom"><div class="arr-in"></div></div><ul class="roomplay-tip-list _roomPlayList"><% _.forEach(v.sub_button_icon, function(k) { %><% if (k.show) { %><li data-event-id="<%= k.id %>"<% if (k.effect) { %> class="animateTada"<% } %>><% if (k.external) { %><a href="<%= k.external %>" target="_blank"><% } %><img src="<%= k.img %>" title="<%= k.name %>" alt="<%= k.name %>"><% if (k.external) { %></a><% } %></li><% } %><% }) %></ul></div><% } %></li><% } %><% }) %></ul></div></div>'
  },
  wvHs: function(e, t, i) {
    "use strict";
    var s = i("sk80").roomConfig,
    a = i("gOnX"),
    o = i("EDXf");
    e.exports = Backbone.View.extend({
      model: new o,
      template: _.template(a),
      datas: {
        roomId: s.get("roomId"),
        anchorId: 0 < s.get("liveId") ? s.get("onlineAnchorInfo").user_id: s.get("roomOwner"),
        topNum: 12
      },
      initialize: function() {
        this.$el.attr("data-pb-block", "17073111"),
        this.listenEvent(),
        this.getList()
      },
      listenEvent: function() {
        var e = this;
        e.model.on("ok",
        function(t) {
          t && t.length && e.renderList(t)
        }),
        e.model.on("fail",
        function(t) {
          e.dialogError(t)
        })
      },
      getList: function() {
        this.model.set("topNum", this.datas.topNum),
        this.model.set("anchorId", this.datas.anchorId),
        this.model.getData()
      },
      renderList: function(e) {
        this.$el.html(this.template({
          items: e
        }))
      },
      dialogError: function(e) {}
    })
  },
  wvs8: function(e, t, i) {
    "use strict";
    e.exports = Backbone.Model.extend({
      urlRoot: "/api/checkin/userCheckin",
      getData: function(e) {
        var t = this;
        e = e || {},
        t.save({},
        {
          data: e,
          success: function(e, i) {
            200 === i.code ? t.trigger("ok") : t.trigger("fail", i.msg)
          }
        })
      }
    })
  },
  xIdY: function(e, t, i) {
    var s, a, o = i("sk80").ui.Dialog;
    s = [i("9PQ4")],
    void 0 === (a = function(e) {
      return Backbone.View.extend({
        el: "body",
        templateWeChat: _.template('<div class="QM-img"><img width="110" height="110" src="<%=url%>"></div><p class="QM-des"><span class="icon-QM"></span>请使用微信扫描二维码以完成支付</p><p class="QM-money">￥<%=amount%></p>'),
        templateWeChatOk: "<h6>您已充值成功，谢谢！</h6>",
        datas: {
          checkTid: 0,
          closeWechatId: 0
        },
        initialize: function(t, i) {
          var s, a = this;
          s = this.checkOrderModel = new e,
          "function" == typeof i && (this.cb = i),
          s.on("ok",
          function() {
            a.stopCheckOrder(),
            a.stopWechat(),
            a.showWechatOk()
          }),
          s.on("continue",
          function() {}),
          s.on("fail",
          function() {
            a.stopCheckOrder(),
            a.stopWechat(),
            a.showWeChatFail()
          }),
          this.showWebChat(t)
        },
        getQrCode: function(e) {
          return "/recharge/qrcoder?" + $.param(e)
        },
        showWeChatFail: function() {
          this.webChatView.remove()
        },
        showWechatOk: function() {
          var e = this.templateWeChatOk,
          t = this;
          this.webChatView.remove(),
          new o({
            title: "提示",
            clsName: "dialog-QuickMark",
            content: e,
            btn: [{
              clsName: "btn btn-sye",
              type: "ok",
              text: "确认"
            }]
          }).on("ok",
          function() {
            t.cb()
          })
        },
        stopCheckOrder: function() {
          clearInterval(this.datas.checkTid),
          this.datas.checkTid = 0
        },
        checkOrder: function() {
          var e = this,
          t = this.datas.checkTid;
          t && clearInterval(t),
          this.datas.checkTid = setInterval(function() {
            e.checkOrderModel.getData()
          },
          2e3)
        },
        showWebChat: function(e) {
          var t, i, s, a = this,
          n = e.amount / 100;
          this.checkOrderModel.setOrderKey(),
          e.order_key = this.checkOrderModel.get("order_key"),
          t = this.getQrCode(e),
          i = this.templateWeChat({
            amount: n,
            url: t
          }),
          this.webChatView = s = new o({
            title: "提示",
            clsName: "dialog-QuickMark",
            content: i,
            btn: []
          }),
          s.$el.find("img")[0].onload = function() {
            a.checkOrder()
          },
          s.on("cancel",
          function() {
            a.stopCheckOrder(),
            a.datas.closeWechatId && a.stopWechat()
          }),
          this.datas.closeWechatId = setTimeout(function() {
            s.trigger("cancel")
          },
          9e5)
        },
        stopWechat: function() {
          clearTimeout(this.datas.closeWechatId),
          this.datas.closeWechatId = 0
        }
      })
    }.apply(t, s)) || (e.exports = a)
  },
  xb6M: function(e, t) {
    e.exports = {
      item: '<div class="item <%=style%>" style="overflow:hidden;"><a href="<% if (room_id) { %>/room/<%= room_id %><% } else { %>javascript:;<% } %>" target="room"><img class="photo" src="<%=lt.pic%>"><div class="dec dec-1"></div><div class="dec dec-2"></div><%if(lt.desc_tpl.length === 1){%><div class="layrow-1"><%=sentenceList[0]%></div><%}else{%><div class="layrow"><%_.each(sentenceList, function(v, i){%><div class="r-<%=i+1%>"><%=v%></div><%})%></div><%}%><%if(rt){%><%if(rt.desc){%><div class="num"><%=rt.desc[0]%></div><%}%><img class="gg" src="<%=rt.pic%>" alt=""><%if(rt.desc){%><div class="text-liansong"><span class="t1"><%=rt.desc[1]%></span><span class="t3"><%=rt.desc[2]%></span></div><%}%><%}%></a></div>'
    }
  },
  xeLu: function(e, t, i) {
    "use strict";
    e.exports = Backbone.Model.extend({
      urlRoot: "/room/getRoomInfo",
      defaults: {
        room_id: ""
      },
      initialize: function() {},
      getData: function() {
        var e = this;
        e.save({},
        {
          data: {
            room_id: e.get("roomId")
          },
          success: function(t, i) {
            200 === i.code ? e.trigger("ok", i.data) : e.trigger("fail", i.msg)
          },
          error: function(t, i) {
            e.trigger("fail", i.msg)
          }
        })
      }
    })
  },
  xkxx: function(e, t, i) {
    var s;
    void 0 === (s = function() {
      return Backbone.Model.extend({
        initialize: function(e) {
          var t = this.toJSON(),
          i = {
            webAddress: "",
            dom: "_player",
            width: "640",
            height: "480",
            lowerVersion: "11.3.0",
            xi: null,
            flashvars: {
              show_flash_key: (new Date).getTime() + Math.random()
            },
            params: {
              allowScriptAccess: "always",
              allowfullscreen: "true",
              quality: "high",
              bgcolor: "#000000",
              wmode: "transparent"
            },
            attr: {
              id: "_xiu_flash_" + this.cid,
              name: "_xiu_flash_" + this.cid
            }
          };
          $.each(i,
          function(e, s) {
            _.isObject(s) ? i[e] = $.extend(s, t[e] || {}) : t[e] && (i[e] = t[e])
          }),
          this.set(i)
        }
      })
    }.call(t, i, t, e)) || (e.exports = s)
  },
  y6tw: function(e, t, i) {
    "use strict";
    var s = i("b+v/");
    e.exports = Backbone.View.extend({
      initialize: function() {
        var e = this;
        this.model = new(Backbone.Model.extend({})),
        this.model.on("change:inputData",
        function(t, i) {
          this.set({
            useNum: 1,
            productId: i.info.product_id
          }),
          e.renderInput()
        })
      },
      events: {
        'click [data-js-dom="useProps"]': "useProps"
      },
      useProps: function(e) {
        e.preventDefault();
        var t = $(e.currentTarget),
        i = t.data("productId") || "",
        s = ~~t.data("subType");
        1 === s && QX.event.trigger("anchorSign.open"),
        2 === s && QX.event.trigger("userPropaganda.open", {
          product_id: i
        }),
        3 === s && QX.event.trigger("topProp.use", this.model.toJSON()),
        4 === s && QX.event.trigger("anchorPromote.open", {
          toastDom: this.el
        }),
        QX.event.trigger("giftList.removeGsTip")
      },
      renderInput: function() {
        var e = this,
        t = this.model.get("inputData"),
        i = new s({
          el: this.$el.find("#propsInput"),
          cur: 1,
          max: t.info.total_num,
          min: 1,
          readOnly: !0
        });
        i.model.on("change:cur",
        function(t, i) {
          e.model.set("useNum", i)
        }),
        i.model.unset("cur").set("cur", 1)
      }
    })
  },
  y8mZ: function(e, t, i) {
    var s = i("nCB2"),
    a = i("eB8c");
    e.exports = new s({
      model: new a,
      nodeType: "banText",
      type: 2,
      toastMsg: function(e, t) {
        return {
          200 : "已将" + e + (1 == t ? "禁言": "恢复发言"),
          201 : "禁言需要管理员权限"
        }
      }
    })
  },
  yBwq: function(e, t) {
    e.exports = '<a href="javascript:void(0);"><i class="xiu-ico xiu-ico-download" title="下载">&#xe641;</i>下载</a><div class="tip-block nav-appdown-tip top-appdown-tip _roomDownloadTip" style="display: none;"><div class="arr arr-top" style="left:43%;"><div class="arr-in"></div></div><div class="qr"></div>扫码下载奇秀app</div>'
  },
  yD5P: function(e, t) {
    e.exports = Backbone.Model.extend({
      urlRoot: "/api/room/sendStar",
      defaults: {
        myStar: 0,
        maxStar: 0,
        isVip: 0,
        starRule: [1, 66, 188],
        desc: ""
      },
      initialize: function() {},
      subSave: function() {
        this.save(null, {
          type: "post",
          dataType: "json",
          data: {
            to_uid: this.get("userId"),
            room_id: this.get("roomId"),
            num: this.get("num")
          },
          success: function(e, t) {
            e.trigger("success", t)
          },
          error: function(e, t) {
            e.trigger("error", t)
          }
        })
      }
    })
  },
  yMiT: function(e, t, i) {
    var s;
    void 0 === (s = function() {
      return Backbone.Model.extend({
        urlRoot: "/recharge/rechargeRoom",
        defaults: {
          qds: [],
          channels: {},
          channel_css: {},
          payType: "",
          more_money: 0,
          recharge: {}
        },
        initialize: function() {},
        getData: function(e, t, i) {
          this.fetch({
            patch: !0,
            type: "post",
            dataType: "json",
            data: e,
            cache: !1,
            success: function(e, s) {
              "200" == s.code ? t && t(s) : i && i(s)
            },
            error: function(e, t) {
              i && i(t)
            }
          })
        }
      })
    }.apply(t, [])) || (e.exports = s)
  },
  yZ9V: function(e, t) {
    e.exports = {
      anchorLevel: '<div class="ico-lv zb-lv lv<%= level %>"><div class="info-anchor-lv info-tip"><i class="i-arr"><em></em></i><ul class="info-anchor-lv-num"><li class="info-anchor-lv-item"><strong>经验值</strong><%= experience %></li><li class="info-anchor-lv-item surplus"><strong>还需</strong><%= surplus %></li></ul><div class="info-anchor-lv-bar"><span class="info-anchor-lv-bar-ratio" style="width:<%= percent %>;"></span></div></div></div>',
      anchorStarWrap: '<span class="info-anchor-star _anchorStar"></span>',
      anchorStar: '<i></i>星光<em title="<%= starNum %>"><%= starNumSimple %></em>'
    }
  },
  ykb1: function(e, t) {
    e.exports = '<div id="kb-notice-dialog-<%= id %>" style="display:block" class="new-start-dialog <%= content.out_look_type && ({1:"start-dialog-year2018-base2 new-start-year2018-bg1",2:"start-dialog-year2018-base2 new-start-year2018-bg2",3:"start-dialog-year2018-base2 new-start-year2018-bg3",4:"start-dialog-year2018-base2 new-start-year2018-bg4"}[content.out_look_type]) || "start-dialog-sya" %>" data-pb-block="15041040"><a class="close" href="javascript:;" title="关闭" data-pb-rseat="2"><span class="b">关闭</span></a><div class="figure"><img class="avatar" src="<%= content.user_icon %>"><b class="dec"></b></div><div class="content"><h5><span class="name"><%= _.escape(content.nick_name) %></span></h5><p class="ct">开始直播啦</p></div><div class="act"><a class="btn btn-sys-e" href="<%= content.link_url %>" target="room" data-time="5" data-pb-rseat="1">立即前往</a></div></div>'
  },
  z01J: function(e, t, i) {
    var s = i("sk80"),
    a = (s.tools.ishow, s.ui.Dialog),
    o = i("48rB"),
    n = i("CWe+"),
    l = i("6imf"),
    r = i("3TFm");
    e.exports = Backbone.View.extend({
      model: new n,
      events: {
        "click ._save": "saveCanvas",
        "click ._reset": "resetCanvas",
        "click ._close": "closeCanvas"
      },
      template: {
        lack: _.template(o.lack),
        evaluate: _.template(o.evaluate),
        upperLimit: _.template(o.upperLimit),
        error: _.template(o.error)
      },
      initialize: function(e) {
        _.extend(this.props = {},
        e),
        this.tmplView = new l,
        this.reset(!0),
        this.initFlash2JsFn(),
        this.listenEvents()
      },
      initCanvas: function(e) {
        if (!$.cookie("P00001")) return s.event.trigger("loginDialog.show"),
        !1;
        r.loadResource && this.model.set("tempList", this.model.get("nodeList")),
        this.resetCanvas(),
        this.model.set("gift", e),
        this.model.getData()
      },
      render: function(e) {
        0 === $("._layout").length && (this.setElement(this.props.el), this.$el.prepend(o.layout), this.setElement($("._layout", this.$el)), this.tmplView.setElement($(".tpl-block", this.$el)).render(), this.$tips = $("._tips", this.$el), this.$welcome = $("._welcome", this.$el), this.$save = $("._save", this.$el), this.$reset = $("._reset", this.$el), this.$tips.html(this.template.lack({
          num: e.min,
          name: e.pname
        })), this.trigger("open"));
        var t = this.model.get("data"),
        i = this.model.get("gift");
        r.loadResource ? (_.extend(t, {
          pic_png: i.pic_png,
          pname: i.name,
          price: i.price
        }), r.changeGift(t), this.paintPoints(this.model.get("tempList").join(""))) : (t.pic_png = i.pic_png, r.initGlobalObj(t))
      },
      listenEvents: function() {
        var e = this,
        t = this.model;
        this.on("closeCanvas",
        function() {
          r.loadResource && e.closeCanvas()
        }),
        t.on("success",
        function(t, i) {
          if (200 === i.code) {
            var s = i.data;
            t.set("saveBtnCanClick", !1),
            e.render(s)
          }
        }),
        t.on("change:nodeList",
        function(e, t) {
          e.set("num", t.length)
        }),
        t.on("change:num",
        function(t, i) {
          0 < i ? (e.$welcome.hide(), t.set("resetBtnCanClick", !0)) : (e.$welcome.show(), t.set("resetBtnCanClick", !1));
          var s = t.get("data").min,
          a = t.get("data").max;
          i < s ? e.renderLackTip() : i < a ? e.renderEvaluateTip() : e.renderUpperLimitTip()
        }),
        t.on("change:saveBtnCanClick",
        function(t, i) {
          e.$save[i ? "removeClass": "addClass"]("btn-disabled")
        }),
        t.on("change:resetBtnCanClick",
        function(t, i) {
          e.$reset[i ? "removeClass": "addClass"]("btn-disabled")
        }),
        this.tmplView.on("afterSave",
        function(e) {
          t.set({
            saveBtnCanClick: !0,
            resetBtnCanClick: !0
          })
        }),
        this.tmplView.on("cancel",
        function() {
          t.set({
            saveBtnCanClick: !0,
            resetBtnCanClick: !0
          })
        }),
        this.tmplView.on("useTmpl",
        function(t) {
          e.reset(!1, {
            saveBtnCanClick: !0,
            resetBtnCanClick: !0
          }),
          e.paintPoints(t.points)
        })
      },
      initFlash2JsFn: function() {
        window.ISHOW.personalGift || (window.ISHOW.personalGift = {}),
        window.ISHOW.personalGift = {
          addNode: _.bind(this.addNode, this),
          responseThumbnail: _.bind(this.responseThumbnail, this),
          failCallback: _.bind(this.flashFailCallback, this)
        }
      },
      addNode: function(e) {
        var t = this.model,
        i = function(e, t) {
          for (var i = [], s = Math.ceil(e.length / 6), a = 0; a < s; a++) {
            var o = 6 * a;
            i.push(e.substring(o, o + 6))
          }
          return i
        } (e);
        t.set("nodeList", t.get("nodeList").concat(i))
      },
      responseThumbnail: function(e) {
        this.tmplView.trigger("getThumbnail", e)
      },
      flashFailCallback: function(e) {
        this.closeCanvas(),
        new a({
          title: "提示",
          content: this.template.error,
          btn: [{
            clsName: "btn btn-sye",
            type: "def",
            text: "确定"
          }]
        })
      },
      renderLackTip: function() {
        var e = this.model;
        this.$tips.html(this.template.lack({
          num: e.get("data").min - e.get("num"),
          name: e.get("gift").name
        })),
        e.set("saveBtnCanClick", !1)
      },
      renderEvaluateTip: function() {
        var e = this.model;
        this.$tips.html(this.template.evaluate({
          num: e.get("num"),
          name: e.get("gift").name,
          money: e.get("gift").price * e.get("num")
        })),
        e.set("saveBtnCanClick", !0),
        e.set("resetBtnCanClick", !0)
      },
      renderUpperLimitTip: function() {
        var e = this.model;
        this.$tips.html(this.template.upperLimit({
          money: e.get("gift").price * e.get("num")
        })),
        e.set("saveBtnCanClick", !0),
        e.set("resetBtnCanClick", !0)
      },
      paintPoints: function(e) {
        r.loadResource && r.useTmpl(e)
      },
      saveCanvas: function() {
        var e = this.model;
        e.get("saveBtnCanClick") && (e.set("saveBtnCanClick", !1), e.set("resetBtnCanClick", !0), r.getThumbnail(this), this.tmplView.trigger("saveTmpl", {
          points: this.model.get("nodeList").join(""),
          type: 1
        }))
      },
      resetCanvas: function() {
        this.reset(!1),
        this.tmplView.clearSelection()
      },
      reset: function(e, t) {
        this.model.set(_.extend({
          num: -1,
          nodeList: [],
          saveBtnCanClick: !1,
          resetBtnCanClick: !1
        },
        t), {
          silent: e
        }),
        r.loadResource && r.resetDrawArea()
      },
      closeCanvas: function() {
        r.closeDrawArea(),
        this.remove(),
        this.model.set("gift", null),
        this.reset(!0),
        this.trigger("close")
      }
    })
  },
  zDUL: function(e, t, i) {
    var s, a;
    s = [i("clEN")],
    void 0 === (a = function(e) {
      var t = i("sk80"),
      s = t.tools.base,
      a = [];
      return Backbone.View.extend({
        template: _.template(e),
        el: "body",
        events: {
          "click #honour-notice-dialog .close": "close"
        },
        initialize: function() {
          this.timeFlag = 0,
          this.room_id = t.roomConfig.room_id,
          this.initReceivingMsg()
        },
        initReceivingMsg: function() {
          var e = this;
          t.event.on("socket.HONOUR_NOTICE",
          function(t) {
            var i = t.data.op_info;
            a.push({
              user_icon: i.user_icon,
              nick_name: i.nick_name,
              room_id: i.room_id,
              msg: i.msg,
              type: i.type
            }),
            e.detectMsgList()
          }),
          s.on("showKaiBo",
          function() {
            $("#honour-notice-dialog").css("bottom", "300px")
          })
        },
        render: function(e) {
          var t = $(this.template(e)),
          i = this;
          $("[id^=kb-notice-dialog]:visible").length && t.css("bottom", "300px"),
          $("body").append(t),
          this.timeFlag = setTimeout(function() {
            t.remove(),
            t = null,
            i.detectMsgList()
          },
          3e4)
        },
        close: function() {
          $("#honour-notice-dialog").remove(),
          this.timeFlag && (clearTimeout(this.timeFlag), this.timeFlag = 0),
          this.detectMsgList()
        },
        detectMsgList: function() {
          if (a.length) {
            var e = a.shift();
            e.room_id !== this.room_id && this.render(e)
          }
        }
      })
    }.apply(t, s)) || (e.exports = a)
  },
  zX0F: function(e, t) {
    e.exports = '<div class="popup-prompt popup-tuijiantu"><div class="pp-content"><%=content%></div><a href="javascript:;" class="pp-remove"><span class="ico-remove ico">关闭</span></a></div>'
  },
  zY0T: function(e, t, i) {
    "use strict";
    e.exports = Backbone.Model.extend({
      urlRoot: "/room/randomRoom",
      defaults: {
        excluded_room_ids: ""
      },
      initialize: function() {},
      getData: function(e) {
        var t = this;
        t.save({},
        {
          data: e,
          success: function(e, i) {
            200 === i.code ? t.trigger("ok", i.data) : t.trigger("fail", i.msg)
          },
          error: function(e, i) {
            t.trigger("fail", i.msg)
          }
        })
      }
    })
  },
  zwY2: function(e, t) {
    e.exports = Backbone.Model.extend({
      urlRoot: "/room/getUserPanel",
      initialize: function() {
        this.xhrObj = null
      },
      subSave: function(e) {
        this.xhrObj && this.xhrObj.abort();
        var t = {
          patch: !0,
          type: "post",
          dataType: "json",
          data: {
            room_id: e.room_id || 0,
            to_uid: e.user_id || 0
          },
          success: function(e, t) {
            e.trigger("success", e, t)
          },
          error: function(e, t) {
            e.trigger("error", e, t)
          }
        };
        return this.xhrObj = this.save(null, t),
        this.xhrObj
      }
    })
  }
});