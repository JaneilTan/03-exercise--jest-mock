const { goVroom } = require("./kata");
const faker = require("faker");

jest.mock("faker", () => ({
  datatype: {
    number: jest.fn(),
  },
}));

describe("Dojo", () => {
    it('should return a string', () =>{
        faker.datatype.number.mockReturnValue(5);

    const car = { make: "Mazda", model: "XR8" };
    const expectedVroom = "The Mazda XR8 goes vroooooom!!";

    const result = goVroom(car);

    expect(result).toBe(expectedVroom);
    });
});
