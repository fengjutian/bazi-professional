"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.analyzeBazi = analyzeBazi;
const tenGodAnalyzer_1 = require("./tenGodAnalyzer");
const strengthEvaluator_1 = require("./strengthEvaluator");
const structureAnalyzer_1 = require("./structureAnalyzer");
const elements_1 = require("./elements");
function analyzeBazi(bazi) {
    const tenGods = (0, tenGodAnalyzer_1.analyzeTenGods)(bazi);
    const strength = (0, strengthEvaluator_1.evaluateStrength)(bazi);
    const structure = (0, structureAnalyzer_1.analyzeStructure)(bazi);
    // 计算五行分布
    const elements = {
        '金': 0, '木': 0, '水': 0, '火': 0, '土': 0
    };
    // 统计各柱的五行
    const pillars = [bazi.year, bazi.month, bazi.day, bazi.time];
    pillars.forEach(pillar => {
        const ganElement = elements_1.GAN_ELEMENTS[pillar.gan];
        const zhiElement = elements_1.ZHI_ELEMENTS[pillar.zhi];
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
