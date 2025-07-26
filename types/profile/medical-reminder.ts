// models/MedicationSchedule.ts

export interface MedicalReminderApiesponse {
  status: boolean;
  message: string;
  data: MedicalReminderData;
}

export interface getAllMedicalReminderApiResponse {
  status: boolean;
  message: string;
  data: MedicalReminderData[];
}

export interface MedicalReminderData {
  id: string;
  startDate: string; // ISO date string
  endDate: string | null; // nullable ISO date
  times: string[]; // array of time strings, e.g., "08:56"
  recurrence: "oneoff" | "daily" | "weekly" | string;
  medicine: string;
  dosage: string;
  status: "ongoing" | "completed" | "paused" | string;
  seekerId: string;
  createdAt: string; // ISO datetime
}
