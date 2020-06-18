# GVC FE Technical Task Notes

* I need to research the API, determine how to access the data I need.  I looked for documentation regarding the API but there doesn’t appear to be any publicly available?

* There’s no way of knowing which races are upcoming before sending the request, but the user needs to see 5 at a time. Unless I can request by category there’s no way of guaranteeing that 5 races from a certain category is available. The endpoint seems to have a max count of 45. So although unlikely, it’s possible that it’s impossible to display 5 races from a particular category at any given time.

* If I was able to send a request for specific category_ids it’d be more effective than sending out a request by count only and filtering the response.

* Without documentation I was trying to filter requests using category ids but couldn’t crack it (if it is available).

* Endpoint doesn’t seem to be responding with JSON properly? It’s sending back plain text?

* I’m not sure if it’s more performant to fetch the latest races repeatedly or to fetch as many as possible and store and filter them then fetch again when required.

* Initially I tried to store data and filter it but it proved much easier to just refetch when the filtering changed.

* Because I don’t have complete control over the data coming back from the API I built in some redundancy so that whenever a race expires we fetch new data rather than just hide the race information in the browser.

* I prioritised the functionality over styling because I figured that would be more important to demonstrate.
