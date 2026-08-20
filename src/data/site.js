import {
  FaArrowRight,
  FaBullhorn,
  FaCalendarCheck,
  FaCamera,
  FaChartLine,
  FaEnvelope,
  FaFacebookF,
  FaGift,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaPrint,
  FaRocket,
  FaBullseye,
  FaUsers,
  FaYoutube,
} from "react-icons/fa";
import {
  HiOutlineCursorArrowRays,
  HiOutlineLightBulb,
  HiOutlineMegaphone,
  HiOutlineRocketLaunch,
  HiOutlineSparkles,
  HiOutlineUserGroup,
} from "react-icons/hi2";
import { IoLocationOutline } from "react-icons/io5";

export const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Portfolio", href: "/projects" },
  { label: "Contact Us", href: "/#contact" },
];

export const heroStats = [
  { value: "18+", label: "Year Experience", icon: FaCalendarCheck },
  { value: "10000+", label: "Projects Delivered", icon: FaRocket },
  { value: "250+", label: "Brands Served", icon: FaUsers },
  // { value: "Nationwide", label: "Presence Across Pakistan", icon: IoLocationOutline },
];

export const heroSlides = [
  {
    title: "Outdoor Advertising",
    text: "High-impact visibility that builds brand recognition.",
    icon: HiOutlineMegaphone,
    image: "/rally.png",
  },
  {
    title: "Brand Activations",
    text: "Engaging experiences that create lasting connections.",
    icon: HiOutlineCursorArrowRays,
    image: "/hinohero.png",
  },
  {
    title: "Events & Experiences",
    text: "Memorable events that inspire and engage.",
    icon: HiOutlineUserGroup,
    image: "/wmnday.png",
  },
  {
    title: "Creative Solutions",
    text: "Innovative ideas that bring brands to life.",
    icon: HiOutlineLightBulb,
    image: "/herotoyota.png",
  },
  {
    title: "Strategic Campaigns",
    text: "Data-driven strategies that deliver real results.",
    icon: HiOutlineRocketLaunch,
    image: "/kreek.png",
  },
];

export const services = [
  {
    title: "Media & Advertising",
    icon: FaBullhorn,
    color: "text-blue-400",
    items: ["Media Planning", "Media Buying", "Outdoor Advertising"],
  },
  {
    title: "Branding Solutions",
    icon: FaRocket,
    color: "text-lime-400",
    items: ["Corporate Identity", "Brand Strategy", "Creative Design"],
  },
  {
    title: "Events & Activations",
    icon: HiOutlineSparkles,
    color: "text-purple-400",
    items: ["Product Launches", "Mall Activations", "Road Shows"],
  },
  {
    title: "Production & Photography",
    icon: FaCamera,
    color: "text-orange-400",
    items: ["Photography", "Videography", "Corporate Films"],
  },
  {
    title: "Printing Solutions",
    icon: FaPrint,
    color: "text-pink-400",
    items: ["Large Format Printing", "Digital Printing", "POS Materials"],
  },
  {
    title: "Giveaways & Merchandise",
    icon: FaGift,
    color: "text-cyan-400",
    items: ["Corporate Gifts", "Promotional Items", "Custom Branding"],
  },
];

export const projectFilters = [
  "All Projects",
  "Corporate Events",
  "Product Launches",
  "Outdoor Campaigns",
  "Activations",
  "Exhibitions",
];

export const projects = [
  {
    slug: "toyota-sure-gala",
    title: "Toyota Sure Gala",
    client: "Toyota Pakistan",
    category: "Product Launches",
    location: "Karachi",
    year: "2025",
    duration: "02:18",
    poster: "/suregala.png",
    video: "https://res.cloudinary.com/l92fw4gu/video/upload/toyotasuregala.mp4",
    description: "A polished Toyota product launch event managed from guest arrival to the final reveal, with coordinated production, impactful branding, product presentation and seamless on-ground support.",
    services: ["Event Production", "Branding", "Media Coverage"],
    featured: true,
  },
  {
    slug: "hino-dealer-conference",
    title: "HINO Dealer Conference",
    client: "HINO Motors",
    category: "Corporate Events",
    location: "Islamabad",
    year: "2025",
    duration: "01:46",
    poster: "/hinoconf.png",
    video: "https://res.cloudinary.com/l92fw4gu/video/upload/v1787236913/hino.mp4",
    description: "A professionally managed dealer conference with smooth registration, engaging presentations and a well-coordinated corporate stage experience.",
    services: ["Stage Design", "AV Production", "Guest Management"],
    featured: true,
  },
  {
    slug: "toyota-womens-day",
    title: "Toyota Women's Day",
    client: "Toyota Pakistan",
    category: "Corporate Events",
    location: "Karachi",
    year: "2025",
    duration: "03:12",
    poster: "/wmnday.png",
    video: "https://res.cloudinary.com/l92fw4gu/video/upload/v1787224596/Womensday.mp4",
    description: "A memorable Women's Day event delivered through thoughtful programming, guest coordination, branded experiences and seamless event-day management.",
    services: ["Concert Production", "Artist Management", "Audience Experience"],
    featured: true,
  },
  // {
  //   slug: "toyota-creek-karting-competition",
  //   title: "Toyota Creek Karting Competition",
  //   client: "Toyota Pakistan",
  //   category: "Activations",
  //   location: "Karachi",
  //   year: "2024",
  //   duration: "01:38",
  //   poster: "/kreek.png",
  //   video: "/toyotacreekkarting.mp4",
  //   description: "An energetic Toyota karting activation managed with engaging experiences, coordinated operations, guest flow and strong brand visibility.",
  //   services: ["Creative Concept", "Fabrication", "Consumer Engagement"],
  //   featured: true,
  // },
  {
    slug: "cholistan-rally-dessert-roadshow",
    title: "Cholistan Rally Dessert Roadshow",
    client: "Toyota Motors",
    category: "Outdoor Campaigns",
    location: "Punjab, Pakistan",
    year: "2026",
    duration: "02:04",
    poster: "/rally.png",
    video: "https://res.cloudinary.com/l92fw4gu/video/upload/v1787224555/CholistanRally.mp4",
    description: "An adventurous automotive event brought together through route coordination, on-ground logistics, participant support and immersive brand storytelling.",
    services: ["Roadshow Management", "Outdoor Branding", "Lead Generation"],
  },
 
];

export const clients = [
  { name: "Toyota", logo: "/toyo.png" },
  { name: "unilever", logo: "/unilever.png" },
  { name: "telenor", logo: "/tele.png" },
  { name: "proton", logo: "/proton.png" },
  { name: "hbl", logo: "/HBL.png" },
  { name: "cococola", logo: "/cocola.png" },
  { name: "suzuki", logo: "/suzuki.png" },
  { name: "nestle", logo: "/nestle.png" },
  { name: "eneos", logo: "/eneos.png" },
  { name: "Hino", logo: "/hino.png" },
  { name: "Changan", logo: "/changan.png" },
  { name: "Ghandhara", logo: "/ghandara.jpg" },
  { name: "KIA", logo: "/kia.png" },
  { name: "Honri", logo: "/honri.png" },
  { name: "JAC", logo: "/jac.png" },
  { name: "DIB", logo: "/dib.png" },
  { name: "pattex", logo: "/pattex.png" },
  { name: "pel", logo: "/pel.jpg" },
  { name: "bmw", logo: "/bmw.jpg" },
  { name: "chery", logo: "/chery.png" },
  { name: "dongfeng", logo: "/dongfeng.jpg" },
  { name: "sindh police", logo: "/sp.png" },
  { name: "standard", logo: "/standard.png" },
  { name: "emirates", logo: "/emirates.png" },
  { name: "psl", logo: "/psl.jpg" },
  { name: "air", logo: "/air.png" },
  { name: "outfitter", logo: "/outfitter.png" },
  { name: "punjab police", logo: "/pp.png" },
  { name: "tdcp", logo: "/tdcp.png" },
  { name: "m9", logo: "/m9.jpg" },
  { name: "ccl", logo: "/ccl.png" },
  { name: "interwood", logo: "/interwood.jpg" },
  { name: "adamjee", logo: "/adamjee.png" },
  { name: "yd", logo: "/yd.jpg" },
];
export const advantages = [
  {
    title: "19+ YEARS",
    text: "Of delivering exceptional advertising solutions",
    icon: HiOutlineSparkles,
    color: "text-[#9be10c]",
    accent: "lime",
  },
  {
    title: "500+ CLIENTS",
    text: "Trusted by brands across industries",
    icon: HiOutlineUserGroup,
    color: "text-[#4f83ff]",
    accent: "blue",
  },
  {
    title: "500+ PROJECTS",
    text: "Successfully executed nationwide",
    icon: FaBullseye,
    color: "text-[#9be10c]",
    accent: "lime",
  },
  {
    title: "MEASURABLE RESULTS",
    text: "Data-backed performance that drives growth",
    icon: FaChartLine,
    color: "text-[#35d3d2]",
    accent: "cyan",
  },
];

export const contactDetails = [
  { icon: FaPhoneAlt, lines: [ "+92 323 2779999"] },
  { icon: FaEnvelope, lines: ["info_heights@yahoo.com"] },
  { icon: FaMapMarkerAlt, lines: ["Office # 12, 2nd Floor,", "Blue Area, Islamabad"] },
];

// export const socialLinks = [
//   { label: "Facebook", icon: FaFacebookF, href: "https://www.facebook.com/HeightsCommunications" },
//   { label: "LinkedIn", icon: FaLinkedinIn, href: "#" },
//   { label: "Instagram", icon: FaInstagram, href: "#" },
//   { label: "YouTube", icon: FaYoutube, href: "#" },
// ];

export { FaArrowRight };
