import Consultation from "@/components/process/consultation";
import Overview from "@/components/process/overview";
import Step2 from "@/components/process/Step2";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

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
		name: "step-2",
		component: Step2,
	},
	{
		name: "step3",
		component: Overview,
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
		<>
			<ol className="items-center mx-auto space-y-4 sm:flex sm:space-x-8 sm:space-y-0 rtl:space-x-reverse">
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
							<p className="text-sm">{t(step.name + ".summary")}</p>
						</span>
					</li>
				))}
			</ol>
			{selectedStep !== null && (
				<div className="mt-8">
					<h2 className="mb-4">{t(selectedStep.name + ".title")}</h2>
					<selectedStep.component />
				</div>
			)}
		</>
	);
}
