"use client";

import Image from "next/image";
import { type ReactNode } from "react";

interface BackgroundProps {
  children: ReactNode;
  className?: string;
}

/**
 * Wraps content with the champagne paper texture as a subtle background.
 * Mixes with dark overlay to maintain the cinematic palette.
 */
export default function Background({ children, className = "" }: BackgroundProps) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Texture layer */}
      <div className="absolute inset-0 opacity-[0.04]">
        <Image
          src="/attimi-wedding/images/background-texture.jpg"
          alt=""
          fill
          aria-hidden
          className="object-cover object-center"
        />
      </div>
      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
