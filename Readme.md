# Get data
- DVHCVN

![build and test workflow](https://github.com/8bitbase/dmdvhc/actions/workflows/github-actions.yml/badge.svg)
![Languages](https://img.shields.io/github/languages/top/8bitbase/dmdvhc)
![Version](https://img.shields.io/github/v/release/8bitbase/dmdvhc)
![Release date](https://img.shields.io/github/release-date/8bitbase/dmdvhc)
![Issues](https://img.shields.io/github/issues/8bitbase/dmdvhc)

## Functions

### Get list data
- getProvinces()
- getDistricts()
- getWards()

### Filter list data
- getDistrictsByProvinceCode(provinceCode)
- getWardsByDistrictCode(districtCode)
- getWardsByProvinceCode(provinceCode)

### Get detail data
- getProvice(provinceCode)
- getDistrict(districtCode)
- getWard(wardCode)

## How to use
```
  const sv = require('dmdvhc');
  const provinces = sv.getProvinces()
```

### The MIT License (MIT)

Copyright (c) <2022>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.