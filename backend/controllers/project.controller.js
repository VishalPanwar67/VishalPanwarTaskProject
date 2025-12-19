import Project from "../models/Project.js";

// @desc    Get all projects
// @route   GET /api/projects
export const getProjects = async (_req, res) => {
  try {
    const items = await Project.find().sort({ createdAt: -1 });
    res.json(items);
  } catch (err) {
    console.error("Error fetching projects:", err);
    res.status(500).json({ message: "Server Error" });
  }
};

// @desc    Create a new project
// @route   POST /api/projects
export const createProject = async (req, res) => {
  try {
    console.log("Received project data:", req.body);
    const project = await Project.create(req.body);
    console.log("Project created successfully:", project._id);
    res.status(201).json(project);
  } catch (err) {
    console.error("Error creating project:", err);
    res
      .status(400)
      .json({ message: err.message || "Unable to create project" });
  }
};
