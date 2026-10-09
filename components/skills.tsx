"use client";

import { motion, type Variants } from "framer-motion";
import { mydata } from "@/data/folio";

export function Skills() {
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
			id="skills"
			className="py-20 sm:py-28 lg:py-32 px-4"
			aria-labelledby="skills-heading"
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
						Tech Stack
					</motion.span>
					<motion.h2
						id="skills-heading"
						variants={itemVariants}
						className="mb-6 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight"
					>
						Technologies & <span className="text-primary">Tools</span>
					</motion.h2>
					<motion.p
						variants={itemVariants}
						className="text-lg text-muted-foreground leading-relaxed"
					>
						A curated list of technologies I work with regularly. Always
						expanding my toolkit and staying current with modern development
						practices.
					</motion.p>
				</motion.div>

				<motion.div
					className="grid gap-8 sm:grid-cols-2 "
					variants={sectionVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: "-100px" }}
				>
					{mydata.skillset.map((skillset, skillsetIndex) => {
						const Icon = skillset.icon ? skillset.icon : null;
						return (
							<motion.div
								key={skillset.category}
								variants={itemVariants}
								className="flex flex-col gap-4 overflow-hidden"
								style={{ transitionDelay: `${skillsetIndex * 0.1}s` }}
								whileHover={{
									y: -4,
									boxShadow: "0 20px 40px -10px rgb(0 0 0 / 0.1)",
								}}
							>
								<div className="flex gap-2 items-center text-xl ">
									{Icon && <Icon />} {skillset.category}
								</div>
								<div className="flex gap-2 flex-wrap">
									{skillset.skills.map((skill) => (
										<div className="flex bg-card p-2 rounded-2xl" key={skill}>
											{skill}
										</div>
									))}
								</div>
							</motion.div>
						);
					})}
				</motion.div>
			</div>
		</section>
	);
}
