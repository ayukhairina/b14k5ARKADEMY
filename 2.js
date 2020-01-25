function is_username_valid(username){
    const regex = /^[a-z]{1}[a-z0-9_.]{7,11}$/;
    return regex.test(username);
}
function is_password_valid(password) {
    const rgx = /^([\W&&0-9]+)([\s]){9}$/;
    return rgx.test(password);
}
console.log(is_username_valid("john.smith"));
console.log(is_username_valid("johnsmith26"));
console.log(is_username_valid("JOHNSmith"));
console.log(is_password_valid("j0hn5m!th"));
