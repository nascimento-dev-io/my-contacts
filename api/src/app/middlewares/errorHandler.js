module.exports = (error, request, response, next) => {
  console.log('### Error handler');
  console.error(error);
  response.sendStatus(500);
};
