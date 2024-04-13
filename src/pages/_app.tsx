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
					<Layout>
						<Component {...pageProps} />
					</Layout>
				</SessionProvider>
			</ConfigProvider>
		</NextIntlClientProvider>
	);
};

export default api.withTRPC(MyApp);
