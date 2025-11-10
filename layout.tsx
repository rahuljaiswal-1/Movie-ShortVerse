import type { Metadata } from "next";
import "./globals.css";
import AuthGuard from "@/components/AuthGuard";

export const metadata: Metadata = {
     title: "Movie Short Verse - Stream Movies & Series Online",
     description: "Watch unlimited movies and TV shows. Stream the latest releases, trending content, and classic favorites. Sign up now for free!",
     keywords: ["movies", "streaming", "TV shows", "watch online", "entertainment", "Netflix alternative"],
     authors: [{ name: "Movie Short Verse" }],
     openGraph: {
          title: "Movie Short Verse - Stream Movies & Series",
          description: "Watch unlimited movies and TV shows online",
          type: "website",
          locale: "en_US",
          siteName: "Movie Short Verse",
     },
     twitter: {
          card: "summary_large_image",
          title: "Movie Short Verse - Stream Movies & Series",
          description: "Watch unlimited movies and TV shows online",
     },
     robots: {
          index: true,
          follow: true,
     },
};

export default function RootLayout({
     children,
}: {
     children: React.ReactNode;
}) {
     return (
          <html lang="en">
               <body>
                    <AuthGuard>{children}</AuthGuard>
               </body>
          </html>
     );
}
