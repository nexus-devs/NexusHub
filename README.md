# WarframeNexus
Warframe Trade Chat Parser based on TesseractOCR. Server runs on node/sails.js & mongodb.

[![Supported by Warframe Community Developers](https://raw.githubusercontent.com/Warframe-Community-Developers/banner/master/banner.png)](https://github.com/Warframe-Community-Developers "Supported by Warframe Community Developers")

**Checkout the development branch to see current progress.**


## Notice
Nexus-Stats is currently undergoing a full overhaul. Check out the [development branch](https://github.com/nexus-devs/warframe-nexus/tree/development) to see the latest version. Feature-wise, the new build already exceeds the previous. The only part missing now is the view layer/website.


## Links
**NexusStats site** can be found at www.nexus-stats.com

**JSON with all Item Stats** can be found here: www.nexus-stats.com/api

**API query adapter** by Tobiah for easy API access: www.npmjs.com/package/warframe-nexus-query

## Chat Logs (deprecated)

You can find the **last 100 parsed requests** here: www.nexus-stats.com/logs 
(Note: This data is no longer being updated. For the time being, you can contact us on [discord](https://discord.gg/TCxe6P4) for an alternative approach.)

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
