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
  let url = `${rootURL}search?key=1e29673a7433981f986f3a857a36e6bb&q=${q}`;
  console.log(url);
  return fetch(url)
    .then((resp)=>resp.json())
    .then((json)=>{
      return json.recipes;
    });
}

exports.view = function(id){
  let url = `${rootURL}get?key=1e29673a7433981f986f3a857a36e6bb&rId=${id}`;
  return fetch(url)
    .then((resp)=>resp.json());
}
