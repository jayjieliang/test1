# 简单计算器 (Simple Calculator)

一个可以运行在手机上的简单计算器应用程序。使用 React Native 构建，支持 iOS 和 Android 平台。

A simple calculator mobile app that runs on phones. Built with React Native, supports both iOS and Android platforms.

## 功能 (Features)

- ✓ 基本算术运算：加法 (+)、减法 (-)、乘法 (×)、除法 (÷)
- ✓ 数字输入：0-9
- ✓ 小数点支持
- ✓ 清除功能 (C)
- ✓ 等号计算结果 (=)
- ✓ 简洁美观的界面设计

## 系统要求 (System Requirements)

### iOS 开发
- macOS 计算机
- Xcode 12 或更高版本
- CocoaPods
- Node.js 14 或更高版本

### Android 开发
- Node.js 14 或更高版本
- JDK 11 或更高版本
- Android Studio
- Android SDK

## 安装 (Installation)

1. 克隆仓库
```bash
git clone https://github.com/jayjieliang/test1.git
cd test1
```

2. 安装依赖
```bash
npm install
```

3. iOS 额外配置（仅限 macOS）
```bash
cd ios
pod install
cd ..
```

## 运行应用 (Running the App)

### 在 Android 设备或模拟器上运行
```bash
npm run android
```

### 在 iOS 设备或模拟器上运行（仅限 macOS）
```bash
npm run ios
```

### 启动开发服务器
```bash
npm start
```

## 使用说明 (How to Use)

1. **数字输入**：点击数字按钮 0-9 输入数字
2. **运算操作**：点击 +、-、×、÷ 选择运算符
3. **计算结果**：点击 = 显示计算结果
4. **清除**：点击 C 清除当前输入和计算
5. **小数点**：点击 . 输入小数

## 项目结构 (Project Structure)

```
test1/
├── App.js              # 主应用组件和计算器逻辑
├── index.js            # 应用入口文件
├── app.json            # 应用配置
├── package.json        # 项目依赖
├── babel.config.js     # Babel 配置
└── README.md           # 项目文档
```

## 技术栈 (Technology Stack)

- React Native 0.72.0
- React 18.2.0
- JavaScript (ES6+)

## 许可证 (License)

This project is licensed under the terms of the LICENSE file included in this repository.