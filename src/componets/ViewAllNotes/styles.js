import styled from 'styled-components';

export const StyledTable = styled.div`
    table{
        width:100%;
        border: 1px solid black; 
        border-collapse: collapse;
        margin:10px;
    }
    td,th{
        border: 1px solid black;
        text-align: center;
    }
    .action{
        display: inline-block;
        width: 50px;
        height: 25px;
        color: blue;
        text-align: center;
        padding-top:5px;
        padding-left: 10px;
    }
`;
