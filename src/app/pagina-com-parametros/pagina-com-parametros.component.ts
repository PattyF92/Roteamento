import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pagina-com-parametros',
  templateUrl: './pagina-com-parametros.component.html',
  styleUrls: ['./pagina-com-parametros.component.css']
})
export class PaginaComParametrosComponent implements OnInit{
  id: number | null = null;
  idade: number | null = null;
  nome: string | null= "";

  constructor (private activedRoute: ActivatedRoute) { }
  
  ngOnInit(): void {
    const par = this.activedRoute.paramMap.subscribe(params =>{
      this.id = Number (params.get("id"))
    });

    this.activedRoute.queryParams.subscribe(params =>{
      this.idade = Number (params['get']("idade"));
      this.nome = params['get']("nome")
    })
    
    
  }
  


}
