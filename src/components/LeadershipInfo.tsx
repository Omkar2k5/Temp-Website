import React, { useState, useEffect } from 'react';

const LeadershipInfo: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const leaders = [
    {
      name: 'श्री युवराज मुरार जाधव',
      position: 'अध्यक्ष',
      phone: '९८६९३५८८६४',
      image: '/public/1.png',
    },
    {
      name: 'श्री राजेंद्र निंबालाल जाधव',
      position: 'सचिव',
      phone: '९८१९१३६७३०',
      image: '/public/2.png',
    },
    {
      name: 'श्री सुकलाल मयाराम कुर्‍हेकर',
      position: 'खजिनदार',
      phone: '८४५४८२०२७४',
      image: '/public/3.png',
    },
  ];

  return (
    <section className="bg-gray-100 py-10">
      <div className="container-custom">
        <h2 className="text-2xl font-bold text-center mb-4 text-primary-700">संकलन</h2>
        
        <div className="mb-8">
          <div className={`bg-white rounded-lg shadow-md p-6 max-w-2xl mx-auto ${isMobile ? 'text-center' : ''}`}>
            <div className={`${isMobile ? 'flex flex-col items-center' : 'flex items-start gap-6'}`}>
              <img 
                src="/public/yuvraj-jadhav-closeup.webp"
                alt="श्री युवराज मुरार जाधव"
                className={`rounded-lg object-cover ${isMobile ? 'w-48 h-48 mb-4' : 'w-32 h-32'}`}
              />
              <div>
                <h3 className="text-xl font-bold text-primary-700 mb-2">श्री युवराज मुरार जाधव</h3>
                <p className="mb-1"><span className="font-semibold">अध्यक्ष</span> - गाडी लोहार समाज उन्नती मंडळ</p>
                <p className="mb-1"><span className="font-semibold">कल्याण जि. ठाणे</span></p>
                <p className="mb-1"><span className="font-semibold">कार्याअघ्यक्ष</span> - अखिल भारतीय श्री विश्वकर्मा प्रबोधिनी संस्था</p>
                <p className="mb-1"><span className="font-semibold">प्रदेश अघ्यक्ष</span> - अखिल लोहार गाडी लोहार समाज विकास संस्था महाराष्ट्र राज्य</p>
                <p className="mt-2"><span className="font-semibold">मोबाईल</span> - ९८६९३५८८६४</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {leaders.map((leader, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
              <div className="aspect-w-4 aspect-h-3 relative">
                <img 
                  src={leader.image} 
                  alt={leader.name} 
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className={`p-4 ${isMobile ? 'text-center' : ''}`}>
                <h3 className="text-lg font-bold text-primary-700">{leader.name}</h3>
                <p className="text-gray-700">{leader.position}</p>
                <p className="text-gray-700">{leader.phone}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadershipInfo;