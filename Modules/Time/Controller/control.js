///////////////////////////////////////////////////////////
/// <==> /// This File Contains Time Functions /// <==> ///
///////////////////////////////////////////////////////////

/* ====================== /// <==> Variables Declaration <==> /// ====================== */
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { StatusCodes } = require("http-status-codes");
const timeModel = require("../Model/model");
const timeServices = require("../Services/services")
/* =========== /// <==> End <==> ===========*/

/* ====================== /// <==> Time Functions <==> /// ====================== */

/* ----------- <---> Set Time <---> ----------- */ // *** <===> Done <===>  *** //
const setTime = async (request, response) => {
  try {
    let { date, cTime } = request.body;

    timeServices.setTime(date, cTime) //I don´t need to wait... only save the document

    response.status(StatusCodes.OK).json({
      meta: {
        status: 201,
        msg: "CREATED",
      },
      res: {
        message: "Set Time Success (<:>)",
        data: "None",
      },
    });
  } catch (error) {
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
