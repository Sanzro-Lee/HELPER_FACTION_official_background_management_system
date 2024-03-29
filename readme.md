<p align="center">
    <a href="#">
        <img alt="叫到帮" src="https://raw.githubusercontent.com/Sanzro-Lee/HELPER_FACTION_official_background_management_system/master/images/%E5%8F%AB%E5%88%B0%E5%B8%AE_logo.png" width="300">
    </a>
</p>

<p align="center">
    叫到帮官方后台管理系统，使用了Vue & Ant Design，不适配移动端竖版，适配移动端横版。此后台系统必须配合后端API使用。
</p>

<p align="center">
    <img alt="brage" src="https://img.shields.io/github/issues/Sanzro-Lee/HELPER_FACTION_official_background_management_system" width="auto">
    <img alt="brage" src="https://img.shields.io/github/forks/Sanzro-Lee/HELPER_FACTION_official_background_management_system" width="auto">
    <img alt="brage" src="https://img.shields.io/github/stars/Sanzro-Lee/HELPER_FACTION_official_background_management_system" width="auto">
    <img alt="brage" src="https://img.shields.io/github/license/Sanzro-Lee/HELPER_FACTION_official_background_management_system" width="auto">
</p>

## 简介

叫到帮小程序就是帮助大家解决 🧰 各种问题的，其中包括室内装修、电器维修、货物搬迁等问题，有这些问题就找叫到帮！（此项目暂未完成 ❎ ）

此项目为与小程序配套的后台管理系统，作为内部员工使用，当小程序上的内容出错时，员工可使用此系统修改部分内容，以及时修正。

<!-- ## 扫码体验

<img alt="叫到帮服务端二维码" src="https://github.com/helperfaction/image/Qrcode.png" width="200"> -->

## 安装使用

```bash
# 进入项目
cd HELPER_FACTION_official_background_management_system

## 安装依赖
npm i

# development
npm run serve

# production
npm run build

# 修改端口号，请在vue.config.js里修改。默认8080
port: 8080

# 依赖更新：
npm outdate

# 随后通过以下命令进行更新
npm-check -u

# 空格键 选择要更新的依赖，按 回车 确认即可

# 此项目更新依赖会存在 bug，不再维护
```

运行 ``npm run serve`` 命令后，您电脑上的默认浏览器会自动打开，默认为``localhost:8080``，如果运行的是``npm run build``，则需手动打开 ``src/dist`` 文件夹 📁，双击 ``index.html``，即可预览效果。

```bash
# 生产环境请修改如下文件的盐
# 路径：src/utils/Cookie.js:7
let en_pwd = CryptoJS.AES.encrypt(c_pw, "***")
# 请将 *** 修改为适合的盐，此处原为 kolin，做备忘。

# 路径：src/pages/Login.vue:180
# 这里的盐和上面的应当是一样的，因为要解密
let en_pwd = CryptoJS.AES.decrypt(arr2[1].toString(), "***");
# 把此处的 *** 改为与上面一样的盐，此处原为 kolin，做备忘。
```


<!-- ## 文档

https://helperfaction.github.io/docs -->

## 设计图展示

<img alt="设计图展示" src="https://raw.githubusercontent.com/Sanzro-Lee/HELPER_FACTION_official_background_management_system/master/images/%E5%8F%AB%E5%88%B0%E5%B8%AE_login.jpg" width="auto">
<img alt="设计图展示" src="https://raw.githubusercontent.com/Sanzro-Lee/HELPER_FACTION_official_background_management_system/master/images/%E5%8F%AB%E5%88%B0%E5%B8%AEhomepage.jpg" width="auto">
<img alt="设计图展示" src="https://raw.githubusercontent.com/Sanzro-Lee/HELPER_FACTION_official_background_management_system/master/images/%E5%8F%AB%E5%88%B0%E5%B8%AE_orderdetail.jpg" width="auto">

## 生态周边

|项目|版本|描述|状态|
|--|--|--|--|
|[客户端](https://github.com/Sanzro-Lee/HELPER_FACTION_official_weapp_customer)|v1.5|叫到帮小程序客户端|未完成 ❎|
|[服务端](https://github.com/Sanzro-Lee/HELPER_FACTION_official_weapp_service)|v2.0|叫到帮小程序服务端|未完成 ❎|
|[官方网站源码](https://github.com/Sanzro-Lee/HELPER_FACTION_official_website)|v2.0|叫到帮官网源代码|已完成 ✅|
