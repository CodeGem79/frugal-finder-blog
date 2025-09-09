import Hero from "@/components/Hero";
import BlogSection from "@/components/BlogSection";
import AppFeatures from "@/components/AppFeatures";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <AppFeatures />
      <BlogSection />
      <Footer />
    </div>
  );
};

export default Index;
