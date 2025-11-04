import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
  {
    variants: {
      variant: {
        // Qaspilab Primary - Graphite
        default: "bg-brand-graphite text-brand-white hover:bg-brand-graphite/90 hover:shadow-lg focus-visible:ring-brand-graphite/50",
        
        // Qaspilab Secondary - Purple
        secondary: "bg-brand-purple text-brand-white hover:bg-brand-purple/90 hover:shadow-glow-purple focus-visible:ring-brand-purple/50",
        
        // Qaspilab Accent - Neon Blue
        accent: "bg-brand-neon text-brand-graphite hover:bg-brand-neon/90 hover:shadow-glow-neon focus-visible:ring-brand-neon/50",
        
        // Ghost variants with hover effects
        ghost: "hover:bg-brand-purple/10 hover:text-brand-purple transition-all duration-300 focus-visible:ring-brand-purple/30",
        "ghost-neon": "hover:bg-brand-neon/10 hover:text-brand-neon transition-all duration-300 focus-visible:ring-brand-neon/30",
        
        // Outline variants
        outline: "border border-brand-graphite/20 bg-transparent hover:bg-brand-graphite hover:text-brand-white focus-visible:ring-brand-graphite/50",
        "outline-purple": "border border-brand-purple bg-transparent text-brand-purple hover:bg-brand-purple hover:text-brand-white hover:shadow-glow-purple focus-visible:ring-brand-purple/50",
        "outline-neon": "border border-brand-neon bg-transparent text-brand-neon hover:bg-brand-neon hover:text-brand-graphite hover:shadow-glow-neon focus-visible:ring-brand-neon/50",
        
        // Destructive
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 focus-visible:ring-destructive/50",
        
        // Link
        link: "text-brand-purple underline-offset-4 hover:underline hover:text-brand-neon focus-visible:ring-brand-purple/50",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
        "icon-sm": "size-8",
        "icon-lg": "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
