
const serverUrl = 'https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/users';


const userMy = {
  name: 'Nazar Sikirinskiy',
  city: 'Khmelnitskiy',
  age: 17,
}

const result = fetch(serverUrl, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(userMy),
})
  ////1

  .then(response => {
    if (response.ok) {
      return response.json();
    }
  })
  .then(response => response.json())


  .then(userBody => {
    console.log(userBody);
  })


  .catch((error) => {
    alert(error.message);
  });
////2
// .then(response => {
//  debugger;
// if (response.status === 201) {
// alert(JSON.stringify(response.body));
// }
//// console.log(response);
//});


const handleError = (status) => {
  if (status === 400) {
    throw new Error('user not correct');
  }

  if (status === 500) {
    throw new Error('Try again later!');
  }
}