import React from 'react';
import { BarChart3, TrendingUp, TrendingDown, Users, ShoppingBag, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';

const salesData = [
    { name: 'Week 1', sales: 420000 },
    { name: 'Week 2', sales: 380000 },
    { name: 'Week 3', sales: 512000 },
    { name: 'Week 4', sales: 620000 },
];

const categoryData = [
    { name: 'Vegetables', value: 400 },
    { name: 'Fruits', value: 300 },
    { name: 'Grains', value: 200 },
    { name: 'Oils', value: 100 },
];

const COLORS = ['#2F6F4E', '#4C9A6A', '#81C784', '#C8E6C9'];

const Statistics = () => {
    return (
        <div style={{ animation: 'fadeIn 0.5s ease-out' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
                <div>
                    <h2 style={{ fontSize: '24px', fontWeight: 700, color: 'var(--text-main)', marginBottom: '4px' }}>Statistics & Analytics</h2>
                    <p style={{ fontSize: '15px', color: 'var(--text-muted)' }}>Deep dive into your farm's performance and market trends.</p>
                </div>
                <select style={{ padding: '10px 16px', borderRadius: '12px', border: '1px solid var(--border-color)', backgroundColor: '#FFFFFF', fontWeight: 500 }}>
                    <option>Year 2026</option>
                    <option>Year 2025</option>
                </select>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '24px' }}>
                <div className="premium-card" style={{ padding: '24px' }}>
                    <h3 style={{ fontSize: '16px', fontWeight: 600, color: 'var(--text-main)', marginBottom: '20px' }}>Weekly Sales Performance (DA)</h3>
                    <div style={{ width: '100%', height: '300px' }}>
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={salesData}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} />
                                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} tickFormatter={(val) => `${val / 1000}k`} />
                                <Tooltip cursor={{ fill: '#f8fafc' }} contentStyle={{ borderRadius: '10px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} />
                                <Bar dataKey="sales" fill="var(--primary)" radius={[4, 4, 0, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                <div className="premium-card" style={{ padding: '24px' }}>
                    <h3 style={{ fontSize: '16px', fontWeight: 600, color: 'var(--text-main)', marginBottom: '20px' }}>Sales by Category</h3>
                    <div style={{ width: '100%', height: '300px', display: 'flex', alignItems: 'center' }}>
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={categoryData}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={60}
                                    outerRadius={100}
                                    paddingAngle={5}
                                    dataKey="value"
                                >
                                    {categoryData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                                <Tooltip />
                            </PieChart>
                        </ResponsiveContainer>
                        <div style={{ width: '150px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            {categoryData.map((entry, index) => (
                                <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <div style={{ width: '12px', height: '12px', borderRadius: '3px', backgroundColor: COLORS[index] }} />
                                    <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>{entry.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }}>
                {[
                    { label: 'Customer Growth', value: '+18%', icon: Users, trend: 'up' },
                    { label: 'Market Share', value: '4.2%', icon: BarChart3, trend: 'up' },
                    { label: 'Order Failure', value: '0.8%', icon: ShoppingBag, trend: 'down' },
                    { label: 'Product Reach', value: '8.5k', icon: TrendingUp, trend: 'up' },
                ].map((stat, i) => (
                    <div key={i} className="premium-card" style={{ padding: '20px', borderLeft: `4px solid ${stat.trend === 'up' ? 'var(--primary)' : '#EF4444'}` }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                            <div style={{ color: 'var(--text-muted)' }}><stat.icon size={20} /></div>
                            <div style={{
                                color: stat.trend === 'up' ? '#15803D' : '#B91C1C',
                                fontSize: '12px',
                                fontWeight: 700,
                                display: 'flex',
                                alignItems: 'center'
                            }}>
                                {stat.trend === 'up' ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />} {stat.trend === 'up' ? 'Increase' : 'Decrease'}
                            </div>
                        </div>
                        <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '4px' }}>{stat.label}</p>
                        <h4 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--text-main)' }}>{stat.value}</h4>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Statistics;
