import Banner from "./components/Banner";
import NavBar from "./components/NavBar";
import { Hero } from "./sections";
import Categories from "./sections/Categories";

export default function App() {
  return (
    <>
      <Banner />
      <NavBar />
      <Hero />
      <Categories />
    </>
  );
}
