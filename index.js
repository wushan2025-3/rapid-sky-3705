export default {
  async fetch(request, context, env) {
    const TEST_KEY_PLAIN = env.3e2r;

    return new Response(`Get TEST_KEY_PLAIN_ly: ${TEST_KEY_PLAIN} `);
  },
};
