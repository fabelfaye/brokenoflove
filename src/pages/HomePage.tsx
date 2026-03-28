import React from 'react';
import { ProfileSection } from '@/components/ProfileSection';
import { LinkGroup, LinkItemData } from '@/components/LinkGroup';
import { motion } from 'motion/react';

const xhsLinks: LinkItemData[] = [
  { title: '破碎的爱首...', url: 'https://www.xiaohongshu.com/explore/69c7261400000000230168a5', updateDate: '3月28日' },
  { title: '明日首播预...', url: 'https://www.xiaohongshu.com/explore/69c7230900000000220298ef', updateDate: '3月28日' },
  { title: '破碎的爱倒...', url: 'https://www.xiaohongshu.com/explore/69c705280000000023005910', updateDate: '3月28日' },
  { title: '主演集体宣...', url: 'https://www.xiaohongshu.com/explore/69c6d579000000001f002eb9', updateDate: '3月28日' },
  { title: 'Fabel官...', url: 'https://www.xiaohongshu.com/explore/69c6cd18000000001a02f6d3', updateDate: '3月28日' },
  { title: '破碎的爱剧...', url: 'https://www.xiaohongshu.com/explore/69c6b936000000001a0284fa', updateDate: '3月28日' },
  { title: '新剧上线倒...', url: 'https://www.xiaohongshu.com/explore/69c6c41d000000001f00203a', updateDate: '3月28日' },
  { title: '破碎的爱精...', url: 'https://www.xiaohongshu.com/explore/69c6b6fa000000002202501d', updateDate: '3月28日' },
  { title: '剧组幕后花...', url: 'https://www.xiaohongshu.com/explore/69c6ad43000000002202a453', updateDate: '3月28日' },
  { title: '破碎的爱首...', url: 'https://www.xiaohongshu.com/explore/69c68d44000000001a02214a', updateDate: '3月27日' },
  { title: '明日首播预...', url: 'https://www.xiaohongshu.com/explore/69c67f51000000001a036386', updateDate: '3月27日' },
  { title: '破碎的爱倒...', url: 'https://www.xiaohongshu.com/explore/69c67f29000000001f005bb2', updateDate: '3月27日' },
  { title: '主演集体宣...', url: 'https://www.xiaohongshu.com/explore/69c6719b000000001a024940', updateDate: '3月27日' },
  { title: 'Fabel官...', url: 'https://www.xiaohongshu.com/explore/69c665d40000000023015a14', updateDate: '3月27日' },
  { title: '破碎的爱剧...', url: 'https://www.xiaohongshu.com/explore/69c659c3000000002102fcdd', updateDate: '3月27日' },
  { title: '新剧上线倒...', url: 'https://www.xiaohongshu.com/explore/69c648a900000000200381f6', updateDate: '3月27日' },
  { title: '破碎的爱精...', url: 'https://www.xiaohongshu.com/explore/69c64877000000001b0223d4', updateDate: '3月27日' },
  { title: '剧组幕后花...', url: 'https://www.xiaohongshu.com/explore/69c64433000000001d01becc', updateDate: '3月27日' },
  { title: '破碎的爱官...', url: 'https://www.xiaohongshu.com/explore/69c4be450000000022025542', updateDate: '3月26日' },
  { title: 'Fabel更...', url: 'https://www.xiaohongshu.com/explore/69c4c5db000000002200fdf4', updateDate: '3月26日' },
  { title: '破碎的爱海...', url: 'https://www.xiaohongshu.com/explore/69c4c38d0000000023020390', updateDate: '3月26日' },
  { title: '【破碎的爱】Broken Of Love', url: 'https://www.xiaohongshu.com/explore/69bc158f0000000023024f08', updateDate: '3月25日' },
  { title: '新剧官方海报', url: 'https://www.xiaohongshu.com/explore/69bb795f000000002301d8b8', updateDate: '3月25日' },
  { title: 'Fabel更新破碎的愛', url: 'https://www.xiaohongshu.com/explore/69bd3943000000001a036790', updateDate: '3月25日' },
];

const youtubeLinks: LinkItemData[] = [
  { title: 'Fabel油管海外平台 EP1已上线', url: 'https://www.youtube.com/@FabelEntertainment' },
  { title: '【中翻】 EP1~ 葵葵岛种小芒果', url: 'https://www.bilibili.com/video/BV1MSXMBiEV5' },
  { title: '【中翻】 EP1~ 真的肥常无语', url: 'https://www.bilibili.com/video/BV1jpXLBMEUy' },
];

const weiboLinks: LinkItemData[] = [
  { title: '破碎的爱首...', url: 'https://weibo.com/7884875612/Qy8Du78dW?refer_flag=1001030103_', updateDate: '3月28日' },
  { title: '明日首播预...', url: 'https://weibo.com/7949018248/Qy7Zmmawt?refer_flag=1001030103_', updateDate: '3月28日' },
  { title: '破碎的爱倒...', url: 'https://weibo.com/2668461851/Qy72c3zxQ?refer_flag=1001030103_', updateDate: '3月28日' },
  { title: '主演集体宣...', url: 'https://weibo.com/6423715689/Qy6GGu2Am?refer_flag=1001030103_', updateDate: '3月28日' },
  { title: 'Fabel官...', url: 'https://weibo.com/3885495454/Qy5P4xVKo?refer_flag=1001030103_', updateDate: '3月28日' },
  { title: '破碎的爱剧...', url: 'https://weibo.com/2258164024/Qy5ExfcXc?refer_flag=1001030103_', updateDate: '3月28日' },
  { title: '新剧上线倒...', url: 'https://weibo.com/2258164024/Qy5z1diac?refer_flag=1001030103_', updateDate: '3月28日' },
  { title: '破碎的爱精...', url: 'https://weibo.com/3885495454/Qy5x04Uky?refer_flag=1001030103_', updateDate: '3月28日' },
  { title: '剧组幕后花...', url: 'https://weibo.com/1658911724/Qy5vfkklZ?refer_flag=1001030103_', updateDate: '3月28日' },
  { title: '破碎的爱今...', url: 'https://weibo.com/1658911724/Qy1mkbFm7?refer_flag=1001030103_', updateDate: '3月27日' },
  { title: '明日首播倒...', url: 'https://weibo.com/5541627800/Qy1m4wXxh?refer_flag=1001030103_', updateDate: '3月27日' },
  { title: '破碎的爱即...', url: 'https://weibo.com/1414980981/Qy0BYzcPA?refer_flag=1001030103_', updateDate: '3月27日' },
  { title: '破爱上线时...', url: 'https://weibo.com/7392264056/QxKubi4HF?refer_flag=1001030103_', updateDate: '3月26日' },
  { title: '破碎的爱最...', url: 'https://weibo.com/2258164024/QxLdNA2jC?refer_flag=1001030103_', updateDate: '3月26日' },
  { title: 'Fabel官...', url: 'https://weibo.com/1658911724/QxKAEfV41?refer_flag=1001030103_', updateDate: '3月26日' },
  { title: '破碎的爱播...', url: 'https://weibo.com/5538309841/QxPALthiu?refer_flag=1001030103_', updateDate: '3月26日' },
  { title: '剧集更新时...', url: 'https://weibo.com/7949018248/QxLfJw25b?refer_flag=1001030103_', updateDate: '3月26日' },
  { title: '破碎的爱精...', url: 'https://weibo.com/7912896145/QxMrpyW8u?refer_flag=1001030103_', updateDate: '3月26日' },
  { title: '【破碎的爱】Broken Of Love', url: 'https://weibo.com/7392264056/QvJA88i6v?refer_flag=1001030103_', updateDate: '3月25日' },
  { title: '《Broken Of Love 破碎的爱》', url: 'https://weibo.com/5158442910/QvUC82ZG5?refer_flag=1001030103_', updateDate: '3月25日' },
  { title: '"每个人都是好人"', url: 'https://weibo.com/5165706091/QxiZk67ZA?refer_flag=1001030103_', updateDate: '3月25日' },
];

const douyinLinks: LinkItemData[] = [
  { title: '泰剧星闻社...', url: 'https://www.douyin.com/video/7621890010123979001', updateDate: '3月28日' },
  { title: '破碎的爱首...', url: 'https://www.douyin.com/video/7622095109525790833', updateDate: '3月28日' },
  { title: '明日首播预...', url: 'https://www.douyin.com/video/7622080129270845146', updateDate: '3月28日' },
  { title: '破碎的爱倒...', url: 'https://www.douyin.com/video/7622078272398924261', updateDate: '3月28日' },
  { title: '主演集体宣...', url: 'https://www.douyin.com/video/7622056503444900186', updateDate: '3月28日' },
  { title: 'Fabel官...', url: 'https://www.douyin.com/video/7622043589761117760', updateDate: '3月28日' },
  { title: '破碎的爱剧...', url: 'https://www.douyin.com/video/7622016048565343592', updateDate: '3月28日' },
  { title: '新剧上线倒...', url: 'https://www.douyin.com/video/7621998231954582257', updateDate: '3月28日' },
  { title: '破碎的爱精...', url: 'https://www.douyin.com/video/7621987973818672090', updateDate: '3月28日' },
  { title: '剧组幕后花...', url: 'https://www.douyin.com/video/7621986284157308261', updateDate: '3月28日' },
  { title: '破碎的爱首...', url: 'https://www.douyin.com/video/7621940366473061614', updateDate: '3月27日' },
  { title: '明日首播预...', url: 'https://www.douyin.com/video/7621934919556645297', updateDate: '3月27日' },
  { title: '破碎的爱倒...', url: 'https://www.douyin.com/video/7621932139910624137', updateDate: '3月27日' },
  { title: '主演集体宣...', url: 'https://www.douyin.com/video/7621904992903154082', updateDate: '3月27日' },
  { title: 'Fabel官...', url: 'https://www.douyin.com/video/7621904349518955491', updateDate: '3月27日' },
  { title: '破碎的爱剧...', url: 'https://www.douyin.com/video/7621900710166852852', updateDate: '3月27日' },
  { title: '新剧上线倒...', url: 'https://www.douyin.com/video/7621855826559801555', updateDate: '3月27日' },
  { title: '破碎的爱精...', url: 'https://www.douyin.com/video/7621855011043635882', updateDate: '3月27日' },
  { title: '剧组幕后花...', url: 'https://www.douyin.com/video/7621857175534907337', updateDate: '3月27日' },
  { title: '破碎的爱倒...', url: 'https://www.douyin.com/video/7621212974413931145', updateDate: '3月26日' },
  { title: '新剧上线预...', url: 'https://www.douyin.com/video/7621204103167490971', updateDate: '3月26日' },
  { title: 'Fabel更...', url: 'https://www.douyin.com/video/7621192804287295588', updateDate: '3月26日' },
  { title: '破碎的爱剧...', url: 'https://www.douyin.com/video/7621438237801907571', updateDate: '3月26日' },
  { title: '主演集体宣...', url: 'https://www.douyin.com/video/7621429265624971162', updateDate: '3月26日' },
  { title: '破碎的爱片...', url: 'https://www.douyin.com/video/7621430255382826292', updateDate: '3月26日' },
  { title: '破碎的爱官...', url: 'https://www.douyin.com/video/7621157841429480163', updateDate: '3月25日' },
  { title: '新剧官方海...', url: 'https://www.douyin.com/video/7621164830267192805', updateDate: '3月25日' },
  { title: '我想知道哪...', url: 'https://www.douyin.com/video/7620814476829625459', updateDate: '3月25日' },
];

const bilibiliLinks: LinkItemData[] = [
  { title: '破碎的爱首...', url: 'https://www.bilibili.com/video/BV1BUXTB7EHT', updateDate: '3月28日' },
  { title: '明日首播预...', url: 'https://www.bilibili.com/video/BV1eXXTByEyv', updateDate: '3月28日' },
  { title: '破碎的爱倒...', url: 'https://www.bilibili.com/video/BV1rqXTBRE6b', updateDate: '3月28日' },
  { title: '主演集体宣...', url: 'https://www.bilibili.com/video/BV1rqXTBREXm', updateDate: '3月28日' },
  { title: 'Fabel官...', url: 'https://www.bilibili.com/video/BV1HEXMBoE5h', updateDate: '3月28日' },
  { title: '破碎的爱首...', url: 'https://www.bilibili.com/video/BV1SwXMBBEBm', updateDate: '3月27日' },
  { title: '明日首播预...', url: 'https://www.bilibili.com/video/BV1LeXMB2E75', updateDate: '3月27日' },
  { title: '破碎的爱倒...', url: 'https://www.bilibili.com/video/BV136XMBkEKW', updateDate: '3月27日' },
  { title: '主演集体宣...', url: 'https://www.bilibili.com/video/BV16zXNB1EL4', updateDate: '3月27日' },
  { title: 'Fabel官...', url: 'https://www.bilibili.com/video/BV1H5XKBQEBE', updateDate: '3月27日' },
  { title: '破碎的爱剧...', url: 'https://www.bilibili.com/video/BV1PQXKB4EB5', updateDate: '3月27日' },
  { title: '新剧上线倒...', url: 'https://www.bilibili.com/video/BV1gkXKBYEWW', updateDate: '3月27日' },
  { title: '破碎的爱今...', url: 'https://www.bilibili.com/video/BV1tZXABREx6', updateDate: '3月27日' },
  { title: '明日首播倒...', url: 'https://www.bilibili.com/video/BV15tXPBNEFJ', updateDate: '3月27日' },
  { title: '破碎的爱正...', url: 'https://www.bilibili.com/video/BV18sXnB3E2L', updateDate: '3月26日' },
  { title: 'Fabel官...', url: 'https://www.bilibili.com/video/BV1bbXnBBESi', updateDate: '3月26日' },
  { title: '破碎的爱精...', url: 'https://www.bilibili.com/video/BV1WpXWBgE6h', updateDate: '3月26日' },
  { title: '主演采访合...', url: 'https://www.bilibili.com/video/BV13gXWBEE53', updateDate: '3月26日' },
  { title: '剧组幕后花...', url: 'https://www.bilibili.com/video/BV1DtXnBuEgz', updateDate: '3月26日' },
  { title: '破碎的爱宣...', url: 'https://www.bilibili.com/video/BV1ePXWBpE4B', updateDate: '3月26日' },
  { title: '可是又在期待27号', url: 'https://www.bilibili.com/video/BV1sPAwzuEtC', updateDate: '3月25日' },
  { title: '【FayeAtom】啧啧啧', url: 'https://www.bilibili.com/video/BV1JeAHznEBL', updateDate: '3月25日' },
  { title: '近期剧宣-合集', url: 'https://www.bilibili.com/video/BV1tUwazoEqm', updateDate: '3月25日' },
];

const HomePage: React.FC = () => {
  return (
    <div className="gradient-bg min-h-screen py-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center relative">
      <div className="absolute top-4 right-4 text-[10px] text-white/70 italic text-right leading-tight">
        建议使用手机浏览器<br />收藏并打开
      </div>
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
            transition={{ delay: 0.05 }}
          >
            <LinkGroup title="Youtube" links={youtubeLinks} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <LinkGroup title="抖音" links={douyinLinks} variant="grid" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
          >
            <LinkGroup title="B站" links={bilibiliLinks} variant="grid" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <LinkGroup title="小红书" links={xhsLinks} variant="grid" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
          >
            <LinkGroup title="微博" links={weiboLinks} variant="grid" />
          </motion.div>
        </div>

        <footer className="mt-16 py-8 text-center text-muted-foreground text-sm space-y-2">
          <p>© 2026 Broken of Love</p>
          <p className="text-[10px] opacity-70 italic">本网站不涉及任何商业用途</p>
        </footer>
      </motion.div>
    </div>
  );
};

export default HomePage;
