import { motion } from 'framer-motion';
import { Twitter, Linkedin, Github, ExternalLink } from 'lucide-react';

// 模拟团队成员数据
const teamMembers = [
  {
    id: 1,
    name: "张明",
    role: "创始人 & CEO",
    bio: "区块链领域专家，拥有10年技术和创业经验",
    image: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Blockchain%20CEO%20portrait%20professional%20confident&sign=e4fa4418ab43c05708bd487461766856",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#"
    }
  },
  {
    id: 2,
    name: "李华",
    role: "CTO",
    bio: "前谷歌高级工程师，分布式系统专家",
    image: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=CTO%20portrait%20technical%20visionary&sign=358549ca285088c5f05a5577c16f94b9",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#"
    }
  },
  {
    id: 3,
    name: "王芳",
    role: "产品总监",
    bio: "前阿里巴巴产品经理，专注用户体验和产品策略",
    image: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Product%20director%20portrait%20innovative&sign=5a942fa3476a1ffae4b733b6daf705b7",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#"
    }
  },
  {
    id: 4,
    name: "赵伟",
    role: "区块链架构师",
    bio: "区块链协议专家，曾参与多个知名项目开发",
    image: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Blockchain%20architect%20portrait%20technical&sign=4c09e2e218c73c4b174943a58d2aa0e3",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#"
    }
  }
];

export default function Team() {
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const memberVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const hoverVariants = {
    hover: { 
      y: -10,
      transition: { duration: 0.3 }
    }
  };

  return (
    <section className="py-20 relative">
      {/* 背景效果 */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 right-1/3 w-96 h-96 bg-indigo-600/10 rounded-full filter blur-3xl"></div>
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
            核心团队
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
            由行业专家组成的团队
          </h2>
          <p className="text-gray-300 text-lg">
            我们的团队汇集了区块链、软件开发和金融科技领域的顶尖人才，致力于构建下一代web3基础设施。
          </p>
        </motion.div>
        
        {/* 团队成员网格 */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {teamMembers.map((member) => (
            <motion.div 
              key={member.id}
              variants={memberVariants}
              variants={hoverVariants}
              whileHover="hover"
              className="flex flex-col items-center text-center"
            >
              <div className="relative w-48 h-48 rounded-full overflow-hidden mb-6 border-4 border-gray-800">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <div className="flex space-x-3">
                    <motion.a 
                      href={member.social.twitter}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white backdrop-blur-sm"
                    >
                      <Twitter className="w-4 h-4" />
                    </motion.a>
                    <motion.a 
                      href={member.social.linkedin}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white backdrop-blur-sm"
                    >
                      <Linkedin className="w-4 h-4" />
                    </motion.a>
                    <motion.a 
                      href={member.social.github}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white backdrop-blur-sm"
                    >
                      <Github className="w-4 h-4" />
                    </motion.a>
                  </div>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-1">{member.name}</h3>
              <p className="text-indigo-400 font-medium mb-3">{member.role}</p>
              <p className="text-gray-400 text-sm mb-4">{member.bio}</p>
              
              <motion.a
                href="#"
                whileHover={{ x: 5 }}
                className="text-indigo-400 text-sm font-medium flex items-center gap-1"
              >
                <span>查看个人资料</span>
                <ExternalLink className="w-3 h-3" />
              </motion.a>
            </motion.div>
          ))}
        </motion.div>
        
        {/* 加入我们 */}
        <motion.div 
          className="mt-20 p-8 rounded-2xl bg-gradient-to-br from-indigo-900/30 to-purple-900/30 border border-indigo-800/50 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="text-2xl font-bold text-white mb-3">加入我们的团队</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            我们正在寻找充满激情的人才加入我们的团队，共同构建web3的未来。查看我们的职位空缺，成为NeoWeb3的一员！
          </p>
          
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-3 rounded-xl bg-gradient-web3 text-white font-medium shadow-lg shadow-indigo-500/20"
          >
            查看职位空缺
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}