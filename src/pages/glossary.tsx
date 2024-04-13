import { useTranslations } from "next-intl";
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

const GlossaryPage = () => {
	const t = useTranslations("glossary");
	const itemNumber: number = 7;

	return (
		<>
			<h1 className="mt-4 text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-5xl">
				{t("title")}
			</h1>
			<p className="mt-6 text-base leading-7 text-neutral-600 dark:text-neutral-400">{t("description")}</p>
			<ul role="list" className="w-3/4 list-disc list-inside gap-8 flex flex-col">
				{Array.from({ length: itemNumber }).map((value, index: any) => (
					<li key={index} className="flex flex-col gap-2">
						<h5>{t(`item${index + 1}.title`)}</h5>
						<p>{t(`item${index + 1}.description`)}</p>
					</li>
				))}
			</ul>
		</>
	);
};

export default GlossaryPage;
