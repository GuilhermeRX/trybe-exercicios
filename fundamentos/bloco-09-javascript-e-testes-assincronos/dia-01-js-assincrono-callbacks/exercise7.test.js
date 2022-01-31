const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};


it('Verifica o funcionamento de uma função Upper Case', (done) => {
  uppercase('test', (str) => {
    try {
      expect(str).toBe('TEST');
      done();
    } catch (error) {
      done(error);
    }
  });
});