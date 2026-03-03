import React from 'react';
import { Bell, Search, ChevronDown } from 'lucide-react';

const Navbar = ({ title = "Farmer Dashboard" }) => {
    return (
        <header style={{
            height: '70px',
            backgroundColor: '#FFFFFF',
            borderBottom: '1px solid var(--border-color)',
            position: 'fixed',
            top: 0,
            right: 0,
            left: '260px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 32px',
            zIndex: 90
        }}>
            <h1 style={{ fontSize: '18px', fontWeight: 600, color: 'var(--text-main)' }}>
                {title}
            </h1>

            <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
                <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                    <Search size={18} color="var(--text-muted)" style={{ position: 'absolute', left: '12px' }} />
                    <input
                        type="text"
                        placeholder="Search products, orders..."
                        style={{
                            padding: '10px 12px 10px 40px',
                            borderRadius: 'var(--radius-md)',
                            border: '1px solid var(--border-color)',
                            backgroundColor: 'var(--background)',
                            fontSize: '14px',
                            width: '280px',
                            outline: 'none',
                            transition: 'border-color 0.2s'
                        }}
                    />
                </div>

                <button style={{ position: 'relative', padding: '8px', color: 'var(--text-muted)' }}>
                    <Bell size={20} />
                    <span style={{
                        position: 'absolute',
                        top: '6px',
                        right: '6px',
                        width: '8px',
                        height: '8px',
                        backgroundColor: '#E11D48',
                        borderRadius: '50%',
                        border: '2px solid #FFFFFF'
                    }} />
                </button>

                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', paddingLeft: '12px', borderLeft: '1px solid var(--border-color)' }}>
                    <div style={{ textAlign: 'right' }}>
                        <p style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text-main)', lineHeight: '1' }}>Wassim Alidra</p>
                        <p style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '2px' }}>Farmer ID: #A1024</p>
                    </div>
                    <div style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        backgroundColor: 'var(--accent-soft)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--primary)',
                        fontWeight: 700,
                        cursor: 'pointer'
                    }}>
                        WA
                    </div>
                    <ChevronDown size={16} color="var(--text-muted)" />
                </div>
            </div>
        </header>
    );
};

export default Navbar;
