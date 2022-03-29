/////////////////////////////////////////////////////////////
//// <==> This File Contains All Admin Role Policies <==> ////
/////////////////////////////////////////////////////////////

/* ======================== <-- Variables Declarations --> ======================== */
const timeEndPoints = require('../../../Modules/Time/endPoints')

/* =========== <--> End <--> =========== */

/* ======================== <-- Admin Role Policies --> ======================== */
const adminPolicies = [
    timeEndPoints.Set_Time,

];
/* =========== <--> End <--> =========== */

/* ======================== <-- Export Admin Role Policies --> ======================== */
module.exports = adminPolicies;
/* =========== <--> End <--> =========== */