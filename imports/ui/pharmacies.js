import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';

import './pharmacies.html';

let reponseQuestion1=null, reponseQuestion2=null, reponseQuestion3=null, reponseQuestion3Autre=null, reponseQuestion4=null, reponseQuestion5=null,
reponseQuestion6=null, reponseQuestion7=null, reponseQuestion8=null, reponseQuestion9=null, reponseQuestion10=null,
reponseQuestion11=null, reponseQuestion12=null, reponseQuestion13=null, reponseQuestion13Date=null,
reponseQuestion13Nom=null, reponseQuestion14=null,
reponseQuestion15Choix1=null, reponseQuestion15Choix2=null, reponseQuestion15Choix3=null, reponseQuestion15Choix4=null,
reponseQuestion15Choix5=null, reponseQuestion15Choix6=null, reponseQuestion15Choix7=null, reponseQuestion15Choix8=null,
reponseQuestion15Choix9=null, reponseQuestion15Choix10=null, reponseQuestion15Autre=null,
reponseQuestion16=null,reponseQuestion16ReseauxSociauxDate=null, 
reponseQuestion17Choix1=null, reponseQuestion17Choix2=null, reponseQuestion17Choix3=null, reponseQuestion17Choix4=null,
reponseQuestion17Choix5=null, reponseQuestion17Choix6=null, reponseQuestion17Autre=null, 
reponseQuestion18=null, 
reponseQuestion19=null,reponseQuestion19Marque=null,
reponseQuestion20=null, reponseQuestion20Groupement=null,
reponseQuestion21=null, reponseQuestion22=null, reponseQuestion23=null, reponseQuestion24=null, 
reponseQuestion25nbEcrans=null, reponseQuestion25nbPostesComptoir=null, reponseQuestion25nbPostesBureautique=null,
reponseQuestion25nbPostesBackOffice=null,
reponseQuestion26=null, reponseQuestion26autreLGO=null,
reponseQuestion27Choix1=null, reponseQuestion27Choix2=null, reponseQuestion27Choix3=null, reponseQuestion27Choix4=null,
reponseQuestion27Choix5=null, reponseQuestion27Choix6=null, reponseQuestion28=null,
reponseQuestion29specialites_et_ordonnancesCA=null, reponseQuestion29medication_et_nutritionCA=null,
reponseQuestion29parapharmacie_et_lppCA=null;


Router.route('/', function () {
	this.render('pageOne');
});

Template.pageOne.events({
	'click #page2': function () {
		const elementQuestion1a = document.getElementById('homme');
		const elementQuestion1b = document.getElementById('femme');
		const elementQuestion2 = document.getElementById('age');
		const elementQuestion3 = document.getElementById('faculte');
		const elementQuestion3Autre = document.getElementById('autreFaculte');

		if ((elementQuestion1a.checked || elementQuestion1b.checked) && (elementQuestion2.value != "" && elementQuestion2.value != undefined) &&
			( (elementQuestion3.value != "" && elementQuestion3.value != "Autre" && elementQuestion3.value != undefined) || 
				(elementQuestion3Autre.value != "" ))) {
			Router.go('/two'); 
	} else {
		alert ("Don't Work ! ");
	}
}
});

Router.route('/two', function () {
	this.render('pageTwo');
});

Template.pageTwo.events({
	'click #page3': function () {
		const elementQuestion4a = document.getElementById('r4c1');
		const elementQuestion4b = document.getElementById('r4c2');
		const elementQuestion4c = document.getElementById('r4c3');
		const elementQuestion5 = document.getElementById('r5');	
		const elementQuestion6a = document.getElementById('r6c1');
		const elementQuestion6b = document.getElementById('r6c2');

		if((elementQuestion4a.checked || elementQuestion4b.checked || elementQuestion4c.checked) && (elementQuestion5.value !="") && (elementQuestion6a.checked || elementQuestion6b.checked) ) {
			Router.go('/three');
		} else {
			alert ("Don't Work ! ");
		}

	}
});

Router.route('/three', function () {
	this.render('pageThree');
});

Template.pageThree.events({
	'click #page4': function () {
		const elementQuestion7a = document.getElementById('r7c1');
		const elementQuestion7b = document.getElementById('r7c2');
		const elementQuestion8a = document.getElementById('r8c1');
		const elementQuestion8b = document.getElementById('r8c2');
		const elementQuestion9a = document.getElementById('r9c1');
		const elementQuestion9b = document.getElementById('r9c2');

		if((elementQuestion7a.checked || elementQuestion7b.checked) && (elementQuestion8a.checked || elementQuestion8b.checked) && (elementQuestion9a.checked || elementQuestion9b.checked)){
			Router.go('/four');
		} else {
			alert("Don't Work ! ");
		}
	}
});

Router.route('/four', function () {
	this.render('pageFour');
});

Template.pageFour.events({
	'click #page5': function () {
		const elementQuestion10a = document.getElementById('r10c1');
		const elementQuestion10b = document.getElementById('r10c2');
		const elementQuestion11a = document.getElementById('r11c1');
		const elementQuestion11b = document.getElementById('r11c2');
		const elementQuestion12a = document.getElementById('r12c1');
		const elementQuestion12b = document.getElementById('r12c2');
		const elementQuestion12c = document.getElementById('r12c3');

		if((elementQuestion10a.checked || elementQuestion10b.checked) && (elementQuestion11a.checked || elementQuestion11b.checked) && (elementQuestion12a.checked || elementQuestion12b.checked || elementQuestion12c.checked)) {
			Router.go('/five');
		}else {
			alert("Don't Work ! ");
		}
	}
});

Router.route('/five', function () {
	this.render('pageFive');
});

Template.pageFive.events({
	'click #page6': function () {
		const elementQuestion13a = document.getElementById('r13c1');
		const elementQuestion13b = document.getElementById('r13c2');
		const elementQuestion13c = document.getElementById('pharmacieEnLigneDate');
		const elementQuestion13d = document.getElementById('pharmacieEnLigneNom');
		const elementQuestion14 = document.getElementById('r14');
		const elementQuestion15a = document.getElementById('r15c1');
		const elementQuestion15b = document.getElementById('r15c2');
		const elementQuestion15c = document.getElementById('r15c3');
		const elementQuestion15d = document.getElementById('r15c4');
		const elementQuestion15e = document.getElementById('r15c5');
		const elementQuestion15f = document.getElementById('r15c6');
		const elementQuestion15g = document.getElementById('r15c7');
		const elementQuestion15h = document.getElementById('r15c8');
		const elementQuestion15i = document.getElementById('r15c9');
		const elementQuestion15j = document.getElementById('r15c10');
		const elementQuestion15Autre = document.getElementById('objectif');

		if((elementQuestion13a.checked && elementQuestion13c.value != "" && elementQuestion13d.value != "" && 
			(elementQuestion14.value != "" && elementQuestion14.value != undefined ) && 
			((elementQuestion15a.checked || elementQuestion15b.checked || elementQuestion15c.checked || elementQuestion15d.checked || 
				elementQuestion15e.checked || elementQuestion15f.checked || elementQuestion15g.checked || elementQuestion15h.checked || 
				elementQuestion15i.checked) &&  (!elementQuestion15j.checked || (elementQuestion15j.checked && elementQuestion15Autre.value != "" && 
					elementQuestion15Autre.value != undefined))) ) || 
			(elementQuestion13b.checked && elementQuestion14.value == "") && 
			(elementQuestion15a.checked == false && elementQuestion15b.checked == false  && elementQuestion15c.checked == false  
				&& elementQuestion15d.checked == false  && elementQuestion15e.checked == false  && elementQuestion15f.checked == false 
				&& elementQuestion15g.checked == false  && elementQuestion15h.checked == false  && elementQuestion15i.checked == false  
				&& elementQuestion15j.checked == false )){
			Router.go('/six');
		} else {
			alert("Don't Work ! ");
		}
	}
});

Router.route('/six', function () {
	this.render('pageSix');
});

Template.pageSix.events({
	'click #page7': function () {
		const elementQuestion16a = document.getElementById('r16c1');
		const elementQuestion16b = document.getElementById('r16c2');
		const elementQuestion16c = document.getElementById('pharmacieReseauxSociauxDate');
		const elementQuestion17a = document.getElementById('r17c1');
		const elementQuestion17b = document.getElementById('r17c2');
		const elementQuestion17c = document.getElementById('r17c3');
		const elementQuestion17d = document.getElementById('r17c4');
		const elementQuestion17e = document.getElementById('r17c5');
		const elementQuestion17f = document.getElementById('r17c6');
		const elementQuestion17g = document.getElementById('autreReseauxSociaux');
		const elementQuestion18 = document.getElementById('r18');

		if((elementQuestion16a.checked && elementQuestion16c.value != "" && (elementQuestion18.value != "" && elementQuestion18.value != undefined)  &&
			((elementQuestion17a.checked || elementQuestion17b.checked || elementQuestion17c.checked || elementQuestion17d.checked || elementQuestion17e.checked) && 
				!elementQuestion17f.checked  || (elementQuestion17f.checked && elementQuestion17g.value != "")))   || 
			(elementQuestion16b.checked == true && elementQuestion17a.checked == false && 
				elementQuestion17b.checked == false && elementQuestion17c.checked == false && elementQuestion17d.checked == false && 
				elementQuestion17e.checked == false && elementQuestion17f.checked == false))  {
			Router.go('/seven');
	}else {
		alert("Don't Work ! ");
	}
}
});

Router.route('/seven', function () {
	this.render('pageSeven');
});

Template.pageSeven.events({
	'click #page8': function () {
		const elementQuestion19a = document.getElementById('r19c1');
		const elementQuestion19b = document.getElementById('r19c2');
		const elementQuestion19c = document.getElementById('pharmacieMarque');
		const elementQuestion20a = document.getElementById('r20c1');
		const elementQuestion20b = document.getElementById('r20c2');
		const elementQuestion20c = document.getElementById('pharmacieGroupement');
		const elementQuestion21 = document.getElementById('r21');

		if( ( (elementQuestion19a.checked && elementQuestion19c.value != "" ) || (elementQuestion19b.checked) ) && ((elementQuestion20a.checked && elementQuestion20c.value != "") || (elementQuestion20b.checked) ) && (elementQuestion21.value != "") ) {
			Router.go('/eight');
		} else {
			alert("Don't Work ! ");
		}
	}
});

Router.route('/eight', function () {
	this.render('pageEight');
});

Template.pageEight.events({
	'click #page9': function () {
		const elementQuestion22a = document.getElementById('r22c1');
		const elementQuestion22b = document.getElementById('r22c2');
		const elementQuestion23 = document.getElementById('r23');
		const elementQuestion24a = document.getElementById('r24c1');
		const elementQuestion24b = document.getElementById('r24c2');
		const elementQuestion24c = document.getElementById('r24c3');

		if((elementQuestion22a.checked || elementQuestion22b.checked) && ( elementQuestion23.value != "" && elementQuestion23.value != undefined) && (elementQuestion24a.checked || elementQuestion24b.checked || elementQuestion24c.checked)) {
			Router.go('/nine');
		} else {
			alert ("Don't Work ! ");
		}
	}
});

Router.route('/nine', function () {
	this.render('pageNine');
});

Template.pageNine.events({
	'click #page10': function () {
		const elementQuestion25a = document.getElementById('nbPostesComptoir');
		const elementQuestion25b = document.getElementById('nbPostesBackOffice');
		const elementQuestion25c = document.getElementById('nbPostesBureautique');
		const elementQuestion25d = document.getElementById('nbEcrans');
		const elementQuestion26a = document.getElementById('r26');
		const elementQuestion26b = document.getElementById('autreLogicielGestionOfficine');
		const elementQuestion27a = document.getElementById('r27c1');
		const elementQuestion27b = document.getElementById('r27c2');
		const elementQuestion27c = document.getElementById('r27c3');
		const elementQuestion27d = document.getElementById('r27c4');
		const elementQuestion27e = document.getElementById('r27c5');
		const elementQuestion27f = document.getElementById('r27c6');

		if( (elementQuestion25a.value != "" && elementQuestion25b.value != "" && elementQuestion25c.value != "" && 
			elementQuestion25d.value != "") && ((elementQuestion26a.value != "" && elementQuestion26a.value != "Autre") || 
			(elementQuestion26a.value == "Autre" && elementQuestion26b.value != undefined && elementQuestion26b.value != "")) && 
			(elementQuestion27a.checked || elementQuestion27b.checked || elementQuestion27c.checked || elementQuestion27d.checked || 
				elementQuestion27e.checked || elementQuestion27f.checked)) {
			Router.go('/ten');
	}
	else {
		alert ("Don't Work");
	}
}
});

Router.route('/ten', function () {
	this.render('pageTen');
});



Template.pageTen.events({
	'click #envoyer': function(){

		const elementQuestion28 = document.getElementById('r28');
		const elementQuestion29a = document.getElementById('specialites_et_ordonnancesCA');
		const elementQuestion29b = document.getElementById('medication_et_nutritionCA');
		const elementQuestion29c = document.getElementById('parapharmacie_et_lppCA');

		let today = new Date();
		let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
		let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
		let dateTime = date+'_'+time;

		if((elementQuestion28.value != "" && elementQuestion29a.value != "" && elementQuestion29b.value !="" && elementQuestion29c.value != "")){
			HTTP.call('POST', 'http://192.168.2.71:8529/_db/cezerin/formulaires/formulaires', {
				data: { _key: dateTime }
			}, (error, response) => {
				if (error) {
					console.log(error);
				} else {
					console.log(response);
					HTTP.call('PATCH',"".concat('http://192.168.2.71:8529/_db/cezerin/formulaires/formulaires/','',dateTime), {
						data: { question1: reponseQuestion1, question2: reponseQuestion2
							, question3: reponseQuestion3
							, question3Autre: reponseQuestion3Autre
							, question4: reponseQuestion4, question5: reponseQuestion5, question6: reponseQuestion6
							, question7: reponseQuestion7, question8: reponseQuestion8, question9: reponseQuestion9
							, question10: reponseQuestion10, question11: reponseQuestion11, question12: reponseQuestion12
							, question13: reponseQuestion13, question13Date: reponseQuestion13Date, question13Nom: reponseQuestion13Nom
							, question14: reponseQuestion14
							, question15: "".concat(reponseQuestion15Choix1,', ',reponseQuestion15Choix2,', ',reponseQuestion15Choix3
								,', ',reponseQuestion15Choix4,', ',reponseQuestion15Choix5,', ',reponseQuestion15Choix6,', ',reponseQuestion15Choix7
								,', ',reponseQuestion15Choix8,', ',reponseQuestion15Choix9,', ',reponseQuestion15Choix10)
							, question15Autre: reponseQuestion15Autre
							, question16: reponseQuestion16, question16ReseauxSociauxDate: reponseQuestion16ReseauxSociauxDate
							, question17: "".concat(reponseQuestion17Choix1,', ',reponseQuestion17Choix2,', ',reponseQuestion17Choix3,', '
								,reponseQuestion17Choix4,', ',reponseQuestion17Choix5,', ',reponseQuestion17Choix6)
							, question17Autre: reponseQuestion17Autre
							, question18: reponseQuestion18
							, question19: reponseQuestion19, question19Marque: reponseQuestion19Marque
							, question20: reponseQuestion20, question20Groupement:reponseQuestion20Groupement
							, question21: reponseQuestion21
							, question22: reponseQuestion22, question23: reponseQuestion23, question24: reponseQuestion24
							, question25nbEcrans: reponseQuestion25nbEcrans, question25nbPostesComptoir:reponseQuestion25nbPostesComptoir
							, question25nbPostesBureautique: reponseQuestion25nbPostesBureautique, question25nbPostesBackOffice: reponseQuestion25nbPostesBackOffice
							, question26: reponseQuestion26
							, question26Autre: reponseQuestion26autreLGO
							, question27: "".concat(reponseQuestion27Choix1,', ',reponseQuestion27Choix2,', ',reponseQuestion27Choix3,', '
								,reponseQuestion27Choix4,', ',reponseQuestion27Choix5,', ',reponseQuestion27Choix6)
							, question28: reponseQuestion28
							, question29specialites_et_ordonnancesCA: reponseQuestion29specialites_et_ordonnancesCA
							, question29medication_et_nutritionCA: reponseQuestion29medication_et_nutritionCA
							, question29parapharmacie_et_lppCA: reponseQuestion29parapharmacie_et_lppCA }
						}, (error, response) => {
							if (error) {
								console.log(error);
							} else {
								console.log(response);
								Router.go('/valider');
							}
						});
				}
			});
		}
		else{ alert("Don't Work !"); }
	}
});

Router.route('/valider', function() {
	this.render('valider');
});



Template.question1.helpers({
	text: '1. Vous êtes ...'
});

Template.reponse1.events({
	'change input': function(event) {

		Session.set('reponseQuestion1', event.target.value);
		reponseQuestion1 = Session.get('reponseQuestion1');
	}
});

Template.question2.helpers({
	text: '2. Vous avez entre ...'
});

Template.reponse2.events({
	'change select': function(event) {	
		Session.set('reponseQuestion2', event.target.value);
		reponseQuestion2 = Session.get('reponseQuestion2');
	}
});

Template.question3.helpers({
	text: '3. Vous avez étudié à la faculté de :'
});

Template.reponse3.events({
	'change select': function(event) {	
		Session.set('reponseQuestion3', event.target.value);
		reponseQuestion3 = Session.get('reponseQuestion3');
	},
	'input input': function(event) {
		Session.set('reponseQuestion3Autre', event.target.value);
		reponseQuestion3Autre = Session.get('reponseQuestion3Autre');
	}
});

Template.question4.helpers({
	text: '4. Vous êtes ...'
});

Template.reponse4.events({
	'change input': function(event) {

		Session.set('reponseQuestion4', event.target.value);
		reponseQuestion4 = Session.get('reponseQuestion4');
	}
});

Template.question5.helpers({
	text: '5. Quels sont vos spécialités et formation complémentaires'
});

Template.reponse5.events({
	'input textarea': function(event) {

		Session.set('reponseQuestion5', event.target.value);
		reponseQuestion5 = Session.get('reponseQuestion5');
	}
});

Template.question6.helpers({
	text: '6. Dans le cadre de votre exercice, êtes-vous équipé d\'un smartphone ?'
});

Template.reponse6.events({
	'change input': function(event) {

		Session.set('reponseQuestion6', event.target.value);
		reponseQuestion6 = Session.get('reponseQuestion6');
	}
});

Template.question7.helpers({
	text: '7. Dans le cadre de votre exercice, êtes-vous équipé d\'une tablette ?'
});

Template.reponse7.events({
	'change input': function(event) {

		Session.set('reponseQuestion7', event.target.value);
		reponseQuestion7 = Session.get('reponseQuestion7');
	}
});

Template.question8.helpers({
	text: '8. Dans le cadre de votre exercice, seriez-vous prêt à utiliser vous et votre équipe une tablette tactile lors de vos rendez-vous patients ?'
});

Template.reponse8.events({
	'change input': function(event) {

		Session.set('reponseQuestion8', event.target.value);
		reponseQuestion8 = Session.get('reponseQuestion8');
	}
});

Template.question9.helpers({
	text: '9. Avez-vous déjà téléchargé des applications de santé à usage professionnel ?'
});

Template.reponse9.events({
	'change input': function(event) {

		Session.set('reponseQuestion9', event.target.value);
		reponseQuestion9 = Session.get('reponseQuestion9');
	}
});

Template.question10.helpers({
	text: '10. Pensez-vous que demain via votre plateforme digitale les applications mobiles de santé certifiées santé que vous proposerez seront un lien essentiel entre vous et vos patients dans le suivi de leurs pathologies ?'
});

Template.reponse10.events({
	'change input': function(event) {

		Session.set('reponseQuestion10', event.target.value);
		reponseQuestion10 = Session.get('reponseQuestion10');
	}
});

Template.question11.helpers({
	text: '11. Avez-vous un compte Linkedin pour solidifier vos liens avec vos confères et les relations avec vos partenaires ?'
});

Template.reponse11.events({
	'change input': function(event) {

		Session.set('reponseQuestion11', event.target.value);
		reponseQuestion11 = Session.get('reponseQuestion11');
	}
});

Template.question12.helpers({
	text: '12. Possédez-vous une messagerie sécurisée à l\'officine ?'
});

Template.reponse12.events({
	'change input': function(event) {

		Session.set('reponseQuestion12', event.target.value);
		reponseQuestion12 = Session.get('reponseQuestion12');
	}
});

Template.question13.helpers({
	text: '13. Votre pharmacie est-elle présente sur internet ?'
});

Template.reponse13.events({
	'change #r13c1': function(event) {

		Session.set('reponseQuestion13', event.target.value);
		reponseQuestion13 = Session.get('reponseQuestion13');
	},
	'change #r13c2': function(event) {

		Session.set('reponseQuestion13', event.target.value);
		reponseQuestion13 = Session.get('reponseQuestion13');
	},
	'input #pharmacieEnLigneDate': function(event){

		Session.set('reponseQuestion13Date', event.target.value);
		reponseQuestion13Date = Session.get('reponseQuestion13Date');
	},
	'input #pharmacieEnLigneNom': function(event){

		Session.set('reponseQuestion13Nom', event.target.value);
		reponseQuestion13Nom = Session.get('reponseQuestion13Nom');
	}
});

Template.question14.helpers({
	text: '14. Si oui, Qui s\'occupe de la gestion et du contenu de votre site ?'
});

Template.reponse14.events({
	'change select': function(event) {	
		Session.set('reponseQuestion14', event.target.value);
		reponseQuestion14 = Session.get('reponseQuestion14');
	}
});

Template.question15.helpers({
	text: '15. Si oui, Quels sont les objectifs de votre site ?'
});

Template.reponse15.events({
	'input #r15c1': function(event) {
		if(document.getElementById('r15c1').checked){
			Session.set('reponseQuestion15Choix1', event.target.value);
			reponseQuestion15Choix1 = Session.get('reponseQuestion15Choix1');
		}
		else{
			Session.set('reponseQuestion15Choix1', undefined);
			reponseQuestion15Choix1 = Session.get('reponseQuestion15Choix1');
		}
	},
	'input #r15c2': function(event) {
		if(document.getElementById('r15c2').checked){
			Session.set('reponseQuestion15Choix2', event.target.value);
			reponseQuestion15Choix2 = Session.get('reponseQuestion15Choix2');
		}
		else{
			Session.set('reponseQuestion15Choix2', undefined);
			reponseQuestion15Choix2 = Session.get('reponseQuestion15Choix2');
		}
	},
	'input #r15c3': function(event) {
		if(document.getElementById('r15c3').checked){
			Session.set('reponseQuestion15Choix3', event.target.value);
			reponseQuestion15Choix3 = Session.get('reponseQuestion15Choix3');
		}
		else{
			Session.set('reponseQuestion15Choix3', undefined);
			reponseQuestion15Choix3 = Session.get('reponseQuestion15Choix3');
		}
	},
	'input #r15c4': function(event) {
		if(document.getElementById('r15c4').checked){
			Session.set('reponseQuestion15Choix4', event.target.value);
			reponseQuestion15Choix4 = Session.get('reponseQuestion15Choix4');
		}
		else{
			Session.set('reponseQuestion15Choix4', undefined);
			reponseQuestion15Choix4 = Session.get('reponseQuestion15Choix4');
		}
	},
	'input #r15c5': function(event) {
		if(document.getElementById('r15c5').checked){
			Session.set('reponseQuestion15Choix5', event.target.value);
			reponseQuestion15Choix5 = Session.get('reponseQuestion15Choix5');
		}
		else{
			Session.set('reponseQuestion15Choix5', undefined);
			reponseQuestion15Choix5 = Session.get('reponseQuestion15Choix5');
		}
	},
	'input #r15c6': function(event) {
		if(document.getElementById('r15c6').checked){
			Session.set('reponseQuestion15Choix6', event.target.value);
			reponseQuestion15Choix6 = Session.get('reponseQuestion15Choix6');
		}
		else{
			Session.set('reponseQuestion15Choix6', undefined);
			reponseQuestion15Choix6 = Session.get('reponseQuestion15Choix6');
		}
	},
	'input #r15c7': function(event) {
		if(document.getElementById('r15c7').checked){
			Session.set('reponseQuestion15Choix7', event.target.value);
			reponseQuestion15Choix7 = Session.get('reponseQuestion15Choix7');
		}
		else{
			Session.set('reponseQuestion15Choix7', undefined);
			reponseQuestion15Choix7 = Session.get('reponseQuestion15Choix7');
		}
	},
	'input #r15c8': function(event) {
		if(document.getElementById('r15c8').checked){
			Session.set('reponseQuestion15Choix8', event.target.value);
			reponseQuestion15Choix8 = Session.get('reponseQuestion15Choix8');
		}
		else{
			Session.set('reponseQuestion15Choix8', undefined);
			reponseQuestion15Choix8 = Session.get('reponseQuestion15Choix8');
		}
	},
	'input #r15c9': function(event) {
		if(document.getElementById('r15c9').checked){
			Session.set('reponseQuestion15Choix9', event.target.value);
			reponseQuestion15Choix9 = Session.get('reponseQuestion15Choix9');
		}
		else{
			Session.set('reponseQuestion15Choix9', undefined);
			reponseQuestion15Choix9 = Session.get('reponseQuestion15Choix9');
		}
	},
	'input #r15c10': function(event) {
		if(document.getElementById('r15c10').checked){
			Session.set('reponseQuestion15Choix10', event.target.value);
			reponseQuestion15Choix10 = Session.get('reponseQuestion15Choix10');
		}
		else{
			Session.set('reponseQuestion15Choix10', undefined);
			reponseQuestion15Choix10 = Session.get('reponseQuestion15Choix10');
			Session.set('reponseQuestion15Autre', undefined);
			reponseQuestion15Autre = Session.get('reponseQuestion15Autre');
		}
	},
	'input #objectif': function(event) {
		Session.set('reponseQuestion15Autre', event.target.value);
		reponseQuestion15Autre = Session.get('reponseQuestion15Autre');
	}
});

Template.question16.helpers({
	text: '16. Votre pharmacie est-elle présente sur les réseaux sociaux ?'
});

Template.reponse16.events({
	'change #r16c1': function(event) {
		
		Session.set('reponseQuestion16', event.target.value);
		reponseQuestion16 = Session.get('reponseQuestion16');
	},
	'change #r16c2': function(event) {
		
		Session.set('reponseQuestion16', event.target.value);
		reponseQuestion16 = Session.get('reponseQuestion16');
	},
	'input #pharmacieReseauxSociauxDate': function(event){
		
		Session.set('reponseQuestion16ReseauxSociauxDate', event.target.value);
		reponseQuestion16ReseauxSociauxDate = Session.get('reponseQuestion16ReseauxSociauxDate');
	}
});

Template.question17.helpers({
	text: '17. Si oui, Quels sont les réseaux sociaux sur lesquels vous êtes présent ?'
});

Template.reponse17.events({
	'input #r17c1': function(event) {
		if(document.getElementById('r17c1').checked){
			Session.set('reponseQuestion17Choix1', event.target.value);
			reponseQuestion17Choix1 = Session.get('reponseQuestion17Choix1');
		}
		else{
			Session.set('reponseQuestion17Choix1', undefined);
			reponseQuestion17Choix1 = Session.get('reponseQuestion17Choix1');
		}		
	},
	'input #r17c2': function(event) {
		if(document.getElementById('r17c2').checked){
			Session.set('reponseQuestion17Choix2', event.target.value);
			reponseQuestion17Choix2 = Session.get('reponseQuestion17Choix2');
		}
		else{
			Session.set('reponseQuestion17Choix2', undefined);
			reponseQuestion17Choix2 = Session.get('reponseQuestion17Choix2');
		}
	},
	'input #r17c3': function(event) {
		if(document.getElementById('r17c3').checked){
			Session.set('reponseQuestion17Choix3', event.target.value);
			reponseQuestion17Choix3 = Session.get('reponseQuestion17Choix3');
		}
		else{
			Session.set('reponseQuestion17Choix3', undefined);
			reponseQuestion17Choix3 = Session.get('reponseQuestion17Choix3');
		}
	},
	'input #r17c4': function(event) {
		if(document.getElementById('r17c4').checked){
			Session.set('reponseQuestion17Choix4', event.target.value);
			reponseQuestion17Choix4 = Session.get('reponseQuestion17Choix4');
		}
		else{
			Session.set('reponseQuestion17Choix4', undefined);
			reponseQuestion17Choix4 = Session.get('reponseQuestion17Choix4');
		}
	},
	'input #r17c5': function(event) {
		if(document.getElementById('r17c5').checked){
			Session.set('reponseQuestion17Choix5', event.target.value);
			reponseQuestion17Choix5 = Session.get('reponseQuestion17Choix5');
		}
		else{
			Session.set('reponseQuestion17Choix5', undefined);
			reponseQuestion17Choix5 = Session.get('reponseQuestion17Choix5');
		}
	},
	'input #r17c6': function(event) {
		if(document.getElementById('r17c6').checked){
			Session.set('reponseQuestion17Choix6', event.target.value);
			reponseQuestion17Choix6 = Session.get('reponseQuestion17Choix6');
		}
		else{
			Session.set('reponseQuestion17Choix6', undefined);
			reponseQuestion17Choix6 = Session.get('reponseQuestion17Choix6');

			Session.set('reponseQuestion17Autre', undefined);
			reponseQuestion17Autre = Session.get('reponseQuestion17Autre');
		}
	},
	'input #autreReseauxSociaux': function(event) {
		Session.set('reponseQuestion17Autre', event.target.value);
		reponseQuestion17Autre = Session.get('reponseQuestion17Autre');
	}
});

Template.question18.helpers({
	text: '18. Qui s\'occupe de la gestion et du contenu de vos réseaux ?'
});

Template.reponse18.events({
	'change select': function(event) {	
		Session.set('reponseQuestion18', event.target.value);
		reponseQuestion18 = Session.get('reponseQuestion18');
	}
});

Template.question19.helpers({
	text: '19. Votre pharmacie adhère t\'elle à une marque ou une enseigne ?'
});

Template.reponse19.events({
	'change #r19c1': function(event) {
		
		Session.set('reponseQuestion19', event.target.value);
		reponseQuestion19 = Session.get('reponseQuestion19');
	},
	'change #r19c2': function(event) {
		
		Session.set('reponseQuestion19', event.target.value);
		reponseQuestion19 = Session.get('reponseQuestion19');
	},
	'input #pharmacieMarque': function(event){
		
		Session.set('pharmacieMarque', event.target.value);
		reponseQuestion19Marque = Session.get('pharmacieMarque');
	}
});

Template.question20.helpers({
	text: '20. Faites-vous partie d\'un groupement d\'achat ?'
});

Template.reponse20.events({
	'change #r20c1': function(event) {
		
		Session.set('reponseQuestion20', event.target.value);
		reponseQuestion20 = Session.get('reponseQuestion20');
	},
	'change #r20c2': function(event) {
		
		Session.set('reponseQuestion20', event.target.value);
		reponseQuestion20 = Session.get('reponseQuestion20');
	},
	'input #pharmacieGroupement': function(event){
		
		Session.set('reponseQuestion20Groupement', event.target.value);
		reponseQuestion20Groupement = Session.get('reponseQuestion20Groupement');
	}
});

Template.question21.helpers({
	text: '21. Le type d\'officine ?'
});

Template.reponse21.events({
	'change select': function(event) {	
		Session.set('reponseQuestion21', event.target.value);
		reponseQuestion21 = Session.get('reponseQuestion21');
	}
});

Template.question22.helpers({
	text: '22. Votre officine est-elle dans une zone touristique ?'
});

Template.reponse22.events({
	'change input': function(event) {
		
		Session.set('reponseQuestion22', event.target.value);
		reponseQuestion22 = Session.get('reponseQuestion22');
	}
});

Template.question23.helpers({
	text: '23. Dans quelle région se situe votre officine ?'
});

Template.reponse23.events({
	'change select': function(event) {	
		Session.set('reponseQuestion23', event.target.value);
		reponseQuestion23 = Session.get('reponseQuestion23');
	}
});

Template.question24.helpers({
	text: '24. Dans votre officine la connexion à internet se fait par :'
});

Template.reponse24.events({
	'change input': function(event) {
		
		Session.set('reponseQuestion24', event.target.value);
		reponseQuestion24 = Session.get('reponseQuestion24');
	}
});

Template.question25.helpers({
	text: '25. Nombre de poste informarique ou d\'affichage :'
});

Template.reponse25.events({
	'input #nbPostesComptoir': function(event) {
		
		Session.set('reponseQuestion25nbPostesComptoir', event.target.value);
		reponseQuestion25nbPostesComptoir = Session.get('reponseQuestion25nbPostesComptoir');
	},
	'input #nbPostesBackOffice': function(event) {
		
		Session.set('reponseQuestion25nbPostesBackOffice', event.target.value);
		reponseQuestion25nbPostesBackOffice = Session.get('reponseQuestion25nbPostesBackOffice');
	},
	'input #nbPostesBureautique': function(event) {
		
		Session.set('reponseQuestion25nbPostesBureautique', event.target.value);
		reponseQuestion25nbPostesBureautique = Session.get('reponseQuestion25nbPostesBureautique');
	},
	'input #nbEcrans': function(event) {
		
		Session.set('reponseQuestion25nbEcrans', event.target.value);
		reponseQuestion25nbEcrans = Session.get('reponseQuestion25nbEcrans');
	}
});

Template.question26.helpers({
	text: '26. Nom de votre Logiciel de Gestion d\'Officine'
});

Template.reponse26.events({
	'change select': function(event) {	
		Session.set('reponseQuestion26', event.target.value);
		reponseQuestion26 = Session.get('reponseQuestion26');
	},
	'input input': function(event) {
		Session.set('reponseQuestion26Autre', event.target.value);
		reponseQuestion26autreLGO = Session.get('reponseQuestion26Autre');
	}
});

Template.question27.helpers({
	text: '27. Vos heures d\'ouverture'
});

Template.reponse27.events({
	'input #r27c1': function(event) {
		if(document.getElementById('r27c1').checked){
			Session.set('reponseQuestion27Choix1', event.target.value);
			reponseQuestion27Choix1 = Session.get('reponseQuestion27Choix1');
		}
		else{
			Session.set('reponseQuestion27Choix1', undefined);
			reponseQuestion27Choix1 = Session.get('reponseQuestion27Choix1');
		}		
	},
	'input #r27c2': function(event) {
		if(document.getElementById('r27c2').checked){
			Session.set('reponseQuestion27Choix2', event.target.value);
			reponseQuestion27Choix2 = Session.get('reponseQuestion27Choix2');
		}
		else{
			Session.set('reponseQuestion27Choix2', undefined);
			reponseQuestion27Choix2 = Session.get('reponseQuestion27Choix2');
		}
	},
	'input #r27c3': function(event) {
		if(document.getElementById('r27c3').checked){
			Session.set('reponseQuestion27Choix3', event.target.value);
			reponseQuestion27Choix3 = Session.get('reponseQuestion27Choix3');
		}
		else{
			Session.set('reponseQuestion27Choix3', undefined);
			reponseQuestion27Choix3 = Session.get('reponseQuestion27Choix3');
		}
	},
	'input #r27c4': function(event) {
		if(document.getElementById('r27c4').checked){
			Session.set('reponseQuestion27Choix4', event.target.value);
			reponseQuestion27Choix4 = Session.get('reponseQuestion27Choix4');
		}
		else{
			Session.set('reponseQuestion27Choix4', undefined);
			reponseQuestion27Choix4 = Session.get('reponseQuestion27Choix4');
		}
	},
	'input #r27c5': function(event) {
		if(document.getElementById('r27c5').checked){
			Session.set('reponseQuestion27Choix5', event.target.value);
			reponseQuestion27Choix5 = Session.get('reponseQuestion27Choix5');
		}
		else{
			Session.set('reponseQuestion27Choix5', undefined);
			reponseQuestion27Choix5 = Session.get('reponseQuestion27Choix5');
		}
	},
	'input #r27c6': function(event) {
		if(document.getElementById('r27c6').checked){
			Session.set('reponseQuestion27Choix6', event.target.value);
			reponseQuestion27Choix6 = Session.get('reponseQuestion27Choix6');
		}
		else{
			Session.set('reponseQuestion27Choix6', undefined);
			reponseQuestion27Choix6 = Session.get('reponseQuestion27Choix6');
		}
	}
});

Template.question28.helpers({
	text: '28. Nombre de clients par jour moyen'
});

Template.reponse28.events({
	'change select': function(event) {	
		Session.set('reponseQuestion28', event.target.value);
		reponseQuestion28 = Session.get('reponseQuestion28');
	}
});

Template.question29.helpers({
	text: '29. Répartition de votre chiffre d\'affaires :'
});

Template.reponse29.events({
	'input #specialites_et_ordonnancesCA': function(event) {
		
		Session.set('reponseQuestion29specialites_et_ordonnancesCA', event.target.value);
		reponseQuestion29specialites_et_ordonnancesCA = Session.get('reponseQuestion29specialites_et_ordonnancesCA');
	},
	'input #medication_et_nutritionCA': function(event) {
		
		Session.set('reponseQuestion29medication_et_nutritionCA', event.target.value);
		reponseQuestion29medication_et_nutritionCA = Session.get('reponseQuestion29medication_et_nutritionCA');
	},
	'input #parapharmacie_et_lppCA': function(event) {
		
		Session.set('reponseQuestion29parapharmacie_et_lppCA', event.target.value);
		reponseQuestion29parapharmacie_et_lppCA = Session.get('reponseQuestion29parapharmacie_et_lppCA');
	},
});