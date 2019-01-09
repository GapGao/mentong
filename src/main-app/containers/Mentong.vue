<template>
  <div>
    <el-steps :active="action" align-center>
      <el-step title="步骤1" description="请先申请一个爱奇艺账号，取一个自己喜欢的名字，用爱奇艺APP登录该账号，使用APP扫点击“扫码登录”生成的二维码，登录账号"></el-step>
      <el-step title="步骤2" description="设置房间号，观众进入，收到礼物，定时发送等消息的设置，完成后点击确认保存设置，有些消息会不合法，请尝试设置合法的消息，消息随机发送，开通贵族或守护，设置管理员等会自动感谢或恭喜"></el-step>
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
            <el-button v-if="mentong.id && !needLogin" type="primary" size="medium" class="change" @click="getQrcodeTokenUrl">换账号</el-button>
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
              <div v-for="(welcome, index) in mentongSetting.welcome" class="setting-item">
                <el-input v-model="welcome.prefix" placeholder="前缀" clearable>
                  <template slot="append">昵称</template>
                </el-input>
                <el-input v-model="welcome.postfix" class="postfix" placeholder="后缀" clearable></el-input>
                <div v-if="mentongSetting.welcome.length > 1" class="remove" @click="removeSetting({ type: 'welcome', index })"><span class="el-icon-remove-outline"></span></div>
              </div>
              <div class="add" v-if="mentongSetting.welcome.length < 5" @click="addSetting({ type: 'welcome' })"><span class="el-icon-circle-plus-outline"></span></div>
            </el-form-item>
            <el-form-item label="礼物感谢语">
              <div v-for="(thanks, index) in mentongSetting.thanks" class="setting-item">
                 <el-input v-model="thanks.prefix" placeholder="前缀" clearable>
                  <template slot="append">昵称</template>
                </el-input>
                <el-input v-model="thanks.postfix" class="postfix" placeholder="后缀" clearable></el-input>
                <div v-if="mentongSetting.thanks.length > 1" class="remove" @click="removeSetting({ type: 'thanks', index })"><span class="el-icon-remove-outline"></span></div>
              </div>
              <div class="add" v-if="mentongSetting.thanks.length < 5" @click="addSetting({ type: 'thanks' })"><span class="el-icon-circle-plus-outline"></span></div>
            </el-form-item>
            <el-form-item label="关注感谢语">
              <div v-for="(follow, index) in mentongSetting.follow" class="setting-item">
                <el-input v-model="follow.prefix" placeholder="前缀" clearable>
                  <template slot="append">昵称</template>
                </el-input>
                <el-input v-model="follow.postfix" class="postfix" placeholder="后缀" clearable></el-input>
                <div v-if="mentongSetting.follow.length > 1" class="remove" @click="removeSetting({ type: 'follow', index })"><span class="el-icon-remove-outline"></span></div>
              </div>
              <div class="add" v-if="mentongSetting.follow.length < 5" @click="addSetting({ type: 'follow' })"><span class="el-icon-circle-plus-outline"></span></div>
            </el-form-item>
            <el-form-item label="定时发送">
              <div v-for="(msg, index) in mentongSetting.delayedSending.msgs" class="delayed-sending setting-item">
                <el-input v-model="msg.msg" clearable></el-input>
                <div v-if="mentongSetting.delayedSending.msgs.length > 1" class="remove" @click="removeSetting({ type: 'delayedSending', index })"><span class="el-icon-remove-outline"></span></div>
              </div>
              <div class="add" v-if="mentongSetting.delayedSending.msgs.length < 5" @click="addSetting({ type: 'delayedSending' })"><span class="el-icon-circle-plus-outline"></span></div>
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
    ...mapMutations(['updateMentong', 'updateMentongStatus', 'addSetting', 'removeSetting']),
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
      const setting = { ...this.mentongSetting };
      const { welcome, thanks, follow, delayedSending } = setting;
      setting.welcome = welcome.filter(({ prefix, postfix }) => (prefix || postfix));
      setting.thanks = thanks.filter(({ prefix, postfix }) => (prefix || postfix));
      setting.follow = follow.filter(({ prefix, postfix }) => (prefix || postfix));
      setting.delayedSending.msgs = delayedSending.msgs.filter(({ msg }) => msg);

      updateMengongSetting(this.mentong.id, setting)
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
  }

  .el-card__body:after {
    clear: both;
    content: '';
    overflow: hidden;
    height: 0;
    display: block;
  }

  .mentong-title {
    font-size: 16px;
    line-height: 32px;
    text-align: center;
    margin-bottom: 15px;
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
  
  .delayed-sending {
    margin-bottom: 12px;
  }

  .setting-item {
    position: relative;
    width: 85%;
    margin-bottom: 10px;
  }

  .remove {
    position: absolute;
    font-size: 20px;
    right: -35px;
    top: 28px;
    cursor: pointer;
  }

  .delayed-sending .remove {
    top: 0;
  }

  .add {
    font-size: 20px;
    cursor: pointer;
    width: 20px;
  }
  
</style>
