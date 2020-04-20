$(document).ready(
  function() {
    $("#terminal").focus();
    result = '<br>';
  }
)

$(document).keyup(
  function(e) {
    if (e.keyCode == 13) {
      var result = $('#label').html();
      var root = "C:\\kevingrillet>";
      var tmp = $("#terminal").val().toUpperCase();
      root = root + tmp;
      $('#terminal').val('');
      result = result + root;

      switch (tmp) {
        case 'AIDE':
          result = result + '<br>	AIDE &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp Affiche la liste des commandes disponibles.<br>\
										CONTACT &nbsp&nbsp&nbsp&nbsp&nbsp Affiche les moyens de contact.<br>\
										COMPETENCES &nbsp Affiche les compétences.<br>\
										DIPLOMES &nbsp&nbsp&nbsp&nbsp Affiche les diplomes.<br>\
										ETATCIVIL &nbsp&nbsp&nbsp Affiche les informations civil.<br>\
										EXPERIENCE &nbsp&nbsp Affiche les expériences.<br>\
										EFFACER &nbsp&nbsp&nbsp&nbsp&nbsp Efface la console.<br>\
										LIENS &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp Afficher les liens sociaux.<br>\
										PROJETS &nbsp&nbsp&nbsp&nbsp&nbsp Affiche une liste des projets sur lesquelles le créateur du site a travaillé.<br>';
          break;

        case 'CONTACT':
          result = result + '<br>	Dijon, 21000 -- France<br>';
          break;

        case 'COMPETENCES':
          result = result + '<br>	LANGUES PARLEES:<br>\
											&nbsp&nbspFrancais: Ecrit & Oral (Langue maternelle)<br>\
											&nbsp&nbspAnglais: Ecrit & Oral<br>\
										LANGAGES INFORMATIQUES:<br>\
											&nbsp&nbspC, C++, C#, JAVA, HTML, CSS, Javascript, PHP, MySQL/SQL SERVER, ORACLE<br>\
										LOGICIELS UTILISES:<br>\
											&nbsp&nbspNotepad++, Sublime Text, SQL Developer, Eclipse<br>\
										METIER DE LA RECETTE:<br>\
											&nbsp&nbspOutil de recette: HP Quality center 11.0, etude et analyse de spécifications fonctionnelles, conception de plan de test, rédaction et gestion du suivi de fiche d\'anomalies<br>';
          break;

        case 'DIPLOMES':
          result = result + '<br>	2011/2013: Diplôme Universitaire de Technologie d\'Informatique<br>';
          break;

        case 'ETATCIVIL':
          var birthday = +new Date('1992-07-21');
          var age = ((Date.now() - birthday) / (31557600000));
          result = result + '<br>	PRENOM: Kévin<br>\
										NOM: GRILLET<br>\
										PROFESSION: Analyste Programmeur<br>\
										AGE: ' + age.toFixed() + ' ans<br>\
										NATIONALITÉ: Française<br>\
										SITUATION FAMILIALE: Célibataire<br>\
										PERMIS: B<br>';
          break;

        case 'EXPERIENCE':
          result = result + '<br>	Juillet 2013 - Septembre 2014:<br>\
											&nbsp&nbspAnalyste Programmeur chez Apside<br>\
												&nbsp&nbsp&nbsp&nbspPrestation chez Orange: Recette du nouveau portail Web (Juin 2014 - Septembre 2014)<br>\
												&nbsp&nbsp&nbsp&nbspPrestation chez Canal+: Recettes des différentes application du domaine de la PUB.(Juillet 2013 - Avril 2014)<br>';
          break;

        case 'EFFACER':
          result = '';
          break;

        case 'LIENS':
          result = result + '<br> <a href="https://fr.linkedin.com/pub/kévin-grillet/62/b95/1a4" onclick="window.open(this.href); return false;">LinkedIn &larr;</a><br>\
										<a href="https://github.com/kevingrillet" onclick="window.open(this.href); return false;">GitHub &larr;</a><br>\
										<a href="https://plus.google.com/u/0/+KévinGrillet/" onclick="window.open(this.href); return false;">Google+ &larr;</a><br>';
          break;

        case 'PROJETS':
          result = result + '<br>	Réalisation de divers model de CV.<br>\
										Minijeux en Javascript<br>\
										Projets scolaires:<br>\
											&nbsp&nbspPicross en Java<br>\
											&nbsp&nbspWargame en Java<br>';
          break;

        case 'EXIT':
          void window.close();
          break;

        case '':
          result = result;
          break;

        default:
          result = result + '<br>' + tmp + ' n\'est pas reconnu en tant que commande.<br>';
          break;
      }

      result = result + '<br>';
      $('#label').html(result);
      $('html, body').animate({
        scrollTop: $("#terminal").offset().top
      }, 1);
    }
  }
)