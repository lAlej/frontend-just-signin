export const validateForm = (form) => {


  const regex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/;
  const validate = Object.values(form).every(v => v !== null && v !== undefined && v !== "");
  
  const validateMail = form.mail ? regex.test(form.mail) : true

  if(!validateMail && validate) {
    return {result: false, message: "Please use a valid mail"}
  } else if((validateMail && !validate) || (!validateMail && !validate)) {
    return {result: false, message: "Please fill all data"}
  } else {
    return {result: true}
  }

}