import "./globals.css";


export default function RootLayout({ children }) {
  const navItems = [
    { name: "Product", link: "/product" },
    { name: "Who we serve", link: "/who-we-serve" },
    { name: "Resources", link: "/resources" },
    { name: "Pricing", link: "/pricing" },
  ];

  return (
    <html lang="en">
      <body>
        
        <main>{children}</main>
       
      </body>
    </html>
  );
}
