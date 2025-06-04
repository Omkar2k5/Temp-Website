import React, { useState, useEffect } from 'react';
import Banner from '../components/Banner';
import NewsCard from '../components/NewsCard';
import VisitorCounter from '../components/VisitorCounter';
import { Link } from 'react-router-dom';
import { Users, FileText, Calendar, Award } from 'lucide-react';
import { communityInfoService, CommunityInfo } from '../services/firebaseService';
import { initializeHomeContent } from '../utils/initializeData';

const HomePage: React.FC = () => {
  const [homeContent, setHomeContent] = useState<CommunityInfo[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadHomeContent();
  }, []);

  const loadHomeContent = async () => {
    try {
      // Initialize content only if it doesn't exist
      await initializeHomeContent();

      // Load content from Firebase
      const content = await communityInfoService.getBySection('about');
      setHomeContent(content as CommunityInfo[]);
    } catch (error) {
      console.error('Error loading home content:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const newsItems = [
    {
      id: 1,
      title: 'समाज सभा आयोजन',
      date: '१५ सप्टेंबर, २०२३',
      summary: 'गाडी लोहार समाज उन्नती मंडळाची वार्षिक सर्वसाधारण सभा मुंबई येथे आयोजित करण्यात आली होती. या सभेमध्ये विविध विषयांवर चर्चा झाली.',
      imageUrl: 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 2,
      title: 'शैक्षणिक कार्यक्रम',
      date: '२० ऑगस्ट, २०२३',
      summary: 'विद्यार्थ्यांसाठी विशेष शैक्षणिक कार्यक्रमाचे आयोजन करण्यात आले होते. या कार्यक्रमात मार्गदर्शन व प्रोत्साहनपर व्याख्यानांचे आयोजन करण्यात आले होते.',
      imageUrl: 'https://images.pexels.com/photos/5905700/pexels-photo-5905700.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 3,
      title: 'आरोग्य शिबिरे',
      date: '५ जुलै, २०२३',
      summary: 'समाजातील व्यक्तींसाठी आरोग्य तपासणी शिबिराचे आयोजन करण्यात आले होते. यामध्ये निःशुल्क तपासणी व औषध वाटप करण्यात आले.',
      imageUrl: 'https://images.pexels.com/photos/5214949/pexels-photo-5214949.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
  ];

  const features = [
    {
      icon: <Users className="h-10 w-10 text-primary-700" />,
      title: 'सदस्यता',
      description: 'समाजाचा सदस्य होऊन आमच्या सर्व कार्यक्रमांचा आणि उपक्रमांचा लाभ घ्या.',
      link: '/members',
    },
    {
      icon: <FileText className="h-10 w-10 text-primary-700" />,
      title: 'शासकीय निर्णय',
      description: 'समाजाशी संबंधित सर्व शासकीय निर्णय आणि पत्रे येथे पहा.',
      link: '/government-resolutions',
    },
    {
      icon: <Calendar className="h-10 w-10 text-primary-700" />,
      title: 'कार्यक्रम',
      description: 'आगामी कार्यक्रम आणि उपक्रमांची माहिती मिळवा.',
      link: '/activities',
    },
    {
      icon: <Award className="h-10 w-10 text-primary-700" />,
      title: 'योजना',
      description: 'समाजासाठी असलेल्या विविध शासकीय योजनांची माहिती.',
      link: '/activities',
    },
  ];

  return (
    <div className="min-h-screen">
      <Banner />
      
      {/* Welcome Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-primary-700">गाडी लोहार समाज उन्नती मंडळ</h1>

            {isLoading ? (
              <div className="flex justify-center items-center py-8">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-700"></div>
                <span className="ml-2 text-gray-600">माहिती लोड करत आहे...</span>
              </div>
            ) : homeContent.length > 0 ? (
              <div className="space-y-8 text-left">
                {homeContent.map((content, index) => (
                  <div key={content.id || index} className="bg-gray-50 p-6 rounded-lg">
                    <h2 className="text-xl md:text-2xl font-semibold mb-4 text-primary-700">{content.title}</h2>
                    {content.description && (
                      <p className="text-lg text-gray-600 mb-4 italic">{content.description}</p>
                    )}
                    <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                      {content.content}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-lg text-gray-700 mb-8">
                गाडी लोहार समाज हा अत्यंत पुरातन समाज असून त्याचा इतिहास अत्यंत समृद्ध आहे. समाजाचे उन्नयन आणि विकासासाठी आमचे मंडळ सतत प्रयत्नशील आहे. सामाजिक, शैक्षणिक व आर्थिक विकासासाठी विविध उपक्रम राबविण्यात येतात.
              </p>
            )}

            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Link to="/activities" className="btn btn-primary">
                उपक्रम पहा
              </Link>
              <Link to="/members" className="btn bg-gray-200 text-gray-800 hover:bg-gray-300">
                सभासद व्हा
              </Link>
            </div>
          </div>
        </div>
      </section>


      
      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-primary-700">आमचे उपक्रम</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md transition-transform duration-300 hover:shadow-lg hover:scale-105">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-primary-700">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <Link to={feature.link} className="text-primary-700 hover:text-primary-800 font-medium inline-flex items-center">
                  अधिक माहिती
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      
      
      {/* Call to Action */}
      <section className="py-16 bg-primary-700 text-white">
        <div className="container-custom text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">आमच्या समाजाचे सदस्य व्हा</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            गाडी लोहार समाज उन्नती मंडळाचे सदस्य होऊन आमच्या विविध उपक्रमांचा लाभ घ्या आणि समाजाच्या विकासात सहभागी व्हा.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/members" className="btn bg-white text-primary-700 hover:bg-gray-100">
              सभासद नोंदणी करा
            </Link>
            <Link to="/contact" className="btn bg-transparent text-white border border-white hover:bg-white hover:text-primary-700">
              अधिक माहिती
            </Link>
          </div>
        </div>
      </section>
      <VisitorCounter />
    </div>
  );
};

export default HomePage;