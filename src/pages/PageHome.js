import { PageTemplate } from "../template/PageTemplate.js";

export class PageHome extends PageTemplate {

    constructor(req) {
        super(req);
        this.pageJS = 'main.js';
    }

    main() {
        const services = ['UX', 'Design', 'Developer'];
        let servicesHTML = '';

        for (const service of services) {
            servicesHTML += `<li>${service}</li>`
        }
        return ` 
            <h1>
            <i class="fa fa-home"></i> 
            Home page</h1>
            <p>Lorem ipsum dolor sit amet  labore  Iusto, sapiente. Natus.labore  Iusto,    sapiente. Natuslabore  Iusto, sapiente. Natus</p>
            <h1>Services</h1>
            <ul>${servicesHTML}</ul>`;
    }
}