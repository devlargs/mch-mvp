import "./globals.css";
import { Lato } from "next/font/google";
import { Footer, Header, Providers } from "@/components";
import { Box } from "@chakra-ui/react";
import { CONTAINER_MAX_WIDTH } from "@/utils/styleDefaults";

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
          <Box maxW={CONTAINER_MAX_WIDTH} margin="auto">
            <Header />
          </Box>
          {children}
          <Footer />
        </body>
      </Providers>
    </html>
  );
}
