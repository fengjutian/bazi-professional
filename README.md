# 八字专业分析系统

一个基于 Node.js + TypeScript 后端和 Vue3 + TypeScript 前端的专业八字分析系统。

## 项目结构

```
bazi-professional/
 ├── server/                         # 后端（Node.js + TS）
 │   ├── src/
 │   │   ├── index.ts                # Server 启动
 │   │   ├── routes/
 │   │   │   └── bazi.ts             # API
 │   │   ├── engine/
 │   │   │   ├── calendar.ts         # 时间/节气（V1 简化）
 │   │   │   ├── ganzhi.ts           # 干支计算
 │   │   │   ├── elements.ts         # 五行映射
 │   │   │   ├── tenGodRules.ts      # 十神完整规则表
 │   │   │   ├── tenGodAnalyzer.ts   # 十神统计
 │   │   │   ├── strengthEvaluator.ts # 日主强弱评分
 │   │   │   ├── structureAnalyzer.ts # 格局判断
 │   │   │   └── analyzer.ts         # 专业版总入口
 │   │   └── types.ts
 │   ├── package.json
 │   └── tsconfig.json
 │
 ├── web/                            # 前端（Vue3 + TS）
 │   ├── src/
 │   │   ├── main.ts
 │   │   ├── App.vue
 │   │   ├── api/bazi.ts
 │   │   ├── views/Home.vue
 │   │   └── components/
 │   │       └── ResultPanel.vue
 │   ├── package.json
 │   └── vite.config.ts
 │
 └── README.md
```

## 功能特点

- **完整的八字计算引擎**：基于传统天干地支理论
- **十神分析**：完整的十神关系计算
- **日主强弱分析**：科学的日主评分系统
- **格局判断**：基于月令的八字格局分析
- **五行分布**：详细的五行统计
- **现代化 UI**：使用 Vue3 + TypeScript 构建的前端界面

## 快速开始

### 启动后端

```bash
cd server
npm install
npm run dev
```

后端服务将运行在 `http://localhost:3000`

### 启动前端

```bash
cd web
npm install
npm run dev
```

前端应用将运行在 `http://localhost:5173`

## 使用说明

1. 在前端界面输入出生年、月、日、时辰
2. 点击 "分析八字" 按钮
3. 系统将显示详细的八字分析结果，包括：
   - 完整八字
   - 十神关系
   - 日主强弱
   - 格局
   - 五行分布

## 技术栈

### 后端
- Node.js
- TypeScript
- Express.js

### 前端
- Vue 3 (Composition API)
- TypeScript
- Vite

## 注意事项

- 本系统采用简化的农历转换算法，实际应用中建议使用更精确的农历库
- 八字分析属于传统文化范畴，仅供参考