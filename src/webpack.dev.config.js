/* eslint-disable */
var webpack = require('webpack');
var path = require('path');
var node_modules = path.resolve(__dirname, 'node_modules');

var paths = {
  src: {
    applyWeb: path.join(__dirname, 'src/apply-web'),
    applyMobile: path.join(__dirname, 'src/apply-mobile'),
    common: path.join(__dirname, 'src/common'),
    main: path.join(__dirname, 'src/main-app'),
    headhunter: path.join(__dirname, 'src/headhunter'),
    chromeExtension: path.join(__dirname, 'src/chrome-extension'),
    chromeExtensionOld: path.join(__dirname, 'src/chrome-extension/old'),
    oneclick: path.join(__dirname, 'src/oneclick'),
    hrMobile: path.join(__dirname, 'src/hr_mobile'),
    interviewSignin: path.join(__dirname, 'src/interview_signin'),
    sourceSignin: path.join(__dirname, 'src/source_signin'),
    deliverQuery: path.join(__dirname, 'src/deliver_query'),
    foreground: path.join(__dirname, 'src/foreground'),
    dajieApi: path.join(__dirname, 'src/dajie-api'),
  },
  dest: path.join(__dirname, 'src/server/public/javascripts/'),
};

var deps = [
  path.resolve(node_modules, 'react/dist'),
  path.resolve(node_modules, 'react-router/umd/'),
  path.resolve(node_modules, 'react-dom/dist/react-dom.min.js'),
  path.resolve(node_modules, 'pdfjs-dist'),
  path.resolve(node_modules, 'echarts/dist/echarts.min.js'),
  path.resolve(node_modules, 'zrender/src/zrender.js'),
  path.resolve(node_modules, 'moment/min/moment-with-locales.min.js'),
  path.resolve(node_modules, 'quill/dist'),
  path.resolve(node_modules, 'push.js/bin/push.min.js'),
];

module.exports = {
  cache: true,
  devtool: 'cheap-module-eval-source-map',
  entry: {
    // applyWeb: ['react-hot-loader/patch', 'webpack-hot-middleware/client', path.join(paths.src.applyWeb, '/index.js')],
    // applyMobile: ['babel-polyfill', 'react-hot-loader/patch', path.join(paths.src.applyMobile, '/index.js')], // 微信模拟器调试需要polyfill
    // chromeExtension: ['react-hot-loader/patch', 'webpack-hot-middleware/client', path.join(paths.src.chromeExtension, 'index.js')],
    // chromeExtensionOld: ['react-hot-loader/patch', 'webpack-hot-middleware/client', path.join(paths.src.chromeExtensionOld, 'index.js')],
    // oneclick: ['react-hot-loader/patch', 'webpack-hot-middleware/client',path.join(paths.src.oneclick, 'index.js')],
    main: ['react-hot-loader/patch', 'webpack-hot-middleware/client', path.join(paths.src.main, '/index.js')],
    // mobile: ['react-hot-loader/patch', 'webpack-hot-middleware/client', path.join(paths.src.main, '/mobile.js')],
    // forward: ['react-hot-loader/patch', 'webpack-hot-middleware/client', path.join(paths.src.main, '/forward.js')],
    // mobileForward: ['react-hot-loader/patch', 'webpack-hot-middleware/client', path.join(paths.src.main, '/mobileForward.js')],
    hiring_manager: ['react-hot-loader/patch', 'webpack-hot-middleware/client', path.join(paths.src.main, '/hiring_manager.js')],
    // headhunter: ['react-hot-loader/patch', 'webpack-hot-middleware/client', path.join(paths.src.headhunter, '/index.js')],
    // bind_mobile: ['react-hot-loader/patch', 'webpack-hot-middleware/client', path.join(paths.src.main, '/bind_mobile.js')],
    // bind_wechat: ['react-hot-loader/patch', 'webpack-hot-middleware/client', path.join(paths.src.main, '/bind_wechat.js')],
    // bind_workwechat: ['react-hot-loader/patch', 'webpack-hot-middleware/client', path.join(paths.src.main, '/bind_workwechat.js')],
    // error: ['react-hot-loader/patch', 'webpack-hot-middleware/client', path.join(paths.src.main, '/error.js')],
    // email_link_page: ['react-hot-loader/patch', 'webpack-hot-middleware/client', path.join(paths.src.main, '/email_link_page.js')],
    // auth: ['react-hot-loader/patch', 'webpack-hot-middleware/client', path.join(paths.src.main, '/auth.js')],
    // location: ['react-hot-loader/patch', 'webpack-hot-middleware/client', path.join(paths.src.main, '/location.js')],
    // weekly_report_job: ['react-hot-loader/patch', 'webpack-hot-middleware/client', path.join(paths.src.main, '/weekly_report/job.js')],
    // extension: ['react-hot-loader/patch', 'webpack-hot-middleware/client', path.join(paths.src.main, '/extension/install.js')],
    // dingding_splash: ['react-hot-loader/patch', 'webpack-hot-middleware/client', path.join(paths.src.main, '/dingding_splash.js')],
    // bind_dingding: ['react-hot-loader/patch', 'webpack-hot-middleware/client', path.join(paths.src.main, '/bind_dingding.js')],
    // dingding_qrbind: ['react-hot-loader/patch', 'webpack-hot-middleware/client', path.join(paths.src.main, '/dingding_qrbind.js')],
    // dingding_desktop_entry: ['react-hot-loader/patch', 'webpack-hot-middleware/client', path.join(paths.src.main, '/dingding_desktop_entry.js')],
    // dingding_desktop_message: ['react-hot-loader/patch', 'webpack-hot-middleware/client', path.join(paths.src.main, '/dingding_desktop_message.js')],
    // zhiren: ['react-hot-loader/patch', 'webpack-hot-middleware/client', path.join(paths.src.main, '/zhiren.js')],
    // hr_mobile: ['react-hot-loader/patch', 'webpack-hot-middleware/client', path.join(paths.src.hrMobile, '/index.js')],
    // interview_satisfaction: ['react-hot-loader/patch', 'webpack-hot-middleware/client', path.join(paths.src.main, '/interview_satisfaction/index.js')],
    // maimaiRecommendResult: ['react-hot-loader/patch', 'webpack-hot-middleware/client', path.join(paths.src.main, '/maimaiRecommendResult/maimaiRecommendResult.js')],
    // maimaiCandidate: ['react-hot-loader/patch', 'webpack-hot-middleware/client', path.join(paths.src.main, '/maimaiCandidate/maimaiCandidate.js')],
    // maimai_publish: ['react-hot-loader/patch', 'webpack-hot-middleware/client', path.join(paths.src.main, '/maimaiCandidate/publish/index.js')],
    // dajie_publish: ['react-hot-loader/patch', 'webpack-hot-middleware/client', path.join(paths.src.dajieApi, '/index.js')],
    candidate_info_form: ['react-hot-loader/patch', 'webpack-hot-middleware/client', path.join(paths.src.main, '/candidate_info_form/index.js')],
    // resume_form: ['react-hot-loader/patch', 'webpack-hot-middleware/client', path.join(paths.src.main, '/resume_form/index.js')],
    // batch_filter_resume: ['react-hot-loader/patch', 'webpack-hot-middleware/client', path.join(paths.src.main, '/batch_filter_resume/index.js')],
    // info_mobile: ['react-hot-loader/patch', 'webpack-hot-middleware/client', path.join(paths.src.hrMobile, '/info_mobile.js')],
    // info_pc: ['react-hot-loader/patch', 'webpack-hot-middleware/client', path.join(paths.src.main, '/info_pc.js')],
    login: ['react-hot-loader/patch', 'webpack-hot-middleware/client', path.join(paths.src.main, '/login.js')],
    // reset_password: ['react-hot-loader/patch', 'webpack-hot-middleware/client', path.join(paths.src.main, '/reset_password.js')],
    interview_signin: path.join(paths.src.interviewSignin, '/index.js'),
    // interview_queue_signin: path.join(paths.src.interviewSignin, '/indexQueue.js'),
    // source_signin: path.join(paths.src.sourceSignin, '/index.js'),
    // deliver_query: path.join(paths.src.deliverQuery, '/index.js'),
    // foreground: ['react-hot-loader/patch', 'webpack-hot-middleware/client', path.join(paths.src.foreground, '/index.js')],
    // miniprogram_signin: path.join(paths.src.interviewSignin, '/indexMiniprogram.js'),

    // Experimental features
    experimental_request_hook: path.join(paths.src.common, '/XMLHttpRequestPatch.js'),
  },
  output: {
    path: paths.dest,
    filename: '[name].js',
    publicPath: '/javascripts/',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [
          path.resolve(__dirname, "node_modules"),
          path.resolve(__dirname, "src/server/public"),
          path.resolve(__dirname, "src/server/test"),
        ],
        use: {
          loader: 'babel-loader',
          options: {
            presets: ["env", "lingui-js", "react", "lingui-react"],
            plugins: [
              require('babel-plugin-add-module-exports'),
              require('babel-plugin-transform-class-properties'),
              require('babel-plugin-transform-object-rest-spread'),
              require('react-hot-loader/babel'),
            ],
            cacheDirectory: true,
          },
        },
      },
      {
        test: /^((?!\.cm).)+\.styl$/,
        loader: 'style-loader!css-loader?sourceMap!postcss-loader?sourceMap!stylus-loader?resolve url', // Need "resolve url". (http://stackoverflow.com/questions/33450953/webpack-stylus-loader-incorrectly-resolve-url-paths)
        exclude: [
          path.join(paths.src.hrMobile),
        ],
      },
      {
        test: /^((?!\.cm).)+\.styl$/,
        loader: 'style-loader!css-loader?modules&camelCase&localIdentName=[local]-[hash:base64:5]!postcss-loader?sourceMap!stylus-loader?modules', // Need "resolve url". (http://stackoverflow.com/questions/33450953/webpack-stylus-loader-incorrectly-resolve-url-paths)
        include: [
          path.join(paths.src.hrMobile),
        ],
        exclude: [
          path.join(paths.src.hrMobile, 'index.styl'),
        ],
      },
      {
        test: /\.cm\.styl$/,
        loader: 'style-loader!css-loader?modules&camelCase&localIdentName=[local]-[hash:base64:5]!postcss-loader?sourceMap!stylus-loader?modules', // Need "resolve url". (http://stackoverflow.com/questions/33450953/webpack-stylus-loader-incorrectly-resolve-url-paths)
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
      },
      {
        test: /\.(jpg|png|gif|eot|svg|ttf|woff|otf)/,
        loader: 'url-loader?limit=100000',
      },
    ],
    noParse: deps,
  },
  resolve: {
    modules: [path.resolve(__dirname, "src"), "node_modules"],
    alias: {
      'moment': path.resolve(node_modules, 'moment/min/moment-with-locales.min.js'),
      'echarts': path.resolve(node_modules, 'echarts/dist/echarts.min.js'),
      'zender': path.resolve(node_modules, 'zrender/src/zrender.js'),
    }
  },

  externals: {
    PDFJS: 'PDFJS',
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.PrefetchPlugin('./src/main-app/components/candidates/comment/CandidateComment.js'),
    new webpack.PrefetchPlugin('./src/common/components/CommentInput.js'),
    new webpack.PrefetchPlugin('react-mentions'),
    new webpack.PrefetchPlugin('react-color'),
    new webpack.DefinePlugin({
      __DEVTOOLS__: true,
      // ENABLE/DISABLE redux-devtools HERE
      // chrome plugin download url:
      // https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd
      __PORT__: 3001,
    }),
  ],
};
