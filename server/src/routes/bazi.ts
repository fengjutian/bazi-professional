import express from 'express';
import { analyzeBazi } from '../engine/analyzer';
import { getYearGanZhi, getMonthGanZhi, getDayGanZhi, getTimeGanZhi } from '../engine/ganzhi';

const router = express.Router();

// 八字分析 API
router.post('/analyze', (req, res) => {
  try {
    const { year, month, day, hour } = req.body;
    
    // 验证输入
    if (!year || !month || !day || !hour) {
      return res.status(400).json({ error: 'Missing required parameters' });
    }
    
    // 计算八字
    const yearGanZhi = getYearGanZhi(year);
    const yearGan = yearGanZhi.charAt(0) as any;
    const monthGanZhi = getMonthGanZhi(yearGan, month);
    const dayGanZhi = getDayGanZhi(year, month, day);
    const dayGan = dayGanZhi.charAt(0) as any;
    const timeGanZhi = getTimeGanZhi(dayGan, hour);
    
    const bazi = {
      year: { gan: yearGanZhi.charAt(0), zhi: yearGanZhi.charAt(1) },
      month: { gan: monthGanZhi.charAt(0), zhi: monthGanZhi.charAt(1) },
      day: { gan: dayGanZhi.charAt(0), zhi: dayGanZhi.charAt(1) },
      time: { gan: timeGanZhi.charAt(0), zhi: timeGanZhi.charAt(1) }
    };
    
    // 分析八字
    const result = analyzeBazi(bazi);
    
    res.json({ success: true, data: result });
  } catch (error) {
    console.error('Analysis error:', error);
    res.status(500).json({ error: 'Analysis failed' });
  }
});

export default router;