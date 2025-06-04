import { 
  collection, 
  doc, 
  getDocs, 
  getDoc, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  query, 
  orderBy, 
  serverTimestamp,
  DocumentData,
  QuerySnapshot
} from 'firebase/firestore';
import { db } from '../config/firebase';
import { 
  MemberData, 
  BrideGroomData, 
  CensusData, 
  FeedbackData, 
  ContactData 
} from '../types/data';

// Community Content Types
export interface CommunityInfo {
  id?: string;
  title: string;
  description: string;
  content: string;
  section: 'about' | 'activities' | 'services' | 'achievements' | 'leadership';
  order: number;
  isActive: boolean;
  createdAt?: any;
  updatedAt?: any;
}

export interface ExecutiveCommittee {
  id?: string;
  name: string;
  position: string;
  photo?: string;
  phone?: string;
  email?: string;
  description?: string;
  order: number;
  isActive: boolean;
  createdAt?: any;
  updatedAt?: any;
}

export interface NewsItem {
  id?: string;
  title: string;
  content: string;
  imageUrl?: string;
  publishDate: string;
  isActive: boolean;
  createdAt?: any;
  updatedAt?: any;
}

// Collection names
const COLLECTIONS = {
  MEMBERS: 'members',
  BRIDE_GROOM: 'brideGroom',
  CENSUS: 'census',
  FEEDBACK: 'feedback',
  CONTACT: 'contact',
  COMMUNITY_INFO: 'communityInfo',
  EXECUTIVE_COMMITTEE: 'executiveCommittee',
  NEWS: 'news'
};

// Generic CRUD operations
export const addDocument = async (collectionName: string, data: any) => {
  try {
    const docRef = await addDoc(collection(db, collectionName), {
      ...data,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp()
    });
    return docRef.id;
  } catch (error) {
    console.error('Error adding document:', error);
    throw error;
  }
};

export const getDocuments = async (collectionName: string) => {
  try {
    const q = query(collection(db, collectionName), orderBy('createdAt', 'desc'));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  } catch (error) {
    console.error('Error getting documents:', error);
    throw error;
  }
};

export const getDocument = async (collectionName: string, id: string) => {
  try {
    const docRef = doc(db, collectionName, id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() };
    } else {
      throw new Error('Document not found');
    }
  } catch (error) {
    console.error('Error getting document:', error);
    throw error;
  }
};

export const updateDocument = async (collectionName: string, id: string, data: any) => {
  try {
    const docRef = doc(db, collectionName, id);
    await updateDoc(docRef, {
      ...data,
      updatedAt: serverTimestamp()
    });
  } catch (error) {
    console.error('Error updating document:', error);
    throw error;
  }
};

export const deleteDocument = async (collectionName: string, id: string) => {
  try {
    const docRef = doc(db, collectionName, id);
    await deleteDoc(docRef);
  } catch (error) {
    console.error('Error deleting document:', error);
    throw error;
  }
};

// Specific service functions for each collection
export const memberService = {
  add: (data: Omit<MemberData, 'id' | 'createdAt'>) => addDocument(COLLECTIONS.MEMBERS, data),
  getAll: () => getDocuments(COLLECTIONS.MEMBERS),
  get: (id: string) => getDocument(COLLECTIONS.MEMBERS, id),
  update: (id: string, data: Partial<MemberData>) => updateDocument(COLLECTIONS.MEMBERS, id, data),
  delete: (id: string) => deleteDocument(COLLECTIONS.MEMBERS, id)
};

export const brideGroomService = {
  add: (data: Omit<BrideGroomData, 'id' | 'createdAt'>) => addDocument(COLLECTIONS.BRIDE_GROOM, data),
  getAll: () => getDocuments(COLLECTIONS.BRIDE_GROOM),
  get: (id: string) => getDocument(COLLECTIONS.BRIDE_GROOM, id),
  update: (id: string, data: Partial<BrideGroomData>) => updateDocument(COLLECTIONS.BRIDE_GROOM, id, data),
  delete: (id: string) => deleteDocument(COLLECTIONS.BRIDE_GROOM, id)
};

export const censusService = {
  add: (data: Omit<CensusData, 'id' | 'createdAt'>) => addDocument(COLLECTIONS.CENSUS, data),
  getAll: () => getDocuments(COLLECTIONS.CENSUS),
  get: (id: string) => getDocument(COLLECTIONS.CENSUS, id),
  update: (id: string, data: Partial<CensusData>) => updateDocument(COLLECTIONS.CENSUS, id, data),
  delete: (id: string) => deleteDocument(COLLECTIONS.CENSUS, id)
};

export const feedbackService = {
  add: (data: Omit<FeedbackData, 'id' | 'createdAt'>) => addDocument(COLLECTIONS.FEEDBACK, data),
  getAll: () => getDocuments(COLLECTIONS.FEEDBACK),
  get: (id: string) => getDocument(COLLECTIONS.FEEDBACK, id),
  update: (id: string, data: Partial<FeedbackData>) => updateDocument(COLLECTIONS.FEEDBACK, id, data),
  delete: (id: string) => deleteDocument(COLLECTIONS.FEEDBACK, id)
};

export const contactService = {
  add: (data: Omit<ContactData, 'id' | 'createdAt'>) => addDocument(COLLECTIONS.CONTACT, data),
  getAll: () => getDocuments(COLLECTIONS.CONTACT),
  get: (id: string) => getDocument(COLLECTIONS.CONTACT, id),
  update: (id: string, data: Partial<ContactData>) => updateDocument(COLLECTIONS.CONTACT, id, data),
  delete: (id: string) => deleteDocument(COLLECTIONS.CONTACT, id)
};

export const communityInfoService = {
  add: (data: Omit<CommunityInfo, 'id' | 'createdAt' | 'updatedAt'>) => addDocument(COLLECTIONS.COMMUNITY_INFO, data),
  getAll: () => getDocuments(COLLECTIONS.COMMUNITY_INFO),
  getBySection: async (section: string) => {
    try {
      const q = query(
        collection(db, COLLECTIONS.COMMUNITY_INFO), 
        orderBy('order', 'asc')
      );
      const querySnapshot = await getDocs(q);
      return querySnapshot.docs
        .map(doc => ({ id: doc.id, ...doc.data() }))
        .filter(item => item.section === section && item.isActive);
    } catch (error) {
      console.error('Error getting community info by section:', error);
      throw error;
    }
  },
  get: (id: string) => getDocument(COLLECTIONS.COMMUNITY_INFO, id),
  update: (id: string, data: Partial<CommunityInfo>) => updateDocument(COLLECTIONS.COMMUNITY_INFO, id, data),
  delete: (id: string) => deleteDocument(COLLECTIONS.COMMUNITY_INFO, id)
};

export const executiveCommitteeService = {
  add: (data: Omit<ExecutiveCommittee, 'id' | 'createdAt' | 'updatedAt'>) => addDocument(COLLECTIONS.EXECUTIVE_COMMITTEE, data),
  getAll: async () => {
    try {
      const q = query(collection(db, COLLECTIONS.EXECUTIVE_COMMITTEE), orderBy('order', 'asc'));
      const querySnapshot = await getDocs(q);
      return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    } catch (error) {
      console.error('Error getting executive committee:', error);
      throw error;
    }
  },
  get: (id: string) => getDocument(COLLECTIONS.EXECUTIVE_COMMITTEE, id),
  update: (id: string, data: Partial<ExecutiveCommittee>) => updateDocument(COLLECTIONS.EXECUTIVE_COMMITTEE, id, data),
  delete: (id: string) => deleteDocument(COLLECTIONS.EXECUTIVE_COMMITTEE, id)
};

export const newsService = {
  add: (data: Omit<NewsItem, 'id' | 'createdAt' | 'updatedAt'>) => addDocument(COLLECTIONS.NEWS, data),
  getAll: () => getDocuments(COLLECTIONS.NEWS),
  getActive: async () => {
    try {
      const q = query(collection(db, COLLECTIONS.NEWS), orderBy('publishDate', 'desc'));
      const querySnapshot = await getDocs(q);
      return querySnapshot.docs
        .map(doc => ({ id: doc.id, ...doc.data() }))
        .filter(item => item.isActive);
    } catch (error) {
      console.error('Error getting active news:', error);
      throw error;
    }
  },
  get: (id: string) => getDocument(COLLECTIONS.NEWS, id),
  update: (id: string, data: Partial<NewsItem>) => updateDocument(COLLECTIONS.NEWS, id, data),
  delete: (id: string) => deleteDocument(COLLECTIONS.NEWS, id)
};
