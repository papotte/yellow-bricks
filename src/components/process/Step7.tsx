import GoalForm from "@/components/process/form";
import { useTranslations } from "next-intl";
import React from "react";

const checkboxes = [{ id: "goal-1" }];
const docCheckboxes = [
	{ id: "doc-1" },
	{ id: "doc-2" },
	{ id: "doc-3" },
	{ id: "doc-4" },
	{ id: "doc-5" },
	{ id: "doc-6" },
];

export default function Step7() {
	const translationPath = "process.step7";
	const t = useTranslations(translationPath);
	return (
		<div className={`w-full flex flex-col gap-4`}>
			<p>{t("description")}</p>

			<GoalForm translationPath="process.step7-docs" checkboxes={docCheckboxes} />

			<GoalForm translationPath={translationPath} checkboxes={checkboxes} />
		</div>
	);
}
