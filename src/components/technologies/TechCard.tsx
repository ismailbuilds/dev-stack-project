import { FaStar } from "react-icons/fa";
import type { TechType } from "../type";
import { FiCheck } from "react-icons/fi";

interface TechCardProps {
  technology: TechType;
  stack: TechType[];
  handleAddToStack: (technology:TechType) => void
}

const TechCard = ({ technology, handleAddToStack, stack }: TechCardProps) => {
    const { name, category, description, rating, difficulty } = technology

    const Added = stack.some((item)=> item.id === technology.id)
    
  return (
    <article className="flex h-full flex-col rounded-xl border
     border-gray-200 bg-white p-3 shadow-sm transition duration-200 
     hover:-translate-y-1 hover:shadow-md">

      {/* Icon and Badge */}
      <div className="mb-3 flex items-start justify-between">

        <img
          src={technology.icon}
          alt={`${technology.name} icon`}
          className="h-8 w-8 object-contain"
        />

        <span className="rounded-full bg-blue-50 px-2 py-1 text-[10px] font-medium text-blue-500">
          {technology.badge}
        </span>

      </div>

      {/* Technology Name */}
      <h3 className="mb-1 text-base font-bold text-gray-900">
        {name}
      </h3>

      {/* Description */}
      <p className="mb-4 flex-grow text-xs leading-5 text-gray-500">
        {description}
      </p>

      {/* Category, Difficulty and Rating */}
      <div className="mb-3 flex items-center justify-between gap-1 text-[10px]">

        <span className="rounded bg-gray-100 px-2 py-1 text-gray-600">
          {category}
        </span>

        <span className="text-gray-500">
          {difficulty}
        </span>

        <span className=" flex items-center text-sm font-semibold text-yellow-500">
          <FaStar /> {rating}
        </span>

      </div>

      {/* Add to Stack Button */}
      <button
        onClick={() => handleAddToStack(technology)}
        disabled={Added}
        className="w-full flex rounded-md items-center justify-center bg-gray-950 cursor-pointer
                   px-3 py-2 text-xs gap-2 disabled:cursor-not-allowed  disabled:bg-green-600
                   font-medium text-white transition hover:bg-gray-900"
        
      >
        {Added ? (
          <>
          
            <FiCheck />
            Added to Stack
          </>
        ) : (
          "Add to Stack"
        )}
      </button>

    </article>
  );
};

export default TechCard;

// className='mt-5 flex min-h-10 items-center justify-center 
// gap-2 rounded-lg bg-ink text-xs font-bold text-white transition 
// hover:bg-ink-hover disabled:cursor-not-allowed 
// disabled:bg-accent-soft disabled:text-accent-dark'