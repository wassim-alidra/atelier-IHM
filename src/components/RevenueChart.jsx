import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'Jan', revenue: 450000 },
    { name: 'Feb', revenue: 620000 },
    { name: 'Mar', revenue: 850000 },
    { name: 'Apr', revenue: 780000 },
    { name: 'May', revenue: 950000 },
    { name: 'Jun', revenue: 1200000 },
    { name: 'Jul', revenue: 2450000 },
];

const RevenueChart = () => {
    return (
        <div className="premium-card" style={{ padding: '24px', height: '100%' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                <div>
                    <h3 style={{ fontSize: '16px', fontWeight: 600, color: 'var(--text-main)' }}>Revenue Overview</h3>
                    <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Monthly sales revenue in DA</p>
                </div>
                <select style={{
                    padding: '6px 12px',
                    borderRadius: '8px',
                    border: '1px solid var(--border-color)',
                    fontSize: '13px',
                    outline: 'none',
                    backgroundColor: '#FFFFFF',
                    color: 'var(--text-main)'
                }}>
                    <option>Last 7 Months</option>
                    <option>Last Year</option>
                </select>
            </div>

            <div style={{ width: '100%', height: '280px' }}>
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                        <defs>
                            <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="var(--primary)" stopOpacity={0.1} />
                                <stop offset="95%" stopColor="var(--primary)" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F1F5F9" />
                        <XAxis
                            dataKey="name"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: 'var(--text-muted)', fontSize: 12 }}
                            dy={10}
                        />
                        <YAxis
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: 'var(--text-muted)', fontSize: 12 }}
                            tickFormatter={(value) => `${value / 1000}k`}
                        />
                        <Tooltip
                            contentStyle={{
                                borderRadius: '12px',
                                border: 'none',
                                boxShadow: 'var(--shadow-hover)',
                                fontSize: '13px'
                            }}
                            formatter={(value) => [`${value.toLocaleString()} DA`, 'Revenue']}
                        />
                        <Area
                            type="monotone"
                            dataKey="revenue"
                            stroke="var(--primary)"
                            strokeWidth={3}
                            fillOpacity={1}
                            fill="url(#colorRevenue)"
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default RevenueChart;
