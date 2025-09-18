'use client';

import React from 'react';
import { User, Mail, Phone } from 'lucide-react';

const LeaderCard = ({ leader }) => {
  const { name, role, email, phone, description, photo } = leader;
  
  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
      <div className="p-4">
        <div className="flex items-center">
          <div className="shrink-0 mr-4 w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
            <User className="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <h3 className="font-medium text-lg text-blue-900">{name}</h3>
            <p className="text-blue-700">{role}</p>
          </div>
        </div>
        
        {description && (
          <p className="mt-3 text-gray-600 text-sm">{description}</p>
        )}
        
        <div className="mt-4 pt-3 border-t border-gray-100 space-y-1">
          {email && (
            <div className="flex items-center text-sm">
              <Mail className="w-4 h-4 text-gray-500 mr-2" />
              <span className="text-gray-700">{email}</span>
            </div>
          )}
          {phone && (
            <div className="flex items-center text-sm">
              <Phone className="w-4 h-4 text-gray-500 mr-2" />
              <span className="text-gray-700">{phone}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LeaderCard;
