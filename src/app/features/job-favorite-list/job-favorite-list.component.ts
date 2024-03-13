import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { JobLineComponent } from '../../shared/components/job-line/job-line.component';
import { JobNavigationComponent } from '../../shared/components/job-navigation/job-navigation.component';
import { JobModel } from '../../shared/models/job.model';
import { JobService } from '../../shared/services/job.service';

@Component({
  selector: 'app-job-favorite-list',
  standalone: true,
  imports: [AsyncPipe, JobNavigationComponent, JobLineComponent],
  templateUrl: './job-favorite-list.component.html',
  styleUrl: './job-favorite-list.component.css'
})
export class JobFavoriteListComponent {

  readonly #jobService = inject(JobService);

  jobFavoritesList$: Observable<JobModel[]> = this.#jobService.jobList$
  .pipe(
    map((jobList) => {
      return jobList.filter(job => job.favorite);
    })
  );

}
