/*
Which of the following is true about the same origin policy?

A)
It allows the script in one page to access data in another page

B)
It allows the script in one page to access data in another page only if they have the same origin

C)
It is a security protocol to prevent attacks like cross site scripting

D)
It does not allow any script to access data from another page regardless of the origin
*/

/*
Explanation:
The same-origin policy checks if two URLs have the same origin. 
It ensures that a script from one page can only access data from another page if it is of the same origin;

It is a critical security measure to isolate any malicious documents and to prevent any malicious script from injecting itself into another website/webpage. 
This is also known as the cross-site scripting attack.
*/ 

/*
Which of the following best describes the check(s) that the same origin policy makes for two URLs?

A)
Same host name

B)
Same port number

C)
Same protocol
*/

/*
Explantion:
For a URL to pass the origin comparison with another URL, the same-origin policy checks for the following:
Both the URLs should have the same hostname; hence, Option A is correct.
Both the URLs should have the same port number (if specified); hence, Option B is correct.
Both the URLs should have the same protocol (Http or Https); hence, Option C is correct.
*/

/*
Study the example below and answer the question following it.

Note that xyz.company.com and company.com have their document.domain set equal to company.com.
*/
// url1 = http://company.com/dir/page.html

// url2 = http://company.com/dir/inner/another.html

// url3 = https://company.com/dir/page.html

// url4 = http://sub.company.com/dir/page.html

// url5 = http://xyz.company.com/dir/page.html
// in the code on xyz.company.com the following change is made
// document.domain = "company.com"
// in the code on company.com the following change is made
// document.domain = "company.com"

/*
Which of the urls in the above example pass the same origin comparison with url1?

url2 and url5
*/