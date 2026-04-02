tradable-domain
**

<<<<<<< HEAD
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

=======
中文版本 | 中文 Documentation
项目介绍
tradable-domain 是一款专为域名出售 / 交易设计的静态展示页面，旨在为域名提供简洁、高效的展示平台。通过现代化 UI 设计与多语言支持，向全球潜在买家清晰传达域名可售状态及联系方式，静态页面架构确保快速部署与全球访问。
核心功能
📌 可售状态标识：明确展示域名 “出售中” 状态，吸引买家关注
📞 联系方式集成：支持邮箱、电话、微信等多渠道沟通，点击复制功能
📱 响应式布局：完美适配桌面端、平板、手机等全设备
🌐 多语言国际化：支持中文 / 英文 / 日文懒加载切换，自动适配全球用户
✨ 现代 UI 设计：玻璃拟态风格 + 流畅动画，视觉专业高端
🚀 极速部署：纯静态页面，无需服务器，支持全球 CDN 加速
技术实现
HTML5：语义化页面结构
CSS3：响应式布局、动画效果、玻璃拟态设计
JavaScript：原生交互逻辑（语言切换、复制功能、i18n 懒加载）
无框架依赖：轻量高效，加载速度快，兼容性强
文件结构
tradable-domain/
├── index.html      # 主页面（唯一入口）
├── css/
│   └── style.css   # 样式文件（响应式+动画）
└── js/
    ├── config.js   # 核心配置（域名、联系方式、语言列表）
    ├── script.js   # 业务逻辑（i18n加载、交互处理）
    └── locales/    # 多语言包目录
        ├── zh.js   # 中文语言包
        ├── en.js   # 英文语言包
        └── ja.js   # 日文语言包

部署与访问
托管平台：Cloudflare Pages（推荐，全球 CDN 加速）
主域名：zeroutopia.com
备用域名：cleancli.com（自动跳转至主域名）
部署方式：上传静态文件至任意静态托管平台即可生效
使用指南
配置修改：编辑 js/config.js，设置出售域名、联系方式、默认语言
语言扩展：在 js/locales 新增语言包，配置文件中注册即可自动生效
本地预览：直接双击 index.html 运行（无 CORS 限制）
线上部署：上传所有文件至 Cloudflare Pages/GitHub Pages 等平台
联系方式
如需购买域名或咨询合作，请通过以下方式联系：
邮箱：your-email@example.com（请替换为真实邮箱）
电话：+86 123 4567 8900（请替换为真实电话）
微信：domain-seller（点击页面可复制）
许可证
📄 MIT License
允许自由使用、修改、分发，保留原项目署名即可。

English Version | English Documentation
Project Introduction
tradable-domain is a static landing page designed specifically for domain name sales/transactions. It provides a concise and efficient display platform for domain names, with modern UI design and multi-language support to clearly convey domain availability and contact information to potential buyers worldwide. The static page architecture ensures fast deployment and global access.
Core Features
📌 Availability Status: Clearly mark the domain as "For Sale" to attract buyers
📞 Contact Integration: Support email, phone, WeChat and other communication channels with one-click copy
📱 Responsive Layout: Fully compatible with desktop, tablet, mobile and all devices
🌐 Multi-language Support: Lazy loading switch between Chinese/English/Japanese, auto-adapt to global users
✨ Modern UI Design: Glass morphism style + smooth animations, professional and high-end visual effect
🚀 Fast Deployment: Pure static page, no server required, supports global CDN acceleration
Technology Stack
HTML5: Semantic page structure
CSS3: Responsive layout, animations, glass morphism design
JavaScript: Native interaction logic (language switch, copy function, i18n lazy loading)
No Framework Dependencies: Lightweight and efficient, fast loading speed, strong compatibility
File Structure
tradable-domain/
├── index.html      # Main page (only entry)
├── css/
│   └── style.css   # Style file (responsive + animations)
└── js/
    ├── config.js   # Core configuration (domain, contacts, language list)
    ├── script.js   # Business logic (i18n loading, interaction handling)
    └── locales/    # Multi-language files directory
        ├── zh.js   # Chinese language pack
        ├── en.js   # English language pack
        └── ja.js   # Japanese language pack

Deployment & Access
Hosting Platform: Cloudflare Pages (recommended, global CDN acceleration)
Main Domain: zeroutopia.com
Backup Domain: cleancli.com (auto-redirect to main domain)
Deployment: Upload static files to any static hosting platform to activate
Usage Guide
Configuration: Edit js/config.js to set the domain name for sale, contact information, and default language
Language Extension: Add new language packs in js/locales and register in the config file to take effect automatically
Local Preview: Double-click index.html to run (no CORS restrictions)
Online Deployment: Upload all files to Cloudflare Pages/GitHub Pages or other platforms
Contact Information
For domain purchase or cooperation inquiries, please contact via:
Email: your-email@example.com (replace with actual email)
Phone: +86 123 4567 8900 (replace with actual phone number)
WeChat: domain-seller (click to copy on the page)
License
📄 MIT License
Free to use, modify and distribute with original project attribution.

设计简洁・信息直达・全球加速・开箱即用
>>>>>>> b7b469803f72482fa6d163aa7909e171d3842508
Simple Design · Direct Information · Global Acceleration · Ready to Use
