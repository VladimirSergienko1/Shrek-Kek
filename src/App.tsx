import "./App.css";
import Header from "./components/Header.tsx";
import Hero from "./components/Hero.tsx";

function App() {
  return (
    <>
      <Header />
      <main className="bg-[#030014]">
        <Hero />
      </main>
    </>
  );
}

export default App;
