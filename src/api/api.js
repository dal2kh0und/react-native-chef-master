// let rootURL = 'http://www.omdbapi.com/';
//
// exports.search = function(q){
//   let url = `${rootURL}?s=${q}`;
//   console.log(url);
//   return fetch(url)
//     .then((resp)=>resp.json())
//     .then((json)=>{
//       return json.Search;
//     });
// }
//
// exports.view = function(id){
//   let url = `${rootURL}?i=${id}&plot=short&r=json`;
//   return fetch(url)
//     .then((resp)=>resp.json());
// }

let rootURL = 'http://food2fork.com/api/';

exports.search = function(q){
  let url = `${rootURL}search?key=c4fa33870c8d4495b4847ba2498f2979&q=${q}`;
  console.log(url);
  return fetch(url)
    .then((resp)=>resp.json())
    .then((json)=>{
      return json.recipes;
    });
}

exports.view = function(id){
  let url = `${rootURL}get?key=c4fa33870c8d4495b4847ba2498f2979&rId=${id}`;
  return fetch(url)
    .then((resp)=>resp.json());
}
