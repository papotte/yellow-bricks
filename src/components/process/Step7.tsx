import GoalForm from "@/components/process/form";
import { useTranslations } from "next-intl";
import React from "react";

const checkboxes = [{ id: "goal-1" }];

export default function Step7() {
	const translationPath = "process.step7";
	const t = useTranslations(translationPath);
	return (
		<div className={`w-full flex flex-col gap-4`}>
			<p>{t("description")}</p>
			<h5>{t("checklist")}</h5>
			<ul className="list-disc list-inside">
				<li>{t("checklist1")}</li>
				<li>{t("checklist2")}</li>
				<li>{t("checklist3")}</li>
				<li>{t("checklist4")}</li>
				<li>{t("checklist5")}</li>
				<li>{t("checklist6")}</li>
			</ul>
			<GoalForm translationPath={translationPath} checkboxes={checkboxes} />
		</div>
	);
}
