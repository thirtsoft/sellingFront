import { Component, OnInit } from '@angular/core';

import { Vente } from 'src/app/models/vente';
import { LigneVente } from 'src/app/models/ligne-vente';


import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import "pdfmake/build/pdfmake"
import { Product } from 'src/app/models/product';
import { VenteService } from 'src/app/module/vente/services/vente.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LigneVenteService } from '../../services/ligne-vente.service';
const pdfMake = window["pdfMake"];
pdfMake.vfs = pdfFonts.pdfMake.vfs

@Component({
  selector: 'app-invoice-vente',
  templateUrl: './invoice-vente.component.html',
  styleUrls: ['./invoice-vente.component.css']
})
export class InvoiceVenteComponent implements OnInit {

  ventesList: Vente[] = [];
  ligneventesList: LigneVente[] = [];
  cmdVente: Vente = {};
  venteId: number = 0;
  currentVente='';
  numeroVente:any;
  totalVente:any;
  montantRecu:any;
  typeReglement:any;
  dateVente:any;
  username='';
  status:any;

  searchedProduct: Product = {};  

  info: any;

  constructor(private venteService: VenteService, 
              private lventeService: LigneVenteService,
              private router : Router,
              private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.venteId = this.route.snapshot.params['id'];
    this.lventeService.getLigneVentesByVenteId(this.venteId).subscribe((data: LigneVente[]) => {
      this.ligneventesList = data;
      this.numeroVente = this.ligneventesList[0]?.vente?.numeroVente;
      this.totalVente = this.ligneventesList[0]?.vente?.totalVente;
      this.montantRecu = this.ligneventesList[0]?.vente?.montantReglement;
      this.typeReglement = this.ligneventesList[0]?.vente?.typeReglement;
      this.dateVente = this.ligneventesList[0].vente?.dateVente;
      this.status = this.ligneventesList[0].vente?.status;
      this.username = 'Tairou';
    }, err => {
      console.log(err);
    })
  }

  getListVentes() {
    this.venteService.getAllVentes().subscribe(
      response =>{
        this.ventesList = response;
      }
    );
  }

  OpenPdf() {
    const document : any = this.getDocument();
    pdfMake.createPdf(document).open();
  }

  PrintPdf() {
    const document : any = this.getDocument();
    pdfMake.createPdf(document).print();
  }

  DownloadPdf() {
    const document: any = this.getDocument();
    pdfMake.createPdf(document).download();
  }


  getDocument() {
    return {
      content: [
        {
          text: 'WOKITE SARL',
          fontSize: 50,
          alignment: 'center',
          color: '#0000ff',
          decoration: 'underline',
          style: 'name',
        },
        {
          text: 'Ingénierie logiciel - Ingénierie Système&Réseau et Cosultance-Formation-Conseil / NINEA',
          fontSize: 12,
          bold: true,
          color: '#0000ff'
        },
        {
          text: 'N°Compte CNCAS SN 048 03001 000108318801 J/40N° Compte BNDE SN 169 03001 001000519301/30',
          fontSize: 10.5,
          bold: true,
          color: '#0000ff'
        },
        {
          text: 'En Face Station Total Hann-Mariste 2/ Dakar',
          fontSize: 9.5,
          bold: true,
          color: '#0000ff',
          alignment: 'center',
        },
        {
          text: 'Tél: 779440310 / Email: support@wokite.net',
          fontSize: 12,
          bold: true,
          alignment: 'center',
          color: '#0000ff'
        },
        {

        },
        {

        },

        {
          columns: [

            [
              {
              //  text: `VENTE N° : ${this.lventeService.listData[0].numero}`,
                text: `VENDEUR  : ${this.username}`,
                fontSize: 12,
                bold: true,
                margin: [0, 15, 0, 15]
              },

            ],

            [
              {
                text: `Date : ${this.dateVente.toLocaleString()!}`,
                alignment: 'right',
                margin: [0, 15, 0, 15]
              },
            ],

          ]
        },
        {
          text: 'FACTURE VENTE',
          bold: true,
          fontSize: 20,
          alignment: 'center',
          color: '#0000ff',
          margin: [0, 8, 0, 8]
        },
        {
          text: 'M.',
          fontSize: 13,
          alignment: 'left',
          margin: [0, 5, 0, 5]
        },
        {

        },

        this.getListLigneVentes(this.ligneventesList),
        {

        },

        {
          text: 'Signature',
          style: 'sign',
          alignment: 'right',
          decoration: 'underline',
        },


      ],

      styles: {
        header: {
          fontSize: 14,
          bold: true,
          margin: [0, 20, 0, 10],
          decoration: 'underline'
        },
        name: {
          fontSize: 14,
          bold: true
        },
        total: {
          fontSize: 12,
          bold: true,
          italics: true
        },
        ligne: {
          fontSize: 12,
          bold: true,
          italics: true
        },
        sign: {
          margin: [0, 50, 0, 10],
          alignment: 'right',
          italics: true
        },
        tableHeader: {
          bold: true,
          fontSize: 14,
          alignment: 'center'
        },

      }
    };

  }
  getListLigneVentes(item: LigneVente[]) {
    return {
      table: {
        widths: ['auto', '*', 'auto', 'auto'],
        body: [
          [
            {
              text: 'QUANTITE',
              style: 'tableHeader'
            },
            {
              text: 'DESIGNATION',
              style: 'tableHeader'
            },
            {
              text: 'P.UNITAIRE',
              style: 'tableHeader'
            },
            {
              text: 'P.TOTAL',
              style: 'tableHeader'
            },

          ],
          ...item.map(x => {
            return ([x.quantite, x?.product?.designation, x.prixVente,
              (x.quantite && x.prixVente ? +x.quantite * +x.prixVente : 0).toFixed(2)])
          }),
          [
            {
              text: 'MONTANT TOTAL',
              alignment: 'center',
              colSpan: 3
            }, {}, {},
            this.ligneventesList.reduce((sum, x)=> sum + (x.quantite && x.prixVente ? +x.quantite * +x.prixVente : 0), 0).toFixed(2)
          ]
        ]
      }
    }

  }

  onGoBack() {
    this.router.navigateByUrl('vente/list');
  }


}
