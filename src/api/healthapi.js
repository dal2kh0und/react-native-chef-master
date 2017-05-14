let rootURL = 'https://api.edamam.com/api/';

exports.search = function(q){
  let url = `${rootURL}nutrition-data?app_id=90d72ba2&app_key=b2306591caa63cf690ecfb0efef395d0&ingr=${q}`;
  console.log(url);
  return fetch(url)
    .then((resp)=>resp.json())
    .then((json)=>{
      return json;
    });
}
