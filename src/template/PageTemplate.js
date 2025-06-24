export class PageTemplate {
    constructor() {
        this.PageType = 'default';
        this.isAsideVisible = true;
     }

    head() {
        return `
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Express example</title>
            </head>`;
    };

    header() {
        return `    
        <header>
            <img src="#" alt="Logo">
            <nav>
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/register">Register</a>
                <a href="/login">Login</a>
            </nav>
        </header>`;
    };

    headerAuth() {
        return `    
        <header>
            <img src="#" alt="Logo">
            <nav>
                <a href="/register">Register</a>
                <a href="/login">Login</a>
            </nav>
        </header>`;
    };

    footer() {
        return `
        <footer>
        <p>Pagamina Lietuvoje &copy;</p>
        <nav>
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/register">Register</a>
            <a href="/login">Login</a>
        </nav>
        </footer>`;
    };

    footerAuth() {
        return `
        <footer>
            Pagamina Lietuvoje &copy;
        </footer>`;
    };

    aside() {
        return `<aside>SONINIS MENU</aside>`;
    }

    main () {
        return `Content...`;
    }

    render() {
        return `
        <!DOCTYPE html>
        <html lang="en">
            ${this.head()}
        <body>
            ${this.PageType === 'default' ? this.header() : this.headerAuth()}
            ${this.isAsideVisible ? this.aside() : ''}
        <main>${this.main()}</main>
                ${this.PageType === 'default' ? this.footer() : this.footerAuth()}
        </body>
        </html>`;
    };
};