import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar";
import { ContactNavbar } from "./Components/ContactNavbar"; 
import { Footer } from "./Components/Footer";
import 'leaflet/dist/leaflet.css'; // Import Leaflet styles

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Umiya mata",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white w-full h-full bg-center" style={{ backgroundImage: 'url(/images/background.webp)' }}>
        <ContactNavbar/>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
