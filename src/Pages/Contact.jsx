import { Typography,Box,TextField,styled,Button} from "@mui/material";

const ParentContainer = styled(Box)({
    
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
        <FormContainer onSubmit={onFormSubmit} >
                <Typography variant="h5" sx={{color:"grey"}}>Form</Typography>
                <StyledField label="Name" name="Name" variant="outlined" size="small" onChange={onChange}/>
                <StyledField label="Last Name" name="Last Name" variant="outlined" size="small"  onChange={onChange}/>
                <StyledField label="Email" name="Email" variant="outlined" size="small"  onChange={onChange}/>
                <StyledField label="Contact" name="Contact" variant="outlined" size="small"  onChange={onChange}/>
                <StyledField label="Discription" name="Discription" variant="outlined" size="small" multiline rows={3}  onChange={onChange}/>
                <Button variant="contained" size="small" sx={{marginTop:"5px"}} type="submit">Submit</Button>
        </FormContainer>
        <Typography variant="body1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum eos possimus vitae eligendi voluptatum amet, ex, quibusdam laboriosam tempora quae impedit ea earum ullam exercitationem a consequuntur accusamus hic fugiat, quis nisi blanditiis nihil sunt expedita ratione. Tenetur natus ullam accusamus consequuntur tempora laboriosam obcaecati quae. Minus dolores sunt possimus, repellat quae amet, sequi eius tempore maiores dolorem accusantium. Dolor expedita similique dicta ipsa? Error, ratione enim sit quaerat neque, ipsum mollitia sunt laboriosam necessitatibus vitae porro unde obcaecati? Architecto beatae impedit distinctio saepe tempore! Dicta saepe labore facere fugit perspiciatis corrupti, quasi eligendi eum natus accusantium omnis officia suscipit velit expedita animi, est sit quam eius nisi consequatur! Omnis voluptatum officia ipsam repudiandae porro saepe consectetur culpa minima! Voluptas placeat sint aspernatur, saepe rem incidunt itaque officia voluptatibus reiciendis commodi? Deserunt, eveniet, minus dolore enim iure quisquam, libero quibusdam praesentium magnam officiis ipsum fugit dicta cumque sed obcaecati cupiditate quos. Voluptatem aliquam officiis beatae, odit consequatur, temporibus iste vero explicabo dolor dolore repellat consectetur mollitia possimus, sed reprehenderit veniam provident? Laudantium, consequuntur vitae nemo eligendi enim sunt assumenda adipisci ipsam voluptate laboriosam quibusdam odit est voluptatibus explicabo alias, molestiae molestias facere quae, illo delectus aperiam nam recusandae autem distinctio? Quia illo odio aut quisquam modi id obcaecati magni quos quo voluptas, laudantium ratione, ullam, praesentium eaque possimus dicta nihil assumenda. Ipsum enim earum illo minus blanditiis dignissimos error laudantium vitae nihil dolorem repellendus mollitia nesciunt accusantium at repellat, neque cumque placeat totam voluptatibus illum iure quibusdam! Commodi esse in nesciunt voluptates quas iusto dolorum impedit corrupti vel! Qui accusamus laborum iste mollitia, suscipit earum? Harum numquam aliquid ea unde provident vitae magni molestias quia pariatur consectetur est, ducimus, corporis, rerum perferendis ipsum maxime ex. Vitae officia, excepturi dicta dignissimos debitis consequuntur fuga! Corrupti, error veritatis ut vero, quasi rem facilis non neque illum ipsa odio dolorum enim eius porro illo eveniet perspiciatis explicabo ducimus, eligendi ad? Dolorum quam illo odio quaerat expedita maxime recusandae architecto labore! Expedita fugiat consequuntur dolorem earum eaque enim dolor rerum, non corrupti nemo cupiditate nulla quasi fugit id molestias tempore quae asperiores laudantium ipsum natus! Voluptate porro, eum quod neque corporis nesciunt corrupti saepe, dolores, fugit reprehenderit ducimus quas ratione debitis quidem voluptates quasi magnam. Alias reprehenderit, vel fugit voluptatem, magni et nihil velit maiores blanditiis iste soluta dolorem labore dolores hic, aliquam minus optio dicta corrupti nam consequatur voluptates iusto. Quis, accusamus sint.
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem nesciunt incidunt quaerat aut sit, temporibus cumque fugit neque sapiente ratione, earum maxime sunt? Labore, dolorum, debitis necessitatibus et laboriosam commodi pariatur deserunt, alias veritatis accusantium quidem id aliquid dicta. Est inventore earum quas velit obcaecati doloremque iusto, non, perspiciatis error, numquam adipisci tenetur recusandae. Dolores veritatis, illo sed nisi dolorum accusamus quos incidunt vel labore quo ipsam est. Adipisci qui velit nam amet rerum quis id corrupti. Molestiae consectetur cupiditate animi at optio odit vitae exercitationem porro, cumque nesciunt non facere, rem labore! Labore harum exercitationem facere inventore quaerat alias asperiores sit voluptatum earum reprehenderit? Vero fuga est quam suscipit maxime doloremque culpa voluptatibus libero, deleniti, iusto esse nulla dignissimos? Nulla debitis, molestiae laborum nesciunt totam atque amet obcaecati, vitae modi, esse alias minus quasi consequatur? Odit vero voluptates quidem mollitia facilis quasi laudantium dignissimos nam, illum ab ex nulla nesciunt repellat ad doloremque fugit! Repudiandae reiciendis velit laboriosam cum suscipit, maiores magni nobis quo corrupti vitae voluptatibus pariatur dignissimos, exercitationem assumenda nostrum debitis ratione, esse iusto rerum eos! Iusto totam cumque nemo nesciunt labore sapiente eveniet ullam unde tenetur impedit in officiis vel, asperiores sit consectetur, minima eaque dicta suscipit cum provident inventore! Doloremque harum quisquam laboriosam ratione quis unde, corporis vero accusantium, dolor, maiores accusamus consequuntur optio autem nihil blanditiis assumenda? Distinctio neque nostrum perspiciatis praesentium dolorum, quae vero necessitatibus! Aut vitae rem ut hic unde iste nulla blanditiis quidem veritatis odio ipsa quod, vero tenetur enim quisquam. Minus debitis itaque eius perferendis quo non eligendi nulla fugit necessitatibus ipsa obcaecati dicta vel, aliquid, blanditiis praesentium, enim assumenda dolorum minima soluta voluptate? Doloribus cupiditate rem nobis corrupti vitae repellendus nam fuga eaque in iste sit ipsum sed id dolore consequuntur sapiente magni, officia illo alias explicabo veritatis. Sit aperiam tempora quas odit cum. Qui corrupti saepe a laborum aliquid obcaecati provident adipisci, voluptatibus optio dolorum aliquam, maiores debitis hic doloribus, non numquam cumque perferendis quisquam alias animi repudiandae. Voluptatum, labore delectus natus cum quam, nesciunt consequuntur ea corporis ad rerum adipisci pariatur, sed impedit exercitationem voluptatem? Et voluptatibus facere similique repellat tempora nulla unde rerum ratione. Perferendis omnis delectus odit quia quibusdam vel, aliquam facere quo quae ipsum, iste amet officiis odio dolore tempora vero nesciunt, et modi expedita! Commodi vero eos repudiandae nesciunt. Laboriosam animi architecto nemo officia quaerat iure qui, possimus assumenda, dolore, doloribus repellendus iusto.</Typography>
    </ParentContainer>
    )
}

export default Contact;