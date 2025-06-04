import { executiveCommitteeService } from '../services/firebaseService';

const executiveCommitteeData = [
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
    isActive: true,
    order: 12,
    tenure: 'कार्यकाल २०१७ - २०२०'
  }
];

export const addExecutiveCommitteeToFirebase = async () => {
  try {
    console.log('Adding executive committee members to Firebase...');
    
    // Clear existing data first
    const existingMembers = await executiveCommitteeService.getAll();
    for (const member of existingMembers) {
      if (member.id) {
        await executiveCommitteeService.delete(member.id);
      }
    }
    
    // Add new members
    for (const member of executiveCommitteeData) {
      await executiveCommitteeService.add(member);
      console.log(`Added: ${member.name}`);
    }
    
    console.log('All executive committee members added successfully!');
  } catch (error) {
    console.error('Error adding executive committee members:', error);
  }
};

// Run the function if this file is executed directly
if (typeof window !== 'undefined') {
  addExecutiveCommitteeToFirebase();
}
