import express from 'express';
import cors from 'cors';
import baziRoutes from './routes/bazi';

const app = express();
const PORT = process.env.PORT || 3000;

// 中间件
app.use(cors());
app.use(express.json());

// 路由
app.use('/api/bazi', baziRoutes);

// 健康检查
app.get('/api/health', (req, res) => {
  res.json({ status: 'healthy', message: 'Bazi Professional Server is running' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`API available at http://localhost:${PORT}/api`);
  console.log(`Health check: http://localhost:${PORT}/api/health`);
});