import { useState } from 'react';
import { motion } from 'framer-motion';
import { HiOutlineDocumentText, HiOutlinePhotograph, HiOutlineBriefcase, HiOutlineAnnotation, HiOutlineInbox, HiOutlineLogout } from 'react-icons/hi';
import { Link, useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('projects');
  const navigate = useNavigate();

  const handleLogout = () => {
    // Implement logout logic here
    navigate('/');
  };

  const tabs = [
    { id: 'projects', label: 'Portfolio Projects', icon: <HiOutlineBriefcase className="text-xl" /> },
    { id: 'gallery', label: 'Gallery', icon: <HiOutlinePhotograph className="text-xl" /> },
    { id: 'services', label: 'Services', icon: <HiOutlineDocumentText className="text-xl" /> },
    { id: 'testimonials', label: 'Testimonials', icon: <HiOutlineAnnotation className="text-xl" /> },
    { id: 'blog', label: 'Blog Posts', icon: <HiOutlineDocumentText className="text-xl" /> },
    { id: 'messages', label: 'Contact Messages', icon: <HiOutlineInbox className="text-xl" /> },
  ];

  return (
    <div className="flex h-screen bg-primary-black text-warm-white">
      {/* Sidebar */}
      <div className="w-64 bg-secondary-black border-r border-charcoal flex flex-col h-full shrink-0">
        <div className="p-8 border-b border-charcoal">
          <Link to="/" className="text-xl font-heading tracking-widest uppercase">
            RIWAZ<span className="text-gold">.</span> ADMIN
          </Link>
          <p className="text-[10px] uppercase tracking-widest text-muted-purple mt-2">Dashboard</p>
        </div>

        <nav className="flex-1 p-4 overflow-y-auto space-y-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`w-full flex items-center gap-4 px-4 py-3 rounded-lg text-sm font-medium transition-colors duration-300 ${
                activeTab === tab.id 
                  ? 'bg-gold/10 text-gold' 
                  : 'text-muted-purple hover:bg-white/5 hover:text-warm-white'
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-charcoal">
          <button 
            onClick={handleLogout}
            className="w-full flex items-center gap-4 px-4 py-3 rounded-lg text-sm font-medium text-red-500/80 hover:bg-red-500/10 hover:text-red-500 transition-colors duration-300"
          >
            <HiOutlineLogout className="text-xl" />
            Logout
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col h-full overflow-hidden">
        <header className="h-20 border-b border-charcoal bg-primary-black/50 backdrop-blur-md flex items-center px-8 shrink-0">
          <h2 className="text-2xl font-heading capitalize text-gold">
            {tabs.find(t => t.id === activeTab)?.label}
          </h2>
        </header>
        
        <main className="flex-1 overflow-y-auto p-8">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-secondary-black border border-charcoal rounded-xl p-8 min-h-full shadow-2xl"
          >
            <div className="flex justify-between items-center mb-8 pb-4 border-b border-charcoal">
              <h3 className="text-xl font-heading">Manage {tabs.find(t => t.id === activeTab)?.label}</h3>
              <button className="px-4 py-2 bg-gold text-primary-black text-xs uppercase tracking-widest font-bold rounded-lg hover:bg-warm-white transition-colors duration-300">
                + Add New
              </button>
            </div>
            
            {/* Table placeholder */}
            <div className="w-full border border-charcoal rounded-lg overflow-hidden">
              <table className="w-full text-left text-sm text-muted-purple">
                <thead className="bg-charcoal/30 text-warm-white uppercase text-xs tracking-wider">
                  <tr>
                    <th className="px-6 py-4 font-medium">Title / Name</th>
                    <th className="px-6 py-4 font-medium">Status / Category</th>
                    <th className="px-6 py-4 font-medium text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-charcoal">
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="px-6 py-4 text-warm-white">Example Item 1</td>
                    <td className="px-6 py-4">Active</td>
                    <td className="px-6 py-4 text-right space-x-3">
                      <button className="text-gold hover:text-warm-white transition-colors">Edit</button>
                      <button className="text-red-500 hover:text-red-400 transition-colors">Delete</button>
                    </td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="px-6 py-4 text-warm-white">Example Item 2</td>
                    <td className="px-6 py-4">Draft</td>
                    <td className="px-6 py-4 text-right space-x-3">
                      <button className="text-gold hover:text-warm-white transition-colors">Edit</button>
                      <button className="text-red-500 hover:text-red-400 transition-colors">Delete</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.div>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
