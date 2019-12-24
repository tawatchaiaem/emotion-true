var environment = process.env.NODE_ENV || 'development';
var base_url;
console.log(environment)
if(environment === 'development'){
  base_url = "localhost:3000"
  console.log("condition : development")
}else if(environment === 'production'){
  base_url = "https://emotion-true.herokuapp.com/"
  console.log("condition : production")
}
console.log(base_url);