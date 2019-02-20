// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================


var friendsList = [
{
    "name": "Julia",
        "photo": "https://unsplash.com/photos/yGV44FdHAs0",
    "scores": [
        5,
        1,
        4,
        4,
        5,
        1,
        2,
        5,
        4,
        1
    ]
},
    {
        "name": "Lizzie",
        "photo": "https://unsplash.com/photos/bAZ4q6PhS9U",
        "scores": [
            5,
            1,
            4,
            4,
            5,
            1,
            2,
            5,
            4,
            1
        ]
    },
    {
        "name": "Milton",
        "photo": "https://unsplash.com/photos/VVEwJJRRHgk",
        "scores": [
            5,
            1,
            4,
            4,
            5,
            1,
            2,
            5,
            4,
            1
        ]
    }
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendsList;

