import React, { useState } from 'react'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import DashboardView from './components/DashboardView' // Decoupling dashboard view
import MyProducts from './components/MyProducts'
import MyOrders from './components/MyOrders'
import TrackDeliveries from './components/TrackDeliveries'
import Statistics from './components/Statistics'
import OfficialPrices from './components/OfficialPrices'
import Complaints from './components/Complaints'

function App() {
  const [activeTab, setActiveTab] = useState('Dashboard');

  const renderContent = () => {
    switch (activeTab) {
      case 'Dashboard':
        return <DashboardView />;
      case 'My Products':
        return <MyProducts />;
      case 'My Orders':
        return <MyOrders />;
      case 'Track Deliveries':
        return <TrackDeliveries />;
      case 'Statistics':
        return <Statistics />;
      case 'Official Prices':
        return <OfficialPrices />;
      case 'Complaints':
        return <Complaints />;
      default:
        return <DashboardView />;
    }
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: 'var(--background)' }}>
      {/* Sidebar - Fixed */}
      <Sidebar activeItem={activeTab} onItemClick={setActiveTab} />

      {/* Main Content Area */}
      <main style={{ flex: 1, marginLeft: '260px', paddingBottom: '40px' }}>
        <Navbar title={activeTab === 'Dashboard' ? 'Farmer Dashboard' : activeTab} />

        {/* Content Wrapper */}
        <div style={{ padding: '32px', marginTop: '70px' }}>
          {renderContent()}
        </div>
      </main>
    </div>
  )
}

export default App
