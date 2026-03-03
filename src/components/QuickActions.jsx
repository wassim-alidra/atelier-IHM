import React from 'react';
import { PlusCircle, ShoppingBag, Truck, ChevronRight } from 'lucide-react';

const QuickActionCard = ({ title, description, icon: Icon, color = 'var(--primary)' }) => {
    return (
        <button className="premium-card" style={{
            padding: '24px',
            textAlign: 'left',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            backgroundColor: '#FFFFFF',
            border: 'none'
        }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                <div style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '16px',
                    backgroundColor: 'var(--accent-soft)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: color
                }}>
                    <Icon size={28} />
                </div>
                <div>
                    <h3 style={{ fontSize: '16px', fontWeight: 600, color: 'var(--text-main)', marginBottom: '4px' }}>{title}</h3>
                    <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>{description}</p>
                </div>
            </div>
            <div style={{ color: 'var(--text-muted)' }}>
                <ChevronRight size={20} />
            </div>
        </button>
    );
};

const QuickActions = () => {
    return (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
            <QuickActionCard
                title="Add New Product"
                description="List a new agricultural product on the market"
                icon={PlusCircle}
            />
            <QuickActionCard
                title="Manage Orders"
                description="Review and process your customer orders"
                icon={ShoppingBag}
            />
            <QuickActionCard
                title="Track Deliveries"
                description="Monitor real-time delivery status of sold items"
                icon={Truck}
            />
        </div>
    );
};

export default QuickActions;
