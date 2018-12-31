<template>
  <div class="login-container">
    <div class="mask"></div>
    <el-card shadow="hover" class="login-model">
      <div class="logo"></div>
      <el-input class="ipt" v-model="account" placeholder="请输入账号"></el-input>
      <el-input class="ipt" v-model="password" type="password" placeholder="请输入密码"></el-input>
      <el-button type="info" class="submit" @click="submit">{{ mode === 'login' ? '登录' : '注册' }}</el-button>
      <div class="to-register" @click="onChangeMode">{{ mode === 'login' ? '注册账号' : '登录' }}</div>
    </el-card>
  </div>
</template>

<script>
import { login } from '../apis/user';

export default {
  data () {
    return {
      mode: 'login',
      account: '',
      password: '',
    };
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
      .then((err, res) => {
        console.log(err);
        console.log(res);
      })
    }
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
    height: 340px;
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
    position: absolute;
    right: 20px;
    bottom: 15px;
    font-size: 13px;
    color: #787E91;
    cursor: pointer;
  }

  .to-register:hover {
    color: #4FA1D6;
    text-decoration: underline;
  }

</style>

