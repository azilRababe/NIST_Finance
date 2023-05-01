import mongoose from "mongoose";

const { Schema } = mongoose;

const GENDER_ENUM = ["Male", "Female", "Other"];
const STD_STATUS_ENUM = ["Student", "Graduate", "Other"];

const userSchema = new Schema(
  {
    opp_id: { type: String, required: true },
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    nationality: { type: String },
    birthdate: { type: Date },
    gender: { type: String, enum: GENDER_ENUM },
    university: { type: String },
    study_bg: { type: String },
    std_status: { type: String, enum: STD_STATUS_ENUM },
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
    passportCopy: { type: Buffer, select: false },
    anabin: { type: Buffer, select: false },
    workContract: { type: Buffer, select: false },
    EnrollmentCertificate: { type: Buffer, select: false },
    Internship_progress_plan: { type: Buffer, select: false },
    DeclarationOFemployment: { type: Buffer, select: false },
    generatedPDF: { type: Buffer, select: false },
    visa: { type: Buffer, select: false },
  },
  { timestamps: true }
);

const zav = mongoose.model("zav", userSchema);

export default zav;
