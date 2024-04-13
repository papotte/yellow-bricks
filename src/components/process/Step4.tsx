import GoalForm from "@/components/process/form";
import { useTranslations } from "next-intl";
import React from "react";
const checkboxes = [{ id: "goal-1" }];

export default function Step4() {
	const translationPath = "process.step4";
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
				<li>{t("tip1")}</li>
			</ul>
			<GoalForm translationPath={translationPath} checkboxes={checkboxes} />
		</div>
	);
}
