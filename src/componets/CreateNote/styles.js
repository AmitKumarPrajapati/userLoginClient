import styled from 'styled-components';

export const StyledNote = styled.div`
    .note{
        width:500px;
        border: 1px solid yellow; 
        padding: 20px;
        margin-left:30%;
        text-align: center;
        background-color: #c3cfd6;
        
    }
    input{
        width: 300px;
        height: 20px;
        padding: 10px;
        margin: 5px;
        font-size: 18px;
        margin-left: 30px;
    }
    .submit-btn{
        width: 100px;
        margin: 15px;
        padding: 6px;
        font-size: 15px;
        white-space: nowrap;
    }
    .reset-btn{
        margin-left: 50px;
        width: 100px;
        margin: 15px;
        padding: 6px;
        font-size: 15px;
    }
`;
