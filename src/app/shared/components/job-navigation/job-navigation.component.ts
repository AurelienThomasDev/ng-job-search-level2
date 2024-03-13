import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AppRoutingConstants } from '../../constants/app-routing.constants';

@Component({
  selector: 'app-job-navigation',
  standalone: true,
  imports: [NgClass, RouterLink, RouterLinkActive],
  templateUrl: './job-navigation.component.html',
  styleUrl: './job-navigation.component.css'
})
export class JobNavigationComponent {
  readonly ROUTING_JOBS: string = `/${AppRoutingConstants.ROUTING_JOBS}`;
  readonly ROUTING_FAVORITES: string = `/${AppRoutingConstants.ROUTING_FAVORITES}`;
}
