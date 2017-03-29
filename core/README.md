## Nexus Core Resource Node
Node.js server for data-processing of fundamental statistics. Uses the standard [nexus-stats-api](https://github.com/Kaptard/nexus-stats-api) module to connect to the nexus-stats infrastructure.
- - - -
<br>

### Method Handling
**Basic Usage:**
Imagine a script saved as `/methods/warframe/v1/items/statistics.js`. Once connected, we'll let the API node know that there's an available resource at `api.nexus-stats.com/warframe/v1/items/statistics`. This will automatically generate a route on our RESTful API for all methods at runtime.
<br>
<br>
#### Endpoint Customization
With the example above in mind, we can further control the endpoints through each classes' schema attribute: <br>

Schema  | CRUD URL
------ | ------
`resource: {item: true, component: true}`   | `/items/:item/:component/method`
`query: {timestart: Number, timeend: Number}` | `/items/method?timestart=1490717012&timeend=1490817012`
<br>

#### Authorization
You can also choose which minimum access scopes, e.g. `scope: "elevated-read-write"`. The API node will automatically include any higher scopes in the hierarchy.
