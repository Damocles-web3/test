import { motion } from 'framer-motion';
import { ChevronRight, Calendar, ExternalLink } from 'lucide-react';
import { toast } from 'sonner';

// 模拟新闻数据
const newsItems = [
  {
    id: 1,
    title: "NeoWeb3完成1亿美元B轮融资，估值达10亿美元",
    summary: "本轮融资由全球知名投资机构领投，将用于平台扩展和技术研发，加速web3生态系统建设。",
    date: "2025-11-10",
    category: "平台公告"
  },
  {
    id: 2,
    title: "比特币突破8万美元关口，创历史新高",
    summary: "受全球宏观经济影响，比特币价格持续上涨，突破8万美元大关，创历史新高。",
    date: "2025-11-05",
    category: "市场动态"
  },
  {
    id: 3,
    title: "NeoWeb3推出全新合约交易功能，支持100倍杠杆",
    summary: "全新合约交易系统采用尖端技术，提供更稳定的交易体验和更丰富的交易策略。",
    date: "2025-10-28",
    category: "功能更新"
  }
];

// 热门文章
const popularArticles = [
  {
    id: 1,
    title: "2025年加密货币投资指南：十大值得关注的数字资产",
    views: "12.5k"
  },
  {
    id: 2,
    title: "如何使用杠杆交易提升投资收益",
    views: "8.3k"
  },
  {
    id: 3,
    title: "NFT市场回暖，这些收藏方向值得关注",
    views: "6.7k"
  }
];

export default function News() {
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const newsVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const getCategoryColor = (category: string) => {
    switch(category) {
      case "平台公告":
        return "bg-blue-900/50 text-blue-300 border-blue-800";
      case "市场动态":
        return "bg-green-900/50 text-green-300 border-green-800";
      case "功能更新":
        return "bg-purple-900/50 text-purple-300 border-purple-800";
      default:
        return "bg-gray-900/50 text-gray-300 border-gray-800";
    }
  };

  const readArticle = () => {
    toast('文章阅读功能开发中...', {
      description: '我们正在完善文章系统',
    });
  };

  return (
    <section className="py-16 relative bg-gray-950">
      {/* 背景效果 */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-blue-600/5 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* 标题部分 */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-12 gap-4">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-blue-900/50 text-blue-300 mb-4 border border-blue-800">
              市场资讯
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
              最新公告与行业动态
            </h2>
          </motion.div>
          
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2.5 rounded-lg bg-gray-800 text-white font-medium flex items-center justify-center gap-2 border border-gray-700"
            onClick={readArticle}
          >
            <span>查看全部</span>
            <ChevronRight className="w-4 h-4" />
          </motion.button>
        </div>
        
        {/* 新闻与热门文章组合 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* 新闻列表 - 占2/3宽度 */}
          <motion.div 
            className="lg:col-span-2 space-y-6"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {newsItems.map((news) => (
              <motion.div 
                key={news.id}
                variants={newsVariants}
                className="rounded-xl p-5 bg-gray-900 border border-gray-800 hover:border-blue-500/50 transition-all hover:shadow-lg hover:shadow-blue-500/10 cursor-pointer"
                whileHover={{ y: -3 }}
                onClick={readArticle}
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(news.category)}`}>
                        {news.category}
                      </span>
                      <div className="flex items-center text-gray-400 text-sm">
                        <Calendar className="w-4 h-4 mr-1" />
                        {news.date}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{news.title}</h3>
                    <p className="text-gray-400 mb-4">{news.summary}</p>
                    
                    <motion.button
                      whileHover={{ x: 5 }}
                      className="flex items-center text-blue-400 font-medium gap-1"
                    >
                      <span>阅读更多</span>
                      <ExternalLink className="w-4 h-4" />
                    </motion.button>
                  </div>
                  
                  <div className="w-full md:w-48 h-40 rounded-lg overflow-hidden flex-shrink-0">
                    <img 
                      src={`https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=Cryptocurrency%20news%20finance%20related%20image%20${news.id}`} 
                      alt={news.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          {/* 热门文章 - 占1/3宽度 */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="bg-gray-900 rounded-xl p-5 border border-gray-800">
              <h3 className="text-xl font-semibold text-white mb-5">热门文章</h3>
              
              <div className="space-y-5">
                {popularArticles.map((article, index) => (
                  <motion.div 
                    key={article.id}
                    className="flex items-start gap-4 cursor-pointer"
                    whileHover={{ x: 5 }}
                    onClick={readArticle}
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center text-white font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="text-gray-200 font-medium mb-1 line-clamp-2">{article.title}</h4>
                      <div className="flex items-center text-gray-500 text-sm">
                        <i className="fas fa-eye mr-1"></i>
                        {article.views} 阅读
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-6 pt-5 border-t border-gray-800">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-2.5 rounded-lg bg-blue-900/30 text-blue-300 font-medium border border-blue-800/50"
                  onClick={readArticle}
                >
                  查看更多文章
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}