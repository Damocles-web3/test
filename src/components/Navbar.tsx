import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/hooks/useTheme';
import { toast } from 'sonner';
import { Menu, X, Sun, Moon, Search, Wallet, ArrowRight, ChevronDown } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMarketDropdownOpen, setIsMarketDropdownOpen] = useState(false);
  const [isDefiDropdownOpen, setIsDefiDropdownOpen] = useState(false);
  const [isNftDropdownOpen, setIsNftDropdownOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const connectWallet = () => {
    toast('连接钱包功能开发中...', {
      description: '我们正在构建安全的钱包连接系统',
    });
  };

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  const linkVariants = {
    hover: { scale: 1.05, color: '#6366f1' },
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-950/95 border-b border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <motion.div 
            className="flex items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-web3 flex items-center justify-center mr-3">
              <span className="text-white font-bold text-xl">N3</span>
            </div>
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-web3">NeoWeb3</span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {[
              { name: '交易', href: '#', isActive: true },
              { name: '市场', href: '#', hasDropdown: true, toggleDropdown: setIsMarketDropdownOpen, isDropdownOpen: isMarketDropdownOpen },
              { name: '钱包', href: '#' },
              { name: 'DeFi', href: '#', hasDropdown: true, toggleDropdown: setIsDefiDropdownOpen, isDropdownOpen: isDefiDropdownOpen },
              { name: 'NFT', href: '#', hasDropdown: true, toggleDropdown: setIsNftDropdownOpen, isDropdownOpen: isNftDropdownOpen },
              { name: '赚币', href: '#' },
              { name: '学院', href: '#' },
            ].map((item) => (
              <div key={item.name} className="relative">
                <motion.button
                  href={item.href}
                  className={`px-4 py-2 text-sm font-medium transition-colors flex items-center ${
                    item.isActive ? 'text-white bg-gray-900/70 rounded-md' : 'text-gray-300 hover:text-white hover:bg-gray-900/70 rounded-md'
                  }`}
                  variants={linkVariants}
                  whileHover="hover"
                  onClick={() => item.hasDropdown && item.toggleDropdown && typeof item.toggleDropdown === 'function' && item.toggleDropdown(!item.isDropdownOpen)}
                >
                  {item.name}
                  {item.hasDropdown && <ChevronDown className="w-4 h-4 ml-1" />}
                </motion.button>
                
                {item.hasDropdown && item.isDropdownOpen && (
                  <motion.div 
                    className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-gray-900 border border-gray-800 py-1 z-50"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                  >
                    {item.name === '市场' && ['现货', '合约', '杠杆', 'ETF', '行情', '资金费率'].map((subItem) => (
                      <a key={subItem} href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-white">
                        {subItem}
                      </a>
                    ))}
                    {item.name === 'DeFi' && ['Swap', '赚币', '借贷', '质押', '挖矿', 'Launchpad'].map((subItem) => (
                      <a key={subItem} href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-white">
                        {subItem}
                      </a>
                    ))}
                    {item.name === 'NFT' && ['市场', '铸造', '探索', '我的收藏', '活动'].map((subItem) => (
                      <a key={subItem} href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-white">
                        {subItem}
                      </a>
                    ))}
                  </motion.div>
                )}
              </div>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-3">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-full text-gray-400 hover:text-white transition-colors"
              onClick={toggleTheme}
            >
              {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:flex p-2 rounded-full text-gray-400 hover:text-white transition-colors"
            >
              <Search className="w-5 h-5" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:flex items-center space-x-2 px-4 py-2 rounded-lg bg-gradient-web3 text-white font-medium shadow-lg shadow-indigo-500/30"
              onClick={connectWallet}
            >
              <Wallet className="w-4 h-4" />
              <span>交易</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>
            
            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              className="md:hidden p-2 rounded-md text-gray-300 hover:text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          className="md:hidden bg-gray-950 border-t border-gray-800"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={menuVariants}
        >
          <div className="px-4 py-4">
            <div className="relative mb-4">
              <input
                type="text"
                placeholder="搜索"
                className="w-full py-2 pl-10 pr-4 rounded-lg bg-gray-900 border border-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
            </div>
            
            <div className="space-y-2 mb-6">
              {[
                { name: '交易', isActive: true },
                { name: '市场' },
                { name: '钱包' },
                { name: 'DeFi' },
                { name: 'NFT' },
                { name: '赚币' },
                { name: '学院' },
              ].map((item) => (
                <a
                  key={item.name}
                  href="#"
                  className={`block px-4 py-3 rounded-md text-base font-medium ${
                    item.isActive ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-900 hover:text-white'
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </div>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full flex items-center justify-center space-x-2 px-4 py-3 rounded-lg bg-gradient-web3 text-white font-medium"
              onClick={connectWallet}
            >
              <Wallet className="w-4 h-4" />
              <span>连接钱包交易</span>
            </motion.button>
          </div>
        </motion.div>
      )}
    </header>
  );
}