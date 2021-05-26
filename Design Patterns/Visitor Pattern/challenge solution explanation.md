# Explanation

This challenge involved a music library containing different genres of music such as Rock, Pop, and Country. Your task was to implement the visitor pattern to perform the additional operation of creating a separate playlist for the Rock music in the library. We will look into how that is done later on.

Let’s start by discussing the Song class below:

```javascript
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
```

A Song has the following properties:

- A name
- A genre

It also has the functions:

- getName: Returns the name of the song
- getGenre: Returns the genre of the song

A MusicLibrary will contain different types of songs. Let’s take a look at how the MusicLibrary class is defined:

```javascript
class MusicLibrary {
  constructor() {
    this.songsList = [];
  }
  addSong(song) {
    this.songsList.push(song);
  }
  //code...
}
```

As you can see, it contains the songsList property that stores all the songs. We use the addSong function to add the songs into the library.

As discussed, we want to create a visitor that visits each song in the library and puts the names of the songs with the Rock genre into a separate playlist. For this purpose, we need to have some method in our MusicLibrary that allows the visitor to visit its songs. Hence, we define the accept function in our MusicLibrary like so:

```javascript
accept(visitor){
return visitor.visit(this)
}
```

accept takes a visitor object as a parameter and allows it to perform the operation on the current music library (this is pointing to the current music library) by calling its visit function.

Now, let’s look at our visitor class RockMusicVisitor.

```javascript
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
```

The class contains a visit function that accepts as parameter, the musicLibrary it wants to visit. Next, it iterates over the entire list of songs in the library, and for each song, it checks whether its genre is Rock or not. If it is, it adds its name to the rockPlayList. Else, it moves on to the next song. In the end, it returns the final rockPlayList.

Let’s take an example now:

```javascript
var rockmusicVisitor = new RockMusicVisitor();
var song1 = new Song("Bohemian Rhapsody", "Rock");
var song2 = new Song("Oops I did it again", "Pop");
var musicLibrary = new MusicLibrary();
musicLibrary.addSong(song1);
musicLibrary.addSong(song2);
musicLibrary.accept(rockmusicVisitor);
```

Here, we have two songs in the music library: one is Rock and the other is Pop. To create a separate rock music playlist, the music library allows the rockmusicVisitor to visit by invoking the accept function. accept calls the visit function defined on the visitor which returns the rock music playlist. Hence, the above example returns the following:

```javascript
["Bohemian Rhapsody"];
```
