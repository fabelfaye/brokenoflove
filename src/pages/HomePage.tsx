import React from 'react';
import { ProfileSection } from '@/components/ProfileSection';
import { LinkGroup, LinkItemData } from '@/components/LinkGroup';
import { CharacterRelationship } from '@/components/CharacterRelationship';
import { motion } from 'motion/react';

const xhsLinks: LinkItemData[] = [
  { title: '剧情有张力', url: 'https://www.xiaohongshu.com/explore/69c59317000000001a03795c', updateDate: 'EP1二创' },
  { title: '电影级画幅', url: 'https://www.xiaohongshu.com/explore/69c991cd000000002103ad65', updateDate: 'EP1二创' },
  { title: '白月光回归', url: 'https://www.xiaohongshu.com/explore/69c7ffb9000000002200e9b2', updateDate: 'EP1二创' },
  { title: '好唯美啊', url: 'https://www.xiaohongshu.com/explore/69c9b6680000000023027456', updateDate: 'EP1二创' },
  { title: '都回来了', url: 'https://www.xiaohongshu.com/explore/69c622890000000028008cc5', updateDate: 'EP1二创' },
  { title: '姬圈天菜', url: 'https://www.xiaohongshu.com/explore/69c88cb2000000001a024cbf', updateDate: 'EP1二创' },  
  { title: '共享水杯', url: 'https://www.xiaohongshu.com/explore/69cc6b3c00000000210123be', updateDate: '首映礼相关' },
  { title: 'TOPFAYE', url: 'https://www.xiaohongshu.com/explore/69c659c3000000002102fcdd', updateDate: '首映礼相关' },
  { title: '法桃抱抱', url: 'https://www.xiaohongshu.com/explore/69c6cd18000000001a02f6d3', updateDate: '首映礼相关' },
  { title: '法桃跳舞', url: 'https://www.xiaohongshu.com/explore/69c786e1000000001a02fcb4', updateDate: '首映礼相关' },
  { title: '法桃互动', url: 'https://www.xiaohongshu.com/explore/69c73102000000002202566c', updateDate: '首映礼相关' },
  { title: '首映会采访', url: 'https://www.xiaohongshu.com/explore/69c67f660000000023007a40', updateDate: '首映礼相关' },
  { title: '应援视频', url: 'https://www.xiaohongshu.com/explore/69c5e8370000000023024e94', updateDate: '首映礼相关' },
  { title: '主创合影图', url: 'https://www.xiaohongshu.com/explore/69c781fa000000001b003a4a', updateDate: '首映礼相关' },
  { title: '首映礼拍照', url: 'https://www.xiaohongshu.com/explore/69c63f200000000023021713', updateDate: '首映礼相关' },
  { title: '百丽宫首映', url: 'https://www.xiaohongshu.com/explore/69c7394d000000001a0375c7', updateDate: '首映礼相关' },
];

const youtubeLinks: LinkItemData[] = [
  { title: 'Fabel油管海外平台', url: 'https://www.youtube.com/@FabelEntertainment', updateDate: '第一行' },
  { title: '【中翻】EP1~ 葵葵岛种小芒果', url: 'https://www.bilibili.com/video/BV1MSXMBiEV5', updateDate: '第二行' },
  { title: '【中翻】EP1~ 真的肥常无语', url: 'https://www.bilibili.com/video/BV1jpXLBMEUy', updateDate: '第二行' },
];

const weiboLinks: LinkItemData[] = [
  { title: 'EP2预告图片', url: 'https://weibo.com/7985880343/QyD7hyg2B', updateDate: '预告' },
  { title: 'EP1预告图片', url: 'https://weibo.com/7985880343/QylF9d0Nn', updateDate: '预告'  },
  { title: 'EP1预告视频', url: 'https://weibo.com/7985880343/QykOUsthl', updateDate: '预告' },
  { title: '播放日历', url: 'https://weibo.com/7985880343/Qyar7yqlq', updateDate: '播放日历' },
  { title: 'Arisa', url: 'https://weibo.com/7985880343/QxKtRsYF4', updateDate: '海报' },  
  { title: 'Lalin', url: 'https://weibo.com/7985880343/QxBa62fCm', updateDate: '海报' },  
  { title: 'King', url: 'https://weibo.com/7985880343/QxrZ3rVHG', updateDate: '海报' },  
  { title: 'Aiy', url: 'https://weibo.com/7985880343/QxrDvsjD5', updateDate: '海报' },  
  { title: 'Kevin', url: 'https://weibo.com/7985880343/QxivQpylO', updateDate: '海报' },  
  { title: 'Wit', url: 'https://weibo.com/7985880343/Qxi7iedPw', updateDate: '海报' }, 
  { title: 'Mek', url: 'https://weibo.com/7985880343/Qx9yo2X7C', updateDate: '海报' },  
  { title: 'Weiling', url: 'https://weibo.com/7985880343/Qx9ePz8mB', updateDate: '海报' },  
  { title: 'Faye', url: 'https://weibo.com/7985880343/QwN4HeM9y', updateDate: '海报' },  
  { title: 'Atom', url: 'https://weibo.com/7985880343/QwDFZ3zZb', updateDate: '海报' },  
];

const douyinLinks: LinkItemData[] = [
  { title: '鴨鴨真的..', url: 'https://www.douyin.com/video/7623338153902005169', updateDate: '4月1日' },
  { title: '两个搞笑..', url: 'https://www.douyin.com/video/7623617855964033138', updateDate: '4月1日' },
  { title: '泰百新剧..', url: 'https://www.douyin.com/video/7623109448228431098', updateDate: '4月1日' },
  { title: '给你妹影分...', url: 'https://www.douyin.com/video/7623216335484445096', updateDate: '3月31日' },
  { title: '她自己的歌...', url: 'https://www.douyin.com/video/7623154361459543412', updateDate: '3月31日' },
  { title: '疯了都疯了...', url: 'https://www.douyin.com/video/7623109448228431098', updateDate: '3月31日' },
  { title: '主演集体宣...', url: 'https://www.douyin.com/video/7623091409025119483', updateDate: '3月31日' },
  { title: '首映点名中...', url: 'https://www.douyin.com/video/7623061050543876474', updateDate: '3月31日' },
  { title: 'topfaye...', url: 'https://www.douyin.com/video/7623059671842515962', updateDate: '3月31日' },
  { title: '破碎的爱首...', url: 'https://www.douyin.com/video/7622725348451502154', updateDate: '3月30日' },
  { title: '明日首播预...', url: 'https://www.douyin.com/video/7622717442120240390', updateDate: '3月30日' },
  { title: '破碎的爱倒...', url: 'https://www.douyin.com/video/7622712384117511670', updateDate: '3月30日' },
  { title: '主演集体宣...', url: 'https://www.douyin.com/video/7622707490929379830', updateDate: '3月30日' },
  { title: 'Fabel官...', url: 'https://www.douyin.com/video/7622706798717985765', updateDate: '3月30日' },
  { title: '破碎的爱剧...', url: 'https://www.douyin.com/video/7622682056162592933', updateDate: '3月30日' },
  { title: '破碎的爱首...', url: 'https://www.douyin.com/video/7622480983966936998', updateDate: '3月29日' },
  { title: '明日首播预...', url: 'https://www.douyin.com/video/7622480590567198318', updateDate: '3月29日' },
  { title: '破碎的爱倒...', url: 'https://www.douyin.com/video/7622477951389333066', updateDate: '3月29日' },
  { title: '主演集体宣...', url: 'https://www.douyin.com/video/7622473851448068288', updateDate: '3月29日' },
  { title: 'Fabel官...', url: 'https://www.douyin.com/video/7622469672261583857', updateDate: '3月29日' },
  { title: '破碎的爱剧...', url: 'https://www.douyin.com/video/7622455083854692579', updateDate: '3月29日' },
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
  { title: '珊猫是好猫', url: 'https://www.bilibili.com/video/BV1zpXSBKErb', updateDate: 'EP1 Re' },
  { title: '得闲嘚吧嘚', url: 'https://www.bilibili.com/video/BV1d8XSB8EwX', updateDate: 'EP1 Re' },
  { title: '二月初升', url: 'https://www.bilibili.com/video/BV1cYXUB6EQv', updateDate: 'EP1 Re' },
];

const HomePage: React.FC = () => {
  return (
    <div className="gradient-bg min-h-screen py-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center relative">
      <div className="absolute top-4 right-4 flex items-center gap-2">
        <div className="text-[10px] text-gray-700 dark:text-gray-400 italic whitespace-nowrap">
          欢迎分享网页，建议使用手机浏览器收藏并打开链接
        </div>
        <button
          onClick={() => {
            if (navigator.share) {
              navigator.share({
                title: '支持Fabel，请大家多安利《破碎的爱》~',
                text: '《破碎的爱》官方链接导航页',
                url: window.location.href
              }).catch(() => {
                // 如果分享失败，复制链接到剪贴板
                navigator.clipboard.writeText(window.location.href);
                alert('链接已复制到剪贴板');
              });
            } else {
              // 不支持原生分享，复制链接到剪贴板
              navigator.clipboard.writeText(window.location.href);
              alert('链接已复制到剪贴板');
            }
          }}
          className="w-8 h-8 rounded-full bg-white/80 dark:bg-gray-800/80 shadow-md flex items-center justify-center text-lg transition-transform hover:scale-110 active:scale-95 border border-primary/10 flex-shrink-0"
          title="分享网页"
        >
          🔗
        </button>
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
            <LinkGroup title="Youtube" links={youtubeLinks} variant="grid" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 }}
          >
            <CharacterRelationship 
              title="《破碎的爱》人物关系图" 
              imageUrl="https://miaoda-conversation-file.cdn.bcebos.com/user-agir5qfv3pq8/conv-agissxejzbi8/20260401/file-anr4axmg1ssg.png"
              defaultOpen={false}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
          >
            <LinkGroup title="微博" links={weiboLinks} variant="grid" />
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
            transition={{ delay: 0.1 }}
          >
            <LinkGroup title="抖音" links={douyinLinks} variant="grid" />
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
