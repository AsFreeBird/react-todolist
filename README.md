# 📝 React TodoList 应用

一个功能完善的待办事项管理应用，使用 React 19.1.0 + JavaScript 构建，具有现代化的用户界面和丰富的交互功能。

## 🌟 项目特色

- 🎯 **完整功能**: 增删改查、状态切换、智能筛选一应俱全
- 🚀 **性能优化**: 使用 useMemo 优化渲染性能
- 💾 **数据持久化**: 基于 localStorage 的本地存储，数据不丢失
- 📱 **响应式设计**: 完美适配桌面端

## 🎮 功能演示

### 核心功能

- ➕ **添加待办事项**: 支持快速添加
- ✏️ **编辑功能**: 点击编辑按钮进入编辑模式
- ✅ **完成标记**: 复选框切换完成状态，已完成项显示删除线
- 🗑️ **删除功能**: 删除不需要的待办事项
- 🔍 **智能筛选**: All/Completed/InProgress 三种视图模式

### 增强特性

- 💿 **自动保存**: 实时同步到 localStorage，刷新页面数据不丢失

## 🛠️ 技术栈

| 技术             | 版本   | 用途                                    |
| ---------------- | ------ | --------------------------------------- |
| **React**        | 19.1.0 | 前端框架                                |
| **JavaScript**   | 5.0.1 |                                |
| **React Hooks**  | -      | 状态管理 (useState, useEffect, useMemo) |
| **CSS3、styled-components**         | -      | 样式设计           |
| **localStorage** | -      | 数据持久化                              |

## 📁 项目结构

```
react-todolist/
├── public/                 # 静态资源
│   ├── index.html         # HTML 模板
│   └── favicon.ico        # 网站图标
├── src/                   # 源代码
│   ├── App.js            # 主应用组件
│   ├── App.css           # 全局样式
│   ├── Checkbox.jsx      # 自定义选择框
│   ├── index.js          # 应用入口
│   ├── RadioGroup.jsx    # 自定义单选框
│   ├── TodoItem.jsx      # 单个待办项组件
│   └── TodoList.jsx      # 待办列表主组件
├── package.json          # 依赖配置
└── README.md            # 项目说明
```

## 🧩 核心组件说明

### TodoList.jsx

**主要功能组件**，负责：

- 状态管理 (todos, inputValue, selectType)
- 数据持久化 (localStorage)
- 业务逻辑 (增删改查、筛选)
- 性能优化 (useMemo)

### TodoItem.jsx

**子组件**，负责：

- 单个待办事项的展示
- 编辑模式的状态管理
- 用户交互事件处理

## 📚 学习要点

### React 核心概念

1. **函数组件**: 使用现代 React 函数组件模式
2. **Hooks 使用**:
   - `useState`: 状态管理
   - `useEffect`: 副作用处理
   - `useMemo`: 性能优化
3. **组件通信**: Props 传递和事件回调
4. **条件渲染**: 根据状态动态显示内容

## 🔧 开发过程

### 第一阶段：基础功能

- [x] 项目初始化和环境配置
- [x] 基础 TodoList 组件创建
- [x] 添加和删除功能实现
- [x] 基础样式设计

### 第二阶段：功能增强

- [x] 编辑功能实现
- [x] 完成状态切换
- [x] 数据持久化 (localStorage)
- [x] 响应式布局

### 第三阶段：体验优化

- [x] 筛选功能 (All/Completed/InProgress)
- [x] 性能优化 (useMemo)

## 🎯 待优化功能

### 功能扩展

- [ ] 拖拽排序
- [ ] 优先级设置
- [ ] 分类标签
- [ ] 搜索功能

### 技术改进

- [ ] 服务端数据同步 
- **项目类型**: 学习项目 / 实战练习
- **技术重点**: React + JavaScript + 性能优化
