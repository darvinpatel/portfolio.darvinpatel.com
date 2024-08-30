"use client";
import { SiComptia, SiMicrosoftazure, SiKalilinux } from "react-icons/si";
import { MdOutlineSecurity } from "react-icons/md";
import { FaMicrosoft } from "react-icons/fa";
import { GiGraduateCap } from "react-icons/gi";
import Link from "next/link";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";

const socials = [
	{
		icon: <GiGraduateCap size={20} />,
		href: "https://www.myequals.net/sharelink/d1adf395-47d0-41d6-bd59-e1da156fc148/63c54514-f3e7-48f3-9ad4-0719363cb9ec",
		label: "The University of Sydney",
		handle: "Master of ITM",
	},
	{
		icon: <GiGraduateCap size={20} />,
		href: "https://www.myequals.net/sharelink/9380b7ec-037d-41cc-bf1b-566627dfdb90/67f2e842-c639-4738-8c6b-cb1318b8f2ab",
		label: "The University of Sydney",
		handle: "Master of IT",
	},
	{
		icon: <GiGraduateCap size={20} />,
		href: "https://github.com/darvinpatel",
		label: "Nirma University",
		handle: "B.Tech in CSE",
	},
	{
		icon: <FaMicrosoft size={20} />,
		href: "https://learn.microsoft.com/en-gb/users/darvinpatel-6473/credentials/81efd02d41c7d0c5",
		label: "Microsoft Certified: Security, Compliance, and Identity Fundamentals",
		handle: "SC - 900",
	},
	{
		icon: <SiKalilinux size={20} />,
		href: "https://cs.lpi.org/caf/Xamman/certification/verify/LPI000433401/udjab7bdv6",
		label: "Linux Professional Institute",
		handle: "Linux Essentials",
	},
	{
		icon: <SiMicrosoftazure size={20} />,
		href: "https://learn.microsoft.com/en-gb/users/darvinpatel-6473/credentials/b0b912c0de9aa8e5",
		label: "Configure SIEM security operations using Microsoft Sentinel",
		handle: "Applied Skills",
	},
	{
		icon: <SiMicrosoftazure size={20} />,
		href: "https://learn.microsoft.com/en-gb/users/darvinpatel-6473/credentials/adafbfd09e27ae7e",
		label: "Secure Azure services and workloads with Microsoft Defender for Cloud regulatory compliance controls",
		handle: "Applied Skills",
	},
	{
		icon: <SiMicrosoftazure size={20} />,
		href: "https://learn.microsoft.com/en-gb/users/darvinpatel-6473/credentials/d1edc42dcfe65c3b",
		label: "Deploy and configure Azure Monitor",
		handle: "Applied Skills",
	},
	{
		icon: <SiComptia size={20} />,
		href: "https://github.com/darvinpatel",
		label: "Work in Progress",
		handle: "Security+",
	},

];

export default function Example() {
	return (
		<div className=" bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
			<Navigation />
			<div className="container flex items-center justify-center min-h-screen px-4 mx-auto">
				<div className="grid w-full grid-cols-1 gap-8 mx-auto mt-32 sm:mt-0 sm:grid-cols-3 lg:gap-16">
					{socials.map((s) => (
						<Card>
							<Link
								href={s.href}
								target="_blank"
								className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24  lg:pb-48  md:p-16"
							>
								<span
									className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
									aria-hidden="true"
								/>
								<span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
									{s.icon}
								</span>{" "}
								<div className="z-10 flex flex-col items-center">
									<span className="lg:text-xl font-medium duration-150 xl:text-3xl text-zinc-200 group-hover:text-white font-display">
										{s.handle}
									</span>
									<span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
										{s.label}
									</span>
								</div>
							</Link>
						</Card>
					))}
				</div>
			</div>
		</div>
	);
}
