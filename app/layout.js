import "./globals.css";

export const metadata = {
  title: "Alluring Spaces by Charlotte | Interior Design",
  description: "Premium interior design portfolio powered by Next.js and Sanity CMS.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
