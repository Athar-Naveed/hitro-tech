import { partners, slides } from "@/data/constants";
import Carousel from "../carousel";
import Partners from "../partners";
import Services from "./Services";

export default function Landing() {
  return (
    <div>
      <Carousel slider={slides} />
      <Partners data={partners} />
      <Services />
    </div>
  );
}
