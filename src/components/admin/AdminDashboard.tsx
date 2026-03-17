import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { LogOut, Plus, Edit, Trash2, LayoutDashboard, FileText, Image as ImageIcon, Users, Settings, Briefcase, Map, FileDown } from 'lucide-react';
import { api } from '../../lib/api';
import NewsEditor from './NewsEditor';
import CarouselManager from './CarouselManager';
import AdminUsersManager from './AdminUsersManager';
import SettingsManager from './SettingsManager';
import ResourcesManager from './ResourcesManager';
import PartnersManager from './PartnersManager';
import ProvincesManager from './ProvincesManager';
import ThematicAreasManager from './ThematicAreasManager';

export default function AdminDashboard() {
  const { user, isAdmin, login, logout } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    try {
      await login(email, password);
    } catch (err) {
      setError('Invalid email or password');
    }
  };

  if (!user || !isAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Admin Login</h2>
          <form onSubmit={handleLogin} className="space-y-4 text-left">
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <div>
              <label className="block text-sm font-medium text-slate-700">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-xl text-white bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              Sign in
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-slate-200 flex flex-col">
        <div className="p-6 border-b border-slate-200">
          <h1 className="text-xl font-bold text-slate-900">CAPA Admin</h1>
        </div>
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          <Link to="/admin" className="flex items-center px-4 py-3 text-slate-700 hover:bg-slate-50 rounded-xl transition-colors">
            <LayoutDashboard className="w-5 h-5 mr-3" />
            Dashboard
          </Link>
          <Link to="/admin/settings" className="flex items-center px-4 py-3 text-slate-700 hover:bg-slate-50 rounded-xl transition-colors">
            <Settings className="w-5 h-5 mr-3" />
            Global Settings
          </Link>
          <Link to="/admin/news" className="flex items-center px-4 py-3 text-slate-700 hover:bg-slate-50 rounded-xl transition-colors">
            <FileText className="w-5 h-5 mr-3" />
            Manage News
          </Link>
          <Link to="/admin/carousel" className="flex items-center px-4 py-3 text-slate-700 hover:bg-slate-50 rounded-xl transition-colors">
            <ImageIcon className="w-5 h-5 mr-3" />
            Manage Carousel
          </Link>
          <Link to="/admin/resources" className="flex items-center px-4 py-3 text-slate-700 hover:bg-slate-50 rounded-xl transition-colors">
            <FileDown className="w-5 h-5 mr-3" />
            Publications & Docs
          </Link>
          <Link to="/admin/partners" className="flex items-center px-4 py-3 text-slate-700 hover:bg-slate-50 rounded-xl transition-colors">
            <Briefcase className="w-5 h-5 mr-3" />
            Manage Partners
          </Link>
          <Link to="/admin/provinces" className="flex items-center px-4 py-3 text-slate-700 hover:bg-slate-50 rounded-xl transition-colors">
            <Map className="w-5 h-5 mr-3" />
            Manage Provinces
          </Link>
          <Link to="/admin/thematic-areas" className="flex items-center px-4 py-3 text-slate-700 hover:bg-slate-50 rounded-xl transition-colors">
            <LayoutDashboard className="w-5 h-5 mr-3" />
            Thematic Areas
          </Link>
          <Link to="/admin/users" className="flex items-center px-4 py-3 text-slate-700 hover:bg-slate-50 rounded-xl transition-colors">
            <Users className="w-5 h-5 mr-3" />
            Admin Users
          </Link>
        </nav>
        <div className="p-4 border-t border-slate-200">
          <div className="flex items-center mb-4 px-4">
            <div className="w-8 h-8 rounded-full mr-3 bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
              {user.email.charAt(0).toUpperCase()}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-slate-900 truncate">Admin User</p>
              <p className="text-xs text-slate-500 truncate">{user.email}</p>
            </div>
          </div>
          <button
            onClick={() => {
              logout();
              navigate('/');
            }}
            className="w-full flex items-center px-4 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg transition-colors"
          >
            <LogOut className="w-4 h-4 mr-2" />
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <div className="p-8">
          <Routes>
            <Route path="/" element={<DashboardHome />} />
            <Route path="/settings" element={<SettingsManager />} />
            <Route path="/news" element={<NewsList />} />
            <Route path="/news/new" element={<NewsEditor />} />
            <Route path="/news/edit/:id" element={<NewsEditor />} />
            <Route path="/carousel" element={<CarouselManager />} />
            <Route path="/resources" element={<ResourcesManager />} />
            <Route path="/partners" element={<PartnersManager />} />
            <Route path="/provinces" element={<ProvincesManager />} />
            <Route path="/thematic-areas" element={<ThematicAreasManager />} />
            <Route path="/users" element={<AdminUsersManager />} />
          </Routes>
        </div>
      </main>
    </div>
  );
}

function DashboardHome() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-slate-900 mb-6">Welcome to the Admin Dashboard</h2>
      <p className="text-slate-600">Select an option from the sidebar to manage website content.</p>
    </div>
  );
}

function NewsList() {
  const [news, setNews] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const data = await api.get('/news');
        setNews(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchNews();
  }, []);

  const handleDelete = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this article?')) {
      try {
        await api.delete(`/news/${id}`);
        setNews(news.filter(n => n.id !== id));
      } catch (error) {
        console.error('Error deleting document: ', error);
        alert('Failed to delete article.');
      }
    }
  };

  if (loading) return <div>Loading news...</div>;

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-slate-900">Manage News</h2>
        <Link
          to="/admin/news/new"
          className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Plus className="w-4 h-4 mr-2" />
          Add Article
        </Link>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <table className="min-w-full divide-y divide-slate-200">
          <thead className="bg-slate-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Title</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Category</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Date</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-slate-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-slate-200">
            {news.map((item) => (
              <tr key={item.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-slate-900">{item.title}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                    {item.category}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">
                  {item.date}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <Link to={`/admin/news/edit/${item.id}`} className="text-indigo-600 hover:text-indigo-900 mr-4">
                    <Edit className="w-4 h-4 inline" />
                  </Link>
                  <button onClick={() => handleDelete(item.id)} className="text-red-600 hover:text-red-900">
                    <Trash2 className="w-4 h-4 inline" />
                  </button>
                </td>
              </tr>
            ))}
            {news.length === 0 && (
              <tr>
                <td colSpan={4} className="px-6 py-4 text-center text-slate-500">
                  No news articles found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
