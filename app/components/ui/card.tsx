import { type HTMLAttributes } from "react";

// ─── Component ────────────────────────────────────────────────────────────────

export interface CardProps extends HTMLAttributes<HTMLDivElement> {}

function Card({ className, children, ...props }: CardProps) {
  return (
    <div
      className={[
        "rounded-xl border border-neutral-200 bg-white shadow-sm",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      {children}
    </div>
  );
}

export { Card };

/*
 * ---------------------------------------------------------------------------
 * Example usage
 * ---------------------------------------------------------------------------
 *
 * import { Card } from "@/app/components/ui/card";
 *
 * <Card>
 *   <p className="p-4 text-sm text-neutral-700">Hello, world!</p>
 * </Card>
 * ---------------------------------------------------------------------------
 */
