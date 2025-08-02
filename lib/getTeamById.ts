// lib/teamUtils.ts
import { teams } from "./teams"

export function getTeamById(id: string) {
  return teams.find((team) => team.id === id)
}
