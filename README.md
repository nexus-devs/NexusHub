# WarframeNexus
Warframe Trade Chat Parser based on TesseractOCR. Server runs on node/sails.js & mongodb.

[![Supported by Warframe Community Developers](https://github.com/Warframe-Community-Developers/banner/blob/master/banner.png)](https://github.com/Warframe-Community-Developers "Supported by Warframe Community Developers")

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
