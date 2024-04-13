import GoalForm from "@/components/process/form";
import HelpIcon from "@/components/ui/help-icon";
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
					<HelpIcon tooltip={t("tips-keywords-help")} />
				</li>

				<li>{t("tips-seats")}</li>
			</ul>

			<GoalForm translationPath={translationPath} checkboxes={checkboxes} />
		</div>
	);
}
