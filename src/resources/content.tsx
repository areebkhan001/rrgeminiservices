import { Home, Social } from "@/types";

const social: Social = [
  {
    name: "Email",
    icon: "email",
    link: "mailto:info@rrgeminiservices.com",
  },
  {
    name: "Phone",
    icon: "phone",
    link: "tel:+60112337911",
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: "RR Gemini Services",
  description: "Your trusted partner in education, business, and retail services",
  headline: <>Empowering education and business success</>,
  subline: (
    <>
      With years of experience in education consultancy, trading, retail, and business services, we
      help students and businesses thrive in Malaysia and beyond.
    </>
  ),
};

export { social, home };
