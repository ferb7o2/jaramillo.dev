import NavBar from "@/components/navBar/navBar";
import "./globals.css";
import { roboto } from "../utils/fonts";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			{/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
			<head />

			<body className={roboto.className}>
				<NavBar />
				{children}
			</body>
		</html>
	);
}
