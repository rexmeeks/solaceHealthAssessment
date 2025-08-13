import {Advocate} from "@/app/types/advocate-types";

type AdvocateRowProps = {
    advocate: Advocate;
}

const AdvocateRow = ({advocate}: AdvocateRowProps) => {
    return (
        <tr className="border">
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
            <td><a href={`tel:${advocate.phoneNumber}`}>{advocate.phoneNumber}</a></td>
        </tr>
    )
}

export default AdvocateRow;