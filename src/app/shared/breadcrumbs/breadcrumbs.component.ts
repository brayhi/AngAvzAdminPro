import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: []
})
export class BreadcrumbsComponent implements OnInit {

  label:string = '';

  constructor(private router: Router, public title:Title, public meta:Meta) {
    this.getDataRoute()
      .subscribe(event => {
        console.log(event);
        this.label = event.titulo;
        this.title.setTitle(this.label);
        let metaTag: MetaDefinition = {
          name: 'description',
          content: this.label
        }
        this.meta.updateTag(metaTag);
      })
  }

  getDataRoute() {
    return this.router.events
      .pipe(filter(event => event instanceof ActivationEnd))
      .pipe(filter((event: ActivationEnd) => event.snapshot.firstChild === null))
      .pipe(map((event: ActivationEnd) => event.snapshot.data))

  }

  ngOnInit() {
  }

}
