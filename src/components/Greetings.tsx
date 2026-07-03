import { Download, Activity } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Greeting() {
  const navigate = useNavigate();
  return (

    <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
      <div>
        <p className="text-sm text-gray-400 mb-1">
          Tuesday, June 30 · 9:41 AM
        </p>

        <h1 className="text-2xl font-bold text-gray-900 mb-1">
          Good morning, Shrishti
        </h1>

        <p className="text-sm text-gray-500">
          Your store is up{" "}
          <span className="text-[#0f9b0f] font-medium">
            12.4%
          </span>{" "}
          this week — let's keep the momentum going.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
        <button
        onClick={() => navigate("/export-report")}
         className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50"
>
          Export Report
        </button>

        <button 
        onClick={() => navigate("/create-campaign")}
       className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gray-900 text-white rounded-xl px-4 py-2.5 text-sm font-medium hover:bg-black"
>
          <Activity size={16} />
          Create Campaign
        </button>
      </div>
    </div>
  );
}