// models/Visit.ts
import mongoose, { Schema, Document } from "mongoose";

export interface IVisit extends Document {
  path: string;
  type: "page" | "download";
  createdAt: Date;
}

const VisitSchema = new Schema<IVisit>({
  path: { type: String, required: true },
  type: { type: String, enum: ["page", "download"], default: "page" },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Visit || mongoose.model<IVisit>("Visit", VisitSchema);
