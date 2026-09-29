import { Component } from '@angular/core';

@Component({
  selector: 'app-exibe-mensagem',
  styleUrl: './exibe-mensagem.css',
  templateUrl: './exibe-mensagem.html',
})
export class ExibeMensagem {
    mensagem: string = ''

  alterarMensagem(nome: string) {
    this.mensagem = `Seja bem-vindo, ${nome}!`;
  }

  limpar() {
    this.mensagem = ''
  }
}