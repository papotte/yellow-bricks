import Stepper from "@/components/process/stepper";
import Feature from "@/components/ui/feature";
import { useTranslations } from "next-intl";
import { Inter } from "next/font/google";
import React from "react";

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

export default function Start() {
	return (
		<>
			<Stepper />
		</>
	);
}
