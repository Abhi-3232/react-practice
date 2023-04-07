import { useEffect } from 'react';
import Card from '../Components/Card';
function Useeffect(){

    useEffect(()=>{
        console.log("hello world")
    },[]);

    return(
        <Card imageURL={"https://images.panda.org/assets/images/pages/welcome/orangutan_1600x1000_279157.jpg"} title={"UseEffect"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit ipsam neque amet provident nobis, dignissimos aliquam cupiditate error"}/>
    )
}
export default Useeffect;