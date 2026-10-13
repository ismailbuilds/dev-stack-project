import { FaStar } from "react-icons/fa";
import type { TechType } from "../type";

interface TechCardProps {
  technology: TechType;
}

const TechCard = ({ technology }: TechCardProps) => {
    const { id, name, category, description, icon, rating, difficulty, badge} = technology
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
        className="w-full rounded-md bg-gray-950 px-3 py-2 text-xs 
                   font-medium text-white transition hover:bg-gray-800"
      >
        Add to Stack
      </button>

    </article>
  );
};

export default TechCard;