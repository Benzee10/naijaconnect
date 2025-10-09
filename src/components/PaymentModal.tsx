'use client';

import { useState } from 'react';
import { FaCoins, FaTimes, FaCreditCard } from 'react-icons/fa';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  packageDetails: {
    id: string;
    name: string;
    coins: number;
    price: number;
  };
  onSuccess: (transactionId: string) => void;
}

const PaymentModal = ({ isOpen, onClose, packageDetails, onSuccess }: PaymentModalProps) => {
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'bank'>('card');
  const [isProcessing, setIsProcessing] = useState(false);
  
  if (!isOpen) return null;

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      // In a real app, this would integrate with Paystack or Flutterwave
      const mockTransactionId = `tx-${Date.now()}`;
      setIsProcessing(false);
      onSuccess(mockTransactionId);
    }, 2000);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-md p-6 relative">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          disabled={isProcessing}
        >
          <FaTimes />
        </button>
        
        <div className="text-center mb-6">
          <div className="inline-block p-3 bg-[#FFFAF0] rounded-full mb-2">
            <FaCoins className="text-[#D4AF37] text-2xl" />
          </div>
          <h2 className="text-2xl font-bold">Buy Coins</h2>
        </div>
        
        <div className="bg-[#FFFAF0] p-4 rounded-lg mb-6">
          <div className="flex justify-between mb-2">
            <span>Package:</span>
            <span className="font-bold">{packageDetails.name}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Coins:</span>
            <span className="font-bold text-[#FF8C00]">{packageDetails.coins}</span>
          </div>
          <div className="flex justify-between">
            <span>Price:</span>
            <span className="font-bold">₦{packageDetails.price}</span>
          </div>
        </div>
        
        <div className="mb-6">
          <div className="flex border rounded-lg overflow-hidden">
            <button
              className={`flex-1 py-2 ${paymentMethod === 'card' ? 'bg-[#FF8C00] text-white' : 'bg-gray-100'}`}
              onClick={() => setPaymentMethod('card')}
              disabled={isProcessing}
            >
              Card Payment
            </button>
            <button
              className={`flex-1 py-2 ${paymentMethod === 'bank' ? 'bg-[#FF8C00] text-white' : 'bg-gray-100'}`}
              onClick={() => setPaymentMethod('bank')}
              disabled={isProcessing}
            >
              Bank Transfer
            </button>
          </div>
        </div>
        
        <form onSubmit={handlePayment}>
          {paymentMethod === 'card' && (
            <>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Card Number</label>
                <div className="relative">
                  <input
                    type="text"
                    className="w-full p-3 border rounded-lg"
                    placeholder="1234 5678 9012 3456"
                    disabled={isProcessing}
                  />
                  <FaCreditCard className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-gray-700 mb-2">Expiry Date</label>
                  <input
                    type="text"
                    className="w-full p-3 border rounded-lg"
                    placeholder="MM/YY"
                    disabled={isProcessing}
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">CVV</label>
                  <input
                    type="text"
                    className="w-full p-3 border rounded-lg"
                    placeholder="123"
                    disabled={isProcessing}
                  />
                </div>
              </div>
            </>
          )}
          
          {paymentMethod === 'bank' && (
            <div className="bg-gray-100 p-4 rounded-lg mb-4">
              <p className="font-bold mb-2">Bank Transfer Details:</p>
              <p>Bank: First Bank</p>
              <p>Account Number: 1234567890</p>
              <p>Account Name: NaijaConnect Ltd</p>
              <p className="text-sm text-gray-600 mt-2">
                Please use your email as reference when making the transfer
              </p>
            </div>
          )}
          
          <button
            type="submit"
            className="btn-primary w-full"
            disabled={isProcessing}
          >
            {isProcessing ? 'Processing...' : `Pay ₦${packageDetails.price}`}
          </button>
        </form>
      </div>
    </div>
  );
};

export default PaymentModal;