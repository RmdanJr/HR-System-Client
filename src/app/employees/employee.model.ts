export interface Employee {
  id: string;
  username: string;
  password?: string;
  name: string;
  birthDate: Date;
  gender: string;
  graduationDate: Date;
  salary: { gross: number; net?: number; insuranceAmount?: number };
  department: { id: string; name: string };
  team: { id: string; name: string };
  expertises: Array<{ name: string; level: string }>;
  manager: { id: string; name: string };
  managedDepartment: { id: string; name: string } | null;
  managedTeam: { id: string; name: string } | null;
  managedEmployees: Array<{ id: string; name: string }>;
}
