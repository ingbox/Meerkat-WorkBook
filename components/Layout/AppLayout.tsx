import React from 'react';
import Header from './Header';
import Footer from './Footer';

type AppLayoutProps = {
  children: React.ReactNode;
};

const AppLayout = ({children}: AppLayoutProps) => {
  return (
    <div>
      <Header/>
      {children}
      <Footer/>
    </div>
  )
}

export default AppLayout