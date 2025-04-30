import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-design-system-lib',
  imports: [CommonModule],
  templateUrl: './design-system-lib.component.html',
  styleUrl: './design-system-lib.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DesignSystemLibComponent {}
