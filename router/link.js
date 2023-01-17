import express from "express";
import {
  getAllLinks,
  createLink,
  link,
  updateLink,
  deleteLink,
} from "../controller/link.js";

const routerTwo = express.Router();
routerTwo.route("/").get(getAllLinks).post(createLink);
routerTwo.route("/:id").delete(deleteLink).get(link);

export default routerTwo;
