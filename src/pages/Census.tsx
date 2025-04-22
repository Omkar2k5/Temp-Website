import React, { useState } from 'react';

const Census: React.FC = () => {
  const [formData, setFormData] = useState({
    headName: '',
    familyMembers: '',
    address: '',
    city: '',
    district: '',
    pincode: '',
    mobile: '',
    email: '',
    occupation: '',
    income: '',
    ownHouse: '',
    education: '',
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
    console.log('Form submitted:', formData);
    alert('फॉर्म यशस्वीरित्या सबमिट केला!');
    // Here you would typically send this data to your backend
  };

  const censusStats = [
    { label: 'एकूण कुटुंबे', value: '५,६७८' },
    { label: 'एकूण लोकसंख्या', value: '२५,४५६' },
    { label: 'पुरुष', value: '१२,७८९' },
    { label: 'महिला', value: '१२,६६७' },
    { label: 'शिक्षित लोकसंख्या', value: '१८,६७८' },
    { label: 'रोजगार असलेले', value: '११,२३४' },
  ];

  return (
    <div className="py-10 bg-gray-50 min-h-screen">
      <div className="container-custom">
        <h1 className="text-3xl font-bold mb-2 text-primary-700">खानेसुमारी</h1>
        <p className="mb-8 text-gray-600">
          गाडी लोहार समाज जनगणना अभियान - आपल्या कुटुंबाची माहिती नोंदवा.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold mb-6 text-primary-700">कुटुंब नोंदणी फॉर्म</h2>
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="headName" className="block text-gray-700 font-medium mb-2">कुटुंब प्रमुखाचे नाव *</label>
                    <input
                      type="text"
                      id="headName"
                      name="headName"
                      value={formData.headName}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="familyMembers" className="block text-gray-700 font-medium mb-2">कुटुंबातील सदस्य संख्या *</label>
                    <input
                      type="number"
                      id="familyMembers"
                      name="familyMembers"
                      value={formData.familyMembers}
                      onChange={handleChange}
                      required
                      min="1"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="address" className="block text-gray-700 font-medium mb-2">संपूर्ण पत्ता *</label>
                    <textarea
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      required
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    ></textarea>
                  </div>

                  <div>
                    <label htmlFor="city" className="block text-gray-700 font-medium mb-2">शहर/गाव *</label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="district" className="block text-gray-700 font-medium mb-2">जिल्हा *</label>
                    <input
                      type="text"
                      id="district"
                      name="district"
                      value={formData.district}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="pincode" className="block text-gray-700 font-medium mb-2">पिनकोड *</label>
                    <input
                      type="text"
                      id="pincode"
                      name="pincode"
                      value={formData.pincode}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="mobile" className="block text-gray-700 font-medium mb-2">मोबाईल नंबर *</label>
                    <input
                      type="tel"
                      id="mobile"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">ईमेल</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="occupation" className="block text-gray-700 font-medium mb-2">मुख्य व्यवसाय</label>
                    <input
                      type="text"
                      id="occupation"
                      name="occupation"
                      value={formData.occupation}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="income" className="block text-gray-700 font-medium mb-2">वार्षिक उत्पन्न (अंदाजे)</label>
                    <select
                      id="income"
                      name="income"
                      value={formData.income}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    >
                      <option value="">निवडा</option>
                      <option value="below100k">१ लाखापेक्षा कमी</option>
                      <option value="100k-300k">१ लाख ते ३ लाख</option>
                      <option value="300k-500k">३ लाख ते ५ लाख</option>
                      <option value="500k-1000k">५ लाख ते १० लाख</option>
                      <option value="above1000k">१० लाखापेक्षा जास्त</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="ownHouse" className="block text-gray-700 font-medium mb-2">स्वतःची घर आहे का?</label>
                    <select
                      id="ownHouse"
                      name="ownHouse"
                      value={formData.ownHouse}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    >
                      <option value="">निवडा</option>
                      <option value="yes">होय</option>
                      <option value="no">नाही</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="education" className="block text-gray-700 font-medium mb-2">कुटुंब प्रमुखाचे शिक्षण</label>
                    <input
                      type="text"
                      id="education"
                      name="education"
                      value={formData.education}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                  </div>
                </div>

                <div className="mt-8 text-center">
                  <button 
                    type="submit" 
                    className="btn btn-primary px-8 py-3"
                  >
                    माहिती सबमिट करा
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold mb-6 text-primary-700">जनगणना आकडेवारी</h2>
              
              <div className="space-y-4">
                {censusStats.map((stat, index) => (
                  <div 
                    key={index} 
                    className="flex justify-between items-center p-3 bg-gray-50 rounded-md"
                  >
                    <span className="font-medium">{stat.label}</span>
                    <span className="text-xl font-bold text-primary-700">{stat.value}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 text-center">
                <p className="text-sm text-gray-600 mb-2">
                  * ही आकडेवारी सप्टेंबर २०२३ पर्यंतची आहे.
                </p>
                <a 
                  href="#" 
                  className="text-primary-700 font-medium hover:text-primary-800"
                >
                  संपूर्ण अहवाल पहा
                </a>
              </div>
            </div>

            <div className="bg-primary-50 rounded-lg shadow-md p-6 mt-6">
              <h2 className="text-xl font-bold mb-4 text-primary-700">जनगणना महत्त्व</h2>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>समाजाची अचूक लोकसंख्या माहिती मिळते.</li>
                <li>शासकीय योजनांसाठी उपयोगी.</li>
                <li>समाजाच्या विकासासाठी नियोजन करण्यास मदत.</li>
                <li>शिक्षण, आरोग्य, रोजगार इत्यादी क्षेत्रांमध्ये निर्णय घेण्यास मदत.</li>
                <li>समाजाच्या विविध गरजा समजण्यास मदत.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Census;