import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-edit-team',
  templateUrl: './edit-team.component.html',
  styleUrls: ['./edit-team.component.css'],
})
export class EditTeamComponent {
  @ViewChild('newMember') newMemberRef: ElementRef;
  team = {
    id: '348s-sdls-34k3-4l34',
    name: 'MRC',
    department: {
      id: 'software-dev-department-id',
      name: 'Software Development',
    },
    lead: { id: 'ayman-shebl-employee-id', name: 'Ayman Shebl' },
    members: [
      { id: 'hassan-ramadan-employee-id', name: 'Hassan Ramadan' },
      { id: 'ayman-shebl-employee-id', name: 'Ayman Shebl' },
    ],
  };
  leadId = this.team.lead.id;
  employees = [
    { id: 'hassan-ramadan-employee-id', name: 'Hassan Ramadan' },
    { id: 'ayman-hassan-employee-id', name: 'Ayman Hassan' },
    { id: 'ayman-shebl-employee-id', name: 'Ayman Shebl' },
  ];
  departments = [
    {
      id: 'sw-dev-department-id',
      name: 'Software Development',
      manager: { id: 'ayman-hassan-employee-id', name: 'Ayman Hassan' },
      teams: [
        { id: 'mrc-team-id', name: 'MRC' },
        { id: 'tech-woriorrs-team-id', name: 'Tech Woriorrs' },
        { id: 'another-team-team-id', name: 'another team' },
      ],
      employees: [
        { id: 'ayman-hassan-employee-id', name: 'Ayman Hassan' },
        { id: 'ayman-shebl-employee-id', name: 'Ayman Shebl' },
        { id: 'hassan-ramadan-employee-id', name: 'Hassan Ramadan' },
      ],
    },
  ];
  departmentId = this.team.department.id;

  deleteMember(memberId: string) {
    this.team.members = this.team.members.filter(
      (member) => memberId !== member.id
    );
  }

  addNewMember() {
    const newMember = this.employees.find(
      (member) => member.id === this.newMemberRef.nativeElement.value
    );
    if (newMember) this.team.members.push(newMember);
  }

  getAvailableMembers() {
    return this.employees;
  }
}
