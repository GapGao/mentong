

<template>
  <div class="header">
    <div class="title">{{ title }}</div>
    <div class="expired">过期时间 {{ expiredAt }}，如需充值请联系 <span class="manager" @click="onShowWx">管理员</span></div>
    <div class="user">
      <el-popover
        placement="bottom"
        width="200"
        trigger="click"
      >
        <ul class="operation">
          <li class="item" @click="onShowWx">联系管理员</li>
          <li class="item">退出</li>
        </ul>
        <div slot="reference" class="account">账号</div>
      </el-popover>
    </div>
  </div>
</template>

<script>
import moment from 'moment';

export default {
  data () {
    return {
      expiredAt: moment().format('YYYY-MM-DD'),
    }
  },
  computed: {
    title () {
      return this.$route.meta.title || '奇秀直播助理';
    }
  },
  methods: {
    onShowWx () {
      const h = this.$createElement;
      this.$msgbox({
        title: '管理员微信二维码',
        message: h('div', null, [
          h('img', {
            attrs: {
              src: '/images/wexin.jpg',
            },
            class: 'wexin',
          }),
        ]),
        distinguishCancelAndClose: true,
        lockScroll: true,
        showConfirmButton: false,
        center: true,
      });
    }
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
