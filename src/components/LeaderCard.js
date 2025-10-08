'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const LeaderCard = ({ leader }) => {
  return (
    <motion.div 
      className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
      whileHover={{ y: -5 }}
    >
      <div className="flex flex-col md:flex-row">
        <div className="relative h-48 md:h-auto md:w-1/3 min-h-[150px]">
          {leader.image ? (
            <Image 
              src={leader.image} 
              alt={leader.name}
              fill
              style={{objectFit: 'cover'}} 
            />
          ) : (
            <div className="w-full h-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
              <div className="h-20 w-20 rounded-full bg-gray-300 dark:bg-gray-600 flex items-center justify-center text-gray-500 dark:text-gray-400 text-xl font-bold">
                {leader.name.split(' ').map(n => n[0]).join('')}
              </div>
            </div>
          )}
        </div>
        
        <div className="p-5 md:w-2/3">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white">{leader.name}</h3>
          <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">{leader.role}</p>
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            {leader.bio}
          </p>
          
          <div className="mt-4 flex flex-wrap gap-2">
            {leader.social && Object.entries(leader.social).map(([platform, url]) => (
              <a 
                key={platform}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
              >
                {platform}
              </a>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default LeaderCard;
