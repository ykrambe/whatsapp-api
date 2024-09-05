import express from "express";
const router = express.Router();

router.get(
    "/api/serviceStart",
    [],
    async (req: any, res: any) => {        

    res.status(200).send({
        result: {
        "message": "API for device XXXXX Already activated, please scan the qr code to connect the device"
        }
    });
}
);

export default router;
