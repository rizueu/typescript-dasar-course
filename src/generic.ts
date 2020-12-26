function getData(value: any) {
    return value;
}

// getData("Rizki").length;
// getData(123).length;

function myData<T>(value: T) {
    return value;
}

// myData("Rizki").length;
// myData(123).length;

const arrowFunc = <T extends unknown>(value: T) => {
    
}