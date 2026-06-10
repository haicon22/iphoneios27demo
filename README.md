# iPhone 17 Pro Max + iOS 27.0 模拟器

一个高度拟真的 Web App，用于在浏览器中演示未来版本的 iPhone 17 Pro Max 和 iOS 27.0。

## 功能特性

### 系统界面
- ✅ 完整模拟 iPhone 17 Pro Max 外观（屏幕比例、圆角、灵动岛）
- ✅ 状态栏（时间、WiFi、5G 信号、动态电池）
- ✅ 锁屏界面（动态时间、日期、通知、壁纸）
- ✅ 主屏幕（App 网格、多页滑动、Dock）
- ✅ 深色模式 / 浅色模式切换
- ✅ 灵动岛（Dynamic Island）动画

### 交互功能
- ✅ 滑动解锁
- ✅ 长按进入编辑模式（图标抖动）
- ✅ 左右滑动切换桌面页面
- ✅ 从右上角下拉控制中心
- ✅ 从左上角下拉通知中心
- ✅ 上滑打开 App Switcher
- ✅ App 打开/关闭缩放动画

### 应用模拟
- ✅ 设置（Settings）- 完整设置界面
- ✅ 相册（Photos）- 照片网格浏览
- ✅ 相机（Camera）- 支持调用摄像头 API
- ✅ Safari 浏览器 - 内置地址栏、iframe 加载
- ✅ 信息（Messages）- 聊天界面
- ✅ 电话（Phone）- 拨号盘、收藏、最近通话
- ✅ 时钟（Clock）- 世界时钟、闹钟、秒表、计时器
- ✅ 日历（Calendar）- 月视图、日程
- ✅ 文件（Files）- 文件管理
- ✅ App Store - 应用展示
- ✅ 音乐（Music）- 播放器、正在播放
- ✅ 天气（Weather）- 小时/每日预报
- ✅ 计算器（Calculator）- 完整计算功能
- ✅ 备忘录（Notes）- 笔记编辑

### PWA 支持
- ✅ manifest.json 配置
- ✅ Service Worker 离线缓存
- ✅ 支持添加到主屏幕
- ✅ Apple Touch Icon
- ✅ 启动画面
- ✅ Standalone 全屏模式

## 项目结构

```
iphone17-ios27-simulator/
├── index.html          # 主应用入口（包含所有 HTML 结构）
├── app.js              # 核心 JavaScript 逻辑
├── manifest.json       # PWA 配置清单
├── service-worker.js   # 离线缓存服务
├── icons/              # 应用图标
│   ├── icon-72.svg
│   ├── icon-96.svg
│   ├── icon-128.svg
│   ├── icon-144.svg
│   ├── icon-152.svg
│   ├── icon-192.svg
│   ├── icon-384.svg
│   ├── icon-512.svg
│   └── launch.svg
└── README.md           # 项目说明
```

## 快速开始

### 方式一：直接打开
1. 将项目文件部署到任意 Web 服务器
2. 在浏览器中打开 `index.html`
3. 在 iPhone Safari 中访问并「添加到主屏幕」

### 方式二：本地开发服务器
```bash
# 使用 Python 简单 HTTP 服务器
cd iphone17-ios27-simulator
python3 -m http.server 8000

# 或使用 Node.js
npx serve .

# 或使用 PHP
php -S localhost:8000
```

### 方式三：构建部署
```bash
# 安装依赖（可选，用于图标转换等）
npm install

# 开发模式
npm run dev

# 构建生产版本
npm run build
```

## 在 iPhone 上安装

1. 使用 Safari 打开部署后的网址
2. 点击底部分享按钮（⬆️）
3. 选择「添加到主屏幕」
4. 点击「添加」
5. 从主屏幕打开应用，即可全屏运行

## 兼容性

- **iPhone Safari** - 完美支持（推荐）
- **iOS PWA 模式** - 完美支持
- **Chrome Mobile** - 支持
- **Edge Mobile** - 支持
- **桌面浏览器** - 支持预览（显示设备边框）

## 技术说明

- **纯前端实现**：HTML + CSS + JavaScript，无后端依赖
- **单页应用（SPA）**：所有界面在一个 HTML 文件中
- **CSS 动画**：使用 transform 和 opacity 实现 60FPS 动画
- **触摸事件**：完整支持 touchstart/touchmove/touchend
- **桌面回退**：支持鼠标操作和键盘快捷键

## 键盘快捷键

| 快捷键 | 功能 |
|--------|------|
| `Esc` | 返回/关闭 |
| `Ctrl + L` | 锁定/解锁屏幕 |
| `Ctrl + C` | 打开控制中心 |
| `Ctrl + N` | 打开通知中心 |

## 注意事项

1. 相机功能需要设备支持 `getUserMedia` API 和 HTTPS 环境
2. 某些高级功能（如推送通知）需要真实设备支持
3. 建议在 iPhone Safari 或 Chrome Mobile 上获得最佳体验

## 许可证

MIT License - 仅供学习和演示使用。

**声明**：本项目为技术演示，与 Apple Inc. 无关。iPhone、iOS 及相关商标均为 Apple Inc. 所有。
