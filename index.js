const provinces = require("./data/provinces");
const districts = require("./data/districts");
const wards = require("./data/wards");

module.exports = {
  getProvinces: () => provinces,
  getDistricts: () => districts,
  getWards: () => wards,
  getDistrictsByProvinceCode: (provinceCode) =>
    districts.filter((item) => item.province_code == provinceCode),
  getWardsByDistrictCode: (districtCode) =>
    wards.filter((item) => item.district_code == districtCode),
  getWardsByProvinceCode: (provinceCode) =>
    wards.filter((item) => item.province_code == provinceCode),
  getProvince: (provinceCode) => {
    const data = provinces.filter((item) => item.code == provinceCode);
    if (data && data.length > 0) {
      return data[0];
    }

    return null;
  },
  getDistrict: (districtCode) => {
    const data = districts.filter((item) => item.code == districtCode);
    if (data && data.length > 0) {
      return data[0];
    }

    return null;
  },
  getWard: (wardCode) => {
    const data = wards.filter((item) => item.code == wardCode);
    if (data && data.length > 0) {
      return data[0];
    }

    return null;
  },
};
