import { motion } from 'framer-motion';
import { Shield, Lock, CheckCircle2, ShieldAlert, Globe, BarChart3, Award, LockKeyhole } from 'lucide-react';
import { toast } from 'sonner';

// 安全特性数据
const securityFeatures = [
  {
    title: "资产安全",
    description: "98%的数字资产存储在离线冷钱包中，多重签名保护，确保资产安全",
    icon: <Shield className="w-6 h-6" />,
    items: ["冷钱包存储", "多重签名", "资产隔离", "定期审计"]
  },
  {
    title: "交易安全",
    description: "实时风控系统，AI异常交易检测，防止欺诈和黑客攻击",
    icon: <LockKeyhole className="w-6 h-6" />,
    items: ["实时风控", "异常检测", "反洗钱合规", "安全审计"]
  },
  {
    title: "系统安全",
    description: "采用军工级加密技术，多层防护架构，保障平台稳定运行",
    icon: <ShieldAlert className="w-6 h-6" />,
    items: ["军工级加密", "多层防护", "DDoS防护", "灾备系统"]
  },
  {
    title: "用户安全",
    description: "多重身份验证，登录保护，全方位保障用户账户安全",
    icon: <Lock className="w-6 h-6" />,
    items: ["MFA验证", "登录保护", "异常登录提醒", "隐私保护"]
  }
];

// 合规认证数据
const complianceCertifications = [
  { name: "ISO 27001", description: "信息安全管理体系认证" },
  { name: "PCI DSS", description: "支付卡行业数据安全标准认证" },
  { name: "KYC/AML", description: "了解你的客户/反洗钱合规" },
  { name: "全球监管许可", description: "多个国家和地区的金融监管许可" }
];

export default function SecurityInfo() {
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

  const learnMore = () => {
    toast('了解更多安全信息', {
      description: '我们致力于为用户提供最安全的交易环境',
    });
  };

  return (
    <section className="py-16 relative bg-gray-950">
      {/* 背景效果 */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-blue-600/5 rounded-full filter blur-3xl"></div>
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
          <div className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-green-900/50 text-green-300 mb-4 border border-green-800">
            安全与合规
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">
            银行级安全保障
          </h2>
          <p className="text-gray-400 text-lg">
            我们将用户资产安全放在首位，采用行业领先的安全技术和合规标准
          </p>
        </motion.div>
        
        {/* 安全特性网格 */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {securityFeatures.map((feature, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              variants={hoverVariants}
              whileHover="hover"
              className="bg-gray-900 rounded-xl p-6 border border-gray-800 transition-all hover:shadow-lg hover:shadow-green-500/10"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-white mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400 mb-6">{feature.description}</p>
              
              <div className="space-y-3">
                {feature.items.map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* 安全数据统计 */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="bg-gray-900 rounded-xl p-8 border border-gray-800">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-white mb-2">98%</div>
                <div className="text-gray-400">资产冷存储</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-white mb-2">10+</div>
                <div className="text-gray-400">全球监管许可</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-white mb-2">24/7</div>
                <div className="text-gray-400">安全监控</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-white mb-2">0</div>
                <div className="text-gray-400">重大安全事故</div>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* 合规认证 */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">合规与认证</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {complianceCertifications.map((cert, index) => (
              <motion.div 
                key={index}
                className="bg-gray-900 rounded-xl p-6 border border-gray-800 flex flex-col items-center text-center"
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(16, 185, 129, 0.1)" }}
              >
                <div className="w-16 h-16 rounded-full bg-green-900/30 flex items-center justify-center text-green-400 mb-5">
                  <Award className="w-8 h-8" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">{cert.name}</h4>
                <p className="text-gray-400 text-sm">{cert.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* 安全承诺 */}
        <motion.div 
          className="rounded-2xl overflow-hidden relative bg-gradient-to-br from-green-900/20 to-emerald-900/20 border border-green-800/50"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* 背景装饰 */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-green-600/10 rounded-full filter blur-3xl -mr-40 -mt-40"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-600/10 rounded-full filter blur-3xl -ml-40 -mb-40"></div>
          
          <div className="relative z-10 p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="md:w-1/2">
                <h3 className="text-2xl font-bold text-white mb-4">安全承诺</h3>
                <p className="text-gray-300 mb-6">
                  我们承诺为用户提供最安全的交易环境，不断提升安全技术和流程，确保您的资产和个人信息得到最大程度的保护。如果您发现任何安全漏洞，请联系我们的安全团队。
                </p>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 rounded-lg bg-gradient-to-r from-green-500 to-emerald-600 text-white font-medium flex items-center justify-center gap-2 shadow-lg shadow-green-500/20"
                  onClick={learnMore}
                >
                  <span>了解更多安全信息</span>
                  <Globe className="w-5 h-5" />
                </motion.button>
              </div>
              
              <div className="md:w-1/2">
                <motion.div 
                  className="relative rounded-xl overflow-hidden border border-gray-700 shadow-xl shadow-green-500/10"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <img 
                    src="https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Cybersecurity%20data%20protection%20technology&sign=00ab2dabc4889c6bcb873fab64163bc2" 
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