function profileGen(params) {
//console.log (`hello my name is ${params} ${params2}`)  
return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h2>My first name is ${params.getName()}</h2>
    <h2>My My ID is ${params.getId()}</h2>
    <h2>My email is ${params.getEmail()}</h2>
</body>
</html>
` 
}

module.exports = profileGen;