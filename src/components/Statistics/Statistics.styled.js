import styled from "@emotion/styled";

const StatsSection = styled.section`
margin: 30px auto;

width: 450px;
max-height: 170px;

box-shadow: 0 3px 7px rgba(0, 0, 0, 0.3);
`

const StatsTitle = styled.h2`
display: flex;
justify-content: center;
margin: 30px auto;
text-transform: uppercase;
`
const StatsList = styled.ul`
    display: flex;
    justify-content: space-between;
    height: 82px;
`

const StatsItem = styled.li`
width: calc(100%/5);
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

background-color: ${(props) => {
    switch (props.label) {
        case '.docx':
            return '#4dc6f5'
        case '.pdf':
            return '#a53cee'
        case '.mp3':
            return '#e64c64'
        case '.psd':
            return '#20b8c5'
        default: return 'grey';
    }
}
};
`

export { StatsSection, StatsTitle, StatsList, StatsItem }