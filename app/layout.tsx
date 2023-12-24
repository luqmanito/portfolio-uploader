import "./globals.css";
import { Inter } from "next/font/google";
import { useRouter } from "next/router";
import PageHeader from "@/components/PageHeader";
import PageFooter from "@/components/PageFooter";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Personal Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <PageHeader />
        {children}
        <PageFooter />
      </body>
    </html>
  );
}
