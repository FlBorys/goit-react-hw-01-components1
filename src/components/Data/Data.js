import { DataDiv, DataTitle, Data, DataList, DataText } from "./Data.styled";
export const Statistics = ({ title, stats }) => {
    return (
<DataDiv>
            {title && (<DataTitle>{title}</DataTitle>)}
            <DataList>
            {stats.map(stat => (
       <li className="item" key={stat.id}>
            <DataText>{stat.label}</DataText>
            <span className="percentage">{stat.percentage}%</span>
        </li >
            ))}</DataList>
</DataDiv>



    )    
}
