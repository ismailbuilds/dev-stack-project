import { use, useState } from "react";
import type { TechType } from "../type";
import TechCard from "./TechCard";
import { FiX } from "react-icons/fi";
import { GrTechnology } from "react-icons/gr";

export interface TechnologiesProps {
  techPromise: Promise<TechType[]>;
}

const Technologies = ({ techPromise }: TechnologiesProps) => {
  const technologies = use(techPromise);

  const [stack, setStack] = useState<TechType[]>([])

  const handleAddToStack =(technology: TechType) =>{
    setStack([...stack, technology])
  }

  return (
    <section className="container mx-auto px-4 py-8">

      {/* Main Layout Title and Description */}
      <div className="mb-8">
        <h2 className="mb-2 text-4xl font-extrabold">
          Explore the{" "}
          <span className="bg-gradient-to-r from-pink-500 via-pink-500 to-fuchsia-600 
                           bg-clip-text text-transparent">
            Technologies
          </span>
        </h2>

        <p className="text-sm text-gray-500">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      {/* Technology Cards and Sidebar */}
      <div className="grid grid-cols-4 items-start gap-5 ">

        {/* Technology Cards: 3 Columns */}
        <div className="grid gap-4 col-span-3 grid-cols-3">
          {technologies.map((technology: TechType) => (
            <TechCard
              key={technology.id}
              technology={technology}
              handleAddToStack={handleAddToStack}
            />
          ))}
        </div>

        {/* Sidebar: 1 Column */}
        <aside className="col-span-1 w-full rounded-xl border border-gray-200 bg-white p-4 shadow-sm ">
          <h3 className="text-base font-bold text-gray-900">
            Your Stack
          </h3>

          <p className="mt-1 text-xs text-gray-500">
             {stack.length} technologies selected
          </p>

          {/* Selected Technologies */}
          <div className="mt-3 space-y-2">

            {/* Selected Technology */}
            {stack.length === 0 ? (<div 
                  className="mt-4 rounded-lg border border-dashed border-gray-300 p-6 
                            text-center text-xs text-gray-400">  
                            Your stack is empty.
                </div> ) : (
                  <div className="mt-4 space-y-2">
                    {stack.map((technology) =>(
                      <div key={technology.id}>
                        {/* Selected Technology */}
                        <div className="flex items-center gap-3">
                          <img 
                          src={technology.icon} 
                          alt={technology.name}
                          className="h-8 w-8"
                           />
                          <div>
                          <h3 className="text-sm font-semibold">
                            {technology.name}
                            </h3>
                          <p className="text-[10px] text-gray-500">
                            {technology.category}
                            </p>
                      </div>
                        </div>

                        </div>
                       
                    ))}
                  </div>
                )
            }

          </div>

         
        </aside>

      </div>
    </section>
  );
};

export default Technologies;