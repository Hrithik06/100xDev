function counter(a) {
    console.log(a);

}
for (let i = 0; i < 100000; i++) {
    setTimeout(counter, 1000 * i, i)
}