// Problem statement:
// In this challenge, you need to implement the visitor pattern to separate Rock music from the other genres of music by creating a separate playlist. You need to implement the RockMusicVisitor class for this purpose. As you can see, it contains the visit method, which should return the rock music playlist.

// Note: the rock music playlist only needs to contain the names of the songs, not the entire Song object.

// Next, you need to implement a Song class. A Song object will have the following properties: name and genre. You also need to define the two functions: getName and getGenre.

// Finally, you need to implement the MusicLibrary class. It should store a list of all the songs, regardless of the genres. You need to implement the addSong function to add a song and accept function to allow the RockMusicVisitor to visit the music library.

// Input:
// The accept function is called with RockMusicVisitor as a parameter

// Output:
// A playlist containing names of all the rock songs from the library is returned

// Sample input:
var rockMusicVisitor = new RockMusicVisitor();
var song1 = new Song("Bohemian Rhapsody", "Rock");
var song2 = new Song("Stairway to Heaven", "Rock");
var song3 = new Song("Oops I did it again", "Pop");
var song4 = new Song("Crazy", "Country");
var musicLibrary = new MusicLibrary();
musicLibrary.addSong(song1);
musicLibrary.addSong(song2);
musicLibrary.addSong(song3);
musicLibrary.addSong(song4);
console.log(musicLibrary.accept(rockMusicVisitor))
  
// Sample output:
["Bohemian Rhapsody", "Stairway to Heaven"]

// Solution:
class RockMusicVisitor {
  visit(musicLibrary) {
    var rockPlayList = [];
    var index = 0;
    var songlist = musicLibrary.songsList.length;
    for (var i = 0; i < songlist; i++) {
      var song = musicLibrary.songsList[i];
      if (song.getGenre() == "Rock") {
        rockPlayList[index] = song.getName();
        index++;
      }
    }
    return rockPlayList;
  }
}

class Song {
  constructor(name, genre) {
    this.name = name;
    this.genre = genre;
  }

  getName() {
    return this.name;
  }
  getGenre() {
    return this.genre;
  }
}

class MusicLibrary {
  constructor() {
    this.songsList = [];
  }
  addSong(song) {
    this.songsList.push(song);
  }
  accept(visitor) {
    return visitor.visit(this);
  }
}

//creating a rock music visitor
var rockmusicVisitor = new RockMusicVisitor();
//creating songs of different genres
var song1 = new Song("Bohemian Rhapsody", "Rock");
var song2 = new Song("Stairway to Heaven", "Rock");
var song3 = new Song("Oops I did it again", "Pop");
var song4 = new Song("Crazy", "Country");
//creating a music library
var musicLibrary = new MusicLibrary();
//adding songs to the music library
musicLibrary.addSong(song1);
musicLibrary.addSong(song2);
musicLibrary.addSong(song3);
musicLibrary.addSong(song4);
//using the rockmusicVisitor to create a separate rock music play list
console.log(
  "The music library has the following rock music: " +
    musicLibrary.accept(rockmusicVisitor)
);
