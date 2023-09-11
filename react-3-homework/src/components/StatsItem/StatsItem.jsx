function StatsItem({id, label, percentage}){
return(
<li className="item" id={id}>
<span className="label">
{label}
</span>
<span className="percentage">
{percentage}
</span>
</li>
);
}
export default StatsItem;