import express from "express";
import { deleteData, getData, postData } from "../controlers/controlers.js";

const router = express.Router();

router.get('/', getData)
router.post('/', postData)
router.delete('/:id', deleteData)

export default router;