import Feature from "@/components/ui/feature";
import { useTranslations } from "next-intl";
import dynamic from "next/dynamic";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useSessionStorage } from "usehooks-ts";

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

const DynamicStepper = dynamic(() => import("@/components/process/stepper"), { ssr: false });
export default function Home() {
	const t = useTranslations();

	const [isFirstVisit, setFirstVisit] = useState<boolean>(true);

	const [currentStepIndex] = useSessionStorage<number>("currentStepIndex", 0);

	useEffect(() => {
		if (currentStepIndex > 0) {
			setFirstVisit(false);
		}
	}, [currentStepIndex, setFirstVisit]);

	return (
		<>
			<div
				className="background fixed inset-0 -z-50 opacity-30"
				style={{
					background:
						"linear-gradient(135deg, rgba(250,229,80,1) 20%, rgba(139,183,232,1) 60%, rgba(244,183,166,1) 80%)",
				}}
			></div>
			{!isFirstVisit && (
				<div
					className="p-2 mb-4 bg-accent-800 items-center text-accent-100 leading-none lg:rounded-full flex lg:inline-flex"
					role="alert"
				>
					<span className="font-semibold mr-2 text-left flex-auto">{t("welcome-back")}</span>
					<a href="#process" className="cursor-pointer">
						<svg
							className="fill-current opacity-75 h-4 w-4"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
						>
							<path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" />
						</svg>
					</a>
				</div>
			)}
			<section className={`container flex flex-col mx-auto items-center justify-between font-lexend`}>
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
				<div id="process">
					<DynamicStepper />
				</div>
			</section>
		</>
	);
}
