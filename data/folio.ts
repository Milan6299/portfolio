import {
	LucideIcon,
	Code,
	Palette,
	Database,
	Wrench,
	BrainCog,
	BookOpen,
	Heart,
	Leaf,
} from "lucide-react";
import { IconType } from "react-icons";
import { FaServer } from "react-icons/fa";

export type AppIcon = LucideIcon | IconType;
export type Tags = {
	name: string;
	desc: string;
};
export type Skillset = {
	icon?: AppIcon;
	category: string;
	skills: string[];
};
export type Project = {
	id: number;
	title: string;
	description: string;
	image: string;
	tags: string[];
	url: string | null;
	// demo: "https://demo.example.com",
	featured: boolean;
	inprogress: boolean;
};

export type PortfolioDetails = {
	name: string;
	role: string;
	bio: string;
	email: string;
	location: string;
	socials: {
		github: string;
		linkedin: string;
	};
	summary: string;
	tags: Tags[];
	yoe: number;
	skillset: Skillset[];
	education: {
		category: string;
		institute: string;
		discipline: string;
		from: number;
		to: number;
	}[];
	projects: Project[];
	interests: {
		icon: AppIcon;
		title: string;
		description: string;
	}[];
};

export const mydata: PortfolioDetails = {
	name: "Milan Mahapatra",
	role: "Full-stack Developer",
	bio: "I build accessible, performant, and delightful web experiences. Currently focused on React, Next.js, and TypeScript ecosystems.",
	email: "milanmahapatra6299@gmail.com",
	location: "Bhubaneswar, India",
	socials: {
		github: "https://github.com/Milan6299",
		linkedin: "https://www.linkedin.com/in/milan-mahapatra-55b5872a9",
	},
	yoe: 2,
	summary:
		"I'm a passionate Full Stack Developer with over 2 years of experience crafting modern web applications. I specialize in the React ecosystem, particularly Next.js and TypeScript, in the frontend and Python frameworks like Django, FastApi for the backend, with a strong focus on performance, accessibility, and developer experience.",
	tags: [
		{
			name: "Open Source",
			desc: "Contributing back to the developer community.",
		},
		{
			name: "Continuous Learning",
			desc: "Always exploring new technologies and patterns.",
		},
		{
			name: "Automation",
			desc: "Love automating things to aid dev workflow.",
		},
	],
	skillset: [
		{
			category: "Programming Languages",
			icon: Code,
			skills: ["Python", "TypeScript", "Javascript", "Lua"],
		},
		{
			category: "Frontend",
			icon: Palette,
			skills: ["Next js", "React js", "Tailwind", "HTML", "CSS"],
		},
		{
			category: "Backend",
			icon: FaServer,
			skills: ["Django", "FastAPI", "SqlAlchemy"],
		},
		{
			category: "Databases",
			icon: Database,
			skills: ["PostgresQL", "Sqlite", "SQL"],
		},
		{
			category: "Systems & Tooling",
			icon: Wrench,
			skills: [
				"Linux",
				"Git",
				"Github",
				"Bash",
				"Automation",
				"Scripting",
				"Docker",
			],
		},
		{
			category: "AI",
			icon: BrainCog,
			skills: [
				"AI Agents",
				"Prompt Engineering",
				"OpenCode",
				"Ollama",
				"Llama.cpp",
			],
		},
	],
	education: [
		{
			category: "Masters",
			institute: "Fakir Mohan University",
			discipline: "Computer Applications",
			from: 2024,
			to: 2026,
		},
		{
			category: "Bachelors",
			institute: "Stewart Science College",
			discipline: "Science",
			from: 2024,
			to: 2026,
		},
	],
	projects: [
		{
			id: 1,
			title: "Kwik-Term",
			description:
				"A lightweight Neovim terminal plugin for quickly opening, toggling, and sending commands to a persistent terminal.",
			image: "/placeholder-project-1.jpg",
			tags: ["Lua", "Open-Source"],
			url: "https://github.com/Milan6299/kwik-term",
			featured: true,
			inprogress: false,
		},
		{
			id: 2,
			title: "CommitFlow (cflow)",
			description:
				"Currently building a developer-focused cli tool for summarizing code to support project maintenance and improve codebase understanding.",
			image: "/placeholder-project-1.jpg",
			tags: [
				"Python",
				"Sqlite",
				"Sqlalchemy",
				"GitPython",
				"FastAPI",
				"PostgresQL",
				"REST API",
				"LLM Integration",
				"Open-Source",
			],
			url: null,
			// demo: "https://demo.example.com",
			featured: true,
			inprogress: true,
		},
		{
			id: 3,
			title: "Hostel Mess Management System",
			description:
				"App for meal planning, attendance management, expense tracking, and administrative operations, for my major project in MCA.",
			image: "/placeholder-project-1.jpg",
			tags: [
				"Python",
				"Django",
				"Sqlite",
				"Serializers",
				"SessionAuth",
				"Analytics",
				"Numpy",
				"Pandas",
				"Seaborn",
				"Matplotlib",
				"Regression",
				"Next js",
				"Typescript",
				"shadcn",
				"motion",
				"charts",
			],
			url: null,
			// demo: "https://demo.example.com",
			featured: true,
			inprogress: true,
		},
		{
			id: 4,
			title: "CommitFlow Web (cflow-web)",
			description:
				"Website for cflow docs, plugins, syncing local changes to web for storage.",
			image: "/placeholder-project-1.jpg",
			tags: [
				"Python",
				"FastAPI",
				"PostgresQL",
				"Sqlalchemy",
				"REST API",
				"LLM Integration",
				"Next js",
				"Typescript",
				"Open-Source",
			],
			url: null,
			// demo: "https://demo.example.com",
			featured: false,
			inprogress: true,
		},
		{
			id: 5,
			title: "Roomies Expense Tracker",
			description:
				"My first full-stack application to digitize expense splitting among roommates. Don't get startled by the name. It means big daddy!",
			image: "/placeholder-project-1.jpg",
			tags: ["Python", "Django", "Sqlite", "Django-ORM", "Serializers", "JWT"],
			url: "https://badapaa.netlify.app",
			// demo: "https://demo.example.com",
			featured: false,
			inprogress: true,
		},
		{
			id: 6,
			title: "AI Photo Editor Tool",
			description:
				"Phase 1 development of an all-in-one visual content creation platform providing professional editing tools powered by AI.",
			image: "/placeholder-project-1.jpg",
			tags: [
				"Next js",
				"React",
				"Typescript",
				"Javascript",
				"shadcn",
				"motion",
				"react-bits",
			],
			url: "https://photoeditorfe.netlify.app",
			// demo: "https://demo.example.com",
			featured: false,
			inprogress: true,
		},
	],
	interests: [
		{
			icon: Code,
			title: "Clean Code",
			description: "Writing maintainable, scalable, and well-tested code.",
		},
		{
			icon: BookOpen,
			title: "Continuous Learning",
			description: "Always exploring new technologies and patterns.",
		},
		{
			icon: Heart,
			title: "Open Source",
			description: "Contributing back to the developer community.",
		},
		{
			icon: Leaf,
			title: "Nature Lover",
			description: "Despite my tech love nothing beats nature.",
		},
	],
};
