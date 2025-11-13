import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send } from 'lucide-react';
import { toast } from 'sonner';
import { z } from 'zod';

export default function Subscribe() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // 邮箱验证模式
  const emailSchema = z.string().email('请输入有效的邮箱地址');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // 验证邮箱
    const result = emailSchema.safeParse(email);
    if (!result.success) {
      toast.error(result.error.message);
      return;
    }
    
    setIsSubmitting(true);
    
    // 模拟提交过程
    setTimeout(() => {
      toast.success('订阅成功！', {
        description: '感谢您订阅我们的新闻通讯，我们将定期发送最新的web3资讯给您。'
      });
      setEmail('');
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section className="py-20 relative">
      {/* 背景效果 */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-900/20 to-transparent"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-600/10 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-3xl mx-auto rounded-3xl overflow-hidden relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* 背景图像 */}
          <div className="absolute inset-0">
            <img 
              src="https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Futuristic%20technology%20background%20web3%20concept&sign=c1b1afa72425822fea4d5fcf0a95d5a5" 
              alt="Background" 
              className="w-full h-full object-cover opacity-20"
            />
          </div>
          
          {/* 渐变叠加 */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/80 via-purple-900/80 to-indigo-900/80 backdrop-blur-sm"></div>
          
          {/* 内容 */}
          <div className="relative p-8 md:p-12 text-center z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                订阅我们的新闻通讯
              </h2>
              <p className="text-gray-300 mb-8 max-w-xl mx-auto">
                获取最新的web3行业动态、产品更新和独家活动邀请，抢先了解区块链世界的前沿发展。
              </p>
            </motion.div>
            
            <motion.form 
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}transition={{ delay: 0.4, duration: 0.5 }}
            >
              <div className="relative flex-1">
                <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                  <Mail className="w-5 h-5 text-gray-400" />
                </div>
                <input
                  type="email"
                  placeholder="输入您的邮箱地址"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full py-3 pl-12 pr-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  required
                  disabled={isSubmitting}
                />
              </div>
              
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 rounded-xl bg-gradient-web3 text-white font-medium flex items-center justify-center gap-2 shadow-lg shadow-indigo-500/20 min-w-[120px]"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                ) : (
                  <>
                    <span>订阅</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </motion.button>
            </motion.form>
            
            <motion.p 
              className="text-gray-400 text-sm mt-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              我们尊重您的隐私，不会向第三方分享您的信息。
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}