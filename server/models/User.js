import mongoose from "mongoose";

// Add a user model with authentication and subscription fields

const userSchema = new mongoose.Schema(
    {
        name: { type: String, required: true, trim: true },
        email: { type: String, required: true, unique: true, lowercase: true, trim: true },
        password: { type: String, required: true },

        //When a new user gets created,the plan type is free
        plan: { type: String, enum: ["free", "pro"], default: "free" },

        analysisCount: { type: Number, default: 0 },
        lastAnalysisDate: { type: Date, default: null },
    },
    // Automatically added data creation time as timestamp is true
    { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
