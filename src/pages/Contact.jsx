import React, { useState } from "react";
import { toast } from "react-toastify";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    toast.success(
      "Message sent successfully! We'll get back to you within 24 hours.",
    );
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: "📧",
      title: "Email Support",
      details: "support@ticketsystem.com",
      description: "Send us an email anytime",
    },
    {
      icon: "📞",
      title: "Phone Support",
      details: "+1 (555) 123-4567",
      description: "Mon-Fri, 9 AM - 6 PM EST",
    },
    {
      icon: "💬",
      title: "Live Chat",
      details: "Available 24/7",
      description: "Instant support anytime",
    },
    {
      icon: "📍",
      title: "Office Address",
      details: "123 Support Street",
      description: "New York, NY 10001, USA",
    },
  ];

  const socialLinks = [
    { name: "Twitter", icon: "🐦", link: "#" },
    { name: "Facebook", icon: "📘", link: "#" },
    { name: "LinkedIn", icon: "💼", link: "#" },
    { name: "Instagram", icon: "📷", link: "#" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-white border-b border-gray-200 py-8 sm:py-12 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            Contact Us
          </h1>
          <p className="text-base sm:text-lg text-gray-600">
            We're here to help! Reach out to us through any of these channels
          </p>
        </div>
      </div>

      {/* Contact Info Cards */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm border border-gray-200 p-5 sm:p-6 text-center hover:shadow-md transition"
            >
              <div className="text-3xl sm:text-4xl mb-2 sm:mb-3">
                {info.icon}
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1">
                {info.title}
              </h3>
              <p className="text-purple-600 font-medium mb-1 text-sm sm:text-base">
                {info.details}
              </p>
              <p className="text-xs sm:text-sm text-gray-500">
                {info.description}
              </p>
            </div>
          ))}
        </div>

        {/* Contact Form & Map Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
              Send us a Message
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mb-5 sm:mb-6">
              Fill out the form below and we'll get back to you as soon as
              possible
            </p>

            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs sm:text-sm font-medium text-gray-700 mb-1"
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="John Smith"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-xs sm:text-sm font-medium text-gray-700 mb-1"
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-xs sm:text-sm font-medium text-gray-700 mb-1"
                >
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="How can we help you?"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs sm:text-sm font-medium text-gray-700 mb-1"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                  placeholder="Tell us more about your inquiry..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2.5 sm:py-3 rounded-md text-sm sm:text-base font-medium transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Additional Info */}
          <div className="space-y-5 sm:space-y-6">
            {/* Office Hours */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 flex items-center gap-2">
                🕐 Office Hours
              </h3>
              <div className="space-y-2 sm:space-y-3">
                <div className="flex justify-between text-sm sm:text-base">
                  <span className="text-gray-600">Monday - Friday</span>
                  <span className="font-medium text-gray-900">
                    9:00 AM - 6:00 PM
                  </span>
                </div>
                <div className="flex justify-between text-sm sm:text-base">
                  <span className="text-gray-600">Saturday</span>
                  <span className="font-medium text-gray-900">
                    10:00 AM - 4:00 PM
                  </span>
                </div>
                <div className="flex justify-between text-sm sm:text-base">
                  <span className="text-gray-600">Sunday</span>
                  <span className="font-medium text-gray-900">Closed</span>
                </div>
                <div className="pt-2 sm:pt-3 border-t border-gray-200">
                  <p className="text-xs sm:text-sm text-purple-600 font-medium">
                    ⚡ 24/7 Emergency Support Available
                  </p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
                Follow Us
              </h3>
              <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                Stay connected with us on social media for updates and tips
              </p>
              <div className="grid grid-cols-2 gap-2 sm:gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    className="flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-3 bg-gray-50 hover:bg-purple-50 rounded-md transition border border-gray-200 hover:border-purple-300"
                  >
                    <span className="text-xl sm:text-2xl">{social.icon}</span>
                    <span className="text-sm sm:text-base font-medium text-gray-700">
                      {social.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
                📍 Our Location
              </h3>
              <div className="bg-gray-200 rounded-lg h-40 sm:h-48 flex items-center justify-center text-gray-500">
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl mb-2">🗺️</div>
                  <p className="text-xs sm:text-sm">Interactive Map</p>
                  <p className="text-[10px] sm:text-xs">
                    123 Support Street, NY 10001
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Quick Link */}
        <div className="mt-8 sm:mt-12 bg-purple-50 border border-purple-200 rounded-lg p-6 sm:p-8 text-center">
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
            Looking for Quick Answers?
          </h3>
          <p className="text-sm sm:text-base text-gray-600 mb-4">
            Check out our FAQ section for instant answers to common questions
          </p>
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-md text-sm sm:text-base font-medium transition">
            View FAQ
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
