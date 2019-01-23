1) Where we are planning to use this plugin?
2) What problems do we have, that we should be aware of?
3) What tasks do we have unfinished and what plans about the evolution of this plugin?
4) What we're doing now and what we'll do in the future.
5) Links to import script, that I did before and working on right now...


Start Importing 5k data into fetch or database it is not simple, but also not a complex task.

And I actually forget about data, that our ML team member grabs before. Such shame...

Import 1500 ingredients inside grocery lists. We need to check for duplicates, because
we have a few similar files aka ing.json, ings.json, ing1500.json.
In the end, we should have filed with ingredients, but it should have intersections with GS, CK, Search at the same time.
We also need to remove stuff that we don't need. like unnecessary methods, files, etc. we should have one file? or not? debatable

Import to Loopback -> current technology behind our servers(RAPI-CK, GS, Search )
Import into MongoDB without the middleman(Loopback in our case).
It will give us a lot of mobility, that we don't have with Loopback for some reasons.

As we plan to migrate our server to graphQL - I assume we'll pick deploy to AWS, so it will need also
be imported to DynamoDB.


With Import script, we should be very accurate, because we have a lot of duplicated data right now and as it is not very crucial for now
we don't have a focus on this issue - as it requires. I just want to make it work, so people start to use it and I will be able to collect actual feedback.

[We can also specify at this article tasks, that we have at trello] and readme + docu + Trello link.

---

A separate task will be to make a better documentation site. I mean it should have up-to-date information, it should be easy to navigate and use.
I know how we can measure the quality of documentation. Right now I'm just open code of `fetch` and look into it.
it's a bad approach, I want to get information from the documentation. It's a more flexible way.

---

tests are also our weak point. We have some test coverage. The test was written "partially"(mostly it's a boilerplate for more advanced tests)
And they showing a great promise, especially when we have a few team members with different understanding of our projects and changes can break things.
(yeah, yeah - such small package also can be trouble).

I have a set of tasks, related to testing, so at sometime later it will be done.

At fetch we have a few database files, that should be imported into the recipe-API server.
We didn't import this amount of data before, so it'll be a good improvement -> create a new version of the import
and push into DB many recipes...

The big topic is to find out and clean up our files. Some at them have not just duplicates, but same things in different names.
But it's like "pOtato - potAto".

I also think that some previous data, that was created before by ML members - we didn't move it and didn't start to use.

we have data from different sources
