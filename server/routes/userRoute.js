import express from "express";
import { deleteUser, followUser, getUser, unfollowUser, updateUser } from "../controllers/userController.js";


const router = express.Router();

router.get("/:id", getUser)
//the getuser func is called and accesses the id to retrieve the user from the db
//the user obj is sent back to the client
router.put("/:id", updateUser)
//the updateuser func is called and accesses the id to update the user in the db
//the updated user obj is sent back to the client
router.delete('/:id', deleteUser)
router.put('/:id/follow', followUser)
router.put('/:id/unfollow', unfollowUser)

export default router;