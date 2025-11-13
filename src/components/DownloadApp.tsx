import { motion } from 'framer-motion';
import { Download, Smartphone, Monitor, ChevronRight, QrCode, CheckCircle2 } from 'lucide-react';
import { toast } from 'sonner';

// 应用功能数据
const appFeatures = [
  { name: "实时行情", icon: <i className="fas fa-chart-line"></i> },
  { name: "快速交易", icon: <i className="fas fa-bolt"></i> },
  { name: "资产管理", icon: <i className="fas fa-wallet"></i> },
  { name: "安全登录", icon: <i className="fas fa-shield-alt"></i> },
  { name: "市场资讯", icon: <i className="fas fa-newspaper"></i> },
  { name: "一键充值提现", icon: <i className="fas fa-exchange-alt"></i> },
];

// 下载方式
const downloadOptions = [
  {
    title: "iOS 下载",
    description: "App Store 搜索 NeoWeb3",
    icon: <i className="fab fa-apple text-2xl"></i>,
    color: "bg-gray-800 hover:bg-gray-700"
  },
  {
    title: "Android 下载",
    description: "扫描二维码下载APK",
    icon: <i className="fab fa-android text-2xl"></i>,
    color: "bg-gray-800 hover:bg-gray-700"
  },
  {
    title: "桌面客户端",
    description: "Windows / macOS / Linux",
    icon: <Monitor className="w-6 h-6" />,
    color: "bg-gray-800 hover:bg-gray-700"
  }
];

export default function DownloadApp() {
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

  const downloadApp = (platform: string) => {
    toast(`${platform}版本下载中...`, {
      description: '请稍候，我们正在为您准备下载链接',
    });
  };

  return (
    <section className="py-20 relative bg-gray-950 overflow-hidden">
      {/* 背景效果 */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 to-transparent"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/5 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* 左侧内容 */}
          <motion.div 
            className="w-full lg:w-1/2 space-y-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <div className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-blue-900/50 text-blue-300 mb-4 border border-blue-800">
                随时随地交易
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-white">
                下载NeoWeb3<br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">
                  移动交易客户端
                </span>
              </h2>
              <p className="text-gray-400 text-lg mb-8 max-w-xl">
                通过NeoWeb3移动客户端，您可以随时随地进行数字资产交易，管理您的投资组合，获取实时市场行情。
              </p>
            </div>
            
            {/* 应用功能 */}
            <motion.div 
              className="grid grid-cols-2 gap-4"
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {appFeatures.map((feature, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  className="flex items-center gap-3"
                >
                  <div className="w-8 h-8 rounded-full bg-blue-900/30 flex items-center justify-center text-blue-400 flex-shrink-0">
                    {feature.icon}
                  </div>
                  <span className="text-gray-200">{feature.name}</span>
                </motion.div>
              ))}
            </motion.div>
            
            {/* 下载按钮 */}
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3 px-6 py-3.5 rounded-lg bg-blue-600 text-white font-medium shadow-lg shadow-blue-500/20"
                onClick={() => downloadApp('iOS')}
              >
                <i className="fab fa-apple text-xl"></i>
                <div className="text-left">
                  <div className="text-xs">下载</div>
                  <div className="font-semibold">App Store</div>
                </div>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3 px-6 py-3.5 rounded-lg bg-gray-800 text-white font-medium border border-gray-700"
                onClick={() => downloadApp('Android')}
              >
                <i className="fab fa-android text-xl"></i>
                <div className="text-left">
                  <div className="text-xs">下载</div>
                  <div className="font-semibold">Google Play</div>
                </div>
              </motion.button>
            </div>
          </motion.div>
          
          {/* 右侧图像 */}
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              {/* 主要手机图像 */}
              <motion.div 
                className="relative mx-auto max-w-xs"
                animate={{ 
                  y: [0, -10, 0],
                  transition: {
                    duration: 5,
                    ease: "easeInOut",
                    repeat: Infinity,
                  }
                }}
              >
                <div className="w-[280px] h-[580px] rounded-[40px] overflow-hidden border-8 border-gray-800 shadow-2xl shadow-blue-500/20">
                  <img 
                    src="https://space.coze.cn/api/coze_space/gen_image?image_size=portrait_16_9&prompt=Cryptocurrency%20trading%20app%20interface%20on%20smartphone&sign=3cd3b7e6c5d68e6835ce33905e5fe502" 
                    alt="Mobile App Interface" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
              
              {/* 浮动元素 */}
              <motion.div 
                className="absolute -top-10 -left-10 bg-gray-900 rounded-xl p-4 border border-gray-800 shadow-lg"
                animate={{ 
                  y: [0, -5, 0],
                  transition: {
                    duration: 4,
                    ease: "easeInOut",
                    repeat: Infinity,
                  }
                }}
              >
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-500" />
                  <div>
                    <div className="text-white font-medium">安全保障</div>
                    <div className="text-gray-400 text-xs">多重加密验证</div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                className="absolute -bottom-5 -right-5 bg-gray-900 rounded-xl p-4 border border-gray-800 shadow-lg"
                animate={{ 
                  y: [0, 5, 0],transition: {
                    duration: 3,
                    ease: "easeInOut",
                    repeat: Infinity,
                  }
                }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white">
                    <i className="fas fa-chart-line"></i>
                  </div>
                  <div>
                    <div className="text-white font-medium">实时行情</div>
                    <div className="text-gray-400 text-xs">毫秒级更新</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
        
        {/* 更多下载选项 */}
        <motion.div 
          className="mt-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">更多下载选项</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {downloadOptions.map((option, index) => (
              <motion.div 
                key={index}
                className={`rounded-xl p-6 border border-gray-800 flex flex-col items-center text-center cursor-pointer ${option.color}`}
                whileHover={{ y: -5 }}
                onClick={() => downloadApp(option.title)}
              >
                <div className="w-16 h-16 rounded-full bg-gray-900 flex items-center justify-center text-white mb-6">
                  {option.icon}
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">{option.title}</h4>
                <p className="text-gray-400 text-sm">{option.description}</p>
                
                {option.title === "Android 下载" && (
                  <div className="mt-6 w-32 h-32 bg-white p-2 rounded-lg">
                    <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                       <QrCode className="w-24 h-24 text-gray-700" />
                    </div>
                  </div>
                )}
                
                <motion.div 
                  className="mt-6 text-blue-400 font-medium flex items-center"
                  whileHover={{ x: 3 }}
                >
                  <span>立即下载</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}