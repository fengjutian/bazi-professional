"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DIZHI = exports.TIANGAN = void 0;
exports.getGanZhiIndex = getGanZhiIndex;
exports.getYearGanZhi = getYearGanZhi;
exports.getMonthGanZhi = getMonthGanZhi;
exports.getDayGanZhi = getDayGanZhi;
exports.getTimeGanZhi = getTimeGanZhi;
exports.TIANGAN = ['甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸'];
exports.DIZHI = ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥'];
// 六十甲子
const SIXTY_GANZHI = (() => {
    const result = [];
    for (let i = 0; i < 60; i++) {
        const gan = exports.TIANGAN[i % 10];
        const zhi = exports.DIZHI[i % 12];
        result.push(gan + zhi);
    }
    return result;
})();
// 获取六十甲子索引
function getGanZhiIndex(ganZhi) {
    const index = SIXTY_GANZHI.indexOf(ganZhi);
    if (index === -1)
        throw new Error(`Invalid GanZhi: ${ganZhi}`);
    return index;
}
// 计算年干支（基于公历年份）
function getYearGanZhi(year) {
    // 1900年是庚子年（索引36）
    const baseYear = 1900;
    const baseIndex = 36;
    const offset = (year - baseYear) % 60;
    const index = (baseIndex + offset + 60) % 60;
    return SIXTY_GANZHI[index];
}
// 计算月干支（基于年干和月份）
function getMonthGanZhi(yearGan, month) {
    // 年干对应的月干索引
    const monthGanMap = {
        '甲': 1, '乙': 3, '丙': 5, '丁': 7, '戊': 9,
        '己': 1, '庚': 3, '辛': 5, '壬': 7, '癸': 9
    };
    const ganIndex = (monthGanMap[yearGan] + month - 1) % 10;
    const zhiIndex = (month + 1) % 12; // 正月为寅（索引2）
    return exports.TIANGAN[ganIndex] + exports.DIZHI[zhiIndex];
}
// 计算日干支（简化版本，实际需要更复杂的农历转换）
function getDayGanZhi(year, month, day) {
    // 这里使用简化算法，实际应用中需要完整的农历转换库
    const baseDate = new Date(1900, 0, 1); // 1900-01-01 庚子日
    const targetDate = new Date(year, month - 1, day);
    const diffDays = Math.floor((targetDate.getTime() - baseDate.getTime()) / (1000 * 60 * 60 * 24));
    const index = (36 + diffDays) % 60;
    return SIXTY_GANZHI[(index + 60) % 60];
}
// 计算时干支（基于日干和时辰）
function getTimeGanZhi(dayGan, hour) {
    // 日干对应的时干索引
    const timeGanMap = {
        '甲': 1, '乙': 3, '丙': 5, '丁': 7, '戊': 9,
        '己': 1, '庚': 3, '辛': 5, '壬': 7, '癸': 9
    };
    const timeIndex = Math.floor(hour / 2); // 每个时辰2小时
    const ganIndex = (timeGanMap[dayGan] + timeIndex) % 10;
    return exports.TIANGAN[ganIndex] + exports.DIZHI[timeIndex];
}
