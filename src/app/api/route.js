"use server";

export const registerUser = async (userInfo) => {
  const data = await fetch("https://just-sign-in.onrender.com/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userInfo),
  });

  const response = await data.json();
  if (response.message) {
    return false;
  } else {
    return response
  }

};

export const loginUser = async (username, pwd) => {

  const data = await fetch(
    `https://just-sign-in.onrender.com/login?username=${username}&pwd=${pwd}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const response = await data.json();

  if (response.message) {
    return false;
  } else {
    return response;
  }
};

export const getUser = async (id) => {

 try {
   const data = await fetch(`https://just-sign-in.onrender.com/user?id=${id}`, {
     method: 'GET',
     headers: {
       'Authorization': 'Bearer ' + id,
       'Content-Type': 'application/json'
     }
   });
   const response = await data.json();

   return response;
  
 } catch (error) {
    return false
 }
};


export const updateInfo = async (info, id) => {

  try {
    const data = await fetch('https://just-sign-in.onrender.com/update', {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer ' + id,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(info)
    });

    const response = await data.json();
    return response


  } catch (error) {
    console.log("ERROR: ", error)
  }
}
