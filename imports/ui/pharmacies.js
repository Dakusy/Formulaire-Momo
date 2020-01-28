import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';

import './pharmacies.html';
import './body.js'

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
			( (elementQuestion3.value != "" && elementQuestion3.value != "Autre" && elementQuestion3.value != undefined) || (elementQuestion3Autre.value != "" ))) {
			alert ("Work ! ");
		Router.go('/two'); }

		else {
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
		const elementQuestion6b = document.getElementById('r6c1');

		if((elementQuestion4a.checked || elementQuestion4b.checked || elementQuestion4c.checked) && (elementQuestion5.value !="") && (elementQuestion6a.checked || elementQuestion6b.checked) ) {
			alert("Work !");
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
			alert ("Work ! ");
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
			alert("Work ! ");
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



		if(((elementQuestion13a.checked && elementQuestion13c.value != "" && elementQuestion13d.value != "" && (elementQuestion14.value != "" && elementQuestion14.value != undefined ) && (elementQuestion15a.checked || elementQuestion15b.checked || elementQuestion15c.checked || elementQuestion15d.checked || elementQuestion15e.checked || elementQuestion15f.checked || elementQuestion15g.checked || elementQuestion15h.checked || elementQuestion15i.checked || elementQuestion15j.checked ||) ) 
			|| ((elementQuestion13b.checked && elementQuestion14.value = ""))){


			alert("Work ! ");
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
					const elementQuestion16a = document.getElementById('')

					Router.go('/seven');
				}
			});

			Router.route('/seven', function () {
				this.render('pageSeven');
			});

			Template.pageSeven.events({
				'click #page8': function () {
					Router.go('/eight');
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
						alert ("Work !");
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
					Router.go('/ten');
				}
			});

			Router.route('/ten', function () {
				this.render('pageTen');
			});


			const data = {

				values: {
					"name1": "Value1",
					"name2": "Value2",
				}
			}

			Template.pageTen.events({
				'click #envoyer': function(){
					HTTP.call('POST','http://192.168.2.55/formulaire/getResult.php', data, (error, result) => {
						if (error) {
							console.log(error);
						} else {
							console.log(result);
						}
					});
				}
			});

			Template.question1.helpers({
				text: '1. Vous êtes ...'
			});

			Template.reponse1.events({
				'change input': function(event) {

					Session.set('reponseQuestion1', event.target.value);
					const reponseQuestion1 = Session.get('reponseQuestion1');
				}
			});

			Template.question2.helpers({
				text: '2. Vous avez entre ...'
			});

			Template.reponse2.events({
				'change select': function(event) {	
					Session.set('reponseQuestion2', event.target.value);
					const reponseQuestion2 = Session.get('reponseQuestion2');
				}
			});

			Template.question3.helpers({
				text: '3. Vous avez étudié à la faculté de :'
			});

			Template.reponse3.events({
				'change select': function(event) {	
					Session.set('reponseQuestion3', event.target.value);
					const reponseQuestion3 = Session.get('reponseQuestion3');
				},
				'input input': function(event) {
					Session.set('reponseQuestion3Autre', event.target.value);
					const reponseQuestion3Autre = Session.get('reponseQuestion3Autre');
				}
			});

			Template.question4.helpers({
				text: '4. Vous êtes ...'
			});

			Template.reponse4.events({
				'change input': function(event) {

					Session.set('reponseQuestion4', event.target.value);
					const reponseQuestion4 = Session.get('reponseQuestion4');
				}
			});

			Template.question5.helpers({
				text: '5. Quels sont vos spécialités et formation complémentaires'
			});

			Template.reponse5.events({
				'input textarea': function(event) {

					Session.set('reponseQuestion5', event.target.value);
					const reponseQuestion5 = Session.get('reponseQuestion5');
				}
			});

			Template.question6.helpers({
				text: '6. Dans le cadre de votre exercice, êtes-vous équipé d\'un smartphone ?'
			});

			Template.reponse6.events({
				'change input': function(event) {

					Session.set('reponseQuestion6', event.target.value);
					const reponseQuestion6 = Session.get('reponseQuestion6');
				}
			});

			Template.question7.helpers({
				text: '7. Dans le cadre de votre exercice, êtes-vous équipé d\'une tablette ?'
			});

			Template.reponse7.events({
				'change input': function(event) {

					Session.set('reponseQuestion7', event.target.value);
					const reponseQuestion7 = Session.get('reponseQuestion7');
				}
			});

			Template.question8.helpers({
				text: '8. Dans le cadre de votre exercice, seriez-vous prêt à utiliser vous et votre équipe une tablette tactile lors de vos rendez-vous patients ?'
			});

			Template.reponse8.events({
				'change input': function(event) {

					Session.set('reponseQuestion8', event.target.value);
					const reponseQuestion8 = Session.get('reponseQuestion8');
				}
			});

			Template.question9.helpers({
				text: '9. Avez-vous déjà téléchargé des applications de santé à usage professionnel ?'
			});

			Template.reponse9.events({
				'change input': function(event) {

					Session.set('reponseQuestion9', event.target.value);
					const reponseQuestion9 = Session.get('reponseQuestion9');
				}
			});

			Template.question10.helpers({
				text: '10. Pensez-vous que demain via votre plateforme digitale les applications mobiles de santé certifiées santé que vous proposerez seront un lien essentiel entre vous et vos patients dans le suivi de leurs pathologies ?'
			});

			Template.reponse10.events({
				'change input': function(event) {

					Session.set('reponseQuestion10', event.target.value);
					const reponseQuestion10 = Session.get('reponseQuestion10');
				}
			});

			Template.question11.helpers({
				text: '11. Avez-vous un compte Linkedin pour solidifier vos liens avec vos confères et les relations avec vos partenaires ?'
			});

			Template.reponse11.events({
				'change input': function(event) {

					Session.set('reponseQuestion11', event.target.value);
					const reponseQuestion11 = Session.get('reponseQuestion11');
				}
			});

			Template.question12.helpers({
				text: '12. Possédez-vous une messagerie sécurisée à l\'officine ?'
			});

			Template.reponse12.events({
				'change input': function(event) {

					Session.set('reponseQuestion12', event.target.value);
					const reponseQuestion12 = Session.get('reponseQuestion12');
				}
			});

			Template.question13.helpers({
				text: '13. Votre pharmacie est-elle présente sur internet ?'
			});

			Template.reponse13.events({
				'change #r13c1': function(event) {

					Session.set('reponseQuestion13', event.target.value);
					const reponseQuestion13 = Session.get('reponseQuestion13');
				},
				'change #r13c2': function(event) {

					Session.set('reponseQuestion13', event.target.value);
					const reponseQuestion13 = Session.get('reponseQuestion13');
				},
				'input #pharmacieEnLigneDate': function(event){

					Session.set('reponseQuestion13Date', event.target.value);
					const reponseQuestion13Date = Session.get('reponseQuestion13Date');
				},
				'input #pharmacieEnLigneNom': function(event){

					Session.set('reponseQuestion13Nom', event.target.value);
					const reponseQuestion13Nom = Session.get('reponseQuestion13Nom');
				}
			});

			Template.question14.helpers({
				text: '14. Si oui, Qui s\'occupe de la gestion et du contenu de votre site ?'
			});

			Template.reponse14.events({
				'change select': function(event) {	
					Session.set('reponseQuestion14', event.target.value);
					const reponseQuestion14 = Session.get('reponseQuestion14');
				}
			});

			Template.question15.helpers({
				text: '15. Si oui, Quels sont les objectifs de votre site ?'
			});

			Template.reponse15.events({
				'input #r15c1': function(event) {
					if(document.getElementById('r15c1').checked){
						Session.set('reponseQuestion15Choix1', event.target.value);
						const reponseQuestion15Choix1 = Session.get('reponseQuestion15Choix1');
					}
					else{
						Session.set('reponseQuestion15Choix1', undefined);
						const reponseQuestion15Choix1 = Session.get('reponseQuestion15Choix1');
					}
				},
				'input #r15c2': function(event) {
					if(document.getElementById('r15c2').checked){
						Session.set('reponseQuestion15Choix2', event.target.value);
						const reponseQuestion15Choix2 = Session.get('reponseQuestion15Choix2');
					}
					else{
						Session.set('reponseQuestion15Choix2', undefined);
						const reponseQuestion15Choix2 = Session.get('reponseQuestion15Choix2');
					}
				},
				'input #r15c3': function(event) {
					if(document.getElementById('r15c3').checked){
						Session.set('reponseQuestion15Choix3', event.target.value);
						const reponseQuestion15Choix3 = Session.get('reponseQuestion15Choix3');
					}
					else{
						Session.set('reponseQuestion15Choix3', undefined);
						const reponseQuestion15Choix3 = Session.get('reponseQuestion15Choix3');
					}
				},
				'input #r15c4': function(event) {
					if(document.getElementById('r15c4').checked){
						Session.set('reponseQuestion15Choix4', event.target.value);
						const reponseQuestion15Choix4 = Session.get('reponseQuestion15Choix4');
					}
					else{
						Session.set('reponseQuestion15Choix4', undefined);
						const reponseQuestion15Choix4 = Session.get('reponseQuestion15Choix4');
					}
				},
				'input #r15c5': function(event) {
					if(document.getElementById('r15c5').checked){
						Session.set('reponseQuestion15Choix5', event.target.value);
						const reponseQuestion15Choix5 = Session.get('reponseQuestion15Choix5');
					}
					else{
						Session.set('reponseQuestion15Choix5', undefined);
						const reponseQuestion15Choix5 = Session.get('reponseQuestion15Choix5');
					}
				},
				'input #r15c6': function(event) {
					if(document.getElementById('r15c6').checked){
						Session.set('reponseQuestion15Choix6', event.target.value);
						const reponseQuestion15Choix6 = Session.get('reponseQuestion15Choix6');
					}
					else{
						Session.set('reponseQuestion15Choix6', undefined);
						const reponseQuestion15Choix6 = Session.get('reponseQuestion15Choix6');
					}
				},
				'input #r15c7': function(event) {
					if(document.getElementById('r15c7').checked){
						Session.set('reponseQuestion15Choix7', event.target.value);
						const reponseQuestion15Choix7 = Session.get('reponseQuestion15Choix7');
					}
					else{
						Session.set('reponseQuestion15Choix7', undefined);
						const reponseQuestion15Choix7 = Session.get('reponseQuestion15Choix7');
					}
				},
				'input #r15c8': function(event) {
					if(document.getElementById('r15c8').checked){
						Session.set('reponseQuestion15Choix8', event.target.value);
						const reponseQuestion15Choix8 = Session.get('reponseQuestion15Choix8');
					}
					else{
						Session.set('reponseQuestion15Choix8', undefined);
						const reponseQuestion15Choix8 = Session.get('reponseQuestion15Choix8');
					}
				},
				'input #r15c9': function(event) {
					if(document.getElementById('r15c9').checked){
						Session.set('reponseQuestion15Choix9', event.target.value);
						const reponseQuestion15Choix9 = Session.get('reponseQuestion15Choix9');
					}
					else{
						Session.set('reponseQuestion15Choix9', undefined);
						const reponseQuestion15Choix9 = Session.get('reponseQuestion15Choix9');
					}
				},
				'input #r15c10': function(event) {
					if(document.getElementById('r15c10').checked){
						Session.set('reponseQuestion15Choix10', event.target.value);
						const reponseQuestion15Choix10 = Session.get('reponseQuestion15Choix10');
					}
					else{
						Session.set('reponseQuestion15Choix10', undefined);
						const reponseQuestion15Choix10 = Session.get('reponseQuestion15Choix10');
						Session.set('reponseQuestion15Autre', undefined);
						const reponseQuestion15Autre = Session.get('reponseQuestion15Autre');
					}
				},
				'input #objectif': function(event) {
					Session.set('reponseQuestion15Autre', event.target.value);
					const reponseQuestion15Autre = Session.get('reponseQuestion15Autre');
				}
			});

Template.question16.helpers({
	text: '16. Votre pharmacie est-elle présente sur les réseaux sociaux ?'
});

Template.reponse16.events({
	'change #r16c1': function(event) {
		
		Session.set('reponseQuestion16', event.target.value);
		const reponseQuestion16 = Session.get('reponseQuestion16');
	},
	'change #r16c2': function(event) {
		
		Session.set('reponseQuestion16', event.target.value);
		const reponseQuestion16 = Session.get('reponseQuestion16');
	},
	'input #pharmacieReseauxSociauxDate': function(event){
		
		Session.set('reponseQuestion16ReseauxSociauxDate', event.target.value);
		const reponseQuestion16ReseauxSociauxDate = Session.get('reponseQuestion16ReseauxSociauxDate');
	}
});

Template.question17.helpers({
	text: '17. Si oui, Quels sont les réseaux sociaux sur lesquels vous êtes présent ?'
});

Template.reponse17.events({
	'input #r17c1': function(event) {
		if(document.getElementById('r17c1').checked){
			Session.set('reponseQuestion17Choix1', event.target.value);
			const reponseQuestion17Choix1 = Session.get('reponseQuestion17Choix1');
		}
		else{
			Session.set('reponseQuestion17Choix1', undefined);
			const reponseQuestion17Choix1 = Session.get('reponseQuestion17Choix1');
		}		
	},
	'input #r17c2': function(event) {
		if(document.getElementById('r17c2').checked){
			Session.set('reponseQuestion17Choix2', event.target.value);
			const reponseQuestion17Choix2 = Session.get('reponseQuestion17Choix2');
		}
		else{
			Session.set('reponseQuestion17Choix2', undefined);
			const reponseQuestion17Choix2 = Session.get('reponseQuestion17Choix2');
		}
	},
	'input #r17c3': function(event) {
		if(document.getElementById('r17c3').checked){
			Session.set('reponseQuestion17Choix3', event.target.value);
			const reponseQuestion17Choix3 = Session.get('reponseQuestion17Choix3');
		}
		else{
			Session.set('reponseQuestion17Choix3', undefined);
			const reponseQuestion17Choix3 = Session.get('reponseQuestion17Choix3');
		}
	},
	'input #r17c4': function(event) {
		if(document.getElementById('r17c4').checked){
			Session.set('reponseQuestion17Choix4', event.target.value);
			const reponseQuestion17Choix4 = Session.get('reponseQuestion17Choix4');
		}
		else{
			Session.set('reponseQuestion17Choix4', undefined);
			const reponseQuestion17Choix4 = Session.get('reponseQuestion17Choix4');
		}
	},
	'input #r17c5': function(event) {
		if(document.getElementById('r17c5').checked){
			Session.set('reponseQuestion17Choix5', event.target.value);
			const reponseQuestion17Choix5 = Session.get('reponseQuestion17Choix5');
		}
		else{
			Session.set('reponseQuestion17Choix5', undefined);
			const reponseQuestion17Choix5 = Session.get('reponseQuestion17Choix5');
		}
	},
	'input #r17c6': function(event) {
		if(document.getElementById('r17c6').checked){
			Session.set('reponseQuestion17Choix6', event.target.value);
			const reponseQuestion17Choix6 = Session.get('reponseQuestion17Choix6');
		}
		else{
			Session.set('reponseQuestion17Choix6', undefined);
			const reponseQuestion17Choix6 = Session.get('reponseQuestion17Choix6');

			Session.set('reponseQuestion17Autre', undefined);
			const reponseQuestion17Autre = Session.get('reponseQuestion17Autre');
		}
	},
	'input #autreReseauxSociaux': function(event) {
		Session.set('reponseQuestion17Autre', event.target.value);
		const reponseQuestion17Autre = Session.get('reponseQuestion17Autre');
	}
});

Template.question18.helpers({
	text: '18. Qui s\'occupe de la gestion et du contenu de vos réseaux ?'
});

Template.reponse18.events({
	'change select': function(event) {	
		Session.set('reponseQuestion18', event.target.value);
		const reponseQuestion18 = Session.get('reponseQuestion18');
	}
});

Template.question19.helpers({
	text: '19. Votre pharmacie adhère t\'elle à une marque ou une enseigne ?'
});

Template.reponse19.events({
	'change #r19c1': function(event) {
		
		Session.set('reponseQuestion19', event.target.value);
		const reponseQuestion19 = Session.get('reponseQuestion19');
	},
	'change #r19c2': function(event) {
		
		Session.set('reponseQuestion19', event.target.value);
		const reponseQuestion19 = Session.get('reponseQuestion19');
	},
	'input #pharmacieReseauxSociauxDate': function(event){
		
		Session.set('pharmacieMarque', event.target.value);
		const reponseQuestion19ReseauxSociauxDate = Session.get('pharmacieMarque');
	}
});

Template.question20.helpers({
	text: '20. Faites-vous partie d\'un groupement d\'achat ?'
});

Template.reponse19.events({
	'change #r20c1': function(event) {
		
		Session.set('reponseQuestion20', event.target.value);
		const reponseQuestion20 = Session.get('reponseQuestion20');
	},
	'change #r20c2': function(event) {
		
		Session.set('reponseQuestion20', event.target.value);
		const reponseQuestion20 = Session.get('reponseQuestion20');
	},
	'input #pharmacieReseauxSociauxDate': function(event){
		
		Session.set('reponseQuestion20Groupement', event.target.value);
		const reponseQuestion20Groupement = Session.get('reponseQuestion20Groupement');
	}
});

Template.question21.helpers({
	text: '21. Le type d\'officine ?'
});

Template.reponse21.events({
	'change select': function(event) {	
		Session.set('reponseQuestion21', event.target.value);
		const reponseQuestion21 = Session.get('reponseQuestion21');
	}
});

Template.question22.helpers({
	text: '22. Votre officine est-elle dans une zone touristique ?'
});

Template.reponse22.events({
	'change input': function(event) {
		
		Session.set('reponseQuestion22', event.target.value);
		const reponseQuestion22 = Session.get('reponseQuestion22');
	}
});

Template.question23.helpers({
	text: '23. Dans quelle région se situe votre officine ?'
});

Template.reponse23.events({
	'change select': function(event) {	
		Session.set('reponseQuestion23', event.target.value);
		const reponseQuestion23 = Session.get('reponseQuestion23');
	}
});

Template.question24.helpers({
	text: '24. Dans votre officine la connexion à internet se fait par :'
});

Template.reponse24.events({
	'change input': function(event) {
		
		Session.set('reponseQuestion24', event.target.value);
		const reponseQuestion24 = Session.get('reponseQuestion24');
	}
});

Template.question25.helpers({
	text: '25. Nombre de poste informarique ou d\'affichage :'
});

Template.reponse25.events({
	'input #nbPostesComptoir': function(event) {
		
		Session.set('reponseQuestion25nbPostesComptoir', event.target.value);
		const reponseQuestion25nbPostesComptoir = Session.get('reponseQuestion25nbPostesComptoir');
	},
	'input #nbPostesBackOffice': function(event) {
		
		Session.set('reponseQuestion25nbPostesBackOffice', event.target.value);
		const reponseQuestion25nbPostesBackOffice = Session.get('reponseQuestion25nbPostesBackOffice');
	},
	'input #nbPostesBureautique': function(event) {
		
		Session.set('reponseQuestion25nbPostesBureautique', event.target.value);
		const reponseQuestion25nbPostesBureautique = Session.get('reponseQuestion25nbPostesBureautique');
	},
	'input #nbEcrans': function(event) {
		
		Session.set('reponseQuestion25nbEcrans', event.target.value);
		const reponseQuestion25nbEcrans = Session.get('reponseQuestion25nbEcrans');
	}
});

Template.question26.helpers({
	text: '26. Nom de votre Logiciel de Gestion d\'Officine'
});

Template.reponse26.events({
	'change select': function(event) {	
		Session.set('reponseQuestion26', event.target.value);
		const reponseQuestion26 = Session.get('reponseQuestion26');
	},
	'input input': function(event) {
		Session.set('reponseQuestion26Autre', event.target.value);
		const reponseQuestion26autreLogicielGestionOfficine = Session.get('reponseQuestion26Autre');
	}
});

Template.question27.helpers({
	text: '27. Vos heures d\'ouverture'
});

Template.reponse27.events({
	'change select': function(event) {	
		Session.set('reponseQuestion27', event.target.value);
		const reponseQuestion27 = Session.get('reponseQuestion27');
	}
});

Template.question28.helpers({
	text: '28. Nombre de clients par jour moyen'
});

Template.reponse28.events({
	'change select': function(event) {	
		Session.set('reponseQuestion28', event.target.value);
		const reponseQuestion28 = Session.get('reponseQuestion28');
	}
});

Template.question29.helpers({
	text: '29. Répartition de votre chiffre d\'affaires :'
});

Template.reponse29.events({
	'input #specialites_et_ordonnancesCA': function(event) {
		
		Session.set('reponseQuestion29specialites_et_ordonnancesCA', event.target.value);
		const reponseQuestion29specialites_et_ordonnancesCA = Session.get('reponseQuestion29specialites_et_ordonnancesCA');
	},
	'input #medication_et_nutritionCA': function(event) {
		
		Session.set('reponseQuestion29medication_et_nutritionCA', event.target.value);
		const reponseQuestion29medication_et_nutritionCA = Session.get('reponseQuestion29medication_et_nutritionCA');
	},
	'input #parapharmacie_et_lppCA': function(event) {
		
		Session.set('reponseQuestion29parapharmacie_et_lppCA', event.target.value);
		const reponseQuestion29parapharmacie_et_lppCA = Session.get('reponseQuestion29parapharmacie_et_lppCA');
	},
});