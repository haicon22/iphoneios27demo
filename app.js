/**
 * iPhone 17 Pro Max + iOS 27.0 Simulator
 * Pure HTML/CSS/JS Single Page Application
 * Author: AI Assistant
 * Version: 1.0.0
 */

// ===== STATE MANAGEMENT =====
const State = {
    locked: true,
    currentPage: 0,
    totalPages: 3,
    editMode: false,
    darkMode: false,
    activeApp: null,
    apps: [],
    dockApps: [],
    folders: [],
    openApps: [],
    battery: 72,
    wallpapers: ['wallpaper-1', 'wallpaper-2', 'wallpaper-3', 'wallpaper-4', 'wallpaper-5', 'wallpaper-6', 'wallpaper-7', 'wallpaper-8'],
    currentWallpaper: 0,
    clock: { hours: 9, minutes: 41, seconds: 0 },
    stopwatch: { running: false, time: 0, startTime: 0 },
    timer: { running: false, time: 300, initial: 300 },
    calculator: { display: '0', prev: null, op: null, reset: false },
    messages: [
        { id: 1, name: '张三', avatar: '张', preview: '晚上一起吃饭吗？', time: '2分钟前', unread: true },
        { id: 2, name: '李四', avatar: '李', preview: '项目进度怎么样了？', time: '15分钟前', unread: true },
        { id: 3, name: '王五', avatar: '王', preview: '明天记得带文件', time: '1小时前', unread: false },
        { id: 4, name: '赵六', avatar: '赵', preview: '好的，没问题', time: '昨天', unread: false },
    ],
    currentChat: null,
    chatMessages: {
        1: [
            { text: '在吗？', sent: false },
            { text: '在的，怎么了？', sent: true },
            { text: '晚上一起吃饭吗？我知道一家新开的餐厅。', sent: false },
        ],
        2: [
            { text: '项目进度怎么样了？', sent: false },
            { text: '已经完成了80%，预计明天可以交付。', sent: true },
        ],
    },
    notes: [
        { id: 1, title: '购物清单', body: '- 牛奶\n- 鸡蛋\n- 面包\n- 水果', time: '今天 10:30', folder: '备忘录' },
        { id: 2, title: '会议记录', body: '1. 讨论Q3目标\n2. 预算分配\n3. 人员安排', time: '昨天 14:00', folder: '工作' },
        { id: 3, title: '旅行计划', body: '目的地：日本\n时间：7月15日\n预算：2万元', time: '6月8日', folder: '个人' },
    ],
    currentNote: null,
    photos: Array.from({length: 24}, (_, i) => ({ id: i, emoji: ['🌅','🌄','🌠','🎆','🎇','🌇','🌆','🏙','🌃','🌌','🌉','🌁','🌊','🏔','🌋','🏕','🏖','🏜','🏝','🏞','🏟','🏛','🏗','🏘'][i] })),
    weather: { city: '北京市', temp: 24, condition: '多云', high: 28, low: 18, hourly: [{time:'现在',icon:'⛅',temp:24},{time:'14时',icon:'🌤',temp:25},{time:'15时',icon:'☀️',temp:26},{time:'16时',icon:'☀️',temp:27},{time:'17时',icon:'🌤',temp:26},{time:'18时',icon:'⛅',temp:24}], daily: [{day:'今天',icon:'⛅',low:18,high:28},{day:'周三',icon:'🌤',low:19,high:29},{day:'周四',icon:'☀️',low:20,high:30},{day:'周五',icon:'⛅',low:18,high:27},{day:'周六',icon:'🌧',low:17,high:24},{day:'周日',icon:'🌧',low:16,high:22},{day:'周一',icon:'⛅',low:18,high:25}] },
    alarms: [
        { id: 1, time: '07:00', label: '起床', active: true },
        { id: 2, time: '08:30', label: '上班', active: true },
        { id: 3, time: '22:00', label: '睡觉', active: false },
    ],
    worldClocks: [
        { city: '北京', timezone: 8 },
        { city: '纽约', timezone: -4 },
        { city: '伦敦', timezone: 1 },
        { city: '东京', timezone: 9 },
    ],
    favorites: [
        { name: '张三', phone: '138-0000-0001' },
        { name: '李四', phone: '138-0000-0002' },
        { name: '王五', phone: '138-0000-0003' },
    ],
    recents: [
        { name: '张三', type: 'incoming', time: '2分钟前' },
        { name: '李四', type: 'outgoing', time: '15分钟前' },
        { name: '10086', type: 'missed', time: '1小时前' },
    ],
    files: [
        { name: '文档', type: 'folder', count: 12, icon: '📁' },
        { name: '图片', type: 'folder', count: 48, icon: '🖼️' },
        { name: '下载', type: 'folder', count: 5, icon: '⬇️' },
        { name: '项目报告.pdf', type: 'file', size: '2.4 MB', icon: '📄' },
        { name: '预算表.xlsx', type: 'file', size: '156 KB', icon: '📊' },
        { name: '演示文稿.pptx', type: 'file', size: '5.1 MB', icon: '📽️' },
    ],
    music: {
        playing: false,
        current: { title: '晴天', artist: '周杰伦', art: '☀️' },
        playlist: [
            { title: '晴天', artist: '周杰伦', art: '☀️' },
            { title: '夜曲', artist: '周杰伦', art: '🌙' },
            { title: '稻香', artist: '周杰伦', art: '🌾' },
            { title: '七里香', artist: '周杰伦', art: '🌸' },
        ],
        progress: 35,
    },
    safari: {
        tabs: [{ url: 'https://www.apple.com', title: 'Apple' }, { url: 'https://www.baidu.com', title: '百度' }],
        currentTab: 0,
    },
    calendar: {
        currentDate: new Date(),
        selectedDate: new Date(),
        events: [
            { date: new Date().getDate(), time: '09:00', title: '晨会', color: '#007aff' },
            { date: new Date().getDate(), time: '14:00', title: '团队会议', color: '#ff9500' },
            { date: new Date().getDate() + 1, time: '10:00', title: '客户演示', color: '#34c759' },
        ],
    },
    storeApps: [
        { name: '微信', desc: '社交', icon: '💬', color: '#07c160' },
        { name: '抖音', desc: '短视频', icon: '🎵', color: '#000' },
        { name: '支付宝', desc: '支付', icon: '💰', color: '#1677ff' },
        { name: '淘宝', desc: '购物', icon: '🛍️', color: '#ff5000' },
        { name: '美团', desc: '外卖', icon: '🍔', color: '#ffc300' },
        { name: '高德地图', desc: '导航', icon: '🗺️', color: '#4285f4' },
    ],
};

// ===== APP DEFINITIONS =====
const AppDefinitions = {
    settings: { name: '设置', icon: '⚙️', color: '#8e8e93', page: 0 },
    photos: { name: '相册', icon: '🖼️', color: '#fff', page: 0 },
    camera: { name: '相机', icon: '📷', color: '#333', page: 0 },
    safari: { name: 'Safari', icon: '🧭', color: '#fff', page: 0 },
    messages: { name: '信息', icon: '💬', color: '#34c759', page: 0 },
    phone: { name: '电话', icon: '📞', color: '#34c759', page: 0 },
    clock: { name: '时钟', icon: '⏰', color: '#000', page: 0 },
    calendar: { name: '日历', icon: '📅', color: '#fff', page: 0 },
    files: { name: '文件', icon: '📁', color: '#5ac8fa', page: 1 },
    appstore: { name: 'App Store', icon: '🅰️', color: '#007aff', page: 1 },
    music: { name: '音乐', icon: '🎵', color: '#ff2d55', page: 1 },
    weather: { name: '天气', icon: '☀️', color: '#007aff', page: 1 },
    calculator: { name: '计算器', icon: '🧮', color: '#000', page: 1 },
    notes: { name: '备忘录', icon: '📝', color: '#ffcc00', page: 1 },
    mail: { name: '邮件', icon: '✉️', color: '#007aff', page: 2 },
    maps: { name: '地图', icon: '🗺️', color: '#f7f7f7', page: 2 },
    health: { name: '健康', icon: '❤️', color: '#ff2d55', page: 2 },
    wallet: { name: '钱包', icon: '👛', color: '#000', page: 2 },
};

const DockApps = ['phone', 'safari', 'messages', 'music'];

// ===== DOM ELEMENTS =====
const $ = id => document.getElementById(id);
const $$ = sel => document.querySelectorAll(sel);

let touchStartY = 0, touchStartX = 0, touchStartTime = 0;
let isSwiping = false;

// ===== INITIALIZATION =====
function init() {
    State.apps = Object.keys(AppDefinitions).map(id => ({ id, ...AppDefinitions[id] }));
    State.dockApps = DockApps.map(id => ({ id, ...AppDefinitions[id] }));
    renderHomeScreen();
    renderDock();
    startClock();
    startBatterySimulation();
    setupEventListeners();
    updateDateTime();

    // Check for dark mode preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        toggleDarkMode(true);
    }
}

// ===== RENDER FUNCTIONS =====
function renderHomeScreen() {
    for (let p = 0; p < State.totalPages; p++) {
        const grid = $(`app-grid-${p}`);
        if (!grid) continue;
        grid.innerHTML = '';
        const pageApps = State.apps.filter(a => a.page === p);
        pageApps.forEach(app => {
            grid.appendChild(createAppIcon(app));
        });
    }
}

function renderDock() {
    const dock = $('dock');
    dock.innerHTML = '';
    State.dockApps.forEach(app => {
        const wrapper = document.createElement('div');
        wrapper.className = 'app-icon-wrapper';
        const icon = document.createElement('div');
        icon.className = 'app-icon';
        icon.style.background = app.color;
        icon.innerHTML = app.icon;
        if (State.editMode) {
            icon.classList.add('shaking');
            const badge = document.createElement('div');
            badge.className = 'delete-badge';
            badge.innerHTML = '×';
            icon.appendChild(badge);
        }
        icon.addEventListener('click', (e) => {
            e.stopPropagation();
            if (State.editMode) return;
            launchApp(app.id);
        });
        wrapper.appendChild(icon);
        dock.appendChild(wrapper);
    });
}

function createAppIcon(app) {
    const wrapper = document.createElement('div');
    wrapper.className = 'app-icon-wrapper';
    wrapper.dataset.appId = app.id;
    const icon = document.createElement('div');
    icon.className = 'app-icon';
    icon.style.background = app.color;
    icon.innerHTML = app.icon;
    if (State.editMode) {
        icon.classList.add('shaking');
        const badge = document.createElement('div');
        badge.className = 'delete-badge';
        badge.innerHTML = '×';
        badge.addEventListener('click', (e) => {
            e.stopPropagation();
            deleteApp(app.id);
        });
        icon.appendChild(badge);
    }
    icon.addEventListener('click', (e) => {
        e.stopPropagation();
        if (State.editMode) return;
        launchApp(app.id);
    });
    const label = document.createElement('div');
    label.className = 'app-label';
    label.textContent = app.name;
    wrapper.appendChild(icon);
    wrapper.appendChild(label);
    return wrapper;
}

function deleteApp(appId) {
    State.apps = State.apps.filter(a => a.id !== appId);
    renderHomeScreen();
}

// ===== APP LAUNCHING =====
function launchApp(appId) {
    if (State.locked) return;
    const app = AppDefinitions[appId];
    if (!app) return;

    State.activeApp = appId;
    State.openApps.push(appId);

    // Launch animation
    const overlay = $('app-launch-overlay');
    const bg = $('app-launch-bg');
    const icon = $('app-launch-icon');

    overlay.classList.add('active');
    bg.style.opacity = '1';
    icon.style.background = app.color;
    icon.innerHTML = app.icon;

    // Get icon position
    const appIconEl = document.querySelector(`[data-app-id="${appId}"] .app-icon`) || document.querySelector(`#dock .app-icon`);
    if (appIconEl) {
        const rect = appIconEl.getBoundingClientRect();
        const screenRect = $('screen').getBoundingClientRect();
        icon.style.left = (rect.left - screenRect.left) + 'px';
        icon.style.top = (rect.top - screenRect.top) + 'px';
        icon.style.width = rect.width + 'px';
        icon.style.height = rect.height + 'px';

        requestAnimationFrame(() => {
            icon.style.left = '50%';
            icon.style.top = '40%';
            icon.style.transform = 'translate(-50%, -50%) scale(3)';
            icon.style.opacity = '0';
        });
    }

    setTimeout(() => {
        overlay.classList.remove('active');
        bg.style.opacity = '0';
        icon.style.opacity = '1';
        icon.style.transform = 'translate(-50%, -50%) scale(1)';
        openAppWindow(appId);
    }, 400);
}

function openAppWindow(appId) {
    const container = $('app-windows');
    container.innerHTML = '';
    const win = document.createElement('div');
    win.className = 'app-window' + (State.darkMode ? ' dark' : '');
    win.id = `app-${appId}`;
    win.innerHTML = generateAppContent(appId);
    container.appendChild(win);

    requestAnimationFrame(() => {
        win.classList.add('active');
    });

    setupAppEvents(appId);
}

function closeApp() {
    const win = document.querySelector('.app-window.active');
    if (win) {
        win.classList.remove('active');
        setTimeout(() => {
            win.remove();
            State.activeApp = null;
        }, 400);
    }
}

function generateAppContent(appId) {
    const app = AppDefinitions[appId];
    const dark = State.darkMode ? 'dark' : '';

    switch (appId) {
        case 'settings':
            return generateSettingsApp();
        case 'photos':
            return generatePhotosApp();
        case 'camera':
            return generateCameraApp();
        case 'safari':
            return generateSafariApp();
        case 'messages':
            return generateMessagesApp();
        case 'phone':
            return generatePhoneApp();
        case 'clock':
            return generateClockApp();
        case 'calendar':
            return generateCalendarApp();
        case 'files':
            return generateFilesApp();
        case 'appstore':
            return generateAppStoreApp();
        case 'music':
            return generateMusicApp();
        case 'weather':
            return generateWeatherApp();
        case 'calculator':
            return generateCalculatorApp();
        case 'notes':
            return generateNotesApp();
        default:
            return `<div class="app-header"><div class="app-back" onclick="closeApp()">↩ 返回</div><div class="app-header-title">${app.name}</div><div></div></div><div class="app-body" style="display:flex;align-items:center;justify-content:center;font-size:48px;">${app.icon}</div>`;
    }
}

function generateSettingsApp() {
    return `<div class="app-header"><div class="app-back" onclick="closeApp()">↩ 设置</div><div class="app-header-title">设置</div><div></div></div>
    <div class="app-body">
        <div class="settings-profile">
            <div class="settings-avatar">👤</div>
            <div><div class="settings-name">Apple ID</div><div class="settings-email">user@icloud.com</div></div>
        </div>
        <div class="settings-section-title">通用</div>
        <div class="settings-list">
            <div class="settings-item" onclick="toggleDarkMode()">
                <div class="settings-icon" style="background:#333">🌙</div>
                <div class="settings-text">深色模式</div>
                <div class="settings-toggle ${State.darkMode ? 'active' : ''}" id="dark-mode-toggle"></div>
            </div>
            <div class="settings-item" onclick="changeWallpaper()">
                <div class="settings-icon" style="background:#007aff">🖼️</div>
                <div class="settings-text">壁纸</div>
                <div class="settings-arrow">›</div>
            </div>
            <div class="settings-item">
                <div class="settings-icon" style="background:#8e8e93">✈️</div>
                <div class="settings-text">飞行模式</div>
                <div class="settings-toggle active"></div>
            </div>
            <div class="settings-item">
                <div class="settings-icon" style="background:#34c759">📡</div>
                <div class="settings-text">Wi-Fi</div>
                <div class="settings-arrow">›</div>
            </div>
            <div class="settings-item">
                <div class="settings-icon" style="background:#34c759">📶</div>
                <div class="settings-text">蜂窝网络</div>
                <div class="settings-arrow">›</div>
            </div>
            <div class="settings-item">
                <div class="settings-icon" style="background:#007aff">🔵</div>
                <div class="settings-text">蓝牙</div>
                <div class="settings-arrow">›</div>
            </div>
        </div>
        <div class="settings-section-title">显示与亮度</div>
        <div class="settings-list">
            <div class="settings-item">
                <div class="settings-icon" style="background:#ff9500">☀️</div>
                <div class="settings-text">自动亮度</div>
                <div class="settings-toggle active"></div>
            </div>
            <div class="settings-item">
                <div class="settings-icon" style="background:#ff3b30">🔔</div>
                <div class="settings-text">原彩显示</div>
                <div class="settings-toggle active"></div>
            </div>
        </div>
        <div class="settings-section-title">声音与触感</div>
        <div class="settings-list">
            <div class="settings-item">
                <div class="settings-icon" style="background:#ff2d55">🔔</div>
                <div class="settings-text">铃声</div>
                <div class="settings-arrow">›</div>
            </div>
            <div class="settings-item">
                <div class="settings-icon" style="background:#5856d6">🔊</div>
                <div class="settings-text">音量</div>
                <div class="settings-arrow">›</div>
            </div>
        </div>
        <div class="settings-section-title">关于本机</div>
        <div class="settings-list">
            <div class="settings-item">
                <div class="settings-icon" style="background:#8e8e93">📱</div>
                <div class="settings-text">名称</div>
                <div style="color:#8e8e93;font-size:14px">iPhone 17 Pro Max</div>
            </div>
            <div class="settings-item">
                <div class="settings-icon" style="background:#8e8e93">📦</div>
                <div class="settings-text">iOS 版本</div>
                <div style="color:#8e8e93;font-size:14px">27.0</div>
            </div>
            <div class="settings-item">
                <div class="settings-icon" style="background:#8e8e93">💾</div>
                <div class="settings-text">存储空间</div>
                <div style="color:#8e8e93;font-size:14px">128 GB / 512 GB</div>
            </div>
        </div>
    </div>`;
}

function generatePhotosApp() {
    let html = `<div class="app-header"><div class="app-back" onclick="closeApp()">↩ 相册</div><div class="app-header-title">相册</div><div style="font-size:20px">⋮</div></div><div class="app-body">`;
    html += `<div class="photos-grid">`;
    State.photos.forEach(p => {
        html += `<div class="photo-item" onclick="viewPhoto(${p.id})">${p.emoji}</div>`;
    });
    html += `</div></div>`;
    return html;
}

function generateCameraApp() {
    return `<div class="app-header" style="background:transparent;border:none;position:absolute;z-index:10;"><div class="app-back" onclick="closeApp()" style="color:#fff">↩</div><div></div><div></div></div>
    <div class="app-body" style="padding:0">
        <div class="camera-view">
            <div class="camera-placeholder">
                <div style="font-size:64px;margin-bottom:16px">📷</div>
                <div>相机功能需要设备支持</div>
                <div style="font-size:14px;opacity:0.6;margin-top:8px">在真实设备上可调用摄像头</div>
            </div>
            <div class="camera-mode">
                <div class="camera-mode-item">延时</div>
                <div class="camera-mode-item">照片</div>
                <div class="camera-mode-item active">视频</div>
                <div class="camera-mode-item">电影</div>
                <div class="camera-mode-item">人像</div>
            </div>
            <div class="camera-controls">
                <div class="camera-flip">🔄</div>
                <div class="camera-btn"></div>
                <div class="camera-flip">🖼️</div>
            </div>
        </div>
    </div>`;
}

function generateSafariApp() {
    const tab = State.safari.tabs[State.safari.currentTab];
    return `<div class="app-header" style="height:auto;padding:8px 16px;flex-direction:column;gap:8px;">
        <div style="display:flex;justify-content:space-between;width:100%;font-size:14px;">
            <span style="color:#007aff">完成</span>
            <span style="font-weight:600">${tab.title || 'Safari'}</span>
            <span style="color:#007aff">+</span>
        </div>
        <div class="safari-bar">
            <span style="font-size:16px">🔍</span>
            <input type="text" value="${tab.url}" placeholder="搜索或输入网址" id="safari-url" onkeydown="if(event.key==='Enter')navigateSafari(this.value)">
            <span style="font-size:16px" onclick="reloadSafari()">↻</span>
        </div>
    </div>
    <div class="app-body" style="padding:0">
        <iframe class="safari-content" src="${tab.url}" sandbox="allow-scripts allow-same-origin allow-forms" id="safari-frame"></iframe>
    </div>`;
}

function generateMessagesApp() {
    if (State.currentChat) {
        const chat = State.messages.find(m => m.id === State.currentChat);
        const msgs = State.chatMessages[State.currentChat] || [];
        let html = `<div class="app-header"><div class="app-back" onclick="backToMessages()">↩</div><div class="app-header-title">${chat.name}</div><div style="font-size:20px">⋮</div></div>`;
        html += `<div class="chat-view"><div class="chat-messages" id="chat-messages">`;
        msgs.forEach(m => {
            html += `<div class="chat-bubble ${m.sent ? 'sent' : 'received'}">${m.text}</div>`;
        });
        html += `</div><div class="chat-input-bar">
            <span style="font-size:22px">📷</span>
            <input type="text" class="chat-input" placeholder="iMessage" id="chat-input" onkeydown="if(event.key==='Enter')sendMessage()">
            <span class="chat-send" onclick="sendMessage()">⬆️</span>
        </div></div>`;
        return html;
    }
    let html = `<div class="app-header"><div class="app-back" onclick="closeApp()">↩ 信息</div><div class="app-header-title">信息</div><div style="font-size:20px">✏️</div></div><div class="app-body"><div class="messages-list">`;
    State.messages.forEach(m => {
        html += `<div class="message-thread" onclick="openChat(${m.id})">
            <div class="message-avatar">${m.avatar}</div>
            <div class="message-info">
                <div class="message-header"><div class="message-name">${m.name}</div><div class="message-time">${m.time}</div></div>
                <div class="message-preview">${m.preview}</div>
            </div>
        </div>`;
    });
    html += `</div></div>`;
    return html;
}

function generatePhoneApp() {
    let html = `<div class="app-header"><div class="app-back" onclick="closeApp()">↩ 电话</div><div class="app-header-title">电话</div><div></div></div><div class="app-body">`;
    html += `<div class="phone-dialer">
        <div class="phone-number" id="phone-number"></div>
        <div class="dial-pad">
            <div class="dial-key" onclick="dial('1')"><div class="dial-key-num">1</div></div>
            <div class="dial-key" onclick="dial('2')"><div class="dial-key-num">2</div><div class="dial-key-sub">ABC</div></div>
            <div class="dial-key" onclick="dial('3')"><div class="dial-key-num">3</div><div class="dial-key-sub">DEF</div></div>
            <div class="dial-key" onclick="dial('4')"><div class="dial-key-num">4</div><div class="dial-key-sub">GHI</div></div>
            <div class="dial-key" onclick="dial('5')"><div class="dial-key-num">5</div><div class="dial-key-sub">JKL</div></div>
            <div class="dial-key" onclick="dial('6')"><div class="dial-key-num">6</div><div class="dial-key-sub">MNO</div></div>
            <div class="dial-key" onclick="dial('7')"><div class="dial-key-num">7</div><div class="dial-key-sub">PQRS</div></div>
            <div class="dial-key" onclick="dial('8')"><div class="dial-key-num">8</div><div class="dial-key-sub">TUV</div></div>
            <div class="dial-key" onclick="dial('9')"><div class="dial-key-num">9</div><div class="dial-key-sub">WXYZ</div></div>
            <div class="dial-key" onclick="dial('*')"><div class="dial-key-num">*</div></div>
            <div class="dial-key" onclick="dial('0')"><div class="dial-key-num">0</div><div class="dial-key-sub">+</div></div>
            <div class="dial-key" onclick="dial('#')"><div class="dial-key-num">#</div></div>
        </div>
        <div class="call-btn" onclick="makeCall()">📞</div>
    </div>`;
    html += `</div><div class="phone-tabs">
        <div class="phone-tab active"><div class="phone-tab-icon">⭐</div><div>个人收藏</div></div>
        <div class="phone-tab"><div class="phone-tab-icon">🕐</div><div>最近通话</div></div>
        <div class="phone-tab"><div class="phone-tab-icon">👤</div><div>通讯录</div></div>
        <div class="phone-tab"><div class="phone-tab-icon">🔢</div><div>拨号键盘</div></div>
        <div class="phone-tab"><div class="phone-tab-icon">📮</div><div>语音留言</div></div>
    </div>`;
    return html;
}

function generateClockApp() {
    let html = `<div class="app-header"><div class="app-back" onclick="closeApp()">↩ 时钟</div><div class="app-header-title">时钟</div><div style="font-size:20px">+</div></div><div class="app-body">`;
    html += `<div class="clock-tab-content">
        <div class="world-clock-list">
            <div style="font-size:28px;font-weight:700;margin-bottom:16px">世界时钟</div>`;
    State.worldClocks.forEach(wc => {
        const now = new Date();
        const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
        const cityTime = new Date(utc + (3600000 * wc.timezone));
        const hours = cityTime.getHours().toString().padStart(2, '0');
        const mins = cityTime.getMinutes().toString().padStart(2, '0');
        const diff = wc.timezone - 8;
        const diffText = diff === 0 ? '今天' : (diff > 0 ? `+${diff}小时` : `${diff}小时`);
        html += `<div class="world-clock-item">
            <div><div class="world-clock-city">${wc.city}</div><div class="world-clock-diff">${diffText}</div></div>
            <div class="world-clock-time">${hours}:${mins}</div>
        </div>`;
    });
    html += `</div><div style="margin-top:32px"><div style="font-size:28px;font-weight:700;margin-bottom:16px">闹钟</div><div class="alarm-list">`;
    State.alarms.forEach(alarm => {
        html += `<div class="alarm-item">
            <div><div class="alarm-time">${alarm.time}</div><div class="alarm-label">${alarm.label}</div></div>
            <div class="alarm-toggle ${alarm.active ? 'active' : ''}" onclick="toggleAlarm(${alarm.id})"></div>
        </div>`;
    });
    html += `</div></div>`;
    html += `<div style="margin-top:32px"><div style="font-size:28px;font-weight:700;margin-bottom:16px">秒表</div>
        <div class="stopwatch-display" id="stopwatch-display">00:00.00</div>
        <div class="stopwatch-controls">
            <div class="stopwatch-btn reset" onclick="resetStopwatch()">复位</div>
            <div class="stopwatch-btn ${State.stopwatch.running ? 'stop' : 'start'}" id="stopwatch-btn" onclick="toggleStopwatch()">${State.stopwatch.running ? '停止' : '开始'}</div>
        </div>
    </div>`;
    html += `<div style="margin-top:32px"><div style="font-size:28px;font-weight:700;margin-bottom:16px">计时器</div>
        <div class="timer-display" id="timer-display">05:00</div>
        <div class="timer-picker">
            <div class="timer-picker-col"><div class="timer-picker-value">05</div><div class="timer-picker-label">小时</div></div>
            <div style="font-size:24px">:</div>
            <div class="timer-picker-col"><div class="timer-picker-value">00</div><div class="timer-picker-label">分钟</div></div>
            <div style="font-size:24px">:</div>
            <div class="timer-picker-col"><div class="timer-picker-value">00</div><div class="timer-picker-label">秒钟</div></div>
        </div>
        <div style="display:flex;justify-content:center;margin-top:20px;">
            <div class="stopwatch-btn ${State.timer.running ? 'stop' : 'start'}" style="width:80px;" onclick="toggleTimer()">${State.timer.running ? '停止' : '开始'}</div>
        </div>
    </div>`;
    html += `</div></div>`;
    return html;
}

function generateCalendarApp() {
    const now = State.calendar.currentDate;
    const year = now.getFullYear();
    const month = now.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const monthNames = ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'];
    const dayNames = ['日', '一', '二', '三', '四', '五', '六'];

    let html = `<div class="app-header"><div class="app-back" onclick="closeApp()">↩ 日历</div><div class="app-header-title">${year}年${monthNames[month]}</div><div style="font-size:20px">⋮</div></div><div class="app-body">`;
    html += `<div class="calendar-header"><div class="calendar-nav"><span>‹</span><span>›</span></div><div class="calendar-month">${monthNames[month]}</div><div></div></div>`;
    html += `<div class="calendar-grid">`;
    dayNames.forEach(d => html += `<div class="calendar-day-header">${d}</div>`);
    for (let i = 0; i < firstDay; i++) html += `<div class="calendar-day other-month"></div>`;
    for (let d = 1; d <= daysInMonth; d++) {
        const isToday = d === new Date().getDate() && month === new Date().getMonth();
        const isSelected = d === State.calendar.selectedDate.getDate();
        html += `<div class="calendar-day ${isToday ? 'today' : ''} ${isSelected ? 'selected' : ''}">${d}</div>`;
    }
    html += `</div>`;
    html += `<div class="calendar-events"><div style="font-size:20px;font-weight:700;margin-bottom:12px">日程</div>`;
    const todayEvents = State.calendar.events.filter(e => e.date === State.calendar.selectedDate.getDate());
    if (todayEvents.length === 0) html += `<div style="color:#8e8e93;text-align:center;padding:20px">今天没有日程</div>`;
    todayEvents.forEach(e => {
        html += `<div class="calendar-event"><div class="calendar-event-dot" style="background:${e.color}"></div><div class="calendar-event-time">${e.time}</div><div class="calendar-event-title">${e.title}</div></div>`;
    });
    html += `</div></div>`;
    return html;
}

function generateFilesApp() {
    let html = `<div class="app-header"><div class="app-back" onclick="closeApp()">↩ 文件</div><div class="app-header-title">文件</div><div style="font-size:20px">⋮</div></div><div class="app-body">`;
    html += `<div class="files-segment"><div class="files-segment-btn active">浏览</div><div class="files-segment-btn">最近</div><div class="files-segment-btn">共享</div></div>`;
    html += `<div class="files-grid">`;
    State.files.forEach(f => {
        html += `<div class="file-item">
            <div class="file-icon">${f.icon}</div>
            <div class="file-name">${f.name}</div>
            <div class="file-info">${f.type === 'folder' ? f.count + '项' : f.size}</div>
        </div>`;
    });
    html += `</div></div>`;
    return html;
}

function generateAppStoreApp() {
    let html = `<div class="app-header"><div class="app-back" onclick="closeApp()">↩ App Store</div><div class="app-header-title">App Store</div><div style="font-size:20px">👤</div></div><div class="app-body">`;
    html += `<div class="store-header"><div class="store-title">App Store</div></div>`;
    html += `<div class="store-card"><div class="store-card-title">本周精选</div><div class="store-card-subtitle">发现精彩应用</div></div>`;
    html += `<div style="font-size:20px;font-weight:700;margin:16px 16px 12px">推荐应用</div>`;
    html += `<div class="store-app-list">`;
    State.storeApps.forEach(app => {
        html += `<div class="store-app-item">
            <div class="store-app-icon" style="background:${app.color}">${app.icon}</div>
            <div class="store-app-info"><div class="store-app-name">${app.name}</div><div class="store-app-desc">${app.desc}</div></div>
            <div class="store-get-btn">获取</div>
        </div>`;
    });
    html += `</div></div>`;
    return html;
}

function generateMusicApp() {
    let html = `<div class="app-header"><div class="app-back" onclick="closeApp()">↩ 音乐</div><div class="app-header-title">音乐</div><div style="font-size:20px">⋮</div></div><div class="app-body">`;
    html += `<div class="music-header"><div class="music-title">资料库</div></div>`;
    html += `<div class="music-section"><div class="music-section-title">最近播放</div><div class="music-horizontal">`;
    State.music.playlist.forEach(song => {
        html += `<div class="music-card" onclick="playMusic('${song.title}')">
            <div class="music-card-art">${song.art}</div>
            <div class="music-card-title">${song.title}</div>
            <div class="music-card-artist">${song.artist}</div>
        </div>`;
    });
    html += `</div></div>`;
    html += `<div class="music-section"><div class="music-section-title">播放列表</div>`;
    State.music.playlist.forEach(song => {
        html += `<div class="settings-item" style="margin:0 0 8px" onclick="playMusic('${song.title}')">
            <div class="settings-icon" style="background:linear-gradient(135deg,#ff6b6b,#4ecdc4);font-size:16px">${song.art}</div>
            <div class="settings-text">${song.title}</div>
            <div class="settings-arrow">›</div>
        </div>`;
    });
    html += `</div></div>`;
    if (State.music.playing) {
        html += `<div class="music-player ${State.darkMode ? 'dark' : ''}" onclick="showNowPlaying()">
            <div class="music-player-art">${State.music.current.art}</div>
            <div class="music-player-info"><div class="music-player-title">${State.music.current.title}</div><div class="music-player-artist">${State.music.current.artist}</div></div>
            <div class="music-player-controls"><span>⏮</span><span>⏸</span><span>⏭</span></div>
        </div>`;
    }
    return html;
}

function generateWeatherApp() {
    let html = `<div class="app-header"><div class="app-back" onclick="closeApp()">↩ 天气</div><div class="app-header-title">天气</div><div style="font-size:20px">⋮</div></div><div class="app-body">`;
    html += `<div class="weather-header">
        <div class="weather-city">${State.weather.city}</div>
        <div class="weather-temp">${State.weather.temp}°</div>
        <div class="weather-condition">${State.weather.condition}</div>
        <div class="weather-high-low">最高: ${State.weather.high}° 最低: ${State.weather.low}°</div>
    </div>`;
    html += `<div class="weather-hourly">`;
    State.weather.hourly.forEach(h => {
        html += `<div class="weather-hour"><div class="weather-hour-time">${h.time}</div><div class="weather-hour-icon">${h.icon}</div><div class="weather-hour-temp">${h.temp}°</div></div>`;
    });
    html += `</div>`;
    html += `<div class="weather-daily">`;
    State.weather.daily.forEach(d => {
        html += `<div class="weather-day">
            <div class="weather-day-name">${d.day}</div>
            <div class="weather-day-icon">${d.icon}</div>
            <div class="weather-day-bar"><div class="weather-day-bar-fill"></div></div>
            <div class="weather-day-low">${d.low}°</div>
            <div class="weather-day-high">${d.high}°</div>
        </div>`;
    });
    html += `</div></div>`;
    return html;
}

function generateCalculatorApp() {
    return `<div class="app-header" style="background:transparent;border:none;position:absolute;z-index:10;"><div class="app-back" onclick="closeApp()" style="color:#fff">↩</div><div></div><div></div></div>
    <div class="app-body" style="padding:0">
        <div class="calculator">
            <div class="calc-display" id="calc-display">0</div>
            <div class="calc-keypad">
                <div class="calc-btn gray" onclick="calcClear()">AC</div>
                <div class="calc-btn gray" onclick="calcOp('+/-')">+/-</div>
                <div class="calc-btn gray" onclick="calcOp('%')">%</div>
                <div class="calc-btn orange" onclick="calcOp('/')">÷</div>
                <div class="calc-btn dark" onclick="calcNum('7')">7</div>
                <div class="calc-btn dark" onclick="calcNum('8')">8</div>
                <div class="calc-btn dark" onclick="calcNum('9')">9</div>
                <div class="calc-btn orange" onclick="calcOp('*')">×</div>
                <div class="calc-btn dark" onclick="calcNum('4')">4</div>
                <div class="calc-btn dark" onclick="calcNum('5')">5</div>
                <div class="calc-btn dark" onclick="calcNum('6')">6</div>
                <div class="calc-btn orange" onclick="calcOp('-')">−</div>
                <div class="calc-btn dark" onclick="calcNum('1')">1</div>
                <div class="calc-btn dark" onclick="calcNum('2')">2</div>
                <div class="calc-btn dark" onclick="calcNum('3')">3</div>
                <div class="calc-btn orange" onclick="calcOp('+')">+</div>
                <div class="calc-btn dark zero" onclick="calcNum('0')">0</div>
                <div class="calc-btn dark" onclick="calcNum('.')">.</div>
                <div class="calc-btn orange" onclick="calcEqual()">=</div>
            </div>
        </div>
    </div>`;
}

function generateNotesApp() {
    if (State.currentNote) {
        const note = State.notes.find(n => n.id === State.currentNote);
        return `<div class="app-header"><div class="app-back" onclick="backToNotes()">↩</div><div class="app-header-title">备忘录</div><div style="font-size:20px">⋮</div></div>
        <div class="app-body"><div class="note-editor">
            <input type="text" class="note-editor-title" value="${note.title}" id="note-title" placeholder="标题">
            <textarea class="note-editor-body" id="note-body" placeholder="在此输入内容...">${note.body}</textarea>
        </div></div>`;
    }
    let html = `<div class="app-header"><div class="app-back" onclick="closeApp()">↩ 备忘录</div><div class="app-header-title">备忘录</div><div style="font-size:20px" onclick="createNote()">✏️</div></div><div class="app-body">`;
    html += `<div class="notes-folders"><div class="notes-folder active">全部</div><div class="notes-folder">工作</div><div class="notes-folder">个人</div><div class="notes-folder">想法</div></div>`;
    html += `<div class="notes-list">`;
    State.notes.forEach(note => {
        html += `<div class="note-item" onclick="openNote(${note.id})">
            <div class="note-title">${note.title}</div>
            <div class="note-preview">${note.body.replace(/\n/g, ' ')}</div>
            <div class="note-time">${note.time}</div>
        </div>`;
    });
    html += `</div></div>`;
    return html;
}


// ===== APP EVENT SETUP =====
function setupAppEvents(appId) {
    switch (appId) {
        case 'camera':
            setupCamera();
            break;
        case 'calculator':
            // Calculator events are inline
            break;
        case 'clock':
            if (State.stopwatch.running) startStopwatchInterval();
            break;
    }
}

// ===== CAMERA =====
function setupCamera() {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: true })
            .then(stream => {
                const video = document.querySelector('.camera-video');
                if (video) {
                    video.srcObject = stream;
                    video.play();
                    document.querySelector('.camera-placeholder').style.display = 'none';
                }
            })
            .catch(() => {
                // Camera not available, show placeholder
            });
    }
}

// ===== SAFARI =====
function navigateSafari(url) {
    if (!url.startsWith('http')) url = 'https://' + url;
    const frame = $('safari-frame');
    if (frame) frame.src = url;
}

function reloadSafari() {
    const frame = $('safari-frame');
    if (frame) frame.src = frame.src;
}

// ===== MESSAGES =====
function openChat(id) {
    State.currentChat = id;
    const win = document.querySelector('.app-window.active');
    if (win) {
        win.innerHTML = generateMessagesApp();
        const msgs = $('chat-messages');
        if (msgs) msgs.scrollTop = msgs.scrollHeight;
    }
}

function backToMessages() {
    State.currentChat = null;
    const win = document.querySelector('.app-window.active');
    if (win) win.innerHTML = generateMessagesApp();
}

function sendMessage() {
    const input = $('chat-input');
    if (!input || !input.value.trim()) return;
    const text = input.value.trim();
    if (!State.chatMessages[State.currentChat]) State.chatMessages[State.currentChat] = [];
    State.chatMessages[State.currentChat].push({ text, sent: true });
    input.value = '';
    const win = document.querySelector('.app-window.active');
    if (win) win.innerHTML = generateMessagesApp();
    setTimeout(() => {
        State.chatMessages[State.currentChat].push({ text: '收到！👍', sent: false });
        const win2 = document.querySelector('.app-window.active');
        if (win2) win2.innerHTML = generateMessagesApp();
    }, 1500);
}

// ===== PHONE =====
function dial(key) {
    const display = $('phone-number');
    if (display) {
        let current = display.textContent;
        if (current.length < 13) {
            display.textContent = current + key;
        }
    }
}

function makeCall() {
    const display = $('phone-number');
    if (display && display.textContent) {
        alert('正在拨打: ' + display.textContent);
        display.textContent = '';
    }
}

// ===== CLOCK =====
function toggleAlarm(id) {
    const alarm = State.alarms.find(a => a.id === id);
    if (alarm) alarm.active = !alarm.active;
    const win = document.querySelector('.app-window.active');
    if (win) win.innerHTML = generateClockApp();
}

let stopwatchInterval = null;
function toggleStopwatch() {
    if (State.stopwatch.running) {
        State.stopwatch.running = false;
        clearInterval(stopwatchInterval);
    } else {
        State.stopwatch.running = true;
        State.stopwatch.startTime = Date.now() - State.stopwatch.time;
        startStopwatchInterval();
    }
    const win = document.querySelector('.app-window.active');
    if (win) win.innerHTML = generateClockApp();
}

function startStopwatchInterval() {
    stopwatchInterval = setInterval(() => {
        State.stopwatch.time = Date.now() - State.stopwatch.startTime;
        const display = $('stopwatch-display');
        if (display) {
            const mins = Math.floor(State.stopwatch.time / 60000).toString().padStart(2, '0');
            const secs = Math.floor((State.stopwatch.time % 60000) / 1000).toString().padStart(2, '0');
            const ms = Math.floor((State.stopwatch.time % 1000) / 10).toString().padStart(2, '0');
            display.textContent = `${mins}:${secs}.${ms}`;
        }
    }, 10);
}

function resetStopwatch() {
    State.stopwatch.running = false;
    State.stopwatch.time = 0;
    clearInterval(stopwatchInterval);
    const win = document.querySelector('.app-window.active');
    if (win) win.innerHTML = generateClockApp();
}

function toggleTimer() {
    State.timer.running = !State.timer.running;
    const win = document.querySelector('.app-window.active');
    if (win) win.innerHTML = generateClockApp();
}

// ===== CALCULATOR =====
function calcNum(n) {
    if (State.calculator.reset) {
        State.calculator.display = '0';
        State.calculator.reset = false;
    }
    if (State.calculator.display === '0' && n !== '.') {
        State.calculator.display = n;
    } else if (n === '.' && State.calculator.display.includes('.')) {
        return;
    } else {
        State.calculator.display += n;
    }
    updateCalcDisplay();
}

function calcOp(op) {
    State.calculator.prev = parseFloat(State.calculator.display);
    State.calculator.op = op;
    State.calculator.reset = true;
}

function calcEqual() {
    if (State.calculator.op === null || State.calculator.prev === null) return;
    const current = parseFloat(State.calculator.display);
    let result;
    switch (State.calculator.op) {
        case '+': result = State.calculator.prev + current; break;
        case '-': result = State.calculator.prev - current; break;
        case '*': result = State.calculator.prev * current; break;
        case '/': result = State.calculator.prev / current; break;
        case '%': result = State.calculator.prev % current; break;
        default: result = current;
    }
    State.calculator.display = String(Math.round(result * 100000000) / 100000000);
    State.calculator.op = null;
    State.calculator.prev = null;
    State.calculator.reset = true;
    updateCalcDisplay();
}

function calcClear() {
    State.calculator = { display: '0', prev: null, op: null, reset: false };
    updateCalcDisplay();
}

function updateCalcDisplay() {
    const display = $('calc-display');
    if (display) display.textContent = State.calculator.display;
}

// ===== NOTES =====
function openNote(id) {
    State.currentNote = id;
    const win = document.querySelector('.app-window.active');
    if (win) win.innerHTML = generateNotesApp();
}

function backToNotes() {
    const title = $('note-title');
    const body = $('note-body');
    if (title && body) {
        const note = State.notes.find(n => n.id === State.currentNote);
        if (note) {
            note.title = title.value;
            note.body = body.value;
            note.time = '刚刚';
        }
    }
    State.currentNote = null;
    const win = document.querySelector('.app-window.active');
    if (win) win.innerHTML = generateNotesApp();
}

function createNote() {
    const newId = Math.max(...State.notes.map(n => n.id), 0) + 1;
    State.notes.unshift({ id: newId, title: '新备忘录', body: '', time: '刚刚', folder: '备忘录' });
    State.currentNote = newId;
    const win = document.querySelector('.app-window.active');
    if (win) win.innerHTML = generateNotesApp();
}

// ===== MUSIC =====
function playMusic(title) {
    const song = State.music.playlist.find(s => s.title === title);
    if (song) {
        State.music.current = song;
        State.music.playing = true;
        const win = document.querySelector('.app-window.active');
        if (win) win.innerHTML = generateMusicApp();
    }
}

function showNowPlaying() {
    const overlay = document.createElement('div');
    overlay.className = 'music-now-playing';
    overlay.innerHTML = `
        <div class="music-now-art">${State.music.current.art}</div>
        <div class="music-now-title">${State.music.current.title}</div>
        <div class="music-now-artist">${State.music.current.artist}</div>
        <div class="music-progress"><div class="music-progress-bar"></div></div>
        <div class="music-now-controls">
            <span>🔀</span><span>⏮</span><span class="play-btn" onclick="togglePlay()">${State.music.playing ? '⏸' : '▶️'}</span><span>⏭</span><span>🔁</span>
        </div>
        <div style="position:absolute;bottom:40px;font-size:14px;color:rgba(255,255,255,0.5);cursor:pointer;" onclick="this.parentElement.remove()">向下滑动关闭</div>
    `;
    document.getElementById('screen').appendChild(overlay);
    requestAnimationFrame(() => overlay.classList.add('active'));
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) overlay.remove();
    });
}

function togglePlay() {
    State.music.playing = !State.music.playing;
    const win = document.querySelector('.app-window.active');
    if (win) win.innerHTML = generateMusicApp();
}

// ===== PHOTOS =====
function viewPhoto(id) {
    const photo = State.photos.find(p => p.id === id);
    if (!photo) return;
    const viewer = document.createElement('div');
    viewer.className = 'photo-viewer';
    viewer.innerHTML = `<div style="font-size:120px">${photo.emoji}</div>`;
    document.getElementById('screen').appendChild(viewer);
    requestAnimationFrame(() => viewer.classList.add('active'));
    viewer.addEventListener('click', () => {
        viewer.classList.remove('active');
        setTimeout(() => viewer.remove(), 300);
    });
}

// ===== SYSTEM FUNCTIONS =====
function toggleDarkMode(force) {
    if (typeof force === 'boolean') State.darkMode = force;
    else State.darkMode = !State.darkMode;
    document.body.classList.toggle('dark-mode', State.darkMode);
    const nc = $('nc-content');
    if (nc) nc.classList.toggle('dark', State.darkMode);
    const folder = $('folder-view');
    if (folder) folder.classList.toggle('dark', State.darkMode);
    const menu = $('context-menu');
    if (menu) menu.classList.toggle('dark', State.darkMode);
    const windows = document.querySelectorAll('.app-window');
    windows.forEach(w => w.classList.toggle('dark', State.darkMode));
    const toggle = $('dark-mode-toggle');
    if (toggle) toggle.classList.toggle('active', State.darkMode);
}

function changeWallpaper() {
    State.currentWallpaper = (State.currentWallpaper + 1) % State.wallpapers.length;
    const wp = State.wallpapers[State.currentWallpaper];
    $('lock-screen').className = wp;
    $('home-screen').className = wp;
}

// ===== EVENT LISTENERS =====
function setupEventListeners() {
    const screen = $('screen');
    const lockScreen = $('lock-screen');
    const homeScreen = $('home-screen');
    const controlCenter = $('control-center');
    const notificationCenter = $('notification-center');
    const appSwitcher = $('app-switcher');
    const dynamicIsland = $('dynamic-island');
    const homeIndicator = $('home-indicator');
    const contextMenu = $('context-menu');
    const overlay = $('overlay');
    const folderView = $('folder-view');

    // Lock screen swipe up
    let lockStartY = 0;
    lockScreen.addEventListener('touchstart', e => {
        lockStartY = e.touches[0].clientY;
    }, { passive: true });

    lockScreen.addEventListener('touchend', e => {
        const diff = lockStartY - e.changedTouches[0].clientY;
        if (diff > 80) {
            unlock();
        }
    }, { passive: true });

    // Mouse fallback for desktop
    lockScreen.addEventListener('mousedown', e => lockStartY = e.clientY);
    lockScreen.addEventListener('mouseup', e => {
        const diff = lockStartY - e.clientY;
        if (diff > 80) unlock();
    });

    // Home screen swipe
    let homeStartX = 0, homeStartY = 0;
    homeScreen.addEventListener('touchstart', e => {
        homeStartX = e.touches[0].clientX;
        homeStartY = e.touches[0].clientY;
        isSwiping = true;
    }, { passive: true });

    homeScreen.addEventListener('touchmove', e => {
        if (!isSwiping || State.editMode || State.activeApp) return;
        const diffX = homeStartX - e.touches[0].clientX;
        const diffY = homeStartY - e.touches[0].clientY;

        // Horizontal page swipe
        if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 30) {
            e.preventDefault();
        }
    }, { passive: false });

    homeScreen.addEventListener('touchend', e => {
        if (!isSwiping) return;
        isSwiping = false;
        const diffX = homeStartX - e.changedTouches[0].clientX;
        const diffY = homeStartY - e.changedTouches[0].clientY;

        if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
            if (diffX > 0 && State.currentPage < State.totalPages - 1) {
                State.currentPage++;
            } else if (diffX < 0 && State.currentPage > 0) {
                State.currentPage--;
            }
            updatePageDots();
            $('pages-container').style.transform = `translateX(-${State.currentPage * 100}%)`;
        }
    }, { passive: true });

    // Mouse fallback for desktop page swipe
    homeScreen.addEventListener('mousedown', e => { homeStartX = e.clientX; homeStartY = e.clientY; });
    homeScreen.addEventListener('mouseup', e => {
        const diffX = homeStartX - e.clientX;
        const diffY = homeStartY - e.clientY;
        if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
            if (diffX > 0 && State.currentPage < State.totalPages - 1) State.currentPage++;
            else if (diffX < 0 && State.currentPage > 0) State.currentPage--;
            updatePageDots();
            $('pages-container').style.transform = `translateX(-${State.currentPage * 100}%)`;
        }
    });

    // Control Center (swipe from top-right)
    let ccStartY = 0;
    screen.addEventListener('touchstart', e => {
        const touch = e.touches[0];
        if (touch.clientX > window.innerWidth * 0.7 && touch.clientY < 50) {
            ccStartY = touch.clientY;
        }
    }, { passive: true });

    screen.addEventListener('touchmove', e => {
        const touch = e.touches[0];
        if (touch.clientX > window.innerWidth * 0.7 && ccStartY > 0) {
            const diff = touch.clientY - ccStartY;
            if (diff > 30) {
                controlCenter.classList.add('open');
            }
        }
    }, { passive: true });

    // Notification Center (swipe from top-left)
    let ncStartY = 0;
    screen.addEventListener('touchstart', e => {
        const touch = e.touches[0];
        if (touch.clientX < window.innerWidth * 0.3 && touch.clientY < 50) {
            ncStartY = touch.clientY;
        }
    }, { passive: true });

    screen.addEventListener('touchmove', e => {
        const touch = e.touches[0];
        if (touch.clientX < window.innerWidth * 0.3 && ncStartY > 0) {
            const diff = touch.clientY - ncStartY;
            if (diff > 30) {
                notificationCenter.classList.add('open');
            }
        }
    }, { passive: true });

    // Close centers by swiping up
    controlCenter.addEventListener('touchstart', e => { touchStartY = e.touches[0].clientY; }, { passive: true });
    controlCenter.addEventListener('touchend', e => {
        if (touchStartY - e.changedTouches[0].clientY > 50) {
            controlCenter.classList.remove('open');
        }
    }, { passive: true });

    notificationCenter.addEventListener('touchstart', e => { touchStartY = e.touches[0].clientY; }, { passive: true });
    notificationCenter.addEventListener('touchend', e => {
        if (touchStartY - e.changedTouches[0].clientY > 50) {
            notificationCenter.classList.remove('open');
        }
    }, { passive: true });

    // Desktop fallback for centers
    document.addEventListener('keydown', e => {
        if (e.key === 'c' && e.ctrlKey) controlCenter.classList.toggle('open');
        if (e.key === 'n' && e.ctrlKey) notificationCenter.classList.toggle('open');
    });

    // Home Indicator - go home / app switcher
    let hiStartY = 0, hiStartTime = 0;
    homeIndicator.addEventListener('touchstart', e => {
        hiStartY = e.touches[0].clientY;
        hiStartTime = Date.now();
    }, { passive: true });

    homeIndicator.addEventListener('touchend', e => {
        const diffY = hiStartY - e.changedTouches[0].clientY;
        const duration = Date.now() - hiStartTime;

        if (diffY > 100 && duration < 300) {
            // Quick swipe up - go home
            if (State.activeApp) {
                closeApp();
            } else if (controlCenter.classList.contains('open')) {
                controlCenter.classList.remove('open');
            } else if (notificationCenter.classList.contains('open')) {
                notificationCenter.classList.remove('open');
            } else if (appSwitcher.classList.contains('open')) {
                appSwitcher.classList.remove('open');
            }
        } else if (diffY > 50 && duration > 300) {
            // Long swipe - app switcher
            if (!appSwitcher.classList.contains('open')) {
                appSwitcher.classList.add('open');
            }
        }
    }, { passive: true });

    // Mouse fallback
    homeIndicator.addEventListener('mousedown', e => { hiStartY = e.clientY; hiStartTime = Date.now(); });
    homeIndicator.addEventListener('mouseup', e => {
        const diffY = hiStartY - e.clientY;
        const duration = Date.now() - hiStartTime;
        if (diffY > 50) {
            if (State.activeApp) closeApp();
            else if (controlCenter.classList.contains('open')) controlCenter.classList.remove('open');
            else if (notificationCenter.classList.contains('open')) notificationCenter.classList.remove('open');
            else if (appSwitcher.classList.contains('open')) appSwitcher.classList.remove('open');
        }
    });

    // App Switcher close
    appSwitcher.addEventListener('touchstart', e => {
        touchStartY = e.touches[0].clientY;
    }, { passive: true });
    appSwitcher.addEventListener('touchend', e => {
        if (touchStartY - e.changedTouches[0].clientY > 50) {
            appSwitcher.classList.remove('open');
        }
    }, { passive: true });

    // Close app switcher cards
    document.addEventListener('click', e => {
        if (e.target.classList.contains('as-card-close')) {
            const card = e.target.closest('.as-card');
            if (card) {
                card.style.transform = 'translateX(100%)';
                card.style.opacity = '0';
                setTimeout(() => card.remove(), 300);
            }
        }
    });

    // Context menu on long press
    let longPressTimer = null;
    homeScreen.addEventListener('touchstart', e => {
        if (State.activeApp || State.editMode) return;
        longPressTimer = setTimeout(() => {
            const touch = e.touches[0];
            contextMenu.style.left = touch.clientX + 'px';
            contextMenu.style.top = touch.clientY + 'px';
            contextMenu.classList.add('active');
            overlay.classList.add('active');
        }, 600);
    }, { passive: true });

    homeScreen.addEventListener('touchend', () => {
        clearTimeout(longPressTimer);
    }, { passive: true });

    homeScreen.addEventListener('touchmove', () => {
        clearTimeout(longPressTimer);
    }, { passive: true });

    // Context menu actions
    contextMenu.addEventListener('click', e => {
        const action = e.target.closest('.context-menu-item')?.dataset.action;
        if (!action) return;
        contextMenu.classList.remove('active');
        overlay.classList.remove('active');

        switch (action) {
            case 'edit':
                toggleEditMode();
                break;
            case 'wallpaper':
                changeWallpaper();
                break;
            case 'settings':
                launchApp('settings');
                break;
        }
    });

    overlay.addEventListener('click', () => {
        contextMenu.classList.remove('active');
        folderView.classList.remove('active');
        overlay.classList.remove('active');
    });

    // Control Center toggles
    document.querySelectorAll('.cc-toggle').forEach(t => {
        t.addEventListener('click', () => {
            t.classList.toggle('active');
            const toggle = t.dataset.toggle;
            if (toggle === 'flashlight') {
                document.body.style.filter = t.classList.contains('active') ? 'brightness(1.5)' : '';
            }
        });
    });

    // Dynamic Island tap
    dynamicIsland.addEventListener('click', () => {
        dynamicIsland.classList.toggle('expanded');
        if (dynamicIsland.classList.contains('expanded')) {
            $('dynamic-island-content').textContent = '正在播放: ' + (State.music.playing ? State.music.current.title : '无');
        }
        setTimeout(() => {
            dynamicIsland.classList.remove('expanded');
        }, 3000);
    });

    // Lock screen flashlight/camera
    document.querySelector('.lock-flashlight').addEventListener('click', () => {
        document.body.style.filter = document.body.style.filter ? '' : 'brightness(1.5)';
    });
    document.querySelector('.lock-camera').addEventListener('click', () => {
        unlock();
        setTimeout(() => launchApp('camera'), 500);
    });

    // Prevent context menu on right click
    document.addEventListener('contextmenu', e => e.preventDefault());

    // Keyboard shortcuts
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape') {
            if (State.activeApp) closeApp();
            else if (appSwitcher.classList.contains('open')) appSwitcher.classList.remove('open');
            else if (controlCenter.classList.contains('open')) controlCenter.classList.remove('open');
            else if (notificationCenter.classList.contains('open')) notificationCenter.classList.remove('open');
        }
        if (e.key === 'l' && e.ctrlKey) {
            if (State.locked) unlock();
            else { State.locked = true; $('lock-screen').classList.remove('hidden'); }
        }
    });
}

function unlock() {
    if (!State.locked) return;
    State.locked = false;
    $('lock-screen').classList.add('hidden');
    // Haptic feedback simulation
    if (navigator.vibrate) navigator.vibrate(50);
}

function toggleEditMode() {
    State.editMode = !State.editMode;
    const homeScreen = $('home-screen');
    homeScreen.classList.toggle('edit-mode', State.editMode);
    renderHomeScreen();
    renderDock();
}

function updatePageDots() {
    const dots = $$('.page-dot');
    dots.forEach((d, i) => d.classList.toggle('active', i === State.currentPage));
}

// ===== CLOCK & BATTERY =====
function startClock() {
    setInterval(() => {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const timeStr = `${hours}:${minutes}`;
        $('status-time').textContent = timeStr;
        $('lock-time').textContent = timeStr;

        const month = now.getMonth() + 1;
        const day = now.getDate();
        const weekDays = ['日', '一', '二', '三', '四', '五', '六'];
        const dateStr = `${month}月${day}日 星期${weekDays[now.getDay()]}`;
        $('lock-date').textContent = dateStr;
        $('nc-date').textContent = dateStr;

        // Widget clock update
        const widgetClock = document.querySelector('.widget-clock-time');
        if (widgetClock) widgetClock.textContent = timeStr;
    }, 1000);
}

function updateDateTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    $('status-time').textContent = `${hours}:${minutes}`;
    $('lock-time').textContent = `${hours}:${minutes}`;
}

function startBatterySimulation() {
    setInterval(() => {
        State.battery = Math.max(0, Math.min(100, State.battery + (Math.random() - 0.5) * 2));
        $('battery-fill').style.width = State.battery + '%';
        document.querySelectorAll('.lock-widget').forEach((w, i) => {
            if (i === 1) w.querySelector('div:last-child').textContent = Math.round(State.battery) + '%';
        });
    }, 30000);
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', init);

// Service Worker registration
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js')
        .then(reg => console.log('SW registered:', reg.scope))
        .catch(err => console.log('SW registration failed:', err));
}
