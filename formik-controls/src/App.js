// import './App.css';
// import RegistrationForm from './components/40.1.RegistrationForm';
// import EnrollmentForm from './components/41.EnrollmentForm';
// // import LoginForm from './components/39.1.LoginForm';
// // import FormikContainer from './components/38.3.FormikContainer';

// function App() {
//   return (
//     <div className="App">
//       {/* <FormikContainer /> */}
//       {/* <LoginForm /> */}
//       {/* <RegistrationForm /> */}
//       <EnrollmentForm />
//     </div>
//   );
// }

// export default App;


// 40.Wiring up UI Library
import React from 'react';
import './App.css';
import RegistrationForm from './components/40.1.RegistrationForm';
import EnrollmentForm from './components/41.EnrollmentForm';
// import LoginForm from './components/39.1.LoginForm';
import FormikContainer from './components/38.3.FormikContainer';
import { theme, ThemeProvider } from '@chakra-ui/core';
import LoginForm from './components/43.3.LoginForm';
// import { theme, ThemeProvider } from '@chakra-ui/core/styles';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        {/* <EnrollmentForm /> */}
        <LoginForm />
      </div>
    </ThemeProvider>
  );
}

export default App;