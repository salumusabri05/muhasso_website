'use client';

import Link from 'next/link';
import Header from '../../../../components/Header';
import Footer from '../../../../components/Footer';
import { Globe, AlertCircle } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      
      <div className="flex-grow flex flex-col items-center justify-center py-16 px-4">
        <div className="text-center max-w-xl">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-6">
            <AlertCircle className="w-8 h-8 text-red-600" />
          </div>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Association Not Found</h1>
          <p className="text-lg text-gray-600 mb-8">
            Sorry, the association you&apos;re looking for doesn&apos;t exist or may have been moved.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/associations"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              View All Associations
            </Link>
            <Link 
              href="/"
              className="bg-gray-100 hover:bg-gray-200 text-gray-900 font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              Return Home
            </Link>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
