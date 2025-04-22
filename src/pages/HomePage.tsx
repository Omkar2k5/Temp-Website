import React from 'react';
import Banner from '../components/Banner';
import NewsCard from '../components/NewsCard';
import VisitorCounter from '../components/VisitorCounter';
import { Link } from 'react-router-dom';
import { Users, FileText, Calendar, Award } from 'lucide-react';

const HomePage: React.FC = () => {
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
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-primary-700">गाडी लोहार समाज उन्नती मंडळ</h1>
            <p className="text-lg text-gray-700 mb-8">
              गाडी लोहार समाज हा अत्यंत पुरातन समाज असून त्याचा इतिहास अत्यंत समृद्ध आहे. समाजाचे उन्नयन आणि विकासासाठी आमचे मंडळ सतत प्रयत्नशील आहे. सामाजिक, शैक्षणिक व आर्थिक विकासासाठी विविध उपक्रम राबविण्यात येतात.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
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

      {/* History Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold mb-6 text-primary-700">गाडी लोहार जातीचा उदय</h2>
            
            <div className="prose max-w-none">
              <p className="mb-4">
                एक जात म्हणजे गाडी लोहार समाज, ही जात लोखंडी हत्यारे बनविणारे आणि बैलगाडीतून ते हिंडून विकणारे कारागीर होय. पंडित महादेवशास्त्री द्वारा लिखित भारतीय संस्कृती कोश खंड दुसरा पृष्ठ क्रमांक ७७५ या पुस्तकानुसार ही जात प्रथम राजस्थानमध्ये होती पुढे ही जात व्यवसाया निमित्त इतरत्र भटकू लागली.
              </p>

              <p className="mb-4">
                या जातीच्या दोन पोट जाती आहेत एकीला गाडी लोहार आणि दुसरीला मालवीय म्हणतात. हे लोक पीठव्याचे वंशज म्हणवत असुन त्यांच्या उत्पत्तीची दंतकथा अशी आहे की, पार्वतीने शिवाच्या पाठीवरील विभूती पासून त्यांना उत्पन्न केले शिवाला अंधकार व दंडकार या दोन राक्षसांना मारायचे होते व त्यांना त्यासाठी हत्यारांची आवश्यकता होती. ती तयार करण्यासाठी पार्वतीने त्यांची निर्मिती केली.
              </p>

              <p className="mb-4">
                चितोड गडावरील राजपूत विरांना युध्दोपयोगी हत्यारे बनवून देण्याचे काम हे लोक करीत होते. चितोडगडाचा व तेथील राज्यकर्त्यांचा आणि सगळ्या राजस्थानच्या स्वातंत्र्याचा त्यांना अभिमान होता. इ. स. १५६८ साली अकबराने चितोडगड काबीज केला ही गोष्ट गाडी लोहारांना दुःखदायक व अपमानकारक वाटली म्हणून त्यांनी ठरवले की, यापुढे चितोडच्या परिसरात राहायचे नाही व चितोड पुनश्च स्वतंत्र होईपर्यंत गंभीरा नदी ओलांडून चितोडगडात प्रवेश करायचा नाही.
              </p>

              <div className="my-8 text-center">
                <div className="inline-block bg-primary-50 px-8 py-4 rounded-lg border-l-4 border-primary-700">
                  <p className="text-xl font-bold text-primary-700 italic">
                    "लहारोसे डर कर नौका पार नहीं होती।<br />
                    कोशिश करने वालो की हार नही होती।।"
                  </p>
                </div>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-primary-700">गाडी लोहार समाज उन्नती मंडळ कल्याणचा उदय</h3>

              <p className="mb-4">
                मनुष्य हा स्वभावत: समाजप्रिय आहे आज तो प्रगत विकसित झाला आहे. माणसाला एकटे राहणे आवडत नाही त्याच उद्देशाने आम्ही कल्याण निवासी गाडी लोहार समाज बांधव आपल्या मुळ समाज व गटापासून उपजीविकेच्या शोधार्थ आपले मुख्य व्यवसाय अनेक कारणांनी सोडून बाहेर पडलो.
              </p>

              <div className="mt-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="text-xl font-bold mb-4 text-primary-700">संकलन</h4>
                  <div className="flex flex-col md:flex-row items-center gap-4">
                    <img 
                      src="/public/yuvraj-jadhav-closeup.webp" 
                      alt="श्री युवराज मुरार जाधव" 
                      className="w-24 h-24 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-bold">श्री युवराज मुरार जाधव</p>
                      <p>अध्यक्ष</p>
                      <p>गाडी लोहार समाज उन्नती मंडळ</p>
                      <p>कल्याण जि. ठाणे</p>
                      <p>कार्याअघ्यक्ष - अखिल भारतीय श्री विश्वकर्मा प्रबोधिनी संस्था</p>
                      <p>प्रदेश अघ्यक्ष - अखिल लोहार गाडी लोहार समाज विकास संस्था महाराष्ट्र राज्य</p>
                      <p className="mt-2">मोबाईल - ९८६९३५८८६४</p>
                    </div>
                  </div>
                </div>
              </div>
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