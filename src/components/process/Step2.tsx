import GoalForm from "@/components/process/form";
import { useTranslations } from "next-intl";
import React from "react";

const checkboxes = [{ id: "goal-1" }];

export default function Step2() {
	const translationPath = "process.step2";
	const t = useTranslations(translationPath);
	return (
		<div className={`w-full flex flex-col gap-4`}>
			<p>{t("description")}</p>
			<h3>{t("how")}</h3>
			<ul className="list-disc list-inside">
				<li>{t("how1")}</li>
				<li>{t("how2")}</li>
			</ul>
			<h5>{t("tips")}</h5>
			<ul className="list-disc list-inside">
				<li>
					{t.rich("tip1", {
						link: (chunks) => <a href={chunks as string}>QueerMed</a>,
					})}
				</li>
				<li>{t("tip2")}</li>
				<li>
					{t.rich("tip3", {
						link: (chunks) => (
							<a href={chunks as string} target="_blank" rel="noopener noreferrer">
								this template
							</a>
						),
					})}
				</li>
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
