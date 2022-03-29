///////////////////////////////////////////////////////////////////////
/// <==> /// This File Contains Configurations OF Database /// <==> ///
///////////////////////////////////////////////////////////////////////

/* ====================== /// <==> Variables Declaration <==> /// ====================== */
const mongoose = require('mongoose');
/* =========== /// <==> End <==> ===========*/

/* ====================== /// <==> Variables Declaration <==> /// ====================== */

/**
 * This Function Used To Connect With Database.
 *
 * @returns {string} - Message indicate if database Connect With Server or Not.
 */

const Connection = async() => {
    await mongoose.connect(process.env.CONNECTIONSTRING, {}).then(
        (result) => { console.log('Database Connection Is Done'); }).catch(
        (error) => { console.log('Error In Database Connection'); }
    );
};
/* =========== /// <==> End <==> ===========*/

/* ====================== /// <==> Export Connection Function <==> /// ====================== */
module.exports = Connection;
/* =========== /// <==> End <==> ===========*/