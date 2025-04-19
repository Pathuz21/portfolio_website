import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock } from 'lucide-react';

interface BlogPostProps {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
}

export function BlogPost({ title, excerpt, date, readTime, image }: BlogPostProps) {
  return (
    <motion.article 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg"
    >
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{excerpt}</p>
        <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
          <div className="flex items-center gap-1">
            <Calendar size={16} />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock size={16} />
            <span>{readTime}</span>
          </div>
        </div>
      </div>
    </motion.article>
  );
}