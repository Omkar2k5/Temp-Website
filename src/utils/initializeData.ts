import { communityInfoService, executiveCommitteeService } from '../services/firebaseService';

// Default home page content
const defaultHomeContent = [
  {
    title: 'गाडी लोहार जातीचा उदय',
    description: 'गाडी लोहार समाजाचा संपूर्ण इतिहास आणि विकास',
    content: `एक जात म्हणजे गाडी लोहार समाज, ही जात लोखंडी हत्यारे बनविणारे आणि बैलगाडीतून ते हिंडून विकणारे कारागीर होय. पंडित महादेवशास्त्री द्वारा लिखित भारतीय संस्कृती कोश खंड दुसरा पृष्ठ क्रमांक ७७५ या पुस्तकानुसार ही जात प्रथम राजस्थानमध्ये होती पुढे ही जात व्यवसाया निमित्त इतरत्र भटकू लागली. या जातीच्या दोन पोट जाती आहेत एकीला गाडी लोहार आणि दुसरीला मालवीय म्हणतात. हे लोक पीठव्याचे वंशज म्हणवत असुन त्यांच्या उत्पत्तीची दंतकथा अशी आहे की, पार्वतीने शिवाच्या पाठीवरील विभूती पासून त्यांना उत्पन्न केले शिवाला अंधकार व दंडकार या दोन राक्षसांना मारायचे होते व त्यांना त्यासाठी हत्यारांची आवश्यकता होती. ती तयार करण्यासाठी पार्वतीने त्यांची निर्मिती केली.

चितोड गडावरील राजपूत विरांना युध्दोपयोगी हत्यारे बनवून देण्याचे काम हे लोक करीत होते. चितोडगडाचा व तेथील राज्यकर्त्यांचा आणि सगळ्या राजस्थानच्या स्वातंत्र्याचा त्यांना अभिमान होता. इ. स. १५६८ साली अकबराने चितोडगड काबीज केला ही गोष्ट गाडी लोहारांना दुःखदायक व अपमानकारक वाटली म्हणून त्यांनी ठरवले की, यापुढे चितोडच्या परिसरात राहायचे नाही व चितोड पुनश्च स्वतंत्र होईपर्यंत गंभीरा नदी ओलांडून चितोडगडात प्रवेश करायचा नाही. तेव्हापासून ही जात महाराष्ट्र, मध्यप्रदेश, गुजरात व इतरत्र व्यवसायानिमित्त भटकू लागली.

४०० वर्ष चितोडगडा पासून परांगत झालेल्या या स्वाभिमानी जातीची दखल भारत स्वतंत्र झाल्यानंतर घेण्यात आली. स्वतंत्र भारताचे पहिले पंतप्रधान माननीय श्री पंडित नेहरूंच्या अध्यक्षतेखाली राजस्थान सरकारने एक भव्य असा मोठा समारंभ चितोडगडावर घेण्यात आला, त्या प्रसंगी गाडी लोहार समुदायाला पंडित नेहरूंनी म्हटले की.. " तुमचा पण सिद्धीस गेला आहे आता तुम्ही गंभीरा नदी ओलांडून चितोडच्या किल्ल्यात प्रवेश करा मी तुम्हाला माझ्याबरोबर चालण्याची विनंती करतो." तेव्हा या लोहार समुदायाने पंडित नेहरू यांच्या सोबत गडाच्या परिसरात पदार्पण केले तो दिवस या जातीसाठी सोन्याचा दिवस ठरला.

गाडी लोहार समाजाचे जीवन फार कष्टमय आहे, निरनिराळे अवजारे बनविणे व ती गावोगावी जाऊन हिंडून विकणे हा त्यांचा व्यवसाय होय यंत्रमय युगाच्या उदयापासून तर त्यांना अधिकच कष्टमय दशा आली. कित्येकदा त्यांना आपल्या पोटाची खडगी भरण्यासाठी स्वतःचे बैल विकावे लागले व नादुरुस्त गाड्या दुरुस्त करण्यासाठी पैसा नसल्याने त्या रस्त्याच्या बाजूला टाकून पुढे जावे लागे. पण आज समाजात शिक्षणाचा प्रभाव हळूहळू वाढू लागलाय सुशिक्षित पणामुळे ही जात एकत्र येवुन संघटित दिशेने वाटचाल करतांना दिसुन येत आहे. लोहार समाजाच्या संपूर्ण महाराष्ट्र, गुजराथ व मध्यप्रदेश मिळून ८६५ संघटना आहेत व विविध पातळीवर आप आपल्या परीने योग्य ते समाज कार्य करतांना दिसुन येत आहे.`,
    section: 'about',
    order: 1,
    isActive: true
  },
  {
    title: 'गाडी लोहार समाज उन्नती मंडळ कल्याणचा उदय',
    description: 'कल्याण येथील समाज संघटनेची स्थापना आणि विकास',
    content: `मनुष्य हा स्वभावत: समाजप्रिय आहे आज तो प्रगत विकसित झाला आहे. माणसाला एकटे राहणे आवडत नाही त्याच उद्देशाने आम्ही कल्याण निवासी गाडी लोहार समाज बांधव आपल्या मुळ समाज व गटापासून उपजीविकेच्या शोधार्थ आपले मुख्य व्यवसाय अनेक कारणांनी सोडून बाहेर पडलो. नवीन ठिकाणी चुकल्यासारखे वाटे नंतर आपली बोलीभाषा व पेहराव वरुण आम्ही एकमेकांना ओळखले. वाळवंटात हिरवळ सापडल्यासारखा आनंद झाला. शोधता शोधता आठ-दहा गाडी लोहार समाजबांधवांची कुटुंब कल्याण येथे असल्याचे आढळून आले. नंतर वारंवार भेटीगाठी होवुन सामाजिक गरजा पूर्ण करण्यासाठी एकमेकांच्या मदतीसाठी इ.स. १९६७ साली एक मंडळ स्थापन केले. ते गाडी लोहार समाज उन्नती मंडळ कल्याण या नावाने अभिमानाची बाब म्हणजे महाराष्ट्रातील पहिले गाडी लोहार समाज मंडळ म्हणून एक संघटनांचा पाया रोवला गेला आणि तोच आमचा मुळारंभ.

नंतर अनेक कुटुंब कल्याण, ठाणे, मुंबई, अंबरनाथ, बदलापुर, भिवंडी, येथे एकमेकांच्या ओळखीने शोधून काढली व या सर्वांचे एकत्रीकरण करण्यासाठी व त्यांच्यात सामाजिक बांधिलकी निर्माण करण्यासाठी दिनांक १६/११/१९७९ मधे मंडळ रजिस्टेशन करण्यात आले त्यासाठी योग्य ती नियमावली तयार करून सामाजिक कार्याची महूर्तमेढ रोवली.

समाज प्रगतीसाठी संघटित प्रयत्न करणे आवश्यक आहे व सामाजिक ऋण फेडणे आपले कर्तव्य आहे हया प्रेरणेतून कल्याण मंडळाचे संस्थापक कै. दत्तात्रय चिंधु कु-हेकर (तात्या) व कै. पुनमचंद धनजी सुर्यवंशी (आप्पा) यांच्या अथक परिश्रमातुन इ.स. १९८० साली लोहार समाजाचे पहिले स्नेह संमेलन ठाणे या ठिकाणी भरविले. संमेलनास अनेक समाज कार्यकर्ते उपस्थित होते. समाजाच्या दुःखाला वाचा फोडणारी भाषणे झाली. तिथुनच क्रांतीची ज्योत पेटली.

मंडळाचे संस्थापक व प्रचारक कै. दत्तात्रय चिंधु कु-हेकर (तात्या) व कै. पुनमचंद धनजी सुर्यवंशी (आप्पा) या महान समाज सेवकांनी इ.स. १९८१ ते १९९० च्या दरम्यान फोन सुविधा तसेच प्रवासासाठी साधने उपलब्ध नसतांना ही समाजाची योग्य ती माहिती जमा करण्यासाठी दोन समाजिक दौरे स्वखर्चाने आयोजित केले. पहिला दौरा-नवसारी, उधना, सुरत, बारडोली, उकई, सोनगड, व्यारा, नवापूर, नंदुरबार, सोनगीर, तळोदा व धुळे. दुसरा दौरा-मुकटी, पारोळा, एरंडोल, धरणगाव, गोरणे, चोपडा, शिरपूर, जळगाव, रावेर, बेटावद, वाघाडी, त-हाडी, शहादा, म्हसावद व पुणे इत्यादी दोधे दौरे जवळ जवळ पंधरा ते वीस दिवसांत स्वखर्चाने पूर्ण करून समाजाची माहिती गोळा करून कार्तिक शुद्ध प्रतिपदा दिनांक १९/१०/१९९० या शुभदिनी गाडी लोहार समाजाची पहिली खानेसुमारी ३१४ पानांची कल्याण मंडळाने इतरत्र कुणाच्या चरणी न अर्पण करता समाजाला अर्पण केली कारण समाजा पेक्षा कोणीही मोठे नाही आणि तो दिवस समाजासाठी व कल्याण मंडळासाठी सोन्याचा दिवस आम्ही समजतो व मानतो.`,
    section: 'about',
    order: 2,
    isActive: true
  },
  {
    title: 'समाजाची प्रगती आणि सरकारी मान्यता',
    description: 'एन.टी. प्रमाणपत्र मिळविण्यासाठीचे प्रयत्न आणि यश',
    content: `गाडी लोहार समाजाला एन.टी.साठी प्राधान्य व सर्टिफिकेट मिळवण्यासाठी कल्याण मंडळाचे शिष्टमंडळ इ.स.१९८१ साली स्थानिक आमदारांना भेटून त्यांच्याकडून लिखित आवेदन घेतली त्यात एदलाबादच्या आमदार ताई साहेब प्रतिभा पाटील ज्या माजी राष्ट्रपती होऊन गेल्या, जळगावचे श्री सुरेशदादा जैन, पाचोराचे श्री बापूसाहेब एम. पाटील, रावेरचे श्री आर.आर.पाटील, पारोळ्याचे आप्पासाहेब श्री भा.रा.पाटील, चाळीसगावचे श्री डी.डी. चव्हाण, एरंडोलचे श्रीमती भारती वाघ, धुळेचे श्रीमती कमलाताई अजमेरे, भुसावलचे हाजी यासीन बागवान, चोपड्यांचे श्रीमती चंद्रकलाबाई या सर्व आमदारांना भेटून त्यांच्या कडून लिखित निवेदन घेऊन दिनांक ०७/०९/१९८१ साली महाराष्ट्राचे मुख्यमंत्री श्री अंतुले यांना समाजाचे शिष्टमंडळ भेटले व विभागीय आमदारांचे निवेदन सादर केली.

तेव्हा शासकीय यंत्रणेस जाग येवुन त्यांनी एक पत्रक प्रसिद्ध केले ते असे-डब्लू.एस.टी.एन./जे.डी.एस.बी.सी./लोहार/१९८२ डायरेक्ट ऑफ सोशल वेल्फेअर महाराष्ट्र स्टेट पुणे यांना दिनांक १८/०६/१९८२ पत्रकात विभागीय अधिकारीना लोहार समाजाच्या अडचणी जागच्या जागी सोडविण्याचा मार्गदर्शन आदेश देण्यात आले.`,
    section: 'about',
    order: 3,
    isActive: true
  },
  {
    title: 'कल्याण मंडळाची आजची प्रगती',
    description: 'मंडळाचे आधुनिक कार्य आणि उपक्रम',
    content: `आज पर्यंत कल्याण मंडळाचा समाजकार्याचा रथ प्रगती कडे नेत आहोत समाज बंधुनी अथक प्रयत्न करून इ.स. २००३ ला स्वतःची वास्तू उभी केली मंडळाने समाज प्रगतीसाठी जुन्या चालीरीती मोडीत काढून नवीन चालीरीती ठरावा द्वारे मंजूर करून घेतले त्यात दशक्रिया विधी दहाव्या दिवशी व त्याच दिवशी पान पोस व अकराव्या दिवशी गंधमुक्त करण्याचे कार्य चालु केले. जेने करून बाहेरगावाहून येणारे समाज बांधव व दु:खद परिवार यांचा दोन दिवसांचा खर्च टाळता येईल. ज्यांच्या घरी कोणी मयत झाले त्या घरी पहिल्या दिवसाचा बोळवन खर्च कल्याण मंडळ करते.

पूर्वी ताटामध्ये टाक गोळा करण्याची पद्धत होती ती मोडीत काडून आता टाक हा नोंद करून स्वीकार केला जातो, जेने करून मयत झालेल्या परिवारांना ही जाण होईल की आपल्या दुःखात कोणकोण समाज बंधु समाविष्ट झाले होते. हे सर्व कार्य पार पाडण्यासाठी कल्याण मंडळाने एक समिती नियुक्त केली आहे.

मंडळाचे कामकाज सर्व समाज बांधवांच्या संगमताने चालते, मंडळाचा वित्तीय जमाखर्च समाजबांधवांना समजावून सांगितला जातो. प्रत्येक वर्षी मंडळाचे एडिट केला जातो, इनकम टॅक्स डिपार्टमेंटला मंडळाचा रिटर्न फाइल केली जाते.`,
    section: 'about',
    order: 4,
    isActive: true
  },
  {
    title: 'सांस्कृतिक कार्यक्रम आणि समाजसेवा',
    description: 'मंडळाचे विविध सामाजिक आणि सांस्कृतिक उपक्रम',
    content: `आराध्य दैवत भगवान विश्वकर्मा यांची जयंती शासनाच्या जी.आर. प्रमाणे उद्योग दिवस म्हणुन थाटामाटात साजरी केली जाते या जयंतीचे औचित्य साधून समाजातील कारागिरांचा उत्कृष्ट कारागीर म्हणून सत्कार केला जातो. कल्याण मंडळ अंतर्गत येणारे शिक्षक शिक्षिका यांचा आदर्श शिक्षक-शिक्षिका पुरस्कार देवुन गौरव केला जातो.

सांस्कृतिक कार्यक्रमांचे आयोजन केले जाते ज्यात महिलांसाठी संगीतखुर्ची, विद्यार्थ्यांसाठी डान्स स्पर्धा, वकृत्व स्पर्धा, चित्रकला स्पर्धा, गायन स्पर्धा यासारखे स्पर्धा घेऊन विशेष पुरस्काराने सर्वांना सन्मानित करण्यात येते. तसेच गुणगौरव कार्यक्रम आयोजीत केला जातो ज्यात विद्यार्थ्यांचा गुणगौरव केला जातो.

विद्यार्थ्यांना वहय़ा व शालेय साहित्य वाटप केले जाते गरजु विद्यार्थ्यांना स्कॉलरशिप व शालेय गणवेशाचे वाटप केले जाते. ज्यानी समाजासाठी अहोरात्र चांगले कार्य केले अशा समाज सेवकांना समाजरत्न पुरस्कार देऊन व ज्येष्ठ समाज बंधूंना ज्येष्ठ समाजसेवक पुरस्काराने सन्मानित केले जाते. बहुसंख्य समाज बंधू भगिनी वरील कार्यक्रमास आवार्जुन उपस्थित राहतात कल्याण मंडळा द्वारा सामाजिक शैक्षणिक व सांस्कृतिक कार्यक्रमाचा वारसा चालवित असल्या कारणानी कल्याणचे आमदार व महापौर यांनी आदर्श मंडळ म्हणुन गौरव केला आहे.`,
    section: 'about',
    order: 5,
    isActive: true
  },
  {
    title: 'सध्याची कार्यकारिणी आणि भविष्य',
    description: 'वर्तमान नेतृत्व आणि समाजाचे भविष्य',
    content: `तन मन धनाने कल्याण मंडळाची कार्यकारिणी समाजात नवनवीन उपक्रम राबवण्यासाठी सदैव तत्पर आहेत व कल्याण मंडळाचा प्रगतीचा रथ ओडण्याचे महान कार्य संपूर्ण कार्यकारिणी करीत आहे ज्यात अध्यक्ष श्री युवराज मुरार जाधव, सचिव श्री राजेन्द्र निंबालाल जाधव, खजिंनदार श्री सुकलाल मयाराम कु-हेकर व सदस्य श्री दिपचंद धर्मदास राठोड, श्री प्रल्हाद दत्तात्रय कु-हेकर, श्री अनिल मक्कल गोराणे, श्री दिपक लकडू लोहार, श्री धनराज रमन लोहार, श्री हनुमान शिवलाल लोहार, श्री किशोर ब्रिजलाल लोहार, श्री गणेश पुरुषोत्तम गोराणे, श्री निलेश रतिलाल पवार, श्री निलेश गिरेंद्र लोहार.

"लहारोसे डर कर नौका पार नहीं होती।
कोशिश करने वालो की हार नही होती।।"`,
    section: 'about',
    order: 6,
    isActive: true
  }
];

// Default executive committee members
const defaultExecutiveCommittee = [
  {
    name: 'श्री युवराज मुरार जाधव',
    position: 'अध्यक्ष',
    phone: '९८६९३५८८६४',
    email: 'yuvraj.jadhav@example.com',
    address: 'कल्याण, जि. ठाणे',
    education: '',
    job: 'कार्याअघ्यक्ष - अखिल भारतीय श्री विश्वकर्मा प्रबोधिनी संस्था',
    description: 'प्रदेश अघ्यक्ष - अखिल लोहार गाडी लोहार समाज विकास संस्था महाराष्ट्र राज्य',
    imageUrl: '',
    imagePublicId: '',
    isActive: true,
    order: 1,
    tenure: 'कार्यकाल २०१७ - २०२०'
  },
  {
    name: 'श्री राजेन्द्र निंबालाल जाधव',
    position: 'सचिव',
    phone: '९८२१२३४५६७',
    email: 'rajendra.jadhav@example.com',
    address: 'कल्याण, जि. ठाणे',
    education: '',
    job: 'समाजसेवक आणि संघटक',
    description: '',
    imageUrl: '',
    imagePublicId: '',
    isActive: true,
    order: 2,
    tenure: 'कार्यकाल २०१७ - २०२०'
  },
  {
    name: 'श्री सुकलाल मयाराम कु-हेकर',
    position: 'खजिनदार',
    phone: '९८३४५६७८९०',
    email: 'suklal.kuheker@example.com',
    address: 'कल्याण, जि. ठाणे',
    education: '',
    job: 'आर्थिक व्यवस्थापन तज्ञ',
    description: '',
    imageUrl: '',
    imagePublicId: '',
    isActive: true,
    order: 3,
    tenure: 'कार्यकाल २०१७ - २०२०'
  },
  {
    name: 'श्री प्रल्हाद दत्तात्रय कुर्‍हेकर',
    position: 'सदस्य',
    phone: '९८३३३४७७६४',
    email: 'pralhad.kurheker@example.com',
    address: 'कल्याण, जि. ठाणे',
    education: 'S.S.C / ITI',
    job: 'मेकॅनिकल फिटर मध्य रेल',
    description: '',
    imageUrl: '',
    imagePublicId: '',
    isActive: true,
    order: 4,
    tenure: 'कार्यकाल २०१७ - २०२०'
  },
  {
    name: 'श्री अनिल मक्कन गोराणे',
    position: 'सदस्य',
    phone: '९२२२२१४९६९',
    email: 'anil.gorane@example.com',
    address: 'कल्याण, जि. ठाणे',
    education: 'S.S.C',
    job: 'गणराज फर्निचर मार्ट',
    description: '',
    imageUrl: '',
    imagePublicId: '',
    isActive: true,
    order: 5,
    tenure: 'कार्यकाल २०१७ - २०२०'
  },
  {
    name: 'श्री दिपक लकडु लोहार',
    position: 'सदस्य',
    phone: '९४०३०३४६८८',
    email: 'dipak.lohar@example.com',
    address: 'कल्याण, जि. ठाणे',
    education: 'B.A',
    job: 'मनीट्रान्सफर-किराणा मर्चन्ट',
    description: '',
    imageUrl: '',
    imagePublicId: '',
    isActive: true,
    order: 6,
    tenure: 'कार्यकाल २०१७ - २०२०'
  },
  {
    name: 'श्री हनुमान शिवलाल लोहार',
    position: 'सदस्य',
    phone: '९८९०६८३३६५',
    email: 'hanuman.lohar@example.com',
    address: 'कल्याण, जि. ठाणे',
    education: 'M.A. Bed',
    job: 'प्राध्यापक ज्युनीयर कॉलेज',
    description: '',
    imageUrl: '',
    imagePublicId: '',
    isActive: true,
    order: 7,
    tenure: 'कार्यकाल २०१७ - २०२०'
  },
  {
    name: 'श्री धनराज रमन गोराणे',
    position: 'सदस्य',
    phone: '९८९०६८३३६५',
    email: 'dhanraj.gorane@example.com',
    address: 'कल्याण, जि. ठाणे',
    education: 'S.S.C',
    job: 'मेँन्टनेँस मॅनेजर प्रा.',
    description: '',
    imageUrl: '',
    imagePublicId: '',
    isActive: true,
    order: 8,
    tenure: 'कार्यकाल २०१७ - २०२०'
  },
  {
    name: 'श्री किशोर ब्रिजलाल लोहार',
    position: 'सदस्य',
    phone: '९२२४६१२५१८',
    email: 'kishor.lohar@example.com',
    address: 'कल्याण, जि. ठाणे',
    education: 'H.S.C / I.T.I',
    job: 'ऑपरेटर हिंडाल्को कंपनी',
    description: '',
    imageUrl: '',
    imagePublicId: '',
    isActive: true,
    order: 9,
    tenure: 'कार्यकाल २०१७ - २०२०'
  },
  {
    name: 'श्री गणेश पुरूषोत्तम गोराणे',
    position: 'सदस्य',
    phone: '९२२४०५८०२४',
    email: 'ganesh.gorane@example.com',
    address: 'कल्याण, जि. ठाणे',
    education: 'H.S.C',
    job: 'इलेक्ट्रिकल व्यवसाय',
    description: '',
    imageUrl: '',
    imagePublicId: '',
    isActive: true,
    order: 10,
    tenure: 'कार्यकाल २०१७ - २०२०'
  },
  {
    name: 'श्री निलेश गिरेंद्र लोहार',
    position: 'सदस्य',
    phone: '८६९८९४०९०९',
    email: 'nilesh.g.lohar@example.com',
    address: 'कल्याण, जि. ठाणे',
    education: 'H.S.C/ मेकॅनिकल डिप्लोमा',
    job: 'सेल्स/रिप्रेझेंटेटीव एक्ज्यूकेटिव्ह',
    description: '',
    imageUrl: '',
    imagePublicId: '',
    isActive: true,
    order: 11,
    tenure: 'कार्यकाल २०१७ - २०२०'
  },
  {
    name: 'श्री निलेश रतिलाल पवार',
    position: 'सदस्य',
    phone: '८१०८८८७०५५',
    email: 'nilesh.pawar@example.com',
    address: 'कल्याण, जि. ठाणे',
    education: 'M.A Bed',
    job: 'पोलीस नायक(महाराष्ट्रपोलीस)',
    description: '',
    imageUrl: '',
    imagePublicId: '',
    isActive: true,
    order: 12,
    tenure: 'कार्यकाल २०१७ - २०२०'
  }
];

export const clearAndInitializeHomeContent = async () => {
  try {
    console.log('Clearing existing home page content...');

    // Get all existing content
    const existingContent = await communityInfoService.getBySection('about');

    // Delete all existing content
    for (const content of existingContent) {
      if (content.id) {
        await communityInfoService.delete(content.id);
      }
    }

    console.log('Adding new home page content...');

    // Add new default content
    for (const content of defaultHomeContent) {
      await communityInfoService.add(content);
    }

    console.log('Home page content reinitialized successfully');
  } catch (error) {
    console.error('Error reinitializing home content:', error);
  }
};

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

export const clearAndInitializeExecutiveCommittee = async () => {
  try {
    console.log('Clearing existing executive committee...');

    // Get all existing committee members
    const existingCommittee = await executiveCommitteeService.getAll();

    // Delete all existing members
    for (const member of existingCommittee) {
      if (member.id) {
        await executiveCommitteeService.delete(member.id);
      }
    }

    console.log('Adding new executive committee members...');

    // Add new default committee members
    for (const member of defaultExecutiveCommittee) {
      await executiveCommitteeService.add(member);
    }

    console.log('Executive committee reinitialized successfully');
  } catch (error) {
    console.error('Error reinitializing executive committee:', error);
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

export const clearAndInitializeAllData = async () => {
  await clearAndInitializeHomeContent();
  await clearAndInitializeExecutiveCommittee();
};

export const clearAllExistingData = async () => {
  try {
    console.log('Clearing all existing Firebase data...');

    // Clear home content
    const existingContent = await communityInfoService.getBySection('about');
    for (const content of existingContent) {
      if (content.id) {
        await communityInfoService.delete(content.id);
      }
    }

    // Clear executive committee
    const existingCommittee = await executiveCommitteeService.getAll();
    for (const member of existingCommittee) {
      if (member.id) {
        await executiveCommitteeService.delete(member.id);
      }
    }

    console.log('All existing data cleared successfully');
  } catch (error) {
    console.error('Error clearing existing data:', error);
    throw error;
  }
};
