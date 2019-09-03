
function foo(){
    return 'Utils::foo()';
}

const array = ['foo', 'bar', 'baz'];

export function bar(){
    return 'Utils::bar()';
}

export function baz(){
    return 'Utils::baz()';
}

const data = ['Jan', 'Fev', 'Mar', 'Avr'];

export { foo, array, data as month }