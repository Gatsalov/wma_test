let check = (form, user, state)=>{

  let errorFlag = false,
      [loginPlace, passwordPlace] = form.elements;
  
  for(let key in user){
    if(user[key] !== state[key]){
       errorFlag = true;
    }
  }

  if(errorFlag){
    [ loginPlace, passwordPlace ].forEach((elem)=>{
      elem.classList.add('inputWrongHighlight')
    })
  }else{
    [ loginPlace, passwordPlace ].forEach((elem)=>{
      elem.classList.remove('inputWrongHighlight')
    })
  }
  return errorFlag
}

export default check