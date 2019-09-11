import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-produto-list',
  templateUrl: './produto-list.component.html',
  styleUrls: ['./produto-list.component.scss'],
})
export class ProdutoListComponent implements OnInit {
  @Input() produtos: any[] = [];
  constructor() { }

  ngOnInit() { }

}
