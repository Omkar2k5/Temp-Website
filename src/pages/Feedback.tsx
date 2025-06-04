import React, { useState } from 'react';
import { saveFeedbackData } from '../utils/storage';

const Feedback: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    feedbackType: '',
    message: '',
    rating: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Save data to localStorage
      const entryId = saveFeedbackData(formData);
      console.log('Feedback data saved with ID:', entryId);

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        feedbackType: '',
        message: '',
        rating: '',
      });

      alert('अभिप्राय यशस्वीरित्या सबमिट केला! तुमचा अभिप्राय आम्हाला मिळाला आहे.');
    } catch (error) {
      console.error('Error saving feedback data:', error);
      alert('अभिप्राय सबमिट करताना त्रुटी आली. कृपया पुन्हा प्रयत्न करा.');
    }
  };

  return (
    <div className="py-10 bg-gray-50 min-h-screen">
      <div className="container-custom">
        <h1 className="text-3xl font-bold mb-2 text-primary-700">अभिप्राय</h1>
        <p className="mb-8 text-gray-600">
          आम्हाला आपला अभिप्राय द्या. आपला अभिप्राय आमच्यासाठी महत्त्वाचा आहे.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold mb-6 text-primary-700">अभिप्राय फॉर्म</h2>
              
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">नाव *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
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
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">फोन नंबर</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="feedbackType" className="block text-gray-700 font-medium mb-2">अभिप्राय प्रकार *</label>
                <select
                  id="feedbackType"
                  name="feedbackType"
                  value={formData.feedbackType}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  <option value="">प्रकार निवडा</option>
                  <option value="general">सामान्य</option>
                  <option value="suggestion">सूचना</option>
                  <option value="complaint">तक्रार</option>
                  <option value="appreciation">कौतुक</option>
                  <option value="other">इतर</option>
                </select>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">अभिप्राय संदेश *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                ></textarea>
              </div>
              
              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">आमच्या सेवांचे मूल्यांकन *</label>
                <div className="flex space-x-4">
                  {[1, 2, 3, 4, 5].map((rating) => (
                    <label key={rating} className="flex items-center">
                      <input
                        type="radio"
                        name="rating"
                        value={rating}
                        checked={formData.rating === rating.toString()}
                        onChange={handleChange}
                        required
                        className="mr-1"
                      />
                      <span>{rating}</span>
                    </label>
                  ))}
                </div>
                <div className="flex justify-between text-xs text-gray-600 mt-1">
                  <span>अत्यंत कमी</span>
                  <span>अत्यंत चांगले</span>
                </div>
              </div>
              
              <button 
                type="submit" 
                className="btn btn-primary w-full py-3"
              >
                अभिप्राय पाठवा
              </button>
            </form>
          </div>

          <div>
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-2xl font-bold mb-4 text-primary-700">का अभिप्राय द्या?</h2>
              <p className="text-gray-700 mb-4">
                आपला अभिप्राय आमच्यासाठी अत्यंत महत्त्वाचा आहे. आपला अभिप्राय आम्हाला सेवा सुधारण्यास मदत करतो. कृपया आमच्या कार्यक्रमांबद्दल, उपक्रमांबद्दल किंवा एकूणच कामाबद्दल आपला अभिप्राय द्या.
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>आमच्या कार्यक्रमांबद्दल अभिप्राय द्या.</li>
                <li>आमच्या सेवांबद्दल अभिप्राय द्या.</li>
                <li>समाजासाठी नवीन उपक्रम सुचवा.</li>
                <li>समाजाच्या विकासासाठी सूचना द्या.</li>
                <li>समाजाच्या कोणत्याही विषयासंदर्भात तक्रार नोंदवा.</li>
              </ul>
            </div>
            
            <div className="bg-primary-50 rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold mb-4 text-primary-700">आमच्याशी संपर्क साधा</h2>
              <p className="text-gray-700 mb-4">
                अधिक माहितीसाठी किंवा तातडीच्या संपर्कासाठी, कृपया खालील पत्त्यावर संपर्क साधा:
              </p>
              <div className="space-y-2 text-gray-700">
                <p><span className="font-medium">पत्ता:</span> गाडी लोहार समाज उन्नती मंडळ, कल्याण, जिल्हा ठाणे, महाराष्ट्र</p>
                <p><span className="font-medium">फोन:</span> ९८६९३५८८६४, ९८१९१३६७३०</p>
                <p><span className="font-medium">ईमेल:</span> info@gadiloharsamaj.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;