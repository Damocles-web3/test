import { motion } from 'framer-motion';
import { Heart, Share2, ExternalLink, ChevronRight, Search } from 'lucide-react';

// 模拟NFT数据
const nftCollections = [
  {
    id: 1,
    title: "Ethereal Dimensions",
    artist: "DigitalDreamer",
    image: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Abstract%20futuristic%20NFT%20artwork%20vibrant%20colors&sign=e5351e2498842e5b38a01ed3afdd5cd7",
    price: "2.45 ETH",
    likes: 342
  },
  {
    id: 2,
    title: "Neon Genesis",
    artist: "CryptoVisionary",
    image: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Cyberpunk%20style%20NFT%20neon%20colors&sign=922040a51fe493d9a6fdfbcfeeabeacb",
    price: "1.89 ETH",
    likes: 215
  },
  {
    id: 3,
    title: "Quantum Pulse",
    artist: "BlockchainArtist",
    image: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Geometric%20pattern%20NFT%20abstract%20quantum&sign=0709a07f4d6399a012e9937513cda9dd",
    price: "3.21 ETH",
    likes: 486
  },
  {
    id: 4,
    title: "Digital Renaissance",
    artist: "ArtMetaverse",
    image: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Renaissance%20style%20digital%20art%20NFT&sign=f992602bc0b8bcd65e941e2c96868f85",
    price: "5.67 ETH",
    likes: 621
  }
];

export default function NFTGallery() {
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const nftVariants = {
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
      y: -5,
      transition: { duration: 0.3 }
    }
  };

  return (
    <section className="py-20 relative">
      {/* 背景效果 */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-pink-600/10 rounded-full filter blur-3xl"></div>
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
            <div className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-pink-900/50 text-pink-300 mb-4 border border-pink-800">
              NFT市场
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-400">
              探索精选NFT收藏
            </h2>
          </motion.div>
          
          <motion.div 
            className="relative w-full sm:w-auto"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <input
                type="text"
                placeholder="搜索NFT..."
                className="py-2 pl-10 pr-4 rounded-lg bg-gray-800 border border-gray-700 text-gray-300 w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
            </div>
          </motion.div>
        </div>
        
        {/* NFT网格 */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {nftCollections.map((nft) => (
            <motion.div 
              key={nft.id}
              variants={nftVariants}
              variants={hoverVariants}
              whileHover="hover"
              className="rounded-2xl overflow-hidden bg-gradient-card border border-gray-800 shadow-lg"
            >
              <div className="relative aspect-square overflow-hidden">
                <img 
                  src={nft.image} 
                  alt={nft.title} 
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="w-full p-4 flex justify-between">
                    <motion.button 
                      whileTap={{ scale: 0.9 }}
                      className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white backdrop-blur-sm"
                    >
                      <Heart className="w-5 h-5" />
                    </motion.button>
                    <motion.button 
                      whileTap={{ scale: 0.9 }}
                      className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white backdrop-blur-sm"
                    >
                      <Share2 className="w-5 h-5" />
                    </motion.button>
                    <motion.button 
                      whileTap={{ scale: 0.9 }}
                      className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center text-white"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </motion.button>
                  </div>
                </div>
              </div>
              
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-semibold text-white">{nft.title}</h3>
                  <div className="text-sm font-medium text-pink-400">{nft.price}</div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="text-sm text-gray-400">创作者: {nft.artist}</div>
                  <div className="flex items-center text-sm text-gray-400">
                    <Heart className="w-4 h-4 mr-1 text-pink-500" />
                    {nft.likes}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* 查看更多按钮 */}
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 rounded-xl bg-gray-800 text-white font-medium flex items-center justify-center gap-2 border border-gray-700 mx-auto"
          >
            <span>查看更多收藏</span>
            <ChevronRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}