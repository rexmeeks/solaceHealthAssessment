import { Advocate } from "@/app/types/advocate-types";

// broke this out into a helper file for easier readability and separation of concerns
const searchTermFoundInSpecialties = (specialties: Array<string>, searchTerm: string): boolean => {
  return specialties.some(specialty => specialty.toLocaleLowerCase().includes(searchTerm));
}

const applySearchFilter = (advocates: Array<Advocate>, searchTerm: string): Array<Advocate> => {
  if (!searchTerm) return advocates;

  return advocates.filter((advocate) => {
    return (
        advocate.firstName.toLocaleLowerCase().includes(searchTerm) ||
        advocate.lastName.toLocaleLowerCase().includes(searchTerm) ||
        advocate.city.toLocaleLowerCase().includes(searchTerm) ||
        advocate.degree.toLocaleLowerCase().includes(searchTerm) ||
        searchTermFoundInSpecialties(advocate.specialties, searchTerm)
    );
  });
}

const applyYearsFilter = (advocates: Array<Advocate>, yearsFilter: string): Array<Advocate> => {
  if (!yearsFilter) return advocates;

  const ranges: Record<string, (years: number) => boolean> = {
    "0-5": (years: number) => years >= 0 && years <= 5,
    "5-10": (years: number) => years > 5 && years <= 10,
    "10+": (years: number) => years > 10
  };

  return advocates.filter((advocate) => ranges[yearsFilter](advocate.yearsOfExperience));
}

export const applyFilters = (advocates: Array<Advocate>, searchTerm: string, yearsFilter: string): Array<Advocate> => {
  const searchFiltered = applySearchFilter(advocates, searchTerm);
  return applyYearsFilter(searchFiltered, yearsFilter);
}