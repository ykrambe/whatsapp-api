import { PickList } from '../../models/Picklist';

import { RequestValidationError, BadRequestError , mongoQuery } from '@phibase/common-v2'
import { body, validationResult } from 'express-validator';
const express = require('express');
const router = express.Router();

router.get('/api/v1/edge/picklist', 
  mongoQuery , 
  async (req: any, res: any) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      throw new RequestValidationError(errors.array());
    }

    let pickList = await PickList.find(req.mongoQuery).sort({createdAt: -1}); 

    if (!pickList) {
      throw new BadRequestError('PickList is not found');
    }

    return res.status(200).json({
      success: true,
      data: pickList,
    });
})

export default router
