"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { mydata } from "@/data/folio";

export function Hero() {
	const containerVariants: Variants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.15,
				delayChildren: 0.2,
			},
		},
	};

	const itemVariants: Variants = {
		hidden: { opacity: 0, y: 30 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.6,
				ease: [0.25, 0.46, 0.45, 0.94],
			},
		},
	};

	const floatVariants = {
		y: [0, -10, 0],
		transition: {
			duration: 3,
			repeat: Infinity,
			// ease: "easeInOut",
		},
	};

	return (
		<section
			className="relative min-h-svh flex items-center justify-center px-4 py-20 sm:py-0"
			aria-labelledby="hero-heading"
		>
			<div
				className="absolute inset-0 overflow-hidden pointer-events-none"
				aria-hidden="true"
			>
				<motion.div
					className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-primary/10 blur-3xl"
					animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
					transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
				/>
				<motion.div
					className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-primary/10 blur-3xl"
					animate={{ scale: [1, 1.05, 1], opacity: [0.2, 0.4, 0.2] }}
					transition={{
						duration: 10,
						repeat: Infinity,
						ease: "easeInOut",
						delay: 2,
					}}
				/>
			</div>

			<div className="relative mx-auto max-w-7xl w-full">
				<motion.div
					className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center"
					variants={containerVariants}
					initial="hidden"
					animate="visible"
				>
					<div className="text-center lg:text-left">
						<motion.div variants={itemVariants} className="mb-6">
							<span className="inline-flex items-center gap-2 rounded-full border border-border bg-muted px-3 py-1 text-xs font-medium tracking-wider uppercase">
								<motion.span
									className="h-1.5 w-1.5 rounded-full bg-primary"
									animate={{ scale: [1, 1.2, 1] }}
									transition={{ duration: 1.5, repeat: Infinity }}
								/>
								Available
							</span>
						</motion.div>

						<motion.h1
							id="hero-heading"
							variants={itemVariants}
							className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
						>
							Hi, I&apos;m <span className="text-primary">{mydata.name}</span>
							<br />
							<span className="text-foreground/70">{mydata.role}</span>
						</motion.h1>

						<motion.p
							variants={itemVariants}
							className="mb-8 text-lg text-muted-foreground max-w-xl leading-relaxed"
						>
							{mydata.bio}
						</motion.p>

						<motion.div
							variants={itemVariants}
							className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
						>
							<motion.a
								href="#projects"
								whileHover={{ scale: 1.02 }}
								whileTap={{ scale: 0.98 }}
							>
								<Button
									variant="outline"
									size="lg"
									className="bg-primary text-background gap-4"
								>
									View Projects
									{/* <ArrowRight */}
									{/* 	className=" h-2 w-2 transition-transform group-hover:translate-x-1" */}
									{/* 	aria-hidden="true" */}
									{/* /> */}
								</Button>
							</motion.a>
							<motion.a
								href="#contact"
								whileHover={{ scale: 1.02 }}
								whileTap={{ scale: 0.98 }}
							>
								<Button variant="outline" size="lg">
									Get In Touch
								</Button>
							</motion.a>
						</motion.div>

						<motion.div
							variants={itemVariants}
							className="mt-10 flex items-center gap-6"
						>
							<a
								href={mydata.socials.github}
								target="_blank"
								rel="noopener noreferrer"
								className="text-muted-foreground transition-colors hover:text-primary"
								aria-label="GitHub"
							>
								<FaGithub className="h-5 w-5" />
							</a>
							<a
								href={mydata.socials.linkedin}
								target="_blank"
								rel="noopener noreferrer"
								className="text-muted-foreground transition-colors hover:text-primary"
								aria-label="LinkedIn"
							>
								<FaLinkedinIn className="h-5 w-5" />
							</a>
							<a
								href={`mailto:${mydata.email}`}
								className="text-muted-foreground transition-colors hover:text-primary"
								aria-label="Email"
							>
								<Mail className="h-5 w-5" />
							</a>
						</motion.div>
					</div>

					<motion.div
						variants={itemVariants}
						className="relative hidden lg:block"
						style={{ transitionDelay: "0.3s" }}
					>
						<div className="relative aspect-square max-w-xs mx-auto lg:max-w-md">
							<motion.div
								className="absolute inset-0 border-2 border-primary/20 rounded-[60%_40%_30%_70%/60%_30%_70%_40%]"
								animate={floatVariants}
							/>
							<div className="relative aspect-square rounded-[60%_40%_30%_70%/60%_30%_70%_40%] bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30 p-1">
								<div className="aspect-square rounded-[60%_40%_30%_70%/60%_30%_70%_40%] bg-background">
									<div className="absolute inset-0 flex items-center justify-center">
										<div className="text-center p-8">
											<span className="font-mono text-6xl font-bold text-primary/50">
												{""}
											</span>
										</div>
									</div>
								</div>
							</div>

							<motion.div
								className="absolute -bottom-4 -right-4 w-16 h-16 rounded-full bg-primary flex items-center justify-center"
								animate={{ rotate: [0, 5, -5, 0] }}
								transition={{ duration: 4, repeat: Infinity }}
							>
								<ArrowRight className="h-8 w-8 text-primary-foreground" />
							</motion.div>

							<motion.div
								className="absolute -top-4 -left-4 w-24 h-24 border-2 border-primary/30 rounded-full"
								animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
								transition={{ duration: 4, repeat: Infinity, delay: 1 }}
							/>
						</div>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
}
