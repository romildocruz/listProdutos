import { Component, OnInit, Input } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.page.html',
  styleUrls: ['./produto.page.scss'],
})
export class ProdutoPage implements OnInit {
  public produtos: any[];
  public showList = true;

  constructor(
    private service: DataService
  ) { }

  ngOnInit() {
    this.service.getProdutos()
      .subscribe(
        (res: any) => {
          this.produtos = res;
        }
      )
  }
  toggleView() {
    this.showList = !this.showList;
  }
}
