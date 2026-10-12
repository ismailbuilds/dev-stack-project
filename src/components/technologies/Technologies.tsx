import { use } from "react";
import type { TechType } from "../type";
import TechCard from "./TechCard";

export interface TechnologiesProps {
   techPromise: Promise<TechType[]>
}

const Technologies = ({ techPromise }: TechnologiesProps) => {
    const technologies = use(techPromise)
    return (
        <div className="container mx-auto">
            {/* Main LayOut Titile and description */}
            <div className="mb-10">
                <h2 className="text-4xl font-extrabold mb-2">Explore the 
                <span className=" bg-gradient-to-r from-pink-500 via-pink-500 to-fuchsia-600 
                      bg-clip-text text-transparent"> Technologies</span>
            </h2>
            <p className="text-[16px]">Pick one technology per category to build your ideal stack. </p>
            </div>
            <div>
                {
                    technologies.map((technology)=> (
                        <TechCard key={technology.id} technology={technology} />
                    ))
                }
            </div>
            
        </div>
    )
}

export default Technologies;