///////////////////////////////////////////////////////////
/// <==> /// This File Creates Time Collection /// <==> ///
///////////////////////////////////////////////////////////

/* ====================== /// <==> Variables Declaration <==> /// ====================== */
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
/* =========== /// <==> End <==> ===========*/


/* ====================== /// <==> Time Module Schema <==> /// ====================== */
const timeSchema = mongoose.Schema({
    date: { type: Date, default: Date.now },
    cTime: { type: Object },
    isDeleted: { type: Boolean, default: false },
}, {
    Timestamps: true,
});
/* =========== /// <==> End <==> ===========*/


/* ====================== /// <==> Create Time Model <==> /// ====================== */
const timeModel = mongoose.model('Time', timeSchema);
/* =========== /// <==> End <==> ===========*/

/* ====================== /// <==> Export Time Model <==> /// ====================== */
module.exports = timeModel;
/* =========== /// <==> End <==> ===========*/