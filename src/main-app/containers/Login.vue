<template>
  <div class="login-container" @keydown.enter="enter">
    <div class="mask"></div>
    <el-card shadow="hover" class="login-model">
      <div class="logo"></div>
      <el-input class="ipt" v-model="account" placeholder="请输入账号"></el-input>
      <el-input class="ipt" v-model="password" type="password" placeholder="请输入密码"></el-input>
      <el-input v-if="mode === 'register'" class="ipt" v-model="confirmPassword" type="password" placeholder="请确认密码"></el-input>
      <el-input v-if="mode === 'register'" class="ipt" v-model="inviteCode" placeholder="请输入邀请码"></el-input>
      <el-button v-if="mode === 'login'" type="info" class="submit" @click="submit" :disabled="loginDisable">登录</el-button>
      <el-button v-if="mode === 'register'" type="info" class="submit" @click="register" :disabled="registerDisable">注册</el-button>
      <div class="to-register"><span class="contact" @click="onShowWx">联系管理员</span><span @click="onChangeMode">{{ mode === 'login' ? '注册账号' : '登录' }}</span></div>
    </el-card>
  </div>
</template>

<script>
import { login, register } from '../apis/user';

export default {
  data () {
    return {
      mode: 'login',
      account: '',
      password: '',
      confirmPassword: '',
      inviteCode: '',
    };
  },
  computed: {
    loginDisable () {
      return !this.account || !this.password;
    },
    registerDisable () {
      return !this.account || !this.password
      || !this.confirmPassword || !this.inviteCode
      || this.password !== this.confirmPassword;
    },
  },
  methods: {
    onChangeMode () {
      if (this.mode === 'login') {
        this.mode = 'register';
      } else {
        this.mode = 'login';
      }
    },
    submit () {
      login(this.account, this.password)
      .then(() => window.location.href = '/')
      .catch((e) => {
        this.$message(e.body ? e.body.message : '服务器错误');
      });
    },
    register () {
      register(this.account, this.password, this.confirmPassword, this.inviteCode)
      .then(() => {
        this.$message('注册成功');
        this.mode = 'login';
      })
      .catch((e) => {
        this.$message(e.body ? e.body.message : '服务器错误');
      });
    },
    enter () {
      if (this.mode = 'login') {
        this.submit();
      } else {
        this.register();
      }
    },
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
    },
  },
};
</script>

<style>
  * {
    font-size: 13px;
  }

  html, body {
    width: 100%;
    min-width: 1080px;
    height: 100%;
    margin: 0;
    padding: 0;
  }

  .login-container {
    position: relative;
    width: 100%;
    height: 100%;
    background: url('/images/bg.jpg') right top no-repeat;
    background-size: cover;
  }

  .login-container:after{
    position: absolute;
    left: 0;
    top: 0;
    content: '';
    width:100%;
    height:100%;
    background: inherit;
    filter: blur(4px);
    z-index: 2;
  }

  .mask {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    z-index: 3;
  }

  .login-model {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 340px;
    z-index: 4;
  }

  .el-card.is-hover-shadow:hover {
    box-shadow: 6px 0px 32px 0 rgba(0, 0, 0, 0.6);
  }

  .logo {
    width: 100%;
    height: 120px;
    background: url('/images/mentong.jpg') left top no-repeat;
    background-size: cover;
  }

  .ipt {
    margin-top: 10px;
  }
  
  .submit {
    width: 100%;
    margin-top: 20px;
    font-size: 16px;
    background: #222;
  }

  .submit:hover {
    background: #333;
  }

  .submit:focus, .submit:visited {
    background: #222;
  }

  .to-register {
    margin-top: 10px;
    font-size: 13px;
    color: #787E91;
    text-align: right;
  }

  .to-register>span:hover {
    cursor: pointer;
    color: #4FA1D6;
    text-decoration: underline;
  }

  .contact {
    margin-right: 12px;
  }

  .wexin {
    width: 100%;
  }
</style>
