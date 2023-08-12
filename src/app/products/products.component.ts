import { Component, OnInit } from '@angular/core';
import { ProductDto, ProductServiceServiceProxy } from '@shared/service-proxies/service-proxies';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  productDtos: ProductDto[] = [];

  constructor(private _productService: ProductServiceServiceProxy) {

  }

  ngOnInit(): void {
    this._productService.getAll().subscribe(result => {
      this.productDtos = result;
    });
  }


}
