function Validation(email, password, number) {

    let email = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)
    let password = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)
    let number = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/.test(number)

    if (email) return "not valid email"
    if (password) return "not valid password"
    if (number) return "not valid password"

    return null
}

export default Validation;
