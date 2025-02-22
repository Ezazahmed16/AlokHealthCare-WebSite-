import HeroBanner from "@/components/Hero/HeroBanner/HeroBanner";
import HeroDoctors from "@/components/Hero/HeroDoctors/HeroDoctors";
import HeroDoctorsSchedules from "@/components/Hero/HeroDoctorsSchedules/HeroDoctorsSchedules";
import Testimonials from "@/components/Hero/Testimonials/Testimonials";

export default function Home() {
  return (
    <div className="">
      <HeroBanner />
      <HeroDoctors />
      <Testimonials />
      <HeroDoctorsSchedules />
    </div>
  );
}
