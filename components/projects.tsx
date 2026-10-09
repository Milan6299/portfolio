"use client";

import { motion, type Variants } from "framer-motion";
import { ExternalLink, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { mydata } from "@/data/folio";

export function Projects() {
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
				duration: 0.5,
				ease: [0.25, 0.46, 0.45, 0.94],
			},
		},
	};

	const cardVariants: Variants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.4,
				ease: [0.25, 0.46, 0.45, 0.94],
			},
		},
		hover: {
			y: -8,
			boxShadow: "0 25px 50px -12px rgb(0 0 0 / 0.15)",
			transition: {
				duration: 0.3,
				ease: [0.25, 0.46, 0.45, 0.94],
			},
		},
	};

	return (
		<section
			id="projects"
			className="py-20 sm:py-28 lg:py-32 px-4"
			aria-labelledby="projects-heading"
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
						Selected Work
					</motion.span>
					<motion.h2
						id="projects-heading"
						variants={itemVariants}
						className="mb-6 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight"
					>
						Projects I&apos;m <span className="text-primary">proud of</span>
					</motion.h2>
					<motion.p
						variants={itemVariants}
						className="text-lg text-muted-foreground leading-relaxed"
					>
						A collection of projects showcasing my journey in building scalable,
						user-centric web applications.
					</motion.p>
				</motion.div>

				<motion.div
					className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
					variants={sectionVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: "-100px" }}
					role="list"
					aria-label="Projects"
				>
					{mydata.projects.map((project, index) => (
						<motion.article
							key={project.id}
							variants={cardVariants}
							initial="hidden"
							whileInView="visible"
							whileHover="hover"
							viewport={{ once: true, margin: "-50px" }}
							className={cn(
								"relative overflow-hidden rounded-2xl border border-border bg-card transition-all",
								project.featured && "ring-1 ring-primary/20",
							)}
							role="listitem"
							style={{ transitionDelay: `${index * 0.05}s` }}
						>
							<div className="aspect-video bg-muted relative overflow-hidden">
								<div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/10 to-transparent" />
								<div className="absolute inset-0 flex items-center justify-center">
									<div className="text-center p-8">
										<span className="font-mono text-4xl font-bold text-primary/30">
											{project.title.charAt(0)}
										</span>
									</div>
								</div>
								{project.featured && (
									<div className="absolute top-4 left-4">
										<span className="inline-flex items-center gap-1 rounded-full bg-primary/90 px-2.5 py-1 text-xs font-medium text-primary-foreground">
											<Check className="h-3 w-3" aria-hidden="true" />
											Featured
										</span>
									</div>
								)}
							</div>

							<div className="p-6 space-y-4">
								<h3 className="text-xl font-semibold">{project.title}</h3>
								<p className="text-muted-foreground leading-relaxed">
									{project.description}
								</p>

								<div
									className="flex flex-wrap gap-2"
									role="list"
									aria-label="Technologies used"
								>
									{project.tags.map((tag) => (
										<span
											key={tag}
											className="rounded-full border border-border bg-muted px-2.5 py-0.5 text-xs font-medium"
											role="listitem"
										>
											{tag}
										</span>
									))}
								</div>
								{project.url && (
									<div className="flex items-center gap-3 pt-2 border-t border-border">
										<a
											href={`${project.url ? project.url : "#"}`}
											target="_blank"
											rel="noopener noreferrer"
											className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
											aria-label={`View ${project.title}`}
										>
											<ExternalLink className="h-4 w-4" aria-hidden="true" />
											Check it Out
										</a>
									</div>
								)}
							</div>
						</motion.article>
					))}
				</motion.div>

				{/* <motion.div */}
				{/* 	className="text-center mt-12" */}
				{/* 	initial="hidden" */}
				{/* 	whileInView="visible" */}
				{/* 	viewport={{ once: true, margin: "-100px" }} */}
				{/* > */}
				{/* 	<Button variant="outline" size="lg" className="group"> */}
				{/* 		View All Projects */}
				{/* 		<ArrowRight */}
				{/* 			className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" */}
				{/* 			aria-hidden="true" */}
				{/* 		/> */}
				{/* 	</Button> */}
				{/* </motion.div> */}
			</div>
		</section>
	);
}
