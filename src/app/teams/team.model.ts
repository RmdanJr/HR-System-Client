export interface NewTeam {
  name: string;
  lead: { id: string; name: string };
  department: { id: string; name: string };
  members: Array<{ id: string; name: string }>;
}

export interface Team extends NewTeam {
  id: string;
}