import React from 'react'


const types = {
  email:{
    regex:/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    ,
    message:'Preencha um email válido',
  },
  password:{
    regex:/^(?=.*[A-Z])(?=.*[@&])(?=.*[0-9]).{10,}$/ ,
    message:'Senha muito fraca',
  },
  number:{
    regex:/^\d+$/,
    message: 'Apenas Números',
  },
};

const useForm = (type) => {
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState(null);

  function validate(value){
    if(type === false) return true;
    if(value === ''){
      setError('Preencha um valor');
      return false;
    }else if(types[type] && !types[type].regex.test(value)){
        setError(types[type].message);
        return false;
    }else{
      setError(null);
      return true;
    }
  }

  function onChange({target}){
    if(error) validate(target.value);
    setValue(target.value);
  }

  return {
    value,
    setValue,
    onChange,
    error,
    validate: () => validate(value),
    onBlur: () => validate(value),
  }
}

export default useForm;
