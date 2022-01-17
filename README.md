# Esquad &middot; [![pipeline status](https://gitlab.com/oxfist/esquad/badges/main/pipeline.svg)](https://gitlab.com/oxfist/esquad/-/commits/main)

![Icon of person performing a squat](./public/squat.png)

## Improvements

- [x] Pipeline config to run tests
- [x] Properly render squads
- [x] Formatting to squads with 'champion' space
- [x] Extract squads arrangement algorithm and re-build with TDD
- [x] Selection of champion for each squad
- [x] Upgrade to Next.js 11
- [x] CSS style with Chakra UI (tag)
- [x] Option to select number of squads to build
- [x] Copy to clipboard button for generated squads
- [x] Loading animation for Generate Squads button
- [ ] Option to generate without champions
- [ ] Add option to keep two people in separate squads
- [ ] Add selection of absents to exclude from squad building
- [ ] Add CSS style with Tailwind CSS (tag)

## How do I run this app?

First, install dependencies with:

```bash
npm install
```

After dependencies are installed, you can start the development server by
running:

```bash
npm run dev
```

You should see something like this:

```sh
$ npm run dev

> nextjs@0.1.0 dev
> next dev

ready - started server on 0.0.0.0:3000, url: http://localhost:3000
info  - Using webpack 5. Reason: Enabled by default https://nextjs.org/docs/messages/webpack5
event - compiled successfully
```

Open <http://localhost:3000> with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page
auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on
<http://localhost:3000/api/hello>. This endpoint can be edited in
`pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are
treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead
of React pages.

## Next.js Resources

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js
  features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out
[the Next.js GitHub repository](https://github.com/vercel/next.js/) - your
feedback and contributions are welcome!

## Credits

Icons made by
[ultimatearm](https://www.flaticon.com/authors/ultimatearm 'ultimatearm') from
<https://www.flaticon.com>.
