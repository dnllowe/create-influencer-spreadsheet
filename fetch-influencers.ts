import * as fs from 'fs'

// This is what the responses look like for Woovit
// Update as needed for your API of choice
interface Account {
    account_url: string | null
    follower_count: number | null
    view_count: number | null
    avg_view_count: number | null
    favorite_count: number | null
    username: string | null
}

interface Profile {
    email: string | null
    manager_contact: string | null
    name: string | null
    mixer: Account | null
    twitter: Account | null
    twitch: Account | null
    youtube: Account | null
}

interface Result {
    profile: Profile
}

interface IResponse {
    count: number
    next: string | null
    previous: string | null
    results: Result[] | null
}

// Format the header for the csv
// Customize as needed for the data you want from your API
let csv = ''
csv += 'Email,'
csv += 'Manager Contact,'
csv += 'Name,'
csv += 'YouTube Account,'
csv += 'YouTube Avg Views,'
csv += 'YouTube Follower Count,'
csv += 'YouTube Username,'
csv += 'YouTube Views,'
csv += 'Twitch Account,'
csv += 'Twitch Avg Views,'
csv += 'Twitch Follower Count,'
csv += 'Twitch Username,'
csv += 'Twitch Views,'
csv += 'Twitter Account,'
csv += 'Twitter Favorite Count,'
csv += 'Twitter Follower Count,'
csv += 'Twitter Username\n'

// Helper function to write the CSV rows
// Make sure these match the order of the header
function appendResultsToCsv(profile: Profile, csv: string) {
    csv += profile.email
    csv += ','
    csv += profile.manager_contact
    csv += ','
    csv += profile.name
    csv += ','
    csv += profile.youtube?.account_url
    csv += ','
    csv += profile.youtube?.avg_view_count
    csv += ','
    csv += profile.youtube?.follower_count
    csv += ','
    csv += profile.youtube?.username
    csv += ','
    csv += profile.youtube?.view_count
    csv += ','
    csv += profile.twitch?.account_url
    csv += ','
    csv += profile.twitch?.avg_view_count
    csv += ','
    csv += profile.twitch?.follower_count
    csv += ','
    csv += profile.twitch?.username
    csv += ','
    csv += profile.twitch?.view_count
    csv += ','
    csv += profile.twitter?.account_url
    csv += ','
    csv += profile.twitter?.favorite_count
    csv += ','
    csv += profile.twitter?.follower_count
    csv += ','
    csv += profile.twitter?.username
    csv += '\n'

    return csv
}

async function wait(ms: number): Promise<void> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, ms)
    })
}

let currentCount = 0
let totalCount = 0
let reportedTotalCount = false

async function fetchInfluencers(url: string) {
    const response = await fetch(url, { method: 'get' })
    const body = (await response.json() as IResponse);

    // Just some reporting so we know what to expect
    if (body.count && !reportedTotalCount) {
        totalCount = body.count
        console.log(`Found ${totalCount} results`)
        reportedTotalCount = true
    }

    // Found some results, 
    if (body.results) {
        console.log(`Writing ${body.results.length} results to csv`)
        for (let i = 0; i < body.results.length; i++) {
            const result = body.results[i];
            const profile = result.profile
            csv = appendResultsToCsv(profile, csv)
        }
        // Better to continually update the CSV with each batch
        // Just in case you hit an error mid-way through
        // This is also where you'd change the name of the output file to your liking
        fs.writeFileSync('influencers.csv', csv)

        console.log(`Finished writing ${body.results.length} to csv`)
        currentCount += body.results.length
        console.log(`Completed ${currentCount} / ${totalCount} results`)
    }

    // Keep going until you reach the end
    // If the API you're using uses paging / limits / offsets instead of a "next" link
    // then modify the URL for the subsequent fetchInfluencers call accordingly
    if (body.next) {
        console.log("More results found...")
        console.log("Waiting 1 second before continuing")
        
        // In case you're in danger of hitting a request limit
        // And to be nice to their server :)
        await wait(1000)
        await fetchInfluencers(body.next)
    }
}

async function run() {
    console.log("Let's find some influencers!...")
    
    // Setting this to fetch 100 at a time. 
    // This is where you'd paste the API request to fetch data
    const url = "https://core.woovit.com/api/v1/public-profiles/?limit=100&offset=0&ordering=relevance&search=indie+games"
    await fetchInfluencers(url)
    
    console.log("I'm finished!")
}

run()