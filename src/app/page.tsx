import { Hero } from "@/components/sections/Hero";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Testimonials } from "@/components/sections/Testimonials";
import { HomeBlog } from "@/components/sections/HomeBlog";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <ServicesGrid />
      <WhyChooseUs />
      <Testimonials />
      <HomeBlog />
      <FinalCTA />
    </div>
  );
}
