ColourLovers Live is an exploration of british spelling and intended to keep software engineers familiar with the latest trends in colour palettes. 🎨

To be clear, this is not a complete or comprehensive spec, let me know if anything's unclear and we'll get it hammered out.

## Overview

Really this just a quick toy project using roughly TenantBase's development stack. No need to be OCD. If some particular part of the mockup is really tricky to implement, just note it in the code and have a mental gameplan of how you'd approach solving it.

The actual mechanics shouldn't be too complicated—hit ColourLovers.com's API and display it nicely with some responsive behavior. Here's a mockup of the version for large screens:

![Desktop Mockup](mockups/ColourLovers%20Live%20Desktop.png)

### Behavior

When the index.html file is loaded, it should immediately load up the newest colour palettes from the CL API, displaying them as shown in the mockup. The mapping from the API to the UI should be pretty self evident.

The page should refresh the data every minute, so we see the latest palettes.

In terms of mobile/responsive behavior, I've also included a mockup of a mobile version to be implemented using standard bootstrap responsive behavior:

![Mobile Mockup](mockups/ColourLovers%20Live%20Mobile.png)

BTW the font is Lato. I've included PSDs in the mockups folder if need 'em to dig further into graphic design details.

### Technical Details

API-wise, you'll want to do a GET against the CL palettes endpoint:

    http://www.colourlovers.com/api/palettes/new?format=json

It will return a list of palettes. Here's an example palette:

```javascript
 {
    "id": 3896580,
    "title": "Tequila Sunrise",
    "userName": "peachcreativeco",
    "numViews": 11,
    "numVotes": 3,
    "numComments": 0,
    "numHearts": 0,
    "rank": 0,
    "dateCreated": "2015-10-09 10:15:22",
    "colors": [
      "9F1F63",
      "D61B5B",
      "F6DC32",
      "F69C1F",
      "67B7A8"
    ],
    "description": "A refreshing tropical palette reminiscent of umbrella cocktails...",
    "url": "http://www.colourlovers.com/palette/3896580/Tequila_Sunrise",
    "imageUrl": "http://www.colourlovers.com/paletteImg/9F1F63/D61B5B/F6DC32/F69C1F/67B7A8/Tequila_Sunrise.png",
    "badgeUrl": "http://www.colourlovers.com/images/badges/p/3896/3896580_Tequila_Sunrise.png",
    "apiUrl": "http://www.colourlovers.com/api/palette/3896580"
  }
```

Further info can be found in the "Palettes" section of the [CL API documentation](http://www.colourlovers.com/api).

Use whatever library of your choice to hit the endpoint. jQuery even.
