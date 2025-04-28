import React from 'react';
import { Users, Briefcase, BarChart, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const Dashboard: React.FC = () => {
  // Mock data for the dashboard stats
  const stats = [
    { title: 'Total Clients', value: '52', icon: <Users size={24} className="text-primary-600" />, change: '+12%', changeType: 'positive' },
    { title: 'Active Projects', value: '34', icon: <Briefcase size={24} className="text-secondary-600" />, change: '+5%', changeType: 'positive' },
    { title: 'Pending Tasks', value: '18', icon: <Calendar size={24} className="text-accent-600" />, change: '-3%', changeType: 'negative' },
    { title: 'Revenue', value: '$48,300', icon: <BarChart size={24} className="text-green-600" />, change: '+8%', changeType: 'positive' },
  ];

  // Mock data for recent activities
  const recentActivities = [
    { id: 1, action: 'New client onboarded', client: 'Tech Solutions Ltd', date: '2 hours ago' },
    { id: 2, action: 'Completed payroll processing', client: 'Global Finance Inc', date: '4 hours ago' },
    { id: 3, action: 'Updated HR policy', client: 'Creative Studios', date: '1 day ago' },
    { id: 4, action: 'New candidate shortlisted', client: 'Retail Ventures', date: '1 day ago' },
    { id: 5, action: 'Training session conducted', client: 'Healthcare Providers', date: '2 days ago' },
  ];

  return (
    <div className="py-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Welcome to your Dashboard</h2>
        <p className="text-gray-600">Here's what's happening with your clients today.</p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-gray-500 text-sm font-medium">{stat.title}</p>
                <p className="text-2xl font-bold text-gray-800 mt-1">{stat.value}</p>
              </div>
              <div className="p-2 rounded-md bg-gray-50">{stat.icon}</div>
            </div>
            <div className={`mt-4 text-sm font-medium ${
              stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
            }`}>
              {stat.change} from last month
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activities */}
        <div className="lg:col-span-2 bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-bold text-gray-800 mb-4">Recent Activities</h3>
          <div className="divide-y divide-gray-200">
            {recentActivities.map((activity) => (
              <div key={activity.id} className="py-4">
                <p className="font-medium text-gray-800">{activity.action}</p>
                <div className="flex justify-between mt-1">
                  <p className="text-sm text-gray-600">{activity.client}</p>
                  <p className="text-sm text-gray-500">{activity.date}</p>
                </div>
              </div>
            ))}
          </div>
          <button className="mt-4 text-primary-600 hover:text-primary-700 font-medium text-sm">
            View All Activities
          </button>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-bold text-gray-800 mb-4">Quick Actions</h3>
          <div className="space-y-3">
            <button className="w-full py-3 bg-primary-50 text-primary-600 font-medium rounded-md hover:bg-primary-100 transition-colors text-left px-4">
              Add New Client
            </button>
            <button className="w-full py-3 bg-secondary-50 text-secondary-600 font-medium rounded-md hover:bg-secondary-100 transition-colors text-left px-4">
              Create Invoice
            </button>
            <button className="w-full py-3 bg-accent-50 text-accent-600 font-medium rounded-md hover:bg-accent-100 transition-colors text-left px-4">
              Schedule Meeting
            </button>
            <Link 
              to="/admin/careers" 
              className="block w-full py-3 bg-green-50 text-green-600 font-medium rounded-md hover:bg-green-100 transition-colors text-left px-4"
            >
              Post Job Opening
            </Link>
            <button className="w-full py-3 bg-gray-50 text-gray-600 font-medium rounded-md hover:bg-gray-100 transition-colors text-left px-4">
              Generate Report
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;