import React,{useState} from 'react'
import {Row,Container,Col,Form,Table,Card} from 'react-bootstrap';
import './invoice.css'
//import Table1 from './Table'

const Invoice = () => {
    const[state,setState]=useState();
    const[address,setAddress]=useState()

    function handleAddress(e){
      setAddress(e.target.value)
    }
    function handleChange(e){
        setState(e.target.value)
    }


    return (
        <Container fluid className="bg2">
          
            <Row>
              <Col xs={4} >
              <Form.Control className="form_input"type="text" placeholder="set../Timer" onClick={handleChange} />
              <br/><br/>
              <Form.Control className="form_input" type="text" placeholder="Program name" onClick={handleChange}/>
              <br/><br/>
              <Form.Control className="form_input" type="text" placeholder="Teaching Location" onClick={handleChange}/>
              <br/><br/>
              <Form.Control className="form_input" type="text" placeholder="Institute Name"onClick={handleChange} />
              <br/><br/>
              <Form.Control className="form_input" type="text" placeholder="Email"onClick={handleChange} />
              <br/><br/>
              </Col>
              <Col xs={7}>
              <Table bordered striped  hover>
            
            <thead className='bg-info'>
              <tr>
                <th>Date</th>
                <th>Time</th>
                <th>Attendence</th>
               
              </tr>
            </thead>
            <tbody className="sizemin">
              <tr>
                
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                
                <td>{handleChange}</td>
                <td>{handleChange}</td>
                <td>{handleChange}</td>
              </tr>
            
            </tbody>
          </Table>
          
              </Col>
              <Col xs={12}>
                  <p>Send Payment to<input type="text" onChange={handleChange} className="inputChange"/> Dummy text not visible</p>
                  <p>Address:<input className="inputChange" type="text"  onChange={handleAddress}/></p>
                  <div className="data_last">
                  <p>Total Hours:<input className="inputChange1" type="text"  onChange={handleAddress}/></p>@<p><input className="inputChange1" type="text"  onChange={handleAddress}/>Total notvs<input className="inputChange1" type="text"  onChange={handleAddress}/></p>
                  </div>
              </Col>
              <Col xs={12} className='LastCont'>
                <Row>
                  <Col xs={6}>
                   <p>Please Email not visible:<a href="3">dummydata@notvisible</a></p><br/>
                   <p>Or mail To:</p>
                   <p> Yoge By Desing Foundation
                     Po Box 1099
                     text is not visible
                   </p>

                  </Col>
                  <Col xs={6}>
                   <Card>
                     <Card.Header>
                       Office User Only:
                     </Card.Header>
                     <Card.Body className="">
                     <p>Click: <input className="inputChange" type="text"  onChange={handleAddress}/></p>
                     <p>Issue To: <input className="inputChange" type="text"  onChange={handleAddress}/></p>
                     <p>Issue By: <input className="inputChange" type="text"  onChange={handleAddress}/></p>
                     </Card.Body>
                   </Card>
                  </Col>
                </Row>
              </Col>
            </Row>
          
        </Container>
    )
}

export default Invoice
