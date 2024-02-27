import { Component, HostListener, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'shell';
  modalRef?: BsModalRef;
  @ViewChild('template') modalTemplate!: any;

  constructor(
    private modalService: BsModalService,
    private router: Router,
    private authService: AuthService,
  ) {}

  openModal(template: TemplateRef<void>) {
    this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
  }

  confirm(): void {
    // this.reset();
    this.modalRef?.hide();
    this.router.navigate(['/']);
  }

  ngOnInit(): void {
    
  }

  

}
