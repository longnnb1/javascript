var names = ['Khoa', 'Hung', 'Hung', 'Linh', 'Ha', 'Hang']

const [first, second, third] = names


var students = new Map()

students.set('id1', { name: 'Khoa', age: 18 })
students.set('id2', { name: 'Hung' })
students.set('id3', { name: 'Hung' })

for (let [id, info] of students) {
    const { name, age = 7 } = info
    console.log(`${name} is ${age} years old and has id: ${id}`)
}

for (let student of students) {
    console.log(student)
    const id = student[0]
    const name = student[1].name
    const age = student[1].age || 7
    console.log(`${name} is ${age} years old and has id: ${id}`)

}

function logInfo([first, second, third] = []) {
    console.log(`Hello ${first} ${second} ${third} `)
}

var names = ['Khoa', 'Hung', 'Khoi']
logInfo(names)