export {};

declare global {
  interface Object {
    get(s: string) : any;
    contains(s: string) : boolean;
  }

  interface Array<T> {
    contains(s: string): boolean;
    notContains(s: string): boolean;
    add(s: string): void;
    removeElement(s: string): void;
  }

  interface String {
    contains(s: string): boolean;
    notContains(s: string): boolean;
    remove(s: string): string;
  }
}

// Object
Object.prototype.get = function (s: string): any {
  return Object(this)[s];
}

Object.prototype.contains = function (s: string): boolean {
  return Object(this).hasOwnProperty(s);
}

// Array
Array.prototype.contains = function (s: string): boolean {
  return this.includes(s);
}

Array.prototype.notContains = function (s: string): boolean {
  return !this.includes(s);
}

Array.prototype.add = function (s: string): void {
  this.push(s);
}

Array.prototype.removeElement = function (s: string): void {
  let index = this.indexOf(s);
  if(index > -1)
  this.splice(index,1);
}

// String
String.prototype.contains = function (s: string) : boolean {
  return String(this).includes(s);
};

String.prototype.notContains = function (s: string): boolean {
  return !String(this).includes(s);
};

String.prototype.remove = function (s: string): string {
  return String(this).replace(s, '');
};