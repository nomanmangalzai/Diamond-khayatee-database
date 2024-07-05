import { useState } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import '../App.css'; // Import your CSS file

const HelloWorld = () => {
  // State variables for input fields
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [field1, setField1] = useState('');
  const [field2, setField2] = useState('');
  const [field3, setField3] = useState('');
  const [field4, setField4] = useState('');
  const [field5, setField5] = useState('');
  const [field6, setField6] = useState('');
  const [field7, setField7] = useState('');
  const [field8, setField8] = useState('');
  const [field9, setField9] = useState('');
  const [field10, setField10] = useState('');
  const [field11, setField11] = useState('');
  const [field12, setField12] = useState('');
  const [field13, setField13] = useState('');
  

  // Handler for form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted with values:', { name, type, field1, field2, field3, field4, field5, field6 });

    // Reset input fields after submission
    setName('');
    setType('');
    setField1('');
    setField2('');
    setField3('');
    setField4('');
    setField5('');
    setField6('');
    setField7('');
    setField8('');
    setField9('');
    setField10('');
    setField11('');
    setField12('');
    setField13('');

  };

  return (
    <Container className="parent-container">
      <h1 style={{ fontSize: "32px" }} className="font-weight-bold text-primary text-center mb-5">
        ناف مشتری
      </h1>
      <Row className="h-50">
        <Col className='rounded-top' style={{ backgroundColor: 'blue', height: '400px', }}>
        <Form style={{ padding: '20px', }} onSubmit={handleSubmit}>
            <Row className="align-items-center mb-3">
              <Col>
                <Form.Group controlId="formField8">
                  <Form.Control 
                    type="text" 
                    placeholder="تنبان" 
                    value={field8} 
                    onChange={(e) => setField8(e.target.value)} 
                  />
                </Form.Group>
              </Col>
            </Row>
        <Row className="align-items-center mb-3">
              <Col>
                <Form.Group controlId="formField9">
                  <Form.Control 
                    type="text" 
                    placeholder="قد" 
                    value={field9} 
                    onChange={(e) => setField9(e.target.value)} 
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row className="align-items-center mb-3">
              <Col>
                <Form.Group controlId="formField10">
                  <Form.Control 
                    type="text" 
                    placeholder="پاچه" 
                    value={field10} 
                    onChange={(e) => setField10(e.target.value)} 
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row className="align-items-center mb-3">
              <Col>
                <Form.Group controlId="formField11">
                  <Form.Control 
                    type="text" 
                    placeholder="موده" 
                    value={field11} 
                    onChange={(e) => setField11(e.target.value)} 
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row className="align-items-center mb-3">
              <Col>
                <Form.Group controlId="formField12">
                  <Form.Control 
                    type="text" 
                    placeholder="بر تنبان" 
                    value={field12} 
                    onChange={(e) => setField12(e.target.value)} 
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row className="align-items-center mb-3">
              <Col>
                <Form.Group controlId="formField13">
                  <Form.Control 
                    type="text" 
                    placeholder="کف" 
                    value={field13} 
                    onChange={(e) => setField13(e.target.value)} 
                  />
                </Form.Group>
              </Col>
            </Row>

            </Form>
     </Col>
     {/* COlUMN 2 BEGINS HERE ***************************************************************************************************** */}
        <Col className='rounded-top' style={{ backgroundColor: 'yellow', height: '400px' }}>    
          <Form style={{ padding: '20px' }} onSubmit={handleSubmit}>
            <Row className="align-items-center mb-3">
              <Col>
                <Form.Group controlId="formField1">
                  <Form.Control 
                    type="text" 
                    placeholder="قد" 
                    value={field1} 
                    onChange={(e) => setField1(e.target.value)} 
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row className="align-items-center mb-3">
              <Col>
                <Form.Group controlId="formField2">
                  <Form.Control 
                    type="text" 
                    placeholder="استین" 
                    value={field2} 
                    onChange={(e) => setField2(e.target.value)} 
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row className="align-items-center mb-3">
              <Col>
                <Form.Group controlId="formField3">
                  <Form.Control 
                    type="text" 
                    placeholder="شانه" 
                    value={field3} 
                    onChange={(e) => setField3(e.target.value)} 
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row className="align-items-center mb-3">
              <Col>
                <Form.Group controlId="formField4">
                  <Form.Control 
                    type="text" 
                    placeholder="یخن" 
                    value={field4} 
                    onChange={(e) => setField4(e.target.value)} 
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row className="align-items-center mb-3">
              <Col>
                <Form.Group controlId="formField5">
                  <Form.Control 
                    type="text" 
                    placeholder="چاتی" 
                    value={field5} 
                    onChange={(e) => setField5(e.target.value)} 
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row className="align-items-center mb-3">
              <Col>
                <Form.Group controlId="formField6">
                  <Form.Control 
                    type="text" 
                    placeholder="بغل" 
                    value={field6} 
                    onChange={(e) => setField6(e.target.value)} 
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row className="align-items-center mb-3">
              <Col>
                <Form.Group controlId="formField7">
                  <Form.Control 
                    type="text" 
                    placeholder="دامن" 
                    value={field7} 
                    onChange={(e) => setField7(e.target.value)} 
                  />
                </Form.Group>
              </Col>
            </Row>
            
          </Form>
        </Col>
        <Col className='rounded-top' style={{ backgroundColor: 'green', height: '400px' }}>
        <Form style={{ padding: '20px' }}>         
            <Row className="align-items-center mb-3">
              <Col>
                <Form.Group controlId="name">
                  <Form.Control 
                    type="text" 
                    placeholder="نام مشتری" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row className="align-items-center mb-3">
              <Col>
                <Form.Group controlId="type">
                  <Form.Control 
                    type="text" 
                    placeholder="نوع فرمایش" 
                    value={type} 
                    onChange={(e) => setType(e.target.value)} 
                  />
                </Form.Group>
              </Col>
            </Row>
            
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default HelloWorld;
