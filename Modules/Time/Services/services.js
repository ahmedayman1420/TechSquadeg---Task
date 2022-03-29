///////////////////////////////////////////////////////////
/// <==> /// This File Contains Time Services /// <==> ///
///////////////////////////////////////////////////////////

/* ====================== /// <==> Variables Declaration <==> /// ====================== */
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { StatusCodes } = require("http-status-codes");
const timeModel = require("../Model/model");
/* =========== /// <==> End <==> ===========*/

/* ====================== /// <==> Time Services <==> /// ====================== */

/* ----------- <---> Set Time <---> ----------- */ // *** <===> Done <===>  *** //
const setTime = async (date, cTime) => {
  try {
    const createdInstance = new timeModel({ date, cTime });
    const data = await createdInstance.save(); //I don´t need to wait... only save the document
    console.log('Here')
    return "Done";
  } catch (error) {
    console.log('Here')
    response.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      meta: {
        status: 500,
        msg: "INTERNAL_SERVER_ERROR",
      },
      res: {
        message: "Error In Set Time Function (<:>)",
        data: error,
      },
    });
  }
};

/* =========== /// <==> End <==> ===========*/

/* ====================== /// <==> Export Time Functions <==> /// ====================== */
module.exports = {
  setTime,
};
/* =========== /// <==> End <==> ===========*/
