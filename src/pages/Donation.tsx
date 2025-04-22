import React from 'react';
import PaymentGateway from '../components/PaymentGateway';

const Donation: React.FC = () => {
  const donationSchemes = [
    {
      title: 'शिक्षण निधी',
      description: 'गरीब व होतकरू विद्यार्थ्यांना शिक्षणासाठी आर्थिक मदत करण्यासाठी.',
      amounts: ['₹५००', '₹१,०००', '₹५,०००', '₹१०,०००'],
    },
    {
      title: 'वैद्यकीय मदत निधी',
      description: 'गंभीर आजार असलेल्या गरजू समाजबांधवांना वैद्यकीय मदत करण्यासाठी.',
      amounts: ['₹१,०००', '₹५,०००', '₹१०,०००', '₹२५,०००'],
    },
    {
      title: 'समाज मंदिर निधी',
      description: 'समाज मंदिराच्या बांधकाम व देखभालीसाठी.',
      amounts: ['₹१,०००', '₹५,०००', '₹२५,०००', '₹५०,०००'],
    },
    {
      title: 'सामान्य देणगी',
      description: 'समाजाच्या विविध उपक्रमांसाठी.',
      amounts: ['₹१००', '₹५००', '₹१,०००', 'इतर'],
    },
  ];

  const majorDonors = [
    { name: 'श्री. रमेश जाधव', amount: '₹१,००,०००' },
    { name: 'श्री. सुनील कुरहेकर', amount: '₹७५,०००' },
    { name: 'श्री. प्रकाश शिंदे', amount: '₹५०,०००' },
    { name: 'श्रीमती संगीता मोरे', amount: '₹५०,०००' },
    { name: 'श्री. अमोल पाटील', amount: '₹२५,०००' },
  ];

  return (
    <div className="py-10 bg-gray-50 min-h-screen">
      <div className="container-custom">
        <h1 className="text-3xl font-bold mb-2 text-primary-700">देणगी</h1>
        <p className="mb-8 text-gray-600">
          गाडी लोहार समाज उन्नती मंडळाला देणगी देऊन समाजाच्या विकास कार्यात सहभागी व्हा.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-2xl font-bold mb-4 text-primary-700">देणगी शिर्षक</h2>
              
              <div className="space-y-6">
                {donationSchemes.map((scheme, index) => (
                  <div key={index} className="p-4 border border-gray-200 rounded-md hover:border-primary-500 transition-colors">
                    <h3 className="text-lg font-semibold text-primary-700 mb-2">{scheme.title}</h3>
                    <p className="text-gray-700 mb-4">{scheme.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {scheme.amounts.map((amount, amtIndex) => (
                        <button
                          key={amtIndex}
                          className="px-4 py-1 border border-primary-700 rounded-full text-primary-700 hover:bg-primary-700 hover:text-white transition-colors"
                        >
                          {amount}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-primary-50 rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold mb-4 text-primary-700">देणगी का द्यावी?</h2>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>गरीब व होतकरू विद्यार्थ्यांना शिक्षणासाठी मदत होईल.</li>
                <li>गंभीर आजार असलेल्या गरजू समाजबांधवांना वैद्यकीय मदत मिळेल.</li>
                <li>समाज मंदिराच्या बांधकाम व देखभालीसाठी मदत होईल.</li>
                <li>समाजाच्या विविध उपक्रमांसाठी आर्थिक पाठबळ मिळेल.</li>
                <li>कला व संस्कृती जपण्यासाठी मदत होईल.</li>
                <li>समाजातील युवकांना कौशल्य विकास प्रशिक्षण देण्यासाठी मदत होईल.</li>
              </ul>
              <p className="mt-4 text-sm text-gray-600">
                <strong>टीप:</strong> देणगी देताना कृपया पावती मिळवा. आपली देणगी कोणत्या निधीसाठी आहे ते स्पष्ट करा.
              </p>
            </div>
          </div>

          <div>
            <PaymentGateway />
            
            <div className="mt-8 bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold mb-4 text-primary-700">प्रमुख देणगीदार</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">नाव</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">रक्कम</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {majorDonors.map((donor, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{donor.name}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{donor.amount}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-sm text-gray-600 text-center">
                * सर्व देणगीदारांचे आभार!
              </p>
            </div>
            
            <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-md">
              <h3 className="text-lg font-semibold text-yellow-800 mb-2">इतर देणगी पद्धती</h3>
              <p className="text-gray-700 mb-2">
                ऑनलाइन पेमेंट व्यतिरिक्त, आपण खालील बँक खात्यात थेट हस्तांतरण करू शकता:
              </p>
              <div className="bg-white p-3 rounded-md">
                <p className="text-sm"><span className="font-medium">बँकेचे नाव:</span> स्टेट बँक ऑफ इंडिया</p>
                <p className="text-sm"><span className="font-medium">खाते क्रमांक:</span> 1234567890</p>
                <p className="text-sm"><span className="font-medium">IFSC कोड:</span> SBIN0001234</p>
                <p className="text-sm"><span className="font-medium">खातेदाराचे नाव:</span> गाडी लोहार समाज उन्नती मंडळ</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donation;