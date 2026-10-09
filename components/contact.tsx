"use client";

import { motion, type Variants } from "framer-motion";
import { CheckCircle, Loader2, Mail, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { mydata } from "@/data/folio";

export function Contact() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
	});
	const [status, setStatus] = useState<
		"idle" | "submitting" | "success" | "error"
	>("idle");

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setStatus("submitting");

		await new Promise((resolve) => setTimeout(resolve, 1500));

		console.log("Form submitted:", formData);

		setStatus("success");
		setFormData({ name: "", email: "", subject: "", message: "" });

		setTimeout(() => setStatus("idle"), 5000);
	};

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};

	const contactInfo = [
		{
			icon: Mail,
			title: "Email",
			value: "hello@milanmahapatra",
			href: `mailto:${mydata.email}`,
		},
		{
			icon: MapPin,
			title: "Location",
			value: `${mydata.location}`,
			href: null,
		},
	];

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
			id="contact"
			className="py-20 sm:py-28 lg:py-32 px-4"
			aria-labelledby="contact-heading"
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
						Get In Touch
					</motion.span>
					<motion.h2
						id="contact-heading"
						variants={itemVariants}
						className="mb-6 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight"
					>
						Let&apos;s build something{" "}
						<span className="text-primary">together</span>
					</motion.h2>
					<motion.p
						variants={itemVariants}
						className="text-lg text-muted-foreground leading-relaxed"
					>
						Have a project in mind? I&apos;m always open to discussing new
						opportunities, interesting projects, or just having a chat about
						technology.
					</motion.p>
				</motion.div>

				<motion.div
					className="grid gap-12 lg:grid-cols-3"
					variants={sectionVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: "-100px" }}
				>
					<motion.div
						variants={itemVariants}
						className="lg:col-span-1 space-y-8"
					>
						<div className="space-y-6">
							{contactInfo.map((item, index) => (
								<motion.div
									key={item.title}
									variants={itemVariants}
									style={{ transitionDelay: `${index * 0.1}s` }}
									className="flex gap-4 p-4 rounded-xl border border-border transition-all hover:border-primary/50"
									whileHover={{ x: 4 }}
								>
									<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
										<item.icon className="h-5 w-5" aria-hidden="true" />
									</div>
									<div>
										<h3 className="font-medium">{item.title}</h3>
										{item.href ? (
											<a
												href={item.href}
												className="text-sm text-muted-foreground transition-colors hover:text-primary"
											>
												{item.value}
											</a>
										) : (
											<p className="text-sm text-muted-foreground">
												{item.value}
											</p>
										)}
									</div>
								</motion.div>
							))}
						</div>

						<motion.div
							variants={itemVariants}
							className="rounded-2xl border border-border bg-muted/50 p-6"
						>
							<h3 className="mb-4 font-semibold">Availability</h3>
							<div className="space-y-3 text-sm">
								<div className="flex items-center gap-2 text-muted-foreground">
									<span className="relative flex h-2 w-2">
										<motion.div
											className="absolute inset-0 rounded-full bg-green-500"
											animate={{ scale: [1, 1.3, 1], opacity: [1, 0.6, 1] }}
											transition={{ duration: 1.5, repeat: Infinity }}
										/>
									</span>
									Open for freelance projects
								</div>
								<div className="flex items-center gap-2 text-muted-foreground">
									<span className="relative flex h-2 w-2">
										<motion.div
											className="absolute inset-0 rounded-full bg-green-500"
											animate={{ scale: [1, 1.3, 1], opacity: [1, 0.6, 1] }}
											transition={{
												duration: 1.5,
												repeat: Infinity,
												delay: 0.3,
											}}
										/>
									</span>
									Available for full-time roles
								</div>
								<div className="flex items-center gap-2 text-muted-foreground">
									<span className="relative flex h-2 w-2">
										<motion.div
											className="absolute inset-0 rounded-full bg-green-500"
											animate={{ scale: [1, 1.3, 1], opacity: [1, 0.6, 1] }}
											transition={{
												duration: 1.5,
												repeat: Infinity,
												delay: 0.6,
											}}
										/>
									</span>
									Open to collaborations
								</div>
							</div>
						</motion.div>
					</motion.div>

					<motion.div variants={itemVariants} className="lg:col-span-2">
						<form onSubmit={handleSubmit} className="space-y-6" noValidate>
							<div className="grid gap-6 sm:grid-cols-2">
								<div className="space-y-2">
									<Label htmlFor="name">Name</Label>
									<Input
										id="name"
										name="name"
										value={formData.name}
										onChange={handleChange}
										placeholder="Your name"
										required
										disabled={status === "submitting"}
										aria-describedby="name-error"
									/>
								</div>
								<div className="space-y-2">
									<Label htmlFor="email">Email</Label>
									<Input
										id="email"
										name="email"
										type="email"
										value={formData.email}
										onChange={handleChange}
										placeholder="your@email.com"
										required
										disabled={status === "submitting"}
										aria-describedby="email-error"
									/>
								</div>
							</div>

							<div className="space-y-2">
								<Label htmlFor="subject">Subject</Label>
								<Input
									id="subject"
									name="subject"
									value={formData.subject}
									onChange={handleChange}
									placeholder="Project inquiry, collaboration, etc."
									required
									disabled={status === "submitting"}
								/>
							</div>

							<div className="space-y-2">
								<Label htmlFor="message">Message</Label>
								<Textarea
									id="message"
									name="message"
									value={formData.message}
									onChange={handleChange}
									placeholder="Tell me about your project..."
									className="min-h-[150px]"
									required
									disabled={status === "submitting"}
								/>
							</div>

							<Button
								type="submit"
								className="w-full sm:w-auto group"
								disabled={status === "submitting"}
							>
								{status === "submitting" && (
									<>
										<Loader2
											className="mr-2 h-4 w-4 animate-spin"
											aria-hidden="true"
										/>
										Sending...
									</>
								)}
								{status === "success" && (
									<>
										<CheckCircle className="mr-2 h-4 w-4" aria-hidden="true" />
										Message Sent!
									</>
								)}
								{status === "idle" && (
									<>
										Send Message
										<Send
											className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
											aria-hidden="true"
										/>
									</>
								)}
							</Button>

							{status === "error" && (
								<p className="text-sm text-destructive" role="alert">
									Something went wrong. Please try again or email me directly.
								</p>
							)}
						</form>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
}
