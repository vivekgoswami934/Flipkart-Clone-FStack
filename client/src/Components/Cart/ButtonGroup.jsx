import { Box, Button ,ButtonGroup,styled } from "@mui/material"



const ButtonGroupComp = styled(ButtonGroup)`
  margin-top: 30px;
`;

const ButtonStyled = styled(Button)`
  border-radius: 50%;
`;


const ButtonGroups = () =>{
    return (
        <ButtonGroupComp>
            <ButtonStyled>-</ButtonStyled>
            <ButtonStyled>1</ButtonStyled>
            <ButtonStyled>+</ButtonStyled>
        </ButtonGroupComp>
    )
}

export default ButtonGroups;