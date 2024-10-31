import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
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
  const handleSubmit = async (event) => {
    event.preventDefault();
  console.log('NAME = '+name)
    // Validation example: Check for required fields
    if (!name || !type) {
      console.error('Name and Type are required fields.');
      return; // Exit the function if validation fails
    }
  
    console.log("Sending data to backend");
    console.log('Form submitted with values:', { name, type, field1, field2, field3, field4, field5, field6, field7, field8, field9, field10, field11, field12, field13 });
  
    try {
      const response = await fetch('http://localhost:5000/naaf/save-naaf', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, type, field1, field2, field3, field4, field5, field6, field7, field8, field9, field10, field11, field12, field13 }),
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
    
      const result = await response.json();
      console.log('Data sent to backend:', result);
    } catch (error) {
      console.error('Error sending data to backend:', error);
    }
  
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
  

  // Handler for key down event
  const handleKeyDown = (e, nextFieldId) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const nextField = document.getElementById(nextFieldId);
      if (nextField) {
        nextField.focus();
      }
    }
  };

  return (
    <div className="container parent-container mt-5">
      <h1 style={{ fontSize: "32px" }} className="font-weight-bold text-primary text-center mb-5">
        ناف مشتری
      </h1>
      <Form onSubmit={handleSubmit}>
        <div className="row h-50">
          <div className='col rounded-top' style={{ height: '400px' }}>
            <Form style={{ padding: '20px' }}>
              <div className="row align-items-center mb-3">
                <div className="col">
                  <Form.Group controlId="formField8">
                    <Form.Control
                      type="text"
                      placeholder="تنبان"
                      value={field8}
                      onChange={(e) => setField8(e.target.value)}
                      onKeyDown={(e) => handleKeyDown(e, 'formField9')}
                    />
                  </Form.Group>
                </div>
              </div>
              <div className="row align-items-center mb-3">
                <div className="col">
                  <Form.Group controlId="formField10">
                    <Form.Control
                      type="text"
                      placeholder="پاچه"
                      value={field10}
                      onChange={(e) => setField10(e.target.value)}
                      onKeyDown={(e) => handleKeyDown(e, 'formField11')}
                    />
                  </Form.Group>
                </div>
              </div>
              <div className="row align-items-center mb-3">
                <div className="col">
                  <Form.Group controlId="formField11">
                    <Form.Control
                      type="text"
                      placeholder="موده"
                      value={field11}
                      onChange={(e) => setField11(e.target.value)}
                      onKeyDown={(e) => handleKeyDown(e, 'formField12')}
                    />
                  </Form.Group>
                </div>
              </div>
              <div className="row align-items-center mb-3">
                <div className="col">
                  <Form.Group controlId="formField12">
                    <Form.Control
                      type="text"
                      placeholder="بر تنبان"
                      value={field12}
                      onChange={(e) => setField12(e.target.value)}
                      onKeyDown={(e) => handleKeyDown(e, 'formField13')}
                    />
                  </Form.Group>
                </div>
              </div>
              <div className="row align-items-center mb-3">
                <div className="col">
                  <Form.Group controlId="formField13">
                    <Form.Control
                      type="text"
                      placeholder="کف"
                      value={field13}
                      onChange={(e) => setField13(e.target.value)}
                      onKeyDown={(e) => handleKeyDown(e, 'formField1')}
                    />
                  </Form.Group>
                </div>
              </div>
            </Form>
          </div>

          <div className='col rounded-top' style={{ height: '400px' }}>
            <Form style={{ padding: '20px' }}>
              <div className="row align-items-center mb-3">
                <div className="col">
                  <Form.Group controlId="formField1">
                    <Form.Control
                      type="text"
                      placeholder="قد"
                      value={field1}
                      onChange={(e) => setField1(e.target.value)}
                      onKeyDown={(e) => handleKeyDown(e, 'formField2')}
                    />
                  </Form.Group>
                </div>
              </div>
              <div className="row align-items-center mb-3">
                <div className="col">
                  <Form.Group controlId="formField2">
                    <Form.Control
                      type="text"
                      placeholder="استین"
                      value={field2}
                      onChange={(e) => setField2(e.target.value)}
                      onKeyDown={(e) => handleKeyDown(e, 'formField3')}
                    />
                  </Form.Group>
                </div>
              </div>
              <div className="row align-items-center mb-3">
                <div className="col">
                  <Form.Group controlId="formField3">
                    <Form.Control
                      type="text"
                      placeholder="شانه"
                      value={field3}
                      onChange={(e) => setField3(e.target.value)}
                      onKeyDown={(e) => handleKeyDown(e, 'formField4')}
                    />
                  </Form.Group>
                </div>
              </div>
              <div className="row align-items-center mb-3">
                <div className="col">
                  <Form.Group controlId="formField4">
                    <Form.Control
                      type="text"
                      placeholder="یخن"
                      value={field4}
                      onChange={(e) => setField4(e.target.value)}
                      onKeyDown={(e) => handleKeyDown(e, 'formField5')}
                    />
                  </Form.Group>
                </div>
              </div>
              <div className="row align-items-center mb-3">
                <div className="col">
                  <Form.Group controlId="formField5">
                    <Form.Control
                      type="text"
                      placeholder="چاتی"
                      value={field5}
                      onChange={(e) => setField5(e.target.value)}
                      onKeyDown={(e) => handleKeyDown(e, 'formField6')}
                    />
                  </Form.Group>
                </div>
              </div>
              <div className="row align-items-center mb-3">
                <div className="col">
                  <Form.Group controlId="formField6">
                    <Form.Control
                      type="text"
                      placeholder="بغل"
                      value={field6}
                      onChange={(e) => setField6(e.target.value)}
                      onKeyDown={(e) => handleKeyDown(e, 'formField7')}
                    />
                  </Form.Group>
                </div>
              </div>
              <div className="row align-items-center mb-3">
                <div className="col">
                  <Form.Group controlId="formField7">
                    <Form.Control
                      type="text"
                      placeholder="دامن"
                      value={field7}
                      onChange={(e) => setField7(e.target.value)}
                      onKeyDown={(e) => handleKeyDown(e, 'name')}
                    />
                  </Form.Group>
                </div>
              </div>
            </Form>
          </div>

          <div className='col rounded-top' style={{ height: '400px' }}>
            <Form style={{ padding: '20px' }}>
              <div className="row align-items-center mb-3">
                <div className="col">
                  <Form.Group controlId="name">
                    <Form.Control
                      type="text"
                      placeholder="نام مشتری"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      onKeyDown={(e) => handleKeyDown(e, 'type')}
                    />
                  </Form.Group>
                </div>
              </div>
              <div className="row align-items-center mb-3">
                <div className="col">
                  <Form.Group controlId="type">
                    <Form.Control
                      type="text"
                      placeholder="نوع فرمایش"
                      value={type}
                      onChange={(e) => setType(e.target.value)}
                      onKeyDown={(e) => handleKeyDown(e, 'submit')}
                    />
                  </Form.Group>
                </div>
              </div>
            </Form>
          </div>
        </div>
        <div style={{marginTop: "120px"}}  className="row bg-success">
          <div className='col text-center mt-3'>
            <Button type="submit" variant="primary" onClick={handleSubmit}>
              Submit
            </Button>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default HelloWorld;
