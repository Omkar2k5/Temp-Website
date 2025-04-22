import React from 'react';
import ContactForm from '../components/ContactForm';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6 text-primary-700" />,
      title: 'पत्ता',
      info: 'गाडी लोहार समाज उन्नती मंडळ, कल्याण, जिल्हा ठाणे, महाराष्ट्र',
    },
    {
      icon: <Phone className="h-6 w-6 text-primary-700" />,
      title: 'फोन',
      info: '९८६९३५८८६४, ९८१९१३६७३०',
    },
    {
      icon: <Mail className="h-6 w-6 text-primary-700" />,
      title: 'ईमेल',
      info: 'info@gadiloharsamaj.com',
    },
    {
      icon: <Clock className="h-6 w-6 text-primary-700" />,
      title: 'कार्यालयीन वेळ',
      info: 'सोम-शनि: सकाळी १० ते संध्या ६',
    },
  ];

  return (
    <div className="py-10 bg-gray-50 min-h-screen">
      <div className="container-custom">
        <h1 className="text-3xl font-bold mb-2 text-primary-700">संपर्क</h1>
        <p className="mb-8 text-gray-600">
          आमच्याशी संपर्क साधण्यासाठी खालील माहितीचा वापर करा किंवा फॉर्म भरा.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {contactInfo.map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center mb-4">
                    {item.icon}
                    <h3 className="ml-3 text-lg font-semibold text-gray-800">{item.title}</h3>
                  </div>
                  <p className="text-gray-700">{item.info}</p>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden h-80">
              {/* An iframe for Google Maps would go here in a real implementation */}
              <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500">
                <p>भूनकाशा इथे दाखवला जाईल</p>
              </div>
            </div>
          </div>

          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;