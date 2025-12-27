<template>
  <div class="home">
    <h1>八字专业分析系统</h1>
    
    <div class="input-form">
      <h2>请输入出生信息</h2>
      
      <div class="form-group">
        <label for="year">年份:</label>
        <input type="number" id="year" v-model.number="birthData.year" min="1900" max="2100">
      </div>
      
      <div class="form-group">
        <label for="month">月份:</label>
        <input type="number" id="month" v-model.number="birthData.month" min="1" max="12">
      </div>
      
      <div class="form-group">
        <label for="day">日期:</label>
        <input type="number" id="day" v-model.number="birthData.day" min="1" max="31">
      </div>
      
      <div class="form-group">
        <label for="hour">时辰:</label>
        <input type="number" id="hour" v-model.number="birthData.hour" min="0" max="23">
      </div>
      
      <button @click="analyze" :disabled="loading" class="analyze-btn">
        {{ loading ? '分析中...' : '分析八字' }}
      </button>
    </div>

    <ResultPanel :result="analysisResult" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import ResultPanel from '../components/ResultPanel.vue';
import { analyzeBazi, type BaziRequest, type BaziAnalysisResult } from '../api/bazi';

interface BirthData {
  year: number;
  month: number;
  day: number;
  hour: number;
}

const birthData = ref<BirthData>({
  year: 2000,
  month: 1,
  day: 1,
  hour: 12
});

const loading = ref(false);
const analysisResult = ref<BaziAnalysisResult | undefined>();

const analyze = async () => {
  loading.value = true;
  try {
    const result = await analyzeBazi(birthData.value);
    analysisResult.value = result;
  } catch (error) {
    console.error('Analysis error:', error);
    alert('分析失败，请检查输入信息');
    analysisResult.value = undefined;
  } finally {
    loading.value = false;
  }
};
</script>

<style scoped>
.home {
  text-align: center;
}

h1 {
  color: #2c3e50;
  margin-bottom: 30px;
  font-size: 2.5em;
}

.input-form {
  background: white;
  border-radius: 8px;
  padding: 30px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
}

.input-form h2 {
  margin-bottom: 20px;
  color: #333;
}

.form-group {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-bottom: 15px;
}

.form-group label {
  width: 80px;
  text-align: right;
  font-weight: bold;
  color: #555;
}

.form-group input {
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  width: 150px;
}

.analyze-btn {
  background: #3498db;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 20px;
}

.analyze-btn:hover:not(:disabled) {
  background: #2980b9;
}

.analyze-btn:disabled {
  background: #bdc3c7;
  cursor: not-allowed;
}
</style>