import React from 'react';
import { Plus, Search, Filter, Edit2, Trash2, MoreVertical, Package } from 'lucide-react';

const products = [
    { id: 1, name: 'Carrot', quality: 'High', price: '60 DA/kg', stock: '800 kg', status: 'Active', image: '🥕' },
    { id: 2, name: 'Tomato', quality: 'High', price: '180 DA/kg', stock: '500 kg', status: 'Active', image: '🍅' },
    { id: 3, name: 'Potato', quality: 'Medium', price: '65 DA/kg', stock: '1200 kg', status: 'Active', image: '🥔' },
    { id: 4, name: 'Onion', quality: 'High', price: '45 DA/kg', stock: '1500 kg', status: 'Active', image: '🧅' },
    { id: 5, name: 'Lettuce', quality: 'High', price: '120 DA/kg', stock: '300 kg', status: 'Active', image: '🥬' },
    { id: 6, name: 'Broccoli', quality: 'Medium', price: '250 DA/kg', stock: '150 kg', status: 'Pending', image: '🥦' },
    { id: 7, name: 'Cucumber', quality: 'High', price: '110 DA/kg', stock: '400 kg', status: 'Active', image: '🥒' },
    { id: 8, name: 'Pepper', quality: 'Medium', price: '160 DA/kg', stock: '250 kg', status: 'Active', image: '🫑' },
];

const MyProducts = () => {
    return (
        <div style={{ animation: 'fadeIn 0.5s ease-out' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
                <div>
                    <h2 style={{ fontSize: '24px', fontWeight: 700, color: 'var(--text-main)', marginBottom: '4px' }}>My Products</h2>
                    <p style={{ fontSize: '15px', color: 'var(--text-muted)' }}>Manage your agricultural inventory and listings.</p>
                </div>
                <button style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    backgroundColor: 'var(--primary)',
                    color: '#FFFFFF',
                    padding: '12px 20px',
                    borderRadius: '12px',
                    fontWeight: 600,
                    border: 'none',
                    cursor: 'pointer',
                    boxShadow: '0 4px 12px rgba(47, 111, 78, 0.2)'
                }}>
                    <Plus size={20} />
                    Add New Product
                </button>
            </div>

            <div className="premium-card" style={{ padding: '24px' }}>
                <div style={{ display: 'flex', gap: '16px', marginBottom: '24px' }}>
                    <div style={{ position: 'relative', flex: 1 }}>
                        <Search size={18} color="var(--text-muted)" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
                        <input
                            type="text"
                            placeholder="Search products..."
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
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        padding: '12px 16px',
                        borderRadius: '10px',
                        border: '1px solid var(--border-color)',
                        backgroundColor: '#FFFFFF',
                        fontSize: '14px',
                        fontWeight: 500,
                        color: 'var(--text-main)'
                    }}>
                        <Filter size={18} />
                        Filters
                    </button>
                </div>

                <div style={{ overflowX: 'auto' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                        <thead>
                            <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                                <th style={{ padding: '12px 16px', fontSize: '13px', fontWeight: 600, color: 'var(--text-muted)' }}>Product</th>
                                <th style={{ padding: '12px 16px', fontSize: '13px', fontWeight: 600, color: 'var(--text-muted)' }}>Product Quality</th>
                                <th style={{ padding: '12px 16px', fontSize: '13px', fontWeight: 600, color: 'var(--text-muted)' }}>Price</th>
                                <th style={{ padding: '12px 16px', fontSize: '13px', fontWeight: 600, color: 'var(--text-muted)' }}>Stock</th>
                                <th style={{ padding: '12px 16px', fontSize: '13px', fontWeight: 600, color: 'var(--text-muted)' }}>Status</th>
                                <th style={{ padding: '12px 16px', fontSize: '13px', fontWeight: 600, color: 'var(--text-muted)' }}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((product) => (
                                <tr key={product.id} style={{ borderBottom: '1px solid var(--border-color)' }}>
                                    <td style={{ padding: '16px' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                            <div style={{
                                                width: '40px',
                                                height: '40px',
                                                borderRadius: '8px',
                                                backgroundColor: 'var(--background)',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                fontSize: '20px'
                                            }}>
                                                {product.image}
                                            </div>
                                            <span style={{ fontWeight: 600, color: 'var(--text-main)' }}>{product.name}</span>
                                        </div>
                                    </td>
                                    <td style={{ padding: '16px', fontSize: '14px', color: 'var(--text-main)' }}>{product.quality}</td>
                                    <td style={{ padding: '16px', fontSize: '14px', fontWeight: 600, color: 'var(--primary)' }}>{product.price}</td>
                                    <td style={{ padding: '16px', fontSize: '14px', color: 'var(--text-main)' }}>{product.stock}</td>
                                    <td style={{ padding: '16px' }}>
                                        <span style={{
                                            padding: '4px 10px',
                                            borderRadius: '20px',
                                            fontSize: '12px',
                                            fontWeight: 600,
                                            backgroundColor: product.status === 'Active' ? '#F0FDF4' : product.status === 'Pending' ? '#FFF7ED' : '#F1F5F9',
                                            color: product.status === 'Active' ? '#15803D' : product.status === 'Pending' ? '#C2410C' : '#64748B'
                                        }}>
                                            {product.status}
                                        </span>
                                    </td>
                                    <td style={{ padding: '16px' }}>
                                        <div style={{ display: 'flex', gap: '8px' }}>
                                            <button style={{ padding: '8px', borderRadius: '8px', backgroundColor: 'var(--background)', color: 'var(--text-muted)', border: 'none' }}>
                                                <Edit2 size={16} />
                                            </button>
                                            <button style={{ padding: '8px', borderRadius: '8px', backgroundColor: 'var(--background)', color: '#E11D48', border: 'none' }}>
                                                <Trash2 size={16} />
                                            </button>
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

export default MyProducts;
