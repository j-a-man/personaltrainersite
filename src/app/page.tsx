import { Hero } from "./components/home/Hero";
import { Testimonials } from "./components/home/Testimonials";
import { Footer } from "./components/layout/Footer";
import { Transformations } from "./components/home/Transformations";
import { Timeline } from "./components/home/Timeline";
import { ReachBestSelf } from "./components/home/ReachBestSelf";
import { Pricing } from "./components/home/Pricing";
import { Coaches } from "./components/home/Coaches";

import { ReviewFunnel } from "./components/testimonials/ReviewFunnel";

export default function Home() {
  return (
    <main>
      <Hero />
      <Transformations />
      <Timeline />
      <ReachBestSelf />
      <Pricing />
      <Testimonials />
      <Coaches />
      <section className="py-24 px-6 md:px-8 max-w-7xl mx-auto">
        <ReviewFunnel />
      </section>
      <Footer />
    </main>
  );
}
