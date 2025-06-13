export function log(...args) {
  console.log(...args);
}

export function empty(mixedVar) {
  let undef;
  let key;
  let i;
  let len;
  const emptyValues = [undef, null, false, 0, "", "0"];
  for (i = 0, len = emptyValues.length; i < len; i++) {
    if (mixedVar === emptyValues[i]) {
      return true;
    }
  }
  if (typeof mixedVar === "object") {
    for (key in mixedVar) {
      if (mixedVar.hasOwnProperty(key)) {
        return false;
      }
    }
    return true;
  }
  return false;
}

export function isset() {
  const a = arguments;
  const l = a.length;
  let i = 0;
  let undef;
  if (l === 0) {
    throw new Error("Empty isset");
  }
  while (i !== l) {
    if (a[i] === undef || a[i] === null) {
      return false;
    }
    i++;
  }
  return true;
}

export function ucfirst(str) {
  str += "";
  const f = str.charAt(0).toUpperCase();
  return f + str.substr(1);
}

export function ucfsplit(str) {
  return ucfirst(
    ucfirst(str.split("_").join(" "))
      .match(/[A-Z]+(?![a-z])|[A-Z]?[a-z]+|\d+/g)
      .join(" ")
  );
}

export function unique(value, index, self) {
  return self.indexOf(value) === index;
}

export function isPrimitive(test) {
  return test !== Object(test);
}

export function getVar(props, k, defaultValue) {
  return props.action == "update" && !!props?.data[k]
    ? props.data[k]
    : defaultValue ?? "";
}

let __i=null;
export function doUntil(fn, stop, seconds) {
  if (typeof fn !== "function") return false;
  if (isNaN(parseInt(seconds))) seconds = 1;

  if (stop && __i) {
    clearInterval(__i);
    __i = null;
  }

  if (!__i && !stop) {
    __i = setInterval(fn, 1000 * seconds);
  }
}

export const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

Number.prototype.toFix = function (places, rounding) {
  rounding = rounding || "round";
  var num = parseFloat(this),
    multiplier = Math.pow(10, places);
  return Number(Math[rounding](num * multiplier) / multiplier);
};
