export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber?: string;
  address?: {
    street: string;
    city: string;
    postalCode: string;
    country: string;
  };
  dateOfBirth?: string;
  createdAt: string;
  updatedAt: string;
}

export interface UserLoginCredentials {
  email: string;
  password: string;
}

export interface UserRegistrationData extends UserLoginCredentials {
  firstName: string;
  lastName: string;
  phoneNumber?: string;
  dateOfBirth?: string;
}

export interface UserUpdateData {
  firstName?: string;
  lastName?: string;
  phoneNumber?: string;
  address?: {
    street?: string;
    city?: string;
    postalCode?: string;
    country?: string;
  };
  dateOfBirth?: string;
}