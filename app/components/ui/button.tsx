"use client";

import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef, type ButtonHTMLAttributes } from "react";

// ─── Color-family interaction tokens ──────────────────────────────────────────
// Spread into each variant so hover/active logic lives in one place.

const brown = [
  "bg-brand-primary hover:bg-brand-primary-hover",
  "active:scale-[0.97]",
];

const gold = [
  "bg-brand-gold hover:bg-brand-gold-hover",
  "active:scale-[0.97]",
];

// ─── Variants ─────────────────────────────────────────────────────────────────

const buttonVariants = cva(
  [
    "inline-flex items-center justify-center gap-2",
    "font-medium leading-none tracking-wide",
    "cursor-pointer select-none",
    "transition-[background-color,border-color,box-shadow,transform,opacity] duration-150 ease-out",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary/70 focus-visible:ring-offset-2",
    "disabled:opacity-40 disabled:pointer-events-none",
  ],
  {
    variants: {
      variant: {
        /** Strongest CTA — shadow elevation on hover signals priority. */
        primary: [
          ...brown,
          "rounded-[10px] text-white",
          "shadow-sm hover:shadow-md",
        ],

        /** Secondary strong — gold hue signals a distinct action category. */
        gold: [
          ...gold,
          "rounded-lg text-white",
        ],

        /** Subtle — translucent fill + brand border; lowest visual weight. */
        outline: [
          "bg-card-bg hover:bg-card-bg-hover",
          "border border-card-border hover:border-card-border-hover",
          "rounded-lg text-brand-primary",
          "active:scale-[0.97] active:bg-card-bg-active",
        ],

        /** Compact brown — lighter weight, no shadow. Size prop is ignored. */
        small: [
          ...brown,
          "rounded-lg text-white",
        ],

        /** Fixed 180×40 — neutral, no shadow; width/height are non-negotiable. */
        fixed: [
          ...brown,
          "rounded-lg w-[180px] h-10 text-white",
        ],

        /** Fixed-width gold with a visible border accent. */
        goldOutline: [
          ...gold,
          "rounded-[10px] w-[180px] text-white",
          "border border-gold-outline-border hover:border-gold-outline-border-hover",
        ],
      },

      size: {
        sm: "px-3 py-1 text-xs",
        md: "px-4 py-2 text-sm",
        lg: "px-5 py-2.5 text-base",
      },

      fullWidth: {
        true: "w-full",
      },
    },

    compoundVariants: [
      // small is always compact — the size prop is intentionally ignored.
      {
        variant: "small",
        size: ["sm", "md", "lg"],
        class: "px-4 py-1 text-sm",
      },
    ],

    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

// ─── Component ────────────────────────────────────────────────────────────────

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, fullWidth, children, ...props }, ref) => (
    <button
      ref={ref}
      className={buttonVariants({ variant, size, fullWidth, className })}
      {...props}
    >
      {children}
    </button>
  )
);

Button.displayName = "Button";

export { Button, buttonVariants };

/*
 * ---------------------------------------------------------------------------
 * Example usage
 * ---------------------------------------------------------------------------
 *
 * import { Button } from "@/components/ui/button";
 *
 * <Button variant="primary">Save changes</Button>
 * <Button variant="gold">Upgrade plan</Button>
 * <Button variant="outline">Learn more</Button>
 * <Button variant="small">Add tag</Button>
 * <Button variant="fixed">Get started</Button>
 * <Button variant="goldOutline">Continue</Button>
 *
 * // Size (applies to all variants except small, which is always compact)
 * <Button variant="primary" size="sm">Small</Button>
 * <Button variant="primary" size="md">Medium (default)</Button>
 * <Button variant="primary" size="lg">Large</Button>
 *
 * // Modifiers
 * <Button variant="primary" fullWidth>Submit</Button>
 * <Button variant="gold" disabled>Processing…</Button>
 * ---------------------------------------------------------------------------
 */
