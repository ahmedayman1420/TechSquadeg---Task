/*
===================== ///////// <---------> ============= <---------> ///////// =====================>
===================== ///////// <---------> Set Time <---------> ///////// =====================>
===================== ///////// <---------> ============= <---------> ///////// =====================>
*/

/**
 * @api {post} /setTime      Set Current Time
 * @apiName  setTime
 * @apiGroup Time
 *
 * @apiPermission User, Admin, Super_Admin
 * @apidescription set current time (Date, Hours)
 * @apiVersion 0.0.0
 *
 * @apiParam {Date} date Current Date
 * @apiParam {Object} cTime its an object that contains hours
 * 
 * @apiSuccessExample Response Data:
 *      HTTP/1.1 200 OK
 *      {
 *   "meta": {
 *       "status": 201,
 *       "msg": "CREATED"
 *  },
 *   "res": {
 *       "message": "Set Time Success (<:>)",
 *       "data": "None"
 *  }
 *}
 * @apiErrorExample Response Error:
 *      HTTP/1.1 400 BAD REQUEST
 *     {
 *   "meta": {
 *       "status": 500,
 *       "msg": "INTERNAL_SERVER_ERROR"
 *   },
 *   "res": {
 *      "message": "Error In Set Time Function (<:>)",
 *       data: "Error",
 *   }
 *}
 */
