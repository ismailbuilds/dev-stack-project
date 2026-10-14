export default function TechnologySkeleton() {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 6 }).map((_, index) => (
        <div
          key={index}
          className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm"
        >
          <div className="mb-5 flex items-center gap-3">
            <div className="h-12 w-12 animate-pulse rounded-xl bg-gradient-to-br from-orange-100 via-pink-100 to-purple-100"></div>

            <div className="flex-1">
              <div className="mb-2 h-4 w-2/3 animate-pulse rounded bg-gradient-to-r from-orange-100 to-purple-100"></div>

              <div className="h-3 w-1/3 animate-pulse rounded bg-gray-100"></div>
            </div>
          </div>

          <div className="mb-2 h-3 w-full animate-pulse rounded bg-gray-100"></div>
          <div className="mb-5 h-3 w-4/5 animate-pulse rounded bg-gray-100"></div>

          <div className="mb-4 h-6 w-24 animate-pulse rounded-full bg-purple-100"></div>

          <div className="h-9 w-full animate-pulse rounded-md bg-gradient-to-r from-orange-200 via-pink-200 to-purple-200"></div>
        </div>
      ))}
    </div>
  );
}