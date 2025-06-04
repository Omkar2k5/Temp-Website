import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Calendar,
  Award,
  Users,
  HandHeart,
  Building2,
  Trophy,
  GraduationCap,
  Handshake,
  ScrollText,
  Building
} from 'lucide-react';
import { saveMemberData } from '../utils/storage';

const Members: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    dob: '',
    gender: '',
    address: '',
    city: '',
    district: '',
    pincode: '',
    mobile: '',
    email: '',
    education: '',
    occupation: '',
    familyMembers: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Save data to Firebase/localStorage
      const memberId = await saveMemberData(formData);
      console.log('Member data saved with ID:', memberId);

      // Reset form
      setFormData({
        name: '',
        dob: '',
        gender: '',
        address: '',
        city: '',
        district: '',
        pincode: '',
        mobile: '',
        email: '',
        education: '',
        occupation: '',
        familyMembers: '',
      });

      alert('सभासद नोंदणी यशस्वीरित्या पूर्ण झाली! तुमची माहिती सुरक्षित ठेवली आहे.');
    } catch (error) {
      console.error('Error saving member data:', error);
      alert('नोंदणी करताना त्रुटी आली. कृपया पुन्हा प्रयत्न करा.');
    }
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="py-10 bg-gray-50 min-h-screen">
      <div className="container-custom">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold mb-2 text-primary-700">समाज माहिती</h1>
          <p className="mb-8 text-gray-600">
            गाडी लोहार समाज उन्नती मंडळाच्या विविध उपक्रमांची माहिती.
          </p>
        </motion.div>

        <div className="bg-white rounded-lg shadow-md p-6">
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
                  <option value="other">इतर</option>
                </select>
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
                <label htmlFor="education" className="block text-gray-700 font-medium mb-2">शिक्षण</label>
                <input
                  type="text"
                  id="education"
                  name="education"
                  value={formData.education}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>

              <div>
                <label htmlFor="occupation" className="block text-gray-700 font-medium mb-2">व्यवसाय</label>
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
                <label htmlFor="familyMembers" className="block text-gray-700 font-medium mb-2">कुटुंबातील सदस्य संख्या</label>
                <input
                  type="number"
                  id="familyMembers"
                  name="familyMembers"
                  value={formData.familyMembers}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>

              <div className="md:col-span-2">
                <label htmlFor="address" className="block text-gray-700 font-medium mb-2">पत्ता *</label>
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
        </div>

        {/* Vishwakarma Jayanti Section */}
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="bg-white rounded-lg shadow-md p-6 mb-8"
        >
          <div className="flex items-center mb-4">
            <Calendar className="w-8 h-8 text-primary-600 mr-3" />
            <h2 className="text-2xl font-bold text-primary-700">विश्वकर्मा जयंती उद्योग दिवस</h2>
          </div>
          <motion.div variants={fadeInUp}>
            <p className="mb-6 text-gray-700">विश्वकर्मा जयंती उद्योग दिवस म्हणून साजरी केली जाते</p>
            <ul className="list-none space-y-4">
              <motion.li variants={fadeInUp} className="flex items-start">
                <Award className="w-5 h-5 text-secondary-500 mr-3 mt-1" />
                <span>विश्वकर्मा जयंती शासनाचा GR नुसार उद्योग दिवस म्हणुन साजरी करतो.</span>
              </motion.li>
              <motion.li variants={fadeInUp} className="flex items-start">
                <Users className="w-5 h-5 text-secondary-500 mr-3 mt-1" />
                <span>विश्वकर्माच्या पालखीचे कल्याण परिसरात वाजत गाजत मिरवणूक काढली जाते.</span>
              </motion.li>
              <motion.li variants={fadeInUp} className="flex items-start">
                <Trophy className="w-5 h-5 text-secondary-500 mr-3 mt-1" />
                <span>महिलांनसाठी संगीत खुर्चीचा मनोरजनांत्मक स्पर्धा घेतली जाते व विजेता महिलास सन्मान पत्र व ट्रॉफी दिली जाते.</span>
              </motion.li>
              <motion.li variants={fadeInUp} className="flex items-start">
                <GraduationCap className="w-5 h-5 text-secondary-500 mr-3 mt-1" />
                <span>सांस्कृतिक कार्यक्रम घेतले जातात, विद्यार्थ्यांनसाठी विविध स्पर्धांचे आयोजन केले जाते.</span>
              </motion.li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Sanman Sohala Section */}
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="bg-white rounded-lg shadow-md p-6 mb-8"
        >
          <div className="flex items-center mb-4">
            <Trophy className="w-8 h-8 text-primary-600 mr-3" />
            <h2 className="text-2xl font-bold text-primary-700">सन्मान सोहळा कार्यक्रम</h2>
          </div>
          <motion.div variants={fadeInUp}>
            <p className="mb-6 text-gray-700">सन्मान सोहळा कार्यक्रम भव्य स्वरुपात आयोजित केला जातो</p>
            <ul className="list-none space-y-4">
              <motion.li variants={fadeInUp} className="flex items-start">
                <GraduationCap className="w-5 h-5 text-secondary-500 mr-3 mt-1" />
                <span>इयत्ता १० वी, १२ वी, ग्रेजुएट - पोस्ट ग्रेजुएट, इंजिनीअर्स, डॉक्टर या क्षेत्रात विशेष प्राविण्य मिळविलेल्या विद्यार्थ्याना सन्मान.</span>
              </motion.li>
              <motion.li variants={fadeInUp} className="flex items-start">
                <HandHeart className="w-5 h-5 text-secondary-500 mr-3 mt-1" />
                <span>गरजु विद्यार्थ्याना स्कॉलरशिप व शालेय साहित्याचे वाटप.</span>
              </motion.li>
              <motion.li variants={fadeInUp} className="flex items-start">
                <Award className="w-5 h-5 text-secondary-500 mr-3 mt-1" />
                <span>समाज रत्न व ज्येष्ठ समाज सेवक पुरस्कार.</span>
              </motion.li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Financial Aid Section */}
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="bg-white rounded-lg shadow-md p-6 mb-8"
        >
          <div className="flex items-center mb-4">
            <HandHeart className="w-8 h-8 text-primary-600 mr-3" />
            <h2 className="text-2xl font-bold text-primary-700">आर्थिक व अन्य मदत</h2>
          </div>
          <motion.div variants={fadeInUp}>
            <ul className="list-none space-y-4">
              <motion.li variants={fadeInUp} className="flex items-start">
                <HandHeart className="w-5 h-5 text-secondary-500 mr-3 mt-1" />
                <span>समाजातील गरीब परिवाराला मेडीकल व आपातकालीन मदत.</span>
              </motion.li>
              <motion.li variants={fadeInUp} className="flex items-start">
                <Users className="w-5 h-5 text-secondary-500 mr-3 mt-1" />
                <span>दुःखद निधन प्रसंगी पहिल्या दिवसाच्या खर्चाची मदत.</span>
              </motion.li>
              <motion.li variants={fadeInUp} className="flex items-start">
                <Handshake className="w-5 h-5 text-secondary-500 mr-3 mt-1" />
                <span>विवाह योग्य मुला मुलींचे विवाह जुळवून देणे.</span>
              </motion.li>
              <motion.li variants={fadeInUp} className="flex items-start">
                <ScrollText className="w-5 h-5 text-secondary-500 mr-3 mt-1" />
                <span>सलोखा समितीद्वारे वाद मिटवणे.</span>
              </motion.li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Government Representation Section */}
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="bg-white rounded-lg shadow-md p-6"
        >
          <div className="flex items-center mb-4">
            <Building2 className="w-8 h-8 text-primary-600 mr-3" />
            <h2 className="text-2xl font-bold text-primary-700">शासकीय प्रतिनिधित्व</h2>
          </div>
          <motion.div variants={fadeInUp}>
            <ul className="list-none space-y-4">
              <motion.li variants={fadeInUp} className="flex items-start">
                <ScrollText className="w-5 h-5 text-secondary-500 mr-3 mt-1" />
                <span>जातीच्या दाखला व वैधता प्रमाणपत्रासाठी पाठपुरावा.</span>
              </motion.li>
              <motion.li variants={fadeInUp} className="flex items-start">
                <Users className="w-5 h-5 text-secondary-500 mr-3 mt-1" />
                <span>रोजगार शिबिरांचे आयोजन.</span>
              </motion.li>
              <motion.li variants={fadeInUp} className="flex items-start">
                <Building className="w-5 h-5 text-secondary-500 mr-3 mt-1" />
                <span>धर्मशाळा, शैक्षणिक संस्था, बोर्डिंगसाठी शासकीय जागा मिळवणे.</span>
              </motion.li>
              <motion.li variants={fadeInUp} className="flex items-start">
                <Handshake className="w-5 h-5 text-secondary-500 mr-3 mt-1" />
                <span>समाजाच्या विविध मागण्यांसाठी शासनाकडे पाठपुरावा.</span>
              </motion.li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Members;