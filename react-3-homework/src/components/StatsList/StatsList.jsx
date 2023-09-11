import StatsItem from "../StatsItem/StatsItem";
import data from "../data.json"
function StatsList(){
return(
<ul>
    {data.map((item) => {
       return <StatsItem key = {item.id} id = {item.id} label = {item.label} percentage = {item.percentage}/>
    })}
</ul>
);
};
export default StatsList;