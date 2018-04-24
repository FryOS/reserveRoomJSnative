const rooms = [{
    id: 1,
    name: 'red',
    computer: true,
    table: true,
    desk: false,
    tv: true,
    phone: true
}, {id: 2,
    name: 'green',
    computer: false,
    table: true,
    desk: false,
    tv: true,
    phone: true
}, {id: 3,
    name: 'blue',
    computer: true,
    table: false,
    desk: false,
    tv: true,
    phone: true
}, {id: 4,
    name: 'yellow',
    computer: false,
    table: true,
    desk: true,
    tv: true,
    phone: true
}];


const search = {
    table: true,
    desk: true
};


function findRoom(search) {
    const result = [];
    for (let i = 0; i < rooms.length; i++) {
        let room = rooms[i];
        if (search.table === room.table && search.desk === room.desk){
            result.push(room);
        }
    }
    return result;

}
const filterRoom = findRoom(search);
console.assert(filterRoom.length === 1, 'ожидалась одна комната' );
console.log(filterRoom);