import React, { Component } from "react";
import Joi from "joi-browser";
import Input from "./input";


class Form extends Component {
  state = {
    data: {},
    errors: {}
  };

  validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(this.state.data, this.schema, options);
    if (!error) return null;

    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };

  handleSubmit = e => {
    e.preventDefault();

    const errors = this.validate();
    this.setState({ errors: errors || {} }); //errores property should be set to en object
                                              // should not be null that's why i need ||{}
    if (errors) return;

    this.doSubmit();
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const data = { ...this.state.data };
    data[input.name] = input.value;

    this.setState({ data, errors });
  };

  renderButton(label) {
    return (
      <button disabled={this.validate()} className="btn btn-primary">
        {label}
      </button>
    );
  }

  

  renderInput(name, label, type = "text") {
    const { data, errors } = this.state;

    return (
      <Input
        type={type}
        name={name}
        value={data[name]}
        label={label}
        onChange={this.handleChange}
        error={errors[name]}
      
      />
    );
  }
}

export default Form;



// import React, { Component } from "react";
// import Input from "./Input";

// // In this class i extract some reusable function from loginForm
// // and make loginForm inherited from login
// class Form extends Component {
//   state = {
//     data: {},
//     errors: {},
//   };



//   validate = () => {
//     const errors = {};

//     if (this.state.data.username.trim() === "")
//       errors.username = "Username is required";
//     if (this.state.data.password.trim() === "")
//       errors.password = "Password is required";

//     // return array for all the keys of this object
//     return Object.keys(errors).length === 0 ? null : errors;
//   };

//   // if the usere make the input empty              
//   validateValue = (input) => {
//     if (input.name === "username") {
//       if (input.value.trim() === "") return "username is required";
//     }

//     if (input.name === "password") {
//       if (input.value.trim() === "") return "Password is required";
//     }
//   };



//   // this fun to prevent full page reload & check errors
//   handleSubmit = (e) => {
//     e.preventDefault();
//     const errors = this.validate();
//     this.setState({ errors: errors || {} }); // errors propert should never be null that why I include ||
//     if (errors) return;
//     this.doSubmit();
//   };

//   // here I am raising this event and syncronise the
//   //input with state's value to make sure I have one source of input.
//   //and to guarantee that the input content will be rendered with our state update.
//   handlechange = ({ currentTarget: input }) => {
//     const errors = { ...this.state.errors };
//     const errorMessage = this.validateValue(input);

//     if (errorMessage) errors[input.name] = errorMessage;
//     else delete errors[input.name];

//     const data = { ...this.state.data };
//     data[input.name] = input.value;
//     this.setState({ data, errors });
//   };

//   renderButton(label){
//       return (
//         <button disabled={this.validate()} className="btn btn-primary">
//         {label}
//         </button>
//       );
//   }


//   renderInput(name, label,type ='text'){
//     const {data, errors} = this.state;
//     return(
//       <Input
//       type={type}
//       name={name}
//       value={data[name]}
//       label={label}
//       onChange={this.handlechange}
//       error={errors[name]}
//     />
//     );
   
//   }
// }

// export default Form;
