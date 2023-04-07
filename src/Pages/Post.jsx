import Card from '../Components/Card';
import {Box,styled} from '@mui/material'

const MainContainer = styled(Box)({
        display:"flex",
        flexWrap:"wrap"
})


function Post(){
const array = [{title:"Keshav", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia nesciunt vel, corrupti nam evenietr voluptas et eius.", imageURL:"https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg"},
{title:"Abhishek", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia nesciunt vel, corrupti nam evenietr voluptas et eius.", imageURL:"https://media.gettyimages.com/id/1295925715/photo/silhouette-of-building-against-sky-at-sunset.jpg?s=612x612&w=gi&k=20&c=U6CtYuNkRk_cy491AMVwC6SKqqoyKbf1F1Fb4Eg25lQ="},
{title:"Nikhil", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia nesciunt vel, corrupti nam evenietr voluptas et eius.", imageURL:"https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547__480.jpg"}, 
{title:"Ranjit", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia nesciunt vel, corrupti nam evenietr voluptas et eius.", imageURL:"https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=612x612&w=0&k=20&c=vcIjhwUrNyjoKbGbAQ5sOcEzDUgOfCsm9ySmJ8gNeRk="},
{title:"Shubham", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia nesciunt vel, corrupti nam evenietr voluptas et eius.", imageURL:"https://images.ctfassets.net/hrltx12pl8hq/a2hkMAaruSQ8haQZ4rBL9/8ff4a6f289b9ca3f4e6474f29793a74a/nature-image-for-website.jpg?fit=fill&w=480&h=320"}, 
{title:"Bhaskar", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia nesciunt vel, corrupti nam evenietr voluptas et eius.", imageURL:"https://1.bp.blogspot.com/-kK7Fxm7U9o0/YN0bSIwSLvI/AAAAAAAACFk/aF4EI7XU_ashruTzTIpifBfNzb4thUivACLcBGAsYHQ/s1280/222.jpg"},
{title:"Keshav", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia nesciunt vel, corrupti nam evenietr voluptas et eius.", imageURL:"https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg"},
{title:"Abhishek", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia nesciunt vel, corrupti nam evenietr voluptas et eius.", imageURL:"https://media.gettyimages.com/id/1295925715/photo/silhouette-of-building-against-sky-at-sunset.jpg?s=612x612&w=gi&k=20&c=U6CtYuNkRk_cy491AMVwC6SKqqoyKbf1F1Fb4Eg25lQ="},
{title:"Nikhil", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia nesciunt vel, corrupti nam evenietr voluptas et eius.", imageURL:"https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547__480.jpg"}]

    return(
        <>
        <MainContainer>
            {array.map((x) =>{
                return <Card title={x.title} description={x.description} imageURL={x.imageURL }/>
            })}
        </MainContainer> 
        </>
    )
}

export default Post; 