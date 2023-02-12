export interface Department {
  id?: string;
  name: string;
  manager: { id: string; name: string };
  teams: Array<{ id: string; name: string }>;
  employees?: Array<{ id: string; name: string }>;
}
