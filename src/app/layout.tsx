import "./globals.css";
import AuthProvider from "@/providers/auth";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
