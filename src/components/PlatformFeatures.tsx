import { motion } from 'framer-motion';
import { ArrowRight, BarChart3, Shield, Zap, Globe, Layers, Lock, CheckCircle2, PieChart } from 'lucide-react';
import { toast } from 'sonner';

// 平台特色功能
const platformFeatures = [
  {
    title: "高速交易引擎",
    description: "自研高速撮合引擎，处理速度高达100万笔/秒，确保交易毫秒级响应",
    icon: <Zap className="w-6 h-6" />,
    gradient: "from-blue-500 to-indigo-600"
  },
  {
    title: "多资产支持",
    description: "支持200+种数字资产，800+交易对，满足多样化投资需求",
    icon: <PieChart className="w-6 h-6" />,
    gradient: "from-purple-500 to-pink-600"
  },
  {
    title: "安全保障",
    description: "银行级安全体系，98%资产存放在冷钱包，多重加密保护",
    icon: <Shield className="w-6 h-6" />,
    gradient: "from-green-500 to-emerald-600"
  },
  {
    title: "深度流动性",
    description: "全球顶级做市商支持，提供充足流动性，确保交易滑点最小化",
    icon: <BarChart3 className="w-6 h-6" />,
    gradient: "from-amber-500 to-orange-600"
  },
  {
    title: "多终端支持",
    description: "Web端、移动端、PC客户端全面覆盖，随时随地进行交易",
    icon: <Globe className="w-6 h-6" />,
    gradient: "from-cyan-500 to-blue-600"
  },
  {
    title: "高级交易工具",
    description: "提供K线分析、技术指标、止损止盈等专业交易工具",
    icon: <Layers className="w-6 h-6" />,
    gradient: "from-rose-500 to-pink-600"
  }
];

// 安全特性
const securityFeatures = [
  "冷钱包存储",
  "多重身份验证",
  "实时风控系统",
  "资产隔离",
  "加密传输",
  "安全审计"
];

export default function PlatformFeatures() {
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const featureVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const hoverVariants = {
    hover: { 
      y: -5,
      transition: { duration: 0.3 }
    }
  };

  const learnMore = () => {
    toast('了解更多功能', {
      description: '我们的平台还有更多功能等待您探索',
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
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-blue-900/50 text-blue-300 mb-4 border border-blue-800">
            平台优势
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">
            全球领先的数字资产交易平台
          </h2>
          <p className="text-gray-400 text-lg">
            我们提供安全、稳定、高效的数字资产交易服务，满足您的多样化需求
          </p>
        </motion.div>
        
        {/* 特性网格 */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {platformFeatures.map((feature, index) => (
            <motion.div 
              key={index}
              variants={featureVariants}
              variants={hoverVariants}
              whileHover="hover"
              className="bg-gray-900 rounded-xl p-6 border border-gray-800 transition-all hover:shadow-lg hover:shadow-blue-500/10"
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-white mb-6`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
        
        {/* 安全承诺 */}
        <motion.div 
          className="rounded-2xl overflow-hidden relative bg-gradient-to-br from-blue-900/20 to-indigo-900/20 border border-blue-800/50"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* 背景装饰 */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full filter blur-3xl -mr-40 -mt-40"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-600/10 rounded-full filter blur-3xl -ml-40 -mb-40"></div>
          
          <div className="relative z-10 p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
              <div className="md:w-1/2">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
                    <Lock className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">银行级安全保障</h3>
                    <p className="text-gray-300 mt-1">保护您的资产安全是我们的首要任务</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {securityFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3 text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 rounded-lg bg-gradient-web3 text-white font-medium flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20"
                  onClick={learnMore}
                >
                  <span>了解更多安全措施</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </div>
              
              <div className="md:w-1/2">
                <motion.div 
                  className="relative rounded-xl overflow-hidden border border-gray-700 shadow-xl shadow-blue-500/10"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <img 
                    src="https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Secure%20cryptocurrency%20trading%20platform%20security%20features&sign=6755405f5433a5c79ae43c178db07b36" 
                    alt="Security Features" 
                    className="w-full h-auto rounded-xl"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}