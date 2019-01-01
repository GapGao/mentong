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
      welcome: {
        prefix: '',
        postfix: '',
      },
      thanks: {
        prefix: '',
        postfix: '',
      },
      delayedSending: {
        msg: '',
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
        state.mentongSetting = Object.assign(state.mentongSetting, mentongSetting);
      }
    },
    updateMentongStatus (state, { status }) {
      state.mentong.status = status;
    },
  },
});

export default store;
