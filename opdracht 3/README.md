## Voor- en nadelen single page web app 

Een single page application is een web aplicatie die getoond wordt op 1 pagina. Hierdoor hoeft de gebruiker maar 1 keer een site te laden. Hieronder een aantal voor- en nadelen:

- Goed voor het maken van responsive sites.
- Gebruiksvriendelijk 
- Performance. De client laadt maar 1 x alle files in.

- Javascript moet aan staan bij de gebruiker. Er zijn bepaalde browser plugins die dat blokkeert.
- Security > This issue is not unique to SPAs, you have to deal with security in exactly the same way when you have an "old-school" client-server app (the HATEOAS model of using Hypertext to link between pages). It's just that the user is making the requests rather than your JavaScript, and that the results are in HTML rather than JSON or some data format. In a non-SPA app you have to secure the individual pages on the server, whereas in a SPA app you have to secure the data endpoints. (And, if you don't want your client to have access to all the code, then you have to split apart the downloadable JavaScript into separate areas as well. I simply tie that into my SammyJS-based routing system so the browser only requests things that the client knows it should have access to, based on an initial load of the user's roles, and then that becomes a non-issue.) 



### Sources 
- http://www.zymphonies.com/blog/single-page-application-advantages-and-disadvantages


- https://stackoverflow.com/questions/21862054/single-page-application-advantages-and-disadvantages
