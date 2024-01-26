

// indexedDB store objects

let database;


//????
window.onload = function() {
  let req = window.indexedDB.open("PlaylistDB", 1);
  req.onsuccess = function() {
    database = req.result;
  }

  req.onerror = function(event) {
    alert("There was an error:", event);
  }

  req.onupgradeneeded = function(event) {
    let db = req.result;
    let objectStore = db.createObjectStore("Songs", { keyPass: "id", autoIncrement: true});
  }
}

//object
function Song(name, artist) {
  this.name = name;
  this.artist = artist;
}


//add
function addSong(song, success, error) {
  let transaction = database.transaction(["Songs"], "readwrite");
  let objectStore = transaction.objectStore("Songs");
  let request  = objectStore.add(song);
  request.onerror = error;
  request.onsuccess = success;
}


//calling
document.getElementById("button").addEventListener("click", function() {
  let song = new Song("Pumbed Up Kickes", "Foster the People");
  addSong(song, function() {
    console.log("Successfully added the song.");

    // readSongs(function(songs) {
    //     console.log(songs);
    // }, function() {
    //     console.log("Error");
    // });


    // readOneSong(12, function(song) {
    //   console.log(song);
    // });

    // let newSong = new Song("Pork And Beans", "Weezer");
    // updateSong(newSong, 1, function() {
    //   console.log("Updated Song");
    //   readOneSong(1, function(song) {
    //     console.log(song);
    //   });
    // });

    // deleteSong(5, function() {
    //   console.log("Deleted Song");
    //   readSongs(function(songs) {
    //       console.log(songs);
    //   }, function() {
    //       console.log("Error");
    //   });
    // }, function() {
    //     console.log("Error");
    // });

    deleteAllSongs(function() {
      addSong(song, function() {
        readSongs(function(songs) {
            console.log(songs);
        });
      });
    });


  }, function() {
    console.log("Error");
  });
});

//read All
function readSongs(success, error) {
  let transaction = database.transaction(["Songs"], "readonly");
  let objectStore = transaction.objectStore("Songs");
  let request = objectStore.openCursor();
  request.onerror = error;
  let songs = [];
  request.onsuccess = function(event) {
    let cursor = event.target.result;
    if (cursor) {
      let song = cursor.value;
      songs.push(song);
      cursor.continue();
    } else {
      success(songs);
    }
  }
}

// pt.2 from here
//read One
function readOneSong(id, success, error) {
  let transaction = database.transaction(["Songs"], "readonly");
  let objectStore = transaction.objectStore("Songs");
  let request = objectStore.get(id);
  request.onerror = error;
  request.onsuccess = function() {
    success(request.result);
  }
}

function updateSong(song, id, success, error) {
  song.id = id;
  let transaction = database.transaction(["Songs"], "readwrite");
  let objectStore = transaction.objectStore("Songs");
  let request = objectStore.put(song);
  request.onerror = error;
  request.onsuccess = success;
}


function deleteSong(id, success, error) {
  let transaction = database.transaction(["Songs"], "readwrite");
  let objectStore = transaction.objectStore("Songs");
  let request = objectStore.delete(id);
  request.onerror = error;
  request.onsuccess = success;
}


function deleteAllSongs(success, error) {
  let transaction = database.transaction(["Songs"], "readwrite");
  let objectStore = transaction.objectStore("Songs");
  let request = objectStore.clear();
  request.onerror = error;
  request.onsuccess = success;
}
