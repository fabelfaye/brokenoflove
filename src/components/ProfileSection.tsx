import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface ProfileSectionProps {
  avatarUrl: string;
  title: string;
}

export const ProfileSection: React.FC<ProfileSectionProps> = ({ avatarUrl, title }) => {
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
      <h1 className="text-3xl font-bold tracking-tight gradient-text text-center">
        {title}
      </h1>
    </div>
  );
};
