module.exports = (app) => {
  app.get('/api/test', function(req, res) {
    res.send({ title: 'from localhost:3000 My Title!', body: 'from localhost:3000 My Body!' });
  });
};