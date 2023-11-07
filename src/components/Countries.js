import {data} from "../data";
const Countries = ({onchange}) => {
    return (
        <select onChange={onchange} >
            {data.map((value,key)=>(
              
                <option key={key} value={value.code}>{value.country}</option>
            ))}
        </select>

    )
}
export default Countries;
