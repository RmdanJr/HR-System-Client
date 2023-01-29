export interface Team {
  id: string;
  name: string;
  lead: { id: string; name: string };
  department: { id: string; name: string };
  members: Array<{ id: string; name: string }>;
}
