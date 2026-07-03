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
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Clients", href: "#clients" },
  { label: "Blog", href: "#insights" },
  { label: "Contact Us", href: "#contact" },
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
    image: "https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Brand Activations",
    text: "Engaging experiences that create lasting connections.",
    icon: HiOutlineCursorArrowRays,
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Events & Experiences",
    text: "Memorable events that inspire and engage.",
    icon: HiOutlineUserGroup,
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Creative Solutions",
    text: "Innovative ideas that bring brands to life.",
    icon: HiOutlineLightBulb,
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Strategic Campaigns",
    text: "Data-driven strategies that deliver real results.",
    icon: HiOutlineRocketLaunch,
    image: "https://images.unsplash.com/photo-1603386329225-868f9b1ee6c9?auto=format&fit=crop&w=900&q=80",
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
    title: "Toyota Pakistan",
    category: "Outdoor Campaign",
    image: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=700&q=80",
  },
  {
    title: "IMC Pakistan",
    category: "Exhibition",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=700&q=80",
  },
  {
    title: "Jazz Concert",
    category: "Event Management",
    image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=700&q=80",
  },
  {
    title: "LuckyOne Mall Activation",
    category: "Mall Activation",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=700&q=80",
  },
  {
    title: "Brand Activation",
    category: "Road Show",
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=700&q=80",
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
    title: "1000+ CAMPAIGNS",
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
  { icon: FaPhoneAlt, lines: ["0333 1234567", "051 2345678"] },
  { icon: FaEnvelope, lines: ["info@heights.com.pk"] },
  { icon: FaMapMarkerAlt, lines: ["Office # 12, 2nd Floor,", "Blue Area, Islamabad"] },
];

export const socialLinks = [
  { label: "Facebook", icon: FaFacebookF, href: "#" },
  { label: "LinkedIn", icon: FaLinkedinIn, href: "#" },
  { label: "Instagram", icon: FaInstagram, href: "#" },
  { label: "YouTube", icon: FaYoutube, href: "#" },
];

export { FaArrowRight };
