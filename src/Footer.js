import { Container } from "react-bootstrap";
import sign from './signs.jpg'

function Footer() {

    return<>
   <Container>
     <img src = {sign}  style = {{width : '100%', paddingTop:"50px"}}/>
   </Container>
    
    </>
}

export default Footer;