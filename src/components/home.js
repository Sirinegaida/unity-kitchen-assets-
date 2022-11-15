import React from "react";
const home = () => {
    return (
    <div>
        <html lang="en">
            <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="stylesheet" href="style.css" />
                <title>Form Input Wave</title>
            </head>
            <body>
                <div class="container">
                    <h1>Please Login</h1>
                    <form>
                        <div class="form-control">
                         <input type="text" required>
                                <label>Email</label>
                                <label>
                                    <span style="transition-delay: 0ms">E</span>
                                    <span style="transition-delay: 50ms">m</span>
                                    <span style="transition-delay: 100ms">a</span>
                                    <span style="transition-delay: 150ms">i</span>
                                    <span style="transition-delay: 200ms">l</span>
                                </label>
                        </div>

                        <div class="form-control">
                            <input type="password" required>
                                <label>Password</label>
                        </div>

                        <button class="btn">Login</button>

                        <p class="text">Don't have an account? <a href="#">Register</a> </p>
                    </form>
                </div>
                <script>
                   { const labels = document.querySelectorAll('.form-control label')

                        labels.forEach( label => {
                        label.innerHTML = label.innerText
                            .split('')
                                .map((letter, idx) =>
                                    `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
                            .join('')
                        })
}
                    </script>
            </body>
        </html>
    </div>
}
