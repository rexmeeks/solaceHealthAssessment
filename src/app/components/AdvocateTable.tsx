import type {Advocate} from "@/app/types/advocate-types";
import AdvocateRow from "@/app/components/AdvocateRow";

type AdvocateTableProps = {
    filteredAdvocates: Array<Advocate>;
}

const AdvocateTable = ({filteredAdvocates}: AdvocateTableProps) => {
    return (
        <table>
            <thead>
            <th>First Name</th>
            <th>Last Name</th>
            <th>City</th>
            <th>Degree</th>
            <th>Specialties</th>
            <th>Years of Experience</th>
            <th>Phone Number</th>
            </thead>
            <tbody>
            {filteredAdvocates.map((advocate) => {
                return (
                    <AdvocateRow key={advocate.id} advocate={advocate}/>
                );
            })}
            </tbody>
        </table>
    );
}

export default AdvocateTable;