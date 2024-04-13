import GoalForm from "@/components/process/form";
import { QuestionMarkCircleIcon } from "@heroicons/react/16/solid";
import { useTranslations } from "next-intl";
import React from "react";

const checkboxes = [
	{ id: "goal-1", tooltip: true },
	{ id: "goal-2", tooltip: true },
];
export default function Consultation() {
	const translationPath = "process.first-consultation";
	const t = useTranslations(translationPath);

	return (
		<div className={`w-full flex flex-col gap-4`}>
			<p>{t("description")}</p>
			<h3>{t("how")}</h3>
			<p>{t("how-summary")}</p>
			<ul className="list-disc list-inside">
				<li>
					{t.rich("how1", {
						bold: (chunks) => <b>{chunks}</b>,
						tel: (chunks) => <a href="tel:116117">{chunks}</a>,
					})}
				</li>
				<li>
					{t.rich("how2", {
						link: (chunks) => <a href="https://116117.de">{chunks}</a>,
					})}
				</li>
				<li>{t("how3")}</li>
			</ul>
			<h5>{t("tips")}</h5>
			<ul className="list-disc list-inside">
				<li>
					{t("tips-keywords")}
					<span data-tooltip-target="tooltip-keywords">
						<QuestionMarkCircleIcon width={12} height={12} />
					</span>
				</li>

				<li>{t("tips-seats")}</li>
			</ul>
			<div
				id="tooltip-keywords"
				role="tooltip"
				className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
			>
				{t("tips-keywords-help")}
				<div className="tooltip-arrow" data-popper-arrow></div>
			</div>
			<GoalForm translationPath={translationPath} checkboxes={checkboxes} />
		</div>
	);
}
