export interface Career {
  id: string;
  title: string;
  description: string;
  location: string;
  department: string;
  type: string;
  requirements: string;
  salary?: string;
  postedAt: Date;
  closingDate?: Date;
  isActive: boolean;
}