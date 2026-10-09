"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { Sun, Moon, Menu, X } from "lucide-react";

const navigation = [
	{ name: "About", href: "#about" },
	{ name: "Projects", href: "#projects" },
	{ name: "Skills", href: "#skills" },
	{ name: "Contact", href: "#contact" },
];

export function Navigation() {
	const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
	const [scrolled, setScrolled] = React.useState(false);
	const { theme, setTheme } = useTheme();

	React.useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 20);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const toggleTheme = () => {
		setTheme(theme === "dark" ? "light" : "dark");
	};

	return (
		<header
			className={cn(
				"fixed top-0 left-0 right-0 z-50 transition-all duration-300",
				scrolled
					? "bg-background/90 backdrop-blur-sm border-b border-border"
					: "bg-transparent",
			)}
		>
			<nav
				className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
				aria-label="Main navigation"
			>
				<div className="flex h-16 items-center justify-between">
					<div className="flex items-center">
						<Link
							href="#"
							className="font-mono text-lg font-semibold tracking-tighter"
							aria-label="Go to homepage"
						>
							MM
						</Link>
					</div>

					<div className="hidden md:flex md:items-center md:gap-8">
						{navigation.map((item) => (
							<Link
								key={item.name}
								href={item.href}
								className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
							>
								{item.name}
							</Link>
						))}
						<Button
							variant="ghost"
							size="icon"
							onClick={toggleTheme}
							aria-label="Toggle theme"
						>
							<Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
							<Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
						</Button>
					</div>

					<div className="flex md:hidden items-center gap-4">
						<Button
							variant="ghost"
							size="icon"
							onClick={toggleTheme}
							aria-label="Toggle theme"
						>
							<Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
							<Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
						</Button>
						<Button
							variant="ghost"
							size="icon"
							onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
							aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
							aria-expanded={mobileMenuOpen}
						>
							{mobileMenuOpen ? (
								<X className="h-5 w-5" />
							) : (
								<Menu className="h-5 w-5" />
							)}
						</Button>
					</div>
				</div>

				{mobileMenuOpen && (
					<div className="md:hidden py-4 border-t border-border bg-background">
						<div className="flex flex-col gap-4">
							{navigation.map((item) => (
								<Link
									key={item.name}
									href={item.href}
									className="text-base font-medium text-muted-foreground transition-colors hover:text-foreground"
									onClick={() => setMobileMenuOpen(false)}
								>
									{item.name}
								</Link>
							))}
							{/* <Button variant="outline" className="w-fit" onClick={toggleTheme}> */}
							{/* 	{theme === "dark" ? "Light Mode" : "Dark Mode"} */}
							{/* </Button> */}
						</div>
					</div>
				)}
			</nav>
		</header>
	);
}
