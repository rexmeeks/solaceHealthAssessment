import type {Advocate} from "@/app/types/advocate-types";
import AdvocateRow from "@/app/components/AdvocateRow";

type AdvocateTableProps = {
    filteredAdvocates: Array<Advocate>;
}

const AdvocateTable = ({filteredAdvocates}: AdvocateTableProps) => {
    return (
        <table className="my-2">
            <thead>
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>City</th>
                <th>Degree</th>
                <th>Specialties</th>
                <th>Years of Experience</th>
                <th>Phone Number</th>
            </tr>
            </thead>
            <tbody className="[&_td]:border-2 [&_td]:p-1">
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