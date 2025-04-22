import React from 'react';
import { 
  Calendar, 
  Users, 
  Award, 
  Heart, 
  Building2, 
  Trophy,
  GraduationCap,
  Handshake,
  ScrollText,
  Building,
  Image,
  Video,
  Music,
  Palette,
  BookOpen,
  Wrench,
  HelpingHand,
  UserCheck
} from 'lucide-react';

const Activities: React.FC = () => {
  const activities = [
    {
      id: 1,
      title: 'विश्वकर्मा जयंती उद्योग दिवस',
      description: 'विश्वकर्मा जयंती उद्योग दिवस म्हणून साजरी केली जाते',
      icon: <Calendar className="h-8 w-8 text-primary-700" />,
      items: [
        { icon: <Award />, text: 'विश्वकर्मा जयंती शासनाचा GR नुसार उद्योग दिवस म्हणुन साजरी करतो.' },
        { icon: <Users />, text: 'विश्वकर्माच्या पालखीचे कल्याण परिसरात वाजत गाजत मिरवणूक काढली जाते.' },
        { icon: <Trophy />, text: 'विधिवत श्री विश्वकर्मा देवताची पुजा केली जाते.' },
        { icon: <Music />, text: 'महिलांनसाठी संगीत खुर्चीचा मनोरजनांत्मक स्पर्धा घेतली जाते व विजेता महिलास सन्मान पत्र व ट्रॉफी दिली जाते.' },
        { icon: <Palette />, text: 'सांस्कृतिक कार्यक्रम घेतले जातात, ज्यात विद्यार्थ्यांनसाठी नृत्य स्पर्धा, गायन स्पर्धा, वकृत्व स्पर्धा, रांगोळी स्पर्धा, निंबध स्पर्धा, चित्रकला स्पर्धाचे आयोजन केले जाते.' },
        { icon: <GraduationCap />, text: 'समाजातील शिक्षक, शिक्षिकांचा आदर्श शिक्षक - शिक्षिकां म्हणुन पुरस्कार देवुन सन्मान केला जातो.' },
        { icon: <Wrench />, text: 'समाजातील परंपरागत व्यवसाय करणाऱ्या समाज बंधुचा उत्कृष्ट कारागिर म्हणुन पुरस्कार देवुन सन्मान केला जातो.' }
      ]
    },
    {
      id: 2,
      title: 'सन्मान सोहळा कार्यक्रम',
      description: 'सन्मान सोहळा कार्यक्रम भव्य स्वरुपात आयोजित केला जातो',
      icon: <Trophy className="h-8 w-8 text-primary-700" />,
      items: [
        { icon: <GraduationCap />, text: 'इयत्ता १० वी, १२ वी, ग्रेजुएट - पोस्ट ग्रेजुएट, इंजिनीअर्स, डॉक्टर या क्षेत्रात विशेष प्राविण्य मिळविलेल्या विद्यार्थ्याना सन्मान पत्र - ट्रॉफी व रोख स्वरुपात बक्षिस देवुन सन्मानीत केले जाते.' },
        { icon: <BookOpen />, text: 'इयत्ता Sr. KG पास ते बारावी पास असे शंभरा पेक्षा जास्त विद्यार्थ्याना वह्या व शालेय साहित्याचे वाटप केले जाते. तसेच गरजु विद्यार्थ्याना स्कॉलरशिप व स्कुल ड्रेसचे वाटप केले जाते.' },
        { icon: <Award />, text: 'ज्यांनी समाजासाठी अनमोल असे कार्य केले असे समाज बंधु बघिनींना समाज रत्न व जेष्ठाचा ज्येष्ठ समाज सेवक म्हणुन पुरस्कार देवुन सन्मान केला जातो.' }
      ]
    },
    {
      id: 3,
      title: 'आर्थिक व अन्य मदत',
      description: 'आर्थिक व अन्य मदत केली जाते',
      icon: <HelpingHand className="h-8 w-8 text-primary-700" />,
      items: [
        { icon: <Heart />, text: 'समाजातील गरीब परिवाराला आर्थिक मदत ज्यात मेडीकल मदत, आपातकालीन मदत दिली जाते.' },
        { icon: <Users />, text: 'समाजातील कुठल्याही परिवारात दुःखद निधन झाले तर पहिल्या दिवसाच्या संपूर्ण खर्च मंडळा कडून केला जातो व त्यासाठी पाच लोकांची स्पेशल समिती नियुक्त केली आहे.' },
        { icon: <ScrollText />, text: 'समाजातील जुन्या जाचक चाली रीती मोडीत काढून नविन सुयोग्य, फायदेशीर व विकासात्मक चाली रीती लागु केले जाते.' },
        { icon: <UserCheck />, text: 'माता बघिणीच्या रक्षणासाठी अहोरात्र कार्यकारणी पदाधिकारी व संपूर्ण समाज एकत्र येवुन मदतीसाठी कुठल्याही नुकसानाला न जुमानता धावुन जातात.' },
        { icon: <Handshake />, text: 'समाजातील उपवर विवाह योग्य मुला मुलींचे विवाह जुड़विणे व विवाह लावुन देणे.' },
        { icon: <Users />, text: 'समाजातील दोन परिवारातील आप आपसातील मत भेदामुळे उद्भभविलेल्या तक्रारींना पोलीस स्टेशन पर्यन्त न जावु देता सलोखा समिती द्वारे सलोखा घडवुन आणून पुन्हा त्यांच्यात गोडवा निर्माण करुण एकत्र करणे.' }
      ]
    },
    {
      id: 4,
      title: 'शासकीय प्रतिनिधित्व',
      description: 'शासन दरबारी वेळो वेळी समाज्याच्या समस्या पोहचविणे',
      icon: <Building2 className="h-8 w-8 text-primary-700" />,
      items: [
        { icon: <ScrollText />, text: 'जातीच्या दाखला व वैधता प्रमाण पत्र साठी वेळो वेळी पाठपुरावा करीत असतो.' },
        { icon: <Users />, text: 'समाजातील तरुण युवा युवतींन साठी रोजगार मिळावा यासाठी रोजगार शिबिरे घेवुन रोजगार प्राप्त करुण दिले जाते.' },
        { icon: <Building />, text: 'शासन दरबारी विविध मागण्यांसाठी संम्मेलने घेवुन संघटित करुण अंदोलन उभे केले जाते.' },
        { icon: <Building2 />, text: 'विखुरलेल्या या समाजासाठी धर्मशाळा, शैक्षणिक संस्था, बोर्डिग या सारख्या उपक्रमांसाठी शासकीय जागा हस्तगत करणे व त्या ठिकाणी वास्तु उभारणी करणे.' }
      ]
    }
  ];

  return (
    <div className="py-10 bg-gray-50 min-h-screen">
      <div className="container-custom">
        <h1 className="text-3xl font-bold mb-2 text-primary-700">उपक्रम</h1>
        <p className="mb-8 text-gray-600">
          गाडी लोहार समाज उन्नती मंडळातर्फे राबविण्यात येणारे विविध उपक्रम.
        </p>

        <div className="space-y-8">
          {activities.map((activity) => (
            <div key={activity.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  {activity.icon}
                  <h2 className="text-2xl font-bold ml-3 text-primary-700">{activity.title}</h2>
                </div>
                <p className="text-gray-700 mb-6">{activity.description}</p>

                <div className="grid gap-4">
                  {activity.items.map((item, index) => (
                    <div key={index} className="flex items-start bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-colors">
                      <div className="text-primary-600 mr-3 mt-1">
                        {React.cloneElement(item.icon, { className: "h-5 w-5" })}
                      </div>
                      <p className="text-gray-700">{item.text}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex items-center space-x-4">
                  <button className="flex items-center px-4 py-2 text-sm text-primary-700 bg-primary-50 rounded-md hover:bg-primary-100 transition-colors">
                    <Image className="h-4 w-4 mr-2" />
                    फोटोज बघा
                  </button>
                  <button className="flex items-center px-4 py-2 text-sm text-primary-700 bg-primary-50 rounded-md hover:bg-primary-100 transition-colors">
                    <Video className="h-4 w-4 mr-2" />
                    विडीओ बघा
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Activities;