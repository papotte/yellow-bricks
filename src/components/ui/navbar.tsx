import { LanguageIcon, UserIcon } from "@heroicons/react/16/solid";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
	{ name: "home", href: "/", current: true },
	{ name: "start", href: "/start", current: false },
	{ name: "about", href: "/about", current: false },
	{ name: "resources", href: "/resources", current: false },
];

const languages = [
	{ name: "en", current: true },
	{ name: "de", current: false },
];

function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(" ");
}

export async function getStaticProps(context: any) {
	return {
		props: {
			// You can get the messages from anywhere you like. The recommended
			// pattern is to put them in JSON files separated by locale and read
			// the desired one based on the `locale` received from Next.js.
			messages: (await import(`../../locale/${context.locale}.json`)).default,
		},
	};
}

export default function Navbar() {
	const t = useTranslations("navigation");
	const locale = useLocale();

	const isActiveLang = (lang: string) => {
		return lang === locale;
	};

	return (
		<Disclosure as="nav" className="bg-gray-800">
			{({ open }) => (
				<>
					<div className="w-full px-2 sm:px-6 lg:px-8 mb-8">
						<div className="relative flex h-16 items-center justify-between">
							<div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
								{/* Mobile menu button*/}
								<Disclosure.Button
									className="relative inline-flex items-center justify-center rounded-md p-2
								text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
								>
									<span className="absolute -inset-0.5" />
									<span className="sr-only">{t("menu")}</span>
									{open ? (
										<XMarkIcon className="block h-6 w-6" aria-hidden="true" />
									) : (
										<Bars3Icon className="block h-6 w-6" aria-hidden="true" />
									)}
								</Disclosure.Button>
							</div>
							<div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
								<div className="flex flex-shrink-0 items-center">
									<Image
										className="h-8 w-auto"
										width={32}
										height={32}
										src="/logo.png"
										alt="Your Company"
									/>
								</div>
								<div className="hidden sm:ml-6 sm:block">
									<div className="flex space-x-4">
										{navigation.map((item) => (
											<a
												key={item.name}
												href={item.href}
												className={classNames(
													item.current
														? "bg-gray-900 text-white"
														: "text-gray-300 hover:bg-gray-700 hover:text-white",
													"rounded-md px-3 py-2 text-sm font-medium"
												)}
												aria-current={item.current ? "page" : undefined}
											>
												{t(item.name)}
											</a>
										))}
									</div>
								</div>
							</div>
							<div className="absolute inset-y-0 right-0 flex items-center pr-2 gap-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
								<button
									type="button"
									className="inline-flex font-mono justify-center rounded-md border border-transparent bg-accent-100 px-4 py-2
                                    text-sm font-medium text-accent-900 hover:bg-accent-200 focus:outline-none focus-visible:ring-2
                                    focus-visible:ring-accent-500 focus-visible:ring-offset-2"
								>
									{t("survey")}
								</button>
								<button
									type="button"
									className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none
                                    focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
								>
									<span className="sr-only">{t("notifications")}</span>
									<BellIcon className="h-6 w-6" aria-hidden="true" />
								</button>
								{/* Language dropdown */}
								<Menu as="div" className="">
									<div>
										<Menu.Button
											className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none
                                    focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
										>
											<span className="sr-only">{t("language.title")}</span>
											<LanguageIcon className={`h-6 w-6`} aria-hidden="true" />
										</Menu.Button>
									</div>
									<Transition
										as={Fragment}
										enter="transition ease-out duration-100"
										enterFrom="transform opacity-0 scale-95"
										enterTo="transform opacity-100 scale-100"
										leave="transition ease-in duration-75"
										leaveFrom="transform opacity-100 scale-100"
										leaveTo="transform opacity-0 scale-95"
									>
										<Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
											{languages.map((item) => (
												<Menu.Item key={item.name}>
													<Link
														href="#"
														locale={item.name}
														className={classNames(
															isActiveLang(item.name) ? "bg-secondary-100" : "",
															"block px-4 py-2 text-sm text-gray-700"
														)}
													>
														{t(`language.${item.name}`)}
													</Link>
												</Menu.Item>
											))}
										</Menu.Items>
									</Transition>
								</Menu>
								{/* Profile dropdown */}
								<Menu as="div" className="">
									<div>
										<Menu.Button
											className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none
                                    focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
										>
											<span className="sr-only">{t("userMenu.title")}</span>
											<UserIcon className={`h-6 w-6`} aria-hidden="true" />
										</Menu.Button>
									</div>
									<Transition
										as={Fragment}
										enter="transition ease-out duration-100"
										enterFrom="transform opacity-0 scale-95"
										enterTo="transform opacity-100 scale-100"
										leave="transition ease-in duration-75"
										leaveFrom="transform opacity-100 scale-100"
										leaveTo="transform opacity-0 scale-95"
									>
										<Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
											<Menu.Item>
												{({ active }) => (
													<a
														href="#"
														className={classNames(
															active ? "bg-gray-100" : "",
															"block px-4 py-2 text-sm text-gray-700"
														)}
													>
														{t("userMenu.profile")}
													</a>
												)}
											</Menu.Item>
											<Menu.Item>
												{({ active }) => (
													<a
														href="#"
														className={classNames(
															active ? "bg-gray-100" : "",
															"block px-4 py-2 text-sm text-gray-700"
														)}
													>
														{t("userMenu.settings")}
													</a>
												)}
											</Menu.Item>
											<Menu.Item>
												{({ active }) => (
													<a
														href="#"
														className={classNames(
															active ? "bg-gray-100" : "",
															"block px-4 py-2 text-sm text-gray-700"
														)}
													>
														{t("userMenu.logout")}
													</a>
												)}
											</Menu.Item>
										</Menu.Items>
									</Transition>
								</Menu>
							</div>
						</div>
					</div>

					<Disclosure.Panel className="sm:hidden">
						<div className="space-y-1 px-2 pb-3 pt-2">
							{navigation.map((item) => (
								<Disclosure.Button
									key={item.name}
									as="a"
									href={item.href}
									className={classNames(
										item.current
											? "bg-gray-900 text-white"
											: "text-gray-300 hover:bg-gray-700 hover:text-white",
										"block rounded-md px-3 py-2 text-base font-medium"
									)}
									aria-current={item.current ? "page" : undefined}
								>
									{t(item.name)}
								</Disclosure.Button>
							))}
						</div>
					</Disclosure.Panel>
				</>
			)}
		</Disclosure>
	);
}
