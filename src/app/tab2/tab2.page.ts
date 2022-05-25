import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  public candidato: string;
  public partido: string;
  public foto: string;
  public nome: string;
  public contTotal = 0;
  public nuberLula = 0;
  public nuberCiro = 0;
  public nuberBolsonaro = 0;
  public percentoLula = 0;
  public percentoBolsonaro = 0;
  public percentoCiro = 0;

  constructor() {}

  public cadastrar(): void {
    if(this.candidato === '13'|| this.candidato === '22' || this.candidato === '12'){
      this.contTotal++;
    }

    if(this.candidato === '13'){
    this.candidato = '13';
    this.partido = 'PT';
    this.foto = '../../assets/img/lula-agencia-brasil-e1650648931917.jpg';
    this.nome = 'Lula';
    this.nuberLula++;

    }
    if(this.candidato === '22'){
      this.candidato = '22';
      this.partido = 'Sem Partido';
      this.foto = '../../assets/img/bosonaro.jpg';
      this.nome = 'Bolsonaro';
      this.nuberBolsonaro++;
    }
    if(this.candidato === '12'){
      this.candidato = '12';
      this.partido = 'PDT';
      this.foto = '../../assets/img/ciro.jpg';
      this.nome = 'Ciro';
      this.nuberCiro++;
    }
    this.percentoLula = ((this.nuberLula * 100)/this.contTotal);
    this.percentoBolsonaro = ((this.nuberBolsonaro * 100)/this.contTotal);
    this.percentoCiro = ((this.nuberCiro * 100)/this.contTotal);
  }
}
