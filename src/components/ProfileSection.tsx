import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface ProfileSectionProps {
  avatarUrl: string;
  title: string;
}

export const ProfileSection: React.FC<ProfileSectionProps> = ({ avatarUrl, title }) => {
  const quickLinks = [
    // ... (existing quickLinks logic remains if needed, but the user didn't ask to remove it, 
    // however to keep it clean I will keep them but focus on the new requirements)
    { 
      name: 'Faye 小红书', 
      url: 'https://www.xiaohongshu.com/user/profile/67036186000000001d021a3b?xsec_token=ABgHWUNrOb1zv9UDnDcn39pOES1-pmYKjxGtAFczt5esk%3D&xsec_source=pc_search',
      icon: '🌻'
    },
    { 
      name: 'Faye 微博', 
      url: 'https://weibo.com/u/7915617979',
      icon: '🌻'
    },
    { 
      name: 'Atom 小红书', 
      url: 'https://www.xiaohongshu.com/user/profile/6997f023000000002603a97a?xsec_token=ABJz75ZsA05bTV4eweIrVTh9qNZWVyEZEcKCL1nszVrk8%3D&xsec_source=pc_search',
      icon: '🍑'
    },
    { 
      name: 'Atom 微博', 
      url: 'https://weibo.com/u/8350121537',
      icon: '🍑'
    }
  ];

  return (
    <div className="flex flex-col items-center justify-center space-y-4 py-8">
      <div className="relative">
        <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-full blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
        <Avatar className="w-32 h-32 border-4 border-white dark:border-gray-800 shadow-xl relative">
          <AvatarImage src={avatarUrl} alt={title} className="object-cover" />
          <AvatarFallback className="bg-muted text-muted-foreground text-2xl font-bold">
            {title.charAt(0)}
          </AvatarFallback>
        </Avatar>
      </div>
      <div className="text-center space-y-1">
        <h1 className="text-3xl font-bold tracking-tight gradient-text">
          {title}
        </h1>
        <p className="text-xs text-muted-foreground font-medium">
          《破碎的爱》将于3月28日上线，每周六晚更新。
        </p>
      </div>

      <div className="grid grid-cols-4 gap-4 mt-6 w-full max-w-sm">
        {quickLinks.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center space-y-2 group"
          >
            <div className="w-14 h-14 rounded-full bg-white dark:bg-gray-800 shadow-md flex items-center justify-center text-2xl transition-transform group-hover:scale-110 group-active:scale-95 border border-primary/10">
              {link.icon}
            </div>
            <span className="text-xs font-medium text-muted-foreground text-center line-clamp-2">
              {link.name}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
};
