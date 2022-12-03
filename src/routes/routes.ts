import { Router } from "express"
import authRouter from "./authRouter"
import recordsRouter from "./recordsRouter"


const router = Router()
router.use(authRouter)
router.use(recordsRouter)

export default router