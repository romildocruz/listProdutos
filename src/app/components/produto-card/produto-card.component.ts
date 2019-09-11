import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-produto-card',
  templateUrl: './produto-card.component.html',
  styleUrls: ['./produto-card.component.scss'],
})
export class ProdutoCardComponent implements OnInit {
  @Input() produtos: any[] = [];

  constructor() { }

  ngOnInit() { }

}
