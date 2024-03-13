import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { JobModel } from '../../models/job.model';

@Component({
  selector: 'app-job-line',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './job-line.component.html',
  styleUrl: './job-line.component.css'
})
export class JobLineComponent {
  @Input() job: JobModel | null = null;
}
