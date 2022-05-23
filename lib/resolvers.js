'use strict'

const courses = [
    {
        _id: 1,
        title: "Title 1",
        teacher: "Teacher 1",
        description: "Description 1"
    },
    {
        _id: 2,
        title: "Title 2",
        teacher: "Teacher 2",
        description: "Description 2"
    },
    {
        _id: 3,
        title: "Title 3",
        teacher: "Teacher 3",
        description: "Description 3"
    },
    {
        _id: 4,
        title: "Title 4",
        teacher: "Teacher 4",
        description: "Description 4"
    },
]

module.exports = {
    getCourses: () => {
        return courses
    }
}