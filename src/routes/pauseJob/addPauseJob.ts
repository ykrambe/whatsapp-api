import express, { Request, Response } from "express";
import { body, validationResult } from "express-validator";

import { RequestValidationError, BadRequestError } from "@phibase/common-v2";
import { PauseJob } from "../../models/pauseJob";
const router = express.Router();

router.post(
  "/api/v1/edge/pauseJob",
  [],
  async (req: any, res: any) => {
    let pauseJob;

    try {
      pauseJob = await PauseJob.create({
        ...req.body,
        syncedToCloud:false
      });
    } catch (err) {
      throw new BadRequestError(
        `Failed to add jobOrder:` + (err as Error).message
      );
    }

    res.status(200).send({ data: pauseJob });
  }
);

export default router;
