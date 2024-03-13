import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, EMPTY, Observable, catchError, tap } from 'rxjs';
import { JobModel } from '../models/job.model';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  readonly #httpClient = inject(HttpClient);

  #jobList: BehaviorSubject<JobModel[]> = new BehaviorSubject<JobModel[]>([]);

  jobList$: Observable<JobModel[]> = this.#jobList.asObservable();

  constructor() {
    this.initJobList().subscribe();
  }
  
  //TODO: Afficher erreur a l'utilisateur : utiliser alerte()

  initJobList(): Observable<JobModel[]> {
    return this.#httpClient.get<JobModel[]>('/jobs')
    .pipe(
      tap((jobList: JobModel[]) => {
        this.#jobList.next(jobList);
      }),
      catchError((error) => {
        alert(`An error occured when retrieving the job list : ${error}`);
        console.log(error);
        return EMPTY;
      })
    );
  }


  toggleFavorite(idJob : number) : void {
    const jobToUpdate: JobModel | undefined = this.#jobList.value.find(job => job.id === idJob);
    if(!jobToUpdate){
      throw new Error('This job does not exist');
    }
    jobToUpdate.favorite = !jobToUpdate.favorite;

    this.#jobList.next([...this.#jobList.value]);
  }


  getJobById(id: number): Observable<JobModel>{
    return this.#httpClient.get<JobModel>(`/jobs/${id}`)
    .pipe(
    catchError((error) => {
      alert(`An error occured when retrieving the job list : ${error}`);
      console.log(error);
      return EMPTY;
    }));
  }

}
