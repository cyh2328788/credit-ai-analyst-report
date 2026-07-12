import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "企业信用研究 AI Analyst",
  description: "固收投资 AI 课题实施情况和成果成效",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
