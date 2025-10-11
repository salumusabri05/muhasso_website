'use client';

import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import News from '../../components/News';

const NewsPage = () => {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow">
        <News showAll={true} />
      </div>
      <Footer />
    </main>
  );
};

export default NewsPage;
