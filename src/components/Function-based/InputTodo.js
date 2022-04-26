import React, { useState } from 'react';

const InputTodo = (props) => {
  const [inputText, setInputText] = useState({
    title: '',
  });

  const handleChange = (e) => {
    setInputText({
      ...inputText,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputText.title.trim()) {
      props.addTodoProps(inputText.title);
      setInputText({
        title: '',
      });
    } else {
      alert('Please write item');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input
        type="text"
        className="input-text"
        placeholder="Add todo..."
        value={inputText.title}
        name="title"
        onChange={handleChange}
      />
      <button className="input-submit">Submit</button>
    </form>
  );
};

export default InputTodo;

// import React, { Component } from 'react';

// class InputTodo extends Component {
//   state = {
//     title: '',
//   };

//   onChange = (e) => {
//     this.setState({
//       [e.target.name]: e.target.value,
//     });
//   };

//   handleSubmit = (e) => {
//     e.preventDefault();
//     if (this.state.title.trim()) {
//       this.props.addTodoProps(this.state.title);
//       this.setState({
//         title: '',
//       });
//     } else {
//       alert('Please write item');
//     }
//   };

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit} className="form-container">
//         <input
//           type="text"
//           className="input-text"
//           placeholder="Add todo..."
//           name="title"
//           value={this.state.title}
//           onChange={this.onChange}
//         />
//         <button className="input-submit">Submit</button>
//       </form>
//     );
//   }
// }
// export default InputTodo;
