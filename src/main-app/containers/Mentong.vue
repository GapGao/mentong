<template>
  <div>
    <el-steps :active="action" align-center>
      <el-step title="步骤1" description="请先申请一个爱奇艺账号，取一个自己喜欢的名字，用爱奇艺APP登录该账号，使用APP扫点击“扫码登录”生成的二维码，登录账号"></el-step>
      <el-step title="步骤2" description="设置房间号，观众进入，收到礼物，定时发送等消息的设置，完成后点击确认保存设置，有些消息会不合法，请尝试设置合法的消息"></el-step>
      <el-step title="步骤3" description="点击启动/关闭门童，每次启动持续6小时，然后需要手动重新启动，关闭此页面，账号退出，手动关闭都会导致门童下线"></el-step>
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
              <el-input v-model="mentong.nickName" disabled></el-input>
            </el-form-item>
            <el-button v-if="mentong.id" type="primary" size="medium" class="change" @click="getQrcodeTokenUrl">换账号</el-button>
            <el-button type="primary" size="medium" class="get-qrcode" @click="getQrcodeTokenUrl" :disabled="!needLogin">{{  needLogin ? '扫码登录' : '已登录' }}</el-button>
          </el-form>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card shadow="hover" class="action">
          <div class="mentong-title">门童设置</div>
          <el-form label-width="100px" :model="mentongSetting">
            <el-form-item label="房间号">
              <el-input v-model="mentongSetting.roomId" clearable></el-input>
            </el-form-item>
            <el-form-item label="欢迎语">
              <el-input v-model="mentongSetting.welcome.prefix" placeholder="前缀" clearable>
                <template slot="append">昵称</template>
              </el-input>
              <el-input v-model="mentongSetting.welcome.postfix" class="postfix" placeholder="后缀" clearable></el-input>
            </el-form-item>
            <el-form-item label="礼物感谢语">
              <el-input v-model="mentongSetting.thanks.prefix" placeholder="前缀" clearable>
                <template slot="append">昵称</template>
              </el-input>
              <el-input v-model="mentongSetting.thanks.postfix" class="postfix" placeholder="后缀" clearable></el-input>
            </el-form-item>
            <el-form-item label="关注感谢语">
              <el-input v-model="mentongSetting.follow.prefix" placeholder="前缀" clearable>
                <template slot="append">昵称</template>
              </el-input>
              <el-input v-model="mentongSetting.follow.postfix" class="postfix" placeholder="后缀" clearable></el-input>
            </el-form-item>
            <el-form-item label="定时发送">
              <el-input v-model="mentongSetting.delayedSending.msg" clearable>
              </el-input>
              <el-input-number v-model="mentongSetting.delayedSending.minutes" class="postfix" :min="1" :max="10" label="描述文字"></el-input-number>
              <span class="minutes">分钟/次</span>
            </el-form-item>
            <el-button type="primary" size="medium" class="get-qrcode" @click="updateMengongSetting" :disabled="action === 1 || !mentongSetting.roomId">确认</el-button>
          </el-form>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card shadow="hover" class="action">
          <div class="mentong-title">门童状态</div>
          <el-form label-width="40px" :model="mentong">
            <div class="status-card">
              <span class="status-label">状态：</span>
              <span class="mentong-status" :class="{ open: mentong.status, close: !mentong.status }">{{ mentong.status ? '开启' : '关闭' }}</span>
            </div>
            <el-button v-if="mentong.status" type="primary" size="medium" class="closeBtn" :disabled="action === 1" @click="closeMentong">关闭</el-button>
            <el-button type="primary" size="medium" class="openBtn" :disabled="!mentong.status && (action === 1 || !mentong.id || !mentongSetting.roomId)" @click="openMentong">{{ mentong.status ? '重启' : '启动' }}</el-button>
          </el-form>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import moment from 'moment';
import {
  getQrcodeTokenUrl,
  isTokenLogin,
  updateMengongSetting,
  openMentong,
  closeMentong,
  getMentongStatus,
} from '../apis/mentong';

export default {
  data () {
    return {
      confirmSetting: false,
      timer: null,
    };
  },
  computed: {
    ...mapState(['mentong', 'mentongSetting']),
    needLogin () {
      if (!this.mentong.id) {
        return true;
      } else {
        return moment().isAfter(moment(this.mentong.loginAt).add(1, 'day'));
      }
    },
    action () {
      if (this.needLogin) {
        return 1;
      }
      if (this.confirmSetting || this.mentong.status) {
        return 3
      }
      return 2;
    },
  },
  methods: {
    ...mapMutations(['updateMentong', 'updateMentongStatus']),
    getQrcodeTokenUrl () {
      getQrcodeTokenUrl()
      .then((res) => {
        this.onShowQrCode(res.body.url, res.body.token);
      })
      .catch((e) => {
        this.$message(e.body ? e.body.message : '服务器错误');
      });
    },
    onShowQrCode (url, token) {
      const h = this.$createElement;
      this.$msgbox({
        title: '请使用爱奇艺APP扫码登录',
        message: h('div', null, [
          h('img', {
            attrs: {
              src: `/qrcode?url=${url}`,
            },
            class: 'qrcode',
          }),
        ]),
        distinguishCancelAndClose: true,
        lockScroll: true,
        showConfirmButton: false,
        center: true,
        beforeClose (action, instance, done) {
          clearInterval(timer);
          done();
        },
      });
      const timer = setInterval(() => {
        isTokenLogin(token)
        .then((res) => {
          if (res.body.isLogin) {
            clearInterval(timer);
            const { mentong, mentongSetting } = res.body;
            this.$message('登录成功');
            this.updateMentong({ mentong, mentongSetting });
            this.$msgbox.close();
          }
          if (timer > 60) {
            this.$message('验证码已过期');
            clearInterval(timer);
            this.$msgbox.close();
          }
        });
      }, 1000);
    },
    updateMengongSetting () {
      updateMengongSetting(this.mentong.id, this.mentongSetting)
      .then(() => {
        this.confirmSetting = true;
        this.$message('修改成功');
      })
      .catch((e) => {
        this.$message(e.body ? e.body.message : '服务器错误');
      });
    },
    openMentong () {
      openMentong(this.mentong.id)
      .then(() => {
        this.$message('启动成功');
        this.updateMentongStatus({ status: true });
        clearInterval(this.timer);
        this.timer = setInterval(() => {
          this.getMentongStatus();
        }, 1000 * 60);
      })
      .catch((e) => {
        this.updateMentongStatus({ status: false });
        this.$message(e.body ? e.body.message : '服务器错误');
      });
    },
    closeMentong () {
      closeMentong(this.mentong.id)
      .then(() => {
        this.$message('关闭成功');
        clearInterval(this.timer);
        this.updateMentongStatus({ status: false });
      })
      .catch((e) => {
        this.updateMentongStatus({ status: false });
        this.$message(e.body ? e.body.message : '服务器错误');
      });
    },
    getMentongStatus () {
      getMentongStatus(this.mentong.id)
      .then((res) => {
        this.updateMentongStatus({ status: res.body.status });
        if (!res.body.status) {
          clearInterval(this.timer);
        }
      })
      .catch((e) => {
        this.updateMentongStatus({ status: false });
        this.$message(e.body ? e.body.message : '服务器错误');
      });
    },
  },
  mounted () {
    if (this.mentong.id && this.mentong.status) {
      clearInterval(this.timer);
      this.timer = setInterval(() => {
        this.getMentongStatus();
      }, 1000 * 60);
    }
  },
  destroyed () {
    clearInterval(this.timer);
  },
};
</script>

<style scope>
  .actions {
    margin-top: 20px;
    height: 100%;
  }

  .action {
    position: relative;
    height: 680px;
  }

  .mentong-title {
    font-size: 16px;
    line-height: 32px;
    text-align: center;
    margin: 15px 0;
  }
  
  .change {
    float: right;
    margin-left: 12px;
  }

  .get-qrcode {
    float: right;
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

  .closeBtn {
    margin-left: 12px;
  }

  .openBtn, .closeBtn {
    float: right;
  }
  
</style>
