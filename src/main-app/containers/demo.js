            

<!DOCTYPE html>
<html lang="zh-CN">
    <head>
        <meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=1">
        <meta http-equiv="content-type" content="text/html;charset=utf-8">
        <title>PPS影音登录注册-爱奇艺PPS影音</title>
        <meta name="description" lang="zh-CN" content="PPS影音用户登录注册页面，让您简单轻松地完成账号登录、账号注册，快速体验爱奇艺PPS影音高品质的产品与服务。"/>
            <link rel="shortcut icon" href="${metaIcon_3872}" type="image/icon"/>
    <link rel="apple-touch-icon-precomposed" sizes="114x114" href="${apppleIcon1_3872}">
    <link rel="apple-touch-icon-precomposed" sizes="72x72" href="${apppleIcon2_3872}">
                        <link href="//static.qiyi.com/css/common/v3-login/login_20180725.css" rel="stylesheet" type="text/css" />
        
                        

<script type="text/javascript">
    (function () {
		if (hasCookie('P00001') && hasCookie('P00003')) {
			var url = decodeURIComponent(''.replace(/%22|%27|%3E|%3C|%7B|%26|%3B/g, ''));
			if(url && url.split('/')[2]){
			    var urlArr=url.split('/')[2];
                var domainLevel = 2;
                urlArr = urlArr.split(".");
                urlArr = urlArr.slice(urlArr.length - domainLevel);
                if(urlArr.join(".")!="iqiyi.com" && urlArr.join(".")!="pps.tv"){
                    url = '//www.iqiyi.com/u/accountset';
                }
			}else{
			    url = '//www.iqiyi.com/u/accountset';
			}
			window.location.href = url;
		}
		function hasCookie(name) {
		    var res = null;
		    try {
		        var regex = new RegExp('(?:^|;\\s)' + name + '=([^;]*)');
		        res = regex.exec(document.cookie);
		    } catch(e) { }
			return res && res[1] !== '';
		}
	})();
</script>        <script type="text/javascript" src="//static.iqiyi.com/js/lib/sea1.2.js"></script>
    </head>
    
    <body class="">
        <input type="text" class="dn" data-newreg-usericon>
        <input type="text" class="dn" data-newreg-usernick>
        <input type="text" class="dn" data-newreg-pwdtoken>
                    <div data-init-loading>
                <div class="login-main-frame">
                    <div class="login-frame"> 
                        <div class="login-frame-top login-frame-load-ab">
                            <div class="login-frame-ti login-frame-ti-loading">
                                <div class="fla-loading"></div>
                                <p class="fla-load-t">请等待...</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                            <div class="dn" data-realcont>
                    <div class="" data-qipalogin-login>
                <div data-loginele="normalLogin">
    <div class="login-main-frame">
        <div class="login-frame  dn " data-loginele="passLogin" data-block-name="pcwlgndlg">
            <div class="login-frame-top">
                <div class="login-frame-ti">
                                            <a href="javascript:;" class="frame-close" data-frameClose rseat="psprt_close"></a>
                        <h2 class="login-title"><span class="title-dot"></span>登录</h2>
                                        <div class="info-container info-container-top" data-pwdloginbox="nameContainer">
                        <!-- 鼠标点击输入，添加类accountIn -->
                        <div class="country-container">
                            <span class="country-incon" data-pwdloginbox="zoneArea">
                                <a href="javascript:;" class="country-link" data-pwdloginbox='selectedZone' rseat="psprt_region"></a>
                                <i class="arrow-all" data-pwdloginbox='zoneArrow' rseat="psprt_region"></i>
                            </span>
                            <!-- arrow-all箭头向下 arrow-all-reverse箭头向上 -->
                            <div class="country_dropDown dn" data-pwdloginbox="zone"></div>
                        </div>
                        <p class="errorInfo vh" data-pwdloginbox="nameErr">
                            <span>手机号格式错误，请重新输入</span>
                        </p>
                        <!-- 去掉vh类，显示 -->
                        <div class="tip-container tip-account-container" data-pwdloginbox="nameInputArea">
                            <p class="tip-info" data-pwdloginbox="nameTip">请输入手机号或邮箱</p>
                            <input type="text" class="txt-info txt-account" data-pwdloginbox="name"/>
                            <div class="account_dropDown" data-pwdloginbox="loginMailSuggest" style="display: none;">
                                <div class="scroll-bar"></div>
                            </div>
                        </div>
                        <a href="javascript:;" class="re-register dn" data-pwdloginbox="goReg" rseat="pld_ar2reg">去注册</a>
                    </div>
                    <div class="info-container" data-pwdloginbox='pwdContainer'>
                        <p class="errorInfo vh" data-pwdloginbox="pwdErr">
                            <span>密码错误，请重新输入</span>
                        </p>
                        <div class="tip-container  tip-pwd-container" data-pwdloginbox="pwdInputArea">
                            <p class="tip-info" data-pwdloginbox="pwdTip">请输入密码</p>
                            <input type="password" class="txt-info txt-password" data-pwdloginbox="pwd" maxlength="20" data-pwdbak-name="loginpwd"/>
                            <input type="text" class="txt-info txt-password dn" data-pwdbak="loginpwd" maxlength="20"/>
                            </span>
                        </div>
                        <a href="javascript:;" class="eye-close" data-pwdloginbox="eye" rseat="pld_cpwd"></a>
                        <!-- eye-close为闭眼状态，eye-open为睁眼状态 -->
                    </div>
                    <div class="forget-pwd fr">
                        <a href="javascript:;" data-pwdloginbox="forgetPwdBtn">忘记密码</a>
                    </div>
                    <div class="forget-pwd fr" style="z-index: 2">
                        <div class="forget-pwd-dia dn" data-pwdloginbox="forgetPwdZone">
                            <p class="forget-pwd-que">忘记密码了?</p>
                            <a href="javascript:;" class="btn-green btn-getPwd" rseat="pld_fndpwd" data-findpwd>找回密码</a>
                            <a href="javascript:;" class="btn-green btn-info-login" rseat="pld_2smslgn" data-smsLogin>短信登录</a>
                        </div>
                    </div>
                    <a href="javascript:;" class="btn-green btn-login btn-gray" rseat="pld_lgbtn" data-pwdloginbox="loginBtn">登录</a>
                    
                </div>
            </div>
            <div class="login-frame-bottom">
                <p class="login-frame-ln">
                    <a href="javascript:;" class="fl" rseat="cmm_2reg" data-regist>注册</a>
                    <span class="fr">
                        <a href="javascript:;" rseat="cmm_2scan" data-qrLogin>手机扫码登录</a>
                        <i class="vertical-line"></i>
                        <a href="javascript:;" rseat="cmm_mrlgn" data-thirdLogin>其他方式登录</a>
                    </span>
                </p>
            </div>
            <div class="login-frame-top login-frame-ab dn" data-loginele="suc" data-block-name="pcwpwdlgnok">
                <div class="login-frame-ti">
                    <h2 class="login-title-ab">
                        <i class="correct-green"></i>登录成功</h2>
                    <div class="register-sus-container">
                        <div class="register-name-con">
                            <img src="" class="register-name" data-pwdloginbox="icon">
                        </div>
                        <p class="register-name-ed">
                            <span data-pwdloginbox="nick"></span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="login-frame dn" data-loginele="piccode">
            <div class="login-frame-top">
                <div class="login-frame-ti" data-loginele="wrapper" data-block-name="pcwlgnvcode"></div>
            </div>
        </div>
        <div class="login-frame dn" data-loginele="slidePiccode" data-block-name="pcwlgnslsh">
            <div class="login-frame-top">
                <div class="login-frame-ti">
                                            <a href="javascript:;" class="frame-close" data-frameClose rseat="psprt_close"></a>
                        <h2 class="login-title"><span class="title-dot"></span>登录</h2>
                                        <div id="slidePiccode">
                    </div>
                </div>
            </div>
        </div>
        <div class="login-frame dn" data-loginele="loding">
            <div class="login-frame-top login-frame-top-ab">
                <div class="login-frame-ti login-frame-ti-loading">
                    <div class="fla-loading"></div>
                    <p class="fla-load-t">请等待...</p>
                </div>
            </div>
        </div>
        <div class="login-frame dn" data-loginele="fengkong" data-block-name="hrisk">
            <div class="login-frame-top">
                <div class="login-frame-ti">
                                            <a href="javascript:;" class="frame-close" data-frameClose rseat="psprt_close"></a>
                                        <p class="risk-title risk-title-re"><i></i>环境存在风险，请通过以下方式验证登录</p>
                    <ul class="risk-container">
                        <li style="z-index:1;">
                            <span class="risk-item-ti" data-hit-pwdtip>
                                使用手机扫码登录
                            </span>
                            <a href="javascript:;" class="btn-green" rseat="cmm_2scan" data-qrLogin="hriskqr" rseat="hrisk2qrlgn">生成二维码</a>
                        </li>
                        <li class="dn" data-show="bindphone">
                            <span class="risk-item-ti">使用手机发送短信登录</span>
                            <a href="javascript:;" class="btn-green" data-fengkong-sendsms rseat="hrisk2upsms">短信登录</a>
                        </li>
                    </ul> 
                </div>
            </div>
            <div class="login-frame-bottom">
                <p class="login-frame-ln">
                    <a href="javascript:;" class="fl" rseat="cmm_2reg" data-regist>注册</a>
                    <span class="fr">
                        <a href="javascript:;" rseat="cmm_2scan" data-qrLogin>手机扫码登录</a>
                        <i class="vertical-line"></i>
                        <a href="javascript:;" rseat="cmm_mrlgn" data-thirdLogin>其他方式登录</a>
                    </span>
                </p>
            </div>
        </div>
        <div class="login-frame " data-loginele="codeLogin"></div>
        <div class="login-frame  dn " data-loginele="thirdLogin" data-block-name="pcwmrlgndlg">
            <div class="login-frame-top">
                <div class="login-frame-ti">
                                            <a href="javascript:;" class="frame-close" data-frameClose rseat="psprt_close"></a>
                        <h2 class="login-title"><span class="title-dot"></span>登录</h2>
                                        <p class="sub-title sub-title-ve">其他登录方式</p>
                    <div class="other-way-conta">
                        <a class="other-way-item sinaweibo" title="微博" j-delegate="newauthLoginBtn" data-sourceid="2" href="https://passport.pps.tv/apis/thirdparty/nlogin.action?type=2&isiframe=1&_pos=1&agenttype=78&verifyPhone=1&ptid=01010041010000000000" rseat="ol_go_wb"></a>
                        <a class="other-way-item qq" title="QQ" j-delegate="newauthLoginBtn" data-sourceid="4" href="https://passport.pps.tv/apis/thirdparty/nlogin.action?type=4&isiframe=1&_pos=1&agenttype=78&verifyPhone=1&ptid=01010041010000000000" rseat="ol_go_QQ"></a>
                        <a class="other-way-item weixin" title="微信" j-delegate="newauthLoginBtn" data-sourceid="29" href="https://passport.pps.tv/apis/thirdparty/nlogin.action?type=29&isiframe=1&_pos=1&agenttype=78&verifyPhone=1&ptid=01010041010000000000" rseat="ol_go_wx"></a>
                        <a class="other-way-item baidu" title="百度" j-delegate="newauthLoginBtn" data-sourceid="1" href="https://passport.pps.tv/apis/thirdparty/nlogin.action?type=1&isiframe=1&_pos=1&agenttype=78&verifyPhone=1&ptid=01010041010000000000" rseat="ol_go_bd"></a>
                        <a class="other-way-item zhifubao" title="支付宝" j-delegate="newauthLoginBtn" data-sourceid="5" href="https://passport.pps.tv/apis/thirdparty/nlogin.action?type=5&isiframe=1&_pos=1&agenttype=78&verifyPhone=1&ptid=01010041010000000000" rseat="ol_go_zfb"></a>
                        <a class="other-way-item xiaomi" title="小米" j-delegate="newauthLoginBtn" data-sourceid="30" href="https://passport.pps.tv/apis/thirdparty/nlogin.action?type=30&isiframe=1&_pos=1&agenttype=78&verifyPhone=1&ptid=01010041010000000000" rseat="ol_go_xm"></a>
                    </div>
                    <a href="javascript:;" class="txt-green-tip info-login-tip" rseat="psprt_go2sl" data-smsLogin>短信登录</a>
                </div>
            </div>
            <div class="login-frame-bottom">
                <p class="login-frame-ln">
                    <a href="javascript:;" class="fl" rseat="cmm_2reg" data-regist>注册</a>
                    <span class="fr">
                        <a href="javascript:;" rseat="cmm_lgn" data-passLogin>账号密码登录</a>
                        <i class="vertical-line"></i>
                        <a href="javascript:;" rseat="cmm_2scan" data-qrLogin>手机扫码登录</a>
                    </span>
                </p>
            </div>
        </div>
        <div class="login-frame dn" data-loginele="errLogin">
            <div class="login-frame-top">
                <div class="login-frame-ti login-frame-pas">
                                            <a href="javascript:;" class="frame-close" data-frameClose rseat="psprt_close"></a>
                                        <div class="fla-error">
                        <div class="playerror"></div>
                    </div>
                    <p class="fla-error-t">操作过于频繁，请稍后再试</p>
                    <a href="javascript:;" class="btn-green btn-login btn-next" data-loginele="errReturn">确定</a>
                </div>
            </div>
        </div>
        <!-- 安全风险提醒（撞库登录体验优化）-->
        <div class="login-frame dn" data-loginele="hit" data-block-name="pcwsklrtaft">
            <div class="login-frame-top">
                <div class="login-frame-ti">
                                            <a href="javascript:;" class="frame-close" data-frameClose rseat="psprt_close"></a>
                                        <p class="risk-title"><i></i><span class="fs12">检测到您的账号存在风险</span></p>
                    <ul class="risk-container">
                        <li style="z-index:1;">
                            <span class="risk-item-ti" data-hit-pwdtip>
                                <i class="list-square"></i>密码存在泄露风险
                            </span>
                            <a href="javascript:;" class="btn-green" data-url="//passport.iqiyi.com/pages/secure/password/modify_pwd.action" data-type="modifypwd" rseat="CoAttack_tip_chgpwd">修改密码</a>
                            <div class="risk-ques-con" data-hit-pwdcont>
                                <p class="ques-title">您的密码存在风险，可能是因为</p>
                                <p class="ques-item">- 密码过于简单；</p>
                                <p class="ques-item">- 在多平台上使用相同的密码；</p>
                                <p class="ques-item">- 在有风险的网络环境(比如网吧)输入密码登录过；</p>
                            </div>
                        </li>
                        <li class="dn" data-show="bindphone">
                            <span class="risk-item-ti"><i class="list-square"></i>没有绑定手机号</span>
                            <a href="javascript:;" class="btn-green" data-url="//passport.iqiyi.com/pages/secure/account/bind_phone.action" data-type="bindphone" rseat="p2tlc_2bndphn">绑定手机号</a>
                        </li>
                        <li class="dn" data-show="verifyemail"> 
                            <span class="risk-item-ti"><i class="list-square"></i>邮箱未验证</span>
                            <a href="javascript:;" data-url="//passport.iqiyi.com/pages/secure/index.action" class="btn-green" data-type="verifyemail" rseat="p2tlc_2vrfyml">验证邮箱</a>
                        </li>
                    </ul>    
                </div>
            </div>
        </div>
    </div>
</div>            </div>
            <div class=" dn " data-qipalogin-reg>
                                    <!-- 开始 -->
<div data-step="one" class="login-main-frame ">
    <div class="login-frame " data-block-name="pcwregdlg" data-regbox="mobile">
        <div class="login-frame-top">
            <div class="login-frame-ti">
                <a href="javascript:;" class="frame-close" data-frameClose rseat="psprt_close"></a>
                <h2 class="login-title"><span class="title-dot"></span>注册</h2>
                <div class="info-container" data-regbox="nameContainer">
                    <!-- 鼠标点击输入，添加类accountIn -->
                    <div class="country-container">
                        <span class="country-incon" data-regbox="zoneArea">
                            <a href="javascript:;" class="country-link" data-regbox='selectedZone' rseat="psprt_region"></a>
                            <i class="arrow-all" data-regbox='zoneArrow' rseat="psprt_region"></i>
                        </span>
                        <div class="country_dropDown dn" data-regbox="zone">
                        </div>
                    </div>
                    <p class="errorInfo vh" data-regbox="nameErr">
                        <span>手机号格式错误，请重新输入</span>
                    </p>
                    <div class="tip-container tip-account-container" data-regbox="nameInputArea">
                        <p class="tip-info" data-regbox="nameTip">请输入手机号</p>
                        <input type="text" class="txt-info txt-account" data-regbox="name" maxlength="20"/>
                    </div>
                </div>
                <div class="proto-log"><i class="proto-check-icon" data-regbox="protocol"></i>同意<a href="//www.iqiyi.com/user/register/protocol.html " rseat="psprt_protocol" target="_blank">《用户协议》</a><a href="//www.iqiyi.com/common/secret.html" target="_blank">《隐私政策》</a>
                </div>
                <a href="javascript:;" class="btn-green btn-login btn-next btn-gray" rseat="prgd_smsbtn" data-regbox="stepOneBtn">注册</a>
            </div>
        </div>
        <div class="login-frame-bottom">
            <p class="login-frame-ln">
                <span class="fr">
                  <a href="javascript:;" rseat="cmm_lgn" data-passLogin>账号密码登录</a>
                  <i class="vertical-line"></i>
                  <a href="javascript:;" rseat="cmm_2scan" data-qrLogin>快速安全登录</a>
                </span>
            </p>
        </div>
    </div>
    <div class="login-frame  dn " data-block-name="pcwregvphdlg" data-mobilemsg="wrapper">
        <div class="login-frame-top">
            <div class="login-frame-ti">
                <a href="javascript:;" class="frame-close" data-frameClose rseat="psprt_close"></a>
                <h2 class="login-title"><span class="title-dot"></span>验证手机号</h2>
                <div class="modify-info-councon">
                    <div class="modify-info-co modify-info-country">
                        <span class="btn-modify-info fr" data-mobilemsg="modify" rseat="prgvpd_eph">修改</span>
                        <span class="modify-country" data-mobilemsg="country"></span>
                        <span class="modify-phonenum fs16" data-mobilemsg="phonenum"></span>
                    </div>
                    <div class="info-container info-verify-container" data-mobilemsg="msgTip">
                        <div class="tip-container">
                            <p class="tip-info">请输入收到的验证码</p>
                            <input type="text" class="txt-info txt-account" value="" data-mobilemsg="msg" maxlength="6"/>
                            <div class="verify-tip-info" data-mobilemsg="timeWrapper">
                                验证码已发送，接受约需<span data-mobilemsg="countDown"></span>秒
                            </div>
                            <div class="verify-tip-info dn" data-mobilemsg="resendWrapper">
                                没收到短信？点击<a href="javascript:;" class="btn-resend" data-mobilemsg="resendBtn" rseat="prgvpd_rsnd">重新发送</a>
                            </div>
                            <span class="errorInfo vh" data-mobilemsg="msgErr">
                                <span>验证码错误</span>
                            </span>
                        </div>
                    </div>
                </div>
                <a href="javascript:;" class="btn-green btn-login btn-next-verify btn-gray" data-mobilemsg="btn" rseat="prgvpd_regbtn">下一步</a>
                <div class="proto-log">点击下一步即表示您同意<a href="//www.iqiyi.com/user/register/protocol.html " rseat="psprt_protocol" target="_blank">《用户协议》</a><a href="//www.iqiyi.com/common/secret.html" target="_blank">《隐私政策》</a>
                </div>
           </div>
        </div>
        <div class="login-frame-bottom">
            <p class="login-frame-ln">
                <span class="fr">
                  <a href="javascript:;" rseat="cmm_lgn" data-passLogin>账号密码登录</a>
                  <i class="vertical-line"></i>
                  <a href="javascript:;" rseat="cmm_2scan" data-qrLogin>快速安全登录</a>
                </span>
            </p>
        </div>
        <div class="supe-win-i login-frame-ab dn" data-mobilemsg="loginsus" data-block-name="pcwregalrdlg">
            <div class="fla-i"></div>
            <p class="supe-win-p">发现您曾经注册过爱奇艺账号，</p>
            <p class="supe-win-p">为您登录中...</p>
        </div>
    </div>
    <div class="login-frame dn" data-piccode="container">
        <div class="login-frame-top">
            <div class="login-frame-ti" data-piccode="wrapper" data-block-name-sd="pcwregdlg_vcode" data-block-name-rs="pcwregvphdlg_vcode"></div>
        </div>
    </div>
    <div class="login-frame login-frame-st1 dn" data-slidepiccode="container" data-block-name-sd="pcwregdlg_slsh" data-block-name-rs="pcwregvphdlg_slsh">
        <div class="login-frame-top">
            <div class="login-frame-ti">
                <a href="javascript:;" class="frame-close" data-frameClose rseat="psprt_close"></a>
                <h2 class="login-title"><span class="title-dot"></span>注册</h2>
                <div id="regSlidePiccode">
                </div>
            </div>
        </div>
    </div>
</div>
<!-- 结束 -->
<!-- 开始 -->
<div class="login-main-frame  dn " data-step="two" data-block-name="pcwregstpwddlg">
    <div class="dn" data-vfypherr="wrapper" data-block-name="pcwregstpwddlg_risk"></div>
    <div class="login-frame" data-setpwd="wrapper">
        <div class="login-frame-top">
            <div class="login-frame-ti login-frame-pas">
                <a href="javascript:;" class="frame-close" data-frameClose rseat="psprt_close"></a>
                <h2 class="login-title"><span class="title-dot"></span>设置密码</h2>
                

<div class="info-container" data-setpwd="infoContainer">
    <p class="errorInfo vh" data-setpwd="pwdErr">
        <span>8-20位字母、数字或字符,至少包含两种</span>
    </p>
    <div class="tip-container tip-pwd-container">
        <p class="tip-info" data-setpwd="pwdTip">8-20位字母、数字或字符,至少包含两种</p>
        <input type="password" class="txt-info txt-password" data-setpwd-pwd="input" data-setpwd="pwd" maxlength="20"/>
    </div>
    <a href="javascript:;" class="eye-close" data-pwdeye="btn" rseat="psprt_swvisi"></a>
</div>
<div class="info-container" data-setpwd="reInfoContainer">
    <p class="errorInfo vh" data-setpwd="repwdErr">
        <span>两次密码不相同</span>
    </p>
    <div class="tip-container tip-pwd-container">
        <p class="tip-info" data-setpwd="repwdTip">请再输入一遍</p>
        <input type="password" class="txt-info txt-password" data-setpwd-pwd="input" data-setpwd="repwd" maxlength="20"/>
    </div>
</div>                <a href="javascript:;" class="btn-green btn-login btn-next btn-gray" rseat="prgspwd_stpwd" data-setpwd="btn">完成注册</a>
            </div>
        </div>
    </div>
</div>
<!-- 结束 -->
<!-- 恭喜您注册成功开始 -->
<div class="login-main-frame dn" data-step="three" data-block-name="pcwregok">
    <div class="login-frame">
        <div class="login-frame-top">
            <div class="login-frame-ti">
                <a href="javascript:;" class="frame-close" data-frameClose rseat="psprt_close"></a>
                <h2 class="login-title"><span class="title-dot"></span>登录</h2>
                <p class="sub-title sub-title-ve">恭喜您注册成功</p>
                <p class="sub-title sub-title-ves">下面是您将在爱奇艺使用的头像和昵称</p>
                <div class="register-sus-container">
                    <div class="register-name-con">
                        <img src="" class="register-name" data-regbox="usericon">
                    </div>
                    <p class="register-name-ed">
                        <span data-regbox="nick"></span>
                        <a class="edit-name" data-regbox="editnick" rseat="prgok_ednfo"></a>
                    </p>
                </div>
                <a href="javascript:;" class="btn-green btn-login btn-next" rseat="prgok_fnsh" data-frameClose>完成</a>
            </div>
        </div>
    </div>
</div>
<!-- 结束 -->
<!-- 阻断面板开始 -->
<div class="login-main-frame dn" data-regele="errReg">
    <div class="login-frame">
        <div class="login-frame-top">
            <div class="login-frame-ti login-frame-pas">
                <a href="javascript:;" class="frame-close" data-frameClose></a>
                <div class="fla-error">
                    <div class="playerror"></div>
                </div>
                <p class="fla-error-t" data-regele="errmsg"></p>
                <a href="javascript:;" class="btn-green btn-login btn-next" data-regele="errReturn">确定</a>
            </div>
        </div>
    </div>
</div>
<!-- 阻断面板结束 -->                            </div>
                    </div>
                        <script type="text/javascript">
            document.domain = "pps.tv";
            Q.pageInfo = {"first_show": "1", "show_back": "0"};
            Q.projectName = 'qiyiV2';
            Q.load("frameLoginReg");
        </script>
        <script>
            if('serviceWorker' in navigator){
                navigator.serviceWorker.register('/iqiyisw.js', {scope:'/iframe/'}).then(function(reg){
                    // console.log('Registration succeeded. Scope is ' + reg.scope)
                }).catch(function(error){
                    // console.log('Registration failed with ' + error) 
                })
            }
        </script>
    </body>
    <script type="text/javascript">
 
    (function(){
      if(window.__qlt && window.__qlt.start){
        window.__qlt.start("qaLoadReady");
      }
      var s = document.createElement("script"), el = document.getElementsByTagName("script")[0];
      s.async = true;
      s.src = document.location.protocol + "//static.iqiyi.com/js/pingback/qa.js";
      s.onload = s.onreadystatechange = function () {
        if (!s.readyState || "loaded" == s.readyState || "complete" == s.readyState) {
          if(window.__qlt && window.__qlt.end){
			window.__qlt.end("qaLoadReady");
          }
          s.onload = s.onreadystatechange = null;
        }
      };
      el.parentNode.insertBefore(s, el);
    })();
  
</script></html> 