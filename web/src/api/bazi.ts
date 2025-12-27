// 八字分析 API 调用

export interface BaziRequest {
  year: number;
  month: number;
  day: number;
  hour: number;
}

export interface BaziAnalysisResult {
  success: boolean;
  data: {
    bazi: {
      year: { gan: string; zhi: string };
      month: { gan: string; zhi: string };
      day: { gan: string; zhi: string };
      time: { gan: string; zhi: string };
    };
    tenGods: {
      year: string;
      month: string;
      day: string;
      time: string;
    };
    strengthScore: number;
    strengthLevel: string;
    structure: string;
    elements: {
      金: number;
      木: number;
      水: number;
      火: number;
      土: number;
    };
  };
}

export async function analyzeBazi(request: BaziRequest): Promise<BaziAnalysisResult> {
  const response = await fetch('/api/bazi/analyze', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(request),
  });

  if (!response.ok) {
    throw new Error('Analysis failed');
  }

  return await response.json();
}