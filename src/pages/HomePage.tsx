import React from 'react';
import { ProfileSection } from '@/components/ProfileSection';
import { LinkGroup, LinkItemData } from '@/components/LinkGroup';
import { CharacterRelationship } from '@/components/CharacterRelationship';
import { motion } from 'motion/react';

const xhsLinks: LinkItemData[] = [
  { title: '这是我家..', url: 'https://www.xiaohongshu.com/explore/69cc8898000000001e00d5e9', updateDate: '4月1日' },
  { title: '共享水杯..', url: 'https://www.xiaohongshu.com/explore/69cc6b3c00000000210123be', updateDate: '4月1日' },
  { title: '美到心巴..', url: 'https://www.xiaohongshu.com/explore/69ccaee50000000023026ca7', updateDate: '4月1日' },
  { title: 'BOL新梗诞生...', url: 'https://www.xiaohongshu.com/explore/69cae2f0000000001f001366', updateDate: '3月31日' },
  { title: '憨憨也是恋...', url: 'https://www.xiaohongshu.com/explore/69cab0ff000000002202abe8', updateDate: '3月31日' },
  { title: '新meme出現...', url: 'https://www.xiaohongshu.com/explore/69caa6dc0000000022026bb7', updateDate: '3月31日' },
  { title: '你的努力都...', url: 'https://www.xiaohongshu.com/explore/69ca943e000000001a0369eb', updateDate: '3月31日' },
  { title: 'ACCA都去吖...', url: 'https://www.xiaohongshu.com/explore/69ca7657000000001a02f214', updateDate: '3月31日' },
  { title: '今日份超甜...', url: 'https://www.xiaohongshu.com/explore/69ca7e880000000023006369', updateDate: '3月31日' },
  { title: '多秀多整活...', url: 'https://www.xiaohongshu.com/explore/69ca7da6000000001e00c9d4', updateDate: '3月31日' },
  { title: '美到失语...', url: 'https://www.xiaohongshu.com/explore/69ca4ad3000000001a03424b', updateDate: '3月31日' },
  { title: '我们的嘴替...', url: 'https://www.xiaohongshu.com/explore/69ca40aa000000002202829c', updateDate: '3月31日' },
  { title: '破碎的爱首...', url: 'https://www.xiaohongshu.com/explore/69c9b6680000000023027456', updateDate: '3月30日' },
  { title: '明日首播预...', url: 'https://www.xiaohongshu.com/explore/69c96f63000000002202b146', updateDate: '3月30日' },
  { title: '破碎的爱倒...', url: 'https://www.xiaohongshu.com/explore/69c95eb3000000001f006936', updateDate: '3月30日' },
  { title: '主演集体宣...', url: 'https://www.xiaohongshu.com/explore/69c9440a000000001f002463', updateDate: '3月30日' },
  { title: 'Fabel官...', url: 'https://www.xiaohongshu.com/explore/69c8ec02000000001d01d0ce', updateDate: '3月30日' },
  { title: '破碎的爱剧...', url: 'https://www.xiaohongshu.com/explore/69c8f8040000000023020873', updateDate: '3月30日' },
  { title: '破碎的爱首...', url: 'https://www.xiaohongshu.com/explore/69c87a950000000021039354', updateDate: '3月29日' },
  { title: '明日首播预...', url: 'https://www.xiaohongshu.com/explore/69c87683000000001d01d4f8', updateDate: '3月29日' },
  { title: '破碎的爱倒...', url: 'https://www.xiaohongshu.com/explore/69c841f00000000022026d31', updateDate: '3月29日' },
  { title: '主演集体宣...', url: 'https://www.xiaohongshu.com/explore/69c7ffb9000000002200e9b2', updateDate: '3月29日' },
  { title: 'Fabel官...', url: 'https://www.xiaohongshu.com/explore/69c7e14a0000000023014eb6', updateDate: '3月29日' },
  { title: '破碎的爱剧...', url: 'https://www.xiaohongshu.com/explore/69c6cbc30000000023012880', updateDate: '3月29日' },
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
  { title: 'Fabel油管海外平台', url: 'https://www.youtube.com/@FabelEntertainment', updateDate: '第一行' },
  { title: '【中翻】EP1~ 葵葵岛种小芒果', url: 'https://www.bilibili.com/video/BV1MSXMBiEV5', updateDate: '第二行' },
  { title: '【中翻】EP1~ 真的肥常无语', url: 'https://www.bilibili.com/video/BV1jpXLBMEUy', updateDate: '第二行' },
];

const weiboLinks: LinkItemData[] = [
  { title: '一脸正经..', url: 'https://weibo.com/6538765269/QyMAynTSJ?refer_flag=1001030103_', updateDate: '4月1日' },
  { title: '在意一个..', url: 'https://weibo.com/5044454536/QyLPpahJE?refer_flag=1001030103_', updateDate: '4月1日' },
  { title: '抽象妻妻..', url: 'https://weibo.com/7949018248/QyLavx3tY?refer_flag=1001030103_', updateDate: '4月1日' },
  { title: '咋起这么早...', url: 'https://weibo.com/7949018248/QyBeafKdD?refer_flag=1001030103_', updateDate: '3月31日' },
  { title: '大清早更新...', url: 'https://weibo.com/2258164024/QyAYC6Bk1?refer_flag=1001030103_', updateDate: '3月31日' },
  { title: '桃桃妈妈给...', url: 'https://weibo.com/3401457390/QyAVApZb6?refer_flag=1001030103_', updateDate: '3月31日' },
  { title: '这庄小妹儿...', url: 'https://weibo.com/6534084311/QyASUn7nO?refer_flag=1001030103_', updateDate: '3月31日' },
  { title: '法桃CP首度...', url: 'https://weibo.com/6216754378/QyARR1JLd?refer_flag=1001030103_', updateDate: '3月31日' },
  { title: '鸭鸭更新快...', url: 'https://weibo.com/3885495454/QyAhXmOS1?refer_flag=1001030103_', updateDate: '3月31日' },
  { title: '破碎的爱首...', url: 'https://weibo.com/2951609253/QypD5DmMI?refer_flag=1001030103_', updateDate: '3月30日' },
  { title: '明日首播预...', url: 'https://weibo.com/6067221167/Qyny4woqL?refer_flag=1001030103_', updateDate: '3月30日' },
  { title: '破碎的爱倒...', url: 'https://weibo.com/6042105331/QynxJBXK6?refer_flag=1001030103_', updateDate: '3月30日' },
  { title: '主演集体宣...', url: 'https://weibo.com/6067221170/QynxboMAe?refer_flag=1001030103_', updateDate: '3月30日' },
  { title: 'Fabel官...', url: 'https://weibo.com/6533725616/QyjcguMi4?refer_flag=1001030103_', updateDate: '3月30日' },
  { title: '破碎的爱首...', url: 'https://weibo.com/7951256735/QyizEkKfk?refer_flag=1001030103_', updateDate: '3月29日' },
  { title: '明日首播预...', url: 'https://weibo.com/2951609253/QyilA4p42?refer_flag=1001030103_', updateDate: '3月29日' },
  { title: '破碎的爱倒...', url: 'https://weibo.com/2258164024/Qyhp0vG4y?refer_flag=1001030103_', updateDate: '3月29日' },
  { title: '主演集体宣...', url: 'https://weibo.com/1658911724/QyfyPmeXP?refer_flag=1001030103_', updateDate: '3月29日' },
  { title: 'Fabel官...', url: 'https://weibo.com/7949018248/QyfIdky6T?refer_flag=1001030103_', updateDate: '3月29日' },
  { title: '破碎的爱剧...', url: 'https://weibo.com/6488522678/QyfgjEDDO?refer_flag=1001030103_', updateDate: '3月29日' },
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
  { title: '给姐都迷..', url: 'https://www.bilibili.com/video/BV1W595BmEQC', updateDate: '4月1日' },
  { title: '破碎的爱..', url: 'https://www.bilibili.com/video/BV1kk9LB7E1s', updateDate: '4月1日' },
  { title: '自娱自乐..', url: 'https://www.bilibili.com/video/BV1mp93ByEo3', updateDate: '4月1日' },
  { title: '这个有搭档...', url: 'https://www.bilibili.com/video/BV1TkXBBXEnG', updateDate: '3月31日' },
  { title: '万恶丈母娘...', url: 'https://www.bilibili.com/video/BV1giXBBoEjf', updateDate: '3月31日' },
  { title: '想幸福的人...', url: 'https://www.bilibili.com/video/BV1JLXiBYESr', updateDate: '3月31日' },
  { title: '就爱这种唯...', url: 'https://www.bilibili.com/video/BV19uXqBxEvQ', updateDate: '3月31日' },
  { title: '破碎的爱首...', url: 'https://www.bilibili.com/video/BV1MVXdBiEzy', updateDate: '3月30日' },
  { title: '明日首播预...', url: 'https://www.bilibili.com/video/BV1z2XXBjEjs', updateDate: '3月30日' },
  { title: '破碎的爱倒...', url: 'https://www.bilibili.com/video/BV1UmX9BeEYe', updateDate: '3月30日' },
  { title: '破碎的爱首...', url: 'https://www.bilibili.com/video/BV17yXUBwECK', updateDate: '3月29日' },
  { title: '明日首播预...', url: 'https://www.bilibili.com/video/BV1ZyXUBwE61', updateDate: '3月29日' },
  { title: '破碎的爱倒...', url: 'https://www.bilibili.com/video/BV1eBXyBSEZC', updateDate: '3月29日' },
  { title: '主演集体宣...', url: 'https://www.bilibili.com/video/BV1PwX1BPEGz', updateDate: '3月29日' },
  { title: 'Fabel官...', url: 'https://www.bilibili.com/video/BV1ZJXLBuE51', updateDate: '3月29日' },
  { title: '破碎的爱剧...', url: 'https://www.bilibili.com/video/BV1d4XLBeEqr', updateDate: '3月29日' },
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
