import React, { useState } from 'react';
import { ChevronDown, ExternalLink } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'motion/react';

export interface LinkItemData {
  title: string;
  url: string;
  updateDate?: string;
}

interface LinkGroupProps {
  title: string;
  links: LinkItemData[];
  defaultOpen?: boolean;
  className?: string;
  variant?: 'list' | 'grid';
}

export const LinkGroup: React.FC<LinkGroupProps> = ({ 
  title, 
  links, 
  defaultOpen = false,
  className,
  variant = 'list'
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const [collapsedDates, setCollapsedDates] = useState<Set<string>>(new Set(['3月25日', '3月26日', '3月27日', '3月28日', '3月29日', '3月30日']));

  // Group links by update date
  const groupedLinks: { [key: string]: LinkItemData[] } = {};
  const dates: string[] = [];

  for (const link of links) {
    const date = link.updateDate || 'default';
    if (!groupedLinks[date]) {
      groupedLinks[date] = [];
      dates.push(date);
    }
    groupedLinks[date].push(link);
  }

  // Set grid variant for specific platforms
  const finalVariant = (title === '抖音' || title === 'B站' || title === '小红书' || title === '微博' || title === 'Youtube') ? 'grid' : variant;

  const toggleDateCollapse = (date: string) => {
    setCollapsedDates(prev => {
      const newSet = new Set(prev);
      if (newSet.has(date)) {
        newSet.delete(date);
      } else {
        newSet.add(date);
      }
      return newSet;
    });
  };

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className={cn("w-full mb-4", className)}
    >
      <div className="glass rounded-2xl overflow-hidden transition-all duration-300">
        <CollapsibleTrigger asChild>
          <Button 
            variant="ghost" 
            className="w-full flex items-center justify-between p-6 h-auto hover:bg-white/40 dark:hover:bg-black/20"
          >
            <div className="flex items-center gap-3">
              {title === '小红书' && <span className="text-2xl">📕</span>}
              {title === '微博' && <span className="text-2xl">👁️</span>}
              {title === '抖音' && <span className="text-2xl">🎵</span>}
              {title === 'B站' && <span className="text-2xl">📺</span>}
              {title === 'Youtube' && (
                <div className="bg-red-600 rounded-md p-1 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </div>
              )}
              <span className="text-xl font-semibold text-foreground/80">
                {title === 'Youtube' ? '《破碎的爱》播放平台' : title}
              </span>
            </div>
            <ChevronDown 
              className={cn(
                "h-6 w-6 transition-transform duration-300 text-muted-foreground",
                isOpen && "transform rotate-180"
              )} 
            />
          </Button>
        </CollapsibleTrigger>
        
        <CollapsibleContent>
          <div className="px-4 pb-6">
            {dates.map((date, dateIdx) => (
              <div key={date} className="mb-4 last:mb-0">
                {date !== 'default' && date !== '第一行' && date !== '第二行' && (
                  <div 
                    className="relative flex items-center py-4 mb-2 cursor-pointer group"
                    onClick={() => toggleDateCollapse(date)}
                  >
                    <div className="flex-grow border-t border-border/40"></div>
                    <div className="flex items-center gap-2 flex-shrink mx-4">
                      <span className="text-[10px] text-muted-foreground/70 font-medium tracking-widest uppercase">
                        {date}更新
                      </span>
                      <ChevronDown 
                        className={cn(
                          "h-3 w-3 transition-transform duration-200 text-muted-foreground/50",
                          !collapsedDates.has(date) && "transform rotate-180"
                        )} 
                      />
                    </div>
                    <div className="flex-grow border-t border-border/40"></div>
                  </div>
                )}
                {(!collapsedDates.has(date) || date === 'default' || date === '第一行' || date === '第二行') && (
                  <div className={cn(
                    finalVariant === 'grid' 
                      ? date === '第一行' 
                        ? "grid grid-cols-1 gap-2" 
                        : date === '第二行'
                        ? "grid grid-cols-2 gap-2"
                        : "grid grid-cols-3 gap-2"
                      : "space-y-3"
                  )}>
                    {groupedLinks[date].map((link, index) => (
                      <a
                        key={index}
                        href={link.url || '#'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn(
                          "flex flex-col items-center justify-start p-3 rounded-xl transition-all duration-200 group text-center h-full",
                          link.url 
                            ? "bg-secondary/50 hover:bg-primary/10 text-foreground border border-transparent hover:border-primary/20" 
                            : "bg-muted cursor-not-allowed opacity-60"
                        )}
                        onClick={(e) => !link.url && e.preventDefault()}
                      >
                        <div className="flex flex-col items-center gap-2 w-full">
                          {(link.url?.includes('xiaohongshu.com') || title === '小红书') && (
                            <div className="flex items-center justify-center w-6 h-6 rounded-full bg-red-500 text-white text-[9px] font-bold shrink-0 shadow-sm leading-none">
                              书
                            </div>
                          )}
                          {(link.url?.includes('weibo.com') || title === '微博') && (
                            <div className="flex items-center justify-center w-6 h-6 rounded-full bg-orange-500 text-white text-[9px] font-bold shrink-0 shadow-sm leading-none">
                              博
                            </div>
                          )}
                          {(link.url?.includes('bilibili.com') || title === 'B站') && (
                            <div className="flex items-center justify-center w-6 h-6 rounded-full bg-pink-400 text-white text-[9px] font-bold shrink-0 shadow-sm leading-none">
                              B
                            </div>
                          )}
                          {(link.url?.includes('douyin.com') || title === '抖音') && (
                            <div className="flex items-center justify-center w-6 h-6 rounded-full bg-slate-900 text-white text-[9px] font-bold shrink-0 shadow-sm leading-none">
                              音
                            </div>
                          )}
                          {link.url?.includes('youtube.com') && (
                            <div className="flex items-center justify-center w-6 h-6 rounded-full bg-red-600 text-white text-[9px] font-bold shrink-0 shadow-sm leading-none">
                              Y
                            </div>
                          )}
                          <span className={cn(
                            "font-medium leading-tight break-words w-full line-clamp-3",
                            finalVariant === 'grid' ? "text-xs" : "text-sm"
                          )}>
                            {link.title || '无标题'}
                          </span>
                        </div>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </CollapsibleContent>
      </div>
    </Collapsible>
  );
};
