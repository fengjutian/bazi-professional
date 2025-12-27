export type TianGan = '甲' | '乙' | '丙' | '丁' | '戊' | '己' | '庚' | '辛' | '壬' | '癸';
export type DiZhi = '子' | '丑' | '寅' | '卯' | '辰' | '巳' | '午' | '未' | '申' | '酉' | '戌' | '亥';

export type WuXing = '金' | '木' | '水' | '火' | '土';

export type TenGod = 
  | '比肩' | '劫财' 
  | '食神' | '伤官' 
  | '偏财' | '正财' 
  | '偏官' | '正官' 
  | '偏印' | '正印';

export interface GanZhi {
  gan: TianGan;
  zhi: DiZhi;
}

export interface Bazi {
  year: GanZhi;
  month: GanZhi;
  day: GanZhi;
  time: GanZhi;
}

export interface BaziAnalysis {
  bazi: Bazi;
  tenGods: {
    year: TenGod;
    month: TenGod;
    day: TenGod;
    time: TenGod;
  };
  strengthScore: number;
  strengthLevel: '极弱' | '弱' | '中和' | '强' | '极强';
  structure: string;
  elements: {
    [key in WuXing]: number;
  };
}