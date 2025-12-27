"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const analyzer_1 = require("../engine/analyzer");
const ganzhi_1 = require("../engine/ganzhi");
const router = express_1.default.Router();
// 八字分析 API
router.post('/analyze', (req, res) => {
    try {
        const { year, month, day, hour } = req.body;
        // 验证输入
        if (!year || !month || !day || !hour) {
            return res.status(400).json({ error: 'Missing required parameters' });
        }
        // 计算八字
        const yearGanZhi = (0, ganzhi_1.getYearGanZhi)(year);
        const yearGan = yearGanZhi.charAt(0);
        const monthGanZhi = (0, ganzhi_1.getMonthGanZhi)(yearGan, month);
        const dayGanZhi = (0, ganzhi_1.getDayGanZhi)(year, month, day);
        const dayGan = dayGanZhi.charAt(0);
        const timeGanZhi = (0, ganzhi_1.getTimeGanZhi)(dayGan, hour);
        const bazi = {
            year: { gan: yearGanZhi.charAt(0), zhi: yearGanZhi.charAt(1) },
            month: { gan: monthGanZhi.charAt(0), zhi: monthGanZhi.charAt(1) },
            day: { gan: dayGanZhi.charAt(0), zhi: dayGanZhi.charAt(1) },
            time: { gan: timeGanZhi.charAt(0), zhi: timeGanZhi.charAt(1) }
        };
        // 分析八字
        const result = (0, analyzer_1.analyzeBazi)(bazi);
        res.json({ success: true, data: result });
    }
    catch (error) {
        console.error('Analysis error:', error);
        res.status(500).json({ error: 'Analysis failed' });
    }
});
exports.default = router;
