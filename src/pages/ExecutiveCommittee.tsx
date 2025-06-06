import React, { useState, useEffect } from 'react';
import { executiveCommitteeService, ExecutiveCommittee as ExecutiveCommitteeMember } from '../services/firebaseService';
import { initializeExecutiveCommittee } from '../utils/initializeData';
import { getOptimizedImageUrl } from '../config/cloudinary';

const ExecutiveCommittee: React.FC = () => {
  const [executiveMembers, setExecutiveMembers] = useState<ExecutiveCommitteeMember[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadExecutiveCommittee();
  }, []);

  const loadExecutiveCommittee = async () => {
    try {
      // Initialize committee only if it doesn't exist
      await initializeExecutiveCommittee();

      // Load committee from Firebase
      const committee = await executiveCommitteeService.getAll();
      setExecutiveMembers(committee.filter(member => member.isActive) as ExecutiveCommitteeMember[]);
    } catch (error) {
      console.error('Error loading executive committee:', error);
      // Fallback to static data if Firebase fails
      setExecutiveMembers(fallbackExecutiveMembers);
    } finally {
      setIsLoading(false);
    }
  };

  // Fallback static data
  const fallbackExecutiveMembers = [
    {
      id: 1,
      name: 'श्री युवराज मुरार जाधव',
      position: 'अध्यक्ष',
      phone: '९८६९३५८८६४',
      email: 'info@gadiloharsamaj.com',
      education: '',
      job: 'कार्याअघ्यक्ष - अखिल भारतीय श्री विश्वकर्मा प्रबोधिनी संस्था',
      image: '/public/yuvraj-jadhav-closeup.webp',
    },
    {
      id: 2,
      name: 'श्री राजेंद्र निंबालाल जाधव',
      position: 'सचिव',
      phone: '९८१९१३६७३०',
      email: 'info@gadiloharsamaj.com',
      education: '',
      job: '',
      image: '/public/2.png',
    },
    {
      id: 3,
      name: 'श्री सुकलाल मयाराम कुर्‍हेकर',
      position: 'खजिनदार',
      phone: '८४५४८२०२७४',
      email: 'info@gadiloharsamaj.com',
      education: '',
      job: '',
      image: '/public/3.png',
    },
    {
      id: 4,
      name: 'श्री प्रल्हाद दत्तात्रय कुर्‍हेकर',
      position: 'सदस्य',
      phone: '९८३३३४७७६४',
      email: 'info@gadiloharsamaj.com',
      education: 'S.S.C / ITI',
      job: 'मेकॅनिकल फिटर मध्य रेल',
      image: '/public/members/4.webp',
    },
    {
      id: 5,
      name: 'श्री अनिल मक्कन गोराणे',
      position: 'सदस्य',
      phone: '९२२२२१४९६९',
      email: 'info@gadiloharsamaj.com',
      education: 'S.S.C',
      job: 'गणराज फर्निचर मार्ट',
      image: '/public/members/5.webp',
    },
    {
      id: 6,
      name: 'श्री दिपक लकडु लोहार',
      position: 'सदस्य',
      phone: '९४०३०३४६८८',
      email: 'info@gadiloharsamaj.com',
      education: 'B.A',
      job: 'मनीट्रान्सफर-किराणा मर्चन्ट',
      image: '/public/members/6.webp',
    },
    {
      id: 7,
      name: 'श्री हनुमान शिवलाल लोहार',
      position: 'सदस्य',
      phone: '९८९०६८३३६५',
      email: 'info@gadiloharsamaj.com',
      education: 'M.A. Bed',
      job: 'प्राध्यापक ज्युनीयर कॉलेज',
      image: '/public/members/7.webp',
    },
    {
      id: 8,
      name: 'श्री धनराज रमन गोराणे',
      position: 'सदस्य',
      phone: '९८९०६८३३६५',
      email: 'info@gadiloharsamaj.com',
      education: 'S.S.C',
      job: 'मेँन्टनेँस मॅनेजर प्रा.',
      image: '/public/members/8.webp',
    },
    {
      id: 9,
      name: 'श्री किशोर ब्रिजलाल लोहार',
      position: 'सदस्य',
      phone: '९२२४६१२५१८',
      email: 'info@gadiloharsamaj.com',
      education: 'H.S.C / I.T.I',
      job: 'ऑपरेटर हिंडाल्को कंपनी',
      image: '/public/members/9.webp',
    },
    {
      id: 10,
      name: 'श्री गणेश पुरूषोत्तम गोराणे',
      position: 'सदस्य',
      phone: '९२२४०५८०२४',
      email: 'info@gadiloharsamaj.com',
      education: 'H.S.C',
      job: 'इलेक्ट्रिकल व्यवसाय',
      image: '/public/members/10.webp',
    },
    {
      id: 11,
      name: 'श्री निलेश गिरेंद्र लोहार',
      position: 'सदस्य',
      phone: '८६९८९४०९०९',
      email: 'info@gadiloharsamaj.com',
      education: 'H.S.C/ मेकॅनिकल डिप्लोमा',
      job: 'सेल्स/रिप्रेझेंटेटीव एक्ज्यूकेटिव्ह',
      image: '/public/members/11.webp',
    },
    {
      id: 12,
      name: 'श्री निलेश रतिलाल पवार',
      position: 'सदस्य',
      phone: '८१०८८८७०५५',
      email: 'info@gadiloharsamaj.com',
      education: 'M.A Bed',
      job: 'पोलीस नायक(महाराष्ट्रपोलीस)',
      image: '/public/members/12.webp',
    },
  ];

  return (
    <div className="py-10 bg-gray-50 min-h-screen">
      <div className="container-custom">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2 text-primary-700">गाडी लोहार समाज उन्नती मंडळ कल्याण</h1>
          <h2 className="text-2xl font-semibold mb-2 text-secondary-600">कार्यकारिणी</h2>
          <p className="text-lg text-gray-700 font-medium">(कार्यकाल २०१७ - २०२०)</p>
          <p className="mt-2 text-gray-600">
            गाडी लोहार समाज उन्नती मंडळाच्या कार्यकारिणीची माहिती.
          </p>
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-700"></div>
            <span className="ml-2 text-gray-600">माहिती लोड करत आहे...</span>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {executiveMembers.map((member, index) => (
            <div key={member.id || index} className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
              {(member.imageUrl || (member as any).photo) && (
                <div className="h-56 overflow-hidden">
                  <img
                    src={
                      (member as any).imagePublicId
                        ? getOptimizedImageUrl((member as any).imagePublicId, { width: 400, height: 224, crop: 'fill' })
                        : member.imageUrl || (member as any).photo
                    }
                    alt={member.name}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              )}
              <div className="p-4">
                <h2 className="text-lg font-bold text-primary-700">{member.name}</h2>
                <p className="text-secondary-600 font-medium mb-2">{member.position}</p>

                {(member as any).education && (
                  <p className="text-gray-700 text-sm mb-1">
                    <span className="font-medium">शिक्षण:</span> {(member as any).education}
                  </p>
                )}

                {(member as any).job && (
                  <p className="text-gray-700 text-sm mb-1">
                    <span className="font-medium">जॉब:</span> {(member as any).job}
                  </p>
                )}

                {member.phone && (
                  <p className="text-gray-700 text-sm mb-1">
                    <span className="font-medium">मोबाइल:</span>
                    <a href={`tel:${member.phone}`} className="text-primary-600 hover:text-primary-800 ml-1">
                      {member.phone} कॉल करा
                    </a>
                  </p>
                )}

                {member.description && (
                  <p className="text-gray-700 text-sm mb-2">{member.description}</p>
                )}

                {member.email && (
                  <p className="text-gray-700 text-sm">
                    <span className="font-medium">ईमेल:</span> {member.email}
                  </p>
                )}
              </div>
            </div>
          ))}
          </div>
        )}

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4 text-primary-700">मंडळाची उद्दिष्टे</h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>समाजातील सर्व घटकांचे सामाजिक, आर्थिक व शैक्षणिक उन्नयन.</li>
              <li>समाजातील विद्यार्थ्यांना शिक्षणासाठी प्रोत्साहन व आर्थिक मदत.</li>
              <li>समाज बांधवांमध्ये ऐक्य व सहकार्य वाढविणे.</li>
              <li>परंपरागत व्यवसायांचे संवर्धन व आधुनिकीकरण.</li>
              <li>समाजाच्या विकासासाठी शासनाकडून विविध योजना मिळविणे.</li>
              <li>समाजातील महिला सक्षमीकरणासाठी विशेष उपक्रम राबविणे.</li>
              <li>समाजातील तरुणांना रोजगार व स्वयंरोजगारासाठी प्रशिक्षण देणे.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExecutiveCommittee;