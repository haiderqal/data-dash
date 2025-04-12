Web Development Project 5 - 📱 Cellphone Store Dashboard
Submitted by: Haider Ali

This web app: Displays a dashboard of cellphone stores (T-Mobile, Verizon, AT&T, etc.) with summary stats, search, and filter options. The app uses React, async API data fetching, and dynamic rendering.

Time spent: 7 hours spent in total

Required Features
The following required functionality is completed:

 The site has a dashboard displaying a list of data fetched using an API call

The dashboard displays 10 unique cellphone stores, one per row

Each row includes two features: store name and store type

 useEffect React hook and async/await are used

 The app dashboard includes at least three summary statistics about the data

Total number of stores

Number of unique store types

Number of stores currently displayed after search/filter

 A search bar allows the user to search for an item in the fetched data

The search bar correctly filters items in the list based on store name

The list dynamically updates as the user types

 An additional filter allows the user to restrict displayed items by specified categories

The filter restricts items by store type (Carrier, Retail Chain, Authorized Retailer, etc.)

The dashboard dynamically updates as the user adjusts the filter

The following optional features are implemented:

 Multiple filters can be applied simultaneously

 Filters use different input types (radio, slider, etc.)

 The user can enter specific bounds for filter values

The following additional features are implemented:

 Clean, modern styling with custom CSS

 Smooth hover animations and responsive layout
 - [X] **Clicking on an item in the list view displays more details about it**
  - Clicking on an item in the dashboard list navigates to a detail view for that item
  - Detail view includes extra information about the item not included in the dashboard view
  - The same sidebar is displayed in detail view as in dashboard view
  - *To ensure an accurate grade, your sidebar **must** be viewable when showing the details view in your recording.*
- [X] **Each detail view of an item has a direct, unique URL link to that item’s detail view page**
  -  *To ensure an accurate grade, the URL/address bar of your web browser **must** be viewable in your recording.*
- [X] **The app includes at least two unique charts developed using the fetched data that tell an interesting story**
  - At least two charts should be incorporated into the dashboard view of the site
  - Each chart should describe a different aspect of the dataset

Video Walkthrough
Here's a walkthrough of implemented user stories:

<img src="./web102datav2.gif" title="Video Walkthrough" width="600" alt="Video Walkthrough" />
GIF created with LiceCAP

Notes
Some challenges I encountered:

Making the filter and search work together smoothly

CSS styling to make the dashboard look professional

Remembering to import the App.css file for the styles to show

Having to make two different charts where they both can be manipulated on their own datasets.

License

Copyright 2025 Haider Ali

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
