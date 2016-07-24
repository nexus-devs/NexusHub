# Development

Development builds can be found here.


# Data Processing

- Trade Chat Requests are processed by /py/ChatParser.py
- Parsed Requests are sent to /api/controllers/RequestController.js
- When a client requests statistics for an item, they're either processed
  by the ItemController or taken from the itemcache collection if no update
  is necessary.


# Roadmap
Planned updates

High Priority:
- Proper Chart dates
- Real time updates with sockets
- Weekly/Monthly/All Time timerange for charts
- Advanced price gathering algorithm

Other:
- Premium Service
  including:
    - Buyers List
    - Sellers List
    - Trackable Items
    - Busy Times
    - Alerts on unusually low priced requests
    - Auction-house styled inline offers visible to everyone (Idea requires validation)
