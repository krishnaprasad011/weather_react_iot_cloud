import React, { useEffect,useState } from 'react'
import {db} from './firebase'
import {ref,onValue} from 'firebase/database'
import { Row,Col,Table } from 'react-bootstrap';
import { FaLocationArrow, FaClock,FaPercentage, FaTemperatureLow, FaCloudRain, FaSun, FaCloudSun } from 'react-icons/fa';

function Home() {
    const [todos, settodos] = useState([]);
    useEffect(()=>{
        onValue(ref(db), (snapshot)=>{
            settodos([]);
            const data = snapshot.val();
            if(data!==null){
                Object.values(data).map((todo)=>{
                    settodos((oldArray)=>[...oldArray, todo]);
                    console.log(todos)
                });
            }
        });
    },[]);
    return (
        <>
            <Row className="pb-4 pt-2 text-primary">
                <Col >
                    <h1 className="display-3"> Basavanagudi, Bengaluru <FaLocationArrow /></h1>
                </Col>
            </Row>
            <Row className="pb-4 pt-2 text-secondary">
                <Col >
                    <h1 className="display-6"><FaClock/> {new Date().toLocaleString() + ""}</h1>
                </Col>
            </Row>
            <Row className="mb-4 mt-4">
                <Col xs={6}><span className="display-1"> <FaTemperatureLow/> {todos[4]} <sup>&#8451;</sup> |  {todos[5]} <sup>&#8457;</sup></span></Col>
                <Col> 
                <span className="display-1">
                        {
                            parseInt(todos[3]) > 1 ?
                                <><FaCloudRain className="text-primary"/><span className="display-6"> it&#39;s raining</span></>
                                :
                                <><FaCloudSun className="text-warning" /> </>

                        }
                </span>
                
                </Col>
                <Col>
                    <h2 className="display-6">Humidity {todos[0]}&#37; </h2>
                </Col>
            </Row>
            <hr />

            <Row className="mb-4 mt-5">
                
                <Col xl={6}>
                    <h2 className="display-6 mb-4">Pressure</h2>
                    <Table responsive striped bordered hover >
                        {/* <thead>
                            <tr>
                                <th colSpan={2}>Pressure</th>
                            </tr>
                        </thead> */}
                        <tbody className="fs-4">
                            <tr>
                                <td>Absolut Pressure</td>
                                <td>{todos[1]} mb</td>
                            </tr>
                            <tr>
                                <td>Relative (sea-level) Pressure</td>
                                <td>{todos[2]} mb</td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
                {/* <Col>
                    <h2 className="display-6">Rain: {todos[2]}</h2>
                </Col> */}
            </Row>
            <Row>
                
                <Col>
                </Col>
            </Row>
            {/* <h1>Home</h1> */}
            

            {/* {todos.map((todo)=>(
                    <p>{todo}</p>
                ))
                } */}
        </>
    )
}

export default Home
