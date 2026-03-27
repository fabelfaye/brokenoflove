import React from 'react';
import { ProfileSection } from '@/components/ProfileSection';
import { LinkGroup, LinkItemData } from '@/components/LinkGroup';
import { motion } from 'motion/react';

const xhsLinks: LinkItemData[] = [
  { title: '她泰的恨海...', url: 'https://www.xiaohongshu.com/explore/69c4be450000000022025542', updateDate: '3月26日' },
  { title: 'BrokenOf...', url: 'https://www.xiaohongshu.com/explore/69c4c5db000000002200fdf4', updateDate: '3月26日' },
  { title: '这预告片可...', url: 'https://www.xiaohongshu.com/explore/69c4c38d0000000023020390', updateDate: '3月26日' },
  { title: '【破碎的爱】Broken Of Love', url: 'https://www.xiaohongshu.com/explore/69bc158f0000000023024f08?xsec_token=ABNmoG-xTajl5p2jZSUJLBIZrC3OXFiuNN9DzF_y-IOB4=&xsec_source=', updateDate: '3月25日' },
  { title: '新剧官方海报', url: 'https://www.xiaohongshu.com/explore/69bb795f000000002301d8b8?xsec_token=ABJEWaglzbgJHi3Wd-glrjY37V9S2b1H4KECU8aFMZOqs=&xsec_source=', updateDate: '3月25日' },
  { title: 'Fabel更新破碎的愛', url: 'https://www.xiaohongshu.com/explore/69bd3943000000001a036790?xsec_token=ABc3SSyR5a9ICdRuX2M65wALq_ffjjWlbu_Ki3URy3QoQ=&xsec_source=', updateDate: '3月25日' },
];

const youtubeLinks: LinkItemData[] = [
  { title: 'Fabel油管海外平台', url: 'https://www.youtube.com/@FabelEntertainment' },
  { title: '国内播放平台①（明日上线）', url: '' },
  { title: '国内播放平台②（明日上线）', url: '' },
];

const weiboLinks: LinkItemData[] = [
  { title: 'Official...', url: 'https://weibo.com/7985880343/QxRM9uIM2?refer_flag=1001030103_', updateDate: '3月26日' },
  { title: '弯弯字幕组...', url: 'https://weibo.com/7392264056/QxRKslioB?refer_flag=1001030103_', updateDate: '3月26日' },
  { title: '不是一见钟...', url: 'https://weibo.com/7248205323/QxSFFm3Xr?refer_flag=1001030103_', updateDate: '3月26日' },
  { title: '泰剧破碎的...', url: 'https://weibo.com/7746558279/QxRPTaOZ6?refer_flag=1001030103_', updateDate: '3月26日' },
  { title: '破碎的爱正...', url: 'https://weibo.com/1862232035/QxRuXxGpj?refer_flag=1001030103_', updateDate: '3月26日' },
  { title: '泰剧破碎的...', url: 'https://weibo.com/5541627800/QxQrtsXw3?refer_flag=1001030103_', updateDate: '3月26日' },
  { title: 'Broken...', url: 'https://weibo.com/7392264056/QvJA88i6v?refer_flag=1001030103_', updateDate: '3月25日' },
  { title: '破碎的爱...', url: 'https://weibo.com/5158442910/QvUC82ZG5?refer_flag=1001030103_', updateDate: '3月25日' },
  { title: '每个人都是...', url: 'https://weibo.com/5165706091/QxiZk67ZA?refer_flag=1001030103_', updateDate: '3月25日' },
];

const douyinLinks: LinkItemData[] = [
  { title: '破碎的爱倒...', url: 'https://www.douyin.com/video/7621212974413931145', updateDate: '3月26日' },
  { title: '新剧上线预...', url: 'https://www.douyin.com/video/7621204103167490971', updateDate: '3月26日' },
  { title: 'Fabel更...', url: 'https://www.douyin.com/video/7621192804287295588', updateDate: '3月26日' },
  { title: '好成熟的霹...', url: 'https://www.douyin.com/video/7621438237801907571', updateDate: '3月26日' },
  { title: '破碎的爱预...', url: 'https://www.douyin.com/video/7621429265624971162', updateDate: '3月26日' },
  { title: '中翻首播预...', url: 'https://www.douyin.com/video/7621430255382826292', updateDate: '3月26日' },
  { title: '破碎的爱官...', url: 'https://www.douyin.com/video/7621157841429480163', updateDate: '3月25日' },
  { title: '更新人物海...', url: 'https://www.douyin.com/video/7621164830267192805', updateDate: '3月25日' },
  { title: '我想知道哪...', url: 'https://www.douyin.com/video/7620814476829625459', updateDate: '3月25日' },

];

const bilibiliLinks: LinkItemData[] = [
  { title: '破碎的爱今...', url: 'https://www.bilibili.com/video/BV1tZXABREx6', updateDate: '3月27日' },
  { title: '明日首播倒...', url: 'https://www.bilibili.com/video/BV15tXPBNEFJ', updateDate: '3月27日' },
  { title: '泰剧破碎的爱...', url: 'https://www.bilibili.com/video/BV18sXnB3E2L', updateDate: '3月26日' },
  { title: 'FayeAtom《破...', url: 'https://www.bilibili.com/video/BV1bbXnBBESi', updateDate: '3月26日' },
  { title: '正式预告片...', url: 'https://www.bilibili.com/video/BV1WpXWBgE6h', updateDate: '3月26日' },
  { title: '泰国人双女...', url: 'https://www.bilibili.com/video/BV13gXWBEE53', updateDate: '3月26日' },
  { title: '官方正式预...', url: 'https://www.bilibili.com/video/BV1DtXnBuEgz', updateDate: '3月26日' },
  { title: '破碎的爱预...', url: 'https://www.bilibili.com/video/BV1ePXWBpE4B', updateDate: '3月26日' },
  { title: '可是又在期待27号', url: 'https://www.bilibili.com/video/BV1sPAwzuEtC/?spm_id_from=333.337.search-card.all.click&vd_source=14bfb7ac7563c677fb44a5844d8c81ab', updateDate: '3月25日' },
  { title: '【FayeAtom】啧啧啧', url: 'https://www.bilibili.com/video/BV1JeAHznEBL/?spm_id_from=333.337.search-card.all.click&vd_source=14bfb7ac7563c677fb44a5844d8c81ab', updateDate: '3月25日' },
  { title: '近期剧宣-合集', url: 'https://www.bilibili.com/video/BV1tUwazoEqm/?spm_id_from=333.337.search-card.all.click&vd_source=14bfb7ac7563c677fb44a5844d8c81ab', updateDate: '3月25日' },
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

        <footer className="mt-16 py-8 text-center text-muted-foreground text-sm">
          <p>© 2026 Broken of Love</p>
        </footer>
      </motion.div>
    </div>
  );
};

export default HomePage;
