import { PageTemplate } from "../template/PageTemplate.js";

export class PageHome extends PageTemplate {

    constructor(){
        super();
        this.pageJS = 'main';
    }

    main () {
        const services = ['UX', 'Design', 'Developer'];
        let servicesHTML = '';

        for (const service of services) {
            servicesHTML += `<li>${service}</li>`
    }
        return ` 
            <h1>Home page</h1>
            <p>Lorem ipsum dolor sit amet  labore  Iusto, sapiente. Natus.labore  Iusto,    sapiente. Natuslabore  Iusto, sapiente. Natus</p>
            <h1>Services</h1>
            <ul>${servicesHTML}</ul>`;
    }
}