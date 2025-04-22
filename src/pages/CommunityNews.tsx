import React from 'react';
import NewsCard from '../components/NewsCard';

const CommunityNews: React.FC = () => {
  const newsItems = [
    {
      id: 1,
      title: 'समाज सभा आयोजन',
      date: '१५ सप्टेंबर, २०२३',
      summary: 'गाडी लोहार समाज उन्नती मंडळाची वार्षिक सर्वसाधारण सभा मुंबई येथे आयोजित करण्यात आली होती. या सभेमध्ये विविध विषयांवर चर्चा झाली. २०२३-२४ साठी नवीन कार्यकारिणीची निवड करण्यात आली.',
      imageUrl: 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      link: '#',
    },
    {
      id: 2,
      title: 'शैक्षणिक कार्यक्रम',
      date: '२० ऑगस्ट, २०२३',
      summary: 'विद्यार्थ्यांसाठी विशेष शैक्षणिक कार्यक्रमाचे आयोजन करण्यात आले होते. या कार्यक्रमात मार्गदर्शन व प्रोत्साहनपर व्याख्यानांचे आयोजन करण्यात आले होते. अनेक विद्यार्थ्यांना शिष्यवृत्ती देण्यात आली.',
      imageUrl: 'https://images.pexels.com/photos/5905700/pexels-photo-5905700.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      link: '#',
    },
    {
      id: 3,
      title: 'आरोग्य शिबिरे',
      date: '५ जुलै, २०२३',
      summary: 'समाजातील व्यक्तींसाठी आरोग्य तपासणी शिबिराचे आयोजन करण्यात आले होते. यामध्ये निःशुल्क तपासणी व औषध वाटप करण्यात आले. ४०० हून अधिक नागरिकांनी या शिबिराचा लाभ घेतला.',
      imageUrl: 'https://images.pexels.com/photos/5214949/pexels-photo-5214949.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      link: '#',
    },
    {
      id: 4,
      title: 'कौशल्य विकास प्रशिक्षण',
      date: '१० जून, २०२३',
      summary: 'समाजातील युवकांसाठी कौशल्य विकास प्रशिक्षणाचे आयोजन करण्यात आले होते. या प्रशिक्षणात संगणक कौशल्य, इंग्रजी भाषा, व्यावसायिक प्रशिक्षण यांचा समावेश होता.',
      imageUrl: 'https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      link: '#',
    },
    {
      id: 5,
      title: 'सांस्कृतिक कार्यक्रम',
      date: '२५ मे, २०२३',
      summary: 'परंपरागत कला व संस्कृती जपण्यासाठी सांस्कृतिक कार्यक्रमाचे आयोजन करण्यात आले होते. यामध्ये लोकनृत्य, लोकगीत, पारंपारिक वाद्य वादन यांचे सादरीकरण करण्यात आले.',
      imageUrl: 'https://images.pexels.com/photos/716276/pexels-photo-716276.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      link: '#',
    },
    {
      id: 6,
      title: 'पर्यावरण जागृती अभियान',
      date: '५ जून, २०२३',
      summary: 'जागतिक पर्यावरण दिनानिमित्त वृक्षारोपण व पर्यावरण जागृती कार्यक्रमाचे आयोजन करण्यात आले होते. या कार्यक्रमात सुमारे ५०० वृक्षांची लागवड करण्यात आली.',
      imageUrl: 'https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      link: '#',
    },
    {
      id: 7,
      title: 'महिला सक्षमीकरण',
      date: '८ मार्च, २०२३',
      summary: 'जागतिक महिला दिनानिमित्त महिला सक्षमीकरण कार्यक्रमाचे आयोजन करण्यात आले होते. या कार्यक्रमात स्वयंसहाय्यता गट स्थापना, उद्योजकता प्रशिक्षण यांचा समावेश होता.',
      imageUrl: 'https://images.pexels.com/photos/6457571/pexels-photo-6457571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      link: '#',
    },
    {
      id: 8,
      title: 'वृद्ध सन्मान कार्यक्रम',
      date: '१ ऑक्टोबर, २०२२',
      summary: 'जागतिक वृद्ध दिनानिमित्त समाजातील वृद्ध व्यक्तींचा सन्मान करण्यासाठी विशेष कार्यक्रमाचे आयोजन करण्यात आले होते. या कार्यक्रमात वृद्धांना शाल, श्रीफळ देऊन सन्मानित करण्यात आले.',
      imageUrl: 'https://images.pexels.com/photos/7551617/pexels-photo-7551617.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      link: '#',
    },
    {
      id: 9,
      title: 'सामाजिक न्याय दिन',
      date: '२६ जून, २०२२',
      summary: 'सामाजिक न्याय दिनानिमित्त विशेष कार्यक्रमाचे आयोजन करण्यात आले होते. या कार्यक्रमात सामाजिक न्याय, समता, बंधुता या विषयांवर विविध वक्त्यांनी आपले विचार मांडले.',
      imageUrl: 'https://images.pexels.com/photos/8847457/pexels-photo-8847457.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      link: '#',
    },
  ];

  const categories = [
    'सर्व',
    'शैक्षणिक',
    'आरोग्य',
    'सांस्कृतिक',
    'पर्यावरण',
    'अन्य',
  ];

  return (
    <div className="py-10 bg-gray-50 min-h-screen">
      <div className="container-custom">
        <h1 className="text-3xl font-bold mb-2 text-primary-700">समाजवार्ता</h1>
        <p className="mb-6 text-gray-600">
          गाडी लोहार समाज उन्नती मंडळाच्या कार्यक्रमांची व उपक्रमांची माहिती.
        </p>

        <div className="mb-8 overflow-x-auto">
          <div className="flex space-x-2 pb-2">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  index === 0
                    ? 'bg-primary-700 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item) => (
            <NewsCard
              key={item.id}
              title={item.title}
              date={item.date}
              summary={item.summary}
              imageUrl={item.imageUrl}
              link={item.link}
            />
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <nav className="inline-flex rounded-md shadow-sm">
            <a
              href="#"
              className="px-3 py-2 rounded-l-md border border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
            >
              मागील
            </a>
            <a
              href="#"
              className="px-3 py-2 border-t border-b border-gray-300 bg-primary-700 text-white"
            >
              1
            </a>
            <a
              href="#"
              className="px-3 py-2 border-t border-b border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
            >
              2
            </a>
            <a
              href="#"
              className="px-3 py-2 border-t border-b border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
            >
              3
            </a>
            <a
              href="#"
              className="px-3 py-2 rounded-r-md border border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
            >
              पुढील
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default CommunityNews;