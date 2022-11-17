import UserModel from "../models/userModel.js";
import bcrypt from "bcrypt";

//get the user from the db

export const getUser = async (req, res) => {
    const id = req.params.id;
    try {
        const user = await UserModel.findById(req.params.id);
        if (user) {
            const { password, ...otherDetails } = user._doc; //create a copy of the user obj and exclude the password. the _ before doc indicates that this is a private prop.
            res.status(200).json(otherDetails);
        } else {
            res.status(404).json({ message: "User not found" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
    }

//update the user in the db

    export const updateUser = async (req, res) => {
        const id = req.params.id;
        const {currentUserId, currentAdminStatus, password} = req.body

        if (id === currentUserId || currentAdminStatus) {
            try{

                if(password){
                    const salt = await bcrypt.genSalt(10);
                    req.body.password = await bcrypt.hash(password, salt);
                }


                const user = await UserModel.findByIdAndUpdate(id, req.body, {new: true});
                res.status(200).json(user);
            } catch (error) {
                res.status(500).json({message: error.message})
            }
        } else {
            res.status(403).json({message: "You can only update your own account"})
        }
    }

//delete the user from the db

    export const deleteUser = async (req, res) => {
        const id = req.params.id;
        const {currentUserId, currentAdminStatus} = req.body

        if (id === currentUserId || currentAdminStatus) {
            try{
                await UserModel.findByIdAndDelete(id);
                res.status(200).json({message: "User has been deleted"})
            } catch (error) {
                res.status(500).json({message: error.message})
            }
        } else {
            res.status(403).json({message: "You can only delete your own account"})
        }
    }

//follow a user

    export const followUser = async (req, res) => {
        const id = req.params.id;
        const {currentUserId} = req.body

        if (id !== currentUserId) {
            try{
                const user = await UserModel.findById(id);
                const currentUser = await UserModel.findById(currentUserId);
                if(!user.followers.includes(currentUserId)){
                    await user.updateOne({$push: {followers: currentUserId}});
                    await currentUser.updateOne({$push: {followings: id}});
                    res.status(200).json("user has been followed");
                } else {
                    res.status(403).json("you already follow this user")
                }
            } catch (error) {
                res.status(500).json({message: error.message})
            }
        } else {
            res.status(403).json({message: "You can't follow yourself"})
        }
    }

//unfollow a user

    export const unfollowUser = async (req, res) => {
        const id = req.params.id;
        const {currentUserId} = req.body

        if (id !== currentUserId) {
            try{
                const user = await UserModel.findById(id);
                const currentUser = await UserModel.findById(currentUserId);
                if(user.followers.includes(currentUserId)){
                    await user.updateOne({$pull: {followers: currentUserId}});
                    await currentUser.updateOne({$pull: {followings: id}});
                    res.status(200).json("user has been unfollowed");
                } else {
                    res.status(403).json("you don't follow this user")
                }
            } catch (error) {
                res.status(500).json({message: error.message})
            }
        } else {
            res.status(403).json({message: "You can't unfollow yourself"})
        }
    }

