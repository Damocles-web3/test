import { motion } from 'framer-motion';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

// 模拟区块链数据
const blockchainData = [
  { name: '1月', transactions: 2400, users: 1800 },
  { name: '2月', transactions: 1398, users: 2100 },
  { name: '3月', transactions: 9800, users: 3500 },
  { name: '4月', transactions: 3908, users: 4200 },
  { name: '5月', transactions: 4800, users: 5800 },
  { name: '6月', transactions: 3800, users: 6200 },
  { name: '7月', transactions: 4300, users: 7500 },
  { name: '8月', transactions: 5300, users: 8900 },
  { name: '9月', transactions: 6300, users: 10500 },
  { name: '10月', transactions: 7300, users: 12000 },
  { name: '11月', transactions: 8300, users: 13500 },
  { name: '12月', transactions: 9300, users: 15000 },
];

// 关键统计数据
const keyStats = [
  { value: '15K+', label: '活跃用户' },
  { value: '9.3M', label: '交易量' },
  { value: '87%', label: '用户满意度' },
  { value: '24/7', label: '系统可用性' },
];

export default function Stats() {
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const statVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="py-20 relative">
      {/* 背景效果 */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-1/3 left-1/3 w-96 h-96 bg-blue-600/10 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* 标题部分 */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-indigo-900/50 text-indigo-300 mb-4 border border-indigo-800">
            平台数据
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-blue-400">
            数据驱动的区块链生态
          </h2>
          <p className="text-gray-300 text-lg">
            我们的平台持续增长，为全球用户提供稳定、高效的区块链服务。
          </p>
        </motion.div>
        
        {/* 统计卡片 */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {keyStats.map((stat, index) => (
            <motion.div 
              key={index}
              variants={statVariants}
              className="rounded-2xl p-6 glass-effect border border-gray-800 hover:border-blue-500/50 transition-all"
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.1)" }}
            >
              <div className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* 图表 */}
        <motion.div 
          className="rounded-2xl p-6 sm:p-8 glass-effect border border-gray-800"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="text-xl font-semibold text-white mb-6">平台增长趋势</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={blockchainData}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="colorTransactions" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#6366f1" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis 
                  dataKey="name" 
                  stroke="#94a3b8" 
                  tick={{ fill: '#94a3b8' }}
                />
                <YAxis 
                  stroke="#94a3b8" 
                  tick={{ fill: '#94a3b8' }}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'rgba(15, 23, 42, 0.8)', 
                    border: '1px solid rgba(148, 163, 184, 0.2)',
                    borderRadius: '0.5rem',
                    color: '#e2e8f0'
                  }}
                />
                <Area 
                  type="monotone" 
                  dataKey="transactions" 
                  stroke="#6366f1" 
                  fillOpacity={1} 
                  fill="url(#colorTransactions)" 
                />
                <Area 
                  type="monotone" 
                  dataKey="users" 
                  stroke="#8b5cf6" 
                  fillOpacity={1} 
                  fill="url(#colorUsers)" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>
    </section>
  );
}