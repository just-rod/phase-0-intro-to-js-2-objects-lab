const employee = {
    name: "Justin Rodriguez",
    address: "298 Convent Ave Apt 2B New York, NY 10031"
};

function updateEmployeeWithKeyAndValue(obj, key, value){
    return {...obj, [key]: value,};
}

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value){
    obj[key] = value;

    return obj;
}

function deleteFromEmployeeByKey(obj, key){
    const newObj = {...obj};
    delete newObj[key];

    return newObj;
}

function destructivelyDeleteFromEmployeeByKey(obj, key){
    delete obj[key];
    return obj;
}