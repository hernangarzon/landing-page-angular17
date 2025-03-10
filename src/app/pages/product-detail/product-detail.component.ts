import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { __param } from 'tslib';
import { IProduct } from '../../models/product.model';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit {
  

  loading:boolean = true;
  public product?: IProduct;

  private _route = inject(ActivatedRoute)
  private _apiService = inject(ApiService)

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      this._apiService.getProduct(params['id']).subscribe((data: IProduct) => {
        console.log(data)
        this.product = data;
        this.loading = false;
      })
    })
  }
}
