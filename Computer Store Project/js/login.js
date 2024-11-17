var users = [];
        var usersString = localStorage.getItem("users");

        if (usersString != null) {
            users = JSON.parse(usersString);
        }

        var usernameField = document.getElementById('username');
        var passwordField = document.getElementById('password');

        var usernameError = document.getElementById('usernameError');
        var passwordError = document.getElementById('passwordError');

        clearLog();

        function clearLog() {
            usernameError.innerText = "";
            passwordError.innerText = "";
        }

        function login(event) {
            clearLog();
            event.preventDefault();
            if (checkFields()) {
                if (checkUser()) {
                    var toastElList = [].slice.call(document.querySelectorAll('.toast'))
                    var toastList = toastElList.map(function (toastEl) {
                        return new bootstrap.Toast(toastEl)
                    })
                    $("#myModal").modal('toggle');
                    setTimeout(() => {
                        window.location.href = 'index.html';
                    }, 1200);
                } else {
                    usernameError.innerText = 'Your username is incorrect';
                    passwordError.innerText = 'Your password is incorrect';
                }
            }
        }

        function checkFields() {
            if (usernameField.value == '') {
                usernameError.innerText = 'Please, input your username';
            }

            if (passwordField.value == '') {
                passwordError.innerText = 'Please, input your passport'
            }

            if (usernameField.value != '' && passwordField.value != '') {
                return true;
            } else {
                return false;
            }
        }

        function checkUser() {
            for (let i = 0; i < users.length; i++) {
                const u = users[i];
                if (u.username === usernameField.value && u.password === passwordField.value) {
                    localStorage.setItem('active-user', JSON.stringify(u));
                    return true;
                }
            }
            return false;
        }