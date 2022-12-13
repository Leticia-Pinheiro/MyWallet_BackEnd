import { Router } from "express"
import * as recordsController from "../controllers/recordsController"
import verifyToken from "../middlewares/verifyToken"
import ValidateSchema from "../middlewares/validateSchema"
import recordSchema from "../schemas/recordSchema"

const recordsRouter = Router()

recordsRouter.post(
	"/record",	
    verifyToken,
	ValidateSchema(recordSchema),
	recordsController.createRecord
)

recordsRouter.get(
	"/records/:userId",	
	verifyToken,
	recordsController.getRecords
)

recordsRouter.delete(
	"/record/:id",	
	verifyToken,
	recordsController.deleteRecord
)

export default recordsRouter