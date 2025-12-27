"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.analyzeTenGods = analyzeTenGods;
const tenGodRules_1 = require("./tenGodRules");
function analyzeTenGods(bazi) {
    const dayGan = bazi.day.gan;
    return {
        year: tenGodRules_1.TEN_GOD_RULES[dayGan][bazi.year.gan],
        month: tenGodRules_1.TEN_GOD_RULES[dayGan][bazi.month.gan],
        day: tenGodRules_1.TEN_GOD_RULES[dayGan][bazi.day.gan],
        time: tenGodRules_1.TEN_GOD_RULES[dayGan][bazi.time.gan]
    };
}
