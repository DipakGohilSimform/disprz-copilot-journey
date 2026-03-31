import * as React from "react"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export interface CardActionItem {
  id: string
  label: string
  onClick: () => void
  variant?: React.ComponentProps<typeof Button>["variant"]
  disabled?: boolean
  ariaLabel?: string
}

export interface InfoCardImage {
  src: string
  alt: string
}

export interface InfoCardProps {
  title: string
  description?: string
  image?: InfoCardImage
  actions?: CardActionItem[]
  className?: string
  size?: "default" | "sm"
  children?: React.ReactNode
}

export function InfoCard({
  title,
  description,
  image,
  actions,
  className,
  size = "default",
  children,
}: InfoCardProps) {
  const hasFooter = actions && actions.length > 0

  return (
    <Card size={size} className={cn("w-full", className)} role="article">
      {image && (
        <img
          src={image.src}
          alt={image.alt}
          className="h-48 w-full object-cover"
          loading="lazy"
          role={image.alt === "" ? "presentation" : undefined}
        />
      )}

      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>

      {children && <CardContent>{children}</CardContent>}

      {hasFooter && (
        <CardFooter className="flex flex-wrap gap-2">
          {actions.map((action) => (
            <Button
              key={action.id}
              variant={action.variant ?? "default"}
              onClick={action.onClick}
              disabled={action.disabled}
              aria-label={action.ariaLabel ?? action.label}
            >
              {action.label}
            </Button>
          ))}
        </CardFooter>
      )}
    </Card>
  )
}
