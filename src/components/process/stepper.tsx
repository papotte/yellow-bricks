import Consultation from "@/components/process/consultation";
import Overview from "@/components/process/overview";
import Step2 from "@/components/process/Step2";
import { ClockIcon } from "@heroicons/react/24/outline";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";
import Step6 from "./Step6";
import Step7 from "./Step7";
import Step8 from "./Step8";
import Step9 from "./Step9";

type Step = {
	name: string;
	component: React.ComponentType;
};

const steps: Step[] = [
	{
		name: "first-consultation",
		component: Consultation,
	},
	{
		name: "step2",
		component: Step2,
	},
	{
		name: "step3",
		component: Step3,
	},
	{
		name: "step4",
		component: Step4,
	},
	{
		name: "step5",
		component: Step5,
	},
	{
		name: "step6",
		component: Step6,
	},
	{
		name: "step7",
		component: Step7,
	},
	{
		name: "step8",
		component: Step8,
	},
	{
		name: "step9",
		component: Step9,
	},
];

export default function Stepper() {
	const t = useTranslations("process");
	const [currentStepIndex, setCurrentStepIndex] = useState(0);
	const [selectedStep, setSelectedStep] = useState<Step | null>(null);

	useEffect(() => {
		setSelectedStep(null);
		const selectedStep = steps[currentStepIndex];

		if (selectedStep) {
			setSelectedStep(selectedStep);
		}
	}, [currentStepIndex]);

	return (
		<div className={"w-3/4 gap-3 flex flex-wrap md:grid md:grid-cols-3 "}>
			<ol className="flex md:items-start flex-col gap-4">
				{steps.map((step, index) => (
					<li
						key={step.name}
						className={`flex items-center space-x-2.5 rtl:space-x-reverse ${
							currentStepIndex === index
								? "text-secondary-600 dark:text-secondary-500"
								: "text-neutral-500 dark:text-neutral-400"
						}`}
						onClick={() => setCurrentStepIndex(index)}
					>
						<span
							className={`flex items-center justify-center w-8 h-8 rounded-full shrink-0 border ${
								currentStepIndex === index
									? "border-secondary-600 dark:border-secondary-500"
									: "border-neutral-500 dark:border-neutral-400"
							}`}
						>
							{index + 1}
						</span>
						<span>
							<h5 className="leading-tight">{t(step.name + ".title")}</h5>
							<p className="text-sm">
								<ClockIcon height={16} width={16} /> {t(step.name + ".time")}
							</p>
						</span>
					</li>
				))}
			</ol>
			{selectedStep !== null && (
				<div className="col-span-2 flex flex-col">
					<h2 className="mb-4 self-center">{t(selectedStep.name + ".title")}</h2>
					<selectedStep.component />
					<div className={"flex justify-between my-4 flex-row-reverse"}>
						<button
							onClick={() => setCurrentStepIndex(currentStepIndex + 1)}
							disabled={currentStepIndex === steps.length - 1}
							className={"btn btn-secondary"}
						>
							{t("next")}
						</button>
						<button
							onClick={() => setCurrentStepIndex(currentStepIndex - 1)}
							disabled={currentStepIndex === 0}
							className={"btn btn-neutral hide-disabled"}
						>
							{t("previous")}
						</button>
					</div>
				</div>
			)}
		</div>
	);
}
