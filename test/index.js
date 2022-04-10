const expect = require("chai").expect;
const provinces = require("../data/provinces");
const districts = require("../data/districts");
const wards = require("../data/wards");
const service = require("../index");

describe("getProvince(provinceCode)", function () {
  it("run", function () {
    const expected = provinces[0];
    const data = service.getProvince(provinces[0].code);
    expect(data).to.equal(expected);
  });
});

describe("getDistrict(districtCode)", function () {
  it("run", function () {
    const expected = districts[0];
    const data = service.getDistrict(districts[0].code);
    expect(data).to.equal(expected);
  });
});

describe("getWard(wardeCode)", function () {
  it("run", function () {
    const expected = wards[0];
    const data = service.getWard(wards[0].code);
    expect(data).to.equal(expected);
  });
});

describe("getProvince(null)", function () {
  it("run", function () {
    const expected = null;
    const data = service.getProvince(999999);
    expect(data).to.equal(expected);
  });
});

describe("getDistrict(null)", function () {
  it("run", function () {
    const expected = null;
    const data = service.getDistrict(999999);
    expect(data).to.equal(expected);
  });
});

describe("getWard(null)", function () {
  it("run", function () {
    const expected = null;
    const data = service.getWard(999999);
    expect(data).to.equal(expected);
  });
});
