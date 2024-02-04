"use client";
import Header from "./components/header/header";
import "./global.css";
import StoreProvider from "./StoreProvider";

export default function RootLayout({ children }) {
  return (
    <StoreProvider>
      <html lang="en">
        <body>
          <header>
            <Header />
          </header>
          {children}
        </body>
      </html>
    </StoreProvider>
  );
}
