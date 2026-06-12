import {
  FaArrowRight,
  FaBullhorn,
  FaCalendarCheck,
  FaCamera,
  FaCheck,
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
import { HiOutlineSparkles } from "react-icons/hi2";
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
  { value: "Nationwide", label: "Presence Across Pakistan", icon: IoLocationOutline },
];

export const heroSlides = [
  {
    title: "Outdoor Media",
    image: "https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Exhibitions",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Events",
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Road Shows",
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

export const clients = ["TOYOTA", "IMC", "SUZUKI", "Nestle", "Jazz", "LuckyOne", "Unilever"];

export const advantages = [
  {
    title: "Strategic Planning",
    text: "Insight-driven strategies that deliver real results.",
    icon: FaBullseye,
    color: "text-blue-500",
  },
  {
    title: "Nationwide Reach",
    text: "Wide network and presence across Pakistan.",
    icon: IoLocationOutline,
    color: "text-lime-500",
  },
  {
    title: "Creative Excellence",
    text: "Innovative ideas that make brands unforgettable.",
    icon: HiOutlineSparkles,
    color: "text-purple-500",
  },
  {
    title: "End-to-End Execution",
    text: "From planning to execution, we handle everything.",
    icon: FaCheck,
    color: "text-orange-500",
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
