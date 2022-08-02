import { Component, OnInit } from '@angular/core';
import { debounce } from './core/debounce';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'ng-practice';

    public ngOnInit(): void {
    }

    @debounce(200)
    public test(text: string): void {
        console.log(text)
    }
}
