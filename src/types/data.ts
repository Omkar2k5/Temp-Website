export interface MemberData {
  id: string;
  name: string;
  dob: string;
  gender: string;
  address: string;
  city: string;
  district: string;
  pincode: string;
  mobile: string;
  email: string;
  education: string;
  occupation: string;
  familyMembers: string;
  createdAt: string;
}

export interface BrideGroomData {
  id: string;
  name: string;
  gender: string;
  dob: string;
  height: string;
  education: string;
  occupation: string;
  income: string;
  address: string;
  city: string;
  district: string;
  mobile: string;
  email: string;
  biodata: string;
  expectations: string;
  photo: string;
  createdAt: string;
}

export interface CensusData {
  id: string;
  headName: string;
  familyMembers: string;
  address: string;
  city: string;
  district: string;
  pincode: string;
  mobile: string;
  email: string;
  occupation: string;
  income: string;
  ownHouse: string;
  education: string;
  createdAt: string;
}

export interface FeedbackData {
  id: string;
  name: string;
  email: string;
  phone: string;
  feedbackType: string;
  message: string;
  rating: string;
  createdAt: string;
}

export interface ContactData {
  id: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  createdAt: string;
}
