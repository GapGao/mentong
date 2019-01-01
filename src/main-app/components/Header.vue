

<template>
  <div class="header">
    <div class="title">{{ title }}</div>
    <div v-if="showExpired" class="expired">过期时间 {{ user.expiredAt | dateFormat }}，如需充值请联系 <span class="manager" @click="onShowWx">管理员</span></div>
    <div class="user">
      <el-popover
        placement="bottom"
        width="200"
        trigger="click"
      >
        <ul class="operation">
          <li class="item" @click="onShowWx">联系管理员</li>
          <li class="item" @click="logout">退出</li>
        </ul>
        <div slot="reference" class="account">{{ user.account }}</div>
      </el-popover>
    </div>
  </div>
</template>

<script>
import moment from 'moment';
import { mapState } from 'vuex';
import { logout } from '../apis/user';

export default {
  computed: {
    ...mapState(['user']),
    title () {
      return this.$route.meta.title || '奇秀直播助理';
    },
    showExpired () {
      return moment().add(3, 'days').isAfter(moment(this.user.expiredAt));
    }
  },
  methods: {
    logout () {
      logout()
      .then(() => window.location.href = '/')
      .catch((e) => {
        this.$message(e.body ? e.body.message : '服务器错误');
      });
    },
  }
}
</script>

<style scope>
  .header {
    position: relative;
    height: 100%;
    border-bottom: 1px solid rgba(0,0,0,0.15);
    padding: 0 20px;
  }

  .title {
    display: inline-block;
    line-height: 60px;
    font-size: 20px;
    color: #5c6170;
    font-weight: 500;
  }

  .user {
    position: absolute;
    top: 0;
    right: 20px;
    height: 60px;
    font-size: 16px;
    line-height: 60px;
    font-size: 14px;
    cursor: pointer;
  }

  .account {
    padding: 0 20px;
  }

  .user:hover {
    background: #f4f4f6;
  }
  
  .item {
    line-height: 32px;
    padding: 5px 16px;
    cursor: pointer;
    margin: 0 -12px;
  }

  .item:hover {
    background: #f4f4f6;
  }

  .wexin {
    width: 100%;
  }

  .expired {
    display: inline-block;
    color: #F56C6C;
    margin-left: 8px;
    font-size: 12px;
  }

  .manager {
    cursor: pointer;
  }
  
</style>
