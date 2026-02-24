import { Review, NavLink, ServiceItem } from './types';

export const BUSINESS_INFO = {
  name: "Brandon Rhodehouse",
  title: "Mortgage Consultant",
  nmls: "2531460",
  company: "Patriot Home Mortgage",
  companyNmls: "715386",
  address: "619 S Bluff St Tower 2 Suite 1B, St. George, UT 84770",
  phone: "(425) 876-3025",
  email: "brandon@patriothomemortgage.com",
  hours: "Open 24 hours",
  bio: `Brandon Rhodehouse brings more than two decades of financial expertise to his role as Mortgage Advisor at Patriot Mortgage, where he joined the team in October 2023. With 22 years in the financial industry and certifications including CMA and CCA, Brandon has built a career rooted in trust, leadership, and results.

Throughout his career, Brandon has served in key leadership roles such as Vice President of Retail Banking at Washington Federal and Senior Trust Officer at the Bank of Idaho. These experiences have equipped him with deep knowledge of banking, lending, and financial strategy, allowing him to assist thousands of clients across Southeast Idaho with confidence and clarity.

Beyond his professional accomplishments, Brandon is deeply committed to his community. He has served on multiple regional boards, with a special passion for Junior Achievement of Eastern Idaho. Through this organization, he helps teach financial literacy to students from kindergarten through 12th grade. Seeing those students grow into confident, college-bound young adults is one of the most rewarding parts of his journey.

At home, Brandon has been happily married for 19 years and is a proud father of three. His household also includes several cats that help keep the mice away and one loyal dog. When he is not helping clients secure their future, you will likely find him coaching youth basketball or fishing with his wife along the South Fork of the Snake River.

For Brandon, mortgage advising is not just about financing homes. It is about guiding families toward long-term stability and opportunity."`,
};

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export const REVIEWS: Review[] = [
  {
    id: 1,
    author: "Local Resident",
    rating: 5,
    text: "He is very genuine and truly cared about my family.",
    source: "Google"
  },
  {
    id: 2,
    author: "Happy Homebuyer",
    rating: 5,
    text: "He went above and beyond in helping them get prepared to purchase a home!!!",
    source: "Google"
  },
  {
    id: 3,
    author: "Southern Utah Client",
    rating: 5,
    text: "Professional, knowledgeable, and always available to answer our questions. Highly recommended.",
    source: "Google"
  }
];

export const SERVICES: ServiceItem[] = [
  {
    title: "Home Purchase Loans",
    description: "Guiding you through every step of buying your dream home with competitive rates and personalized support."
  },
  {
    title: "Refinancing",
    description: "Lower your monthly payments or access your home's equity with our tailored refinancing solutions."
  },
  {
    title: "Investment Property",
    description: "Strategic financing options for real estate investors looking to expand their portfolio in Southern Idaho."
  },
  {
    title: "Construction Loans",
    description: "Building your custom home? We offer specialized financing to help you build from the ground up."
  }
];
