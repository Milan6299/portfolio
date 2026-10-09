"use client";

import { mydata } from "@/data/folio";
import { motion, type Variants } from "framer-motion";

const stats = [
	{ value: `${mydata.yoe}+`, label: "Years Experience" },
	{ value: "10+", label: "Projects Completed" },
];

export function About() {
	const sectionVariants: Variants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
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

	return (
		<section
			id="about"
			className="py-20 sm:py-28 lg:py-32 px-4"
			aria-labelledby="about-heading"
		>
			<div className="mx-auto max-w-7xl">
				<motion.div
					className="text-center max-w-3xl mx-auto mb-16"
					variants={sectionVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: "-100px" }}
				>
					<motion.span
						variants={itemVariants}
						className="inline-flex items-center gap-2 rounded-full border border-border bg-muted px-3 py-1 text-xs font-medium tracking-wider uppercase mb-4"
					>
						<span className="relative flex h-2 w-2">
							<motion.div
								className="absolute inset-0 rounded-full bg-primary"
								animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
								transition={{ duration: 1.5, repeat: Infinity }}
							/>
						</span>
						About Me
					</motion.span>
					<motion.h2
						id="about-heading"
						variants={itemVariants}
						className="mb-6 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight"
					>
						Building digital experiences that{" "}
						<span className="text-primary">matter</span>
					</motion.h2>
					<motion.p
						variants={itemVariants}
						className="text-lg text-muted-foreground leading-relaxed"
					>
						Passionate Full Stack Developer with 2+ years of experience building
						modern web applications using React, Next.js, and skilled in Django
						and FastAPI, with a focus on performance, accessibility, and
						developer experience.
					</motion.p>
				</motion.div>

				<motion.div
					className="grid gap-8 lg:grid-cols-2"
					variants={sectionVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: "-100px" }}
				>
					<motion.div variants={itemVariants}>
						<h3 className="mb-6 text-xl font-semibold">What I Do</h3>
						<div className="space-y-4">
							<motion.p
								className="text-muted-foreground leading-relaxed"
								variants={itemVariants}
							>
								I help businesses and individuals bring their ideas to life
								through custom web applications from concept to deployment
								taking full responsibility.{" "}
							</motion.p>
							<motion.p
								className="text-muted-foreground leading-relaxed"
								variants={itemVariants}
							>
								My approach combines technical excellence with practical
								solutions.
							</motion.p>
						</div>

						<div className="mt-10 grid gap-4 sm:grid-cols-2">
							{stats.map((stat, index) => (
								<motion.div
									key={stat.label}
									variants={itemVariants}
									className="rounded-xl border border-border p-6 transition-all hover:border-primary/50"
									style={{ transitionDelay: `${index * 0.1}s` }}
									whileHover={{
										y: -4,
										boxShadow: "0 20px 40px -10px rgb(0 0 0 / 0.1)",
									}}
								>
									<div className="text-3xl sm:text-4xl font-bold text-primary">
										{stat.value}
									</div>
									<div className="text-sm text-muted-foreground">
										{stat.label}
									</div>
								</motion.div>
							))}
						</div>
					</motion.div>

					<motion.div variants={itemVariants}>
						<h3 className="mb-6 text-xl font-semibold">
							A Little More About Me
						</h3>
						<div className="space-y-6">
							{mydata.interests.map((item, index) => (
								<motion.div
									key={item.title}
									variants={itemVariants}
									className="flex gap-4 p-4 rounded-xl border border-border transition-all hover:border-primary/50"
									style={{ transitionDelay: `${index * 0.1}s` }}
									whileHover={{ x: 4 }}
								>
									<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
										<item.icon className="h-5 w-5" aria-hidden="true" />
									</div>
									<div>
										<h4 className="font-medium">{item.title}</h4>
										<p className="text-sm text-muted-foreground">
											{item.description}
										</p>
									</div>
								</motion.div>
							))}
						</div>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
}
