import * as Subpacket from "./Subpacket.js";
import concatenate from "concat-buffers";

export function parse(_data) {
  let failsafe = 10;
  let subpackets = [];
  let a = {
    b: _data,
    i: 0
  };
  while (failsafe-- > 0 && a.i < _data.length) {
    try {
      subpackets.push(Subpacket.parse(a));
    } catch (err) {
      console.log(err);
      break;
    }
  }
  return subpackets;
}

export function serialize(subpackets) {
  let buffers = subpackets.map(Subpacket.serialize);
  return concatenate(buffers);
}