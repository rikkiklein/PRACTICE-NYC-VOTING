export default {

  getAll: function(){
    const fetchSettings = {
      method: 'GET'
    }
    return fetch('https://data.cityofnewyork.us/resource/86fs-7q39.json', fetchSettings)
    .then((response)=>{
      return response.json();
    });

  },

  getLocation: function(url){
    console.log("in location", url);
    const fetchSettings = {
      method: 'GET'
    }
    return fetch('https://data.cityofnewyork.us/resource/86fs-7q39.json?location=', url, fetchSettings)
    .then((response)=>{
      return response.json();
    });
  }
};



// byBoro: function(name){
//   const fetchSettings = {
//     method: 'GET'
//   }
//   return fetch('https://data.cityofnewyork.us/resource/7agf-bcsq.json?boro='+ name, fetchSettings)
//   .then((response) => {
//     return response.json();
//   });
// },
//
// viewAllFavorites: function(){
//   const fetchSettings = {
//     method: 'GET'
//   }
//   return fetch('https://wifi-homework.firebaseio.com/wifiSpots.json', fetchSettings)
//   .then((response) => {
//       return response.json();
//   });
// },
//
// saveWifi: function(url){
//   const fetchSettings={
//     method: 'POST',
//     headers: new Headers({
//       'Content-Type': 'application/json'
//     }),
//     body: JSON.stringify({
//         url:{
//           name: url.url.name,
//           location: url.url.location,
//           city: url.url.city,
//           lat: url.url.lat,
//           long: url.url.long_,
//           boro: url.url.boro,
//           location_type: url.url.location_t,
//           provider: url.url.provider,
//           ssid: url.url.ssid,
//           type: url.url.type,
//           remarks: url.url.remarks
//         }
//     })
//   }
//   return fetch('https://wifi-homework.firebaseio.com/wifiSpots/' + url.url.name + '.json',  fetchSettings).then((response)=>{
//     return response.json();
//   });
// },
//
// delWifi: function(url){
//   const fetchSettings={
//     method: 'DELETE',
//     headers: new Headers({
//       'Content-Type': 'application/json'
//     }),
//     body: JSON.stringify({
//         url:{
//           name: url.url.name,
//           location: url.url.location,
//           city: url.url.city,
//           lat: url.url.lat,
//           long: url.url.long_,
//           boro: url.url.boro,
//           location_type: url.url.location_t,
//           provider: url.url.provider,
//           ssid: url.url.ssid,
//           type: url.url.type,
//           remarks: url.url.remarks
//         }
//     })
//   }
//   return fetch('https://wifi-homework.firebaseio.com/wifiSpots/' + url.url.name + '.json',  fetchSettings).then((response)=>{
//     return response.json();
//   });
// },
//
// updateWifi: function(url, newData){
//   const fetchSettings={
//     method: 'PUT',
//     headers: new Headers({
//       'Content-Type': 'application/json'
//     }),
//     body: JSON.stringify({
//         url:{
//           name: url.url.name,
//           location: url.url.location,
//           city: url.url.city,
//           lat: url.url.lat,
//           long: url.url.long_,
//           boro: url.url.boro,
//           location_type: url.url.location_t,
//           provider: url.url.provider,
//           source_id: url.url.ssid,
//           type: url.url.type,
//           remarks: url.url.remarks,
//           comment: newData.text
//         }
//     })
//   }
//   return fetch('https://wifi-homework.firebaseio.com/wifiSpots/' + url.url.name + '.json',  fetchSettings).then((response)=>{
//     return response.json();
//   });
// }
