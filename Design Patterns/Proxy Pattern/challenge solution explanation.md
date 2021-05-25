# Explanation:

In this challenge, you had to implement the proxy pattern, such that it restricted the use of the kiosk to access apps/websites for the students.
As mentioned in the problem statement, a student can access/connect to any app/site using the LibraryKiosk class.

```javascript
class LibraryKiosk {
  open(app) {
    console.log(`Opening ${app}`);
  }
  connectTo(website) {
    console.log("Connecting to " + website);
  }
}
```

To restrict the use, we introduce the ProxyLibraryKiosk class like so:

```javascript
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
  //code....
}
```

The constructor of the proxy class initializes a libraryKiosk instance and two additional variables: blockedSites and blockedApps.
Both variables store the list of apps and websites that the students don’t have access to.

Next, we redefine the open function:

```javascript
open(app){
  if(this.blockedApps.includes(app)){
     console.log(`You can't access the ${app}`)
   }else{
      this.libraryKiosk.open(app)
   }
}
```

First, we check if the app the student is trying to access is in the blockedApps list. If it is, we display the “can’t access” message. Else, we call the libraryKiosk.open function for the app.
Similarly, we redefine the connectTo function:

```javascript
connectTo(website){
  if(this.blockedSites.includes(website)){
     console.log(`Access to ${website} denied`)
  }else{
    this.libraryKiosk.connectTo(website)
   }
}
```

First, we check if the website the student is trying to connect to is in the blockedSites list.
If it is, we display the “access denied” message. Else, we call the libraryKiosk.connect function for the website.
Now, when a student calls the open/connectTo function on an app/website from the blocked list, the access will be denied.
Another benefit of using the proxy pattern is that it reduces the number of direct requests that are sent to the target.
It filters out and only sends valid requests forward, thus reducing the load.
