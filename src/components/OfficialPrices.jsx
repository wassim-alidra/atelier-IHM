import React from 'react';
import { Tag, TrendingUp, TrendingDown, Info, Search, Filter, Calendar } from 'lucide-react';

const prices = [
    { id: 1, product: 'Carrot', region: 'National', price: '60 DA/kg', change: '+2.5%', trend: 'up', type: 'Reference' },
    { id: 2, product: 'Tomato', region: 'National', price: '180 DA/kg', change: '0%', trend: 'stable', type: 'Reference' },
    { id: 3, product: 'Potato', region: 'Algiers', price: '65 DA/kg', change: '-5.2%', trend: 'down', type: 'Reference' },
    { id: 4, product: 'Onion', region: 'Mostaganem', price: '45 DA/kg', change: '+12%', trend: 'up', type: 'Reference' },
    { id: 5, product: 'Lettuce', region: 'El Oued', price: '120 DA/kg', change: '-2.1%', trend: 'down', type: 'Reference' },
];

const OfficialPrices = () => {
    return (
        <div style={{ animation: 'fadeIn 0.5s ease-out' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
                <div>
                    <h2 style={{ fontSize: '24px', fontWeight: 700, color: 'var(--text-main)', marginBottom: '4px' }}>Official Prices</h2>
                    <p style={{ fontSize: '15px', color: 'var(--text-muted)' }}>Government-regulated and reference market prices for Algerian agriculture.</p>
                </div>
                <div style={{ display: 'flex', gap: '12px', alignItems: 'center', backgroundColor: '#EFF6FF', padding: '10px 16px', borderRadius: '12px', color: '#1D4ED8', fontSize: '14px', fontWeight: 600 }}>
                    <Calendar size={18} />
                    Last Update: Today, 08:00 AM
                </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', marginBottom: '32px' }}>
                {[
                    { label: 'Market Stability', value: 'Stable', color: 'var(--primary)', icon: Info },
                    { label: 'Inflation Index', value: '3.2%', color: '#B91C1C', icon: TrendingUp },
                    { label: 'Volume Traded', value: '45.2k Tons', color: '#1D4ED8', icon: Tag },
                ].map((stat, i) => (
                    <div key={i} className="premium-card" style={{ padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div>
                            <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '4px' }}>{stat.label}</p>
                            <h4 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--text-main)' }}>{stat.value}</h4>
                        </div>
                        <div style={{ color: stat.color, backgroundColor: 'var(--background)', padding: '10px', borderRadius: '10px' }}><stat.icon size={20} /></div>
                    </div>
                ))}
            </div>

            <div className="premium-card" style={{ padding: '24px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '24px' }}>
                    <div style={{ position: 'relative', width: '300px' }}>
                        <Search size={18} color="var(--text-muted)" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
                        <input
                            type="text"
                            placeholder="Filter by product or region..."
                            style={{
                                width: '100%',
                                padding: '10px 10px 10px 40px',
                                borderRadius: '10px',
                                border: '1px solid var(--border-color)',
                                backgroundColor: 'var(--background)',
                                fontSize: '14px',
                                outline: 'none'
                            }}
                        />
                    </div>
                    <button style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        padding: '10px 16px',
                        borderRadius: '10px',
                        border: '1px solid var(--border-color)',
                        backgroundColor: '#FFFFFF',
                        fontSize: '14px',
                        fontWeight: 500
                    }}>
                        <Filter size={18} />
                        Categories
                    </button>
                </div>

                <div style={{ overflowX: 'auto' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                        <thead>
                            <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                                <th style={{ padding: '12px 16px', fontSize: '13px', fontWeight: 600, color: 'var(--text-muted)' }}>Product Name</th>
                                <th style={{ padding: '12px 16px', fontSize: '13px', fontWeight: 600, color: 'var(--text-muted)' }}>Region</th>
                                <th style={{ padding: '12px 16px', fontSize: '13px', fontWeight: 600, color: 'var(--text-muted)' }}>Price Unit</th>
                                <th style={{ padding: '12px 16px', fontSize: '13px', fontWeight: 600, color: 'var(--text-muted)' }}>Type</th>
                                <th style={{ padding: '12px 16px', fontSize: '13px', fontWeight: 600, color: 'var(--text-muted)' }}>24h Change</th>
                            </tr>
                        </thead>
                        <tbody>
                            {prices.map((item) => (
                                <tr key={item.id} style={{ borderBottom: '1px solid var(--border-color)' }}>
                                    <td style={{ padding: '16px', fontSize: '14px', fontWeight: 600, color: 'var(--text-main)' }}>{item.product}</td>
                                    <td style={{ padding: '16px', fontSize: '14px', color: 'var(--text-muted)' }}>{item.region}</td>
                                    <td style={{ padding: '16px', fontSize: '14px', fontWeight: 700, color: 'var(--primary)' }}>{item.price}</td>
                                    <td style={{ padding: '16px' }}>
                                        <span style={{
                                            padding: '4px 10px',
                                            borderRadius: '20px',
                                            fontSize: '12px',
                                            fontWeight: 600,
                                            backgroundColor: item.type === 'Regulated' ? '#F0FDF4' : '#EFF6FF',
                                            color: item.type === 'Regulated' ? '#15803D' : '#1D4ED8'
                                        }}>
                                            {item.type}
                                        </span>
                                    </td>
                                    <td style={{ padding: '16px' }}>
                                        <div style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '4px',
                                            fontSize: '13px',
                                            fontWeight: 600,
                                            color: item.trend === 'up' ? '#B91C1C' : item.trend === 'down' ? '#15803D' : '#64748B'
                                        }}>
                                            {item.trend === 'up' ? <TrendingUp size={14} /> : item.trend === 'down' ? <TrendingDown size={14} /> : null}
                                            {item.change}
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default OfficialPrices;
