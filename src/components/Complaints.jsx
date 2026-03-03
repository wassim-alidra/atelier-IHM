import React from 'react';
import { MessageSquare, AlertCircle, Clock, CheckCircle, Send, Search, MoreVertical } from 'lucide-react';

const complaints = [
    { id: '#CMP-401', subject: 'Delay in Delivery #ORD-7241', date: 'Feb 27, 2026', status: 'Pending', priority: 'High' },
    { id: '#CMP-398', subject: 'Product Damage on Arrival', date: 'Feb 25, 2026', status: 'In Review', priority: 'Medium' },
    { id: '#CMP-395', subject: 'Payment Confirmation Issue', date: 'Feb 22, 2026', status: 'Resolved', priority: 'Low' },
];

const Complaints = () => {
    return (
        <div style={{ animation: 'fadeIn 0.5s ease-out' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
                <div>
                    <h2 style={{ fontSize: '24px', fontWeight: 700, color: 'var(--text-main)', marginBottom: '4px' }}>Complaints & Support</h2>
                    <p style={{ fontSize: '15px', color: 'var(--text-muted)' }}>Open a ticket or check status of your ongoing support requests.</p>
                </div>
                <button style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    backgroundColor: '#B91C1C',
                    color: '#FFFFFF',
                    padding: '12px 20px',
                    borderRadius: '12px',
                    fontWeight: 600,
                    border: 'none',
                    cursor: 'pointer',
                    boxShadow: '0 4px 12px rgba(185, 28, 28, 0.2)'
                }}>
                    <MessageSquare size={20} />
                    New Complaint
                </button>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '32px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                    <div className="premium-card" style={{ padding: '24px', backgroundColor: 'var(--primary)', color: '#FFFFFF' }}>
                        <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '16px' }}>Support Center</h3>
                        <p style={{ fontSize: '14px', opacity: 0.9, marginBottom: '20px' }}>Our government support team is available 24/7 to assist with market disputes and logistics.</p>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '13px' }}>
                                <Clock size={16} /> Avg. Response: 2 Hours
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '13px' }}>
                                <CheckCircle size={16} /> 98% Satisfaction Rate
                            </div>
                        </div>
                    </div>

                    <div className="premium-card" style={{ padding: '24px' }}>
                        <h3 style={{ fontSize: '16px', fontWeight: 600, color: 'var(--text-main)', marginBottom: '16px' }}>FAQ Quick Links</h3>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            {['Delivery policies', 'Payment security', 'Market regulations', 'Insurance details'].map((link, i) => (
                                <li key={i}>
                                    <button style={{ fontSize: '14px', color: 'var(--primary)', fontWeight: 600, backgroundColor: 'transparent', border: 'none', cursor: 'pointer' }}>{link}</button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="premium-card" style={{ padding: '24px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '24px' }}>
                        <h3 style={{ fontSize: '16px', fontWeight: 600, color: 'var(--text-main)' }}>My Complaint Tickets</h3>
                        <div style={{ position: 'relative' }}>
                            <Search size={16} color="var(--text-muted)" style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)' }} />
                            <input
                                type="text"
                                placeholder="Search tickets..."
                                style={{
                                    padding: '8px 10px 8px 32px',
                                    borderRadius: '8px',
                                    border: '1px solid var(--border-color)',
                                    fontSize: '13px',
                                    outline: 'none',
                                    width: '200px'
                                }}
                            />
                        </div>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                        {complaints.map((item) => (
                            <div key={item.id} style={{
                                padding: '16px',
                                borderRadius: '12px',
                                border: '1px solid var(--border-color)',
                                display: 'flex', gap: '16px',
                                transition: 'background-color 0.2s',
                                cursor: 'pointer'
                            }} onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'var(--background)'} onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>
                                <div style={{
                                    width: '40px',
                                    height: '40px',
                                    borderRadius: '10px',
                                    backgroundColor: item.status === 'Resolved' ? '#F0FDF4' : '#FFF7ED',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: item.status === 'Resolved' ? '#15803D' : '#C2410C'
                                }}>
                                    <AlertCircle size={20} />
                                </div>
                                <div style={{ flex: 1 }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                                        <h4 style={{ fontSize: '14px', fontWeight: 700, color: 'var(--text-main)' }}>{item.id}: {item.subject}</h4>
                                        <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{item.date}</span>
                                    </div>
                                    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                                        <span style={{ fontSize: '12px', fontWeight: 600, color: item.priority === 'High' ? '#B91C1C' : '#64748B' }}>Priority: {item.priority}</span>
                                        <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Status: <strong>{item.status}</strong></span>
                                    </div>
                                </div>
                                <button style={{ alignSelf: 'center', padding: '8px', color: 'var(--text-muted)', backgroundColor: 'transparent', border: 'none' }}>
                                    <MoreVertical size={18} />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Complaints;
