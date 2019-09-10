/*
    Print all properties in an object (including inherited)
*/

function getAllProperties(obj)
{
    if (!isObject(obj))
    {
        return [];
    }

    let props = [];
    for (let p in obj)
    {
        props.push(p);
    }

    return props;
}

function isObject(obj)
{
    let type = typeof obj;
    return type === 'function' || type === 'object';
}

class People {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
}

People.prototype.planet = 'The Earth';

let props = getAllProperties(new People('Denis', 'Fedorov'));
console.log(props);