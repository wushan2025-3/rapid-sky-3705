async function handleJson() {
  const response = await fetch("http://testcdn.1.alicdn-test.com/v2/files/examples/image/89K.jpeg")
  const obj = await response.arrayBuffer();
  return new Response(obj);
}

export default {
  async fetch(request, context) {
    return handleJson(request, context);
  }
}
