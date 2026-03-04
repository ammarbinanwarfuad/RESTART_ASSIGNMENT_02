import React from "react";

const FAQ = () => {
  const faqs = [
    {
      id: 1,
      question: "How do I create a new support ticket?",
      answer:
        "Click the 'New Ticket' button in the top navigation bar. Fill out the form with your issue details, priority level, and contact information. Our team will respond within 24 hours.",
    },
    {
      id: 2,
      question: "What are the different priority levels?",
      answer:
        "We have three priority levels: HIGH (critical issues affecting service), MEDIUM (important but not critical), and LOW (general inquiries or minor issues). High priority tickets are addressed within 4 hours.",
    },
    {
      id: 3,
      question: "How can I track my ticket status?",
      answer:
        "All your tickets are visible on the main dashboard. They will show as 'Open', 'In-Progress', or 'Resolved'. You'll receive email notifications when your ticket status changes.",
    },
    {
      id: 4,
      question: "What happens when my ticket is marked as In-Progress?",
      answer:
        "When a ticket moves to In-Progress, it means our support team is actively working on resolving your issue. You can see all in-progress tickets in the Task Status section on the right side of the dashboard.",
    },
    {
      id: 5,
      question: "How do I know when my issue is resolved?",
      answer:
        "Once your issue is resolved, the ticket will be moved to the 'Resolved' section. You'll receive a notification, and the resolved count in the banner will increase. You can view all resolved tickets in the Resolved Task list.",
    },
    {
      id: 6,
      question: "Can I reopen a resolved ticket?",
      answer:
        "Yes, if you're not satisfied with the resolution, you can contact our support team with your ticket ID, and we'll reopen it for further investigation.",
    },
    {
      id: 7,
      question: "What information should I include in my ticket?",
      answer:
        "Please provide a clear title, detailed description of the issue, steps to reproduce (if applicable), and any error messages you received. The more information you provide, the faster we can resolve your issue.",
    },
    {
      id: 8,
      question: "How long does it take to resolve a ticket?",
      answer:
        "Resolution time depends on priority: HIGH priority (4-24 hours), MEDIUM priority (1-3 business days), LOW priority (3-5 business days). Complex issues may take longer.",
    },
    {
      id: 9,
      question: "Can I update my ticket after submission?",
      answer:
        "Yes, you can add comments or additional information to your ticket at any time. Simply find your ticket in the dashboard and click to view details and add updates.",
    },
    {
      id: 10,
      question: "Do you provide support outside business hours?",
      answer:
        "HIGH priority tickets receive 24/7 support. For MEDIUM and LOW priority tickets, our support team is available Monday-Friday, 9 AM - 6 PM EST. Emergency support is available for critical system failures.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-white border-b border-gray-200 py-8 sm:py-12 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-base sm:text-lg text-gray-600">
            Find answers to common questions about our ticket support system
          </p>
        </div>
      </div>

      {/* FAQ Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="space-y-4 sm:space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={faq.id}
              className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sm:p-6 hover:shadow-md transition"
            >
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center font-bold text-sm sm:text-base">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-8 sm:mt-12 bg-purple-50 border border-purple-200 rounded-lg p-6 sm:p-8 text-center">
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
            Still have questions?
          </h3>
          <p className="text-sm sm:text-base text-gray-600 mb-4">
            Can't find the answer you're looking for? Please reach out to our
            support team.
          </p>
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-5 sm:px-6 py-2 sm:py-3 rounded-md text-sm sm:text-base font-medium transition">
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
