// find nth element in fibonancci series
function recurrsivefibonancciSeries(n) {
    if (n < 2) {
        return n;
    }
    return recurrsivefibonancciSeries(n - 1) + recurrsivefibonancciSeries(n - 2);
}
console.log(recurrsivefibonancciSeries(0));
console.log(recurrsivefibonancciSeries(1));
console.log(recurrsivefibonancciSeries(4));

//so for itrative o(n) but
//as the number of n grows the functions calling increases by increases 1 then 2 then 4 then 8 ,16...
//so
//O(2^n)
