import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts';
import { ChevronDown, ChevronUp, Search, TrendingUp, TrendingDown, ArrowRight, Star } from 'lucide-react';
import { toast } from 'sonner';

// 模拟加密货币市场数据
const cryptoMarketData = [
  { id: 1, symbol: 'BTC', name: '比特币', price: 82456.32, change: 2.56, volume: '42.5B', marketCap: '1.6T', favorite: true },
  { id: 2, symbol: 'ETH', name: '以太坊', price: 4872.91, change: -1.23, volume: '28.3B', marketCap: '583.7B', favorite: true },
  { id: 3, symbol: 'SOL', name: 'Solana', price: 127.85, change: 5.42, volume: '8.7B', marketCap: '45.2B', favorite: false },
  { id: 4, symbol: 'BNB', name: 'Binance Coin', price: 632.47, change: 0.87, volume: '4.9B', marketCap: '98.6B', favorite: false },
  { id: 5, symbol: 'ADA', name: 'Cardano', price: 0.62, change: -2.14, volume: '1.2B', marketCap: '21.5B', favorite: false },
  { id: 6, symbol: 'XRP', name: 'Ripple', price: 0.75, change: 3.21, volume: '3.6B', marketCap: '33.4B', favorite: false },
  { id: 7, symbol: 'DOT', name: 'Polkadot', price: 8.42, change: -0.56, volume: '0.9B', marketCap: '9.8B', favorite: false },
  { id: 8, symbol: 'DOGE', name: 'Dogecoin', price: 0.11, change: 7.89, volume: '5.2B', marketCap: '15.6B', favorite: false },
];

// 模拟比特币价格历史数据 (最近24小时)
const btcPriceHistory = Array.from({ length: 24 }, (_, i) => ({
  time: `${i}:00`,
  price: 80000 + Math.random() * 5000 + (i > 12 ? -Math.random() * 3000 : 0),
}));

// 模拟市场概览数据
const marketOverview = [
  { title: '市场总值', value: '$3.26T', change: '+1.2%' },
  { title: '24h交易量', value: '$128.7B', change: '+5.8%' },
  { title: 'BTC占比', value: '49.2%', change: '-0.3%' },
  { title: '活跃加密货币', value: '9,256', change: '+32' },
];

// 交易对数据
const tradingPairs = [
  { id: 1, symbol: 'BTC/USDT', price: 82456.32, change: 2.56, volume: '24.5B' },
  { id: 2, symbol: 'ETH/USDT', price: 4872.91, change: -1.23, volume: '18.3B' },
  { id: 3, symbol: 'SOL/USDT', price: 127.85, change: 5.42, volume: '6.7B' },
  { id: 4, symbol: 'BTC/ETH', price: 16.92, change: 3.79, volume: '2.8B' },
];

export default function Markets() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [favorites, setFavorites] = useState(cryptoMarketData.filter(coin => coin.favorite));
  const [filteredCoins, setFilteredCoins] = useState(cryptoMarketData);
  const [sortField, setSortField] = useState('marketCap');
  const [sortDirection, setSortDirection] = useState('desc');

  useEffect(() => {
    // 根据搜索词过滤加密货币
    let result = cryptoMarketData;
    
    if (searchTerm) {
      result = result.filter(coin => 
        coin.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
        coin.symbol.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // 根据当前标签过滤
    if (activeTab === 'favorites') {
      result = result.filter(coin => coin.favorite);
    }
    
    // 排序
    result.sort((a, b) => {
      let aValue = a[sortField as keyof typeof a];
      let bValue = b[sortField as keyof typeof b];
      
      // 处理数字值
      if (typeof aValue === 'string' && typeof bValue === 'string') {
        // 移除B/T后缀并转换为数字
        aValue = parseFloat(aValue.replace(/[^\d.-]/g, ''));
        bValue = parseFloat(bValue.replace(/[^\d.-]/g, ''));
      }
      
      if (typeof aValue === 'number' && typeof bValue === 'number') {
        return sortDirection === 'asc' ? aValue - bValue : bValue - aValue;
      }
      
      return 0;
    });
    
    setFilteredCoins(result);
  }, [searchTerm, activeTab, sortField, sortDirection]);

  const toggleFavorite = (id: number) => {
    setFilteredCoins(prevCoins => 
      prevCoins.map(coin => 
        coin.id === id ? { ...coin, favorite: !coin.favorite } : coin
      )
    );
    
    // 更新原始数据（实际应用中应该在数据库中更新）
    cryptoMarketData.forEach(coin => {
      if (coin.id === id) {
        coin.favorite = !coin.favorite;
      }
    });
    
    setFavorites(cryptoMarketData.filter(coin => coin.favorite));
  };

  const handleSort = (field: string) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('desc');
    }
  };

  const startTrading = (symbol: string) => {
    toast(`即将进入 ${symbol} 交易页面`, {
      description: '交易功能开发中...',
    });
  };

  return (
    <section className="py-12 relative bg-gray-950">
      {/* 背景效果 */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-1/3 left-1/3 w-96 h-96 bg-blue-600/5 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* 标题部分 */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-white mb-2">市场行情</h2>
            <p className="text-gray-400">实时掌握全球加密货币市场动态</p>
          </motion.div>
          
          <motion.div 
            className="relative w-full sm:w-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <input
                type="text"
                placeholder="搜索加密货币..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="py-2 pl-10 pr-4 rounded-lg bg-gray-900 border border-gray-800 text-gray-300 w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
            </div>
          </motion.div>
        </div>
        
        {/* 市场概览 */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {marketOverview.map((item, index) => (
            <motion.div 
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5 }
                }
              }}
              className="bg-gray-900 rounded-xl p-4 border border-gray-800"
            >
              <p className="text-gray-400 text-sm mb-1">{item.title}</p>
              <div className="flex items-baseline justify-between">
                <p className="text-2xl font-bold text-white">{item.value}</p>
                <p className={`text-sm font-medium ${item.change.includes('+') ? 'text-green-400' : 'text-red-400'}`}>
                  {item.change}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* 比特币价格图表 */}
        <motion.div 
          className="bg-gray-900 rounded-xl p-5 border border-gray-800 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
            <div>
              <h3 className="text-xl font-bold text-white">BTC/USDT</h3>
              <div className="flex items-center mt-1">
                <span className="text-2xl font-bold text-white">$82,456.32</span>
                <span className="ml-3 text-green-400 font-medium flex items-center">
                  <TrendingUp className="w-4 h-4 mr-1" />
                  +2.56%
                </span>
              </div>
            </div>
            
            <div className="flex gap-2">
              {['1H', '4H', '1D', '1W', '1M', '1Y'].map((timeframe) => (
                <button 
                  key={timeframe}
                  className={`px-3 py-1.5 text-sm rounded-md ${timeframe === '1D' ? 'bg-blue-900/30 text-blue-300 border border-blue-800/50' : 'text-gray-400 hover:text-white'}`}
                >
                  {timeframe}
                </button>
              ))}
            </div>
          </div>
          
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={btcPriceHistory}
                margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#2563eb" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#2563eb" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis 
                  dataKey="time" 
                  stroke="#64748b" 
                  tick={{ fill: '#64748b' }}
                  tickLine={false}
                  axisLine={{ stroke: '#334155' }}
                />
                <YAxis 
                  stroke="#64748b" 
                  tick={{ fill: '#64748b' }}
                  tickLine={false}
                  axisLine={{ stroke: '#334155' }}
                  domain={['dataMin - 1000', 'dataMax + 1000']}
                  tickFormatter={(value) => `$${value.toLocaleString()}`}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1e293b', 
                    border: '1px solid #334155',
                    borderRadius: '0.5rem',
                    color: '#e2e8f0'
                  }}
                  formatter={(value: number) => [`$${value.toLocaleString()}`, '价格']}
                  labelFormatter={(label) => `${label}`}
                />
                <Area 
                  type="monotone" 
                  dataKey="price" 
                  stroke="#2563eb" 
                  strokeWidth={2}
                  fillOpacity={1} 
                  fill="url(#colorPrice)" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
            <div>
              <p className="text-gray-400 text-sm mb-1">24h高</p>
              <p className="text-white font-medium">$83,124.65</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm mb-1">24h低</p>
              <p className="text-white font-medium">$79,876.32</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm mb-1">24h成交量</p>
              <p className="text-white font-medium">$42.5B</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm mb-1">市值</p>
              <p className="text-white font-medium">$1.6T</p>
            </div>
          </div>
          
          <div className="flex gap-3 mt-6">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex-1 py-3 rounded-lg bg-gradient-web3 text-white font-medium"
              onClick={() => startTrading('BTC/USDT')}
            >
              交易 BTC/USDT
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="py-3 px-4 rounded-lg bg-gray-800 text-white font-medium border border-gray-700"
              onClick={() => toggleFavorite(1)}
            >
              <Star className={`w-5 h-5 ${cryptoMarketData[0].favorite ? 'fill-yellow-400 text-yellow-400' : 'text-gray-400'}`} />
            </motion.button>
          </div>
        </motion.div>
        
        {/* 热门交易对 */}
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-xl font-bold text-white mb-4">热门交易对</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {tradingPairs.map((pair) => (
              <motion.div 
                key={pair.id}
                className="bg-gray-900 rounded-xl p-4 border border-gray-800 cursor-pointer card-hover"
                whileHover={{ y: -2 }}
                onClick={() => startTrading(pair.symbol)}
              >
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-medium text-white">{pair.symbol}</h4>
                  <span className={`text-sm font-medium ${pair.change > 0 ? 'text-green-400' : 'text-red-400'}`}>
                    {pair.change > 0 ? '+' : ''}{pair.change}%
                  </span>
                </div>
                <div className="flex justify-between items-end">
                  <span className="text-xl font-bold text-white">
                    ${pair.price.toLocaleString(undefined, { maximumFractionDigits: 2 })}
                  </span>
                  <span className="text-sm text-gray-400">24h成交量: {pair.volume}</span>
                </div>
                <div className="mt-3 pt-3 border-t border-gray-800">
                  <button className="text-blue-400 text-sm font-medium flex items-center">
                    <span>交易</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* 加密货币列表 */}
        <motion.div 
          className="bg-gray-900 rounded-xl border border-gray-800 overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* 标签页 */}
          <div className="flex border-b border-gray-800">
            <button 
              className={`px-6 py-3 font-medium text-sm ${activeTab === 'all' ? 'text-white border-b-2 border-blue-500' : 'text-gray-400'}`}
              onClick={() => setActiveTab('all')}
            >
              全部
            </button>
            <button 
              className={`px-6 py-3 font-medium text-sm ${activeTab === 'favorites' ? 'text-white border-b-2 border-blue-500' : 'text-gray-400'}`}
              onClick={() => setActiveTab('favorites')}
            >
              自选 ({favorites.length})
            </button>
            <button 
              className={`px-6 py-3 font-medium text-sm ${activeTab === 'gainers' ? 'text-white border-b-2 border-blue-500' : 'text-gray-400'}`}
              onClick={() => setActiveTab('gainers')}
            >
              涨幅榜
            </button>
            <button 
              className={`px-6 py-3 font-medium text-sm ${activeTab === 'losers' ? 'text-white border-b-2 border-blue-500' : 'text-gray-400'}`}
              onClick={() => setActiveTab('losers')}
            >
              跌幅榜
            </button>
          </div>
          
          {/* 表格标题 */}
          <div className="grid grid-cols-[40px_1fr_1fr_1fr_120px_80px] px-6 py-4 text-gray-400 text-sm font-medium">
            <div>#</div>
            <div>名称</div>
            <div className="text-right">价格</div>
            <div className="text-right">24h涨跌</div>
            <div className="text-right">市值</div>
            <div className="text-right">操作</div>
          </div>
          
          {/* 表格内容 */}
          <div className="max-h-[500px] overflow-y-auto">
            {filteredCoins.map((coin, index) => (
              <motion.div 
                key={coin.id}
                className="grid grid-cols-[40px_1fr_1fr_1fr_120px_80px] px-6 py-4 border-t border-gray-800 table-row-hover cursor-pointer"
                whileHover={{ backgroundColor: 'rgba(37, 99, 235, 0.1)' }}
                onClick={() => startTrading(coin.symbol)}
              >
                <div className="text-gray-400">{index + 1}</div>
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-medium mr-3">
                    {coin.symbol.substring(0, 2)}
                  </div>
                  <div>
                    <div className="text-white font-medium">{coin.name}</div>
                    <div className="text-gray-400 text-sm">{coin.symbol}</div>
                  </div>
                </div>
                <div className="text-right text-white font-medium">
                  ${coin.price.toLocaleString(undefined, { maximumFractionDigits: 2 })}
                </div>
                <div className={`text-right font-medium ${coin.change > 0 ? 'text-green-400' : 'text-red-400'}`}>
                  {coin.change > 0 ? '+' : ''}{coin.change}%
                </div>
                <div className="text-right text-gray-300">
                  {coin.marketCap}
                </div>
                <div className="text-right">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-800 text-gray-400"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleFavorite(coin.id);
                    }}
                  >
                    <Star className={`w-4 h-4 ${coin.favorite ? 'fill-yellow-400 text-yellow-400' : ''}`} />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* 加载更多 */}
          <div className="px-6 py-4 text-center border-t border-gray-800">
            <button className="text-blue-400 text-sm font-medium flex items-center mx-auto">
              <span>加载更多</span>
              <ChevronDown className="w-4 h-4 ml-1" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}