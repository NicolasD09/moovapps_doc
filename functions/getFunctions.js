const { firebase } = require("./firebase");
const formattedResponse = require("./utils/formattedResponse");

exports.handler = async event => {
  try {
    let res;
    
    let ref = firebase.database().ref('test/'+'2');
    ref.on('value', snapshot => {
      console.log(snapshot.val());
    })
    //ref.push();
    // ref.set({
    //   theName: 'testname22'
    // })
    console.log(ref);
    
    return formattedResponse(200, ref);

  } catch (err) {
    console.log(err);
    return formattedResponse(500, { err: "Something went wrong" });
  }
};
