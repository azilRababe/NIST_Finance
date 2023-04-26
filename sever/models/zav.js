import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema({
  opp_id: { type: String, required: true },
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  nationality: { type: String },
  birthdate: { type: String },
  gender: { type: String, enum: ["Male", "Female", "Other"] },
  university: { type: String },
  study_bg: { type: String },
  std_status: { type: String, enum: ["Student", "Graduate", "Other"] },
  cmp_name: { type: String, required: true },
  cmp_address: { type: String },
  supervisor: { type: String },
  cmp_tel: { type: String },
  industry: { type: String },
  salary: { type: String },
  contract_from: { type: String, required: true },
  contract_to: { type: Date, required: true },
  Verlängerung: { type: String },
  Betriebswechsel: { type: String },
  enrolled_until: { type: Date },
  submitter_name: { type: String, required: true },
  submitter_email: { type: String },
  submitter_lc: { type: String, required: true },
  app_status: { type: String },
  sub_comment: { type: String },
  mc_comment: { type: String },
  passportCopy: { type: Buffer },
  anabin: { type: Buffer },
  workContract: { type: Buffer },
  EnrollmentCertificate: { type: Buffer },
  Internship_progress_plan: { type: Buffer },
  DeclarationOFemployment: { type: Buffer },
  visa: { type: Buffer },
  createdAt: { type: Date, Default: Date.now() },
});

const zav = mongoose.model("zav", userSchema);

export default EPs;
