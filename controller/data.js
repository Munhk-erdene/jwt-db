import Data from "../model/Data.js";
import jwt from "jsonwebtoken";
export const getAllDatas = async (req, res) => {
  try {
    const data = await Data.find({});
    res.status(200).send({
      success: true,
      data: data,
    });
  } catch (error) {
    res.status(400).send({
      success: true,
      data: error.message,
    });
  }
};

export const createData = async (req, res) => {
  try {
    const data = await Data.create(req.body);
    const token = jwt.sign({ data }, "secret", { expiresIn: "1d" });
    res.status(200).send({
      success: true,
      data: data,
      token: token,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      data: error.message,
    });
  }
};
export const data = async (req, res) => {
  try {
    const data = await Data.findById(req.params.id);
    res.status(200).send({
      success: true,
      data: data,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      data: error.message,
    });
  }
};
export const updateData = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Data.findByIdAndUpdate({ _id: id }, req.body);
    res.status(200).send({
      success: true,
      data: data,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      data: error.message,
    });
  }
};
export const deleteData = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Data.findByIdAndRemove({ _id: id });
    res.status(200).send({
      success: true,
      data: data,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      data: error.message,
    });
  }
};

export const getMail = async (req, res) => {
  try {
    const link = await Link.findOne({});
    res.status(200).send({
      success: true,
      link: link,
    });
  } catch (error) {
    res.status(400).send({
      success: true,
      link: error.message,
    });
  }
};
