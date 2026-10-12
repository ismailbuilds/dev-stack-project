import { Suspense, useState } from "react";
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Nav from "./components/Nav"
import type { TechType } from "./components/type";
import Technologies from "./components/technologies/Technologies";

function App() {
  const TechFetch = async (): Promise<TechType[]> => {
    const res = await fetch('/data.json');
    const data = await res.json();
    return data;
  }
  const [techPromise] = useState(() => TechFetch())
  return (
    <>
     <Nav />
     <Hero />
     <Suspense fallback={<p>Loading...</p>}>
        <Technologies techPromise={techPromise}/>
     </Suspense>
     <Footer />
    </>
  )
}

export default App
