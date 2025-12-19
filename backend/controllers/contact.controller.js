import Contact from "../models/Contact.js";

export const getContacts = async (_req, res) => {
  try {
    const items = await Contact.find().sort({ createdAt: -1 });
    res.json(items);
  } catch (err) {
    console.error("Error fetching contacts:", err);
    res.status(500).json({ message: "Server Error" });
  }
};


export const createContact = async (req, res) => {
  try {
    const contact = await Contact.create(req.body);
    res.status(201).json(contact);
  } catch (err) {
    console.error("Error saving contact:", err);
    res.status(400).json({ message: err.message || "Unable to save contact" });
  }
};
