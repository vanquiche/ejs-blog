require('dotenv').config();

const sanityClient = require('@sanity/client');
const client = sanityClient({
  projectId: 'n0yp8egn',
  dataset: 'production',
  token: process.env.SANITY_API_TOKEN,
});

exports.handler = async function (event, context, callback) {
  const result = await client.create({
    ...JSON.parse(event.body),
    _type: 'comment'

  });
  callback(null, {
    statusCode: 200,
    body: JSON.stringify(result),
  });
};
