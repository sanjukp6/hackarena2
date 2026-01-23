export interface NavLink {
  label: string;
  href: string;
}

export interface Theme {
  id: string;
  title: string;
  icon: string;
  description: string;
}

export interface TimelineEvent {
  id: string;
  date: string;
  time: string;
  title: string;
  description?: string;
}

export interface PrizeCategory {
  id: string;
  title: string;
  amount: string;
  type: 'gold' | 'silver' | 'special';
  icon?: string;
}

export interface Coordinator {
  id: string;
  name: string;
  role: string;
  designation?: string;
  phone?: string;
  category: 'program' | 'leadership' | 'forum' | 'faculty' | 'student';
}

export interface Sponsor {
  id: string;
  name: string;
  logo: string;
}
