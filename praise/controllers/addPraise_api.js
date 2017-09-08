const addToPhpService = require('./../services/addToPhp');
const add = require('./../utils/add');

exports.index = async(ctx, next) => {
    let id = null
    addToPhp = new addToPhpService()
    if (ctx.query && ctx.query.id) {
        id = ctx.query.id
        console.log(id)
        let result = await addToPhp.query(`praisephp/add.php?id=${id}`)
        let count = add(result.data.count)
        let last = await addToPhp.query(`praisephp/add.php?count=${count}&id=${id}`)
        console.log(last)
        if (last.code == 'ok') {
            last.count = result.data.count
        }
        ctx.body = last
    } else {
        ctx.status = 400
        ctx.body = 'bad request'
    }
}