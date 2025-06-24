import { PageTemplate } from "../template/PageTemplate.js";

export class PageRegister extends PageTemplate {
    constructor() {
        super ();
        this.PageType = 'auth';
        this.isAsideVisible = false;

    }
    main() {
        return `
            <h1>Register</h1>
            <p> RegisterLorem ipsum dolor sit amet  labore Register Iusto,      sapiente. Natus.labore  Iusto, sapiente. Register Natuslabore   Iusto,    sapiente. Natus</p>
            <form>
                <label>Username</label>
                <input type="text">
                <label>Password</label>
                <input type="password">
                <button type="submit">Register</button>
            </form>`;
    }
}