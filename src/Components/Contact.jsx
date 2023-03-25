import { Typography,Box,TextField,styled } from "@mui/material";

const ParentContainer = styled(Box)({
    display:"flex",
    justifyContent:"center",
    flexDirection:"column"
});

const FormContainer = styled(Box)({

});

const StyledField = styled(TextField)({
    backgroundColor:"red"
});

function Contact(){
    <ParentContainer>
        <FormContainer>
            <StyledField label="Name" variant="outlined" size="small"/>
            <StyledField label="Last Name" variant="outlined" size="small"/>
            <StyledField label="Email" variant="outlined" size="small"/>
            <StyledField label="Contact" variant="outlined" size="small"/>
        </FormContainer>
    </ParentContainer>
}

export default Contact;