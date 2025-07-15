export interface MedicalRecordResponse {
  status: boolean;
  message: string;
  data: MedicalRecord;
}

export interface MedicalRecord {
  id: string;
  allergies: string;
  currMed: string;
  pastMed: string;
  chronicDisease: string;
  injuries: string;
  surgeries: string;
  smokingHabits: "none" | "occasional" | "frequent" | string;
  alcoholConsumption: "none" | "rare" | "moderate" | "heavy" | string;
  activityLevel: "sedentary" | "light" | "moderate" | "active" | string;
  seekerId: string;
  updatedAt: string; // ISO string — use Date if you parse it
  createdAt: string;
}
