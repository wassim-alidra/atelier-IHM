import React from 'react';
import { Eye, Clock, Truck, CheckCircle } from 'lucide-react';

const orders = [
    { id: '#ORD-7241', product: 'Tomato', quantity: '500 kg', wilaya: 'Algiers', status: 'Delivered' },
    { id: '#ORD-7242', product: 'Carrot', quantity: '200 kg', wilaya: 'Biskra', status: 'In Transit' },
    { id: '#ORD-7243', product: 'Potato', quantity: '1200 kg', wilaya: 'Oran', status: 'Pending' },
    { id: '#ORD-7244', product: 'Onion', quantity: '100 kg', wilaya: 'Setif', status: 'Delivered' },
    { id: '#ORD-7245', product: 'Pepper', quantity: '50 kg', wilaya: 'Bejaia', status: 'In Transit' },
];

const StatusBadge = ({ status }) => {
    const styles = {
        'Pending': { class: 'pending', icon: Clock },
        'In Transit': { class: 'transit', icon: Truck },
        'Delivered': { class: 'delivered', icon: CheckCircle },
    };

    const { class: className, icon: Icon } = styles[status] || styles['Pending'];

    return (
        <span className={`status-badge ${className}`}>
            <Icon size={14} />
            {status}
        </span>
    );
};

const OrdersTable = () => {
    return (
        <div className="premium-card" style={{ padding: '24px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                <div>
                    <h3 style={{ fontSize: '16px', fontWeight: 600, color: 'var(--text-main)' }}>Recent Sold Orders</h3>
                    <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Track delivery status of your sales</p>
                </div>
                <button style={{
                    color: 'var(--primary)',
                    fontSize: '14px',
                    fontWeight: 600,
                    backgroundColor: 'transparent'
                }}>
                    View All
                </button>
            </div>

            <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                    <thead>
                        <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                            <th style={{ padding: '12px 16px', fontSize: '13px', fontWeight: 600, color: 'var(--text-muted)' }}>Order ID</th>
                            <th style={{ padding: '12px 16px', fontSize: '13px', fontWeight: 600, color: 'var(--text-muted)' }}>Product</th>
                            <th style={{ padding: '12px 16px', fontSize: '13px', fontWeight: 600, color: 'var(--text-muted)' }}>Quantity</th>
                            <th style={{ padding: '12px 16px', fontSize: '13px', fontWeight: 600, color: 'var(--text-muted)' }}>Wilaya</th>
                            <th style={{ padding: '12px 16px', fontSize: '13px', fontWeight: 600, color: 'var(--text-muted)' }}>Delivery Status</th>
                            <th style={{ padding: '12px 16px', fontSize: '13px', fontWeight: 600, color: 'var(--text-muted)' }}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order, idx) => (
                            <tr key={idx} style={{ borderBottom: idx === orders.length - 1 ? 'none' : '1px solid var(--border-color)' }}>
                                <td style={{ padding: '16px', fontSize: '14px', fontWeight: 600, color: 'var(--primary)' }}>{order.id}</td>
                                <td style={{ padding: '16px', fontSize: '14px', color: 'var(--text-main)', fontWeight: 500 }}>{order.product}</td>
                                <td style={{ padding: '16px', fontSize: '14px', color: 'var(--text-main)' }}>{order.quantity}</td>
                                <td style={{ padding: '16px', fontSize: '14px', color: 'var(--text-main)' }}>{order.wilaya}</td>
                                <td style={{ padding: '16px' }}>
                                    <StatusBadge status={order.status} />
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
                                        color: 'var(--text-main)',
                                        backgroundColor: '#FFFFFF'
                                    }}>
                                        <Eye size={16} />
                                        View Details
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default OrdersTable;
