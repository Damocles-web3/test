import { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Twitter, Linkedin, Mail, Menu, X, Moon, Sun, Download } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';
import { toast } from 'sonner';

export default function Footer() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const footerLinks = [
    {
      title: "交易",
      links: ["现货交易", "合约交易", "杠杆交易", "ETF交易", "OTC交易"]
    },
    {
      title: "产品",
      links: ["DeFi赚币", "NFT市场", "钱包服务", "法币交易", "行情数据"]
    },
    {
      title: "学院",
      links: ["新手教程", "区块链知识", "交易策略", "市场分析", "API文档"]
    },
    {
      title: "关于我们",
      links: ["公司介绍", "团队", "职业机会", "联系我们", "新闻中心"]
    },
    {
      title: "帮助与支持",
      links: ["帮助中心", "安全中心", "用户协议", "隐私政策", "法律声明"]
    }
  ];

  const socialLinks = [
    { icon: <Twitter className="w-5 h-5" />, label: "Twitter" },
    { icon: <Github className="w-5 h-5" />, label: "GitHub" },
    { icon: <Linkedin className="w-5 h-5" />, label: "LinkedIn" },
    { icon: <i className="fab fa-discord text-lg"></i>, label: "Discord" },
    { icon: <i className="fab fa-telegram-plane text-lg"></i>, label: "Telegram" },
  ];

  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const downloadApp = () => {
    toast('应用下载链接已复制到剪贴板', {
      description: '前往手机浏览器粘贴链接下载',
    });
  };

  return (
    <footer className="bg-gray-900 border-t border-gray-800 pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* 移动端菜单按钮 */}
        <div className="md:hidden mb-8 flex justify-between items-center">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-lg bg-gradient-web3 flex items-center justify-center mr-3">
              <span className="text-white font-bold text-xl">N3</span>
            </div>
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-web3">NeoWeb3</span>
          </div>
          
          <div className="flex items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-full text-gray-300 hover:text-white transition-colors"
              onClick={toggleTheme}
            >
              {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            </motion.button>
            
            <motion.button
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-md text-gray-200"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>
        
        {/* 移动端菜单 */}
        {isMobileMenuOpen && (
          <motion.div 
            className="md:hidden mb-8 space-y-6"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            {footerLinks.map((group, groupIndex) => (
              <div key={groupIndex}>
                <h4 className="text-white font-semibold mb-3">{group.title}</h4>
                <div className="space-y-2">
                  {group.links.map((link, linkIndex) => (
                    <a key={linkIndex} href="#" className="block text-gray-400 hover:text-white transition-colors">
                      {link}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        )}
        
        {/* 桌面端内容 */}
        <div className="hidden md:grid grid-cols-12 gap-8 mb-12">
          <div className="col-span-3 space-y-6">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-lg bg-gradient-web3 flex items-center justify-center mr-3">
                <span className="text-white font-bold text-xl">N3</span>
              </div>
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-web3">NeoWeb3</span>
            </div>
            
            <p className="text-gray-400 max-w-md">
              NeoWeb3是全球领先的数字资产交易平台，提供安全、稳定、高效的数字资产交易服务。
            </p>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-900/30 text-blue-300 font-medium border border-blue-800/50"
              onClick={downloadApp}
            >
              <Download className="w-4 h-4" />
              <span>下载APP</span>
            </motion.button>
          </div>
          
          {footerLinks.map((group, groupIndex) => (
            <motion.div 
              key={groupIndex}
              className="col-span-2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInVariants}
              transition={{ delay: groupIndex * 0.1 }}
            >
              <h4 className="text-white font-semibold mb-4">{group.title}</h4>
              <ul className="space-y-3">
                {group.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href="#" 
                      className="text-gray-400 hover:text-blue-400 transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        
        {/* 社交媒体和语言选择器 */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex space-x-4 mb-4 md:mb-0">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-blue-900 hover:text-white transition-colors"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.9 }}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
          
          <div className="flex items-center gap-4">
            <button className="text-gray-400 hover:text-white transition-colors">
              简体中文
            </button>
            <button className="text-gray-400 hover:text-white transition-colors">
              English
            </button>
            <button className="text-gray-400 hover:text-white transition-colors">
              日本語
            </button>
          </div>
        </div>
        
        {/* 分隔线 */}
        <div className="border-t border-gray-800 my-8"></div>
        
        {/* 版权信息 */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} NeoWeb3. 保留所有权利。
          </p>
          
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 justify-center">
            <a href="#" className="text-gray-500 text-sm hover:text-gray-300 transition-colors">隐私政策</a>
            <a href="#" className="text-gray-500 text-sm hover:text-gray-300 transition-colors">用户协议</a>
            <a href="#" className="text-gray-500 text-sm hover:text-gray-300 transition-colors">风险提示</a>
            <a href="#" className="text-gray-500 text-sm hover:text-gray-300 transition-colors">法律声明</a>
            <a href="#" className="text-gray-500 text-sm hover:text-gray-300 transition-colors">Cookie政策</a>
          </div>
        </div>
        
        {/* 认证标志 */}
        <div className="flex justify-center mt-8 flex-wrap gap-6">
          <div className="flex items-center text-gray-500 text-sm">
            <i className="fas fa-shield-alt mr-2"></i>
            <span>ISO 27001认证</span>
          </div>
          <div className="flex items-center text-gray-500 text-sm">
            <i className="fas fa-lock mr-2"></i>
            <span>SSL加密传输</span>
          </div>
          <div className="flex items-center text-gray-500 text-sm">
            <i className="fas fa-user-shield mr-2"></i>
            <span>KYC认证</span>
          </div>
        </div>
      </div>
    </footer>
  );
}