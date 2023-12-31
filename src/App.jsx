import Nav from "./components/Nav";
import {
  CustomerReviews,
  Hero,
  PopularProduct,
  Service,
  SpecialOffer,
  SuperQuality,
  Footer,
  Subscribe,
} from "./section";

const App = () => (
  <main className="relative">
    <section className="xl:padding-l wide:padding-r padding-b ">
      <Hero />
    </section>
    <section className="padding">
      <PopularProduct />
    </section>
    <section className="padding">
      <SuperQuality />
    </section>
    <section className="padding-x py-10">
      <Service />
    </section>
    <section className="padding">
      <SpecialOffer />
    </section>
    <section className="bg-pale-blue padding">
      <CustomerReviews />
    </section>
    <section className="padding-x sm:py-32 py-16 w-full">
      <Subscribe />
    </section>
  </main>
);

export default App;
