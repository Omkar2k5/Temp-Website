import { MemberData, BrideGroomData, CensusData, FeedbackData, ContactData } from '../types/data';
import {
  memberService,
  brideGroomService,
  censusService,
  feedbackService,
  contactService
} from '../services/firebaseService';

// Storage keys for localStorage fallback
const STORAGE_KEYS = {
  MEMBERS: 'gadilohar_members',
  BRIDE_GROOM: 'gadilohar_bride_groom',
  CENSUS: 'gadilohar_census',
  FEEDBACK: 'gadilohar_feedback',
  CONTACT: 'gadilohar_contact'
};

// Generic storage functions
const getStorageData = <T>(key: string): T[] => {
  try {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error(`Error reading from localStorage for key ${key}:`, error);
    return [];
  }
};

const setStorageData = <T>(key: string, data: T[]): void => {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.error(`Error writing to localStorage for key ${key}:`, error);
  }
};

const generateId = (): string => {
  return Date.now().toString() + Math.random().toString(36).substr(2, 9);
};

// Member data functions - Firebase with localStorage fallback
export const saveMemberData = async (memberData: Omit<MemberData, 'id' | 'createdAt'>): Promise<string> => {
  try {
    const id = await memberService.add(memberData);
    return id;
  } catch (error) {
    console.error('Firebase error, falling back to localStorage:', error);
    // Fallback to localStorage
    const members = getStorageData<MemberData>(STORAGE_KEYS.MEMBERS);
    const newMember: MemberData = {
      ...memberData,
      id: generateId(),
      createdAt: new Date().toISOString()
    };
    members.push(newMember);
    setStorageData(STORAGE_KEYS.MEMBERS, members);
    return newMember.id;
  }
};

export const getMembersData = async (): Promise<MemberData[]> => {
  try {
    const data = await memberService.getAll();
    return data as MemberData[];
  } catch (error) {
    console.error('Firebase error, falling back to localStorage:', error);
    return getStorageData<MemberData>(STORAGE_KEYS.MEMBERS);
  }
};

export const deleteMemberData = async (id: string): Promise<boolean> => {
  try {
    await memberService.delete(id);
    return true;
  } catch (error) {
    console.error('Firebase error, falling back to localStorage:', error);
    const members = getStorageData<MemberData>(STORAGE_KEYS.MEMBERS);
    const filteredMembers = members.filter(member => member.id !== id);
    setStorageData(STORAGE_KEYS.MEMBERS, filteredMembers);
    return filteredMembers.length < members.length;
  }
};

// Bride/Groom data functions - Firebase with localStorage fallback
export const saveBrideGroomData = async (brideGroomData: Omit<BrideGroomData, 'id' | 'createdAt'>): Promise<string> => {
  try {
    const id = await brideGroomService.add(brideGroomData);
    return id;
  } catch (error) {
    console.error('Firebase error, falling back to localStorage:', error);
    const brideGroomList = getStorageData<BrideGroomData>(STORAGE_KEYS.BRIDE_GROOM);
    const newEntry: BrideGroomData = {
      ...brideGroomData,
      id: generateId(),
      createdAt: new Date().toISOString()
    };
    brideGroomList.push(newEntry);
    setStorageData(STORAGE_KEYS.BRIDE_GROOM, brideGroomList);
    return newEntry.id;
  }
};

export const getBrideGroomData = async (): Promise<BrideGroomData[]> => {
  try {
    const data = await brideGroomService.getAll();
    return data as BrideGroomData[];
  } catch (error) {
    console.error('Firebase error, falling back to localStorage:', error);
    return getStorageData<BrideGroomData>(STORAGE_KEYS.BRIDE_GROOM);
  }
};

export const deleteBrideGroomData = async (id: string): Promise<boolean> => {
  try {
    await brideGroomService.delete(id);
    return true;
  } catch (error) {
    console.error('Firebase error, falling back to localStorage:', error);
    const brideGroomList = getStorageData<BrideGroomData>(STORAGE_KEYS.BRIDE_GROOM);
    const filteredList = brideGroomList.filter(entry => entry.id !== id);
    setStorageData(STORAGE_KEYS.BRIDE_GROOM, filteredList);
    return filteredList.length < brideGroomList.length;
  }
};

// Census data functions - Firebase with localStorage fallback
export const saveCensusData = async (censusData: Omit<CensusData, 'id' | 'createdAt'>): Promise<string> => {
  try {
    const id = await censusService.add(censusData);
    return id;
  } catch (error) {
    console.error('Firebase error, falling back to localStorage:', error);
    const censusList = getStorageData<CensusData>(STORAGE_KEYS.CENSUS);
    const newEntry: CensusData = {
      ...censusData,
      id: generateId(),
      createdAt: new Date().toISOString()
    };
    censusList.push(newEntry);
    setStorageData(STORAGE_KEYS.CENSUS, censusList);
    return newEntry.id;
  }
};

export const getCensusData = async (): Promise<CensusData[]> => {
  try {
    const data = await censusService.getAll();
    return data as CensusData[];
  } catch (error) {
    console.error('Firebase error, falling back to localStorage:', error);
    return getStorageData<CensusData>(STORAGE_KEYS.CENSUS);
  }
};

export const deleteCensusData = async (id: string): Promise<boolean> => {
  try {
    await censusService.delete(id);
    return true;
  } catch (error) {
    console.error('Firebase error, falling back to localStorage:', error);
    const censusList = getStorageData<CensusData>(STORAGE_KEYS.CENSUS);
    const filteredList = censusList.filter(entry => entry.id !== id);
    setStorageData(STORAGE_KEYS.CENSUS, filteredList);
    return filteredList.length < censusList.length;
  }
};

// Feedback data functions - Firebase with localStorage fallback
export const saveFeedbackData = async (feedbackData: Omit<FeedbackData, 'id' | 'createdAt'>): Promise<string> => {
  try {
    const id = await feedbackService.add(feedbackData);
    return id;
  } catch (error) {
    console.error('Firebase error, falling back to localStorage:', error);
    const feedbackList = getStorageData<FeedbackData>(STORAGE_KEYS.FEEDBACK);
    const newEntry: FeedbackData = {
      ...feedbackData,
      id: generateId(),
      createdAt: new Date().toISOString()
    };
    feedbackList.push(newEntry);
    setStorageData(STORAGE_KEYS.FEEDBACK, feedbackList);
    return newEntry.id;
  }
};

export const getFeedbackData = async (): Promise<FeedbackData[]> => {
  try {
    const data = await feedbackService.getAll();
    return data as FeedbackData[];
  } catch (error) {
    console.error('Firebase error, falling back to localStorage:', error);
    return getStorageData<FeedbackData>(STORAGE_KEYS.FEEDBACK);
  }
};

export const deleteFeedbackData = async (id: string): Promise<boolean> => {
  try {
    await feedbackService.delete(id);
    return true;
  } catch (error) {
    console.error('Firebase error, falling back to localStorage:', error);
    const feedbackList = getStorageData<FeedbackData>(STORAGE_KEYS.FEEDBACK);
    const filteredList = feedbackList.filter(entry => entry.id !== id);
    setStorageData(STORAGE_KEYS.FEEDBACK, filteredList);
    return filteredList.length < feedbackList.length;
  }
};

// Contact data functions - Firebase with localStorage fallback
export const saveContactData = async (contactData: Omit<ContactData, 'id' | 'createdAt'>): Promise<string> => {
  try {
    const id = await contactService.add(contactData);
    return id;
  } catch (error) {
    console.error('Firebase error, falling back to localStorage:', error);
    const contactList = getStorageData<ContactData>(STORAGE_KEYS.CONTACT);
    const newEntry: ContactData = {
      ...contactData,
      id: generateId(),
      createdAt: new Date().toISOString()
    };
    contactList.push(newEntry);
    setStorageData(STORAGE_KEYS.CONTACT, contactList);
    return newEntry.id;
  }
};

export const getContactData = async (): Promise<ContactData[]> => {
  try {
    const data = await contactService.getAll();
    return data as ContactData[];
  } catch (error) {
    console.error('Firebase error, falling back to localStorage:', error);
    return getStorageData<ContactData>(STORAGE_KEYS.CONTACT);
  }
};

export const deleteContactData = async (id: string): Promise<boolean> => {
  try {
    await contactService.delete(id);
    return true;
  } catch (error) {
    console.error('Firebase error, falling back to localStorage:', error);
    const contactList = getStorageData<ContactData>(STORAGE_KEYS.CONTACT);
    const filteredList = contactList.filter(entry => entry.id !== id);
    setStorageData(STORAGE_KEYS.CONTACT, filteredList);
    return filteredList.length < contactList.length;
  }
};
