# tradable-domain

---

## 简体中文

### 项目介绍

tradable-domain 是一款专为域名出售/交易设计的静态展示页面，提供简洁高效的展示和多语言支持，帮助卖家向全球潜在买家展示域名状态与联系方式。

### 核心功能

- 可售状态标识：展示域名“出售中”状态
- 联系方式集成：支持邮箱、电话、微信等，多渠道沟通并支持一键复制
- 响应式布局：适配桌面、平板与移动设备
- 多语言支持：中文/英文/日文，采用懒加载切换
- 现代 UI：玻璃拟态风格与流畅动画
- 纯静态部署：无需服务器，适合 CDN 加速

### 技术栈

- HTML5：语义化结构
- CSS3：响应式与动画效果
- JavaScript：原生交互（语言切换、复制、i18n 懒加载）
- 无框架依赖：轻量高效

### 文件结构

```text
tradable-domain/
├── index.html        # 主页面（唯一入口）
├── css/
│   └── style.css     # 样式文件
└── js/
    ├── config.js     # 配置（域名、联系方式、语言列表）
    ├── script.js     # 业务逻辑（i18n、交互）
    └── locales/      # 多语言包
        ├── zh.js
        ├── en.js
        └── ja.js
``` 

### 部署与访问

- 推荐托管：Cloudflare Pages（全球 CDN）
- 部署方式：将静态文件上传到任意静态托管平台（Cloudflare Pages/GitHub Pages 等）

### 使用指南

- 配置修改：编辑 `js/config.js`，设置出售域名、联系方式与默认语言
- 添加语言：在 `js/locales` 新增语言包并在配置中注册
- 本地预览：双击 `index.html` 打开（静态页面无需特殊服务器）

### 联系方式

- 邮箱：<your-email@example.com>（请替换）
- 电话：+86 123 4567 8900（请替换）
- 微信：domain-seller（页面支持点击复制）

### 许可证

本项目采用 MIT License，允许自由使用、修改与分发，保留原作者署名。

---

## English

### Project Introduction

tradable-domain is a static showcase page designed specifically for domain sales and transactions. It provides a concise, efficient presentation and multi-language support to help sellers display domain availability and contact information to potential buyers worldwide.

### Core Features

- Availability status indicator: clearly shows the domain is "For Sale"
- Contact integration: supports email, phone and WeChat, with one-click copy
- Responsive layout: works on desktop, tablet and mobile
- Multi-language support: Chinese / English / Japanese with lazy-loading switching
- Modern UI: glass-morphism style and smooth animations
- Pure static deployment: no server required, optimized for CDN acceleration

### Technology Stack

- HTML5: semantic structure
- CSS3: responsive layout and animations
- JavaScript: vanilla interactions (language switching, copy, i18n lazy loading)
- No framework dependencies: lightweight and fast

### File Structure

```text
tradable-domain/
├── index.html        # Main page (only entry)
├── css/
│   └── style.css     # Style file (responsive + animations)
└── js/
    ├── config.js     # Config (domain, contacts, language list)
    ├── script.js     # Business logic (i18n, interactions)
    └── locales/      # Language packs
        ├── zh.js
        ├── en.js
        └── ja.js
```

### Deployment & Usage

- Recommended hosting: Cloudflare Pages (global CDN)
- Deployment: upload static files to any static hosting platform (Cloudflare Pages / GitHub Pages, etc.)

### Usage Guide

- Configuration: edit `js/config.js` to set the domain for sale, contact information, and default language
- Language extension: add new language packs under `js/locales` and register them in the config
- Local preview: double-click `index.html` to open (static page — no server required)

### Contact

- Email: <your-email@example.com> (please replace)
- Phone: +86 123 4567 8900 (please replace)
- WeChat: domain-seller (click on the page to copy)

### License

This project is released under the MIT License — free to use, modify and distribute with attribution.

Simple Design · Direct Information · Global Acceleration · Ready to Use
