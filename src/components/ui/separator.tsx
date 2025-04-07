"use client"

import * as React from "react"
import * as SeparatorPrimitive from "@radix-ui/react-separator"

import { cn } from "@/lib/utils"

function Separator({
  className,
  orientation = "horizontal",
  decorative = true,
  ...props
}: React.ComponentProps<typeof SeparatorPrimitive.Root>) {
  return (
    <SeparatorPrimitive.Root
      data-slot="separator-root"
      decorative={decorative}
      orientation={orientation}
      className={cn(
        "bg-border w-[80%] my-10 mx-auto shrink-0 data-[orientation=horizontal]:h-px data-[orientation=vertical]:h-full",
        className
      )}
      {...props}
    />
  )
}

export { Separator }
