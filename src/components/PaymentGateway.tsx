import React, { useState } from 'react';

const PaymentGateway: React.FC = () => {
  const [paymentData, setPaymentData] = useState({
    name: '',
    email: '',
    phone: '',
    amount: '',
    purpose: 'donation',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setPaymentData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically redirect to payment gateway
    console.log('Payment initiated:', paymentData);
    alert('पेमेंट प्रक्रिया सुरू झाली आहे. कृपया थांबा...');
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-6 text-primary-700">ऑनलाइन पेमेंट</h2>
      
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-medium mb-2">नाव *</label>
          <input
            type="text"
            id="name"
            name="name"
            value={paymentData.name}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-medium mb-2">ईमेल *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={paymentData.email}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">फोन नंबर *</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={paymentData.phone}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="amount" className="block text-gray-700 font-medium mb-2">रक्कम (₹) *</label>
          <input
            type="number"
            id="amount"
            name="amount"
            value={paymentData.amount}
            onChange={handleChange}
            required
            min="1"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
        </div>
        
        <div className="mb-6">
          <label htmlFor="purpose" className="block text-gray-700 font-medium mb-2">उद्देश *</label>
          <select
            id="purpose"
            name="purpose"
            value={paymentData.purpose}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
          >
            <option value="donation">देणगी</option>
            <option value="membership">सभासद शुल्क</option>
            <option value="event">कार्यक्रम शुल्क</option>
            <option value="other">इतर</option>
          </select>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 mb-4">
          <button 
            type="submit" 
            className="flex-1 bg-[#4CAF50] text-white py-3 rounded-md font-medium transition hover:bg-[#45a049] focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          >
            UPI द्वारे पेमेंट करा
          </button>
          
          <button 
            type="submit"
            className="flex-1 bg-[#3B71CA] text-white py-3 rounded-md font-medium transition hover:bg-[#2C5BA9] focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            क्रेडिट/डेबिट कार्ड
          </button>
        </div>
        
        <div className="text-center text-sm text-gray-600 mt-4">
          <p>* सर्व पेमेंट सुरक्षित आहेत</p>
          <div className="flex justify-center items-center mt-2 space-x-2">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/UPI-Logo-vector.svg/1200px-UPI-Logo-vector.svg.png" alt="UPI" className="h-6" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/800px-Mastercard-logo.svg.png" alt="Mastercard" className="h-6" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/1200px-Visa_Inc._logo.svg.png" alt="Visa" className="h-6" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/RuPay.svg/1200px-RuPay.svg.png" alt="RuPay" className="h-6" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default PaymentGateway;