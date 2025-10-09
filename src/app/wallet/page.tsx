'use client';

import { useState } from 'react';
import { FaCoins, FaHistory, FaCreditCard } from 'react-icons/fa';
import Link from 'next/link';
import PaymentModal from '@/components/PaymentModal';

export default function WalletPage() {
  // Mock user data - would come from authentication context in a real app
  const [user, setUser] = useState({
    username: 'TestUser',
    coinBalance: 15,
  });

  // Mock transaction history
  const [transactions, setTransactions] = useState([
    { id: '1', type: 'topup', amount: 1000, coins: 10, date: '2023-05-15' },
    { id: '2', type: 'unlock', amount: 0, coins: -5, profileName: 'Amaka', date: '2023-05-16' },
  ]);

  // Mock coin packages
  const coinPackages = [
    { id: '1', coins: 10, price: 1000, name: 'Basic' },
    { id: '2', coins: 25, price: 2000, name: 'Standard', discount: '20% off' },
    { id: '3', coins: 50, price: 3500, name: 'Premium', discount: '30% off' },
  ];

  // Payment modal state
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(coinPackages[0]);

  const handleBuyCoins = (packageId: string) => {
    const pkg = coinPackages.find(p => p.id === packageId);
    if (pkg) {
      setSelectedPackage(pkg);
      setIsPaymentModalOpen(true);
    }
  };
  
  const handlePaymentSuccess = (transactionId: string) => {
    // Update user balance
    setUser(prev => ({
      ...prev,
      coinBalance: prev.coinBalance + selectedPackage.coins
    }));
    
    // Add transaction to history
    setTransactions(prev => [
      {
        id: transactionId,
        type: 'topup',
        amount: selectedPackage.price,
        coins: selectedPackage.coins,
        date: new Date().toISOString().split('T')[0]
      },
      ...prev
    ]);
    
    setIsPaymentModalOpen(false);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-[#FF8C00] mb-6">My Wallet</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Coin Balance Card */}
        <div className="card p-6">
          <div className="flex items-center mb-4">
            <FaCoins className="text-[#D4AF37] text-2xl mr-3" />
            <h2 className="text-xl font-bold">Coin Balance</h2>
          </div>
          <div className="text-4xl font-bold text-center my-6 text-[#FF8C00]">
            {user.coinBalance}
          </div>
          <p className="text-gray-600 text-center mb-4">
            Use your coins to unlock WhatsApp numbers
          </p>
        </div>
        
        {/* Buy Coins Card */}
        <div className="card p-6 md:col-span-2">
          <div className="flex items-center mb-4">
            <FaCreditCard className="text-[#D4AF37] text-2xl mr-3" />
            <h2 className="text-xl font-bold">Buy Coins</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            {coinPackages.map(pkg => (
              <div key={pkg.id} className="border rounded-lg p-4 text-center hover:shadow-md transition-shadow">
                <h3 className="font-bold text-lg">{pkg.name}</h3>
                <div className="text-3xl font-bold my-2 text-[#FF8C00]">{pkg.coins}</div>
                <p className="text-sm text-gray-600 mb-1">coins</p>
                <div className="font-bold mb-2">₦{pkg.price}</div>
                {pkg.discount && (
                  <div className="text-xs text-green-600 mb-3">{pkg.discount}</div>
                )}
                <button 
                  onClick={() => handleBuyCoins(pkg.id)}
                  className="btn-primary w-full"
                >
                  Buy Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Transaction History */}
      <div className="mt-8">
        <div className="flex items-center mb-4">
          <FaHistory className="text-[#D4AF37] text-xl mr-3" />
          <h2 className="text-xl font-bold">Transaction History</h2>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full bg-white rounded-lg overflow-hidden shadow">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-3 px-4 text-left">Date</th>
                <th className="py-3 px-4 text-left">Type</th>
                <th className="py-3 px-4 text-left">Details</th>
                <th className="py-3 px-4 text-right">Amount</th>
                <th className="py-3 px-4 text-right">Coins</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map(tx => (
                <tr key={tx.id} className="border-t">
                  <td className="py-3 px-4">{tx.date}</td>
                  <td className="py-3 px-4 capitalize">{tx.type}</td>
                  <td className="py-3 px-4">
                    {tx.type === 'topup' ? 'Coin Purchase' : `Unlocked ${tx.profileName}`}
                  </td>
                  <td className="py-3 px-4 text-right">
                    {tx.amount > 0 ? `₦${tx.amount}` : '-'}
                  </td>
                  <td className={`py-3 px-4 text-right ${tx.coins > 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {tx.coins > 0 ? `+${tx.coins}` : tx.coins}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      {/* Payment Modal */}
      <PaymentModal 
        isOpen={isPaymentModalOpen}
        onClose={() => setIsPaymentModalOpen(false)}
        packageDetails={selectedPackage}
        onSuccess={handlePaymentSuccess}
      />
    </div>
  );
}