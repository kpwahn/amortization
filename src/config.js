let url = "http://";
const port = 3000;

if(PRODUCTION){
  url = `${url}ec2-54-244-69-250.us-west-2.compute.amazonaws.com:${port}`
} else {
  url = `${url}localhost:${port}`
}

export {url};
