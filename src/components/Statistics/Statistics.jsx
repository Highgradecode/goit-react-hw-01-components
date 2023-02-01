import PropTypes from "prop-types";
import { StatsSection, StatsTitle, StatsList, StatsItem } from "./Statistics.styled";

export const Statistics = ({title, stats}) => (
<StatsSection>
 {title && <StatsTitle>{title}</StatsTitle>}

  <StatsList>
    {stats.map(({id, label, percentage}) => (
        <StatsItem key={id} label={label}>
            <span className="label">{label}</span>
            <span className="percentage">{percentage}%</span>
        </StatsItem>
    ))}
  </StatsList>
</StatsSection>
)

Statistics.propTypes = {
    title: PropTypes.string, 
    stats: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired
        })
    )
};