import React from "react";

const Download = () => {
  const apps = [
    {
      platform: "Windows",
      icon: "🪟",
      version: "2.5.0",
      size: "85 MB",
      requirements: "Windows 10 or higher",
      downloadLink: "#",
      features: ["Desktop notifications", "Offline mode", "Quick actions"],
    },
    {
      platform: "macOS",
      icon: "🍎",
      version: "2.5.0",
      size: "92 MB",
      requirements: "macOS 11.0 or higher",
      downloadLink: "#",
      features: ["Native performance", "Touch Bar support", "iCloud sync"],
    },
    {
      platform: "Linux",
      icon: "🐧",
      version: "2.5.0",
      size: "78 MB",
      requirements: "Ubuntu 20.04+, Fedora 34+",
      downloadLink: "#",
      features: [
        "Multiple distro support",
        "System tray integration",
        "CLI tools",
      ],
    },
    {
      platform: "Android",
      icon: "📱",
      version: "2.4.8",
      size: "45 MB",
      requirements: "Android 8.0 or higher",
      downloadLink: "#",
      features: ["Push notifications", "Biometric login", "Widget support"],
    },
    {
      platform: "iOS",
      icon: "📲",
      version: "2.4.8",
      size: "52 MB",
      requirements: "iOS 14.0 or higher",
      downloadLink: "#",
      features: ["Face ID/Touch ID", "Siri shortcuts", "Apple Watch app"],
    },
  ];

  const browserExtensions = [
    {
      browser: "Chrome",
      icon: "🔵",
      users: "50,000+",
      rating: "4.8/5",
    },
    {
      browser: "Firefox",
      icon: "🦊",
      users: "25,000+",
      rating: "4.7/5",
    },
    {
      browser: "Edge",
      icon: "🌊",
      users: "18,000+",
      rating: "4.9/5",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-10 sm:py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
            Download Our Apps
          </h1>
          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 opacity-90">
            Access your support tickets anywhere, anytime with our native
            applications
          </p>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 sm:px-6 py-2 sm:py-3">
              <div className="text-xl sm:text-2xl font-bold">500K+</div>
              <div className="text-xs sm:text-sm opacity-90">Downloads</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 sm:px-6 py-2 sm:py-3">
              <div className="text-xl sm:text-2xl font-bold">4.8★</div>
              <div className="text-xs sm:text-sm opacity-90">
                Average Rating
              </div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 sm:px-6 py-2 sm:py-3">
              <div className="text-xl sm:text-2xl font-bold">24/7</div>
              <div className="text-xs sm:text-sm opacity-90">Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop & Mobile Apps */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 sm:mb-3">
            Desktop & Mobile Applications
          </h2>
          <p className="text-sm sm:text-base text-gray-600">
            Choose your platform and start managing tickets efficiently
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {apps.map((app, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sm:p-6 hover:shadow-lg transition"
            >
              {/* Platform Icon & Name */}
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <div className="text-4xl sm:text-5xl">{app.icon}</div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                    {app.platform}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500">
                    Version {app.version}
                  </p>
                </div>
              </div>

              {/* Info */}
              <div className="space-y-2 mb-3 sm:mb-4">
                <div className="flex justify-between text-xs sm:text-sm">
                  <span className="text-gray-600">Size:</span>
                  <span className="font-medium text-gray-900">{app.size}</span>
                </div>
                <div className="text-xs sm:text-sm text-gray-600">
                  <strong>Requirements:</strong> {app.requirements}
                </div>
              </div>

              {/* Features */}
              <div className="mb-3 sm:mb-4">
                <p className="text-xs sm:text-sm font-semibold text-gray-700 mb-2">
                  Features:
                </p>
                <ul className="space-y-1">
                  {app.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="text-xs sm:text-sm text-gray-600 flex items-center gap-2"
                    >
                      <span className="text-green-500">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Download Button */}
              <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2.5 sm:py-3 rounded-md text-sm sm:text-base font-medium transition">
                Download for {app.platform}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Browser Extensions */}
      <div className="bg-white py-8 sm:py-12 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 sm:mb-3">
              Browser Extensions
            </h2>
            <p className="text-sm sm:text-base text-gray-600">
              Quick access to your tickets right from your browser
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            {browserExtensions.map((ext, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg border border-gray-200 p-5 sm:p-6 text-center hover:border-purple-300 transition"
              >
                <div className="text-5xl sm:text-6xl mb-2 sm:mb-3">
                  {ext.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                  {ext.browser}
                </h3>
                <div className="flex justify-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4">
                  <span>👥 {ext.users}</span>
                  <span>⭐ {ext.rating}</span>
                </div>
                <button className="w-full bg-gray-900 hover:bg-gray-800 text-white py-2 rounded-md text-xs sm:text-sm font-medium transition">
                  Add to {ext.browser}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Web App Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl border border-purple-200 p-6 sm:p-8 text-center">
          <div className="text-5xl sm:text-6xl mb-3 sm:mb-4">🌐</div>
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">
            Prefer Web Access?
          </h3>
          <p className="text-sm sm:text-base text-gray-600 mb-5 sm:mb-6 max-w-2xl mx-auto">
            No downloads required! Access our full-featured web application
            directly from your browser. Works on all devices with an internet
            connection.
          </p>
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-md text-sm sm:text-base font-medium transition">
            Open Web App
          </button>
        </div>
      </div>

      {/* System Requirements */}
      <div className="bg-gray-100 py-8 sm:py-12 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-5 sm:mb-6 text-center">
            System Requirements
          </h3>
          <div className="bg-white rounded-lg border border-gray-200 p-4 sm:p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
              <div>
                <h4 className="text-sm sm:text-base font-semibold text-gray-900 mb-2 sm:mb-3">
                  Minimum Requirements:
                </h4>
                <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-gray-600">
                  <li>• 2 GB RAM</li>
                  <li>• 200 MB free disk space</li>
                  <li>• Internet connection</li>
                  <li>• Screen resolution: 1024x768</li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm sm:text-base font-semibold text-gray-900 mb-2 sm:mb-3">
                  Recommended:
                </h4>
                <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-gray-600">
                  <li>• 4 GB RAM or higher</li>
                  <li>• 500 MB free disk space</li>
                  <li>• Broadband internet</li>
                  <li>• Screen resolution: 1920x1080</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Download;
