function multiply(array)
{
    if (!(array instanceof Array) || array.length <= 1)
        return;
    const B = [],
          C = [1],
          D = [1];
    let temp1 = 1,
        temp2 = 1;
    for (let i = 0; i < array.length - 1; i++) {
        C.push(temp1 *= array[i]);
        D.push(temp2 *= array[array.length - 1 - i]);
    }
    for (let j = 0; j < array.length; j++) {
        B.push(C[j] * D[D.length - 1 - j]);
    }
    
    return B;
}
