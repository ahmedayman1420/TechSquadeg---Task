/////////////////////////////////////////////////////////////
//// <==> This File Contains All Super Admin Role Policies <==> ////
/////////////////////////////////////////////////////////////

/* ======================== <-- Variables Declarations --> ======================== */
const timeEndPoints = require('../../../Modules/Time/endPoints')

/* =========== <--> End <--> =========== */

/* ======================== <-- Super Admin Role Policies --> ======================== */
const superAdminPolicies = [
    timeEndPoints.Set_Time,

];
/* =========== <--> End <--> =========== */

/* ======================== <-- Export Admin Role Policies --> ======================== */
module.exports = superAdminPolicies;
/* =========== <--> End <--> =========== */