import React from "react";

const Changelog = () => {
  const changes = [
    {
      version: "2.5.0",
      date: "March 1, 2026",
      type: "Major Update",
      items: [
        "Added 30 new ticket templates for common issues",
        "Improved in-progress tracking with real-time updates",
        "Enhanced toast notification system with custom messages",
        "Added localStorage persistence for better data management",
        "Optimized mobile responsive design for tablets",
      ],
    },
    {
      version: "2.4.2",
      date: "February 15, 2026",
      type: "Bug Fixes",
      items: [
        "Fixed issue where resolved tickets were not saving properly",
        "Corrected priority badge colors for better visibility",
        "Resolved mobile menu navigation bugs",
        "Fixed date formatting inconsistencies",
        "Improved error handling for failed ticket operations",
      ],
    },
    {
      version: "2.4.0",
      date: "February 1, 2026",
      type: "Feature Release",
      items: [
        "Introduced Task Status sidebar for better workflow management",
        "Added Resolved Task list to track completed tickets",
        "Implemented automatic counter updates in banner",
        "Created new gradient designs for status cards",
        "Added vector graphics for enhanced visual appeal",
      ],
    },
    {
      version: "2.3.5",
      date: "January 20, 2026",
      type: "Performance",
      items: [
        "Reduced initial page load time by 40%",
        "Optimized React component rendering",
        "Improved localStorage read/write operations",
        "Enhanced CSS bundle size with Tailwind optimization",
        "Added lazy loading for non-critical components",
      ],
    },
    {
      version: "2.3.0",
      date: "January 5, 2026",
      type: "Feature Release",
      items: [
        "Added React-Toastify for better user notifications",
        "Implemented ticket filtering by priority",
        "Created new ticket card layout with better information hierarchy",
        "Added customer name display on tickets",
        "Improved ticket description text wrapping",
      ],
    },
    {
      version: "2.2.0",
      date: "December 15, 2025",
      type: "Major Update",
      items: [
        "Redesigned navigation bar with sticky positioning",
        "Added new footer with company information",
        "Implemented responsive grid layout for tickets",
        "Created priority badge system (High/Medium/Low)",
        "Added status indicators with color coding",
      ],
    },
    {
      version: "2.1.5",
      date: "December 1, 2025",
      type: "Bug Fixes",
      items: [
        "Fixed ticket duplicate creation issue",
        "Corrected status update timing problems",
        "Resolved mobile touch target sizing",
        "Fixed navigation menu overflow on small screens",
        "Improved accessibility for screen readers",
      ],
    },
    {
      version: "2.1.0",
      date: "November 20, 2025",
      type: "Feature Release",
      items: [
        "Launched initial ticket management system",
        "Implemented basic CRUD operations for tickets",
        "Added simple dashboard with ticket listing",
        "Created basic status tracking (Open/Closed)",
        "Introduced first version of the banner section",
      ],
    },
  ];

  const getTypeColor = (type) => {
    switch (type) {
      case "Major Update":
        return "bg-purple-100 text-purple-700 border-purple-200";
      case "Feature Release":
        return "bg-blue-100 text-blue-700 border-blue-200";
      case "Bug Fixes":
        return "bg-red-100 text-red-700 border-red-200";
      case "Performance":
        return "bg-green-100 text-green-700 border-green-200";
      default:
        return "bg-gray-100 text-gray-700 border-gray-200";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-white border-b border-gray-200 py-8 sm:py-12 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            Changelog
          </h1>
          <p className="text-base sm:text-lg text-gray-600">
            Track all updates, improvements, and bug fixes to our ticket system
          </p>
        </div>
      </div>

      {/* Changelog Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="space-y-6 sm:space-y-8">
          {changes.map((change, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
            >
              {/* Version Header */}
              <div className="bg-gray-50 border-b border-gray-200 px-4 sm:px-6 py-3 sm:py-4">
                <div className="flex items-center justify-between flex-wrap gap-2 sm:gap-3">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                      v{change.version}
                    </h2>
                    <span
                      className={`px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-medium border ${getTypeColor(change.type)}`}
                    >
                      {change.type}
                    </span>
                  </div>
                  <span className="text-xs sm:text-sm text-gray-600">
                    📅 {change.date}
                  </span>
                </div>
              </div>

              {/* Changes List */}
              <div className="px-4 sm:px-6 py-4 sm:py-5">
                <ul className="space-y-2 sm:space-y-3">
                  {change.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="flex items-start gap-2 sm:gap-3"
                    >
                      <span className="text-green-500 mt-0.5 sm:mt-1">✓</span>
                      <span className="text-sm sm:text-base text-gray-700 flex-1">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-8 sm:mt-12 bg-blue-50 border border-blue-200 rounded-lg p-5 sm:p-6 text-center">
          <p className="text-sm sm:text-base text-gray-700">
            🔔 <strong>Stay Updated:</strong> Subscribe to our newsletter to
            receive notifications about new releases and features.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Changelog;
