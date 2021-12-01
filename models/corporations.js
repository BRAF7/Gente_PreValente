import mongoose from "mongoose";

const corporationSchema = new mongoose.Schema({
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
