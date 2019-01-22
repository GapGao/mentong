<template>
  <div>
    <!-- <iframe id="login_frame" height="500px" scrolling="no" width="460px" frameborder="0" src="//www.pps.tv/iframe/loginreg"></iframe> -->
    <el-steps :active="action" align-center>
      <el-step
        title="步骤1"
        description="请先申请一个爱奇艺账号，取一个自己喜欢的名字，用爱奇艺APP登录该账号，使用APP扫点击“扫码登录”生成的二维码，登录账号"
      ></el-step>
      <el-step
        title="步骤2"
        description="设置房间号，观众进入，收到礼物，定时发送等消息的设置，完成后点击确认保存设置，有些消息会不合法，请尝试设置合法的消息，消息随机发送。表情请输入文字如[大笑][开心][挑眉]等，发消息时会自动识别替换。贵族或守护，贡献榜，设置管理员等会自动添加进消息，自动感谢或恭喜"
      ></el-step>
      <el-step
        title="步骤3"
        description="点击启动/关闭门童，每次启动持续6小时，然后需要手动重新启动，启动后此页面可以关闭。账号退出，手动关闭都会导致门童下线。聊天机器人会在消息中有[门童昵称]或[@门童昵称]时会触发，请尽情调戏门童吧~"
      ></el-step>
    </el-steps>
    <el-row :gutter="12" class="actions">
      <el-col :span="6">
        <el-card shadow="hover" class="action">
          <div class="mentong-title">门童账号</div>
          <el-form label-width="40px" :model="mentong">
            <el-form-item label="账号">
              <el-input v-model="mentong.userName" disabled></el-input>
            </el-form-item>
          </el-form>
          <el-form label-width="40px" :inline="true" :model="mentong">
            <el-form-item label="昵称" class="nick-name">
              <el-input v-model="mentong.nickName" :disabled="!editName"></el-input>
            </el-form-item>
            <el-form-item class="edit-name">
              <el-button
                type="primary"
                @click="editNickName"
                :disabled="!mentong.nickName"
              >{{ editName ? '保存' : '修改' }}</el-button>
            </el-form-item>
            <el-button
              v-if="mentong.id && !needLogin"
              type="primary"
              size="medium"
              class="change"
              @click="getQrcodeTokenUrl"
            >换账号</el-button>
            <el-button
              type="primary"
              size="medium"
              class="get-qrcode"
              @click="getQrcodeTokenUrl"
              :disabled="!needLogin"
            >{{ needLogin ? '扫码登录' : '已登录' }}</el-button>
          </el-form>
        </el-card>
      </el-col>
      <el-col :span="13">
        <el-card shadow="hover" class="action">
          <div class="mentong-title">门童设置</div>
          <el-form label-width="100px" :model="mentongSetting" class="setting-item">
            <el-form-item label="房间号">
              <el-input v-model="mentongSetting.roomId" clearable></el-input>
            </el-form-item>
            <el-form-item label="欢迎魅力等级限制">
              <el-input-number
                v-model="mentongSetting.welcomeLevel"
                class="postfix"
                :min="1"
                label="欢迎等级限制"
              ></el-input-number>
            </el-form-item>
            <el-form-item label="欢迎语">
              <div v-for="(welcome, index) in mentongSetting.welcome" class="setting-item">
                <el-autocomplete v-model="welcome.prefix" :fetch-suggestions="querySearch(welcomeSug)" @select="(item) => welcomeSelect(item, index)" placeholder="前缀" clearable>
                  <template slot="append">昵称</template>
                </el-autocomplete>
                <el-autocomplete v-model="welcome.postfix" :fetch-suggestions="querySearch(welcomeSug)" @select="welcomeSelect(item, index)" class="postfix" placeholder="后缀" clearable></el-autocomplete>
                <div
                  v-if="mentongSetting.welcome.length > 1"
                  class="remove"
                  @click="removeSetting({ type: 'welcome', index })"
                >
                  <span class="el-icon-remove-outline"></span>
                </div>
              </div>
              <div
                class="add"
                v-if="mentongSetting.welcome.length < 5"
                @click="addSetting({ type: 'welcome' })"
              >
                <span class="el-icon-circle-plus-outline"></span>
              </div>
            </el-form-item>
            <el-form-item label="礼物感谢语">
              <div v-for="(thanks, index) in mentongSetting.thanks" class="setting-item">
                <el-autocomplete v-model="thanks.prefix" :fetch-suggestions="querySearch(thanksSug)" @select="(item) => thanksSelect(item, index)" placeholder="前缀" clearable>
                  <template slot="append">昵称</template>
                </el-autocomplete>
                <el-autocomplete v-model="thanks.postfix" :fetch-suggestions="querySearch(thanksSug)" @select="(item) => thanksSelect(item, index)" class="postfix" placeholder="后缀" clearable>
                  <template slot="append">几个什么</template>
                </el-autocomplete>
                <div
                  v-if="mentongSetting.thanks.length > 1"
                  class="remove"
                  @click="removeSetting({ type: 'thanks', index })"
                >
                  <span class="el-icon-remove-outline"></span>
                </div>
              </div>
              <div
                class="add"
                v-if="mentongSetting.thanks.length < 5"
                @click="addSetting({ type: 'thanks' })"
              >
                <span class="el-icon-circle-plus-outline"></span>
              </div>
            </el-form-item>
            <el-form-item label="关注感谢语">
              <div v-for="(follow, index) in mentongSetting.follow" class="setting-item">
                <el-autocomplete v-model="follow.prefix" :fetch-suggestions="querySearch(followSug)" @select="(item) => followSelect(item, index)" placeholder="前缀" clearable>
                  <template slot="append">昵称</template>
                </el-autocomplete>
                <el-autocomplete v-model="follow.postfix" :fetch-suggestions="querySearch(followSug)" @select="(item) => followSelect(item, index)" class="postfix" placeholder="后缀" clearable></el-autocomplete>
                <div
                  v-if="mentongSetting.follow.length > 1"
                  class="remove"
                  @click="removeSetting({ type: 'follow', index })"
                >
                  <span class="el-icon-remove-outline"></span>
                </div>
              </div>
              <div
                class="add"
                v-if="mentongSetting.follow.length < 5"
                @click="addSetting({ type: 'follow' })"
              >
                <span class="el-icon-circle-plus-outline"></span>
              </div>
            </el-form-item>
            <el-form-item label="指定消息回复（多对一 以中文分号；分割）">
              <div v-for="(designated, index) in mentongSetting.designated" class="setting-item designatedmsg">
                <el-autocomplete v-model="designated.msg" :fetch-suggestions="querySearch(designatedSug)" @select="(item) => designatedSelect(item, index)" class="designated" placeholder="指定消息" clearable></el-autocomplete>
                <el-autocomplete v-model="designated.res" :fetch-suggestions="querySearch(designatedSug)" @select="(item) => designatedSelect(item, index)" class="designated" placeholder="指定回复" clearable></el-autocomplete>
                <div
                  v-if="mentongSetting.designated.length > 1"
                  class="remove"
                  @click="removeSetting({ type: 'designated', index })"
                >
                  <span class="el-icon-remove-outline"></span>
                </div>
              </div>
              <div
                class="add"
                v-if="mentongSetting.follow.length < 5"
                @click="addSetting({ type: 'designated' })"
              >
                <span class="el-icon-circle-plus-outline"></span>
              </div>
            </el-form-item>
            <el-form-item label="定时发送">
              <div v-for="(msg, index) in mentongSetting.delayedSending.msgs" class="delayed-sending setting-item">
                <el-autocomplete  :fetch-suggestions="querySearch(delayedSendingSug)" @select="(item) => delayedSendingSelect(item, index)" v-model="msg.msg" clearable></el-autocomplete>
                <div
                  v-if="mentongSetting.delayedSending.msgs.length > 1"
                  class="remove"
                  @click="removeSetting({ type: 'delayedSending', index })"
                >
                  <span class="el-icon-remove-outline"></span>
                </div>
              </div>
              <div
                class="add"
                v-if="mentongSetting.delayedSending.msgs.length < 5"
                @click="addSetting({ type: 'delayedSending' })"
              >
                <span class="el-icon-circle-plus-outline"></span>
              </div>
              <el-input-number
                v-model="mentongSetting.delayedSending.minutes"
                class="postfix"
                :min="1"
                :max="10"
                label="描述文字"
              ></el-input-number>
              <span class="minutes">分钟/次</span>
            </el-form-item>
            <el-button
              type="primary"
              size="medium"
              class="get-qrcode"
              @click="updateMengongSetting"
              :disabled="action === 1 || !mentongSetting.roomId"
            >确认</el-button>
          </el-form>
        </el-card>
      </el-col>
      <el-col :span="5">
        <el-card shadow="hover" class="action">
          <div class="mentong-title">门童状态</div>
          <el-form label-width="40px" :model="mentong">
            <div class="status-card">
              <span class="status-label">状态：</span>
              <span
                class="mentong-status"
                :class="{ open: mentong.status, close: !mentong.status }"
              >{{ mentong.status ? '开启' : '关闭' }}</span>
            </div>
            <el-button
              v-if="mentong.status"
              type="primary"
              size="medium"
              class="closeBtn"
              :disabled="action === 1"
              @click="closeMentong"
            >关闭</el-button>
            <el-button
              type="primary"
              size="medium"
              class="openBtn"
              :disabled="!mentong.status && (action === 1 || !mentong.id || !mentongSetting.roomId)"
              @click="openMentong"
            >{{ mentong.status ? '重启' : '启动' }}</el-button>
          </el-form>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import moment from "moment";
import {
  getQrcodeTokenUrl,
  isTokenLogin,
  updateMengongSetting,
  openMentong,
  closeMentong,
  getMentongStatus,
  editNickName
} from "../apis/mentong";

export default {
  data() {
    return {
      confirmSetting: false,
      timer: null,
      editName: false,
      welcomeSug: [
        { value: '欢迎<昵称>光临直播间', prefix: '欢迎', nick: '<昵称>', postfix: '光临直播间' },
        { value: '<昵称>，我一直默默等你回来', prefix: '', nick: '<昵称>', postfix: '，我一直默默等你回来' },
        { value: '欢迎土豪<昵称>，小伙伴夹道欢迎你', prefix: '欢迎土豪', nick: '<昵称>', postfix: '，小伙伴夹道欢迎你' },
        { value: '<昵称>，想死你了，你可算来了', prefix: '', nick: '<昵称>', postfix: '，想死你了，你可算来了' },
        { value: '<昵称>，客观里边请', prefix: '', nick: '<昵称>', postfix: '，客观里边请' },
        { value: '土豪<昵称>驾到，快闪开', prefix: '土豪', nick: '<昵称>', postfix: '驾到，快闪开' },
        { value: '欢迎<昵称>领导下来视察工作，快闪开', prefix: '欢迎', nick: '<昵称>', postfix: '领导下来视察工作，快闪开' },
        { value: '欢迎人见人爱，花见花开的<昵称>', prefix: '欢迎人见人爱，花见花开的', nick: '<昵称>', postfix: '' },
        { value: '土豪<昵称>，你的到来让房间蓬荜生辉', prefix: '土豪', nick: '<昵称>', postfix: '，你的到来让房间蓬荜生辉' },
        { value: '<昵称>，你可算回来了', prefix: '', nick: '<昵称>', postfix: '，你可算回来了' },
        { value: '<昵称>，欢迎回家', prefix: '', nick: '<昵称>', postfix: '，欢迎回家' },
        { value: '欢迎<昵称>回家', prefix: '欢迎', nick: '<昵称>', postfix: '回家' },
        { value: '<昵称>，等候多时了今天看点啥', prefix: '', nick: '<昵称>', postfix: '，等候多时了今天看点啥' },
        { value: '<昵称>你可不知道你不在的时间，想你想疯了', prefix: '', nick: '<昵称>', postfix: '你可不知道你不在的时间，想你想疯了' },
      ],
      thanksSug: [
        { value: '感谢<昵称>送出的', prefix: '感谢', nick: '<昵称>', postfix: '送出的' },
      ],
      followSug: [
        { value: '感谢<昵称>的关注，您的支持就是我的动力', prefix: '感谢', nick: '<昵称>', postfix: '的关注，您的支持就是我的动力' },
      ],
      designatedSug: [
        { value: '主播好漂亮；主播好帅-谢谢夸奖', msg: '主播好漂亮；主播好帅', res: '谢谢夸奖' },
        { value: '日；操；草；艹-请注意文明用语，房管比较严格', msg: '日；操；草；艹', res: '请注意文明用语，房管比较严格' },
        { value: '怎么卡房管；怎么卡房管？；怎么上房管；怎么上房管？；房管怎么卡；房管怎么卡？；房管怎么上；房管怎么上？-房管只要一个xxx就可以卡', msg: '怎么卡房管；怎么卡房管？；怎么上房管；怎么上房管？；房管怎么卡；房管怎么卡？；房管怎么上；房管怎么上？', res: '房管只要一个xxx就可以卡' },
      ],
      delayedSendingSug: [
        { value: '欢迎光临', msg: '欢迎光临' },
        { value: '谢谢对主播的支持与关爱', msg: '谢谢对主播的支持与关爱' },
      ],
    };
  },
  computed: {
    ...mapState(["mentong", "mentongSetting"]),
    needLogin() {
      if (!this.mentong.id) {
        return true;
      } else {
        return moment().isAfter(moment(this.mentong.loginAt).add(2, "day"));
      }
    },
    action() {
      if (this.needLogin) {
        return 1;
      }
      if (this.confirmSetting || this.mentong.status) {
        return 3;
      }
      return 2;
    }
  },
  methods: {
    ...mapMutations([
      "updateMentong",
      "updateMentongStatus",
      "addSetting",
      "removeSetting"
    ]),
    querySearch(sugs) {
      return (queryString, cb) => cb(sugs);
    },
    welcomeSelect(item, index) {
      this.mentongSetting.welcome[index].prefix = item.prefix;
      this.mentongSetting.welcome[index].postfix = item.postfix;
    },
    thanksSelect(item, index) {
      this.mentongSetting.thanks[index].prefix = item.prefix;
      this.mentongSetting.thanks[index].postfix = item.postfix;
    },
    followSelect(item, index) {
      this.mentongSetting.follow[index].prefix = item.prefix;
      this.mentongSetting.follow[index].postfix = item.postfix;
    },
    designatedSelect(item, index) {
      this.mentongSetting.designated[index].msg = item.msg;
      this.mentongSetting.designated[index].res = item.res;
    },
    delayedSendingSelect(item, index) {
      this.mentongSetting.delayedSending.msgs[index].msg = item.msg;
    },
    getQrcodeTokenUrl() {
      getQrcodeTokenUrl()
        .then(res => {
          this.onShowQrCode(res.body.url, res.body.token);
        })
        .catch(e => {
          this.$message(e.body ? e.body.message : "服务器错误");
        });
    },
    onShowQrCode(url, token) {
      const h = this.$createElement;
      this.$msgbox({
        title: "请使用爱奇艺APP扫码登录",
        message: h("div", null, [
          h("img", {
            attrs: {
              src: `/qrcode?url=${url}`
            },
            class: "qrcode"
          })
        ]),
        distinguishCancelAndClose: true,
        lockScroll: true,
        showConfirmButton: false,
        center: true,
        beforeClose(action, instance, done) {
          clearInterval(timer);
          done();
        }
      });
      const timer = setInterval(() => {
        isTokenLogin(token).then(res => {
          if (res.body.isLogin) {
            clearInterval(timer);
            const { mentong, mentongSetting } = res.body;
            this.$message("登录成功");
            this.updateMentong({ mentong, mentongSetting });
            this.$msgbox.close();
          }
          if (timer > 60) {
            this.$message("验证码已过期");
            clearInterval(timer);
            this.$msgbox.close();
          }
        });
      }, 1000);
    },
    updateMengongSetting() {
      const setting = { ...this.mentongSetting };
      const { welcome, thanks, follow, designated, delayedSending } = setting;
      setting.welcome = welcome.filter(
        ({ prefix, postfix }) => prefix || postfix
      );
      setting.thanks = thanks.filter(
        ({ prefix, postfix }) => prefix || postfix
      );
      setting.follow = follow.filter(
        ({ prefix, postfix }) => prefix || postfix
      );
      setting.designated = designated.filter(({ msg, res }) => msg && res);
      setting.delayedSending.msgs = delayedSending.msgs.filter(
        ({ msg }) => msg
      );

      updateMengongSetting(this.mentong.id, setting)
        .then(() => {
          this.confirmSetting = true;
          this.$message("修改成功");
        })
        .catch(e => {
          this.$message(e.body ? e.body.message : "服务器错误");
        });
    },
    openMentong() {
      openMentong(this.mentong.id)
        .then(() => {
          this.$message("启动成功");
          this.updateMentongStatus({ status: true });
          clearInterval(this.timer);
          this.timer = setInterval(() => {
            this.getMentongStatus();
          }, 1000 * 60);
        })
        .catch(e => {
          this.updateMentongStatus({ status: false });
          this.$message(e.body ? e.body.message : "服务器错误");
        });
    },
    closeMentong() {
      closeMentong(this.mentong.id)
        .then(() => {
          this.$message("关闭成功");
          clearInterval(this.timer);
          this.updateMentongStatus({ status: false });
        })
        .catch(e => {
          this.updateMentongStatus({ status: false });
          this.$message(e.body ? e.body.message : "服务器错误");
        });
    },
    getMentongStatus() {
      getMentongStatus(this.mentong.id)
        .then(res => {
          this.updateMentongStatus({ status: res.body.status });
          if (!res.body.status) {
            clearInterval(this.timer);
          }
        })
        .catch(e => {
          this.updateMentongStatus({ status: false });
          this.$message(e.body ? e.body.message : "服务器错误");
        });
    },
    editNickName() {
      if (this.editName) {
        editNickName(this.mentong.id, this.mentong.nickName)
          .then(() => {
            this.editName = false;
            this.$message("修改成功");
          })
          .catch(e => {
            this.$message(e.body ? e.body.message : "服务器错误");
          });
      } else {
        this.editName = true;
      }
    },
  },
  mounted() {
    if (this.mentong.id && this.mentong.status) {
      clearInterval(this.timer);
      this.timer = setInterval(() => {
        this.getMentongStatus();
      }, 1000 * 60);
    }
  },
  destroyed() {
    clearInterval(this.timer);
  }
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
  content: "";
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
  color: #67c23a;
}

.mentong-status.close {
  color: #f56c6c;
}

.qrcode {
  width: 100%;
}

.closeBtn {
  margin-left: 12px;
}

.openBtn,
.closeBtn {
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

.nick-name .el-form-item__content {
  width: 123px;
}

.el-form-item.edit-name {
  margin-right: 0;
}

.el-autocomplete.designated {
  width: 49%;
  display: inline-block;
}

.designatedmsg .remove {
  top: 0px;
}

.el-autocomplete {
  width: 100%;
}
</style>
