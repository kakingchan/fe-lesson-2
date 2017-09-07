const addToPhpService = require('./../services/addToPhp');

exports.index = async(ctx, next) => {
    let id = null
    addToPhp = new addToPhpService()
        // if (ctx.query && ctx.query.id) {
        //     id = ctx.query.id
        //     console.log(id)
        //     addToPhp.query(`praisephp/?id=${id}`).then((res) => {
        //         let count = Number(res.count) + 1
        //             // addToPhp.add('praisephp/', { id: res.id, count: count })
        //         console.log(res)
        //             // }).then((res2) => {
        //             //     console.log(res2)
        //     }).catch((err) => {
        //         console.log(err)
        //     })

    // } else {
    //     ctx.status = 400
    //     ctx.body = 'bad request'
    // }

    addToPhp.add('praisephp', { id: 1, count: 0 }).then((res) => {
        // console.log(res)
    }).catch(err => {
        console.log(err)
    })
}