import React, { useState } from "react";
import { toast } from "react-toastify";

const NewTicketModal = ({ isOpen, onClose, onAddTicket }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    customer: "",
    priority: "MEDIUM",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form
    if (
      !formData.title.trim() ||
      !formData.description.trim() ||
      !formData.customer.trim()
    ) {
      toast.error("Please fill in all required fields!");
      return;
    }

    // Create new ticket object
    const newTicket = {
      id: Date.now(), // Generate unique ID based on timestamp
      title: formData.title.trim(),
      description: formData.description.trim(),
      customer: formData.customer.trim(),
      priority: formData.priority,
      status: "Open",
      createdAt: new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      }),
    };

    // Call the parent function to add ticket
    onAddTicket(newTicket);

    // Reset form
    setFormData({
      title: "",
      description: "",
      customer: "",
      priority: "MEDIUM",
    });

    // Close modal
    onClose();

    toast.success("New ticket created successfully!");
  };

  // Don't render if not open
  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-lg shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
          {/* Modal Header */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-4 rounded-t-lg">
            <div className="flex justify-between items-center">
              <h2 className="text-xl sm:text-2xl font-bold">
                Create New Ticket
              </h2>
              <button
                onClick={onClose}
                className="text-white hover:text-gray-200 text-2xl font-bold transition"
              >
                ×
              </button>
            </div>
            <p className="text-sm opacity-90 mt-1">
              Fill in the details to create a new support ticket
            </p>
          </div>

          {/* Modal Body */}
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            {/* Title */}
            <div>
              <label
                htmlFor="title"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Ticket Title *
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
                placeholder="Brief description of the issue"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
              />
            </div>

            {/* Customer Name */}
            <div>
              <label
                htmlFor="customer"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Customer Name *
              </label>
              <input
                type="text"
                id="customer"
                name="customer"
                value={formData.customer}
                onChange={handleChange}
                required
                placeholder="Enter customer's full name"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
              />
            </div>

            {/* Priority */}
            <div>
              <label
                htmlFor="priority"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Priority Level *
              </label>
              <select
                id="priority"
                name="priority"
                value={formData.priority}
                onChange={handleChange}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent transition bg-white"
              >
                <option value="LOW">LOW - General inquiries</option>
                <option value="MEDIUM">
                  MEDIUM - Important but not urgent
                </option>
                <option value="HIGH">HIGH - Critical issue</option>
              </select>
            </div>

            {/* Description */}
            <div>
              <label
                htmlFor="description"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Description *
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                rows="6"
                placeholder="Provide detailed information about the issue..."
                className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent transition resize-none"
              ></textarea>
            </div>

            {/* Form Actions */}
            <div className="flex flex-col-reverse sm:flex-row gap-3 pt-4">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-md font-medium hover:bg-gray-50 transition"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-md font-medium transition"
              >
                Create Ticket
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default NewTicketModal;
