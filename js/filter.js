const rooms = [{
    id: 1,
    name: 'red',
    comp: true,
    table: true,
    desk: false
}, {id: 2,
    name: 'green',
    comp: false,
    table: true,
    desk: false
}, {id: 3,
    name: 'blue',
    comp: true,
    table: false,
    desk: false
}, {id: 4,
    name: 'yellow',
    comp: false,
    table: true,
    desk: true
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