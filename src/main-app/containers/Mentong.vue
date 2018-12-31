<template>
  <div>
    <el-steps :active="2" align-center>
      <el-step title="步骤1" description="请先申请一个爱奇艺账号，取一个自己喜欢的名字，用爱奇艺APP登录该账号，使用APP扫点击“扫码登录”生成的二维码，登录账号"></el-step>
      <el-step title="步骤2" description="设置房间号，观众进入，收到礼物，定时发送等消息的设置"></el-step>
      <el-step title="步骤3" description="点击启动/关闭门童，每次启动持续2小时，然后需要手动重新启动，关闭此页面，账号退出，手动退出都会导致门童下线"></el-step>
    </el-steps>
    <el-row :gutter="12" class="actions">
      <el-col :span="8">
        <el-card shadow="hover" class="action">
          <div class="mentong-title">门童账号</div>
          <el-form label-width="40px" :model="mentong">
            <el-form-item label="账号">
              <el-input v-model="mentong.userName" disabled></el-input>
            </el-form-item>
            <el-form-item label="昵称">
              <el-input v-model="mentong.nickname" disabled></el-input>
            </el-form-item>
            <el-button type="primary" size="medium" class="get-qrcode" @click="onShowQrCode">扫码登录</el-button>
          </el-form>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card shadow="hover" class="action">
          <div class="mentong-title">门童设置</div>
          <el-form label-width="80px" :model="setting">
            <el-form-item label="房间号">
              <el-input v-model="setting.roomId" :disabled="settingDisable" clearable></el-input>
            </el-form-item>
            <el-form-item label="欢迎语">
              <el-input v-model="setting.welcome.prefix" placeholder="前缀" :disabled="settingDisable" clearable>
                <template slot="append">昵称</template>
              </el-input>
              <el-input v-model="setting.welcome.postfix" class="postfix" placeholder="后缀" :disabled="settingDisable" clearable></el-input>
            </el-form-item>
            <el-form-item label="感谢语">
              <el-input v-model="setting.thanks.prefix" placeholder="前缀" :disabled="settingDisable" clearable>
                <template slot="append">昵称</template>
              </el-input>
              <el-input v-model="setting.thanks.postfix" class="postfix" placeholder="后缀" :disabled="settingDisable" clearable></el-input>
            </el-form-item>
            <el-form-item label="定时发送">
              <el-input v-model="setting.delayedSending.msg" :disabled="settingDisable" clearable>
              </el-input>
              <el-input-number v-model="setting.delayedSending.minutes" class="postfix" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
              <span class="minutes">分钟/次</span>
            </el-form-item>
            <el-button type="primary" size="medium" class="get-qrcode">确认</el-button>
          </el-form>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card shadow="hover" class="action">
          <div class="mentong-title">门童状态</div>
          <el-form label-width="40px" :model="mentong">
            <div class="status-card">
              <span class="status-label">状态：</span>
              <span class="mentong-status" :class="{ open: status, close: !status }">{{ status ? '开启' : '关闭' }}</span>
            </div>
            <el-button type="primary" size="medium" class="get-qrcode" :disabled="opentDisable">启动</el-button>
          </el-form>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>

export default {
  data () {
    return {
      mentongDisable: false,
      settingDisable: false,
      opentDisable: false,
      status: false,
      mentong: {
        id: 1,
        userName: '17310859199',
        nickname: '偏爱牛轰轰',
        icon: 'http://www.iqiyipic.com/common/fix/headicons/male-130.png',
      },
      setting: {
        roomId: '',
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
      }
    }
  },
  methods: {
    onShowQrCode () {
      const h = this.$createElement;
      this.$msgbox({
        title: '请使用爱奇艺APP扫码登录',
        message: h('div', null, [
          h('img', {
            attrs: {
              src: `/api/qrcode?v=${new Date().getTime()}`,
            },
            class: 'qrcode',
          }),
        ]),
        distinguishCancelAndClose: true,
        lockScroll: true,
        showConfirmButton: false,
        center: true,
      });
    }
  }
};
</script>

<style scope>
  .actions {
    margin-top: 20px;
  }

  .action {
    height: 540px;
  }

  .mentong-title {
    font-size: 16px;
    line-height: 32px;
    text-align: center;
    margin: 15px 0;
  }
  
  .action {
    position: relative;
  }

  .get-qrcode {
    position: absolute;
    right: 20px;
  }

  .postfix {
    margin-top: 10px;
  }

  .minutes {
    color: #606266;
    font-size: 14px;
    margin-left: 8px;
  }

  .status-card {
    line-height: 40px;
    color: #606266;
  }

  .mentong-status.open {
    color: #67C23A;
  }

  .mentong-status.close {
    color: #F56C6C;
  }

  .qrcode {
    width: 100%;
  }
  
</style>
