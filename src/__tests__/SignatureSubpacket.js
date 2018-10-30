import * as Subpacket from "../pgp-signature/Packet/SignatureSubpacket/Subpacket.js";
import * as SubpacketArray from "../pgp-signature/Packet/SignatureSubpacket/SubpacketArray.js";

let fixtures = [
  {
    length: 5,
    type: 2,
    subpacket: {
      creation: 1479107004
    }
  },
  {
    length: 9,
    type: 16,
    subpacket: {
      issuer: new Uint8Array([0x96, 0x09, 0xb8, 0xa5, 0x92, 0x8b, 0xa6, 0xb9]),
      issuer_s: "9609b8a5928ba6b9"
    }
  },
  {
    length: 11,
    type: 64,
    subpacket: {
      data: new Uint8Array(10)
    }
  }
];

describe("Signature Subpacket", () => {
  test("serialize -> parse", () => {
    for (const fixture of fixtures) {
      let _data = Subpacket.serialize(fixture);
      let a = {
        b: _data,
        i: 0
      };
      let result = Subpacket.parse(a);
      expect(result).toEqual(fixture);
    }
  });
});

describe("Signature SubpacketArray", () => {
  test("serialize -> parse", () => {
    let _data = SubpacketArray.serialize(fixtures);
    let result = SubpacketArray.parse(_data);
    expect(result).toEqual(fixtures);
  });
});
