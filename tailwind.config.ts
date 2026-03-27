import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				poppins: ['Poppins', 'sans-serif'],
				orbitron: ['Orbitron', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				'neon-blue': 'hsl(var(--neon-blue))',
				'neon-purple': 'hsl(var(--neon-purple))',
				'neon-magenta': 'hsl(var(--neon-magenta))',
				'neon-yellow': 'hsl(var(--neon-yellow))',
				'neon-cyan': 'hsl(var(--neon-cyan))',
				'theme-blue': 'hsl(220 90% 60%)',
				'theme-purple': 'hsl(270 80% 65%)',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				// iOS-style spring animations
				'ios-bounce': {
					'0%': { transform: 'scale(0.95)', opacity: '0' },
					'50%': { transform: 'scale(1.02)' },
					'100%': { transform: 'scale(1)', opacity: '1' }
				},
				'ios-slide-up': {
					'0%': { transform: 'translateY(100%)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' }
				},
				'ios-slide-down': {
					'0%': { transform: 'translateY(-20px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' }
				},
				'ios-fade': {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' }
				},
				'ios-scale-in': {
					'0%': { transform: 'scale(0.9)', opacity: '0' },
					'100%': { transform: 'scale(1)', opacity: '1' }
				},
				'ios-press': {
					'0%': { transform: 'scale(1)' },
					'50%': { transform: 'scale(0.97)' },
					'100%': { transform: 'scale(1)' }
				},
				'ios-wobble': {
					'0%, 100%': { transform: 'rotate(-1deg)' },
					'50%': { transform: 'rotate(1deg)' }
				},
			'ios-pulse': {
				'0%, 100%': { opacity: '1' },
				'50%': { opacity: '0.7' }
			},
			'shimmer': {
				'0%': { backgroundPosition: '0% 50%' },
				'50%': { backgroundPosition: '100% 50%' },
				'100%': { backgroundPosition: '0% 50%' }
			}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'ios-bounce': 'ios-bounce 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
				'ios-slide-up': 'ios-slide-up 0.4s cubic-bezier(0.32, 0.72, 0, 1)',
				'ios-slide-down': 'ios-slide-down 0.3s cubic-bezier(0.32, 0.72, 0, 1)',
				'ios-fade': 'ios-fade 0.3s ease-out',
				'ios-scale-in': 'ios-scale-in 0.3s cubic-bezier(0.32, 0.72, 0, 1)',
				'ios-press': 'ios-press 0.15s ease-out',
				'ios-wobble': 'ios-wobble 0.5s ease-in-out',
				'ios-pulse': 'ios-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
			},
			// iOS-like transition timing
			transitionTimingFunction: {
				'ios-spring': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
				'ios-ease': 'cubic-bezier(0.32, 0.72, 0, 1)',
				'ios-bounce': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
