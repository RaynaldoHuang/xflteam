import { generateStandings } from "./standings"

export function generateCupStandings() {
  return {
    A: generateStandings("cup", "A"),
    B: generateStandings("cup", "B"),
  }
}

