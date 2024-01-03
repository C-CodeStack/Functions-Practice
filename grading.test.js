const { example, problem1, problem2, problem3, problem4, problem5, problem6, problem7, problem8, problem9, problem10 } = require('./index');

test("", async function() {
  expect(example(6)).toBe(12);
  expect(example(10)).toBe(20);
  expect(example(20)).toBe(40);
});

test("", async function() {
  expect(problem1(24)).toBe(26);
  expect(problem1(200)).toBe(203);
});

test("", async function() {
  expect(problem2(205)).toBe(10);
  expect(problem2(719)).toBe(20);
});

test("", async function() {
  expect(problem3([45, 3, 67, 34, 34, 345, 123])).toBe(348);
  expect(problem3([345, 123])).toBe(468);
});

test("", async function() {
  expect(problem4("candy")).toBe(0);
  expect(problem4("mississippi")).toBe(0);
  expect(problem4("jilliji")).toBe(6);
});

test("", async function() {
  expect(problem5(5,5)).toBe(0);
  expect(problem5(5,3)).toBe(114);
  expect(problem5(10,4)).toBe(3628776);
});

test("", async function() {
  expect(problem6(1)).toBe(2);
  expect(problem6(10)).toBe(3628802);
});

test("", async function() {
  expect(problem7(1,1)).toBe(4.140000000000001);
  expect(problem7(5,3)).toBe(53.260000000000005);
});

test("", async function() {
  expect(problem8(2,3)).toBe(13);
  expect(problem8(20,30)).toBe(130);
});

test("", async function() {
  expect(problem9(2,3)).toBe(false);
  expect(problem9(20,35)).toBe(true);
});

test("", async function() {
  expect(problem10(2,5)).toBe(true);
  expect(problem10(21,31)).toBe(false);
});
