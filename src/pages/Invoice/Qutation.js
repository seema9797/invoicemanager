import React,{useState,useEffect} from 'react'
import {Card,Container,Row,Col} from 'react-bootstrap';
import './Qutation.css'
import ContentEditable from "react-contenteditable";
//import { useTable, usePagination } from 'react-table'
import * as ReactBootStrap from "react-bootstrap";

const EditableCell = ({
    value: initialValue,
    row: { index },
    column: { id },
    updateMyData, // This is a custom function that we supplied to our table instance
  }) => {
    // We need to keep and update the state of the cell normally
    const [value, setValue] = React.useState(initialValue)
  
    const onChange = e => {
      setValue(e.target.value)
    }
  
    // We'll only update the external data when the input is blurred
    const onBlur = () => {
      updateMyData(index, id, value)
    }
  
    // If the initialValue is changed external, sync it up with our state
    React.useEffect(() => {
      setValue(initialValue)
    }, [initialValue])
  
    return <input value={value} onChange={onChange} onBlur={onBlur} />
  }
  
  // Set our editable cell renderer as the default Cell renderer
  const defaultColumn = {
    Cell: EditableCell,
  }

const Qutation = () => {
    const[date,setDate]=useState("22-08-2017")
    const[qutation,setQutation]=useState("8623/2017.18")
    const[state,setState]=useState({html: "NOTE /REMARK !"})
    const[price,setPrice]=useState("")
    const[address,setAddress]=useState({}) 
    

 
  
    const Itmes1 = [
        { id: 1, Mode_transport: 'BY ROAD',  Total_number: 23, Total_gross:345 },
    ];
    const Items2=[
        {id:1,Description:"item No 1",Hsn_code:1245,Quntity:45,}
    ]
    function handlPrice (e){
               setPrice(e.target.value)
    }
    
    function handleChange (e){
        setState({ html: e.target.value })
    }
    return (
        <Container fluid className='bg'>
            <div className='Header bg-success'>
                <h2>Quotation</h2>
            </div>
            <div className="qt_date">
                <p>Date: {date}<span onChange={e=>setDate(e.target.value)}></span></p>
                <p>Quotaton No.<span>{qutation}</span></p>
            </div>
           <Container className="card__container">
           <Row>
               <Col xs={6}>
           <Card className="card_one ml4" style={{ width: '30rem' }} >
            <Card.Header variant="Success" className="bg-success border">SHIPPER</Card.Header>
            <Card.Body>
                <Card.Title>Advanture Ranz PVt Ltd.</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
            
            </Card.Body>
            </Card>
            </Col>
            <Col xs={6}>
            <Card className="card_two" style={{ width: '30rem' }} >
            <Card.Header variant="Success" className="bg-success">RECIVE</Card.Header>
            <Card.Body>
                <Card.Title>Advanture Ranz PVt Ltd.</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
            
            </Card.Body>
            </Card>
            </Col>
               </Row>
               </Container>
             <div className="tables">
                        <ContentEditable
                html={state.html} // innerHTML of the editable div
                disabled={false} // use true to disable edition
                onChange={handleChange} // handle innerHTML change
            />
                 <ReactBootStrap.Table bordered stripe hover
              
                 >
                       <thead className="bg-success">
                           <th>S.N</th>
                           <th>MODE TRANSPORT</th>
                           <th>TOTAL NUMBER OF PACKAGES</th>
                           <th>TOTAL GROSS WEIGHT</th>
                       </thead>
                       <tbody>
                           {Itmes1.map((items1=>(
                                <tr key={items1.id}>
                                    <td>{items1.id}</td>
                                <td>{items1.Mode_transport}</td>
                                <td>{items1.Total_number}</td>
                                <td>{items1.Total_gross}</td>
                                </tr>
                           )))}
                          
                       </tbody>
                 </ReactBootStrap.Table>
             <ReactBootStrap.Table className="tb3" striped  hover>
            
  <thead className='bg-success'>
    <tr>
      <th>S.N.</th>
      <th>DESCRIPTION</th>
      <th>HSN Code</th>
      <th>Quantity</th>
      <th>RATE</th>
      <th>AMOUNT</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td value={state} onChange={handleChange}>1</td>
      <td value={state} onChange={handleChange}>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
      <td>@mdo</td>
      <td>@mdo</td>
    </tr>
    <tr>
    <td>3</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
      <td>@mdo</td>
      <td>@mdo</td>
    </tr>
    <tr><td></td></tr>
  </tbody>
</ReactBootStrap.Table>
<ReactBootStrap.Table rowCount={2} className="tb3">
  <Container>
      <div className="row">
          <div className="col-6 thank">
        <h3>THANK YOU FOR YOUR BUSINESS</h3>
        <p>Signature/Stam</p>
        <p>Place:</p>
        <p>Date:</p>
    </div>
      <div className="col-6">
         <ReactBootStrap.Table bordered>
             <thead>
                 <tr>
                     <th>Freight Charge</th>
                     <th>4500.00</th>
                 </tr>
             </thead>
             <thead className="bg-success">
                 <tr>
                     <th>TOTAL AMOUNT</th>
                     <th>15581.00</th>
                 </tr>
             </thead>
             <tbody>
                 <tr>
                     <td>SGST @9%</td>
                     <td>1402.00</td>
                 </tr>
                 <tr>
                     <td>SGST @9%</td>
                     <td>1402.00</td>
                 </tr>
             </tbody>
             <tfoot className="bg-success">
                 <tr>
                     <td>GRAND TOTAL</td>
                     <td value={price} onChange={handlPrice}>18385.00</td>
                 </tr>
             </tfoot>
         </ReactBootStrap.Table>
      </div>
      </div>
  </Container>
</ReactBootStrap.Table>
             </div>
            
           </Container>
           

    )
}

export default Qutation
