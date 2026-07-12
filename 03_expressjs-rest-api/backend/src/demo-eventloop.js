console.log('1. Mulai program');

setTimeout(() => {
  console.log('3. Dijalankan setelah 0 detik (tapi antre di macrotask queue)');
}, 0);

Promise.resolve().then(() => {
  console.log('2b. Microtask (Promise) dijalankan lebih dulu daripada setTimeout');
});

console.log('2a. Baris terakhir kode sinkron');
