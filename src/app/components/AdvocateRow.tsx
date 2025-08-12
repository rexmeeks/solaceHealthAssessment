import {Advocate} from "@/app/types/advocate-types";

type AdvocateRowProps = {
    advocate: Advocate;
}

// todo maybe change key, but this is probably fine
const AdvocateRow = ({advocate}: AdvocateRowProps) => {
    return (
        <tr>
            <td>{advocate.firstName}</td>
            <td>{advocate.lastName}</td>
            <td>{advocate.city}</td>
            <td>{advocate.degree}</td>
            <td>
                {advocate.specialties.map((s) => (
                    <div key={s}>{s}</div>
                ))}
            </td>
            <td>{advocate.yearsOfExperience}</td>
            <td>{advocate.phoneNumber}</td>
        </tr>
    )
}

export default AdvocateRow;