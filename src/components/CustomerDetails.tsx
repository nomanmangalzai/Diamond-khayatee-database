// import { useFormik } from "formik";
// import * as Yup from "yup";
// import { Container, Row, Col, Form, Button } from "react-bootstrap";
// import "../css files/Home.css"; // Import the CSS file

// const validationSchema = Yup.object({
//   nameOfCustomer: Yup.string().required("Name is required"),
//   Id: Yup.number().required("Id is required"),
//   telephoneNo: Yup.string().required("Telephone Number is required"),
//   fatherName: Yup.string().required("Father name is required"),
//   qad: Yup.number().required("Qad is required"),
//   asteen: Yup.number().required("Asteen is required"),
//   shana: Yup.number().required("Shana is required"),
//   yakhan: Yup.number().required("Yakhan is required"),
//   chatee: Yup.number().required("Chatee is required"),
//   baghal: Yup.number().required("Baghal is required"),
// });

// const HelloWorld = () => {
//   const formik = useFormik({
//     initialValues: {
//       nameOfCustomer: "",
//       Id: "",
//       telephoneNo: "",
//       fatherName: "",
//       qad: "",
//       asteen: "",
//       shana: "",
//       yakhan: "",
//       chatee: "",
//       baghal: "",
//     },
//     validationSchema: validationSchema,
//     onSubmit: async (values) => {
//       try {
//         const response = await fetch(
//           "http://localhost:5003/customers/details",
//           {
//             method: "POST",
//             headers: {
//               "Content-Type": "application/json",
//             },
//             body: JSON.stringify(values),
//           }
//         );

//         if (!response.ok) {
//           throw new Error("Network response was not ok");
//         }

//         const data = await response.json();
//         console.log("Server response:", data);
//       } catch (error) {
//         console.error("Error:", error.message);
//       }
//     },
//   });

//   return (
//     <Container className="h-screen d-flex justify-content-center align-items-center">
//       <Form
//         className="px-8 pt-6 pb-8 mb-4 bg-white rounded shadow-md w-96"
//         onSubmit={formik.handleSubmit}
//       >
//         <Row>
//           <Col>
//             <Form.Group className="mb-4">
//               <Form.Label htmlFor="nameOfCustomer">اسم</Form.Label>
//               <Form.Control
//                 type="text"
//                 id="nameOfCustomer"
//                 {...formik.getFieldProps("nameOfCustomer")}
//               />
//               {formik.touched.nameOfCustomer && formik.errors.nameOfCustomer ? (
//                 <Form.Text className="text-xs italic text-red-500">
//                   {formik.errors.nameOfCustomer}
//                 </Form.Text>
//               ) : null}
//             </Form.Group>

//             <Form.Group className="mb-6">
//               <Form.Label htmlFor="telephoneNo">شماره تیلیفون</Form.Label>
//               <Form.Control
//                 type="text"
//                 id="telephoneNo"
//                 {...formik.getFieldProps("telephoneNo")}
//               />
//               {formik.touched.telephoneNo && formik.errors.telephoneNo ? (
//                 <Form.Text className="text-xs italic text-red-500">
//                   {formik.errors.telephoneNo}
//                 </Form.Text>
//               ) : null}
//             </Form.Group>

//             <Form.Group className="mb-4">
//               <Form.Label htmlFor="fatherName">ولد</Form.Label>
//               <Form.Control
//                 type="text"
//                 id="fatherName"
//                 {...formik.getFieldProps("fatherName")}
//               />
//               {formik.touched.fatherName && formik.errors.fatherName ? (
//                 <Form.Text className="text-xs italic text-red-500">
//                   {formik.errors.fatherName}
//                 </Form.Text>
//               ) : null}
//             </Form.Group>

//             <Form.Group className="mb-6">
//               <Form.Label htmlFor="Id">ایډې</Form.Label>
//               <Form.Control
//                 type="text"
//                 id="Id"
//                 {...formik.getFieldProps("Id")}
//               />
//               {formik.touched.Id && formik.errors.Id ? (
//                 <Form.Text className="text-xs italic text-red-500">
//                   {formik.errors.Id}
//                 </Form.Text>
//               ) : null}
//             </Form.Group>

//             {/* Add more input fields as needed */}
//           </Col>
//           <Col>{/* Add input fields for the second section */}</Col>
//           <Col>{/* Add input fields for the third section */}</Col>
//         </Row>
//         <div className="flex items-center justify-between">
//           <Button
//             type="submit"
//             className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
//           >
//             Submit
//           </Button>
//         </div>
//       </Form>
//     </Container>
//   );
// };

// export default HelloWorld;

import React from "react";

// A simple functional component that renders "Hello, World!"
const HelloWorld = () => {
  return (
    <div>
      <h1>Hello, World!</h1>
    </div>
  );
};

export default HelloWorld;
