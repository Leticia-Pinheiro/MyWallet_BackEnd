import { Router } from "express"
import * as authController from "../controllers/recordsController"
import verifyToken from "../middlewares/verifyToken"
import ValidateSchema from "../middlewares/validateSchema"
//schema

const recordsRouter = Router()

recordsRouter.post(
	"/record",	
    verifyToken,
	ValidateSchema(recordSchema),
	recordsController.createRecord
)

recordsRouter.get(
	"/records",	
	verifyToken,
	recordsController.getRecords
)

export default authRouter