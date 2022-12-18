export interface Species {
  id: number;
  name: string;
  /**
   * The percentage of female pokemon in this species.
   * Equal null for genderless species
   */
  genderRatio: number | null;
}
