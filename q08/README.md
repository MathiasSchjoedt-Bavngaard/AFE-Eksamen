# Q08 SEO 

- Explain what Search engine optimization is. Why and when it is important.
- What affects SEO ranking?
- What is Core Web Vitals? And why are they important?
- Give an overview of Next.js and explain how to improve SEO in a Next Web app.

# What is search egnine optimization 

its a stragegy to make sure your website is higher i google search 

## Ranking 

The placement of your website compared to your competetor. The higher you are on searches the more your website will be visited. 

## Traffic 
When we look how the seo performs we look at the trafic. How many people visit your website. And from what search terms.
However not all trafic is good. We need the trafic that is looking for our product. So there for its importent to make content that is relevant to the search. and not just make popular content. 
The only exception is if you make money on ads. Then you want as much trafic as possible. 

# What affects SEO ranking?

## Sitemap  

When the webcrawlers want to visit sites. They can crawl through links . The primary purpose of a sitemap is to list URLs to ensure that search engines can find and crawl them. Sitemaps usually include basic information such as the URL, last modification date, change frequency, and priority of the pages on your site.

For our github-pages we made a [sitemap ](./../sitemap.xml) here all the urls are listed. 

We can use this to create a visual sitemap or use in in google console to make sure google can find all the pages. and faster ![Alt text](image-2.png) 
see [octopus ](https://octopus.do/0slkicvjvyq9)


## Metaheader 
In the header of a HTML page there can ber stored some meta data. 
like in this [q03 index](./../q03/src/index.html) 
The meta data tag have 4 properties: description, keywords, author, and viewport.  
```html
<meta name="description" content="This is the description of my website">
<meta name="keywords" content="keyword1, keyword2, keyword3, keyword4, etc.">

<meta name="author" content="Ninjaneer127, MathiasSchjoedt-Bavngaard, Sirety">

<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

The description is used to describe the website. This is used by the search engine to describe the website. and is also used to describe the website in the search results. (this is especially important becouse this could be the first thing a user sees about your website.) 


![Alt text](image-1.png)

read more here:
[HTML < meta > tag](https://www.w3schools.com/tags/tag_meta.asp)



## Content 
So why are content important for the search engine?
The search engine wants to give the user the best experience. Therefor it will try to give the user the best content. This is also scored by the users. If a user clicks on a link and then quickly leaves the page again, the search engine will see that the user did not find what he was looking for. This will then affect the ranking of the page. For those search terms.


## Links  
To make sure SE knows what category your website belongs to, it looks at the links of your webpage. 
it will also use these klinks to "crawl" through a site. 

### Internal
The internal links - the links on your page that links to your ownb site. These links are used to calculate usability and to se what pages are connected. 

### external
The External links are both outcoing and incomming., 

The outgoing links are the ones that you say your weebsite looks like. This way services like google can see what you want your website to look like
The incommin links are other peoble that link to your website. Both the number of links affects you SEO "score" but also the correct type of links. Fx. if i own a potato buissness its good that pages that premote potatoes / vegstibles linkes to my site. Like a Health blog saying; "this is a place you can get good potatoes for your salat" is much better, than a page explaining how a atomic clock works and mentions a potato and then linking to you potato shop maybe just to link to the people who don't know what a potato is. 
Now this link from the atomic power page is maybe not what your customers normaly look for. There for that link wont be as vlauable as the helth blog one. 


## Performance 
To get a good SEO score you need to have a good performance. This means how well your website performs. in terms of core web vitals. 
The better your website performs the better your SEO score will be and higher ranking. 

# Core Web Vitals
Core Web Vitals is a subset of Web Vitals, and currently consists of three metrics that measure:

- loading performance, 
- interactivity
- visual stability of the page.

These mectrics are a way to measure the performance of a website and therefor also a way to measure the user experience. 
Google wants to give the user the best experience. 
![Alt text](image-3.png)

## Loading 
how long does it take to load the page. not the

# Next.js


## Next.js and SEO 
