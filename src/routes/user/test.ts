import express, { Request, Response } from "express";
const router = express.Router();

router.post(
  "/",
  [],
  async (req: any, res: any) => {
    

    res.status(200).send('halo worold');
  }
);

export default router;
