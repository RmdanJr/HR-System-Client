import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { baseUrl } from '../app.constants';
import { NewTeam, Team } from './team.model';

@Injectable({ providedIn: 'root' })
export class TeamsService {
  constructor(private httpClient: HttpClient) {}

  public getAllTeams() {
    return this.httpClient.get<Team[]>(`${baseUrl}/teams`);
  }

  public getTeam(id: string) {
    return this.httpClient.get<Team>(`${baseUrl}/teams/${id}`);
  }

  public addTeam(team: NewTeam) {
    return this.httpClient.post<boolean>(`${baseUrl}/teams`, team);
  }

  public editTeam(team: Team, id: string) {
    return this.httpClient.put<boolean>(`${baseUrl}/teams/${id}`, team);
  }

  public deleteTeam(id: string) {
    return this.httpClient.delete<boolean>(`${baseUrl}/teams/${id}`);
  }
}
