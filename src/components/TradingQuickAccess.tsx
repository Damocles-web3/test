import { motion } from 'framer-motion';
import { ArrowRight, DollarSign, BarChart2, Shield, Zap, Lock, ChevronRight, Wallet, CreditCard } from 'lucide-react';
import { toast } from 'sonner';

// 交易类型数据
const tradingTypes = [
  {
    title: "现货交易",
    description: "直接买入和卖出数字资产，支持多种加密货币交易对",
    icon: <DollarSign className="w-6 h-6" />,
    gradient: "from-blue-500 to-indigo-600",
    link: "#spot-trading"
  },
  {
    title: "合约交易",
    description: "高达100倍杠杆，双向交易，放大收益潜力",
    icon: <BarChart2 className="w-6 h-6" />,
    gradient: "from-purple-500 to-pink-600",
    link: "#contract-trading"
  },
  {
    title: "杠杆交易",
    description: "借入资金进行交易，灵活控制仓位，提高资金利用率",
    icon: <Zap className="w-6 h-6" />,
    gradient: "from-amber-500 to-orange-600",
    link: "#margin-trading"
  },
  {
    title: "法币交易",
    description: "使用法定货币直接购买加密货币，安全便捷",
    icon: <CreditCard className="w-6 h-6" />,
    gradient: "from-green-500 to-emerald-600",
    link: "#fiat-trading"
  }
];

// 快捷操作数据
const quickActions = [
  {
    title: "充值",
    description: "快速充值加密货币到您的账户",
    icon: <i className="fas fa-plus-circle text-green-500"></i>,
    color: "bg-green-900/20 border-green-800/30 text-green-400"
  },
  {
    title: "提现",
    description: "安全快捷地提取您的数字资产",
    icon: <i className="fas fa-minus-circle text-blue-500"></i>,
    color: "bg-blue-900/20 border-blue-800/30 text-blue-400"
  },
  {
    title: "转账",
    description: "向其他用户或地址转账加密货币",
    icon: <i className="fas fa-exchange-alt text-purple-500"></i>,
    color: "bg-purple-900/20 border-purple-800/30 text-purple-400"
  },
  {
    title: "钱包",
    description: "管理您的所有数字资产和交易记录",
    icon: <Wallet className="w-5 h-5 text-amber-500" />,
    color: "bg-amber-900/20 border-amber-800/30 text-amber-400"
  }
];

export default function TradingQuickAccess() {
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
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

  const startTrading = (type: string) => {
    toast(`${type}功能开发中...`, {
      description: '我们正在完善交易系统',
    });
  };

  const handleQuickAction = (action: string) => {
    toast(`${action}功能开发中...`, {
      description: '我们正在完善相关功能',
    });
  };

  return (
    <section className="py-16 relative bg-gray-950">
      {/* 背景效果 */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-blue-600/5 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* 标题部分 */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-white mb-4">快速开始交易</h2>
          <p className="text-gray-400">选择适合您的交易方式，体验安全、高效的数字资产交易</p>
        </motion.div>
        
        {/* 交易类型卡片 */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {tradingTypes.map((type, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
            
              whileHover="hover"
              className="bg-gray-900 rounded-xl p-6 border border-gray-800 cursor-pointer transition-all hover:shadow-lg hover:shadow-blue-500/10"
              onClick={() => startTrading(type.title)}
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${type.gradient} flex items-center justify-center text-white mb-5`}>
                {type.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{type.title}</h3>
              <p className="text-gray-400 mb-5">{type.description}</p>
              <div className="flex items-center text-blue-400 font-medium">
                <span>立即交易</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* 快捷操作和安全保障 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* 快捷操作 */}
          <motion.div 
            className="lg:col-span-1 bg-gray-900 rounded-xl p-6 border border-gray-800"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-bold text-white mb-6">快捷操作</h3>
            
            <div className="space-y-4">
              {quickActions.map((action, index) => (
                <motion.div 
                  key={index}
                  className={`p-4 rounded-lg border ${action.color} cursor-pointer`}
                  whileHover={{ x: 5 }}
                  onClick={() => handleQuickAction(action.title)}
                >
                  <div className="flex items-center">
                    <div className="mr-4">{action.icon}</div>
                    <div>
                      <h4 className="font-medium">{action.title}</h4>
                      <p className="text-xs text-gray-400 mt-1">{action.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* 安全保障 */}
          <motion.div 
            className="lg:col-span-2 bg-gradient-to-br from-gray-900 to-gray-900 rounded-xl p-6 border border-gray-800 relative overflow-hidden"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* 背景装饰 */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full filter blur-3xl -mr-20 -mt-20"></div>
            
            <div className="relative z-10">
              <h3 className="text-xl font-bold text-white mb-6">安全保障</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex">
                  <div className="w-12 h-12 rounded-lg bg-blue-900/30 flex items-center justify-center text-blue-400 mr-4 flex-shrink-0">
                    <Shield className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white mb-1">银行级安全保障</h4>
                    <p className="text-gray-400 text-sm">采用多重加密技术和冷钱包存储，保障您的资产安全</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="w-12 h-12 rounded-lg bg-purple-900/30 flex items-center justify-center text-purple-400 mr-4 flex-shrink-0">
                    <Lock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white mb-1">多重身份验证</h4>
                    <p className="text-gray-400 text-sm">支持Google Authenticator、短信验证等多重安全验证方式</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="w-12 h-12 rounded-lg bg-green-900/30 flex items-center justify-center text-green-400 mr-4 flex-shrink-0">
                    <i className="fas fa-shield-alt text-lg"></i>
                  </div>
                  <div>
                    <h4 className="font-medium text-white mb-1">风控系统</h4>
                    <p className="text-gray-400 text-sm">智能风控系统，实时监控异常交易，防范各类风险</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="w-12 h-12 rounded-lg bg-amber-900/30 flex items-center justify-center text-amber-400 mr-4 flex-shrink-0">
                    <i className="fas fa-certificate text-lg"></i>
                  </div>
                  <div>
                    <h4 className="font-medium text-white mb-1">合规认证</h4>
                    <p className="text-gray-400 text-sm">获得多项国际金融合规认证，保障交易合法合规</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-800">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 rounded-lg bg-blue-900/30 text-blue-300 font-medium border border-blue-800/50"
                >
                  了解更多安全措施
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}