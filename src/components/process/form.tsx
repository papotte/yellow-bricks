import HelpIcon from "@/components/ui/help-icon";
import { useTranslations } from "next-intl";
import React, { useEffect } from "react";
import { useSessionStorage } from "usehooks-ts";

type Checkbox = {
	id: string;
	tooltip?: boolean;
};
type GoalProps = {
	translationPath: string;
	checkboxes: Checkbox[];
};
const GoalForm = ({ translationPath, checkboxes }: GoalProps) => {
	const t = useTranslations(translationPath);
	const [formState, setFormState] = useSessionStorage<{ [key: string]: boolean }>(translationPath, {});

	useEffect(() => {
		console.log(formState);
	}, [formState]);

	const toggleGoal = (e: any) => {
		setFormState({
			...formState,
			[e.target.id]: e.target.checked,
		});
	};

	const isGoalChecked = (goal: string) => {
		return formState[goal];
	};

	return (
		<>
			<h3>{t("goals")}</h3>
			<form className={"flex flex-col gap-1"}>
				{checkboxes.map((checkbox) => (
					<div key={checkbox.id} className="flex items-center mb-4 checkbox-field">
						<input
							id={checkbox.id}
							type="checkbox"
							checked={isGoalChecked(checkbox.id)}
							onChange={toggleGoal}
						/>
						<label htmlFor={checkbox.id}>
							{t(`checkbox-${checkbox.id}`)}
							{checkbox.tooltip && <HelpIcon tooltip={t(checkbox.id + "-help")} />}
						</label>
					</div>
				))}
			</form>
		</>
	);
};

export default GoalForm;
