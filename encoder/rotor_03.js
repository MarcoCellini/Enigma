let connections = [
    'd', 'r', 't', 'a', 'f', 'g',
    'e', 'l', 'n', 'z', 'm', 'o',
    'q', 'b', 'h', 's', 'u', 'k',
    'x', 'p', 'i', 'j', 'y', 'v',
    'w', 'c'
];

const alphabetic_order = [
    'a', 'b', 'c', 'd', 'e', 'f',
    'g', 'h', 'i', 'j', 'k', 'l',
    'm', 'n', 'o', 'p', 'q', 'r',
    's', 't', 'u', 'v', 'w', 'x',
    'y', 'z'
];

const rotate = (c) => {
    connections = [...connections.slice(c), ...connections.slice(0, c)];
};

export const third_convertion = (count, char) => {
    count % (26 ** 2) == 0 && count != 0 ? rotate(Math.floor(count / (26 ** 2))) : null;
    return connections[alphabetic_order.indexOf(char)];
};