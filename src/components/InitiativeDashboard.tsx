// src/components/InitiativeDashboard.tsx

import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  LineChart, 
  Line, 
  BarChart, 
  Bar, 
  PieChart, 
  Pie, 
  Cell,
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer 
} from 'recharts';

// Mock data for the dashboard
const mockDashboardData = {
  progressData: [
    { month: 'T1', planned: 20, actual: 18 },
    { month: 'T2', planned: 40, actual: 35 },
    { month: 'T3', planned: 60, actual: 58 },
    { month: 'T4', planned: 80, actual: 75 },
    { month: 'T5', planned: 100, actual: 92 },
  ],
  kpiData: [
    { name: 'Hiệu quả', value: 85, color: '#00C49F' },
    { name: 'Chất lượng', value: 92, color: '#0088FE' },
    { name: 'Tiến độ', value: 78, color: '#FFBB28' },
    { name: 'Chi phí', value: 88, color: '#FF8042' },
  ],
  monthlyMetrics: [
    { month: 'T1', users: 120, transactions: 450, revenue: 1250000 },
    { month: 'T2', users: 180, transactions: 680, revenue: 1890000 },
    { month: 'T3', users: 250, transactions: 920, revenue: 2560000 },
    { month: 'T4', users: 320, transactions: 1150, revenue: 3240000 },
    { month: 'T5', users: 380, transactions: 1380, revenue: 3890000 },
  ]
};

const InitiativeDashboard: React.FC = () => {
  const { initiativeId } = useParams<{ initiativeId: string }>();
  const navigate = useNavigate();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Mock initiative data based on ID
  const getInitiativeData = (id: string) => {
    const initiatives = {
      '1': { name: 'Giải ngân online', status: 'Đang thực hiện' },
      '2': { name: 'iPay & eFast', status: 'Hoàn thành' },
      '3': { name: 'Tự động hoá quy trình BPM', status: 'Đang thực hiện' },
    };
    return initiatives[id as keyof typeof initiatives] || { name: 'Sáng kiến', status: 'Không xác định' };
  };

  const initiative = getInitiativeData(initiativeId || '1');

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <button
                onClick={() => navigate(-1)}
                className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 mb-4"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                <span>Quay lại</span>
              </button>
              <h1 className="text-3xl font-bold text-gray-900">Dashboard - {initiative.name}</h1>
              <p className="text-gray-600 mt-2">Theo dõi tiến độ và hiệu quả của sáng kiến</p>
            </div>
            <div className="text-right">
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                initiative.status === 'Hoàn thành' 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-blue-100 text-blue-800'
              }`}>
                {initiative.status}
              </span>
            </div>
          </div>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Progress Chart */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Tiến độ thực hiện</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={mockDashboardData.progressData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line 
                  type="monotone" 
                  dataKey="planned" 
                  stroke="#8884d8" 
                  strokeWidth={2}
                  name="Kế hoạch"
                />
                <Line 
                  type="monotone" 
                  dataKey="actual" 
                  stroke="#82ca9d" 
                  strokeWidth={2}
                  name="Thực tế"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* KPI Chart */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Chỉ số KPI</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={mockDashboardData.kpiData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${name}: ${value}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {mockDashboardData.kpiData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Monthly Metrics */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Chỉ số hàng tháng</h3>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={mockDashboardData.monthlyMetrics}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis yAxisId="left" />
              <YAxis yAxisId="right" orientation="right" />
              <Tooltip />
              <Legend />
              <Bar yAxisId="left" dataKey="users" fill="#8884d8" name="Người dùng" />
              <Bar yAxisId="left" dataKey="transactions" fill="#82ca9d" name="Giao dịch" />
              <Bar yAxisId="right" dataKey="revenue" fill="#ffc658" name="Doanh thu (VNĐ)" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center">
              <div className="p-2 bg-blue-100 rounded-lg">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Tổng người dùng</p>
                <p className="text-2xl font-semibold text-gray-900">380</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center">
              <div className="p-2 bg-green-100 rounded-lg">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Giao dịch thành công</p>
                <p className="text-2xl font-semibold text-gray-900">1,380</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center">
              <div className="p-2 bg-yellow-100 rounded-lg">
                <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Doanh thu</p>
                <p className="text-2xl font-semibold text-gray-900">3.89M</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center">
              <div className="p-2 bg-purple-100 rounded-lg">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Hiệu quả</p>
                <p className="text-2xl font-semibold text-gray-900">92%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InitiativeDashboard;
