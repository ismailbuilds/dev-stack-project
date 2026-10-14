import { use, useState } from "react";
import type { TechType } from "../type";
import TechCard from "./TechCard";
import { FiX } from "react-icons/fi";
import { toast } from "react-toastify";

export interface TechnologiesProps {
  techPromise: Promise<TechType[]>;
}

const Technologies = ({ techPromise }: TechnologiesProps) => {
  const technologies = use(techPromise);

  const [stack, setStack] = useState<TechType[]>([])

  // Add to Stack Button
  const handleAddToStack =(technology: TechType) =>{
    const alreadyAdded = stack.map((item)=> item.id)
    if(alreadyAdded.includes(technology.id)){
      toast.error(`${technology.name} is already in your stack`, {
        position: "top-center",
        autoClose: 5000,
        theme: "light",
      })
      return;
    }

    setStack([...stack, technology])

      toast.success(`${technology.name} added to your stack`, {
      position: "top-center",
      autoClose: 5000,
      theme: "light",
      })
    }

// Remone One Technology from stack
  const handleRemoveOne = (id: string) => {
  const findStack = stack.find((item) => item.id === id);

  if (!findStack) return;

  const remainingStack = stack.filter((item) => item.id !== id);

  setStack(remainingStack);

  toast.info(`${findStack.name} removed from your stack`, {
    position: "top-center",
    autoClose: 5000,
    theme: "light",
  });
};

  // Remone All Technology from stack
    const handleRemoveAll = ()=> {
      setStack([])
      toast.info("All technologies removed from your stack", { 
      position: "top-center",
      autoClose: 5000,
      theme: "light",
    })
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

            {/* Sidebar: Your Stack */}
    <aside className="col-span-1 flex  w-full flex-col rounded-xl border 
                    border-gray-200 bg-white p-4 shadow-sm">
            
      {/* Header */}
      <h3 className="text-base font-bold text-gray-900">
        Your Stack
      </h3>
            
      <p className="mt-1 text-xs text-gray-400">
        {stack.length} Technologies Selected
      </p>
            
      {/* Selected Technologies */}
      <div className="mt-4 space-y-1">
            
        {stack.length === 0 ? (
          <div className="rounded-lg border border-dashed border-gray-300 p-4 text-center text-xs text-gray-400">
            Your stack is empty.
          </div>
        ) : (
          stack.map((technology) => (
            <div
              key={technology.id}
              className="flex items-center gap-3 rounded-lg border border-gray-200 p-2"
            >
              {/* Technology Icon */}
              <img
                src={technology.icon}
                alt={technology.name}
                className="h-8 w-8 object-contain"
              />
    
              {/* Technology Details */}
              <div className="flex-1">
                <h3 className="text-xs font-semibold text-gray-900">
                  {technology.name}
                </h3>
          
                <p className="text-[9px] text-gray-400">
                  {technology.category}
                </p>
              </div>
          
              {/* Remove Button */}
              <button
                onClick={()=> handleRemoveOne(technology.id)}
                className="text-xl text-gray-400 hover:text-red-500"
                aria-label={`Remove ${technology.name}`}
              >
                <FiX />
              </button>
            </div>
          ))
          )}
      </div>
      
      {/* Remove All Button */}
      {
        stack.length > 0 && (
          <button
          onClick={handleRemoveAll}
          className="mt-6 w-full rounded-lg border border-red-300 py-2 text-sm 
                    font-semibold text-red-500 hover:bg-red-50"
          >Remove All
          </button>
        )
      }
    </aside> 
      </div>
    </section>
  );
};

export default Technologies;