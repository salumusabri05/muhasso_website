'use client';

import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AssociationsComponent from '../../components/AssociationsComponent';

const AssociationsPage = () => {

  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow">
        <AssociationsComponent />
      </div>
      <Footer />
    </main>
  );
};

export default AssociationsPage;
