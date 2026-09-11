import Header from "@/components/header";
import Navbar from "@/components/navbar";
import Features from "@/components/features";
import Sponsors from "@/components/sponsors";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto w-full px-4 sm:px-6 lg:px-8">
      <Navbar />
      <Header />
      <Features />
      <hr className="w-96 mx-auto mt-20 text-[#191919]" />
      <Sponsors />
      <hr className="w-96 mx-auto mt-20  text-[#191919]" />
      <Footer />
    </main>
  );
}
