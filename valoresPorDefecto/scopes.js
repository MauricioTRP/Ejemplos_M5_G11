let scopes = () => {
  var a = 3;
  console.log(a)

  if (a > 4) {
    var i = 5
  } else {
    console.log(i)
  }

  for (let z = 0; z < 3; z++) {
    console.log(z)
  }

  console.log(z)
}

scopes()