import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { baseUrl } from '../app.constants';
import { Team } from './team.model';

@Injectable({ providedIn: 'root' })
export class TeamsService {
  constructor(private httpClient: HttpClient) {}

  public getAllTeams() {
    return this.httpClient.get<Team[]>(`${baseUrl}/teams`);
  }

  public getTeam(id: string) {
    return this.httpClient.get<Team>(`${baseUrl}/teams/${id}`);
  }
}
