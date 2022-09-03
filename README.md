## Nextjs Recoil Styled-components MSWjs Atomic Pattern

### Key feature & Benefits
#### Server-side Rendering
 - Automatic page pre-rendering: Great for SEO and initial Load
 - Blending client-side and server-side: Fetch data on the server and render finished pages

#### File-based Routing
- Define pages and routes with files and folders instead of code (react uses 'react-router-dom' -> which is code-based routing)
- Less code, less work, highly understandable

#### Fullstack Capabilities
- Easily add backen(server-side) code to your Next / React apps
- Storing data, getting data, authentification etc. can be added to your React Project

## What different btw React and Nextjs?
- Initial 'index.html' is not existed in public folder. Bc, 'Nextjs' allows us to determine When a page should be pre-rendered.


## Page Pre-Rendering
- Two form of pre-rendering
- Static Generation: during build, all Page is pre-rendered 
- Server-side Rendering: pages are created just in time after deployment when the requestment reach the server

## Pre-Generated Paths (Routes)
- Dynamic pages ([id].ts etc) don't just need data: u also need to know whice [id] values will be available.
- Multiple concrete [id] page instances (e.g id = 1, id = 2 etc) are pre-Generated
``` js
 export const getStaticProps: GetStaticProps = (context) => {
    .....
    return {
        props: { ... },
        redirect: '/',
        notFound: true, // boolean,
        revalidate: 10 // sec
    }
 }
 export const getStaticPaths() {}
```



## Clent side fetching
#### Some data doesnt need to be pre-rendering
1. Data changeing with high frequency (e.g stock market)
2. Highly user specific data (e.g last order in an online shop)
3. Partial data (e.g data that's only used on a apart of an page)

- Pre-fetchng the data for page generation might not work or be required
- "Traditional" client-side fetching (e.g useEffect() with fetch() is fine)


