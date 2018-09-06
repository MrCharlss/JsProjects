var collection = {
    "2548": {
      "album": "Slippery When Wet",
      "artist": "Bon Jovi",
      "tracks": [ 
        "Let It Rock", 
        "You Give Love a Bad Name" 
      ]
    },
    "2468": {
      "album": "1999",
      "artist": "Prince",
      "tracks": [ 
        "1999", 
        "Little Red Corvette" 
      ]
    },
    "1245": {
      "artist": "Robert Palmer",
      "tracks": [ ]
    },
    "5439": {
      "album": "ABBA Gold"
    }
};
// Keep a copy of the collection for tests


// Only change code below this line
/* function updateRecords(id, prop, value) {
  if (collection[id].hasOwnProperty[prop]){
    
  
  return collection;
}

// Alter values below to test your code
updateRecords(5439, "artist", "ABBA"); */

function updateRecords(id, prop, value){
    let busq = collection[id];
    
    if (prop != "tracks"){
        if (value == ""){
            delete busq[prop];
        }else{busq[prop] = value;}
        
    } else if (prop == "tracks" && busq.hasOwnProperty(prop)){
        if (value != ""){
            busq[prop].push(value);
        }else{
            delete busq[prop];
        }   
    } else if (prop == "tracks" && busq.hasOwnProperty(prop) == false){
        let tracks =[];
        busq[prop] = tracks;
        busq[prop].push(value);
    }; 


    console.log(collection[id]);
}

updateRecords(2548, "artist", "")
/* updateRecords(5439, "artist", "ABBA");
updateRecords(1245, "tracks", "Addicted to Love")
updateRecords(2548, "tracks", "") */