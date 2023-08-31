import Banner from "./components/Banner";
import NavBar from "./components/NavBar";
import { Hero } from "./sections";

export default function App() {
  return (
    <>
      <Banner />
      <NavBar />
      <Hero />
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </>
  );
}
