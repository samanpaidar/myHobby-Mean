import { Component } from '@angular/core';

@Component({
    selector: 'app-header',
    template: `
    <header class="row">
        <nav class="col-md-8 col-md-offest-2">
            <ul class="nav nav-pills">
                <li><a>Messenger</a></li>
                <li><a>Autentication</a></li>
            </ul>
        </nav>
    </header>
    `
})
export class HeaderComponent{}