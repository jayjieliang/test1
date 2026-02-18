# 简单计算器应用演示 (Simple Calculator App Demo)

## 应用界面设计 (App UI Design)

这个计算器应用使用 React Native 开发，具有以下特点：

### 界面布局 (UI Layout)

```
┌────────────────────────────────┐
│     简单计算器                    │
│                                │
│  ┌──────────────────────────┐  │
│  │                          │  │
│  │         0                │  │  ← 显示屏
│  │                          │  │
│  └──────────────────────────┘  │
│                                │
│  ┌──────────────┐  ┌────────┐  │
│  │      C       │  │   ÷    │  │  ← 清除和除法
│  └──────────────┘  └────────┘  │
│                                │
│  ┌────┐ ┌────┐ ┌────┐ ┌────┐  │
│  │ 7  │ │ 8  │ │ 9  │ │ ×  │  │
│  └────┘ └────┘ └────┘ └────┘  │
│                                │
│  ┌────┐ ┌────┐ ┌────┐ ┌────┐  │
│  │ 4  │ │ 5  │ │ 6  │ │ -  │  │
│  └────┘ └────┘ └────┘ └────┘  │
│                                │
│  ┌────┐ ┌────┐ ┌────┐ ┌────┐  │
│  │ 1  │ │ 2  │ │ 3  │ │ +  │  │
│  └────┘ └────┘ └────┘ └────┘  │
│                                │
│  ┌──────────────┐ ┌────┐ ┌────┐│
│  │      0       │ │ .  │ │ =  ││
│  └──────────────┘ └────┘ └────┘│
└────────────────────────────────┘
```

### 颜色方案 (Color Scheme)

- **背景色**: 黑色 (#000)
- **数字按钮**: 深灰色 (#333)
- **运算符按钮**: 橙色 (#ff9500)
- **功能按钮 (C)**: 浅灰色 (#a6a6a6)
- **文字颜色**: 白色 (#fff)
- **显示屏文字**: 白色，60px 大小

### 功能特性 (Features)

1. **数字输入 (0-9)**: 点击数字按钮输入数字
2. **基本运算**:
   - 加法 (+)
   - 减法 (-)
   - 乘法 (×)
   - 除法 (÷)
3. **小数点**: 支持小数计算
4. **清除功能**: C 按钮清除所有输入
5. **等号**: = 按钮显示计算结果
6. **防止除零错误**: 除以零时返回 0

### 使用示例 (Usage Examples)

#### 例1: 简单加法
```
输入: 5 + 3 =
显示: 8
```

#### 例2: 连续运算
```
输入: 10 - 3 × 2 =
过程: 
  10 - 3 = 7
  7 × 2 = 14
显示: 14
```

#### 例3: 小数计算
```
输入: 10 ÷ 3 =
显示: 3.3333333333333335
```

#### 例4: 清除操作
```
输入: 5 + 3
按 C
显示: 0
```

## 技术实现 (Technical Implementation)

### 状态管理 (State Management)

应用使用 React Hooks 管理以下状态：

1. `display`: 当前显示的数字
2. `previousValue`: 之前输入的数字
3. `operation`: 当前选择的运算符
4. `shouldResetDisplay`: 是否应该重置显示

### 核心算法 (Core Algorithm)

```javascript
const calculate = (prev, current, op) => {
  switch (op) {
    case '+': return prev + current;
    case '-': return prev - current;
    case '×': return prev * current;
    case '÷': return current !== 0 ? prev / current : 0;
    default: return current;
  }
};
```

## 平台兼容性 (Platform Compatibility)

- ✅ iOS 13.0+
- ✅ Android API 21+ (Android 5.0+)

## 文件结构 (File Structure)

```
simple-calculator/
├── App.js                    # 主应用组件
├── index.js                  # 入口文件
├── package.json              # 依赖配置
├── app.json                  # 应用配置
├── babel.config.js           # Babel 配置
├── metro.config.js           # Metro 打包配置
├── __tests__/                # 测试文件
│   └── Calculator.test.js    # 计算器逻辑测试
├── android/                  # Android 原生代码
│   ├── app/
│   │   ├── build.gradle
│   │   └── src/main/
│   │       ├── AndroidManifest.xml
│   │       ├── java/com/simplecalculator/
│   │       └── res/
│   ├── build.gradle
│   ├── settings.gradle
│   └── gradle.properties
└── ios/                      # iOS 原生代码
    ├── Podfile
    └── SimpleCalculator/
        ├── AppDelegate.h
        ├── AppDelegate.mm
        ├── Info.plist
        └── main.m
```

## 测试覆盖 (Test Coverage)

已实现的测试包括：

- ✅ 加法运算测试
- ✅ 减法运算测试
- ✅ 乘法运算测试
- ✅ 除法运算测试
- ✅ 除零保护测试
- ✅ 小数运算测试
- ✅ 大数运算测试

共 11 个测试用例，覆盖所有基本运算和边界情况。
