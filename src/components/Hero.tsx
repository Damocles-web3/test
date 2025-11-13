import { motion } from 'framer-motion';
import { ChevronRight, ArrowRight, ShieldCheck, BarChart3, Bitcoin, Globe, DollarSign } from 'lucide-react';
import { toast } from 'sonner';

export default function Hero() {
  const startTrading = () => {
    toast('交易功能即将开放', {
      description: '我们正在进行最后的系统优化',
    });
  };

  const downloadApp = () => {
    toast('应用下载链接已复制到剪贴板', {
      description: '前往手机浏览器粘贴链接下载',
    });
  };

  const heroVariants = {
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
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const floatVariants = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 5,
        ease: "easeInOut",
        repeat: Infinity,
      }
    }
  };

  return (
    <section className="pt-28 pb-16 relative overflow-hidden bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      {/* 背景效果 */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-indigo-900/10 to-transparent"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/5 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* 左侧内容 */}
          <motion.div 
            className="w-full lg:w-1/2 space-y-8"
            initial="hidden"
            animate="visible"
            variants={heroVariants}
          >
            <motion.div variants={itemVariants}>
              <div className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-blue-900/50 text-blue-300 mb-4 border border-blue-800">
                全球领先的数字资产交易平台
              </div>
            </motion.div>
            
            <motion.h1 
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400"
            >
              一站式<br />
              <span className="relative">
                数字资产交易平台
                <motion.span 
                  className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" 
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                ></motion.span>
              </span>
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-xl text-gray-300 max-w-xl"
            >
              支持200+数字资产，提供现货、合约、杠杆等多种交易方式，安全、高效、便捷。
            </motion.p>
            
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 rounded-lg bg-gradient-web3 text-white font-medium flex items-center justify-center gap-2 shadow-xl shadow-blue-500/20"
                onClick={startTrading}
              >
                <span>立即交易</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 rounded-lg bg-gray-800/80 text-white font-medium flex items-center justify-center gap-2 border border-gray-700"
                onClick={downloadApp}
              >
                <span>下载APP</span>
                <ChevronRight className="w-5 h-5" />
              </motion.button>
            </motion.div>
            
            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-6 pt-4">
              <div className="flex flex-col">
                <div className="flex items-center mb-2">
                  <BarChart3 className="w-5 h-5 text-blue-400 mr-2" />
                  <span className="text-gray-400 text-sm">全球用户</span>
                </div>
                <div className="text-2xl font-bold text-white">200+</div>
                <div className="text-gray-500 text-sm">覆盖国家和地区</div>
              </div>
              
              <div className="flex flex-col">
                <div className="flex items-center mb-2">
                  <Bitcoin className="w-5 h-5 text-blue-400 mr-2" />
                  <span className="text-gray-400 text-sm">交易对</span>
                </div>
                <div className="text-2xl font-bold text-white">800+</div>
                <div className="text-gray-500 text-sm">主流数字资产</div>
              </div>
            </motion.div>
          </motion.div>
          
          {/* 右侧图形 */}
          <motion.div 
            className="w-full lg:w-1/2 relative"
            variants={floatVariants}
            animate="animate"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              {/* 主要图形 */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[80%] h-[80%] rounded-full bg-gradient-web3 opacity-20 blur-2xl animate-pulse-slow"></div>
              </div>
              
              {/* 中心图像 - 交易应用界面 */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div 
                  className="w-[60%] h-[60%] rounded-2xl overflow-hidden shadow-2xl shadow-blue-500/20 border border-gray-700/50"
                  whileHover={{ rotate: 5, scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img 
                    src="https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Modern%20cryptocurrency%20trading%20platform%20interface&sign=b97f56974b6ebb2bc1521fe749dd5c02" 
                    alt="Crypto Trading Platform" 
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>
              
              {/* 浮动元素 */}
              <motion.div 
                className="absolute top-1/4 left-1/4 w-16 h-16 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-blue-500/20"
                animate={{ y: [0, -15, 0], x: [0, 10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                <ShieldCheck className="w-8 h-8 text-white" />
              </motion.div>
              
              <motion.div 
                className="absolute top-3/4 right-1/4 w-16 h-16 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center shadow-lg shadow-indigo-500/20"
                animate={{ y: [0, 15, 0], x: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                <DollarSign className="w-8 h-8 text-white" />
              </motion.div>
              
              <motion.div 
                className="absolute bottom-1/4 left-1/2 w-16 h-16 rounded-lg bg-gradient-to-br from-green-500 to-blue-500 flex items-center justify-center shadow-lg shadow-green-500/20"
                animate={{ y: [0, 10, 0], x: [0, -15, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <Globe className="w-8 h-8 text-white" />
              </motion.div>
            </div>
          </motion.div>
        </div>
        
        {/* 合作伙伴标志 */}
        <motion.div 
          className="mt-16 pt-8 border-t border-gray-800"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <p className="text-center text-gray-400 text-sm mb-8">受到全球领先企业的信任</p>
          <div className="flex flex-wrap justify-center items-center gap-10 sm:gap-16">
            {['ChainX', 'BlockVault', 'CryptoFlow', 'NexusLabs', 'DigitalPulse'].map((partner) => (
              <div key={partner} className="text-gray-500 font-bold text-lg sm:text-xl opacity-70 hover:opacity-100 transition-opacity">
                {partner}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}