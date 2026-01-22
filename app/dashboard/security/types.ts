export type PageType = 'dashboard' | 'entry-exit' | 'identify' | 'slots' | 'extended' | 'complaints' | 'analytics' | 'profile';

export interface BasePageProps {
  setCurrentPage: (page: PageType) => void;
  darkMode: boolean;
}

export interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (dark: boolean) => void;
  setCurrentPage: (page: PageType) => void;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

export interface Activity {
  id: number;
  slotNo: string;
  vehicleNo: string;
  userName: string;
  action: 'Entered' | 'Exited';
  time: string;
}

export interface Vehicle {
  id?: number;
  number: string;
  type: string;
  color?: string;
  fuel?: string;
  userName: string;
  phone?: string;
  email?: string;
  role?: string;
}

export interface ParkingSlot {
  id: string;
  occupied: boolean;
  vehicle: Vehicle | null;
}

export interface ExtendedRequest {
  id: number;
  slotNo: string;
  vehicleNo: string;
  fromTime: string;
  toTime: string;
  status: 'pending' | 'approved' | 'rejected';
}

export interface Complaint {
  id: number;
  userName: string;
  complaint: string;
  replies: string[];
}

export interface Stat {
  label: string;
  value: string;
  color: string;
}

export interface ZoneData {
  zone: string;
  total: number;
  filled: number;
  occupancy: number;
}