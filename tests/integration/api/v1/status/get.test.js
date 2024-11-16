test("GET to /api/v1/status should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  const responseBody = await response.json();

  const parsedUpdatedAt = new Date(responseBody.updated_at).toISOString();

  expect(response.status).toBe(200);

  expect(responseBody.updated_at).toEqual(parsedUpdatedAt)
  expect(responseBody.dependencies.database.version).toEqual("16.0")
  expect(responseBody.dependencies.database.max_connections).toEqual("100")
  expect(responseBody.dependencies.database.connections_being_used).toEqual(1)

});
