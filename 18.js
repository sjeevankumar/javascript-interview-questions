// Question: Generate Random AlphaNumeric Captcha Using Javascript

const generateRandomNumber = (length) => {
    return Math.floor(Math.random() * length)
}

const generateCaptcha = () => {
    let captcha = ''
    const captchaValues = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    const captchaValuesLen = captchaValues.length
    const desiredCaptchaLen = 5
    for (let i = 0; i < desiredCaptchaLen; i++) {
        const values = captchaValues[generateRandomNumber(captchaValuesLen)]
        captcha += values
    }
    return captcha
}

const captcha = generateCaptcha()
console.log(captcha)

