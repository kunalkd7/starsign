import { useState } from "react";
import { Container, Row, Col, Form, FloatingLabel, Button } from "react-bootstrap";
import Img from './img.png'
import { validEmail, validName } from './regex.js';
import Horoscopesection from "./Horoscopesection.js";


function Formsection(props) {


    const [state, setstate] = useState({
        name: "",
        email: "",
        sign: "Aries",
        day: "Today"
    })

    const [nameErr, setNameErr] = useState("");
    const [emailErr, setEmailErr] = useState("");

    const zodiacsign = ["Aries", "Taurus", "Gemini", "Capricorn", "Aquarius", "Pisces", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius"];

    const [horoscope, sethoroscope] = useState("");

    const [fname, setfname] = useState("");
    const [fsign, setfsign] = useState("");
    const [fdate, setfdate] = useState("");
    const [fmood, setfmood] = useState("");

    const onchange = (e) => {
        setNameErr("");
        setEmailErr("");

        setstate({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    const checkrequired = (state) => {

        let flag = true;

        if (state.name === "") {
            setNameErr("Name is required");
            flag = false;
        }

        if (state.email === "") {
            setEmailErr("Email is required");
            flag = false;
        }

        return flag;
    }

    const checknameandemail = (state) => {
        let flag = true;

        if (!validName.test(state.name)) {
            setNameErr("please enter a valid Name");
            flag = false;
        }

        if (!validEmail.test(state.email)) {
            setEmailErr("please enter a valid Email");
            flag = false;
        }

        return flag;
    }


    const onsubmit = (e) => {
        e.preventDefault();

        if (checkrequired(state)) {
            if (checknameandemail(state)) {
                fetch(`https://aztro.sameerkumar.website/?sign=${state.sign}&day=${state.day}`, {
                    method: 'POST'
                }).then(response => response.json())
                    .then(data => {
                        console.log(data)
                        sethoroscope(data.description)
                        setfname(state.name)
                        setfsign(state.sign)
                        setfdate(data.current_date)
                        setfmood(data.mood)
                    })
            };
        };
    }

    return <>
        {/* {console.log("render")} */}

        <Container fluid
            style=
            {{
                marginTop: '7px',
                backgroundColor: props.darktheme ? '#4B5D67' : '#FEE30E',
                borderTop: "5px solid lightgrey",
                borderBottom: "5px solid lightgrey"
            }}>

            <Container>
                <Row style={{ paddingTop: '40px', paddingBottom: '40px' }}>
                    <Col md >
                        <div style={{textAlign : 'center'}}>
                        <h1>Check your horoscope</h1>
                        </div>
                        <Form style={{ marginTop: "30px" }} onSubmit={onsubmit}>
                            <Row>
                                <Col >
                                    <FloatingLabel
                                        controlId="floatingInput"
                                        label="Enter your Name"
                                        className="mb-3" >

                                        <Form.Control type="name" placeholder="name@example.com" name="name" onChange={onchange} />
                                        <p style={{ color: 'darkred', paddingLeft: '10px' }}>{nameErr === "" ? null : nameErr}</p>
                                    </FloatingLabel>
                                </Col>

                                <Col>
                                    <FloatingLabel
                                        controlId="floatingInput"
                                        label="Enter your Email"
                                        className="mb-3" >
                                        <Form.Control type="name" placeholder="name@example.com" name="email" onChange={onchange} />
                                        <p style={{ color: 'darkred', paddingLeft: '10px' }} >{emailErr === "" ? null : emailErr}</p>
                                    </FloatingLabel>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <FloatingLabel controlId="floatingSelect" label="Select zodiac sign" name="sign" onChange={onchange} >
                                        <Form.Select aria-label="Floating label select example" name="sign">

                                            {zodiacsign.map((data, key) => (
                                                <>
                                                    <option> {data} </option>
                                                </>
                                            ))}

                                        </Form.Select>

                                    </FloatingLabel>
                                </Col>
                                <Col>
                                    <FloatingLabel controlId="floatingSelect" label="Select Day" onChange={onchange} >
                                        <Form.Select aria-label="Floating label select example" name="day">

                                            <option >Today</option>
                                            <option >Tomorrow</option>
                                            <option >Yesterday</option>
                                        </Form.Select>

                                    </FloatingLabel>
                                </Col>
                            </Row>
                            <Row>
                                <Col style={{ paddingTop: '15px' }} >
                                    <Button type="submit" style={{ backgroundColor: 'grey' }} >Submit</Button>
                                </Col>

                            </Row>

                        </Form>

                    </Col>


                    <Col md>
                        <div className="imgres" >
                            <img src={Img} style={{ width: '260px', height: '250px' }} alt = "" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>
        <Horoscopesection horoscope={horoscope} name={fname} sign={fsign} date={fdate} mood={fmood} darktheme={props.darktheme} />
    </>
}

export default Formsection;