module.exports = {
  development: {
    env: v('development'),
    host: v('http://localhost:9000')
  },
  production: {
    env: v('production'),
    host: v('http://localhost:9000')
  }
};

function v(val) {
  return JSON.stringify(val);
}
