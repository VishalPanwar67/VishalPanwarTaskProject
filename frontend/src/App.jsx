import { useEffect, useMemo, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css"; // Global styles

// Import from your new folders
import Home from "./page/Home";
import Admin from "./admin/Admin";
import { emptyProject, emptyClient, emptyContact } from "./util/initialStates";

function App() {
  const apiBase = useMemo(
    () => import.meta.env.VITE_API_BASE_URL || "http://localhost:3000",
    []
  );

  const [projects, setProjects] = useState([]);
  const [clients, setClients] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [subscriptions, setSubscriptions] = useState([]);

  const [projectForm, setProjectForm] = useState(emptyProject);
  const [clientForm, setClientForm] = useState(emptyClient);
  const [contactForm, setContactForm] = useState(emptyContact);
  const [newsletterEmail, setNewsletterEmail] = useState("");

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // --- API Helpers ---
  const fetchSection = async (endpoint, setter) => {
    try {
      const res = await fetch(`${apiBase}/api/${endpoint}`);
      const data = await res.json();
      setter(data);
    } catch (err) {
      console.error(`Failed to fetch ${endpoint}`, err);
    }
  };

  const submitJson = async (path, payload, onSuccess) => {
    setLoading(true);
    setMessage("");
    try {
      const res = await fetch(`${apiBase}/api/${path}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Request failed");
      onSuccess?.(data);
      setMessage("Saved successfully");
    } catch (err) {
      setMessage(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSection("projects", setProjects);
    fetchSection("clients", setClients);
    fetchSection("contacts", setContacts);
    fetchSection("subscriptions", setSubscriptions);
  }, [apiBase]);

  // --- Handlers ---
  const handleProjectSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    try {
      const res = await fetch(`${apiBase}/api/projects`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(projectForm),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Failed to save project");
      await fetchSection("projects", setProjects);
      setProjectForm(emptyProject);
      setMessage("Project saved successfully!");
      setTimeout(() => setMessage(""), 3000);
    } catch (err) {
      console.error("Error saving project:", err);
      setMessage(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleClientSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    try {
      const res = await fetch(`${apiBase}/api/clients`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(clientForm),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Failed to save client");
      await fetchSection("clients", setClients);
      setClientForm(emptyClient);
      setMessage("Client saved successfully!");
      setTimeout(() => setMessage(""), 3000);
    } catch (err) {
      console.error("Error saving client:", err);
      setMessage(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    submitJson("contacts", contactForm, (created) => {
      setContacts((prev) => [created, ...prev]);
      setContactForm(emptyContact);
    });
  };

  const handleNewsletter = (e) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    submitJson("subscriptions", { email: newsletterEmail }, (created) => {
      setSubscriptions((prev) => [created, ...prev]);
      setNewsletterEmail("");
    });
  };

  // --- Render ---
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              projects={projects}
              clients={clients}
              contactForm={contactForm}
              newsletterEmail={newsletterEmail}
              loading={loading}
              message={message}
              setContactForm={setContactForm}
              setNewsletterEmail={setNewsletterEmail}
              handleContactSubmit={handleContactSubmit}
              handleNewsletter={handleNewsletter}
            />
          }
        />
        <Route
          path="/admin"
          element={
            <Admin
              projects={projects}
              clients={clients}
              contacts={contacts}
              subscriptions={subscriptions}
              projectForm={projectForm}
              clientForm={clientForm}
              loading={loading}
              message={message}
              setProjectForm={setProjectForm}
              setClientForm={setClientForm}
              handleProjectSubmit={handleProjectSubmit}
              handleClientSubmit={handleClientSubmit}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
