import React from "react";
import { Link } from "react-router-dom";
import "./Admin.css"; 

const Admin = ({
  projects,
  clients,
  contacts,
  subscriptions,
  projectForm,
  clientForm,
  loading,
  message,
  setProjectForm,
  setClientForm,
  handleProjectSubmit,
  handleClientSubmit,
}) => {
  return (
    <div className="page">
      <header className="hero">
        <div className="hero-content" style={{ padding: "2rem" }}>
          <p className="eyebrow">Admin</p>
          <h1>Manage site content</h1>
          <p className="subhead">
            Create projects and client stories. Review contact submissions and
            newsletter signups.
          </p>
          <div className="cta-row">
            <Link className="button ghost" to="/">
              Back to landing
            </Link>
          </div>
        </div>
        <div
          className="hero-card"
          style={{ padding: "2rem", background: "#f1f5f9", margin: "0 2rem" }}
        >
          <p className="eyebrow">Overview</p>
          <div className="stat-row">
            <div>
              <p className="stat">{projects.length}</p>
              <p className="stat-label">Projects</p>
            </div>
            <div>
              <p className="stat">{clients.length}</p>
              <p className="stat-label">Clients</p>
            </div>
            <div>
              <p className="stat">{contacts.length}</p>
              <p className="stat-label">Contacts</p>
            </div>
          </div>
          <p className="muted">Subscribers: {subscriptions.length}</p>
          {message && <p className="muted">{message}</p>}
        </div>
      </header>

      <main>
        <section className="section">
          <div className="admin-grid">
            {/* Add Project Panel */}
            <div className="panel">
              <h3>Add project</h3>
              <form className="form" onSubmit={handleProjectSubmit}>
                <label>
                  Name
                  <input
                    required
                    value={projectForm.name}
                    onChange={(e) =>
                      setProjectForm({ ...projectForm, name: e.target.value })
                    }
                    placeholder="Project name"
                  />
                </label>
                <label>
                  Description
                  <textarea
                    required
                    value={projectForm.description}
                    onChange={(e) =>
                      setProjectForm({
                        ...projectForm,
                        description: e.target.value,
                      })
                    }
                    placeholder="Short summary"
                  />
                </label>
                <label>
                  Location
                  <input
                    value={projectForm.location}
                    onChange={(e) =>
                      setProjectForm({
                        ...projectForm,
                        location: e.target.value,
                      })
                    }
                    placeholder="City, State"
                  />
                </label>
                <label>
                  Image URL
                  <input
                    required
                    value={projectForm.image}
                    onChange={(e) =>
                      setProjectForm({ ...projectForm, image: e.target.value })
                    }
                    placeholder="https://..."
                  />
                </label>
                <button
                  className="button primary"
                  type="submit"
                  disabled={loading}
                >
                  {loading ? "Saving..." : "Save project"}
                </button>
              </form>
            </div>

            {/* Add Client Panel */}
            <div className="panel">
              <h3>Add client</h3>
              <form className="form" onSubmit={handleClientSubmit}>
                <label>
                  Name
                  <input
                    required
                    value={clientForm.name}
                    onChange={(e) =>
                      setClientForm({ ...clientForm, name: e.target.value })
                    }
                    placeholder="Client name"
                  />
                </label>
                <label>
                  Designation
                  <input
                    required
                    value={clientForm.designation}
                    onChange={(e) =>
                      setClientForm({
                        ...clientForm,
                        designation: e.target.value,
                      })
                    }
                    placeholder="CEO, Designer, etc"
                  />
                </label>
                <label>
                  Testimonial
                  <textarea
                    required
                    value={clientForm.description}
                    onChange={(e) =>
                      setClientForm({
                        ...clientForm,
                        description: e.target.value,
                      })
                    }
                    placeholder="What they said"
                  />
                </label>
                <label>
                  Image URL
                  <input
                    required
                    value={clientForm.image}
                    onChange={(e) =>
                      setClientForm({ ...clientForm, image: e.target.value })
                    }
                    placeholder="https://..."
                  />
                </label>
                <button
                  className="button primary"
                  type="submit"
                  disabled={loading}
                >
                  {loading ? "Saving..." : "Save client"}
                </button>
              </form>
            </div>

            {/* Submissions Lists */}
            <div className="panel list">
              <h3>Contact submissions</h3>
              <ul>
                {contacts.map((c) => (
                  <li key={c._id}>
                    <div>
                      <strong>{c.fullName}</strong> — {c.city}
                    </div>
                    <p className="muted">
                      {c.email} | {c.phone}
                    </p>
                  </li>
                ))}
                {!contacts.length && <p className="muted">No contacts yet.</p>}
              </ul>
            </div>

            <div className="panel list">
              <h3>Newsletter subscribers</h3>
              <ul>
                {subscriptions.map((s) => (
                  <li key={s._id}>{s.email}</li>
                ))}
                {!subscriptions.length && (
                  <p className="muted">No subscribers yet.</p>
                )}
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Admin;
