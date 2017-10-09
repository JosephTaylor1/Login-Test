module.exports = {
  "Signup Test": function (client) {
    client.init('https://demo.slingshothealth.com/app/login')
    client.waitForElementVisible('button[type=button]', 16000)
    client.click('#root > div > div.navigation > div.right-menu > a:nth-child(2) > button')
    client.pause(16000)
    client.assert.urlEquals('https://demo.slingshothealth.com/app/signup')
    client.end()
  }
};
