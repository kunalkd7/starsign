import { Container, Row, Col } from "react-bootstrap";


function Horoscopesection(props) {
    return <>
        <Container>
            {props.name ? <>
                <Row style={{ paddingTop: '50px' }}>
                    <Col md={4} style={{ textAlign: 'right', border: '5px solid lightgrey' }} >
                        <div style={{ padding: "20px" }}>
                            <h5 style={{ color: props.darktheme ? 'white' : 'black' }}>  Zodiac-Sign : {props.sign}</h5>
                            <h5 style={{ color: props.darktheme ? 'white' : 'black' }}>{props.date}</h5>
                            <h5 style={{ color: props.darktheme ? 'white' : 'black' }}> Mood : {props.mood}</h5>
                        </div>
                    </Col>
                    <Col style={{ border: '5px solid lightgrey' }} >
                        <div style={{ padding: "17px" }}>
                            <h4 style={{ color: props.darktheme ? 'white' : 'black' }}> Hi {props.name}   </h4>
                            <p style={{ color: props.darktheme ? 'white' : 'black' , fontWeight : '600' , fontFamily: 'sans-serif' }}> {props.horoscope}  </p>
                        </div>

                    </Col>
                </Row>
            </>
                : null
            }
        </Container>
    </>
}

export default Horoscopesection;