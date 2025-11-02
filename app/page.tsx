import { Store } from "lucide-react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import StoreSection from "./components/StoreSection";
import TrailorSection from "./components/TrailorSection";
import AboutSection from "./components/AboutSection";
import BannerSection from "./components/BannerSection";
import FooterSection from "./components/FooterSection";

export default function Home() {
  return (
    // <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
    //   <Header/>
    //   <HeroSection/>
    // </div>
    <>
    <Header/>
    <HeroSection/>
    <StoreSection/>
    <TrailorSection/>
    <AboutSection/>
    <BannerSection/>
    <FooterSection/>
    </>
  );
}
