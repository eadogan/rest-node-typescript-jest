import request from "supertest";
import app from "../../app";
import { API } from "../utils";
const placeFields = jest.mock("../__mocks__/place");

describe("Creating place", () => {
  it("return http code 200 and create the place", async () => {
    const response = await request(app)
      .post(`${API}/place`)
      .send(placeFields)
      .set("Accept", "application/json")
      .expect("Content-Type", "text/html; charset=utf-8")
      .expect((response) => {
        console.log(response.status);
      })
      .expect(200);
  });
});
