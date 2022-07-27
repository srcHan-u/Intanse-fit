export function setClass(elem, mod) {
  elem.classList.add(mod);
}

export function removeClass(elem, mod) {
  elem.classList.remove(mod);
}

export function render(field, variable) {
  field.innerHTML = variable;
  //   countersFieldNode.innerHTML = counter;
}

export function isClass(arr, _class) {
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    if (element.classList.contains(_class)) {
      return element;
    }
  }
}

export const { log } = console;

export function isArrayLike(о) {
  if (
    о &&
    typeof о === "object" &&
    Number.isFinite(о.length) &&
    о.length >= 0 &&
    Number.isInteger(о.length) &&
    о.length < 4294967295
  ) {
    return true;
  } else {
    return false;
  }
}
