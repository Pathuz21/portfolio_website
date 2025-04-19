import React from 'react';
import { Moon, Sun } from 'lucide-react';
import * as Switch from '@radix-ui/react-switch';

interface ThemeToggleProps {
  theme: 'light' | 'dark';
  onThemeChange: (theme: 'light' | 'dark') => void;
}

export function ThemeToggle({ theme, onThemeChange }: ThemeToggleProps) {
  return (
    <div className="fixed top-4 right-4 z-50 flex items-center gap-2">
      <Sun size={20} className="text-gray-600 dark:text-gray-400" />
      <Switch.Root
        className="w-[42px] h-[25px] bg-gray-200 rounded-full relative data-[state=checked]:bg-blue-600 outline-none cursor-pointer"
        checked={theme === 'dark'}
        onCheckedChange={(checked) => onThemeChange(checked ? 'dark' : 'light')}
      >
        <Switch.Thumb className="block w-[21px] h-[21px] bg-white rounded-full transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[19px]" />
      </Switch.Root>
      <Moon size={20} className="text-gray-600 dark:text-gray-400" />
    </div>
  );
}