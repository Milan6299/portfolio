"use client";

import { Mail } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { mydata } from "@/data/folio";
import { cn } from "@/lib/utils";

export function Footer() {
	const currentYear = new Date().getFullYear();

	const socialLinks = [
		{ name: "GitHub", href: mydata.socials.github, icon: FaGithub },
		{ name: "LinkedIn", href: mydata.socials.linkedin, icon: FaLinkedinIn },
		{ name: "Email", href: `mailto:${mydata.email}`, icon: Mail },
	];

	return (
		<footer className="border-t border-border bg-muted/30" role="contentinfo">
			<div className="mx-auto max-w-7xl px-4 py-12 sm:py-16 lg:px-8">
				<div className="grid gap-8 sm:text-center">
					<div className="space-y-6">
						<p className="text-muted-foreground text-sm leading-relaxed">
							Building accessible, performant, and delightful web experiences.
							Crafted with care and attention to detail.
						</p>
						<div className="flex items-center sm:justify-center gap-4">
							{socialLinks.map((social) => (
								<a
									key={social.name}
									href={social.href}
									target="_blank"
									rel="noopener noreferrer"
									className={cn(
										"flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-background text-muted-foreground transition-all hover:border-primary/50 hover:text-primary hover:bg-primary/5",
									)}
									aria-label={social.name}
								>
									<social.icon className="h-4 w-4" aria-hidden="true" />
								</a>
							))}
						</div>
					</div>
				</div>

				<div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-between border-t border-border pt-8">
					<p className="text-sm text-muted-foreground">
						&copy; {currentYear} {mydata.name}. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
}
