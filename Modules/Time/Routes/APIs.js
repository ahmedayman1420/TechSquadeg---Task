//////////////////////////////////////////////////////
/// <==> /// This File Contains Time APIs /// <==> ///
//////////////////////////////////////////////////////

/* ====================== /// <==> Variables Declaration <==> /// ====================== */
const express = require('express');
const router = express.Router();
const timeFunctions = require('../Controller/control');
const timeJoi = require('../Joi/joi');
const ValidateRequest = require('../../../Common/Middlewares/requestValidation');
const isAuthorized = require('../../../Common/Middlewares/isAuthorized');
const timeEndPoints = require('../endPoints');
/* =========== /// <==> End <==> ===========*/

/* ====================== /// <==> Time APIs <==> /// ====================== */

/* ----------- <---> Set Time <---> ----------- */
router.post('/setTime', ValidateRequest(timeJoi.setTimeValidations),/*isAuthorized(timeEndPoints.Set_Time),*/ timeFunctions.setTime);


/* =========== /// <==> End <==> ===========*/

/* ====================== /// <==> Export Time APIs <==> /// ====================== */
module.exports = router;
/* =========== /// <==> End <==> ===========*/