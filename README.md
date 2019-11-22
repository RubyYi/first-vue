# first-vue

## Project setup 项目设置

```jsx
npm install
```

### Compiles and hot-reloads for development 编译和热重新加载以进行开发

```jsx
npm run serve
```

### Compiles and minifies for production 编译和缩小以供生产

```jsx
npm run build
```

### Lints and fixes files Lints 和 fixes 文件

```jsx
npm run lint
```

### Customize configuration 自定义配置

See [Configuration Reference](https://cli.vuejs.org/config/).

### 路由

```jsx
npm install vue-router --save-dev
```

### 请求

```jsx
npm install vue-resource --save-dev
```

### JSONPlaceholder

虚假的在线 REST API，用于测试和原型制作。http://jsonplaceholder.typicode.com/

### git 颜色

重新配置了一下 git 发现没有颜色了；

+默认情况下，ubuntu 下的终端中，git 没有颜色,可以使用如下命令给 git 配色

- \$ git config --global color.status auto
- \$ git config --global color.diff auto
- \$ git config --global color.branch auto
- \$ git config --global color.interactive auto

### 翻译插件 API

https://tech.yandex.com/

### Bootstrap 的免费主题

https://bootswatch.com/

### 常用 vs 插件

live Server 热更新
Vetur
Vue.js with TypeScript Snippets for VSCode

### 设置

设置->settings->Open Settings(JSON)(文件右上角按钮)->添加：
"editor.formatOnType": true,
"editor.formatOnSave": true,

### 常见设置

```jsx
"editor.formatOnSave": true,//控制编辑器是否应在键入后自动格式化行。
"editor.formatOnType": true,//保存时格式化文件。格式化程序必须可用，延迟后不能保存文件，并且编辑器不能关闭。
"emmet.includeLanguages": {
  "javascript": "javascriptreact",
  "wxml": "html"
},//在默认情况下不支持的语言中启用 Emmet 缩写。在此处添加语言与支持 emmet 的语言之间的映射。
"emmet.syntaxProfiles": {
  "javascript": "jsx",
  "javascript": "html"
},//为指定语法定义配置文件，或使用具有特定规则的自己的配置文件。
"editor.fontSize": 26,
"editor.tabSize": 2,
"editor.wordWrap": "on",//自动换行
"workbench.colorTheme": "Default Light+",//工作台主题颜色
"window.zoomLevel": 1.5,//窗口缩放级别
"editor.lineNumbers": "on",//控制行号的显示。
"liveServer.settings.donotShowInfoMsg": true,//直播服务器设置：禁用信息弹出消息。
"terminal.integrated.fontSize": 24,//控制终端的字体大小
"prettier.singleQuote": true,//使用单引号而不是双引号
"explorer.confirmDelete": true,//控制资源管理器在通过回收站删除文件时是否应要求确认。
"javascript.implicitProjectConfig.experimentalDecorators": true,
"git.ignoreMissingGitWarning": true,//忽略 Git 丢失时的警告。
"files.associations": {
  "*.cjson": "jsonc",
  "*.wxss": "css",
  "*.wxs": "javascript"
},//配置与语言的文件关联
```

gitbash
powershell
cmd

terminal(Mac)
