import { useTranslations } from "next-intl";
import Image from "next/image";

const features = [
	{
		name: "visualize",
		src: "/icons/path.png",
	},
	{
		name: "track",
		src: "/icons/progress.png",
	},
	{
		name: "resources",
		src: "/icons/resources.png",
	},
	{
		name: "connect",
		src: "/icons/rainbow.png",
	},
];

export default function Feature() {
	const t = useTranslations("feature");

	return (
		<div className="py-16 sm:py-24">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto max-w-2xl lg:text-center">
					<h2 className="hidden text-base font-semibold leading-7 text-accent-700 dark:text-accent-300">
						{t("title")}
					</h2>
					<p className="mt-2 text-3xl font-bold tracking-tight text-accent-600 dark:text-accent-400 sm:text-4xl">
						{t("subtitle")}
					</p>
					<p className="mt-6 text-lg leading-8 text-neutral-600 dark:text-neutral-200">{t("description")}</p>
				</div>
				<div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
					<dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
						{features.map((feature) => (
							<div key={feature.name} className="relative pl-16">
								<dt className="text-base font-semibold leading-7 text-neutral-900 dark:text-neutral-200">
									<div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-lg p-1 bg-clip-content border border-accent-600 dark:border-accent-300">
										<Image
											src={feature.src}
											alt={feature.name}
											width={40}
											height={40}
											aria-hidden="true"
										/>
									</div>
									{t(`${feature.name}.title`)}
								</dt>
								<dd className="mt-2 text-base leading-7 text-neutral-600">
									{t(`${feature.name}.description`)}
								</dd>
							</div>
						))}
					</dl>
				</div>
			</div>
		</div>
	);
}
