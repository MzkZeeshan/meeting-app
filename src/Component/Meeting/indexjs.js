const clientId = "UGDBEELMBFO2COHRSITQDWBAP2ILB51GVMRZXKJVSQKLRIVF";
const secretId = "MAFH4AW3XIPVUYVBIE40F4CKJ4QZX51A02ZNQ2CX15EXP12C"; /

    /
    
   
 
      
            fetch('https://api.foursquare.com/v2/venues/search?client_id=' + clientId + '&client_secret=' + secretId + '&v=20180323&limit=5&ll=' + coords.latitude + "," + coords.longitude)
              .then((response) => {
                // Code for handling API response
                return response.json();
        
              }).then((data) => {
                // console.log(data);
                // console.log(data.response.response.venues[0].id);
                fetch('https://api.foursquare.com/v2/venues/' + data.response.venues[0].id + '?client_id=' + clientId + '&client_secret=' + secretId + '&v=20180323&limit=5&ll=' + coords.latitude + "," + coords.longitude)
                  .then((res) => { return res.json(); })
                  .then((data) => {
                    console.log(data);
})