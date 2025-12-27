import { Bazi, TenGod } from '../types';
import { TEN_GOD_RULES } from './tenGodRules';

export function analyzeTenGods(bazi: Bazi): {
  year: TenGod;
  month: TenGod;
  day: TenGod;
  time: TenGod;
} {
  const dayGan = bazi.day.gan;
  
  return {
    year: TEN_GOD_RULES[dayGan][bazi.year.gan],
    month: TEN_GOD_RULES[dayGan][bazi.month.gan],
    day: TEN_GOD_RULES[dayGan][bazi.day.gan],
    time: TEN_GOD_RULES[dayGan][bazi.time.gan]
  };
}