import Header from "./header";
import Footer from "./footer";
import Carousel from "./carousel";
import Listcard from "./list-card";

export default function Layout() {
  return (
    <div>
      <Header />
      <Carousel />
      <Listcard />
      <Footer />
    </div>
  );
}
