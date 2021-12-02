import mongoose from "mongoose";
const Schema = mongoose.Schema;

const corporationSchema = new Schema({
  name: { type: "string", required: true },
  razon_social: { type: "string", required: true  },
  NIT: { type: "string", required: true  },
  identificacion: { type: "number",required: true  },
  numero_empleados: { type: "number", required: true  },
  logo: { type: "string", required: true  },
  estado: { type: "bool", required: true  },
});
export default mongoose.models.Corporation ||
  mongoose.model("Corporation", corporationSchema);

// mongoose.models = {};
// const Corporation = mongoose.model('Corporation', corporationSchema);
// export default Corporation;
// const Corporation = mongoose.model('Corporation', corporationSchema)
// module.exports = Corporation;
