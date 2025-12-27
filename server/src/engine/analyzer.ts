import { Bazi, BaziAnalysis, WuXing } from '../types';
import { analyzeTenGods } from './tenGodAnalyzer';
import { evaluateStrength } from './strengthEvaluator';
import { analyzeStructure } from './structureAnalyzer';
import { GAN_ELEMENTS, ZHI_ELEMENTS } from './elements';

export function analyzeBazi(bazi: Bazi): BaziAnalysis {
  const tenGods = analyzeTenGods(bazi);
  const strength = evaluateStrength(bazi);
  const structure = analyzeStructure(bazi);
  
  // 计算五行分布
  const elements: Record<WuXing, number> = {
    '金': 0, '木': 0, '水': 0, '火': 0, '土': 0
  };
  
  // 统计各柱的五行
  const pillars = [bazi.year, bazi.month, bazi.day, bazi.time];
  pillars.forEach(pillar => {
    const ganElement = GAN_ELEMENTS[pillar.gan];
    const zhiElement = ZHI_ELEMENTS[pillar.zhi];
    elements[ganElement]++;
    elements[zhiElement]++;
  });
  
  return {
    bazi,
    tenGods,
    strengthScore: strength.score,
    strengthLevel: strength.level,
    structure,
    elements
  };
}