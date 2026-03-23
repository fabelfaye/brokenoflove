import React from 'react';
import { ProfileSection } from '@/components/ProfileSection';
import { LinkGroup, LinkItemData } from '@/components/LinkGroup';
import { motion } from 'motion/react';

const xhsLinks: LinkItemData[] = [
  { title: '我的小红书主页', url: 'https://www.xiaohongshu.com' },
  { title: '日常穿搭分享', url: 'https://www.xiaohongshu.com' },
  { title: '爱用好物合集', url: 'https://www.xiaohongshu.com' },
];

const weiboLinks: LinkItemData[] = [
  { title: '微博日常更新', url: 'https://weibo.com' },
  { title: '碎碎念合集', url: 'https://weibo.com' },
];

const douyinLinks: LinkItemData[] = [
  { title: '抖音短视频', url: 'https://www.douyin.com' },
  { title: '直播预告', url: '' }, // 测试空链接
];

const bilibiliLinks: LinkItemData[] = [
  { title: 'B站长视频投稿', url: 'https://www.bilibili.com' },
  { title: '游戏解说系列', url: 'https://www.bilibili.com' },
  { title: '学习打卡记录', url: 'https://www.bilibili.com' },
];

const HomePage: React.FC = () => {
  return (
    <div className="gradient-bg min-h-screen py-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-2xl"
      >
        <ProfileSection 
          avatarUrl="https://miaoda-conversation-file.cdn.bcebos.com/user-agir5qfv3pq8/conv-agissxejzbi8/20260323/file-agjtmu68uq68.jpg" 
          title="Broken of Love" 
        />
        
        <div className="mt-12 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <LinkGroup title="小红书" links={xhsLinks} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <LinkGroup title="微博" links={weiboLinks} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <LinkGroup title="抖音" links={douyinLinks} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <LinkGroup title="B站" links={bilibiliLinks} />
          </motion.div>
        </div>

        <footer className="mt-16 py-8 text-center text-muted-foreground text-sm">
          <p>© 2026 Broken of Love</p>
        </footer>
      </motion.div>
    </div>
  );
};

export default HomePage;
