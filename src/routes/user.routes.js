import { Router } from "express";
import { regitserUser } from "../controllers/user.controllers.js";
import {upload} from "../middlewares/multer.middleware.js"
const router = new Router();

router.route('/register').post(
    upload.fields([
        {
            name: "avatar",
            maxCount:1,
        },
        {
            name: "coverImage",
            maxCount:1,
        }
    ]),
    regitserUser)

export default router;