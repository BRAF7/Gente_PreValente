
// Conexion DB
import conectardb from "../../lib/mongodb";
// Models
const Corporation = require("../../models/corporations")

async function get_information() {
//   var Corporation = mongoose.model("Corporation");
  //Conect with db
  await conectardb();
  //Use model in order to get information
  const res = await Corporation.find({});
  //Parse ID to string
  var corporations = res.map((doc) => {
    const corp = doc.toObject();
    corp._id = `${corp._id}`;
    return corp;
  });
  //Information that we´re giving
  corporations = corporations[4];
  console.log(corporations);
}

export default get_information();
