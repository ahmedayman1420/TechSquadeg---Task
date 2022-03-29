/////////////////////////////////////////////////////////////////
/// <==> /// This File Contains Time Joi Validations /// <==> ///
/////////////////////////////////////////////////////////////////

/* ====================== /// <==> Variables Declaration <==> /// ====================== */
const joi = require("joi");
/* =========== /// <==> End <==> ===========*/

/* ====================== /// <==> Time Joi Validations <==> /// ====================== */
const timeJoi = {
  setTimeValidations: {
    body: joi
      .object()
      .required()
      .keys({
        date: joi.date().required(),
        cTime: joi.object().required().keys({
          hours: joi.number().required(),
        }),
      }),
  },
};
/* =========== /// <==> End <==> ===========*/

/* ====================== /// <==> Exports Time Joi Validations <==> /// ====================== */
module.exports = timeJoi;
/* =========== /// <==> End <==> ===========*/
