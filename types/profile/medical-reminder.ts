// models/MedicationSchedule.ts

export interface MedicalReminderApiesponse {
  status: boolean;
  message: string;
  data: MedicalReminderData;
}

export interface MedicalReminderData {
  id: string;
  status: "ongoing" | "completed" | "cancelled" | string;
  medicine: string;
  dosage: string;
  startDate: string; // ISO Date string
  endDate: string | null;
  recurrence: "daily" | "weekly" | "monthly" | "oneoff" | string;
  times: string[]; // e.g., ["08:00", "14:00"]
  seekerId: string;
  createdAt: string;
}
