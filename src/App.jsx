import { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Sidebar from './components/layout/Sidebar';
import Header from './components/layout/Header';
import ProductDashboard from './components/ProductDashboard';

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-gray-50">
        <div className="flex h-screen">
          {/* Sidebar */}
          <Sidebar isOpen={sidebarOpen} onToggle={toggleSidebar} />
          
          {/* Main Content */}
          <div className="flex-1 flex flex-col overflow-hidden lg:ml-0">
            {/* Header */}
            <Header onMenuToggle={toggleSidebar} />
            
            {/* Main Content Area */}
            <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50">
              <ProductDashboard />
            </main>
          </div>
        </div>
      </div>
    </QueryClientProvider>
  );
}

export default App;