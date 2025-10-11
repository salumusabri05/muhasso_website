import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Events from '../../components/Events';

const EventsPage = () => {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow">
        <Events showAll={true} />
      </div>
      <Footer />
    </main>
  );
};

export default EventsPage;
