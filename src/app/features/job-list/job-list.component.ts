import { AsyncPipe, NgClass, NgFor } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { JobLineComponent } from '../../shared/components/job-line/job-line.component';
import { JobNavigationComponent } from '../../shared/components/job-navigation/job-navigation.component';
import { JobModel } from '../../shared/models/job.model';
import { JobService } from '../../shared/services/job.service';

@Component({
  selector: 'app-job-list',
  standalone: true,
  imports: [NgFor, AsyncPipe, NgClass, JobNavigationComponent, JobLineComponent],
  templateUrl: './job-list.component.html',
  styleUrl: './job-list.component.css'
})
export class JobListComponent {

  readonly #jobService = inject(JobService);

  jobList$: Observable<JobModel[]> = this.#jobService.jobList$;

  toggleFavorite(jobId: number): void{
    this.#jobService.toggleFavorite(jobId);
  }

}
