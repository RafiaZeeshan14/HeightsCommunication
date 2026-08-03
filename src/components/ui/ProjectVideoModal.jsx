"use client";

import { useEffect } from "react";
import { createPortal } from "react-dom";
import { FiCalendar, FiMapPin, FiX } from "react-icons/fi";

export default function ProjectVideoModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  if (typeof document === "undefined") return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[10000] flex items-center justify-center bg-[#010714]/90 p-3 backdrop-blur-sm sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-video-title"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className="relative max-h-[94vh] w-full max-w-6xl overflow-y-auto rounded-2xl border border-white/15 bg-[#061226] shadow-[0_35px_100px_rgba(0,0,0,0.55)]">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-3 top-3 z-20 grid h-10 w-10 place-items-center rounded-full border border-white/20 bg-[#020b1d]/80 text-xl text-white backdrop-blur-md transition hover:border-[#9be10c] hover:text-[#9be10c]"
          aria-label="Close video"
        >
          <FiX aria-hidden="true" />
        </button>

        <div className="grid lg:grid-cols-[1.55fr_0.75fr]">
          <div className="flex items-center bg-black">
            <video
              key={project.video}
              className="aspect-video w-full bg-black object-contain"
              controls
              autoPlay
              playsInline
              preload="metadata"
              poster={project.poster}
            >
              <source src={project.video} type="video/mp4" />
              Your browser does not support HTML video.
            </video>
          </div>

          <div className="p-6 text-white sm:p-8 lg:p-9">
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#9be10c]">{project.client}</p>
            <h3 id="project-video-title" className="mt-3 text-2xl font-extrabold leading-tight sm:text-3xl">{project.title}</h3>

            <div className="mt-5 flex flex-wrap gap-4 text-sm text-white/65">
              <span className="inline-flex items-center gap-2"><FiMapPin className="text-[#9be10c]" />{project.location}</span>
              <span className="inline-flex items-center gap-2"><FiCalendar className="text-[#9be10c]" />{project.year}</span>
            </div>

            <p className="mt-6 text-sm leading-7 text-white/70">{project.description}</p>

            <div className="mt-7 border-t border-white/10 pt-6">
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/45">Services Delivered</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.services.map((service) => (
                  <span key={service} className="rounded-full border border-blue-400/25 bg-blue-400/10 px-3 py-1.5 text-xs font-semibold text-blue-200">
                    {service}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}
