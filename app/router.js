module.exports = app => {
  const { router, controller } = app;
  router.get("/api/book/swiper", controller.api.book.getSwiperList);
  router.get("/", controller.index.public);
}