import { Component, OnInit, OnDestroy } from '@angular/core';
import {ActivatedRoute,Params} from '@angular/router';
import{OfertasService} from '../topo/ofertas.service';
import { Oferta } from '../shared/ofertas.model';
import{CarrinhoService} from '../carrinho.service'

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [OfertasService]
})
export class OfertaComponent implements OnInit {

public oferta:Oferta
  constructor(private route: ActivatedRoute, private ofertasService: OfertasService,private carrinhoService: CarrinhoService) {
    //this.route =route
   }

  ngOnInit() {
     
  //método de snapshot
   //this.route.snapshot.params['id']
  //método subscribe
  //this.route.params.subscribe((parametro: any)=>{
  // console.log(parametro.id)

  this.route.params.subscribe((parametros: Params)=>{

    this.ofertasService.getOfertaPorId(parametros.id)
    .then((oferta: Oferta)=>{
      this.oferta = oferta
      
    })
    
  })

  
  }

  ngOnDestroy(){

  }

  public adicionarItemCarrinho(oferta: Oferta):void{
    this.carrinhoService.incluirItem(this.oferta)
    console.log(this.carrinhoService.exibirItens())
  }

  }


