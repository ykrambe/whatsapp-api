import express, { Request, Response } from 'express';
const router = express.Router();

import { RequestValidationError, BadRequestError, propUpdate } from '@phibase/common-v2';
import { body, validationResult } from 'express-validator';
import { PauseJob } from '../../models/pauseJob';
router.put(
    '/api/v1/edge/pauseJob/:id',
    [

    ],
    async (req: Request, res: Response) => {
        

        res.status(200).json({
            success: true,
            data: true
        });
    },
);

export default router;