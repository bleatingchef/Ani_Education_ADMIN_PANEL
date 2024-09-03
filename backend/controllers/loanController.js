import asyncHandler from "express-async-handler";
import Loan from "../models/loan.js";

const loanApply = asyncHandler(async (req, res) => {
    const { name, mobile, pan, email } = req.body;
    if (!name || !mobile || !pan || !email) {
        res.status(400);
        throw new Error("Please fill all the fields");
    }

    const userExist = await Loan.findOne({ pan });

    if (userExist) {
        res.status(400);
        throw new Error("Student already exists");
    }

    const form = await Loan.create({
        name: name,
        mobile: mobile,
        pan: pan,
        email: email,
    });
    res.status(201).json(form);
});

const getLoan = asyncHandler(async (req, res) => {
    const loan = await Loan.find();
    res.status(201).json(loan);
});

// const deleteloan = asyncHandler(async (req, res) => {
//     const { pan } = req.body;

//     if (!pan) {
//         res.status(400);
//         throw new Error("Please provide a Pan number");
//     }

//     const user = await Loan.findOneAndDelete({ pan });

//     if (!user) {  // Check if the user was found
//         res.status(404); // Not found status code
//         throw new Error("User not found");
//     }

//     res.status(200).json({ message: "Field deleted successfully" });
// });

const deleteloan = asyncHandler(async (req, res) => {
    const { email } = req.body;

    console.log("Received request to delete email:", email);

    if (!email) {
        console.error("No email provided in the request");
        res.status(400);
        throw new Error("Please provide an email address");
    }

    const user = await Loan.findOneAndDelete({ email });

    if (!user) {
        console.error("No user found with email:", email);
        res.status(404);
        throw new Error("User not found");
    }

    console.log("Successfully deleted user:", user);
    res.status(200).json({ message: "Field deleted successfully", deletedUser: user });
});



export { loanApply, getLoan, deleteloan };

