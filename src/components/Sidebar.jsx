import React from 'react';
import { LayoutDashboard, Package, ShoppingBag, Truck, BarChart3, Tag, MessageSquare, LogOut, Leaf } from 'lucide-react';

const Sidebar = ({ activeItem = 'Dashboard', onItemClick }) => {
    const menuItems = [
        { id: 'Dashboard', icon: LayoutDashboard, label: 'Dashboard' },
        { id: 'My Products', icon: Package, label: 'My Products' },
        { id: 'My Orders', icon: ShoppingBag, label: 'My Orders' },
        { id: 'Track Deliveries', icon: Truck, label: 'Track Deliveries' },
        { id: 'Statistics', icon: BarChart3, label: 'Statistics' },
        { id: 'Official Prices', icon: Tag, label: 'Official Prices' },
        { id: 'Complaints', icon: MessageSquare, label: 'Complaints' },
    ];

    return (
        <aside style={{
            width: '260px',
            height: '100vh',
            backgroundColor: '#FFFFFF',
            borderRight: '1px solid var(--border-color)',
            position: 'fixed',
            left: 0,
            top: 0,
            display: 'flex',
            flexDirection: 'column',
            padding: '24px 16px',
            zIndex: 100
        }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '0 8px 32px 8px' }}>
                <div style={{ backgroundColor: 'var(--primary)', padding: '6px', borderRadius: '8px', display: 'flex' }}>
                    <Leaf size={20} color="white" />
                </div>
                <span style={{ fontWeight: 700, fontSize: '18px', color: 'var(--primary)', letterSpacing: '-0.5px' }}>
                    AgriGov Market
                </span>
            </div>

            <nav style={{ flex: 1 }}>
                <ul style={{ listStyle: 'none' }}>
                    {menuItems.map((item) => (
                        <li key={item.id} style={{ marginBottom: '4px' }}>
                            <button
                                onClick={() => onItemClick && onItemClick(item.id)}
                                style={{
                                    width: '100%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '12px',
                                    padding: '12px 12px',
                                    borderRadius: 'var(--radius-md)',
                                    backgroundColor: activeItem === item.id ? 'var(--accent-soft)' : 'transparent',
                                    color: activeItem === item.id ? 'var(--primary)' : 'var(--text-muted)',
                                    fontWeight: activeItem === item.id ? 600 : 500,
                                    fontSize: '14px',
                                    textAlign: 'left',
                                    border: 'none',
                                    outline: 'none',
                                    cursor: 'pointer',
                                    transition: 'all 0.2s ease'
                                }}
                            >
                                <item.icon size={20} />
                                {item.label}
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>

            <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '16px' }}>
                <button style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '12px 12px',
                    borderRadius: 'var(--radius-md)',
                    color: '#E11D48',
                    fontWeight: 600,
                    fontSize: '14px',
                    backgroundColor: 'transparent',
                    border: 'none',
                    cursor: 'pointer'
                }}>
                    <LogOut size={20} />
                    Logout
                </button>
            </div>
        </aside>
    );
};

export default Sidebar;
