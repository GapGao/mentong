import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    user: {
      id: '123',
      account: '123',
      password: '123',
      expiredAt: '123',
    },
    mentong: {
      id: null,
      userName: '',
      nickName: '',
      isCurrent: true,
      loginAt: null,
      status: false,
    },
    mentongSetting: {
      roomId: null,
      welcomeLevel: 1,
      welcome: [{
        prefix: '',
        postfix: '',
      }],
      thanks: [{
        prefix: '',
        postfix: '',
      }],
      follow: [{
        prefix: '',
        postfix: '',
      }],
      designated: [{
        msg: '',
        res: '',
      }],
      delayedSending: {
        msgs: [{ msg: '' }],
        minutes: 1,
      },
    },
  },
  mutations: {
    updateUser (state, { user }) {
      state.user = user;
    },
    updateMentong (state, { mentong, mentongSetting }) {
      if (mentong) {
        state.mentong = Object.assign(state.mentong, mentong);
      }
      if (mentongSetting) {
        const { roomId, welcome, welcomeLevel, thanks, follow, designated, delayedSending } = mentongSetting;
        state.mentongSetting.roomId = roomId;
        if (welcome && welcome.length) {
          state.mentongSetting.welcome = welcome;
        }
        if (welcomeLevel) {
          state.mentongSetting.welcomeLevel = welcomeLevel;
        }
        if (thanks && thanks.length) {
          state.mentongSetting.thanks = thanks;
        }
        if (follow && follow.length) {
          state.mentongSetting.follow = follow;
        }
        if (designated && designated.length) {
          state.mentongSetting.designated = designated;
        }
        if (delayedSending) {
          if (delayedSending.msgs.length) {
            state.mentongSetting.delayedSending.msgs = delayedSending.msgs;
          }
          if (delayedSending.minutes) {
            state.mentongSetting.delayedSending.minutes = delayedSending.minutes;
          }
        }
      }
    },
    updateMentongStatus (state, { status }) {
      state.mentong.status = status;
    },
    addSetting (state, { type }) {
      if (type === 'delayedSending') {
        state.mentongSetting.delayedSending.msgs.push({ msg: '' });
      } else {
        state.mentongSetting[type].push({
          prefix: '',
          postfix: '',
        });
      }
    },
    removeSetting(state, { type, index }) {
      if (type === 'delayedSending') {
        state.mentongSetting.delayedSending.msgs.splice(index, 1);
      } else {
        state.mentongSetting[type].splice(index, 1);
      }
    },
  },
});

export default store;
