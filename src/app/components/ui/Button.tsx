
import { ButtonHTMLAttributes, forwardRef } from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={cn(
                    'group relative inline-flex items-center justify-center rounded-full font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50 uppercase tracking-wide font-display overflow-hidden',
                    // Animation base styles
                    'before:absolute before:inset-0 before:origin-left before:scale-x-0 hover:before:scale-x-100 before:transition-transform before:duration-300 before:ease-out',
                    {
                        'bg-primary text-white before:bg-orange-700': variant === 'primary',
                        'bg-white text-black hover:bg-gray-100 before:bg-gray-100': variant === 'secondary',
                        'border-2 border-primary text-primary hover:text-white before:bg-primary': variant === 'outline',
                        'hover:bg-white/10 text-white before:bg-white/10': variant === 'ghost',
                        'h-9 px-4 text-sm': size === 'sm',
                        'h-11 px-8 text-base': size === 'md',
                        'h-14 px-10 text-lg': size === 'lg',
                    },
                    className
                )}
                {...props}
            >
                <span className="relative z-10 flex items-center gap-2">
                    {children}
                </span>
            </button>
        );
    }
);
Button.displayName = 'Button';

export { Button, cn };
