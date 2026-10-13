import { use } from "react";
import type { TechType } from "../type";
import TechCard from "./TechCard";
import { FiX } from "react-icons/fi";

export interface TechnologiesProps {
  techPromise: Promise<TechType[]>;
}

const Technologies = ({ techPromise }: TechnologiesProps) => {
  const technologies = use(techPromise);

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
            />
          ))}
        </div>

        {/* Sidebar: 1 Column */}
        <aside className="w-full rounded-xl border border-gray-200 bg-white p-4 shadow-sm lg:col-span-1">
          <h3 className="text-base font-bold text-gray-900">
            Your Stack
          </h3>

          <p className="mt-1 text-xs text-gray-500">
            2 Technology Selected
          </p>

          {/* Selected Technologies */}
          <div className="mt-3 space-y-2">

            {/* Selected Technology */}
            <div className="flex items-center justify-between rounded-lg border border-gray-200 p-3">
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold">
                  Svelte
                </span>
              </div>

              <button
                className="text-lg text-gray-400 transition hover:text-red-500">
                <FiX />
              </button>
            </div>

            <div className="flex items-center justify-between rounded-lg border border-gray-200 p-3">
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold">
                  Redis
                </span>
              </div>

              <button
                type="button"
                aria-label="Remove Redis"
                className="text-lg text-gray-400 transition hover:text-red-500"
              >
               <FiX />
              </button>
            </div>

          </div>

          {/* Remove All Button */}
          <button
            type="button"
            className="mt-5 w-full rounded-md border border-red-200 py-2 text-sm font-medium
                     text-red-500 transition hover:bg-red-50"
          >
            Remove All
          </button>
        </aside>

      </div>
    </section>
  );
};

export default Technologies;