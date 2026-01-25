"use client";

import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import type { ReactNode } from 'react';

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  subtitle?: string;
  description: string;
  iconBgGradient: string;
  variants?: Variants;
  transition?: { duration: number };
}

export default function FeatureCard({
  icon,
  title,
  subtitle,
  description,
  iconBgGradient,
  variants,
  transition = { duration: 0.6 },
}: FeatureCardProps) {
  return (
    <motion.div
      variants={variants}
      transition={transition}
      className="group p-6 rounded-2xl border border-fd-border bg-fd-card hover:shadow-lg transition-shadow"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className={`p-3 ${iconBgGradient} rounded-xl transition-transform`}>
          {icon}
        </div>
        <h3 className="text-2xl font-bold">
          {title}
          {subtitle && (
            <span className="ml-2 md:ml-3 text-base font-normal text-fd-muted-foreground/60">
              {subtitle}
            </span>
          )}
        </h3>
      </div>
      <p className="text-fd-muted-foreground">
        {description}
      </p>
    </motion.div>
  );
}
