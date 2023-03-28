import { Typography,Box,TextField,styled,Button} from "@mui/material";

const ParentContainer = styled(Box)({
    width:"100%",
});

const FormContainer = styled("form")({ 
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    flexDirection:"column",
    padding:"10px",
    border:"2px solid grey",
    borderRadius:"15px 0px 15px 0px",
    width:"25%",
    margin:"1%"
});


const StyledField = styled(TextField)({
    width:"100%",
    margin:"5px"
})

function Contact(){
    var data = {}; 
    function onFormSubmit(e){
        e.preventDefault();
        console.log(data)
    }

    function onChange(evt){
        data[evt.target.name] = evt.target.value;
        // name=evt.target.name;
        // value=evt.target.value;
        // console.log(evt.target.name, evt.target.value)
    }

    return(
    <ParentContainer>
        <FormContainer onSubmit={onFormSubmit}>
                <Typography variant="h5" sx={{color:"grey"}}>Form</Typography>
                <StyledField label="Name" name="Name" variant="outlined" size="small" onChange={onChange}/>
                <StyledField label="Last Name" name="Last Name" variant="outlined" size="small"  onChange={onChange}/>
                <StyledField label="Email" name="Email" variant="outlined" size="small"  onChange={onChange}/>
                <StyledField label="Contact" name="Contact" variant="outlined" size="small"  onChange={onChange}/>
                <StyledField label="Discription" name="Discription" variant="outlined" size="small" multiline rows={3}  onChange={onChange}/>
                <Button variant="contained" size="small" sx={{marginTop:"5px"}} type="submit">Submit</Button>
        </FormContainer>
    </ParentContainer>
    )
}

export default Contact;