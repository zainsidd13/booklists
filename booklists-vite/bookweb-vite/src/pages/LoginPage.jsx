import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Stack } from 'react-bootstrap';

function LoginPage() {
  return (
    <div className="d-flex justify-content-center align-items-center login-card" style={{height: "60vh"}}>
      <Form style={{ width: '400px' }} className='login-form'>

        <Form.Group className="mb-3" controlId="formBasicUsername">
          <Form.Label>Username or Email Address</Form.Label>
          <Form.Control type="username" placeholder="Enter email or username" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Remember me" />
        </Form.Group>

        <Stack direction="horizontal" className="flex-wrap">
            <Button variant="primary" type="submit">
            Login
            </Button>
            <p style={{ fontSize: 15 }} className="register-button ms-auto">
                <a href="/register" className='register-link'>
                Register
                </a>
            </p>
        </Stack>
      </Form>
    </div>
  );
}

export default LoginPage;


// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import { Stack } from 'react-bootstrap';

// function LoginPage() {
//   return (
//     <div className="d-flex justify-content-center login-card">
//       <Form style={{ width: '400px' }}>
//         <Form.Group className="mb-3" controlId="formBasicUsername">
//           <Form.Label>Username or Email Address</Form.Label>
//           <Form.Control type="username" placeholder="Enter email or username" />
//           {/* <Form.Text className="text-muted">
//             We'll never share your email with anyone else.
//           </Form.Text> */}
//         </Form.Group>

//         <Form.Group className="mb-3" controlId="formBasicPassword">
//           <Form.Label>Password</Form.Label>
//           <Form.Control type="password" placeholder="Password" />
//         </Form.Group>

//         <Form.Group className="mb-3" controlId="formBasicCheckbox">
//           <Form.Check type="checkbox" label="Remember me" />
//         </Form.Group>
//         <Stack direction="horizontal" className="flex-wrap">
//             <Button variant="primary" type="submit">
//             Login
//             </Button>
//             <p style={{ fontSize: 15 }} className=" register-button ms-auto">
//                 <a href="#register" className='register-link'>
//                 Register
//                 </a>
//             </p>
//         </Stack>
//       </Form>
//     </div>
//   );
// }

// export default LoginPage;




// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';

// function LoginPage() {
//   return (
//     <Form>
//       <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>Email address</Form.Label>
//         <Form.Control type="email" placeholder="Enter email" />
//         <Form.Text className="text-muted">
//           We'll never share your email with anyone else.
//         </Form.Text>
//       </Form.Group>

//       <Form.Group className="mb-3" controlId="formBasicPassword">
//         <Form.Label>Password</Form.Label>
//         <Form.Control type="password" placeholder="Password" />
//       </Form.Group>
//       <Form.Group className="mb-3" controlId="formBasicCheckbox">
//         <Form.Check type="checkbox" label="Check me out" />
//       </Form.Group>
//       <Button variant="primary" type="submit">
//         Submit
//       </Button>
//     </Form>
//   );
// }

// export default LoginPage;