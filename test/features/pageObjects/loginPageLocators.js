exports.config = {
    url: "http://leaftaps.com/opentaps/control/main",
    userName: "id=username",
    password: "id=password",
    loginButton: "xpath=//*[@value='Login']",
    welcomeNote: "xpath=//*[@id='form']/h2",
    passwordIncorrectText: "xpath=//*[@id='errorDiv']/p[contains(text(),'following error occurred during login: Password incorrect.')]",
    crmsfaLink: "xpath=//a[contains(text(),'CRM/SFA')]"
}