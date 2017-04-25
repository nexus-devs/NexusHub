## Nexus Core Resource Node
Node.js server for data-processing of fundamental statistics. Uses the standard [nexus-stats-api](https://github.com/nexus-devs/npm-nexus-api) module to connect to the nexus-stats infrastructure.
- - - -
<br>

## Method Handling
**Basic Usage:**
Imagine having a script saved as `/methods/warframe/v1/items/statistics.js`. Once connected, we'll let the API node know that there's an available resource at the given path (api.nexus-stats.com/warframe/v1/items/statistics). This will automatically generate a route on our RESTful API at runtime and will be repeated for all methods saved in the `methods/` folder.
<br>
<br>
### Endpoint Customization
With the example above in mind, we can further control the endpoints through each classes' schema attribute: <br>
<br>

> **Schema:**
```javascript
resource: ["item", "component"]
```
> **Express Route:** `/items/:item/:component/method`
<br>
<br>

> **Schema:**
```javascript
params: [
    {
        name: "timestart",
        type: "number",
        default: () => {
        return new Date().getTime() / 1 // current time
    },
        description: "Returns data recorded between timestart and timeend"
    },
    {
         name: "timeend",
         type: "number",
         default: () => {
              return new Date(new Date().setDate(new Date().getDate() - 21)) / 1 // 3 weeks ago
         },
         description: "Returns data recorded between timestart and timeend"
    }]
```
> **Express Route:** `/items/method?timestart=1490717012&timeend=1490817012`
<br>

### Authorization
You can also choose which minimum scopes to grant access to, e.g. `scope: "elevated-read-write"`. The API node will automatically include any higher scopes in the permission hierarchy.
