import User from "../models/user.model.js";

export async function getAllUsers(req, res, next) {

}

export async function getUserData(req, res, next) {
    try {
        const user = await User.findById(req.params.id);

        if(!user) {
            throw new ApiError(404, "User not found");
        }

        res.status(201).send({
            success: true,
            message: "User Found",
            data: user
        });
    } catch (e) {
        next(e);
    }
}

export async function deleteUser(req, res, next) {

}

export async function updateUserData(req, res, next) {

}

