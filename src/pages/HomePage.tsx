import React from 'react';
import { ProfileSection } from '@/components/ProfileSection';
import { LinkGroup, LinkItemData } from '@/components/LinkGroup';
import { motion } from 'motion/react';

const xhsLinks: LinkItemData[] = [
  { title: '破碎的爱官...', url: 'https://www.xiaohongshu.com/explore/69c3c2f5000000002800b0b6?xsec_token=ABQTZsg7Vpo9QqWRiMIjJ5WCmlmhYNEFHzB2-SX_bJvFs=&xsec_source=', updateDate: '3月26日' },
  { title: 'Fabel更...', url: 'https://www.xiaohongshu.com/explore/69c3c69b000000002202780f?xsec_token=ABQTZsg7Vpo9QqWRiMIjJ5WJSa1gCbM9swCG3JvwU1cSI=&xsec_source=', updateDate: '3月26日' },
  { title: '破碎的爱海...', url: 'https://www.xiaohongshu.com/explore/69c3c565000000001d019123?xsec_token=ABQTZsg7Vpo9QqWRiMIjJ5WBH6we2IMhyGewGOFzOPhkc=&xsec_source=', updateDate: '3月26日' },
  { title: '第一集预告...', url: 'https://www.xiaohongshu.com/explore/69c32c97000000001a0343b4?xsec_token=ABQTZsg7Vpo9QqWRiMIjJ5WEfMYiH3iZglUQ7vEnh7T3M=&xsec_source=', updateDate: '3月26日' },
  { title: 'Fabel剧...', url: 'https://www.xiaohongshu.com/explore/69c29a9f000000002102e099?xsec_token=ABp2a9yw0OM8NwMEQs8DQnHZE5uHzbdxD3u-i7LM_DkCs=&xsec_source=', updateDate: '3月26日' },
  { title: '破碎的爱宣...', url: 'https://www.xiaohongshu.com/explore/69c0daf7000000001f004a34?xsec_token=ABv0wnvbPea_N1YszV905Dz4XOrs6Qkf41VXdh9HAB8Os=&xsec_source=', updateDate: '3月26日' },
  { title: '【破碎的爱】Broken Of Love', url: 'https://www.xiaohongshu.com/explore/69bc158f0000000023024f08?xsec_token=ABNmoG-xTajl5p2jZSUJLBIZrC3OXFiuNN9DzF_y-IOB4=&xsec_source=', updateDate: '3月25日' },
  { title: '新剧官方海报', url: 'https://www.xiaohongshu.com/explore/69bb795f000000002301d8b8?xsec_token=ABJEWaglzbgJHi3Wd-glrjY37V9S2b1H4KECU8aFMZOqs=&xsec_source=', updateDate: '3月25日' },
  { title: 'Fabel更新破碎的愛', url: 'https://www.xiaohongshu.com/explore/69bd3943000000001a036790?xsec_token=ABc3SSyR5a9ICdRuX2M65wALq_ffjjWlbu_Ki3URy3QoQ=&xsec_source=', updateDate: '3月25日' },
  { title: '跟Arisa的睡袍说嗨嗨', url: 'https://www.xiaohongshu.com/explore/69bd053e000000002301496a?xsec_token=ABc3SSyR5a9ICdRuX2M65wAKfrA09cJaYhzaaPohqWQns=&xsec_source=', updateDate: '3月24日' },
  { title: '成熟魅力让人移不开眼', url: 'https://www.xiaohongshu.com/explore/69b936fb0000000028009de9?xsec_token=ABU35O7jLRG_mMhBb201KKMu0CBNKyUYjD82fkUJmgYvE=&xsec_source=', updateDate: '3月24日' },
  { title: 'Alisa大人', url: 'https://www.xiaohongshu.com/explore/69b8db9b00000000230114c9?xsec_token=ABWMjubmS7QUVgKZ_3QGsp5rq1iYGnH3Ubx8GuV_mmFxM=&xsec_source=', updateDate: '3月24日' },
];

const youtubeLinks: LinkItemData[] = [
  { title: 'Fabel油管海外平台', url: 'https://www.youtube.com/@FabelEntertainment' },
];

const weiboLinks: LinkItemData[] = [
  { title: '破爱上线时...', url: 'https://weibo.com/7392264056/QxKubi4HF?refer_flag=1001030103_', updateDate: '3月26日' },
  { title: '破碎的爱最...', url: 'https://weibo.com/2258164024/QxLdNA2jC?refer_flag=1001030103_', updateDate: '3月26日' },
  { title: 'Fabel官...', url: 'https://weibo.com/1658911724/QxKAEfV41?refer_flag=1001030103_', updateDate: '3月26日' },
  { title: '破碎的爱播...', url: 'https://weibo.com/5538309841/QxPALthiu?refer_flag=1001030103_', updateDate: '3月26日' },
  { title: '剧集更新时...', url: 'https://weibo.com/7949018248/QxLfJw25b?refer_flag=1001030103_', updateDate: '3月26日' },
  { title: '破碎的爱精...', url: 'https://weibo.com/7912896145/QxMrpyW8u?refer_flag=1001030103_', updateDate: '3月26日' },
  { title: '【破碎的爱】Broken Of Love', url: 'https://weibo.com/7392264056/QvJA88i6v?refer_flag=1001030103_', updateDate: '3月25日' },
  { title: '《Broken Of Love 破碎的爱》', url: 'https://weibo.com/5158442910/QvUC82ZG5?refer_flag=1001030103_', updateDate: '3月25日' },
  { title: '“每个人都是好人”', url: 'https://weibo.com/5165706091/QxiZk67ZA?refer_flag=1001030103_', updateDate: '3月25日' },
];

const douyinLinks: LinkItemData[] = [
  { title: '破碎的爱倒...', url: 'https://www.douyin.com/video/7621212974413931145', updateDate: '3月26日' },
  { title: '新剧上线预...', url: 'https://www.douyin.com/video/7621204103167490971', updateDate: '3月26日' },
  { title: 'Fabel更...', url: 'https://www.douyin.com/video/7621192804287295588', updateDate: '3月26日' },
  { title: '破碎的爱剧...', url: 'https://www.douyin.com/video/7621183290477632754', updateDate: '3月26日' },
  { title: '主演集体宣...', url: 'https://www.douyin.com/video/7621175473398530880', updateDate: '3月26日' },
  { title: '破碎的爱片...', url: 'https://www.douyin.com/video/7620906079388105393', updateDate: '3月26日' },
  { title: '破碎的爱官...', url: 'https://www.douyin.com/video/7621157841429480163', updateDate: '3月25日' },
  { title: '新剧官方海...', url: 'https://www.douyin.com/video/7621157419745423055', updateDate: '3月25日' },
  { title: 'Fabel更...', url: 'https://www.douyin.com/video/7621156459053761910', updateDate: '3月25日' },
  { title: '我想知道哪...', url: 'https://www.douyin.com/video/7620814476829625459', updateDate: '3月25日' },
  { title: '只有剧组所...', url: 'https://www.douyin.com/video/7620810929584601701', updateDate: '3月25日' },
  { title: '众多主演集...', url: 'https://www.douyin.com/video/7620604068969313129', updateDate: '3月25日' },
];

const bilibiliLinks: LinkItemData[] = [
  { title: '破碎的爱正...', url: 'https://www.bilibili.com/video/BV1enQUB9EX1', updateDate: '3月26日' },
  { title: 'Fabel官...', url: 'https://www.bilibili.com/video/BV19eQCBzENS', updateDate: '3月26日' },
  { title: '破碎的爱精...', url: 'https://www.bilibili.com/video/BV1ZTAjzYEk1', updateDate: '3月26日' },
  { title: '主演采访合...', url: 'https://www.bilibili.com/video/BV1pzwyzHExS', updateDate: '3月26日' },
  { title: '剧组幕后花...', url: 'https://www.bilibili.com/video/BV1bAwrzJEWg', updateDate: '3月26日' },
  { title: '破碎的爱宣...', url: 'https://www.bilibili.com/video/BV1TPwrzUERy', updateDate: '3月26日' },
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
