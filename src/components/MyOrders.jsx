import React from 'react';
import { ShoppingBag, Eye, Download, Search, Calendar } from 'lucide-react';

const orders = [
    { id: '#ORD-9912', customer: 'Bouchra Market', date: 'Feb 28, 2026', total: '150,000 DA', status: 'Processing' },
    { id: '#ORD-9911', customer: 'Sidi Yahia Store', date: 'Feb 27, 2026', total: '24,500 DA', status: 'Completed' },
    { id: '#ORD-9910', customer: 'Global Agri SARL', date: 'Feb 26, 2026', total: '89,000 DA', status: 'Shipped' },
    { id: '#ORD-9909', customer: 'Algiers Fresh', date: 'Feb 25, 2026', total: '12,400 DA', status: 'Completed' },
    { id: '#ORD-9908', customer: 'Oran Distribution', date: 'Feb 24, 2026', total: '210,000 DA', status: 'Cancelled' },
];

const MyOrders = () => {
    return (
        <div style={{ animation: 'fadeIn 0.5s ease-out' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
                <div>
                    <h2 style={{ fontSize: '24px', fontWeight: 700, color: 'var(--text-main)', marginBottom: '4px' }}>My Orders</h2>
                    <p style={{ fontSize: '15px', color: 'var(--text-muted)' }}>Detailed history of your sales and customer orders.</p>
                </div>
                <button style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    backgroundColor: '#FFFFFF',
                    color: 'var(--text-main)',
                    padding: '12px 20px',
                    borderRadius: '12px',
                    fontWeight: 600,
                    border: '1px solid var(--border-color)',
                    cursor: 'pointer'
                }}>
                    <Download size={20} />
                    Export Reports
                </button>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', marginBottom: '32px' }}>
                {[
                    { label: 'New Orders', value: '12', color: 'var(--primary)', icon: ShoppingBag },
                    { label: 'Total Revenue', value: '2.4M DA', color: '#1D4ED8', icon: Download },
                    { label: 'Average Order', value: '15k DA', color: '#7C3AED', icon: Calendar },
                ].map((stat, i) => (
                    <div key={i} className="premium-card" style={{ padding: '24px', display: 'flex', alignItems: 'center', gap: '16px' }}>
                        <div style={{
                            width: '48px',
                            height: '48px',
                            borderRadius: '12px',
                            backgroundColor: 'var(--background)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: stat.color
                        }}>
                            <stat.icon size={24} />
                        </div>
                        <div>
                            <p style={{ fontSize: '13px', color: 'var(--text-muted)', fontWeight: 500 }}>{stat.label}</p>
                            <h3 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--text-main)' }}>{stat.value}</h3>
                        </div>
                    </div>
                ))}
            </div>

            <div className="premium-card" style={{ padding: '24px' }}>
                <div style={{ display: 'flex', gap: '16px', marginBottom: '24px' }}>
                    <div style={{ position: 'relative', flex: 1 }}>
                        <Search size={18} color="var(--text-muted)" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
                        <input
                            type="text"
                            placeholder="Search by Order ID or Customer..."
                            style={{
                                width: '100%',
                                padding: '12px 12px 12px 40px',
                                borderRadius: '10px',
                                border: '1px solid var(--border-color)',
                                backgroundColor: 'var(--background)',
                                fontSize: '14px',
                                outline: 'none'
                            }}
                        />
                    </div>
                    <button style={{
                        padding: '12px 16px',
                        borderRadius: '10px',
                        border: '1px solid var(--border-color)',
                        backgroundColor: '#FFFFFF',
                        fontSize: '14px',
                        fontWeight: 500
                    }}>
                        Last 30 Days
                    </button>
                </div>

                <div style={{ overflowX: 'auto' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                        <thead>
                            <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                                <th style={{ padding: '12px 16px', fontSize: '13px', fontWeight: 600, color: 'var(--text-muted)' }}>Order ID</th>
                                <th style={{ padding: '12px 16px', fontSize: '13px', fontWeight: 600, color: 'var(--text-muted)' }}>Customer</th>
                                <th style={{ padding: '12px 16px', fontSize: '13px', fontWeight: 600, color: 'var(--text-muted)' }}>Date</th>
                                <th style={{ padding: '12px 16px', fontSize: '13px', fontWeight: 600, color: 'var(--text-muted)' }}>Total Amount</th>
                                <th style={{ padding: '12px 16px', fontSize: '13px', fontWeight: 600, color: 'var(--text-muted)' }}>Status</th>
                                <th style={{ padding: '12px 16px', fontSize: '13px', fontWeight: 600, color: 'var(--text-muted)' }}>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map((order) => (
                                <tr key={order.id} style={{ borderBottom: '1px solid var(--border-color)' }}>
                                    <td style={{ padding: '16px', fontSize: '14px', fontWeight: 600, color: 'var(--primary)' }}>{order.id}</td>
                                    <td style={{ padding: '16px', fontSize: '14px', fontWeight: 500, color: 'var(--text-main)' }}>{order.customer}</td>
                                    <td style={{ padding: '16px', fontSize: '14px', color: 'var(--text-muted)' }}>{order.date}</td>
                                    <td style={{ padding: '16px', fontSize: '14px', fontWeight: 600, color: 'var(--text-main)' }}>{order.total}</td>
                                    <td style={{ padding: '16px' }}>
                                        <span style={{
                                            padding: '4px 10px',
                                            borderRadius: '20px',
                                            fontSize: '12px',
                                            fontWeight: 600,
                                            backgroundColor: order.status === 'Completed' ? '#F0FDF4' : order.status === 'Processing' ? '#EFF6FF' : order.status === 'Cancelled' ? '#FEF2F2' : '#F1F5F9',
                                            color: order.status === 'Completed' ? '#15803D' : order.status === 'Processing' ? '#1D4ED8' : order.status === 'Cancelled' ? '#B91C1C' : '#64748B'
                                        }}>
                                            {order.status}
                                        </span>
                                    </td>
                                    <td style={{ padding: '16px' }}>
                                        <button style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '6px',
                                            padding: '8px 12px',
                                            borderRadius: '8px',
                                            border: '1px solid var(--border-color)',
                                            fontSize: '13px',
                                            fontWeight: 600,
                                            backgroundColor: '#FFFFFF',
                                            cursor: 'pointer'
                                        }}>
                                            <Eye size={16} />
                                            View
                                        </button>
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

export default MyOrders;
