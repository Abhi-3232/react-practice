import Card from '../Components/Card';
import {Box,styled} from '@mui/material'

const MainContainer = styled(Box)({
        display:"flex",
        flexWrap:"wrap"
})


function Post(){
const array = [{title:"Keshav", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia nesciunt vel, corrupti nam evenietr voluptas et eius.", imageURL:"https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg"}]

    return(
        <>
        <MainContainer>
            {array.map((x) =>{
                return <Card title={"Lizard"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia nesciunt vel, corrupti nam evenietr voluptas et eius."} imageURL={"https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg"}/>
            })}
            
        </MainContainer>
        
        </>
    )
}

export default Post;