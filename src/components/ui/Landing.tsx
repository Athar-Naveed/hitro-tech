import {
  partners,
  slides,
  stats,
  technologies,
  testimonials,
} from "@/data/constants";
import Carousel from "../carousel";
import Partners from "../partners";
import Services from "./Services";
import Bubble from "../bubble";
import Process from "../process";
import Stats from "../stats";
import Leadership from "../leadership";
import Approvals from "../approvals";

export default function Landing() {
  return (
    <div>
      <Carousel slider={slides} />
      <Partners data={partners} />
      <Services />
      <Bubble
        title={"Tailored Digital Solutions for You"}
        heading={"Focused Business Growth with Commitment"}
        desc={
          "We provide a wide range of services to help you grow your business. Our team of experts will help you reach your goals."
        }
      />
      <Process />
      <Stats stats={stats} />
      <Leadership tech={technologies} />
      <Approvals data={testimonials} />
    </div>
  );
}
