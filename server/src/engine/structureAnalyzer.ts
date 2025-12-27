import { Bazi } from '../types';
import { TEN_GOD_RULES } from './tenGodRules';

export function analyzeStructure(bazi: Bazi): string {
  const dayGan = bazi.day.gan;
  const monthGan = bazi.month.gan;
  const monthTenGod = TEN_GOD_RULES[dayGan][monthGan];
  
  // 基于月令十神判断格局
  const structureMap: Record<string, string> = {
    '比肩': '建禄格',
    '劫财': '月刃格',
    '食神': '食神格',
    '伤官': '伤官格',
    '偏财': '偏财格',
    '正财': '正财格',
    '偏官': '七杀格',
    '正官': '正官格',
    '偏印': '偏印格',
    '正印': '正印格'
  };
  
  return structureMap[monthTenGod] || '普通格';
}