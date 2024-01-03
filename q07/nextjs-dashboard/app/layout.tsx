import "@/app/ui/global.css";
import { inter } from "@/app/ui/fonts";
import { ClerkProvider } from "@clerk/nextjs";

export const siteTitle = "Q07 - APP ROUTER";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ClerkProvider>
        <title>{siteTitle}</title>
        <body className={`${inter.className} antialiased`}>{children}</body>
      </ClerkProvider>
    </html>
  );
}
