// 10 -> 20 -> 30 -> 40
// a -> b -> c -> d
// foldLeft

const add = (x, y) => x + y;
// list = Node(1, Node(2, Node(3, Node(4))));
// foldLeft(add, 0, list);
append(append(append(append(0, 1), 2), 3), 4);

// foldRight(add, 0, list)
// add(1, );

fn(first, foldRight(add, rest))

// add(2, add(3, add(4, 0)))

// prepend(3, prepend(4, prepend(5, EmptyList())));
// 3 -> 4 -> 5 -> ()

// concat([1,2,3], [4,5,6]) === [1,2,3,4,5,6]
// concat([4,5,6], [1,2,3]) === [4,5,6,1,2,3];


//        1
//     2     3
//   4  _   0 _
// 5  _    _ _

// {[]}(){([])} -> good
// {[}]         -> bad
