import React from 'react';
import KPICard from './KPICard'
import RevenueChart from './RevenueChart'
import OrdersTable from './OrdersTable'
import QuickActions from './QuickActions'
import { TrendingUp, ShoppingBag, Package, Truck } from 'lucide-react'

const DashboardView = () => (
    <div style={{ animation: 'fadeIn 0.5s ease-out' }}>
        {/* Welcome Section */}
        <div style={{ marginBottom: '32px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 700, color: 'var(--text-main)', marginBottom: '4px' }}>
                Welcome back, Wassim!
            </h2>
            <p style={{ fontSize: '15px', color: 'var(--text-muted)' }}>
                Here's what's happening with your products and deliveries today.
            </p>
        </div>

        {/* KPI Grid */}
        <div style={{ display: 'flex', gap: '24px', marginBottom: '32px' }}>
            <KPICard
                title="Total Revenue"
                value="2,450,000 DA"
                icon={TrendingUp}
                trend="+12.5%"
                trendType="up"
            />
            <KPICard
                title="Total Orders"
                value="156"
                icon={ShoppingBag}
                trend="+8.2%"
                trendType="up"
            />
            <KPICard
                title="Products Sold"
                value="4,280 kg"
                icon={Package}
                trend="-2.4%"
                trendType="down"
            />
            <KPICard
                title="Pending Deliveries"
                value="12"
                icon={Truck}
            />
        </div>

        {/* Main Grid: Chart & Quick Actions */}
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '24px', marginBottom: '32px' }}>
            <div style={{ height: '400px' }}>
                <RevenueChart />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div className="premium-card" style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', backgroundColor: 'var(--primary)', color: '#FFFFFF' }}>
                    <div style={{ backgroundColor: 'rgba(255,255,255,0.2)', width: '64px', height: '64px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px auto' }}>
                        <Package size={32} />
                    </div>
                    <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '8px' }}>Active Products</h3>
                    <p style={{ fontSize: '32px', fontWeight: 700, marginBottom: '4px' }}>24</p>
                    <p style={{ fontSize: '14px', opacity: 0.8 }}>4 pending approval</p>
                    <button style={{
                        marginTop: '20px',
                        backgroundColor: '#FFFFFF',
                        color: 'var(--primary)',
                        padding: '10px 20px',
                        borderRadius: '10px',
                        fontWeight: 600,
                        fontSize: '14px',
                        border: 'none',
                        cursor: 'pointer'
                    }}>
                        View Inventory
                    </button>
                </div>
            </div>
        </div>

        {/* Orders Tracking Table */}
        <div style={{ marginBottom: '32px' }}>
            <OrdersTable />
        </div>

        {/* Quick Actions Title */}
        <div style={{ marginBottom: '16px' }}>
            <h3 style={{ fontSize: '18px', fontWeight: 600, color: 'var(--text-main)' }}>Quick Actions</h3>
        </div>

        <QuickActions />
    </div>
);

export default DashboardView;
