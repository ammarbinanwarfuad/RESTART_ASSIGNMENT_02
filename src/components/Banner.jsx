import React from "react";

const Banner = ({ inProgressCount, resolvedCount }) => {
  return (
    <div className="bg-white py-4 sm:py-6 md:py-8 px-4 sm:px-6 border-b border-gray-200">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {/* In-Progress Card */}
          <div
            className="relative rounded-lg p-6 sm:p-8 md:p-10 text-white overflow-hidden shadow-lg"
            style={{
              background: "linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)",
            }}
          >
            <div className="relative z-20">
              <h3 className="text-base sm:text-lg md:text-xl font-medium mb-2 sm:mb-3 opacity-90">
                In-Progress
              </h3>
              <p className="text-4xl sm:text-5xl md:text-6xl font-bold">
                {inProgressCount}
              </p>
            </div>
            {/* Decorative Pattern */}
            <div className="absolute top-2 right-2 sm:top-4 sm:right-4 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 opacity-20 z-10">
              <img
                src="/vector1.svg"
                alt="decoration"
                className="w-full h-full object-contain"
              />
            </div>
            {/* Wave overlay */}
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 50 Q 25 25, 50 50 T 100 50' stroke='white' stroke-width='2' fill='none'/%3E%3C/svg%3E")`,
                backgroundSize: "100px 100px",
                backgroundRepeat: "repeat",
              }}
            ></div>
          </div>

          {/* Resolved Card */}
          <div
            className="relative rounded-lg p-6 sm:p-8 md:p-10 text-white overflow-hidden shadow-lg"
            style={{
              background: "linear-gradient(135deg, #10B981 0%, #059669 100%)",
            }}
          >
            <div className="relative z-20">
              <h3 className="text-base sm:text-lg md:text-xl font-medium mb-2 sm:mb-3 opacity-90">
                Resolved
              </h3>
              <p className="text-4xl sm:text-5xl md:text-6xl font-bold">
                {resolvedCount}
              </p>
            </div>
            {/* Decorative Pattern */}
            <div className="absolute top-4 right-4 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 opacity-20 z-10">
              <img
                src="/vector2.svg"
                alt="decoration"
                className="w-full h-full object-contain"
              />
            </div>
            {/* Wave overlay */}
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 50 Q 25 25, 50 50 T 100 50' stroke='white' stroke-width='2' fill='none'/%3E%3C/svg%3E")`,
                backgroundSize: "100px 100px",
                backgroundRepeat: "repeat",
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
