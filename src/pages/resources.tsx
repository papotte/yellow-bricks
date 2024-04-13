import { useTranslations } from "next-intl";
import Link from "next/link";
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

const ResourcesPage = () => {
	const t = useTranslations("pages.resources");
	const links = [
		{
			title: "Next.js",
			href: "https://nextjs.org",
		},
		{
			title: "Tailwind CSS",
			href: "https://tailwindcss.com",
		},
		{
			title: "Heroicons",
			href: "https://heroicons.com",
		},
	];
	return (
		<>
			<h1 className="mt-4 text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-5xl">
				{t("title")}
			</h1>
			<p className="mt-6 text-base leading-7 text-neutral-600 dark:text-neutral-400">{t("description")}</p>
			<ul role="list" className="w-3/4 list-disc list-inside">
				{links.map((link: any) => (
					<li key={link.title} className="flex justify-between gap-x-6 py-5">
						<Link href={link.href}>{link.title}</Link>
					</li>
				))}
			</ul>
		</>
	);
};

export default ResourcesPage;
