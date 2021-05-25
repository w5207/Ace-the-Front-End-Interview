// Problem statement:
// In this challenge, you have to implement a library kiosk. The LibraryKiosk allows a student to perform two functions:
// open: allows the student to open an app in the kiosk
// connectTo: allows the student to connect to a website

// The definitions for both the functions are given to you.
// Currently, using these two functions, the student can open up any app and connect to any website as shown below:

class LibraryKiosk {
  open(app) {
    console.log(`Opening ${app}`);
  }
  connectTo(website) {
    console.log("Connecting to " + website);
  }
}

var libraryKiosk = new LibraryKiosk();
libraryKiosk.open("photos");
libraryKiosk.open("settings");
libraryKiosk.open("chrome");
libraryKiosk.connectTo("fb.com");

// Your task is to implement the proxy pattern so that it restricts access to a few apps/websites for students.
// You need to implement the functions such that the student cannot open the following apps:
// camera, photos, music, and settings
// Similarly, the student should not be able to connect to the following websites:
// fb.com, instagram.com, snapchat.com, google.com, and gmail.com
// Apart from the apps mentioned above and websites, the student can access the rest.

// Input:
// Accessing different apps and connecting to websites

// Output:
// Users can only open and connect to the allowed apps/websites

// Sample input:
var libraryKiosk = new ProxyLibraryKiosk();
libraryKiosk.open("photos");
libraryKiosk.open("music");
libraryKiosk.open("Chrome");
libraryKiosk.connectTo("booksportal.com");
libraryKiosk.connectTo("google.com");
libraryKiosk.connectTo("fb.com");

// Sample output:
"You can't access the photos"
"You can't access the music"
"Opening Chrome"
"Connecting to booksportal.com"
"Access to google.com denied"
"Access to fb.com denied"

// Solution:
class LibraryKiosk {
  open(app) {
    console.log(`Opening ${app}`);
  }
  connectTo(website) {
    console.log("Connecting to " + website);
  }
}

class ProxyLibraryKiosk {
  constructor() {
    this.libraryKiosk = new LibraryKiosk();
    this.blockedSites = [
      "fb.com",
      "instagram.com",
      "snapchat.com",
      "google.com",
      "gmail.com",
    ];
    this.blockedApps = ["camera", "photos", "music", "settings"];
  }

  open(app) {
    if (this.blockedApps.includes(app)) {
      console.log(`You can't access the ${app}`);
    } else {
      this.libraryKiosk.open(app);
    }
  }
  connectTo(website) {
    if (this.blockedSites.includes(website)) {
      console.log(`Access to ${website} denied`);
    } else {
      this.libraryKiosk.connectTo(website);
    }
  }
}

var libraryKiosk = new ProxyLibraryKiosk();
libraryKiosk.open("photos");
libraryKiosk.open("Chrome");
libraryKiosk.connectTo("booksportal.com");
libraryKiosk.connectTo("google.com");
