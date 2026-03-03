import React from 'react';
import { TrendingUp, ShoppingBag, Package, Truck, ArrowUpRight, ArrowDownRight } from 'lucide-react';

const KPICard = ({ title, value, icon: Icon, trend, trendType = 'up' }) => {
    return (
        <div className="premium-card" style={{ padding: '24px', flex: 1 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    backgroundColor: 'var(--accent-soft)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--primary)'
                }}>
                    <Icon size={24} />
                </div>
                {trend && (
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px',
                        fontSize: '13px',
                        fontWeight: 600,
                        color: trendType === 'up' ? '#15803D' : '#B91C1C',
                        backgroundColor: trendType === 'up' ? '#F0FDF4' : '#FEF2F2',
                        padding: '4px 8px',
                        borderRadius: '6px'
                    }}>
                        {trendType === 'up' ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
                        {trend}
                    </div>
                )}
            </div>
            <div>
                <p style={{ fontSize: '14px', color: 'var(--text-muted)', fontWeight: 500, marginBottom: '8px' }}>{title}</p>
                <h3 style={{ fontSize: '24px', fontWeight: 700, color: 'var(--text-main)' }}>{value}</h3>
            </div>
        </div>
    );
};

export default KPICard;
