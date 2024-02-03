function Validation(Email, Password, Number) {

    let emailVerification = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(Email)
    let passwordVerification = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(Password)
    let numberVerification = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/.test(Number)

    console.log(emailVerification);

    if (!emailVerification) return "not valid email"
    if (!passwordVerification) return "not valid password"
    if (!numberVerification) return "not valid password"

    return null
}

export default Validation;
