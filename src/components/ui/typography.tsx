import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '@/lib/utils'

const typographyVariants = cva(
  '',
  {
    variants: {
      variant: {
        h1: 'scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl mb-10',
        h2: 'scroll-m-20 pb-2 text-3xl tracking-tight first:mt-0',
        h3: 'scroll-m-20 text-2xl font-semibold tracking-tight',
        h4: 'scroll-m-20 text-xl font-semibold tracking-tight',
        p: 'leading-7 mb-6',
        span: ''
      },
    },
    defaultVariants: {
      variant: 'span',
    },
  }
)

export interface TypographyProps
	extends React.HTMLAttributes<HTMLDivElement>,
		VariantProps<typeof typographyVariants> {
}

function Typography({ className, variant = 'span', children, ...props }: TypographyProps) {
  const classes = cn(typographyVariants({ variant }), className)
  if (!variant) return null
	
  return React.createElement(
    variant,
    { ...props, className: classes },
    children
  );
}

export { Typography, typographyVariants }
