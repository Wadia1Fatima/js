// ---- .filter ---- //
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newNums = myNums.filter( (num) => {
    return num > 4
} )
console.log(newNums)
const Nums = []
myNums.forEach( (num) => {
    if (num > 4) {
        Nums.push(num)
    }
} )
console.log(Nums);
const books = [
    { title: 'Namal', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Jannat k Patty', genre: 'Fiction', publish: 1992, edition: 2008 },
    { title: 'Muhammad Bin Qasim', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Shahanama', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Bakht', genre: 'Fiction', publish: 2009, edition: 2014 },
    { title: 'Bharam Baqa aur Batil', genre: 'Fiction', publish: 2026, edition: 2026 },
    { title: 'Salahudin Ayubi', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Mazhab aur Science', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Karakarm ka Taj Mahal', genre: 'Fiction', publish: 2000, edition: 2020 },
  ];
let FictionBooks = books.filter( (bk) => bk.genre === 'Fiction')
userBooks = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === "Fiction"
})
console.log(FictionBooks)
console.log(userBooks)

// ---- .map ---- //
const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
// const mynewNums = myNumbers.map( (num) => { return num + 10})

const mynewNums = myNumbers
                .map((num) => num * 10 )
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)
console.log(mynewNums);