import bcrypt from "bcrypt";
import User from "../Models/user.model.js"
import { genrateToken } from "../Lib/utils.js";

export const loginController = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        message: "Invalid credentials",
      });
    }

    // Checking password with hashed password
    const isCorrPass = await bcrypt.compare(password, user.password);

    if (!isCorrPass) {
      return res.status(400).json({
        message: "Invalid credentials",
      });
    }
    generateToken(user._id, res);

    return res.status(200).json({
      _id: user._id,
      fullName: user.fullName,
      email: user.email,
      profilePic: user.profilePic,
    });
  } catch (error) {
    console.log("Error in login controller", error.message);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const signupController = async (req, res) => {
  const { fullName, email, password } = req.body;
  try {
    // Checking input and required constraints
    if (!email || !password || !fullName) {
      return res.status(400).json({ message: "All input fields required" });
    }
    if (password < 6) {
      return res
      .status(400)
      .json({ message: "Password must be at least 6 characters" });
    }
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }
    
    // hashing password
    const salt = await bcrypt.genSalt(10);
    const hashedpassword = await bcrypt.hash(password, salt);
    
    // new user with hashed password being created
    const newUser = new User({
      fullName,
      email,
      password: hashedpassword,
    });
    
    if (newUser) {
      generateToken(newUser._id, res);
      await newUser.save();
      
      console.log("Signin successfull");
      return res.status(201).json({
        _id: newUser._id,
        fullName: newUser.fullName,
        email: newUser.email,
        profilePic: newUser.profilePic,
      });
    } else {
      return res.status(400).json({ message: "Invalid user data" });
    }
  } catch (error) {
    console.log("Error in signing up", error.message);
    
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const logoutController = async (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    return res.status(200).json({ message: "User Logged out" });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const updateProfileController = async (req, res) => {
  try {
    const userId = req.user._id;
    const {
      fullName,
      age,
      gender,
      height,
      weight,
      fitnessGoals,
      dailyCaloricIntake,
      personalBest,
      totalReps
    } = req.body;

    // Create an object to store fields that need to be updated
    const updates = {};

    // Only add fields that are actually provided in the request
    if (fullName) updates.fullName = fullName;
    if (age) updates.age = age;
    if (gender) updates.gender = gender;
    if (height) updates.height = height;
    if (weight) updates.weight = weight;
    if (fitnessGoals) updates.fitnessGoals = fitnessGoals;
    if (dailyCaloricIntake) updates.dailyCaloricIntake = dailyCaloricIntake;

    // Handle nested objects for personalBest
    if (personalBest) {
      // Check each nested field separately
      if (!updates.personalBest) updates.personalBest = {};
      if (personalBest.squat !== undefined) updates.personalBest.squat = personalBest.squat;
      if (personalBest.pushups !== undefined) updates.personalBest.pushups = personalBest.pushups;
      if (personalBest.lunges !== undefined) updates.personalBest.lunges = personalBest.lunges;
    }

    // Handle nested objects for totalReps
    if (totalReps) {
      // Check each nested field separately
      if (!updates.totalReps) updates.totalReps = {};
      if (totalReps.squat !== undefined) updates.totalReps.squat = totalReps.squat;
      if (totalReps.pushups !== undefined) updates.totalReps.pushups = totalReps.pushups;
      if (totalReps.lunges !== undefined) updates.totalReps.lunges = totalReps.lunges;
    }

    // If no updates were provided
    if (Object.keys(updates).length === 0) {
      return res.status(400).json({ message: "No updates provided" });
    }

    // Update user with provided fields
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      updates,
      { new: true, runValidators: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json({
      success: true,
      message: "Profile updated successfully",
      user: updatedUser
    });
  } catch (error) {
    console.log("Profile Update Error: ", error.message);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const checkAuth = (req, res) => {
  try {
    res.status(200).json(req.user);
  } catch (error) {
    console.log("Error in checkAuth controller : ", error.message);
    return res.status(500).json({ message: "Internal server Error" });
  }
};
