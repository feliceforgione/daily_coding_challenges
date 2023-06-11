/* There's no such thing as private properties on a JavaScript object! But, maybe there are? Implement a function createSecretHolder(secret) which accepts any value as secret and returns an object with ONLY two methods. getSecret() which returns the secret setSecret() which sets the secret */

function createSecretHolder(secret) {
  let sec = secret;
  const obj = {
    getSecret: function () {
      console.log(sec);
    },
    setSecret: function (newSecret) {
      sec = newSecret;
    },
  };
  return obj;
}

const obj = createSecretHolder(5);
obj.getSecret(); // => returns 5
obj.setSecret(2);
obj.getSecret(); // => returns 2
