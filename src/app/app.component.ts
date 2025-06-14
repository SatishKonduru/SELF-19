import { CommonModule } from '@angular/common';
import { ForComponent } from './components/for/for.component';
import { EventBindingComponent } from './components/event-binding/event-binding.component';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TestComponent } from './components/test/test.component';
import { InterpolationComponent } from './components/interpolation/interpolation.component';
import { PropertyBindingComponent } from './components/property-binding/property-binding.component';
import { StyleBindingComponent } from './components/style-binding/style-binding.component';
import { ClassBindingComponent } from './components/class-binding/class-binding.component';
import { TempRefVariablesComponent } from './components/temp-ref-variables/temp-ref-variables.component';
import { TwoWayDataBindingComponent } from './components/two-way-data-binding/two-way-data-binding.component';
import { IfComponent } from './components/if/if.component';
import { SwitchComponent } from './components/switch/switch.component';
import { SenderComponent } from './components/sender/sender.component';
import { ViewChildComponent } from './components/view-child/view-child.component';
import { ParentComponent } from './components/parent/parent.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ParentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'SELF-19';
}
