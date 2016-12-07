# Development

Development builds can be found here.

[![Supported by Warframe Community Developers](https://github.com/Warframe-Community-Developers/banner/blob/master/banner.png)](https://github.com/Warframe-Community-Developers)

# Data Processing

- Trade Chat Requests are processed by /py/ChatParser.py
- Parsed Requests are sent to /api/controllers/RequestController.js
- When a client requests statistics for an item, they're either processed
  by /api/controllers/ItemController.js or taken from the itemcache collection if no update
  is necessary.


# Links

NexusStats site can be found at www.nexus-stats.com

JSON with all Item Stats can be found here: www.nexus-stats.com/api

API query adapter by Tobiah for easy API access: www.npmjs.com/package/warframe-nexus-query



