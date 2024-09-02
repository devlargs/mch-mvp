import "./globals.css";
import { Lato } from "next/font/google";
import { Footer, Header, Providers } from "@/components";
import { Box } from "@chakra-ui/react";

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Providers>
        <body className={lato.className}>
          <Box maxW="1318px" px="24px" margin="auto">
            <Header />
            {children}
          </Box>
          <Footer />
        </body>
      </Providers>
    </html>
  );
}
