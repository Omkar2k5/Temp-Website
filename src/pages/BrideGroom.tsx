import React, { useState } from 'react';
import { saveBrideGroomData } from '../utils/storage';

const BrideGroom: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    gender: '',
    dob: '',
    height: '',
    education: '',
    occupation: '',
    income: '',
    address: '',
    city: '',
    district: '',
    mobile: '',
    email: '',
    biodata: '',
    expectations: '',
    photo: '',
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
      const entryId = saveBrideGroomData(formData);
      console.log('Bride/Groom data saved with ID:', entryId);

      // Reset form
      setFormData({
        name: '',
        gender: '',
        dob: '',
        height: '',
        education: '',
        occupation: '',
        income: '',
        address: '',
        city: '',
        district: '',
        mobile: '',
        email: '',
        biodata: '',
        expectations: '',
        photo: '',
      });

      alert('वधू-वर नोंदणी यशस्वीरित्या पूर्ण झाली! तुमची माहिती सुरक्षित ठेवली आहे.');
    } catch (error) {
      console.error('Error saving bride/groom data:', error);
      alert('नोंदणी करताना त्रुटी आली. कृपया पुन्हा प्रयत्न करा.');
    }
  };

  const profiles = [
    {
      id: 1,
      name: 'विवेक जाधव',
      age: 28,
      gender: 'पुरुष',
      education: 'B.E. (Mechanical)',
      occupation: 'सॉफ्टवेअर इंजिनिअर',
      location: 'पुणे',
      imageUrl: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: 2,
      name: 'प्रिया कुरहेकर',
      age: 26,
      gender: 'स्त्री',
      education: 'M.Com',
      occupation: 'बँक कर्मचारी',
      location: 'मुंबई',
      imageUrl: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: 3,
      name: 'अमोल पाटील',
      age: 29,
      gender: 'पुरुष',
      education: 'MBA',
      occupation: 'व्यवस्थापक',
      location: 'नाशिक',
      imageUrl: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: 4,
      name: 'स्नेहा मोरे',
      age: 25,
      gender: 'स्त्री',
      education: 'B.Sc. Nursing',
      occupation: 'नर्स',
      location: 'ठाणे',
      imageUrl: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: 5,
      name: 'प्रशांत शिंदे',
      age: 30,
      gender: 'पुरुष',
      education: 'MBBS',
      occupation: 'डॉक्टर',
      location: 'नागपूर',
      imageUrl: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: 6,
      name: 'अंजली जाधव',
      age: 27,
      gender: 'स्त्री',
      education: 'M.Tech',
      occupation: 'प्रोफेसर',
      location: 'औरंगाबाद',
      imageUrl: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
  ];

  return (
    <div className="py-10 bg-gray-50 min-h-screen">
      <div className="container-custom">
        <h1 className="text-3xl font-bold mb-2 text-primary-700">वधू-वर सूची</h1>
        <p className="mb-8 text-gray-600">
          गाडी लोहार समाज उन्नती मंडळातर्फे चालविण्यात येणारी वधू-वर सूची.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {profiles.map((profile) => (
            <div key={profile.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:scale-[1.02]">
              <div className="h-52 overflow-hidden">
                <img 
                  src={profile.imageUrl} 
                  alt={profile.name} 
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-4">
                <h2 className="text-lg font-bold text-primary-700">{profile.name}</h2>
                <p className="text-sm text-gray-600">
                  {profile.age} वर्ष | {profile.gender}
                </p>
                <div className="mt-2 space-y-1">
                  <p className="text-sm">
                    <span className="font-medium">शिक्षण:</span> {profile.education}
                  </p>
                  <p className="text-sm">
                    <span className="font-medium">व्यवसाय:</span> {profile.occupation}
                  </p>
                  <p className="text-sm">
                    <span className="font-medium">स्थान:</span> {profile.location}
                  </p>
                </div>
                <div className="mt-4">
                  <button 
                    className="w-full btn btn-primary py-1 text-sm"
                  >
                    माहिती पहा
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-6 text-primary-700">वधू-वर नोंदणी फॉर्म</h2>
          
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">संपूर्ण नाव *</label>
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

              <div>
                <label htmlFor="gender" className="block text-gray-700 font-medium mb-2">लिंग *</label>
                <select
                  id="gender"
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  <option value="">निवडा</option>
                  <option value="male">पुरुष</option>
                  <option value="female">स्त्री</option>
                </select>
              </div>

              <div>
                <label htmlFor="dob" className="block text-gray-700 font-medium mb-2">जन्मतारीख *</label>
                <input
                  type="date"
                  id="dob"
                  name="dob"
                  value={formData.dob}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>

              <div>
                <label htmlFor="height" className="block text-gray-700 font-medium mb-2">उंची (सेमी) *</label>
                <input
                  type="number"
                  id="height"
                  name="height"
                  value={formData.height}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>

              <div>
                <label htmlFor="education" className="block text-gray-700 font-medium mb-2">शिक्षण *</label>
                <input
                  type="text"
                  id="education"
                  name="education"
                  value={formData.education}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>

              <div>
                <label htmlFor="occupation" className="block text-gray-700 font-medium mb-2">व्यवसाय *</label>
                <input
                  type="text"
                  id="occupation"
                  name="occupation"
                  value={formData.occupation}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>

              <div>
                <label htmlFor="income" className="block text-gray-700 font-medium mb-2">वार्षिक उत्पन्न</label>
                <input
                  type="text"
                  id="income"
                  name="income"
                  value={formData.income}
                  onChange={handleChange}
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

              <div className="md:col-span-2">
                <label htmlFor="biodata" className="block text-gray-700 font-medium mb-2">स्वतःबद्दल माहिती</label>
                <textarea
                  id="biodata"
                  name="biodata"
                  value={formData.biodata}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                ></textarea>
              </div>

              <div className="md:col-span-2">
                <label htmlFor="expectations" className="block text-gray-700 font-medium mb-2">अपेक्षा</label>
                <textarea
                  id="expectations"
                  name="expectations"
                  value={formData.expectations}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                ></textarea>
              </div>

              <div className="md:col-span-2">
                <label htmlFor="photo" className="block text-gray-700 font-medium mb-2">फोटो अपलोड</label>
                <input
                  type="file"
                  id="photo"
                  name="photo"
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
                <p className="text-sm text-gray-500 mt-1">फक्त JPG/PNG प्रकारचे फोटो अपलोड करा. (कमाल 2MB)</p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <button 
                type="submit" 
                className="btn btn-primary px-8 py-3"
              >
                नोंदणी करा
              </button>
            </div>
          </form>

          <div className="mt-8 text-sm text-gray-600 bg-gray-50 p-4 rounded-md">
            <p>* या माध्यमातून उपलब्ध केलेली माहिती फक्त समाजातील सदस्यांपर्यंत पोहोचवण्यात येईल.</p>
            <p>* आपल्या माहितीची गोपनीयता राखण्यात येईल.</p>
            <p>* अधिक माहितीसाठी संपर्क: ९८६९३५८८६४</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrideGroom;