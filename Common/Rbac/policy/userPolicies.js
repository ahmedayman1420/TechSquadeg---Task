/////////////////////////////////////////////////////////////
//// <==> This File Contains All User Role Policies <==> ////
/////////////////////////////////////////////////////////////

/* ======================== <-- Variables Declarations --> ======================== */
const timeEndPoints = require('../../../Modules/Time/endPoints')
/* =========== <--> End <--> =========== */

/* ======================== <-- User Role Policies --> ======================== */
const userPolicies = [
    timeEndPoints.Set_Time,
];
/* =========== <--> End <--> =========== */

/* ======================== <-- Export User Role Policies --> ======================== */
module.exports = userPolicies;
/* =========== <--> End <--> =========== */