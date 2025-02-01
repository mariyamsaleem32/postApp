createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log("user",user);
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
   console.log('errorMessage',errorMessage);
   
  });