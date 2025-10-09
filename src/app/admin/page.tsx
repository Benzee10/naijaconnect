'use client';

import { useState } from 'react';
import { FaUsers, FaCoins, FaUserShield, FaSearch, FaEdit, FaTrash, FaCheck, FaTimes } from 'react-icons/fa';

export default function AdminDashboard() {
  // Mock profiles data
  const [profiles, setProfiles] = useState([
    { id: '1', name: 'Amaka Johnson', age: 28, location: 'Lagos', status: 'active', registeredDate: '2023-04-15', whatsappNumber: '+2348012345678' },
    { id: '2', name: 'Chisom Obi', age: 24, location: 'Abuja', status: 'pending', registeredDate: '2023-05-02', whatsappNumber: '+2349087654321' },
    { id: '3', name: 'Emeka Nwosu', age: 30, location: 'Port Harcourt', status: 'active', registeredDate: '2023-03-22', whatsappNumber: '+2347023456789' },
    { id: '4', name: 'Blessing Adeyemi', age: 26, location: 'Ibadan', status: 'suspended', registeredDate: '2023-04-30', whatsappNumber: '+2348134567890' },
    { id: '5', name: 'Tunde Bakare', age: 32, location: 'Kano', status: 'active', registeredDate: '2023-05-10', whatsappNumber: '+2349076543210' },
  ]);

  // Stats
  const stats = {
    totalUsers: 1250,
    activeProfiles: 876,
    pendingProfiles: 124,
    totalCoins: 15600,
  };

  // Filter state
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Edit profile state
  const [editingProfile, setEditingProfile] = useState<string | null>(null);
  const [editFormData, setEditFormData] = useState({
    name: '',
    age: '',
    location: '',
    whatsappNumber: '',
    status: '',
  });

  // Handle profile status change
  const handleStatusChange = (profileId: string, newStatus: string) => {
    setProfiles(profiles.map(profile => 
      profile.id === profileId ? { ...profile, status: newStatus } : profile
    ));
  };

  // Handle profile deletion
  const handleDeleteProfile = (profileId: string) => {
    if (confirm('Are you sure you want to delete this profile?')) {
      setProfiles(profiles.filter(profile => profile.id !== profileId));
    }
  };

  // Handle edit mode
  const handleEditClick = (profile: any) => {
    setEditingProfile(profile.id);
    setEditFormData({
      name: profile.name,
      age: profile.age.toString(),
      location: profile.location,
      whatsappNumber: profile.whatsappNumber,
      status: profile.status,
    });
  };

  // Handle form input change
  const handleEditFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setEditFormData({
      ...editFormData,
      [name]: value,
    });
  };

  // Handle save edit
  const handleSaveEdit = (profileId: string) => {
    setProfiles(profiles.map(profile => 
      profile.id === profileId ? { 
        ...profile, 
        name: editFormData.name,
        age: parseInt(editFormData.age),
        location: editFormData.location,
        whatsappNumber: editFormData.whatsappNumber,
        status: editFormData.status,
      } : profile
    ));
    setEditingProfile(null);
  };

  // Filter profiles based on status and search term
  const filteredProfiles = profiles.filter(profile => {
    const matchesFilter = filter === 'all' || profile.status === filter;
    const matchesSearch = profile.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         profile.location.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-[#FF8C00] mb-6">Admin Dashboard</h1>
      
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="card p-4 flex items-center">
          <div className="bg-[#FFFAF0] p-3 rounded-full mr-4">
            <FaUsers className="text-[#FF8C00] text-xl" />
          </div>
          <div>
            <p className="text-gray-600">Total Users</p>
            <p className="text-2xl font-bold">{stats.totalUsers}</p>
          </div>
        </div>
        
        <div className="card p-4 flex items-center">
          <div className="bg-[#FFFAF0] p-3 rounded-full mr-4">
            <FaUserShield className="text-green-600 text-xl" />
          </div>
          <div>
            <p className="text-gray-600">Active Profiles</p>
            <p className="text-2xl font-bold">{stats.activeProfiles}</p>
          </div>
        </div>
        
        <div className="card p-4 flex items-center">
          <div className="bg-[#FFFAF0] p-3 rounded-full mr-4">
            <FaUserShield className="text-yellow-500 text-xl" />
          </div>
          <div>
            <p className="text-gray-600">Pending Profiles</p>
            <p className="text-2xl font-bold">{stats.pendingProfiles}</p>
          </div>
        </div>
        
        <div className="card p-4 flex items-center">
          <div className="bg-[#FFFAF0] p-3 rounded-full mr-4">
            <FaCoins className="text-[#D4AF37] text-xl" />
          </div>
          <div>
            <p className="text-gray-600">Total Coins</p>
            <p className="text-2xl font-bold">{stats.totalCoins}</p>
          </div>
        </div>
      </div>
      
      {/* Filters and Search */}
      <div className="flex flex-col md:flex-row justify-between mb-6">
        <div className="flex space-x-2 mb-4 md:mb-0">
          <button 
            className={`px-4 py-2 rounded-lg ${filter === 'all' ? 'bg-[#FF8C00] text-white' : 'bg-gray-100'}`}
            onClick={() => setFilter('all')}
          >
            All
          </button>
          <button 
            className={`px-4 py-2 rounded-lg ${filter === 'active' ? 'bg-[#FF8C00] text-white' : 'bg-gray-100'}`}
            onClick={() => setFilter('active')}
          >
            Active
          </button>
          <button 
            className={`px-4 py-2 rounded-lg ${filter === 'pending' ? 'bg-[#FF8C00] text-white' : 'bg-gray-100'}`}
            onClick={() => setFilter('pending')}
          >
            Pending
          </button>
          <button 
            className={`px-4 py-2 rounded-lg ${filter === 'suspended' ? 'bg-[#FF8C00] text-white' : 'bg-gray-100'}`}
            onClick={() => setFilter('suspended')}
          >
            Suspended
          </button>
        </div>
        
        <div className="relative">
          <input
            type="text"
            placeholder="Search profiles..."
            className="pl-10 pr-4 py-2 border rounded-lg w-full md:w-64"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
      </div>
      
      {/* Profiles Table */}
      <div className="overflow-x-auto">
        <table className="w-full bg-white rounded-lg overflow-hidden shadow">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-3 px-4 text-left">Name</th>
              <th className="py-3 px-4 text-left">Age</th>
              <th className="py-3 px-4 text-left">Location</th>
              <th className="py-3 px-4 text-left">WhatsApp</th>
              <th className="py-3 px-4 text-left">Status</th>
              <th className="py-3 px-4 text-left">Registered</th>
              <th className="py-3 px-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredProfiles.map(profile => (
              <tr key={profile.id} className="border-t">
                {editingProfile === profile.id ? (
                  // Edit mode
                  <>
                    <td className="py-3 px-4">
                      <input
                        type="text"
                        name="name"
                        value={editFormData.name}
                        onChange={handleEditFormChange}
                        className="w-full p-1 border rounded"
                      />
                    </td>
                    <td className="py-3 px-4">
                      <input
                        type="number"
                        name="age"
                        value={editFormData.age}
                        onChange={handleEditFormChange}
                        className="w-full p-1 border rounded"
                      />
                    </td>
                    <td className="py-3 px-4">
                      <input
                        type="text"
                        name="location"
                        value={editFormData.location}
                        onChange={handleEditFormChange}
                        className="w-full p-1 border rounded"
                      />
                    </td>
                    <td className="py-3 px-4">
                      <input
                        type="text"
                        name="whatsappNumber"
                        value={editFormData.whatsappNumber}
                        onChange={handleEditFormChange}
                        className="w-full p-1 border rounded"
                      />
                    </td>
                    <td className="py-3 px-4">
                      <select
                        name="status"
                        value={editFormData.status}
                        onChange={handleEditFormChange}
                        className="w-full p-1 border rounded"
                      >
                        <option value="active">Active</option>
                        <option value="pending">Pending</option>
                        <option value="suspended">Suspended</option>
                      </select>
                    </td>
                    <td className="py-3 px-4">{profile.registeredDate}</td>
                    <td className="py-3 px-4 text-right">
                      <button 
                        onClick={() => handleSaveEdit(profile.id)}
                        className="text-green-600 hover:text-green-800 mr-2"
                      >
                        <FaCheck />
                      </button>
                      <button 
                        onClick={() => setEditingProfile(null)}
                        className="text-red-600 hover:text-red-800"
                      >
                        <FaTimes />
                      </button>
                    </td>
                  </>
                ) : (
                  // View mode
                  <>
                    <td className="py-3 px-4">{profile.name}</td>
                    <td className="py-3 px-4">{profile.age}</td>
                    <td className="py-3 px-4">{profile.location}</td>
                    <td className="py-3 px-4">{profile.whatsappNumber}</td>
                    <td className="py-3 px-4">
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        profile.status === 'active' ? 'bg-green-100 text-green-800' :
                        profile.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {profile.status}
                      </span>
                    </td>
                    <td className="py-3 px-4">{profile.registeredDate}</td>
                    <td className="py-3 px-4 text-right">
                      <button 
                        onClick={() => handleEditClick(profile)}
                        className="text-blue-600 hover:text-blue-800 mr-2"
                      >
                        <FaEdit />
                      </button>
                      <button 
                        onClick={() => handleDeleteProfile(profile.id)}
                        className="text-red-600 hover:text-red-800"
                      >
                        <FaTrash />
                      </button>
                    </td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}