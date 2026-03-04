import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import NewTicketModal from "./components/NewTicketModal";
import Home from "./pages/Home";
import FAQ from "./pages/FAQ";
import Changelog from "./pages/Changelog";
import Blog from "./pages/Blog";
import Download from "./pages/Download";
import Contact from "./pages/Contact";
import ticketsData from "./data/tickets.json";

function App() {
  // State management
  const [tickets, setTickets] = useState([]);
  const [inProgressTasks, setInProgressTasks] = useState([]);
  const [resolvedTasks, setResolvedTasks] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Initialize tickets from JSON - Load from localStorage first, fallback to JSON data
  useEffect(() => {
    const savedData = localStorage.getItem("ticketSystemData");
    if (savedData) {
      try {
        const {
          tickets: savedTickets,
          inProgressTasks: savedInProgress,
          resolvedTasks: savedResolved,
        } = JSON.parse(savedData);
        setTickets(savedTickets || ticketsData);
        setInProgressTasks(savedInProgress || []);
        setResolvedTasks(savedResolved || []);
      } catch (error) {
        // If parsing fails, use default data
        setTickets(ticketsData);
      }
    } else {
      setTickets(ticketsData);
    }
  }, []);

  // Save state to localStorage whenever it changes
  useEffect(() => {
    if (
      tickets.length > 0 ||
      inProgressTasks.length > 0 ||
      resolvedTasks.length > 0
    ) {
      const dataToSave = {
        tickets,
        inProgressTasks,
        resolvedTasks,
      };
      localStorage.setItem("ticketSystemData", JSON.stringify(dataToSave));
    }
  }, [tickets, inProgressTasks, resolvedTasks]);

  // Add ticket to in-progress
  const handleAddToProgress = (ticket) => {
    // Check if already in progress
    if (inProgressTasks.find((t) => t.id === ticket.id)) {
      toast.info("This ticket is already in progress!");
      return;
    }

    // Update ticket status
    const updatedTicket = { ...ticket, status: "In-Progress" };

    // Add to in-progress list
    setInProgressTasks([...inProgressTasks, updatedTicket]);

    // Update the ticket in the main list
    setTickets(tickets.map((t) => (t.id === ticket.id ? updatedTicket : t)));

    toast.success(`Ticket "${ticket.title}" added to In-Progress!`);
  };

  // Complete a task (move from in-progress to resolved)
  const handleCompleteTask = (task) => {
    // Remove from in-progress
    setInProgressTasks(inProgressTasks.filter((t) => t.id !== task.id));

    // Add to resolved
    const resolvedTask = { ...task, status: "Resolved" };
    setResolvedTasks([...resolvedTasks, resolvedTask]);

    // Remove from main tickets list
    setTickets(tickets.filter((t) => t.id !== task.id));

    toast.success(`Ticket "${task.title}" has been resolved!`);
  };

  // Handle new ticket button - Open modal
  const handleNewTicket = () => {
    setIsModalOpen(true);
  };

  // Add new ticket to the list
  const handleAddTicket = (newTicket) => {
    setTickets([newTicket, ...tickets]); // Add to beginning of array
  };

  return (
    <Router>
      <div className="min-h-screen bg-white">
        {/* Toast Container */}
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />

        {/* Navbar */}
        <Navbar onNewTicket={handleNewTicket} />

        {/* New Ticket Modal */}
        <NewTicketModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onAddTicket={handleAddTicket}
        />

        {/* Routes */}
        <Routes>
          <Route
            path="/"
            element={
              <Home
                tickets={tickets}
                inProgressTasks={inProgressTasks}
                resolvedTasks={resolvedTasks}
                onAddToProgress={handleAddToProgress}
                onCompleteTask={handleCompleteTask}
              />
            }
          />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/changelog" element={<Changelog />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/download" element={<Download />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
