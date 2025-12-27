import { Bazi } from '../types';
import { GAN_ELEMENTS, ZHI_ELEMENTS } from './elements';

export function evaluateStrength(bazi: Bazi): { score: number; level: '极弱' | '弱' | '中和' | '强' | '极强' } {
  const dayGanElement = GAN_ELEMENTS[bazi.day.gan];
  let score = 0;
  
  // 计算各柱对日主的帮扶力度
  const pillars = [bazi.year, bazi.month, bazi.day, bazi.time];
  
  pillars.forEach((pillar, index) => {
    const ganElement = GAN_ELEMENTS[pillar.gan];
    const zhiElement = ZHI_ELEMENTS[pillar.zhi];
    
    // 天干帮扶
    if (ganElement === dayGanElement) {
      score += 1.5; // 比肩
    } else if (isSupportElement(ganElement, dayGanElement)) {
      score += 1.0; // 印星
    } else if (isWeakeningElement(ganElement, dayGanElement)) {
      score -= 1.0; // 财星、官杀
    }
    
    // 地支帮扶
    if (zhiElement === dayGanElement) {
      score += 1.0;
    } else if (isSupportElement(zhiElement, dayGanElement)) {
      score += 0.5;
    } else if (isWeakeningElement(zhiElement, dayGanElement)) {
      score -= 0.5;
    }
  });
  
  // 确定强弱等级
  let level: '极弱' | '弱' | '中和' | '强' | '极强';
  if (score < -2) level = '极弱';
  else if (score < 0) level = '弱';
  else if (score < 2) level = '中和';
  else if (score < 4) level = '强';
  else level = '极强';
  
  return { score, level };
}

// 判断是否为帮扶元素
function isSupportElement(element: string, targetElement: string): boolean {
  const supportMap: Record<string, string[]> = {
    '木': ['水'],
    '火': ['木'],
    '土': ['火'],
    '金': ['土'],
    '水': ['金']
  };
  return supportMap[targetElement].includes(element);
}

// 判断是否为削弱元素
function isWeakeningElement(element: string, targetElement: string): boolean {
  const weakenMap: Record<string, string[]> = {
    '木': ['金', '土'],
    '火': ['水', '金'],
    '土': ['木', '水'],
    '金': ['火', '木'],
    '水': ['土', '火']
  };
  return weakenMap[targetElement].includes(element);
}