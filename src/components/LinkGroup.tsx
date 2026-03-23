import React, { useState } from 'react';
import { ChevronDown, ExternalLink } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'motion/react';

export interface LinkItemData {
  title: string;
  url: string;
}

interface LinkGroupProps {
  title: string;
  links: LinkItemData[];
  defaultOpen?: boolean;
  className?: string;
}

export const LinkGroup: React.FC<LinkGroupProps> = ({ 
  title, 
  links, 
  defaultOpen = true,
  className
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

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
            <span className="text-xl font-semibold text-foreground/80">{title}</span>
            <ChevronDown 
              className={cn(
                "h-6 w-6 transition-transform duration-300 text-muted-foreground",
                isOpen && "transform rotate-180"
              )} 
            />
          </Button>
        </CollapsibleTrigger>
        
        <CollapsibleContent>
          <div className="px-4 pb-6 space-y-3">
            {links.length > 0 ? (
              links.map((link, index) => (
                <a
                  key={index}
                  href={link.url || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "flex items-center justify-between p-4 rounded-xl transition-all duration-200 group",
                    link.url 
                      ? "bg-secondary/50 hover:bg-primary/10 text-foreground border border-transparent hover:border-primary/20" 
                      : "bg-muted cursor-not-allowed opacity-60"
                  )}
                  onClick={(e) => !link.url && e.preventDefault()}
                >
                  <span className="font-medium">{link.title || '无标题'}</span>
                  {link.url && (
                    <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity text-primary" />
                  )}
                </a>
              ))
            ) : (
              <div className="text-center py-6 text-muted-foreground italic">
                暂无内容
              </div>
            )}
          </div>
        </CollapsibleContent>
      </div>
    </Collapsible>
  );
};
