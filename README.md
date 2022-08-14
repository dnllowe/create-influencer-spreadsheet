# Introduction
This is a script I used to quickly gather info on influencers (specifically YouTube and Twitch streamers for indie games). It's written for one use-case (grabbing influencers from [Woovit](https://woovit.com/)), but with a few simple tweaks to the script, you should be able to use it for other public APIs.

# Requirements
* [Node.js 18 or higher](https://nodejs.org/en/download/current/) (for the [native, global fetch](https://nodejs.org/en/blog/announcements/v18-release-announce/))
* [Typescript](https://www.typescriptlang.org/) globally instealled (`npm i typescript -g`) if you want to edit the script in Typescript

# Running the script
You can run the script as-is to get data on influencers for "indie games" from Woovit:

1. If you make any changes, use `tsc` from the command line to complie the new JavaScript code
1. Run `node fetch-influencers.js` from the command line to fetch influencers from the API and create your spreadsheet (`influencers.csv`)
1. Profit

## How does it work?
For those less familiar with web development, the script is sending a request to the backend server of the platform, then requesting data from their database directly and writing a CSV file from the response. So, instead of you manually searching for information and tracking results yourself, you can get it all at once without any grunt work

## How would I edit the script to work with a different platform / service?
I would take the following steps:
1. Check to see if there's a public API available for the service
2. If so, use the documentation to formulate the URL. The script is commented, so edit the parts about the initial `url` and how to fetch more data with subsequent requests
3. If there's no documentation on a public API, you still have a shot
4. Open up the developer tools for your web browser (in Chrome, it's View > Developer > Developer Tools
5. Open the `Network` tab

<img width="1728" alt="Screen Shot 2022-08-14 at 2 45 18 PM" src="https://user-images.githubusercontent.com/18432482/184550712-f36903a0-7e1b-4c09-842d-d0b8f08027b5.png">

6. Do a manual search for influencers on your platform of choice

7. In the network tab, you should see a list of web requests made

<img width="1728" alt="Screen Shot 2022-08-14 at 2 43 22 PM" src="https://user-images.githubusercontent.com/18432482/184550722-2b883c00-87af-4570-ad6e-42dc4e681f9c.png">

8. Find the request that matches what you searched for (this can be a bit tricky if you don't normally deal with web requests, but just scan through them)

<img width="1728" alt="Screen Shot 2022-08-14 at 2 43 46 PM" src="https://user-images.githubusercontent.com/18432482/184550738-0c70ac6c-d8be-4822-a1c3-065091e88d6f.png">

You can double check the `Response` to see if it looks like the data you're looking for

<img width="1728" alt="Screen Shot 2022-08-14 at 2 44 20 PM" src="https://user-images.githubusercontent.com/18432482/184550757-df88b1ae-f8d1-45a5-883b-d83a5d51213f.png">

9. Take note of the `url` and the shape of the data. You'll use that to edit how the `fetch-influencers.ts` that script fetches, reads, and writes the data.

That's a lot if you're not familiar with web development, but if you know anyone who is, they should be able to get it pretty quickly.

10. That's it -- hope it helps


