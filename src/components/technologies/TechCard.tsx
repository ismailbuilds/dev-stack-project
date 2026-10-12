import { use } from "react"
import type { TechType } from "../type"

export interface TechCardProps {
  technology: TechType
}

export default function TechCard({ technology }: TechCardProps) {
   
    return (
        <div>
           <h2>Name: {technology.name}</h2>
        </div>
    )
}