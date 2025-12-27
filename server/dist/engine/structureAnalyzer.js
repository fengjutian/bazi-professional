"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.analyzeStructure = analyzeStructure;
const tenGodRules_1 = require("./tenGodRules");
function analyzeStructure(bazi) {
    const dayGan = bazi.day.gan;
    const monthGan = bazi.month.gan;
    const monthTenGod = tenGodRules_1.TEN_GOD_RULES[dayGan][monthGan];
    // 基于月令十神判断格局
    const structureMap = {
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
