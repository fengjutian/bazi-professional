<template>
  <div v-if="result" class="result-panel">
    <h2>八字分析结果</h2>
    
    <div class="section">
      <h3>八字</h3>
      <div class="bazi-display">
        <div class="pillar">
          <div class="label">年柱</div>
          <div class="ganzhi">{{ result.data.bazi.year.gan }}{{ result.data.bazi.year.zhi }}</div>
          <div class="tengod">{{ result.data.tenGods.year }}</div>
        </div>
        <div class="pillar">
          <div class="label">月柱</div>
          <div class="ganzhi">{{ result.data.bazi.month.gan }}{{ result.data.bazi.month.zhi }}</div>
          <div class="tengod">{{ result.data.tenGods.month }}</div>
        </div>
        <div class="pillar">
          <div class="label">日柱</div>
          <div class="ganzhi">{{ result.data.bazi.day.gan }}{{ result.data.bazi.day.zhi }}</div>
          <div class="tengod">{{ result.data.tenGods.day }}</div>
        </div>
        <div class="pillar">
          <div class="label">时柱</div>
          <div class="ganzhi">{{ result.data.bazi.time.gan }}{{ result.data.bazi.time.zhi }}</div>
          <div class="tengod">{{ result.data.tenGods.time }}</div>
        </div>
      </div>
    </div>

    <div class="section">
      <h3>日主强弱</h3>
      <div class="strength-info">
        <div class="level">等级: {{ result.data.strengthLevel }}</div>
        <div class="score">评分: {{ result.data.strengthScore.toFixed(2) }}</div>
      </div>
    </div>

    <div class="section">
      <h3>格局</h3>
      <div class="structure">{{ result.data.structure }}</div>
    </div>

    <div class="section">
      <h3>五行分布</h3>
      <div class="elements">
        <div class="element-item" v-for="(count, element) in result.data.elements" :key="element">
          <span class="element-name">{{ element }}</span>
          <span class="element-count">{{ count }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { BaziAnalysisResult } from '../api/bazi';

interface Props {
  result?: BaziAnalysisResult;
}

const props = defineProps<Props>();
</script>

<style scoped>
.result-panel {
  background: white;
  border-radius: 8px;
  padding: 20px;
  margin-top: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.section {
  margin-bottom: 20px;
}

.section h3 {
  margin-bottom: 10px;
  color: #333;
  font-size: 1.2em;
}

.bazi-display {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.pillar {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 6px;
  min-width: 100px;
  background: #fafafa;
}

.label {
  font-size: 0.8em;
  color: #666;
  margin-bottom: 5px;
}

.ganzhi {
  font-size: 1.5em;
  font-weight: bold;
  margin-bottom: 5px;
}

.tengod {
  font-size: 0.9em;
  color: #444;
}

.strength-info {
  display: flex;
  gap: 20px;
}

.level, .score {
  padding: 5px 10px;
  background: #f0f0f0;
  border-radius: 4px;
}

.structure {
  padding: 10px;
  background: #e8f5e9;
  border-radius: 4px;
  font-size: 1.1em;
}

.elements {
  display: flex;
  gap: 15px;
}

.element-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px 12px;
  background: #f0f0f0;
  border-radius: 4px;
}

.element-name {
  font-weight: bold;
}
</style>