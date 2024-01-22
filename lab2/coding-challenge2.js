// Lab2.1
const gameEvents = new Map([
    [14, 'Ghi bàn'],
    [23, 'Thẻ vàng'],
    [34, 'Ghi bàn'],
    [40, 'Ghi bàn'],
    [45, 'Thay người'],
    [50, 'Thẻ đỏ'],
    [64, 'Thẻ vàng'],
    [70, 'Thay người'],
    [78, 'Thay người'],
    [80, 'Thẻ vàng'],
    [92, 'Ghi bàn'],
]);

// 1.
const events = [...new Set(gameEvents)];
console.log(events);

// 2. 
gameEvents.delete(64);
console.log(gameEvents);

// 3. 
console.log(`Một sự kiện xảy ra trung bình mỗi ${90 / gameEvents.size} phút`);

// 4.
for (const [min, event] of gameEvents) {
    const half = min <= 45 ? 'FIRST' : 'SECOND';
    console.log(`[${half} HALF] ${min}: ${event}`);
}

// Lab2.2
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
    const text = document.querySelector('textarea').value;
    const rows = text.split('\n');

    for (const [i, row] of rows.entries()) {
        const [first, second] = row.toLowerCase().trim().split('_');

        const output = `${first}${second.replace(
            second[0],
            second[0].toUpperCase()
        )}`;
        console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
    }
});

// Lab2.3
const flights = '_Delayed_Departure;fao93766100;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const getCode = str => str.slice(0, 3).toUpperCase();

for (const flight of flights.split('+')) {
    const [type, from, to, time] = flight.split(';');
    const output = `${type.startsWith('_Delayed') ? '🔴' : ''}${type.replaceAll(
        '_',
        ' '
    )} ${getCode(from)} ${getCode(to)} (${time.replace(':', 'h')})`.padStart(36);
    console.log(output);
}

// Lab2.4
const header = "This is global variable";
(function () {
    const header = document.querySelector('h1');
    header.style.color = 'red';
    document.querySelector('body').addEventListener('click', function () {
        header.style.color = 'blue';
        console.log(header);
    });
})();

//Khi nào callback được thực thi?
// => khi sự kiện click xảy ra trên thẻ body thì callback sẽ được thực thi và có thể truy cập biến header để thay đổi màu sắc của thẻ h1
//Biến được sử dụng trong ví dụ này có ý nghĩa?
// => Biến header được sử dụng truy vấn đến bộ chọn thẻ 'h1'. Ban đầu, nó được sử dụng để đặt thuộc tính màu chữ của thẻ 'h1' thành đỏ. Sau đó, trong callback function, nó được sử dụng lại để thay đổi thuộc tính màu chữ thành xanh dương.