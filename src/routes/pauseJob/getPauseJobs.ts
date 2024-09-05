
import { RequestValidationError, BadRequestError , mongoQuery } from '@phibase/common-v2'
import { body, validationResult } from 'express-validator';
import { PauseJob } from '../../models/pauseJob';
const express = require('express');
const router = express.Router();

router.get('/api/v1/edge/pauseJob', 
  mongoQuery , 
  async (req: any, res: any) => {
    let pauseJob = await PauseJob.find(req.mongoQuery).sort({createdAt: -1}); 

    if (!pauseJob) {
      throw new BadRequestError('PauseJob is not found');
    }

    return res.status(200).json({
      success: true,
      data: pauseJob,
    });
})

export default router
