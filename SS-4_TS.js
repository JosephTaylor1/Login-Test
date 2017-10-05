module.exports = {
  "Test Login": function (client) {
    client.init('https://demo.slingshothealth.com/app/login')
    client.waitForElementVisible('input', 16000)
    client.setValue('input[type=text]', 'gastro1@dokbid.com')
    client.setValue('input[type=password]', 'Test12345')
    client.waitForElementVisible('button[type=submit]', 16000)
    client.click('button[type=submit]')
    client.waitForElementVisible('body', 5000)
    client.pause(5000)
    client.assert.containsText('div[role="alert"]', 'Invalid credentials given.')
    client.end();
  }
};
