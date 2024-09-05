import React, { ReactNode } from 'react';
import Shell from './Shell';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="antialiased bg-gray-50 dark:bg-gray-900">
      <Shell />
      <main className="p-4 md:ml-64 h-auto pt-20">
        {children}
      </main>
    </div>
  );
};

export default Layout;
