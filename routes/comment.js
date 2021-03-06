const router = require('koa-router')()
const commentController =require('../controllers/commentController')
router.prefix('/comment')
//获取专辑评论信息
router.get('/details/:albumid',async (ctx, next)=>{
    await commentController.comment(ctx)
})
//获取某一歌单的评论信
router.get('/sing/:singlistid',async (ctx, next)=>{
  await commentController.sing(ctx)
})
//获取动态评论信息
router.get('/trend',async (ctx, next)=>{
    await commentController.trend(ctx)
})
//获取歌曲评论信息
router.get('/song',async (ctx, next)=>{
    await commentController.song(ctx)
})
//添加专辑评论信息
router.post('/addComment',async(ctx,next)=> {
    let jsondata=await commentController.addComment(ctx)
    console.log(jsondata)
})

//添加动态评论信息
router.post('/addComment1',async(ctx,next)=> {
    await commentController.addComment1(ctx)
})
//添加歌曲评论信息
router.post('/addComment2',async(ctx,next)=> {
    await commentController.addComment2(ctx)
})
//添加对歌单的评论信息
router.post('/addComment3',async(ctx,next)=> {
  await commentController.addComment3(ctx)
})
//删除评论信息
router.get('/delcomment',async(ctx, next)=> {
    await commentController.delcomment(ctx)
})

module.exports = router
