let cnd = false;

/** defining a promise */
let myPromise = new Promise((resolve, reject) => {
    /** simple condition check to call resolve/reject */
    /** can pass any type of data in resolve/reject methods  */
    if(cnd) resolve("Passed")
    else reject("Falied")
  }) 
  
  /**
   * .then() used to handle the success case 
   * 
   * .catch() used to handle the failure case
   * if not used when reject is defined in the promise then it throws error
   * "UnhandledPromiseRejectionWarning: Unhandled promise rejection"
   */
  myPromise.then((successMessage) => {
    console.log("Yay! " + successMessage) 
  })
  .catch((err)=>{
    console.log("Shyaa! " + err) 
  })

/** .finally() supported in node version 10 and above */