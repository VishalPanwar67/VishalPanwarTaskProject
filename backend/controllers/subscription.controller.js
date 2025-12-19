import Subscription from "../models/Subscription.js";

// @desc    Get all subscribed emails
// @route   GET /api/subscriptions
export const getSubscribers = async (_req, res) => {
  try {
    const items = await Subscription.find().sort({ createdAt: -1 });
    res.json(items);
  } catch (err) {
    console.error("Error fetching subscribers:", err);
    res.status(500).json({ message: "Server Error" });
  }
};

// @desc    Subscribe a new email
// @route   POST /api/subscriptions
export const subscribeUser = async (req, res) => {
  try {
    const subscription = await Subscription.create(req.body);
    res.status(201).json(subscription);
  } catch (err) {
    console.error("Error subscribing user:", err);
    res.status(400).json({
      message: err.code === 11000 ? "Email already subscribed" : err.message,
    });
  }
};
