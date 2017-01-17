# WarframeNexus
Warframe Trade Chat Parser based on TesseractOCR. Server runs on node/sails.js & mongodb.

[![Supported by Warframe Community Developers](https://raw.githubusercontent.com/Warframe-Community-Developers/banner/master/banner.png)](https://github.com/Warframe-Community-Developers "Supported by Warframe Community Developers")

**Checkout the development branch to see current progress.**


## Data Processing
- Trade Chat Requests are processed by /py/ChatParser.py
- Parsed Requests are sent to /api/controllers/RequestController.js
- When a client requests statistics for an item, they're either processed
by /api/controllers/ItemController.js or taken from the itemcache collection if no update
is necessary.


## Links
**NexusStats site** can be found at www.nexus-stats.com

**JSON with all Item Stats** can be found here: www.nexus-stats.com/api

**API query adapter** by Tobiah for easy API access: www.npmjs.com/package/warframe-nexus-query

## Chat Logs

You can find the **last 100 parsed requests** here: www.nexus-stats.com/logs 
(Average time for 100 requests is ~1 minute, so please scrape responsibly.)

Schema for the logs:
```
{
    user: str,
    request: <item> <item component>,
    request_operator: WTB/WTS,
    request_param: new/add/update/same,
    request_url: link to page on nexus,
    price: int,
    date: date
}
```

Where `request_param` describes a bit of the user's history:
- new: Item was **never** requested before by user
- add: Item was requested before, but > 24h ago
- same: Item was requested before, but < 24h ago (no changes)
- update: Item was requested before, but < 24h ago (with changed values, like price, components)

**Note:** Keep in mind that the bot may not update for several hours if a patch has been released.
