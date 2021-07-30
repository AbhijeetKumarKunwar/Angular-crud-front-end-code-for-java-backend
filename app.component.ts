import { collectExternalReferences } from '@angular/compiler';
import { Component } from '@angular/core';
import { WelcomeDataService } from './service/data/welcome-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Todos';
  
}
