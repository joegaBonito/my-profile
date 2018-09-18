export default ({ body, title }) => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
      <script>window.__APP_INITIAL_STATE__ = ${initialState}</script>
        <title>${title}</title>
        <link rel="stylesheet" href="/index.css" />
      </head>

      <body>
        <div id="root">${body}</div>
      </body>

      <script src="/assets/bundle.js"></script>
    </html>
  `;
};
