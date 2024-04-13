import "@/styles/globals.scss";
import Layout from "@/components/ui/layout";

import { ConfigProvider, theme } from "antd";
import type { AppType } from "next/app";
import type { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { NextIntlClientProvider } from "next-intl";

import { api } from "@/plugins/trpc/api";
import { useRouter } from "next/router";
import React from "react";
import "flowbite";

import { Inter, Lexend, Spicy_Rice } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spicyRice = Spicy_Rice({ weight: "400", subsets: ["latin"], variable: "--font-spicy-rice" });
const lexend = Lexend({ subsets: ["latin"], variable: "--font-lexend" });

type AppProps = {
	session: Session | null;
	messages: any;
};

const MyApp: AppType<AppProps> = ({ Component, pageProps: { session, messages, ...pageProps } }) => {
	const router = useRouter();

	return (
		<NextIntlClientProvider locale={router.locale} timeZone="Europe/Berlin" messages={messages}>
			<ConfigProvider
				theme={{
					algorithm: theme.darkAlgorithm,
				}}
			>
				<SessionProvider session={session}>
					<main className={`${inter.variable} ${spicyRice.variable} ${lexend.variable} ${lexend.className}`}>
						<Layout>
							<Component {...pageProps} />
						</Layout>
					</main>
				</SessionProvider>
			</ConfigProvider>
		</NextIntlClientProvider>
	);
};

export default api.withTRPC(MyApp);
