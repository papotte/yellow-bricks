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
		<section className={`container flex flex-col mx-auto items-center justify-between font-inter`}>
			<div className="relative flex gap-4 place-items-baseline before:absolute">
				<h1
					className="text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-tr from-primary-900 to-70% to-accent-900 dark:from-primary-200
                dark:to-accent-500 lg:text-6xl font-spicy"
				>
					{t("metadata.title")}
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
	);
}
