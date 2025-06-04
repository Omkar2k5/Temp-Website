import { communityInfoService, executiveCommitteeService } from '../services/firebaseService';

// Default home page content
const defaultHomeContent = [
  {
    title: 'गाडी लोहार समाजाचा इतिहास',
    description: 'समाजाची ऐतिहासिक माहिती आणि उत्पत्ती',
    content: `एक जात म्हणजे गाडी लोहार समाज, ही जात लोखंडी हत्यारे बनविणारे आणि बैलगाडीतून ते हिंडून विकणारे कारागीर होय. पंडित महादेवशास्त्री द्वारा लिखित भारतीय संस्कृती कोश खंड दुसरा पृष्ठ क्रमांक ७७५ या पुस्तकानुसार ही जात प्रथम राजस्थानमध्ये होती पुढे ही जात व्यवसाया निमित्त इतरत्र भटकू लागली.

या जातीच्या दोन पोट जाती आहेत एकीला गाडी लोहार आणि दुसरीला मालवीय म्हणतात. हे लोक पीठव्याचे वंशज म्हणवत असुन त्यांच्या उत्पत्तीची दंतकथा अशी आहे की, पार्वतीने शिवाच्या पाठीवरील विभूती पासून त्यांना उत्पन्न केले शिवाला अंधकार व दंडकार या दोन राक्षसांना मारायचे होते व त्यांना त्यासाठी हत्यारांची आवश्यकता होती. ती तयार करण्यासाठी पार्वतीने त्यांची निर्मिती केली.`,
    section: 'about',
    order: 1,
    isActive: true
  },
  {
    title: 'चितोडगडाचा गौरवशाली इतिहास',
    description: 'चितोडगड आणि गाडी लोहार समाजाचे नाते',
    content: `चितोड गडावरील राजपूत विरांना युध्दोपयोगी हत्यारे बनवून देण्याचे काम हे लोक करीत होते. चितोडगडाचा व तेथील राज्यकर्त्यांचा आणि सगळ्या राजस्थानच्या स्वातंत्र्याचा त्यांना अभिमान होता. इ. स. १५६८ साली अकबराने चितोडगड काबीज केला ही गोष्ट गाडी लोहारांना दुःखदायक व अपमानकारक वाटली म्हणून त्यांनी ठरवले की, यापुढे चितोडच्या परिसरात राहायचे नाही व चितोड पुनश्च स्वतंत्र होईपर्यंत गंभीरा नदी ओलांडून चितोडगडात प्रवेश करायचा नाही.

"लहारोसे डर कर नौका पार नहीं होती।
कोशिश करने वालो की हार नही होती।।"`,
    section: 'about',
    order: 2,
    isActive: true
  },
  {
    title: 'गाडी लोहार समाज उन्नती मंडळ कल्याणचा उदय',
    description: 'कल्याण येथील समाज संघटनेची स्थापना',
    content: `मनुष्य हा स्वभावत: समाजप्रिय आहे आज तो प्रगत विकसित झाला आहे. माणसाला एकटे राहणे आवडत नाही त्याच उद्देशाने आम्ही कल्याण निवासी गाडी लोहार समाज बांधव आपल्या मुळ समाज व गटापासून उपजीविकेच्या शोधार्थ आपले मुख्य व्यवसाय अनेक कारणांनी सोडून बाहेर पडलो.`,
    section: 'about',
    order: 3,
    isActive: true
  }
];

// Default executive committee members
const defaultExecutiveCommittee = [
  {
    name: 'श्री. युवराज जाधव',
    position: 'अध्यक्ष',
    phone: '9869358864',
    email: 'president@gadiloharsamaj.com',
    description: 'समाजाचे मार्गदर्शक नेतृत्व',
    order: 1,
    isActive: true
  },
  {
    name: 'श्री. राजेश पाटील',
    position: 'उपाध्यक्ष',
    phone: '',
    email: '',
    description: '',
    order: 2,
    isActive: true
  },
  {
    name: 'श्री. संजय शिंदे',
    position: 'सचिव',
    phone: '',
    email: 'secretary@gadiloharsamaj.com',
    description: '',
    order: 3,
    isActive: true
  },
  {
    name: 'श्री. प्रकाश कुमार',
    position: 'खजिनदार',
    phone: '',
    email: '',
    description: '',
    order: 4,
    isActive: true
  }
];

export const initializeHomeContent = async () => {
  try {
    // Check if content already exists
    const existingContent = await communityInfoService.getBySection('about');
    
    if (existingContent.length === 0) {
      console.log('Initializing home page content...');
      
      // Add default content
      for (const content of defaultHomeContent) {
        await communityInfoService.add(content);
      }
      
      console.log('Home page content initialized successfully');
    } else {
      console.log('Home page content already exists');
    }
  } catch (error) {
    console.error('Error initializing home content:', error);
  }
};

export const initializeExecutiveCommittee = async () => {
  try {
    // Check if committee already exists
    const existingCommittee = await executiveCommitteeService.getAll();
    
    if (existingCommittee.length === 0) {
      console.log('Initializing executive committee...');
      
      // Add default committee members
      for (const member of defaultExecutiveCommittee) {
        await executiveCommitteeService.add(member);
      }
      
      console.log('Executive committee initialized successfully');
    } else {
      console.log('Executive committee already exists');
    }
  } catch (error) {
    console.error('Error initializing executive committee:', error);
  }
};

export const initializeAllData = async () => {
  await initializeHomeContent();
  await initializeExecutiveCommittee();
};
