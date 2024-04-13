import React from "react";

export async function getStaticProps(context: any) {
	return {
		props: {
			// You can get the messages from anywhere you like. The recommended
			// pattern is to put them in JSON files separated by locale and read
			// the desired one based on the `locale` received from Next.js.
			messages: (await import(`../locale/${context.locale}.json`)).default,
		},
	};
}

const ErrorPage = () => {
	return (
		<>
			<main className="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
				<div className="text-center">
					<p className="text-base font-semibold text-secondary-600 dark:text-secondary-200">404</p>
					<h1 className="mt-4 text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-5xl">
						Page not found
					</h1>
					<p className="mt-6 text-base leading-7 text-neutral-600 dark:text-neutral-400">
						Sorry, we couldn’t find the page you’re looking for.
					</p>
					<div className="mt-10 flex items-center justify-center gap-x-6">
						<a
							href="#"
							className="rounded-md bg-secondary-600 dark:bg-secondary-400 px-3.5 py-2.5 text-sm font-semibold text-neutral-200 dark:text-neutral-800
							shadow-sm hover:bg-secondary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
							focus-visible:outline-secondary-600"
						>
							Go back home
						</a>
						<a href="/contact" className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
							Contact support <span aria-hidden="true">&rarr;</span>
						</a>
					</div>
				</div>
			</main>
		</>
	);
};

export default ErrorPage;
