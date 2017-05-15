// const RegistrationForm = React.createClass({
//   render() {
//     return React.createElement('form', {}, [
//       React.createElement('input', { type: 'text' }),
//       React.createElement('input', { type: 'password' }),
//       React.createElement('button', { type: 'submit' })
//     ])
//   }
// });

import React from 'react';
import ReactDOM from 'react-dom';

class RegistrationForm extends React.Component {
  render() {
    return (
      <form>
        <input type="text" />
        <input type="password" />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default RegistrationForm;
