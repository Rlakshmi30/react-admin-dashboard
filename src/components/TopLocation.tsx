import { Globe, MoreHorizontal } from "lucide-react";
import { TopLocation } from "../data";

export default function TopLocations() {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-6 w-[380px]">


      <div className="flex items-start justify-between mb-4">

        <h2 className="flex items-center gap-2 text-base font-semibold text-gray-900">

          <Globe size={18} />

          Top Locations

        </h2>

        <MoreHorizontal
          size={18}
          className="text-gray-400"
        />

      </div>


      <div className="flex flex-col gap-4">

        {TopLocation.map((loc) => (

          <div key={loc.country}>

            <div className="flex items-center justify-between text-sm mb-1.5">

              <span className="flex items-center gap-2 text-gray-700">

                <span>{loc.flag}</span>

                {loc.country}

              </span>

              <span className="text-gray-500">

                {loc.count}

              </span>

            </div>

            <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">

              <div
                className="h-full bg-indigo-500 rounded-full"
                style={{
                  width: `${loc.percent}%`,
                }}
              />

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}