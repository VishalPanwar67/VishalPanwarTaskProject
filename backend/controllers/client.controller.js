import Client from "../models/Client.js";

export const getClients = async (_req, res) => {
  try {
    const items = await Client.find().sort({ createdAt: -1 });
    res.json(items);
  } catch (err) {
    console.error("Error fetching clients:", err);
    res.status(500).json({ message: "Server Error" });
  }
};

export const createClient = async (req, res) => {
  try {
    console.log("Received client data:", req.body);
    const client = await Client.create(req.body);
    console.log("Client created successfully:", client._id);
    res.status(201).json(client);
  } catch (err) {
    console.error("Error creating client:", err);
    res.status(400).json({ message: err.message || "Unable to create client" });
  }
};
