import { motion } from 'framer-motion';
import { CheckCircle, Shield, Code, Database, Zap, Globe, Users, Lock } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "安全至上",
      description: "采用最先进的加密技术和多重验证机制，确保您的资产和数据安全无忧。"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "高性能",
      description: "优化的区块链架构，提供闪电般的交易速度和极低的延迟。"
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "开发者友好",
      description: "完善的开发工具和文档，支持多种编程语言，让开发变得简单高效。"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "全球互联",
      description: "跨链技术支持，实现不同区块链网络间的无缝互通。"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "可扩展性",
      description: "创新的分片技术，支持无限扩展，满足未来业务增长需求。"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "社区驱动",
      description: "开放透明的治理机制，让社区成员共同参与平台发展决策。"
    }
  ];

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

  const iconVariants = {
    hover: { 
      scale: 1.1,
      rotate: 5,
      backgroundColor: "rgba(99, 102, 241, 0.2)",
      color: "#6366f1"
    }
  };

  return (
    <section id="features" className="py-20 relative">
      {/* 背景效果 */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 right-1/3 w-96 h-96 bg-purple-600/10 rounded-full filter blur-3xl"></div>
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
            核心优势
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
            为web3时代打造的强大功能
          </h2>
          <p className="text-gray-300 text-lg">
            我们的平台整合了最前沿的区块链技术，为您提供安全、高效、可扩展的web3解决方案。
          </p>
        </motion.div>
        
        {/* 特性网格 */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              variants={featureVariants}
              className="rounded-2xl p-6 glass-effect border border-gray-800 hover:border-indigo-500/50 transition-all hover:shadow-lg hover:shadow-indigo-500/10"
            >
              <motion.div 
                className="w-12 h-12 rounded-xl bg-gray-800 flex items-center justify-center text-indigo-400 mb-5"
                variants={iconVariants}
                whileHover="hover"
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
        
        {/* 安全承诺 */}
        <motion.div 
          className="mt-20 p-8 rounded-2xl bg-gradient-to-br from-indigo-900/30 to-purple-900/30 border border-indigo-800/50"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
                <Lock className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">安全承诺</h3>
                <p className="text-gray-300 mt-1">多重安全审计，保障您的资产安全</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-6">
              {['智能合约审计', 'bug赏金计划', '加密存储', '多因素验证'].map((item) => (
                <div key={item} className="flex items-center gap-2 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}