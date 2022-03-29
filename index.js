/////////////////////////////////////////////////////////////////////
/// <==> /// This File Is The Start Point OF The Project /// <==> ///
/////////////////////////////////////////////////////////////////////
/* ====================== /// <==> Variables Declaration <==> /// ====================== */
const express = require('express');
const app = express();
const dotenv = require('dotenv');
const Connection = require('./Configurations/configuration');
const timeRoutes = require('./Modules/Time/Routes/APIs');
/* =========== /// <==> End <==> ===========*/

/* ====================== /// <==> Calling Config Function OF dotenv <==> /// ====================== */
dotenv.config();
/* =========== /// <==> End <==> ===========*/

/* ====================== /// <==> Calling Connection Function OF Database <==> /// ====================== */
Connection();
/* =========== /// <==> End <==> ===========*/

/* ====================== /// <==> MiddleWares <==> /// ====================== */
app.use(express.json());
app.use(timeRoutes);
/* =========== /// <==> End <==> ===========*/

/* ====================== /// <==> Listen Server To Port <==> /// ====================== */
server = app.listen(process.env.PORT, () => {
    console.log('Server Is Built On Port 3000 (:');
});

module.exports = server;
/* =========== /// <==> End <==> ===========*/