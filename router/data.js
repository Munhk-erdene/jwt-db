import express from "express";
import {
  getAllDatas,
  createData,
  data,
  updateData,
  deleteData,
  getMail,
} from "../controller/data.js";
const router = express.Router();
import { checkToken } from "../middleware/middleware.js";
router.route("/").all(checkToken).get(getAllDatas).post(createData);
router.route("/:id").get(data).put(updateData).delete(deleteData);
router.get("/Forget", getMail);

export default router;
