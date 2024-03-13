import { AsyncPipe, DatePipe, Location } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, mergeMap } from 'rxjs';
import { JobNavigationComponent } from '../../shared/components/job-navigation/job-navigation.component';
import { JobModel } from '../../shared/models/job.model';
import { JobService } from '../../shared/services/job.service';

@Component({
  selector: 'app-job-detail',
  standalone: true,
  imports: [AsyncPipe, DatePipe, JobNavigationComponent],
  templateUrl: './job-detail.component.html',
  styleUrl: './job-detail.component.css'
})
export class JobDetailComponent {

  readonly #jobService = inject(JobService);
  readonly #activatedRoute = inject(ActivatedRoute);
  readonly #location = inject(Location);

  job$: Observable<JobModel> = this.#activatedRoute.params
    .pipe(
      mergeMap(params => {
        return this.#jobService.getJobById(params['id']);
      })
    );

  goBack(): void {
    this.#location.back();
  }


}
