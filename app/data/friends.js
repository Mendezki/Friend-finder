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
        3,
        1,
        4,
        2,
        2,
        5,
        3,
        4,
        5
    ]
},
    {
        "name": "Sharon",
        "photo": "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/elm020119cesharonvanetten-001-1546903284.jpg?crop=1.00xw:0.334xh;0,0.161xh&resize=1200:*",
        "scores": [
            1,
            4,
            4,
            2,
            5,
            2,
            3,
            5,
            3,
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
        "name": "Leon",
        "photo": "http://cuzcoeats.com/wp-content/uploads/2017/08/leon_front4-840x440.png",
        "scores": [
            2,
            3,
            3,
            5,
            5,
            4,
            4,
            2,
            3,
            2
        ]
    },
    {
        "name": "Yalitza",
        "photo": "https://laopinionla.files.wordpress.com/2018/11/gettyimages-1062223424-yalitza-aparicio.jpg?quality=80&strip=all&w=940",
        "scores": [
            3,
            3,
            2,
            4,
            4,
            2,
            4,
            4,
            1,
            5
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

