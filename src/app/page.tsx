"use client";

import { useEffect, useState } from "react";
import {Advocate} from "@/app/types/advocate-types";
import AdvocateTable from "@/app/components/AdvocateTable";

// got rid of the searching for as I think it's redundant considering if when the user types the table changes
// it should be enough to communicate to the user that what's in the box is what they're searching for
export default function Home() {
  const [advocates, setAdvocates] = useState<Array<Advocate> | []>([]);
  const [searchTerm, setSearchTerm] = useState<string | undefined>();
  const [filteredAdvocates, setFilteredAdvocates] = useState<Array<Advocate>>([]);

  useEffect(() => {
    console.log("fetching advocates...");
    fetch("/api/advocates").then((response) => {
      response.json().then((jsonResponse) => {
        setAdvocates(jsonResponse.data);
        setFilteredAdvocates(jsonResponse.data);
      });
    });
  }, []);

  // todo speed this up potentially, but for starters this should be fine
  const searchTermFoundInSpecialties = (specialties: Array<string>, searchTerm: string): boolean => {
    return specialties.some(specialty => specialty.toLocaleLowerCase().includes(searchTerm));
  }

  const onChange = (e) => {
    const searchTerm = e.target.value;
    // don't even think we necessarily need this since I removed it from displaying
    setSearchTerm(searchTerm.toLocaleLowerCase());

    // todo maybe separate out the years of experience
    console.log("filtering advocates...");
    const filteredAdvocates = advocates.filter((advocate) => {
      return (
        advocate.firstName.toLocaleLowerCase().includes(searchTerm) ||
        advocate.lastName.toLocaleLowerCase().includes(searchTerm) ||
        advocate.city.toLocaleLowerCase().includes(searchTerm) ||
        advocate.degree.toLocaleLowerCase().includes(searchTerm) ||
        searchTermFoundInSpecialties(advocate.specialties, searchTerm) ||
        (!Number.isNaN(searchTerm) && advocate.yearsOfExperience === Number(searchTerm))
      );
    });

    setFilteredAdvocates(filteredAdvocates);
  };

  const onClick = () => {
    console.log(advocates);
    setSearchTerm(undefined);
    setFilteredAdvocates(advocates);
  };

  return (
    <main style={{ margin: "24px" }}>
      <h1>Solace Advocates</h1>
      <br />
      <br />
      <div>
        <p>Search</p>
        <input style={{ border: "1px solid black" }} onChange={onChange} value={searchTerm}/>
        <button onClick={onClick}>Reset Search</button>
      </div>
      <AdvocateTable filteredAdvocates={filteredAdvocates}/>
      <br />
      <br />
    </main>
  );
}
