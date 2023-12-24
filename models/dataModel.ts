export interface DataModel {
  profile: Profile;
  portfolioItems: PortfolioItem[];
}

export interface Profile {
  name: string;
  position: string;
  description: string;
}

export interface PortfolioItem {
  name: string;
  position: string;
  company: string;
  workDate: string[];
  description: string;
}
