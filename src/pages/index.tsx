import Stepper from "@/components/process/stepper";
import Feature from "@/components/ui/feature";
import { useTranslations } from "next-intl";
import React from "react";
import Image from "next/image";

export async function getStaticProps(context: any) {
	return {
		props: {
			// You can get the messages from anywhere you like. The recommended
			// pattern is to put them in JSON files separated by locale and read
			// the desired one based on the `locale` received from Next.js.
			messages: (await import(`../locale/${context.locale}.json`)).default,
		},
	};
}

export default function Home() {
	const t = useTranslations();
	return (
		<>
			<div
				className="background fixed inset-0 -z-50 opacity-30"
				style={{
					background:
						"linear-gradient(135deg, rgba(250,229,80,1) 20%, rgba(139,183,232,1) 60%, rgba(244,183,166,1) 80%)",
				}}
			></div>
			<section className={`container flex flex-col mx-auto items-center justify-between font-inter`}>
				<div className="relative flex flex-col items-center gap-4 place-items-baseline before:absolute">
					<Image
						className="h-auto w-40 lg:w-60"
						width={480}
						height={480}
						src="/logo.png"
						alt="Road to therapy"
					/>
					<h1 className="text-5xl font-bold text-center text-black lg:text-6xl font-spicy">
						<span className="uppercase">
							<span className="tracking-wider">Road to</span>
							<br /> therapy
						</span>
					</h1>
					<a
						className="pointer-events-none flex place-items-center p-8 lg:pointer-events-auto lg:p-0 text-accent-500"
						href="https://yellow-bricks.dev"
						target="_blank"
						rel="noopener noreferrer"
					>
						<h6>{t("metadata.author")}</h6>
					</a>
				</div>
				<Feature />
				<Stepper />
			</section>
		</>
	);
}
