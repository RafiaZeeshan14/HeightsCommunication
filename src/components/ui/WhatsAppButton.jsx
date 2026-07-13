"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <a
      className="site-chat-action"
      href="https://wa.me/923232779999"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Heights Communications on WhatsApp"
    >
      <FaWhatsapp aria-hidden="true" />
    </a>
  );
}
