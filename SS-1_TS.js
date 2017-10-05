module.exports = {
  "Test Login": function (client) {
    client.init('https://demo.slingshothealth.com/app/login')
    client.waitForElementVisible('input', 16000)
    client.setValue('input[type=text]', 'gastro@dokbid.com')
    client.setValue('input[type=password]', 'Test1234')
    client.waitForElementVisible('button[type=submit]', 16000)
    client.click('button[type=submit]')
    client.waitForElementVisible('body', 5000)
    client.pause(5000)
    client.assert.containsText('button', 'Logout')
    client.assert.urlEquals('https://demo.slingshothealth.com/app/')
    client.end();
  }
};
