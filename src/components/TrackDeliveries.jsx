import React from 'react';
import { Truck, MapPin, CheckCircle, Clock, Search, ChevronRight } from 'lucide-react';

const deliveries = [
    { id: '#DEL-8801', product: 'Tomato', destination: 'Algiers Central Market', status: 'In Transit', progress: 65, lastUpdate: '2 hours ago' },
    { id: '#DEL-8802', product: 'Carrot', destination: 'Biskra Export Hub', status: 'Pending', progress: 10, lastUpdate: '5 hours ago' },
    { id: '#DEL-8803', product: 'Potato', destination: 'Oran Wholesale', status: 'Delivered', progress: 100, lastUpdate: 'Yesterday' },
    { id: '#DEL-8804', product: 'Pepper', destination: 'Bejaia Port', status: 'In Transit', progress: 40, lastUpdate: '1 hour ago' },
];

const TrackDeliveries = () => {
    return (
        <div style={{ animation: 'fadeIn 0.5s ease-out' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
                <div>
                    <h2 style={{ fontSize: '24px', fontWeight: 700, color: 'var(--text-main)', marginBottom: '4px' }}>Track Deliveries</h2>
                    <p style={{ fontSize: '15px', color: 'var(--text-muted)' }}>Real-time monitoring of your sold products in transit.</p>
                </div>
                <div style={{ display: 'flex', gap: '12px' }}>
                    <button style={{ padding: '12px 20px', borderRadius: '12px', border: '1px solid var(--border-color)', backgroundColor: '#FFFFFF', fontWeight: 600 }}>Active (3)</button>
                    <button style={{ padding: '12px 20px', borderRadius: '12px', border: 'none', backgroundColor: 'var(--background)', fontWeight: 600, color: 'var(--text-muted)' }}>History</button>
                </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                {deliveries.map((delivery) => (
                    <div key={delivery.id} className="premium-card" style={{ padding: '24px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
                            <div style={{ display: 'flex', gap: '16px' }}>
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
                                    <Truck size={24} />
                                </div>
                                <div>
                                    <h3 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--text-main)' }}>{delivery.id}</h3>
                                    <p style={{ fontSize: '13px', color: 'var(--text-muted)', fontWeight: 500 }}>{delivery.product}</p>
                                </div>
                            </div>
                            <span style={{
                                padding: '4px 10px',
                                borderRadius: '20px',
                                fontSize: '12px',
                                fontWeight: 600,
                                backgroundColor: delivery.status === 'Delivered' ? '#F0FDF4' : delivery.status === 'In Transit' ? '#EFF6FF' : '#FFF7ED',
                                color: delivery.status === 'Delivered' ? '#15803D' : delivery.status === 'In Transit' ? '#1D4ED8' : '#C2410C'
                            }}>
                                {delivery.status}
                            </span>
                        </div>

                        <div style={{ marginBottom: '20px' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', color: 'var(--text-muted)', marginBottom: '8px' }}>
                                <span>Delivery Progress</span>
                                <span style={{ fontWeight: 600, color: 'var(--text-main)' }}>{delivery.progress}%</span>
                            </div>
                            <div style={{ width: '100%', height: '8px', backgroundColor: 'var(--background)', borderRadius: '4px', overflow: 'hidden' }}>
                                <div style={{
                                    width: `${delivery.progress}%`,
                                    height: '100%',
                                    backgroundColor: delivery.status === 'Delivered' ? 'var(--primary)' : delivery.status === 'In Transit' ? '#1D4ED8' : '#F59E0B',
                                    borderRadius: '4px',
                                    transition: 'width 1s ease-in-out'
                                }} />
                            </div>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)', fontSize: '13px', marginBottom: '16px' }}>
                            <MapPin size={14} />
                            <span>Destination: <strong>{delivery.destination}</strong></span>
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '16px', borderTop: '1px solid var(--border-color)' }}>
                            <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Last update: {delivery.lastUpdate}</span>
                            <button style={{ color: 'var(--primary)', fontWeight: 600, fontSize: '13px', display: 'flex', alignItems: 'center', gap: '4px', backgroundColor: 'transparent', border: 'none' }}>
                                Details <ChevronRight size={14} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TrackDeliveries;
