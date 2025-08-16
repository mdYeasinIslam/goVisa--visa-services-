export interface VisaService {
  id: number;
  type: string;
  country: string;
  duration: string;
  price: number;
  description: string;
  image: string;
  popular?: boolean;
}
