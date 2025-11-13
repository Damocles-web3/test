import { motion } from 'framer-motion';
import { ArrowRight, Bitcoin, CreditCard, Landmark, Wallet, TrendingUp, Zap, Globe, ChevronRight, CheckCircle } from 'lucide-react';
import { toast } from 'sonner';

// 产品展示数据
const products = [
  {
    title: "现货交易",
    description: "直接买入和卖出比特币、以太坊等加密货币，支持多种交易对",
    icon: <Bitcoin className="w-6 h-6" />,
    gradient: "from-blue-500 to-indigo-600",
    features: ["实时价格更新", "高流动性", "低手续费", "快速撮合"]
  },
  {
    title: "合约交易",
    description: "通过合约交易放大收益，支持多空双向交易和高达100倍杠杆",
    icon: <TrendingUp className="w-6 h-6" />,
    gradient: "from-purple-500 to-pink-600",
    features: ["100倍杠杆", "双向交易", "止盈止损", "模拟交易"]
  },
  {
    title: "法币交易",
    description: "使用法定货币（人民币、美元、欧元等）直接购买加密货币",
    icon: <CreditCard className="w-6 h-6" />,
    gradient: "from-green-500 to-emerald-600",
    features: ["多种支付方式", "即时到账", "安全可靠", "24/7客服"]
  },
  {
    title: "NFT市场",
    description: "探索、收藏和交易独特的数字艺术品和收藏品",
  icon: <i className="fas fa-palette text-lg"></i>,
    gradient: "from-amber-500 to-orange-600",
    features: ["精选藏品", "创作者支持", "安全交易", "跨链兼容"]
  },
  {
    title: "DeFi赚币",
    description: "通过质押、流动性挖矿等方式获得加密货币收益",
    icon: <Landmark className="w-6 h-6" />,
    gradient: "from-cyan-500 to-blue-600",
    features: ["高收益产品", "灵活期限", "低风险", "实时收益"]
  },
  {
    title: "数字钱包",
    description: "安全存储、管理和交易您的加密货币资产",
    icon: <Wallet className="w-6 h-6" />,
    gradient: "from-rose-500 to-red-600",
    features: ["多币种支持", "私钥自持", "一键转账", "资产跟踪"]
  }
];

export default function ProductsShowcase() {
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const productVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const hoverVariants = {
    hover: { 
      scale: 1.03,
      transition: { duration: 0.3 }
    }
  };

  const exploreProduct = (product: string) => {
    toast(`${product}产品开发中...`, {
      description: '我们正在完善相关功能',
    });
  };

  return (
    <section className="py-16 relative bg-gray-950">
      {/* 背景效果 */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 right-1/3 w-96 h-96 bg-blue-600/5 rounded-full filter blur-3xl"></div>
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
          <div className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-blue-900/50 text-blue-300 mb-4 border border-blue-800">
            产品中心
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">
            全方位数字资产服务
          </h2>
          <p className="text-gray-400 text-lg">
            我们提供多样化的产品和服务，满足您在数字资产领域的各种需求
          </p>
        </motion.div>
        
        {/* 产品网格 */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {products.map((product, index) => (
            <motion.div 
              key={index}
              variants={productVariants}
              whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
              className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 transition-all hover:shadow-lg hover:shadow-blue-500/10"
            >
              <div className="h-48 overflow-hidden relative">
                <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-20`}></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${product.gradient} flex items-center justify-center text-white`}>
                    {product.icon}
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">{product.title}</h3>
                <p className="text-gray-400 mb-6">{product.description}</p>
                
                <div className="space-y-2 mb-6">
                  {product.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-gray-300">
                      <CheckCircle className="text-green-500 text-sm" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <motion.button
                  whileHover={{ x: 5 }}
                  className="flex items-center text-blue-400 font-medium gap-1"
                  onClick={() => exploreProduct(product.title)}
                >
                  <span>了解更多</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* 平台优势总结 */}
        <motion.div 
          className="mt-16 p-8 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-900 border border-gray-800"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-white mb-4">一站式数字资产交易平台</h3>
              <p className="text-gray-400 mb-6">
                无论您是加密货币新手还是经验丰富的交易者，我们都能为您提供安全、高效、便捷的交易体验。从现货交易到合约交易，从法币购买到DeFi赚币，满足您的多样化需求。
              </p>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 text-white font-medium flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20"
                onClick={() => toast('立即开始交易', { description: '连接钱包，开启您的数字资产之旅' })}
              >
                <span>立即开始交易</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>
            
            <div className="flex flex-wrap gap-6 justify-center md:justify-end">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">200+</div>
                <div className="text-gray-400">支持币种</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">800+</div>
                <div className="text-gray-400">交易对</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">24/7</div>
                <div className="text-gray-400">客户支持</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">100万+</div>
                <div className="text-gray-400">交易速度(笔/秒)</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}