import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface CharacterRelationshipProps {
  title: string;
  imageUrl: string;
  defaultOpen?: boolean;
  className?: string;
}

export const CharacterRelationship: React.FC<CharacterRelationshipProps> = ({ 
  title, 
  imageUrl,
  defaultOpen = false,
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
            <div className="flex items-center gap-3">
              <span className="text-2xl">📊</span>
              <span className="text-base font-semibold text-foreground/80 whitespace-nowrap">
                《破爱》人物关系图（周更）
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
            <div className="relative w-full rounded-lg overflow-hidden shadow-lg">
              <img 
                src={imageUrl} 
                alt={title}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </CollapsibleContent>
      </div>
    </Collapsible>
  );
};
