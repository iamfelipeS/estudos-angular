import { CommonModule } from "@angular/common";
import { Component, EventEmitter, Input, model, OnInit, output, Output, signal } from "@angular/core";
import { Produto } from "../../../models/product.model";


@Component({
    selector: 'app-modal-produtos',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './modal-produtos.html',
    styleUrl: './modal-produtos.scss',
})
export class ModalProdutos {
    @Input() produtos: Produto[] = [];
    // @Output() modalAberto = new EventEmitter<boolean>();
    modalAberto = model(false);
    fecharModal() {
        // this.modalAberto.emit(false);
        this.modalAberto.set(false);
    }
}