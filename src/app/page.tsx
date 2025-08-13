"use client";

import { useEffect, useState } from "react";
import { Advocate } from "@/app/types/advocate-types";
import AdvocateTable from "@/app/components/AdvocateTable";
import Header from "@/app/components/Header";
import Loading from "@/app/components/Loading";
import { applyFilters } from "@/app/utils/advocateFilter";
import EmptyState from "@/app/components/EmptyState";

// got rid of the searching for as I think it's redundant considering if when the user types the table changes
// it should be enough to communicate to the user that what's in the box is what they're searching for
export default function Home() {
  const [advocates, setAdvocates] = useState<Array<Advocate> | []>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [yearsFilter, setYearsFilter] = useState<string>('');
  const [filteredAdvocates, setFilteredAdvocates] = useState<Array<Advocate>>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    console.log("fetching advocates...");
    fetch("/api/advocates").then((response) => {
      response.json().then((jsonResponse) => {
        setAdvocates(jsonResponse.data);
        setFilteredAdvocates(jsonResponse.data);
        setIsLoading(false);
      });
    });
  }, []);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value;
    setSearchTerm(searchTerm.toLocaleLowerCase());

    console.log("filtering advocates...");
    const filtered = applyFilters(advocates, searchTerm.toLocaleLowerCase(), yearsFilter);
    setFilteredAdvocates(filtered);
  };

  const onYearsFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newYearsFilter = e.target.value;
    setYearsFilter(newYearsFilter);

    const filtered = applyFilters(advocates, searchTerm, newYearsFilter);
    setFilteredAdvocates(filtered);
  };

  const onClick = () => {
    console.log(advocates);
    setSearchTerm('');
    setYearsFilter('');
    setFilteredAdvocates(advocates);
  };

  return (
    <>
      <Header />
      <main style={{ margin: "24px" }}>
        <div>
        <p>Search</p>
        <input style={{ border: "1px solid black" }} onChange={onChange} value={searchTerm}/>
        <button className="ml-1 p-1 border hover:bg-[#acdcd0]" onClick={onClick}>Reset Search</button>
        <div className="mt-2">
          <label htmlFor="years-filter" className="mr-2">Years of Experience:</label>
          <select 
            id="years-filter"
            value={yearsFilter}
            onChange={onYearsFilterChange}
            className="border border-gray-300 p-1"
          >
            <option value="">All</option>
            <option value="0-5">0-5 years</option>
            <option value="5-10">5-10 years</option>
            <option value="10+">10+ years</option>
          </select>
        </div>
      </div>
      {(() => {
        if (isLoading) return <Loading />;
        if (filteredAdvocates.length === 0 && (searchTerm || yearsFilter)) return <EmptyState onReset={onClick} />;
        return <AdvocateTable filteredAdvocates={filteredAdvocates}/>;
      })()}
      <br />
      <br />
    </main>
    </>
  );
}
